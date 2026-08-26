// mastery.js — advancing concepts through Exposure -> Understanding -> Hands-on ->
// Troubleshooting -> Interview Ready -> Mastered, per the roadmap's Completion Rule.
const MASTERY_STEPS = [
  { key: 'exposure', level: 1, xpLabel: 'Concept Exposure', status: 'learning', buttonLabel: 'Mark Exposure' },
  { key: 'understanding', level: 2, xpLabel: 'Concept Understanding', status: 'practicing', buttonLabel: 'Mark Understanding Complete' },
  { key: 'handson', level: 3, xpLabel: 'Hands-on Lab', status: 'practicing', buttonLabel: 'Mark Hands-on Complete' },
  { key: 'troubleshooting', level: 4, xpLabel: 'Troubleshooting Challenge', status: 'troubleshooting', buttonLabel: 'Start Troubleshooting' },
  { key: 'interview', level: 5, xpLabel: 'Interview Checkpoint', status: 'interview_ready', buttonLabel: 'Start Interview Checkpoint' }
];

const Mastery = {
  getProgress(conceptId) {
    return AppState.data.concepts[conceptId];
  },

  findConceptMeta(conceptId) {
    for (const q of R.quests) {
      const c = q.concepts.find(cc => cc.id === conceptId);
      if (c) return { concept: c, quest: q };
    }
    return null;
  },

  // Advance one mastery step. Returns {ok, message}
  advanceStep(conceptId, stepKey) {
    const prog = this.getProgress(conceptId);
    if (!prog) return { ok: false, message: 'Unknown concept.' };
    const stepIndex = MASTERY_STEPS.findIndex(s => s.key === stepKey);
    const step = MASTERY_STEPS[stepIndex];
    if (!step) return { ok: false, message: 'Unknown step.' };

    // Enforce sequential progression — can't skip ahead (respects the roadmap's philosophy)
    if (stepIndex > 0 && prog.mastery < MASTERY_STEPS[stepIndex - 1].level) {
      return { ok: false, message: `Complete "${MASTERY_STEPS[stepIndex - 1].xpLabel}" first.` };
    }
    if (prog.awarded[step.key]) {
      return { ok: false, message: 'Already completed — no duplicate XP awarded.' };
    }

    const xpAmount = XP.getActivityXP(step.xpLabel);
    XP.award(step.xpLabel, xpAmount, `concept:${conceptId}:${step.key}`, conceptId);
    prog.awarded[step.key] = true;
    prog.mastery = Math.max(prog.mastery, step.level);
    prog.status = step.status;
    prog.lastPracticed = todayISO();
    AppState.persist();

    Streaks.markActivity('learning');
    if (step.key === 'handson') Streaks.markActivity('lab');

    Events.emit('concept:advanced', { conceptId, step: step.key });
    Achievements.checkAll();
    Quests.recomputeUnlocks();
    return { ok: true, message: `+${xpAmount} XP — ${step.xpLabel} complete.` };
  },

  // Mastered requires every prior step done AND at least one piece of evidence recorded.
  canMarkMastered(conceptId) {
    const prog = this.getProgress(conceptId);
    if (!prog) return { ok: false, reason: 'Unknown concept.' };
    const allSteps = MASTERY_STEPS.every(s => prog.awarded[s.key]);
    if (!allSteps) return { ok: false, reason: 'Complete Exposure through Interview Ready first.' };
    const hasEvidence = !!(prog.evidence.githubUrl || prog.evidence.notes || prog.evidence.labEvidence || prog.evidence.screenshotUrl);
    if (!hasEvidence) return { ok: false, reason: 'Add evidence (GitHub URL, notes, lab evidence, or a screenshot link) before marking Mastered.' };
    return { ok: true };
  },

  markMastered(conceptId) {
    const check = this.canMarkMastered(conceptId);
    if (!check.ok) return { ok: false, message: check.reason };
    const prog = this.getProgress(conceptId);
    prog.mastery = 6;
    prog.status = 'mastered';
    prog.lastPracticed = todayISO();
    AppState.persist();
    Events.emit('concept:mastered', { conceptId });
    Achievements.checkAll();
    Quests.recomputeUnlocks();
    Revision.removeConcept(conceptId);
    return { ok: true, message: 'Concept mastered.' };
  },

  markNeedsReview(conceptId, reason) {
    const prog = this.getProgress(conceptId);
    if (!prog) return;
    prog.status = 'needs_review';
    AppState.persist();
    Revision.addConcept(conceptId, reason || 'Marked weak by user');
  },

  statusEmoji(status) {
    return ({
      locked: '🔒', learning: '🟡', practicing: '🔵', troubleshooting: '🟠',
      interview_ready: '🟣', mastered: '🟢', needs_review: '🔴'
    })[status] || '🔒';
  },

  nextStepFor(conceptId) {
    const prog = this.getProgress(conceptId);
    if (!prog) return null;
    if (prog.mastery >= 6) return null;
    return MASTERY_STEPS.find(s => s.level === prog.mastery + 1) || null;
  }
};
