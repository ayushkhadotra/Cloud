// views-tracking2.js — analytics, logs, job hunt
function xpByWeek(weeks = 8) {
  const s = AppState.data;
  const buckets = [];
  const now = new Date();
  for (let i = weeks - 1; i >= 0; i--) {
    const start = new Date(now); start.setDate(now.getDate() - i * 7 - now.getDay());
    const end = new Date(start); end.setDate(start.getDate() + 7);
    const xp = s.xpLedger.filter(r => { const d = new Date(r.date); return d >= start && d < end; })
      .reduce((sum, r) => sum + r.xp, 0);
    buckets.push({ label: `${start.getMonth() + 1}/${start.getDate()}`, xp });
  }
  return buckets;
}

function renderAnalytics() {
  const s = AppState.data;
  const weeks = xpByWeek(8);
  const maxXp = Math.max(1, ...weeks.map(w => w.xp));
  const conceptsMastered = Object.values(s.concepts).filter(c => c.mastery >= 6).length;
  const labsCompleted = Object.values(s.concepts).filter(c => c.awarded.handson).length;
  const projectsDone = Object.values(s.projects).filter(p => p.status === 'complete').length;
  const bossesDown = Object.values(s.bosses).filter(b => b.status === 'defeated').length;
  const certsDone = Object.values(s.certifications).filter(c => c.status === 'passed').length;
  const longestStreak = Math.max(...Object.values(s.streaks).map(st => st.longest), 0);
  const currentStreak = Math.max(...Object.values(s.streaks).map(st => st.current), 0);

  // strongest/weakest skill area by average mastery within each skill-tree branch
  const branches = [...R.skillTreeBranches, ...R.skillTreeTrunk];
  const branchScores = branches.map(b => {
    const kws = b.skills.map(s => s.split('/')[0].split(' ')[0].toLowerCase());
    let total = 0, count = 0;
    R.quests.forEach(q => q.concepts.forEach(c => {
      if (kws.some(k => c.name.toLowerCase().includes(k))) { total += s.concepts[c.id].mastery; count++; }
    }));
    return { name: b.name, avg: count ? total / count : 0 };
  }).filter(b => b.avg > 0 || true);
  const strongest = branchScores.slice().sort((a, b) => b.avg - a.avg)[0];
  const weakest = branchScores.slice().sort((a, b) => a.avg - b.avg)[0];

  return `
  <div class="page">
    <h1>📊 Analytics</h1>
    <div class="grid stat-grid">
      <div class="card stat"><span class="stat-label">Total XP</span><span class="stat-value">${s.xp.toLocaleString()}</span></div>
      <div class="card stat"><span class="stat-label">Concepts Mastered</span><span class="stat-value">${conceptsMastered} / 350</span></div>
      <div class="card stat"><span class="stat-label">Labs Completed</span><span class="stat-value">${labsCompleted}</span></div>
      <div class="card stat"><span class="stat-label">Projects Completed</span><span class="stat-value">${projectsDone} / ${R.projects.length}</span></div>
      <div class="card stat"><span class="stat-label">Boss Victories</span><span class="stat-value">${bossesDown} / ${R.bosses.length}</span></div>
      <div class="card stat"><span class="stat-label">Certifications</span><span class="stat-value">${certsDone} / ${R.certifications.length}</span></div>
      <div class="card stat"><span class="stat-label">Current Streak</span><span class="stat-value">🔥 ${currentStreak}</span></div>
      <div class="card stat"><span class="stat-label">Longest Streak</span><span class="stat-value">🔥 ${longestStreak}</span></div>
    </div>
    <div class="card">
      <div class="section-label">XP per week</div>
      <div class="bar-chart">
        ${weeks.map(w => `<div class="bar-col"><div class="bar" style="height:${Math.max(4, (w.xp / maxXp) * 100)}px" title="${w.xp} XP"></div><span class="dim small">${w.label}</span></div>`).join('')}
      </div>
    </div>
    <div class="grid two-col">
      <div class="card stat"><span class="stat-label">Strongest Skill Area</span><span class="stat-value">${strongest ? strongest.name : '—'}</span></div>
      <div class="card stat"><span class="stat-label">Weakest Skill Area</span><span class="stat-value">${weakest ? weakest.name : '—'}</span></div>
    </div>
  </div>`;
}

function renderLogs() {
  const s = AppState.data;
  return `
  <div class="page">
    <h1>📝 Logs</h1>
    <div class="card">
      <div class="phase-header"><div class="section-label">Weekly Learning Log</div>
        <button class="btn btn-secondary btn-sm" data-action="add-log-row" data-log="weekly">+ Add Week</button></div>
      <table class="data-table editable">
        <thead><tr><th>Week</th><th>Hours</th><th>Focus</th><th>Lab/Project</th><th>What Broke</th><th>What I Learned</th><th>Evidence</th></tr></thead>
        <tbody>
          ${s.logs.weekly.map((row, i) => `
            <tr>
              ${['week', 'hours', 'focus', 'labProject', 'whatBroke', 'whatLearned', 'evidence'].map(f =>
                `<td><input class="text-input" value="${escapeHtml(row[f] || '')}" data-save="logs.weekly.${i}.${f}"></td>`).join('')}
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="card">
      <div class="phase-header"><div class="section-label">Troubleshooting Log</div>
        <button class="btn btn-secondary btn-sm" data-action="add-log-row" data-log="troubleshooting">+ Add Entry</button></div>
      <table class="data-table editable">
        <thead><tr><th>Date</th><th>System</th><th>Symptom</th><th>Root Cause</th><th>Fix</th><th>Lesson</th><th>Evidence</th></tr></thead>
        <tbody>
          ${s.logs.troubleshooting.map((row, i) => `
            <tr>
              ${['date', 'system', 'symptom', 'rootCause', 'fix', 'lesson', 'evidence'].map(f =>
                `<td><input class="text-input" value="${escapeHtml(row[f] || '')}" data-save="logs.troubleshooting.${i}.${f}"></td>`).join('')}
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="card">
      <div class="section-label">🧠 Interview Post-Mortem</div>
      <button class="btn btn-secondary btn-sm" data-action="add-postmortem">+ Add Post-Mortem</button>
      ${s.interviewPostMortems.map((pm, i) => `
        <div class="subcard">
          <label class="field-label">Question I couldn't answer</label><input class="text-input" value="${escapeHtml(pm.question)}" data-save="interviewPostMortems.${i}.question">
          <label class="field-label">What was actually being tested</label><input class="text-input" value="${escapeHtml(pm.tested)}" data-save="interviewPostMortems.${i}.tested">
          <label class="field-label">What I need to learn</label><input class="text-input" value="${escapeHtml(pm.toLearn)}" data-save="interviewPostMortems.${i}.toLearn">
          <label class="field-label">What I need to build</label><input class="text-input" value="${escapeHtml(pm.toBuild)}" data-save="interviewPostMortems.${i}.toBuild">
          <label class="field-label">Date to revisit</label><input type="date" class="text-input" value="${escapeHtml(pm.revisitDate)}" data-save="interviewPostMortems.${i}.revisitDate">
        </div>`).join('')}
    </div>
  </div>`;
}

const JOB_STATUSES = ['preparing', 'applied', 'oa', 'technical', 'system_design', 'hr', 'rejected', 'offer'];
const JOB_STATUS_LABEL = { preparing: '📝 Preparing', applied: '📨 Applied', oa: '🧪 OA', technical: '🎤 Technical', system_design: '🏗️ System Design', hr: '👔 HR', rejected: '❌ Rejected', offer: '🎉 Offer' };

function renderJobHunt() {
  const s = AppState.data;
  const apps = s.jobHunt;
  const total = apps.length;
  const interviews = apps.filter(j => ['oa', 'technical', 'system_design', 'hr', 'offer'].includes(j.status)).length;
  const technicalRounds = apps.filter(j => j.status === 'technical' || j.status === 'system_design').length;
  const offers = apps.filter(j => j.status === 'offer').length;
  const responseRate = total ? Math.round((apps.filter(j => j.status !== 'preparing').length / total) * 100) : 0;
  const conversionRate = total ? Math.round((interviews / total) * 100) : 0;

  return `
  <div class="page">
    <h1>💼 Job Hunt Mode</h1>
    <div class="grid stat-grid">
      <div class="card stat"><span class="stat-label">Applications</span><span class="stat-value">${total}</span></div>
      <div class="card stat"><span class="stat-label">Interviews</span><span class="stat-value">${interviews}</span></div>
      <div class="card stat"><span class="stat-label">Technical Rounds</span><span class="stat-value">${technicalRounds}</span></div>
      <div class="card stat"><span class="stat-label">Offers</span><span class="stat-value">${offers}</span></div>
      <div class="card stat"><span class="stat-label">Response Rate</span><span class="stat-value">${responseRate}%</span></div>
      <div class="card stat"><span class="stat-label">Interview Conversion</span><span class="stat-value">${conversionRate}%</span></div>
    </div>
    <div class="card">
      <button class="btn btn-primary" data-action="add-job">+ Add Application</button>
      <table class="data-table editable">
        <thead><tr><th>Company</th><th>Role</th><th>Location</th><th>Date</th><th>Status</th><th>Resume</th><th>Referral</th><th>Weak Area</th><th>Follow-up</th><th></th></tr></thead>
        <tbody>
          ${apps.map(job => `
            <tr>
              <td><input class="text-input" value="${escapeHtml(job.company)}" data-save="jobHunt.byId.${job.id}.company"></td>
              <td><input class="text-input" value="${escapeHtml(job.role)}" data-save="jobHunt.byId.${job.id}.role"></td>
              <td><input class="text-input" value="${escapeHtml(job.location)}" data-save="jobHunt.byId.${job.id}.location"></td>
              <td><input type="date" class="text-input" value="${escapeHtml(job.date)}" data-save="jobHunt.byId.${job.id}.date"></td>
              <td><select class="status-select" data-action="set-job-status" data-job="${job.id}">
                ${JOB_STATUSES.map(st => `<option value="${st}" ${job.status === st ? 'selected' : ''}>${JOB_STATUS_LABEL[st]}</option>`).join('')}
              </select></td>
              <td><input class="text-input" value="${escapeHtml(job.resumeVersion)}" data-save="jobHunt.byId.${job.id}.resumeVersion"></td>
              <td><input class="text-input" value="${escapeHtml(job.referral)}" data-save="jobHunt.byId.${job.id}.referral"></td>
              <td><input class="text-input" value="${escapeHtml(job.weakArea)}" data-save="jobHunt.byId.${job.id}.weakArea"></td>
              <td><input class="text-input" value="${escapeHtml(job.followUp)}" data-save="jobHunt.byId.${job.id}.followUp"></td>
              <td><button class="btn btn-warn btn-sm" data-action="delete-job" data-job="${job.id}">✕</button></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}
