// storage.js — localStorage persistence, validation, import/export
const STORAGE_KEY = 'cerpg_progress_v1';
const STORAGE_VERSION = 1;

const Storage = {
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || !parsed.meta) {
        console.warn('Corrupted save detected — ignoring and starting fresh.');
        return null;
      }
      return parsed;
    } catch (e) {
      console.warn('Failed to parse saved progress, starting fresh.', e);
      return null;
    }
  },

  save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      console.error('Failed to save progress', e);
      return false;
    }
  },

  exportJSON(state) {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `cloud-engineering-rpg-progress-${date}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  validateImported(obj) {
    if (!obj || typeof obj !== 'object') return { ok: false, reason: 'Not a valid JSON object.' };
    if (typeof obj.xp !== 'number') return { ok: false, reason: 'Missing or invalid "xp" field.' };
    if (typeof obj.concepts !== 'object') return { ok: false, reason: 'Missing "concepts" field.' };
    if (typeof obj.quests !== 'object') return { ok: false, reason: 'Missing "quests" field.' };
    return { ok: true };
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
};
