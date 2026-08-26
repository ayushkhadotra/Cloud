// app.js — bootstraps the app and wires all interactions
function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}
function setByPath(obj, path, value) {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] == null) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
}

function saveField(path, value) {
  const s = AppState.data;
  if (path.startsWith('jobHunt.byId.')) {
    const rest = path.slice('jobHunt.byId.'.length);
    const [id, ...fieldParts] = rest.split('.');
    const job = s.jobHunt.find(j => j.id === id);
    if (job) setByPath(job, fieldParts.join('.'), value);
  } else {
    setByPath(s, path, value);
  }
  AppState.persist();
}

function checkLevelUp() {
  const s = AppState.data;
  const level = XP.currentLevel();
  const lastSeen = s.meta.lastSeenLevel || 1;
  if (level.level > lastSeen) {
    s.meta.lastSeenLevel = level.level;
    AppState.persist();
    showLevelUp(level);
  }
}

function newId() {
  return 'id-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// ---------- Event: XP awarded ----------
Events.on('xp:awarded', row => {
  xpPopup(row.xp, row.activity);
  checkLevelUp();
});
Events.on('achievement:unlocked', a => achievementToast(a));

// ---------- Central click delegation ----------
function wireEvents() {
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (!el) {
      if (e.target.closest('.modal-backdrop') === e.target) closeModal();
      return;
    }
    if (el.tagName === 'SELECT') return; // selects are driven by the 'change' listener instead
    const action = el.dataset.action;
    handleAction(action, el, e);
  });

  document.addEventListener('change', e => {
    const el = e.target;
    // <select> dropdowns don't reliably fire a bubbling 'click' when an option is chosen,
    // so data-action selects are driven from 'change' instead of the click delegate below.
    if (el.tagName === 'SELECT' && el.dataset.action) {
      handleAction(el.dataset.action, el);
      return;
    }
    if (el.matches('[data-save]')) {
      let value = el.value;
      if (el.dataset.numeric) value = Number(value) || 0;
      saveField(el.dataset.save, value);
      toast('Saved', 'info');
      // Some fields (e.g. concept evidence) change whether action buttons should be
      // enabled, so re-render rather than leaving stale disabled/enabled states on screen.
      if (el.dataset.rerender !== 'false') Router.render();
    }
    if (el.id === 'import-file') handleImportFile(el.files[0]);
  });

  window.addEventListener('hashchange', () => Router.render());

  document.addEventListener('input', e => {
    if (e.target.id === 'global-search') {
      clearTimeout(window.__searchDebounce);
      const q = e.target.value;
      window.__searchDebounce = setTimeout(() => {
        if (q.trim()) Router.go('search', q);
      }, 250);
    }
  });

  document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });
  document.getElementById('sidebar').addEventListener('click', e => {
    if (e.target.closest('.nav-item')) document.getElementById('sidebar').classList.remove('open');
  });
}

function handleAction(action, el) {
  const s = AppState.data;
  switch (action) {
    case 'close-modal': closeModal(); break;

    case 'continue-quest': {
      const conceptId = el.dataset.concept;
      if (conceptId) Router.go('concept', conceptId);
      else Router.go('quest', el.dataset.quest);
      break;
    }

    case 'toggle-quest-flag':
      Quests.toggleQuestFlag(el.dataset.quest, el.dataset.flag);
      Router.render();
      break;

    case 'advance-concept': {
      const result = Mastery.advanceStep(el.dataset.concept, el.dataset.step);
      toast(result.message, result.ok ? 'success' : 'warn');
      Router.render();
      break;
    }

    case 'mark-mastered': {
      const result = Mastery.markMastered(el.dataset.concept);
      toast(result.message, result.ok ? 'success' : 'warn');
      Router.render();
      break;
    }

    case 'mark-needs-review':
      Mastery.markNeedsReview(el.dataset.concept, 'Manually flagged from concept page');
      toast('Added to Revision Queue.', 'info');
      Router.render();
      break;

    case 'defeat-boss': {
      const textarea = document.getElementById('boss-evidence');
      const result = Bosses.defeat(el.dataset.boss, textarea ? textarea.value : '');
      if (!result.ok) toast(result.message || 'Could not defeat boss.', 'warn');
      Router.render();
      break;
    }

    case 'set-project-status':
      Projects.setStatus(el.dataset.project, el.value);
      Router.render();
      break;

    case 'set-cert-status': {
      const cp = s.certifications[el.dataset.cert];
      const prev = cp.status;
      cp.status = el.value;
      if (el.value === 'passed' && prev !== 'passed') {
        const cert = R.certifications.find(c => c.name === el.dataset.cert);
        XP.award(`Certification passed: ${cert.name}`, cert.xpOnPass, `cert:${cert.name}:passed`, cert.name);
        Achievements.checkAll();
      }
      AppState.persist();
      break;
    }

    case 'set-job-status': {
      const job = s.jobHunt.find(j => j.id === el.dataset.job);
      if (!job) break;
      const prevStatus = job.status;
      job.status = el.value;
      AppState.persist();
      awardJobStatusXP(job, prevStatus);
      Achievements.checkAll();
      break;
    }

    case 'review-now':
      Revision.reviewNow(el.dataset.concept);
      Router.render();
      break;

    case 'toggle-daily-objective':
      toggleDailyObjective(el.dataset.key);
      Router.render();
      break;

    case 'add-weekly-objective':
      s.weeklyMission.objectives.push({ text: '', done: false });
      AppState.persist();
      Router.render();
      break;

    case 'toggle-weekly-objective': {
      const obj = s.weeklyMission.objectives[el.dataset.index];
      if (obj) obj.done = !obj.done;
      AppState.persist();
      Router.render();
      break;
    }

    case 'finalize-week':
      finalizeWeek();
      Router.render();
      break;

    case 'add-log-row':
      if (el.dataset.log === 'weekly') {
        s.logs.weekly.push({ week: String(s.logs.weekly.length + 1), hours: '', focus: '', labProject: '', whatBroke: '', whatLearned: '', evidence: '' });
      } else {
        s.logs.troubleshooting.push({ date: todayISO(), system: '', symptom: '', rootCause: '', fix: '', lesson: '', evidence: '' });
      }
      AppState.persist();
      Router.render();
      break;

    case 'add-postmortem':
      s.interviewPostMortems.push({ question: '', tested: '', toLearn: '', toBuild: '', toRevise: '', revisitDate: '' });
      AppState.persist();
      Router.render();
      break;

    case 'add-job':
      s.jobHunt.push({ id: newId(), company: '', role: '', location: '', date: todayISO(), status: 'preparing', resumeVersion: '', referral: '', interviewResult: '', weakArea: '', followUp: '' });
      AppState.persist();
      Router.render();
      break;

    case 'delete-job':
      s.jobHunt = s.jobHunt.filter(j => j.id !== el.dataset.job);
      AppState.persist();
      Router.render();
      break;

    case 'export-progress':
      Storage.exportJSON(s);
      toast('Progress exported.', 'success');
      break;

    case 'reset-progress':
      if (confirm('This will permanently erase all local progress. Export a backup first. Continue?')) {
        AppState.reset();
        toast('Progress reset.', 'info');
        Router.go('dashboard');
        Router.render();
      }
      break;

    case 'toggle-theme':
      s.settings.theme = el.checked ? 'light' : 'dark';
      applyTheme();
      AppState.persist();
      break;

    case 'toggle-reduced-motion':
      s.settings.reducedMotion = el.checked;
      applyTheme();
      AppState.persist();
      break;

    case 'search-skill':
      Router.go('search', el.dataset.skill);
      break;

    case 'nav':
      Router.go(el.dataset.nav);
      break;
  }
}

function toggleDailyObjective(key) {
  const dq = AppState.data.dailyQuest;
  const def = DAILY_OBJECTIVES.find(o => o.key === key);
  const turningOn = !dq.objectives[key];
  dq.objectives[key] = turningOn;
  if (turningOn) {
    if (def.flatXp) {
      const awarded = XP.award(`Daily: ${def.label}`, def.flatXp, `daily:${todayISO()}:${key}`, key);
      if (awarded) dq.xpEarnedToday += def.flatXp;
    } else {
      dq.xpEarnedToday += 0; // exposure/lab XP is awarded on the concept page itself, not double-counted here
    }
    if (key === 'githubEvidence') Streaks.markActivity('github');
    if (key === 'technicalNote') Streaks.markActivity('docs');
  }
  AppState.persist();
}

function awardJobStatusXP(job, prevStatus) {
  const XP_BY_STATUS = { applied: 10, oa: 25, technical: 100, system_design: 100, hr: 25, offer: 1000 };
  const amount = XP_BY_STATUS[job.status];
  if (amount && job.status !== prevStatus) {
    XP.award(`Job hunt: ${JOB_STATUS_LABEL[job.status]}`, amount, `job:${job.id}:${job.status}`, job.id);
  }
}

function finalizeWeek() {
  const s = AppState.data;
  const wm = s.weeklyMission;
  const weekEntries = s.xpLedger.filter(r => new Date(r.date) >= new Date(wm.weekStart));
  const report = {
    weekStart: wm.weekStart,
    weekEnd: todayISO(),
    xpEarned: weekEntries.reduce((sum, r) => sum + r.xp, 0),
    conceptsCompleted: weekEntries.filter(r => r.activity.includes('Understanding')).length,
    labsCompleted: weekEntries.filter(r => r.activity.includes('Hands-on')).length,
    bossesDefeated: weekEntries.filter(r => r.activity.startsWith('Boss defeated')).length
  };
  s.weeklyReports.push(report);
  wm.weekStart = todayISO();
  wm.objectives = [];
  AppState.persist();
}

function handleImportFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const check = Storage.validateImported(parsed);
      if (!check.ok) { toast('Import failed: ' + check.reason, 'warn'); return; }
      if (confirm('Importing will replace your current progress. Continue?')) {
        AppState.replaceAll(parsed);
        toast('Progress imported.', 'success');
        Router.render();
      }
    } catch (e) {
      toast('Import failed: invalid JSON file.', 'warn');
    }
  };
  reader.readAsText(file);
}

function applyTheme() {
  document.body.classList.toggle('theme-light', AppState.data.settings.theme === 'light');
  document.body.classList.toggle('reduced-motion', !!AppState.data.settings.reducedMotion);
}

// ---------- Boot ----------
function boot() {
  AppState.init();
  Streaks.checkExpiry();
  Revision.sweepStale();
  Quests.recomputeUnlocks();
  Achievements.checkAll();
  AppState.data.meta.lastSeenLevel = AppState.data.meta.lastSeenLevel || XP.currentLevel().level;
  AppState.persist();
  applyTheme();

  document.getElementById('nav-root').innerHTML = renderNav();
  wireEvents();
  Router.render();
}

document.addEventListener('DOMContentLoaded', boot);
