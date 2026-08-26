// dashboard.js — home screen: level/rank/xp readout + Next Action
function blockBar(pct, width = 12) {
  const filled = Math.round((pct / 100) * width);
  return '█'.repeat(filled) + '░'.repeat(Math.max(0, width - filled));
}

function renderDashboard() {
  const s = AppState.data;
  const level = XP.currentLevel();
  const next = XP.nextLevel();
  const prog = XP.progressToNextLevel();
  const action = Quests.nextAction();
  const phase = action ? R.phases.find(p => p.id === action.quest.phaseId) : null;

  const conceptsMastered = Object.values(s.concepts).filter(c => c.mastery >= 6).length;
  const projectsDone = Object.values(s.projects).filter(p => p.status === 'complete').length;
  const certsDone = Object.values(s.certifications).filter(c => c.status === 'passed').length;
  const bossesDown = Object.values(s.bosses).filter(b => b.status === 'defeated').length;
  const applications = s.jobHunt.length;

  const nextBoss = R.bosses.find(b => s.bosses[b.name].status === 'available') ||
    R.bosses.find(b => s.bosses[b.name].status === 'locked');
  const nextCert = R.certifications.find(c => s.certifications[c.name].status !== 'passed');

  return `
  <div class="page dashboard">
    <div class="hud-header">
      <div class="hud-title">
        <span class="eyebrow">CLOUD ENGINEERING</span>
        <h1>RPG DASHBOARD</h1>
      </div>
      <div class="hud-level">
        <div class="level-badge">LV ${level.level}</div>
        <div class="rank-name">${level.rank}</div>
      </div>
    </div>

    <div class="card xp-card">
      <div class="xp-row">
        <span class="mono">${s.xp.toLocaleString()} XP</span>
        <span class="mono dim">${next ? `${prog.xpToGo.toLocaleString()} XP to ${next.rank}` : 'Max level reached'}</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:${prog.pct}%"></div></div>
      <div class="mono dim small">${blockBar(prog.pct)} ${prog.pct}%</div>
    </div>

    <div class="grid stat-grid">
      <div class="card stat"><span class="stat-label">Phase</span><span class="stat-value">${action ? `${action.quest.phaseId} — ${phase.name}` : 'Complete'}</span></div>
      <div class="card stat"><span class="stat-label">Quest</span><span class="stat-value">${action ? action.quest.name : '—'}</span></div>
      <div class="card stat"><span class="stat-label">Concept</span><span class="stat-value">${action && action.concept ? action.concept.name : '—'}</span></div>
      <div class="card stat"><span class="stat-label">Concepts Mastered</span><span class="stat-value">${conceptsMastered} / 350</span></div>
      <div class="card stat"><span class="stat-label">Projects</span><span class="stat-value">${projectsDone} / ${R.projects.length}</span></div>
      <div class="card stat"><span class="stat-label">Next Boss</span><span class="stat-value">${nextBoss ? nextBoss.name : 'All defeated'}</span></div>
      <div class="card stat"><span class="stat-label">Next Certification</span><span class="stat-value">${nextCert ? nextCert.name : 'All passed'}</span></div>
      <div class="card stat"><span class="stat-label">Job Applications</span><span class="stat-value">${applications}</span></div>
    </div>

    <div class="card next-action">
      <div class="section-label">⚔️ NEXT ACTION</div>
      ${action ? `
        <div class="next-action-grid">
          <div><span class="dim">Current Quest</span><div class="big">${action.quest.name}</div></div>
          ${action.concept ? `<div><span class="dim">Current Concept</span><div class="big">${action.concept.name}</div></div>` : ''}
          <div><span class="dim">Current Stage</span><div class="big">${Mastery.statusEmoji(action.stage)} ${labelForStatus(action.stage)}</div></div>
          <div><span class="dim">Next Step</span><div class="big">${action.nextStep}</div></div>
        </div>
        <button class="btn btn-primary btn-large" data-action="continue-quest" data-quest="${action.quest.id}" data-concept="${action.concept ? action.concept.id : ''}">CONTINUE QUEST →</button>
      ` : `<p class="dim">You've completed the entire roadmap. Go build the career you trained for.</p>`}
    </div>

    <div class="grid two-col">
      <div class="card">
        <div class="section-label">🔥 STREAKS</div>
        ${renderStreakRow('Learning', s.streaks.learning)}
        ${renderStreakRow('Lab', s.streaks.lab)}
        ${renderStreakRow('GitHub Commit', s.streaks.github)}
        ${renderStreakRow('Documentation', s.streaks.docs)}
      </div>
      <div class="card">
        <div class="section-label">🧪 TODAY'S QUEST</div>
        ${renderDailyQuestSummary()}
        <button class="btn btn-secondary" data-nav="daily">Open Daily Quest</button>
      </div>
    </div>
  </div>`;
}

function labelForStatus(status) {
  return ({
    locked: 'Locked', learning: 'Learning', practicing: 'Practicing',
    troubleshooting: 'Troubleshooting', interview_ready: 'Interview Ready',
    mastered: 'Mastered', needs_review: 'Needs Review', 'quest-checks': 'Finishing quest checks'
  })[status] || status;
}

function renderStreakRow(label, streak) {
  return `<div class="streak-row"><span>${label}</span><span class="mono">🔥 ${streak.current} day${streak.current === 1 ? '' : 's'} <span class="dim">(best ${streak.longest})</span></span></div>`;
}

function renderDailyQuestSummary() {
  const dq = AppState.data.dailyQuest;
  ensureDailyQuestFresh();
  const objs = Object.entries(dq.objectives);
  const done = objs.filter(([, v]) => v).length;
  return `
    <div class="mono">${blockBar((done / objs.length) * 100, 10)} ${done}/${objs.length}</div>
    <div class="mono dim small">XP earned today: +${dq.xpEarnedToday}</div>`;
}

function ensureDailyQuestFresh() {
  const dq = AppState.data.dailyQuest;
  if (dq.date !== todayISO()) {
    dq.date = todayISO();
    dq.objectives = { learnConcept: false, completeLab: false, troubleshooting: false, technicalNote: false, githubEvidence: false };
    dq.xpEarnedToday = 0;
    AppState.persist();
  }
}
