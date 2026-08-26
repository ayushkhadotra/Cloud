// xp.js — the single place XP is ever added to the ledger
const XP = {
  // Returns true if awarded, false if this exact dedupeKey was already awarded (no duplicate XP).
  award(activity, amount, dedupeKey, ref) {
    const s = AppState.data;
    const already = s.xpLedger.some(row => row.dedupeKey === dedupeKey);
    if (already) return false;
    const row = {
      id: dedupeKey,
      dedupeKey,
      date: new Date().toISOString(),
      activity,
      xp: amount,
      ref: ref || null
    };
    s.xpLedger.push(row);
    s.xp += amount;
    AppState.persist();
    Events.emit('xp:awarded', row);
    return true;
  },

  getActivityXP(label) {
    const row = R.xpTable.find(r => r.activity.toLowerCase().includes(label.toLowerCase()));
    return row ? row.xp : 0;
  },

  currentLevel() {
    const xp = AppState.data.xp;
    let current = R.levels[0];
    for (const lvl of R.levels) {
      if (xp >= lvl.xpRequired) current = lvl;
    }
    return current;
  },

  nextLevel() {
    const cur = this.currentLevel();
    return R.levels.find(l => l.level === cur.level + 1) || null;
  },

  progressToNextLevel() {
    const cur = this.currentLevel();
    const next = this.nextLevel();
    const xp = AppState.data.xp;
    if (!next) return { pct: 100, xpIntoLevel: xp - cur.xpRequired, xpForLevel: 0 };
    const span = next.xpRequired - cur.xpRequired;
    const into = xp - cur.xpRequired;
    return { pct: Math.min(100, Math.round((into / span) * 100)), xpIntoLevel: into, xpForLevel: span, xpToGo: next.xpRequired - xp };
  }
};

// Simple pub/sub so modules can react to state changes without tight coupling
const Events = (() => {
  const handlers = {};
  return {
    on(evt, fn) { (handlers[evt] = handlers[evt] || []).push(fn); },
    emit(evt, payload) { (handlers[evt] || []).forEach(fn => fn(payload)); }
  };
})();
