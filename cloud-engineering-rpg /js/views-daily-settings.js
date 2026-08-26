// views-daily-settings.js — daily quest, weekly mission, settings
const DAILY_OBJECTIVES = [
  { key: 'learnConcept', label: 'Learn one concept', xpLabel: 'Concept Exposure' },
  { key: 'completeLab', label: 'Complete one lab', xpLabel: 'Hands-on Lab' },
  { key: 'troubleshooting', label: 'Solve one troubleshooting challenge', xpLabel: 'Troubleshooting Challenge' },
  { key: 'technicalNote', label: 'Write one technical note', xpLabel: null, flatXp: 10 },
  { key: 'githubEvidence', label: 'Commit evidence to GitHub', xpLabel: null, flatXp: 10 }
];

function renderDailyQuestPage() {
  ensureDailyQuestFresh();
  const dq = AppState.data.dailyQuest;
  const done = Object.values(dq.objectives).filter(Boolean).length;
  return `
  <div class="page">
    <h1>🧪 TODAY'S QUEST</h1>
    <div class="mono dim">${dq.date}</div>
    <div class="card">
      <div class="mono">${blockBar((done / DAILY_OBJECTIVES.length) * 100, 10)} ${done}/${DAILY_OBJECTIVES.length}</div>
      ${DAILY_OBJECTIVES.map(o => `
        <label class="check-row ${dq.objectives[o.key] ? 'done' : ''}">
          <input type="checkbox" ${dq.objectives[o.key] ? 'checked' : ''} data-action="toggle-daily-objective" data-key="${o.key}">
          <span>${o.label}</span>
        </label>`).join('')}
      <div class="mono dim">XP earned today: +${dq.xpEarnedToday}</div>
      <p class="dim small">Note: ticking "Learn one concept" or "Complete one lab" here only logs the daily habit — go to the concept's page to actually advance its mastery and earn concept XP. Technical note and GitHub evidence award a flat +10 XP each, once per day.</p>
    </div>
  </div>`;
}

function renderWeeklyMissionPage() {
  const wm = AppState.data.weeklyMission;
  const s = AppState.data;
  const xpThisWeek = s.xpLedger.filter(r => new Date(r.date) >= new Date(wm.weekStart)).reduce((sum, r) => sum + r.xp, 0);
  return `
  <div class="page">
    <h1>📅 Weekly Mission</h1>
    <div class="card">
      <div class="mono dim">Week starting ${wm.weekStart}</div>
      <div class="grid two-col">
        <div><label class="field-label">XP Target</label><input type="number" class="text-input" value="${wm.xpTarget}" data-save="weeklyMission.xpTarget" data-numeric="1"></div>
        <div><label class="field-label">Concept Target</label><input type="number" class="text-input" value="${wm.conceptTarget}" data-save="weeklyMission.conceptTarget" data-numeric="1"></div>
        <div><label class="field-label">Lab Target</label><input type="number" class="text-input" value="${wm.labTarget}" data-save="weeklyMission.labTarget" data-numeric="1"></div>
        <div><label class="field-label">Project Target</label><input type="number" class="text-input" value="${wm.projectTarget}" data-save="weeklyMission.projectTarget" data-numeric="1"></div>
        <div><label class="field-label">Certification Target</label><input type="number" class="text-input" value="${wm.certTarget}" data-save="weeklyMission.certTarget" data-numeric="1"></div>
      </div>
      <div class="mono">${blockBar(wm.xpTarget ? Math.min(100, (xpThisWeek / wm.xpTarget) * 100) : 0)} ${xpThisWeek} / ${wm.xpTarget || '—'} XP this week</div>
    </div>
    <div class="card">
      <div class="phase-header"><div class="section-label">Objectives</div><button class="btn btn-secondary btn-sm" data-action="add-weekly-objective">+ Add</button></div>
      ${wm.objectives.map((obj, i) => `
        <label class="check-row ${obj.done ? 'done' : ''}">
          <input type="checkbox" ${obj.done ? 'checked' : ''} data-action="toggle-weekly-objective" data-index="${i}">
          <input type="text" class="text-input inline" value="${escapeHtml(obj.text)}" data-save="weeklyMission.objectives.${i}.text" placeholder="Objective...">
        </label>`).join('')}
    </div>
    <div class="card">
      <button class="btn btn-primary" data-action="finalize-week">Finalize Week → Weekly Report</button>
      <p class="dim small">Rolls this week's numbers into a report and starts a fresh week.</p>
    </div>
    ${s.weeklyReports.length ? `
    <div class="card">
      <div class="section-label">Past Weekly Reports</div>
      ${s.weeklyReports.slice().reverse().map(r => `
        <div class="subcard">
          <div class="mono dim">${r.weekStart} → ${r.weekEnd}</div>
          <div>XP earned: ${r.xpEarned} · Concepts: ${r.conceptsCompleted} · Labs: ${r.labsCompleted} · Bosses: ${r.bossesDefeated}</div>
        </div>`).join('')}
    </div>` : ''}
  </div>`;
}

function renderSettings() {
  const settings = AppState.data.settings;
  return `
  <div class="page">
    <h1>⚙️ Settings</h1>
    <div class="card">
      <div class="section-label">Appearance</div>
      <label class="check-row"><input type="checkbox" ${settings.theme === 'light' ? 'checked' : ''} data-action="toggle-theme"><span>Light theme</span></label>
      <label class="check-row"><input type="checkbox" ${settings.reducedMotion ? 'checked' : ''} data-action="toggle-reduced-motion"><span>Reduce animations</span></label>
    </div>
    <div class="card">
      <div class="section-label">Backup</div>
      <button class="btn btn-secondary" data-action="export-progress">⬇️ Export Progress (JSON)</button>
      <label class="btn btn-secondary" style="display:inline-block;cursor:pointer;">⬆️ Import Progress
        <input type="file" accept="application/json" id="import-file" style="display:none;">
      </label>
    </div>
    <div class="card">
      <div class="section-label">Danger Zone</div>
      <button class="btn btn-warn" data-action="reset-progress">Reset All Progress</button>
      <p class="dim small">This permanently clears all local progress. Export a backup first.</p>
    </div>
  </div>`;
}
