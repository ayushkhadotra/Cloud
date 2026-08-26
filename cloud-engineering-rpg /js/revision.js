// revision.js — the revision queue: concepts that need another pass
const STALE_DAYS = 30;

const Revision = {
  addConcept(conceptId, reason) {
    const s = AppState.data;
    if (s.revisionQueue.some(r => r.conceptId === conceptId)) return;
    s.revisionQueue.push({
      conceptId,
      reason,
      addedDate: todayISO(),
      priority: 'medium'
    });
    AppState.persist();
    Events.emit('revision:added', { conceptId });
  },

  removeConcept(conceptId) {
    const s = AppState.data;
    const before = s.revisionQueue.length;
    s.revisionQueue = s.revisionQueue.filter(r => r.conceptId !== conceptId);
    if (s.revisionQueue.length !== before) AppState.persist();
  },

  // Sweep: find mastered/interview-ready concepts not practiced in STALE_DAYS and flag them.
  sweepStale() {
    const s = AppState.data;
    const today = todayISO();
    let changed = false;
    Object.entries(s.concepts).forEach(([id, prog]) => {
      if (prog.mastery >= 4 && prog.lastPracticed) {
        const gap = daysBetween(prog.lastPracticed, today);
        if (gap >= STALE_DAYS && !s.revisionQueue.some(r => r.conceptId === id)) {
          this.addConcept(id, `Not practiced in ${gap} days`);
          changed = true;
        }
      }
    });
    return changed;
  },

  list() {
    return AppState.data.revisionQueue.map(entry => {
      const meta = Mastery.findConceptMeta(entry.conceptId);
      const prog = AppState.data.concepts[entry.conceptId];
      return Object.assign({}, entry, {
        name: meta ? meta.concept.name : entry.conceptId,
        questName: meta ? meta.quest.name : '',
        mastery: prog ? prog.mastery : 0
      });
    });
  },

  reviewNow(conceptId) {
    const prog = AppState.data.concepts[conceptId];
    if (prog) {
      prog.lastPracticed = todayISO();
      if (prog.status === 'needs_review') prog.status = prog.mastery >= 6 ? 'mastered' : 'practicing';
    }
    this.removeConcept(conceptId);
    AppState.persist();
  }
};
