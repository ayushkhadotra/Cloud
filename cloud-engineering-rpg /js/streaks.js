// streaks.js — real date-based streaks, no faking
function daysBetween(aISO, bISO) {
  const a = new Date(aISO + 'T00:00:00');
  const b = new Date(bISO + 'T00:00:00');
  return Math.round((b - a) / 86400000);
}

const Streaks = {
  // key: 'learning' | 'lab' | 'github' | 'docs'
  markActivity(key) {
    const s = AppState.data.streaks[key];
    if (!s) return;
    const today = todayISO();
    if (s.lastDate === today) return; // already counted today
    if (s.lastDate) {
      const gap = daysBetween(s.lastDate, today);
      if (gap === 1) {
        s.current += 1;
      } else if (gap > 1) {
        s.current = 1; // missed a day — reset per roadmap's streak rules
      }
      // gap <= 0 (same day/out of order) leaves current unchanged
    } else {
      s.current = 1;
    }
    s.lastDate = today;
    s.longest = Math.max(s.longest, s.current);
    AppState.persist();
    Events.emit('streak:updated', { key, streak: s });
  },

  // Call once per app load to silently expire streaks whose lastDate is more than 1 day old.
  checkExpiry() {
    const today = todayISO();
    let changed = false;
    Object.keys(AppState.data.streaks).forEach(key => {
      const s = AppState.data.streaks[key];
      if (s.lastDate && daysBetween(s.lastDate, today) > 1 && s.current !== 0) {
        s.current = 0;
        changed = true;
      }
    });
    if (changed) AppState.persist();
  }
};
