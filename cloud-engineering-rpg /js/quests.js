// quests.js — quest state machine, prerequisite/unlock enforcement, "what should I do now"
const Quests = {
  byId(id) { return R.quests.find(q => q.id === id); },

  progress(id) { return AppState.data.quests[id]; },

  // A quest is "conceptually complete" when every concept has reached Understanding (level 2)+
  // and the quest's own lab/troubleshooting/interview checks are ticked — mirrors the roadmap's
  // per-quest Completion Requirements block exactly.
  isComplete(questId) {
    const quest = this.byId(questId);
    const qp = this.progress(questId);
    if (!quest || !qp) return false;
    const conceptsOk = quest.concepts.every(c => AppState.data.concepts[c.id].mastery >= 2);
    return conceptsOk && qp.labCompleted && qp.troubleshootingCompleted && qp.interviewCompleted;
  },

  completionChecklist(questId) {
    const quest = this.byId(questId);
    const qp = this.progress(questId);
    const conceptsOk = quest.concepts.every(c => AppState.data.concepts[c.id].mastery >= 2);
    const doneCount = quest.concepts.filter(c => AppState.data.concepts[c.id].mastery >= 2).length;
    return [
      { label: `All ${quest.concepts.length} concepts reached at least Understanding (${doneCount}/${quest.concepts.length})`, done: conceptsOk },
      { label: 'Hands-on lab completed for the session\'s core concepts', done: qp.labCompleted },
      { label: 'Troubleshooting challenge completed', done: qp.troubleshootingCompleted },
      { label: 'Interview checkpoint questions answered for this phase', done: qp.interviewCompleted }
    ];
  },

  toggleQuestFlag(questId, flag) {
    const qp = this.progress(questId);
    if (!qp) return;
    qp[flag] = !qp[flag];
    AppState.persist();
    this.recomputeUnlocks();
  },

  // Recompute active/complete/locked status for all quests, unlock the next quest in sequence
  // when the previous one is complete, award the quest's XP once, unlock phase bosses, and
  // refresh achievements/revision.
  recomputeUnlocks() {
    const s = AppState.data;
    let changed = false;
    R.quests.forEach((quest, idx) => {
      const qp = s.quests[quest.id];
      const prevDone = idx === 0 ? true : this.isComplete(R.quests[idx - 1].id);
      if (prevDone && qp.status === 'locked') { qp.status = 'active'; changed = true; }
      if (this.isComplete(quest.id)) {
        if (qp.status !== 'complete') { qp.status = 'complete'; changed = true; }
        if (!qp.xpAwarded) {
          XP.award(`Quest complete: ${quest.name}`, quest.xpAvailable, `quest:${quest.id}:complete`, quest.id);
          qp.xpAwarded = true;
          changed = true;
        }
      } else if (qp.status === 'complete') {
        // shouldn't normally happen, but keep state honest if user un-checks something
        qp.status = 'active';
      }
    });

    Bosses.recomputeUnlocks();
    Projects.recomputeUnlocks();
    if (changed) AppState.persist();
    if (changed) Achievements.checkAll();
    return changed;
  },

  phaseComplete(phaseId) {
    const phase = R.phases.find(p => p.id === phaseId);
    if (!phase) return false;
    return phase.questIds.every(qid => this.isComplete(qid));
  },

  // "What should I do now?" — walks quests in order, finds the first incomplete one,
  // then the first concept inside it that hasn't reached Mastered.
  nextAction() {
    for (const quest of R.quests) {
      if (this.isComplete(quest.id)) continue;
      const concept = quest.concepts.find(c => AppState.data.concepts[c.id].mastery < 6);
      if (!concept) {
        // all concepts mastered but quest-level checks (lab/troubleshoot/interview) remain
        const checklist = this.completionChecklist(quest.id);
        const remaining = checklist.find(c => !c.done);
        return {
          quest, concept: null, stage: 'quest-checks',
          nextStep: remaining ? remaining.label : 'Review and finalize this quest.'
        };
      }
      const prog = AppState.data.concepts[concept.id];
      const step = Mastery.nextStepFor(concept.id);
      return {
        quest, concept, stage: prog.status,
        masteryLevel: prog.mastery,
        nextStep: step ? step.buttonLabel : 'Add evidence and mark Mastered.'
      };
    }
    return null; // entire roadmap complete
  }
};

const Bosses = {
  byName(name) { return AppState.data.bosses[name]; },

  recomputeUnlocks() {
    let changed = false;
    R.bosses.forEach(boss => {
      if (boss.phase == null) return; // final boss handled separately
      const bp = AppState.data.bosses[boss.name];
      if (bp.status === 'locked' && Quests.phaseComplete(boss.phase)) {
        bp.status = 'available';
        changed = true;
      }
    });
    if (changed) AppState.persist();
    return changed;
  },

  defeat(bossName, evidence) {
    const boss = R.bosses.find(b => b.name === bossName);
    const bp = AppState.data.bosses[bossName];
    if (!boss || !bp || bp.status === 'defeated') return { ok: false };
    if (bp.status === 'locked') return { ok: false, message: 'This boss is still locked.' };
    if (!evidence || !evidence.trim()) return { ok: false, message: 'Submit written evidence (incident report / write-up) before claiming victory.' };
    bp.status = 'defeated';
    bp.evidence = evidence;
    bp.defeatedDate = todayISO();
    XP.award(`Boss defeated: ${bossName}`, boss.xpReward, `boss:${bossName}`, bossName);
    AppState.persist();
    Achievements.checkAll();
    Events.emit('boss:defeated', { bossName });
    return { ok: true };
  }
};

// Best-effort mapping from a project's free-text "Prerequisites" string to quest numbers,
// so the portfolio can auto-suggest when a project becomes realistic to start. This is a
// helper, not a hard gate — the user can always update project status manually.
const Projects = {
  extractQuestNumbers(prereqText) {
    const nums = [];
    const rangeMatches = prereqText.matchAll(/(\d+)\s*-\s*(\d+)/g);
    for (const m of rangeMatches) {
      for (let i = +m[1]; i <= +m[2]; i++) nums.push(i);
    }
    if (nums.length === 0) {
      const singles = prereqText.matchAll(/Session\s+(\d+)/gi);
      for (const m of singles) nums.push(+m[1]);
    }
    const phaseMatch = prereqText.match(/Phase\s+(\d+)/i);
    if (phaseMatch) {
      const phase = R.phases.find(p => p.id === +phaseMatch[1]);
      if (phase) phase.questIds.forEach(qid => nums.push(Quests.byId(qid).number));
    }
    return [...new Set(nums)];
  },

  prerequisiteQuestsComplete(project) {
    const nums = this.extractQuestNumbers(project.prerequisites || '');
    if (nums.length === 0) return true;
    return nums.every(n => {
      const q = R.quests.find(qq => qq.number === n);
      return q ? Quests.isComplete(q.id) : true;
    });
  },

  recomputeUnlocks() {
    let changed = false;
    R.projects.forEach(project => {
      const pp = AppState.data.projects[project.name];
      if (pp.status === 'locked' && this.prerequisiteQuestsComplete(project)) {
        pp.status = 'available';
        changed = true;
      }
    });
    if (changed) AppState.persist();
    return changed;
  },

  setStatus(name, status) {
    const pp = AppState.data.projects[name];
    if (!pp) return;
    pp.status = status;
    AppState.persist();
    if (status === 'complete') {
      const project = R.projects.find(p => p.name === name);
      XP.award(`Project complete: ${name}`, project.xp, `project:${name}:complete`, name);
      Achievements.checkAll();
    }
  }
};
