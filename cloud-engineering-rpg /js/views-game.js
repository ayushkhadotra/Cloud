// views-game.js — skill tree, bosses, projects
function skillStatusFor(branchName, skillName) {
  // Best-effort: a skill is "practicing" if any concept whose quest relates to it has mastery>=2,
  // "mastered" if the related quest(s) are complete. We match by simple keyword overlap.
  const keyword = skillName.split('/')[0].split(' ')[0].toLowerCase();
  let anyStarted = false, allDone = true, anyExists = false;
  R.quests.forEach(q => {
    const relevant = q.concepts.filter(c => c.name.toLowerCase().includes(keyword));
    if (relevant.length === 0) return;
    anyExists = true;
    relevant.forEach(c => {
      const prog = AppState.data.concepts[c.id];
      if (prog.mastery >= 1) anyStarted = true;
      if (prog.mastery < 6) allDone = false;
    });
  });
  if (!anyExists) return 'locked';
  if (allDone) return 'mastered';
  if (anyStarted) return 'practicing';
  return 'locked';
}

const SKILL_ICON = { locked: '🔒', learning: '🟡', practicing: '🔵', mastered: '🟢' };

function renderSkillTree() {
  const branches = [...R.skillTreeBranches, ...R.skillTreeTrunk];
  return `
  <div class="page">
    <h1>🌳 Cloud Engineering Skill Tree</h1>
    <p class="dim">Legend: 🔒 Locked · 🟡 Learning · 🔵 Practicing · 🟢 Mastered — auto-derived from concept mastery, mirrors the roadmap's branches one-to-one.</p>
    <div class="skill-tree-grid">
      ${branches.map(branch => `
        <div class="card skill-branch">
          <div class="section-label">${branch.name}</div>
          ${branch.skills.map(skill => {
            const status = skillStatusFor(branch.name, skill);
            return `<div class="skill-node" data-action="search-skill" data-skill="${escapeHtml(skill)}">${SKILL_ICON[status]} ${escapeHtml(skill)}</div>`;
          }).join('')}
        </div>`).join('')}
    </div>
  </div>`;
}

function renderBosses(bossParam) {
  if (bossParam) return renderBossDetail(bossParam);
  const s = AppState.data;
  return `
  <div class="page">
    <h1>💀 Boss Battles</h1>
    <p class="dim">One realistic engineering incident closes out each phase. Not a checkbox — write the incident report to claim victory.</p>
    <div class="boss-grid">
      ${R.bosses.map(boss => {
        const bp = s.bosses[boss.name];
        return `
        <a class="card boss-card boss-${bp.status}" href="#/bosses/${encodeURIComponent(boss.name)}">
          <div class="boss-name">${boss.name}</div>
          <div class="dim small">${boss.phase ? `Phase ${boss.phase}` : 'Final Boss'}</div>
          <div class="badge">${bp.status === 'defeated' ? '💀 Defeated' : bp.status === 'available' ? '⚔️ Available' : '🔒 Locked'}</div>
          <div class="mono dim small">+${boss.xpReward} XP</div>
        </a>`;
      }).join('')}
    </div>
  </div>`;
}

function renderBossDetail(bossName) {
  const boss = R.bosses.find(b => b.name === bossName);
  if (!boss) return `<div class="page"><p>Boss not found.</p></div>`;
  const bp = AppState.data.bosses[bossName];
  return `
  <div class="page">
    <a class="back-link" href="#/bosses">← Bosses</a>
    <h1>${boss.name}</h1>
    <div class="badge">${bp.status === 'defeated' ? '💀 Defeated ' + bp.defeatedDate : bp.status === 'available' ? '⚔️ Available' : '🔒 Locked — clear the phase first'}</div>

    <div class="card"><div class="section-label">Scenario</div><p>${escapeHtml(boss.scenario)}</p></div>
    <div class="card"><div class="section-label">Environment</div><p>${escapeHtml(boss.environment)}</p></div>
    <div class="card"><div class="section-label">Symptoms</div><ul class="plain-list">${boss.symptoms.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></div>
    <div class="card"><div class="section-label">Requirements to Clear</div><ul class="plain-list">${boss.requirements.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></div>
    <div class="card"><div class="section-label">Skills Tested</div><p>${escapeHtml(boss.skillsTested)}</p></div>
    <div class="card"><div class="section-label">Evidence to Submit</div><p class="dim small">${escapeHtml(boss.evidence)}</p>
      <textarea class="text-input" rows="6" placeholder="Write your incident report here..." ${bp.status === 'defeated' ? 'disabled' : ''} id="boss-evidence">${escapeHtml(bp.evidence)}</textarea>
      ${bp.status === 'available' ? `<button class="btn btn-primary btn-large" data-action="defeat-boss" data-boss="${escapeHtml(bossName)}">Submit & Claim Victory (+${boss.xpReward} XP)</button>` : ''}
      ${bp.status === 'locked' ? `<p class="dim">Complete every quest in this phase to unlock the battle.</p>` : ''}
    </div>
  </div>`;
}

const PROJECT_STATUSES = ['locked', 'available', 'in_progress', 'complete'];
const PROJECT_STATUS_LABEL = { locked: '🔒 Locked', available: '🟡 Available', in_progress: '🔵 In Progress', complete: '🟢 Complete' };

function renderProjects() {
  const s = AppState.data;
  return `
  <div class="page">
    <h1>🏗️ Project Portfolio</h1>
    <p class="dim">🟢 FOUNDATION — understand and implement · 🟡 ENGINEERING — implement + troubleshoot · 🔴 PRODUCTION — design + secure + monitor + optimize + explain.</p>
    ${R.projects.map(project => {
      const pp = s.projects[project.name];
      return `
      <div class="card project-card">
        <div class="phase-header">
          <h2>${project.tier} ${project.name}</h2>
          <select class="status-select" data-action="set-project-status" data-project="${escapeHtml(project.name)}">
            ${PROJECT_STATUSES.map(st => `<option value="${st}" ${pp.status === st ? 'selected' : ''}>${PROJECT_STATUS_LABEL[st]}</option>`).join('')}
          </select>
        </div>
        <p>${escapeHtml(project.objectives)}</p>
        <div class="mono dim small">Prerequisites: ${escapeHtml(project.prerequisites)} · Skills: ${escapeHtml(project.skillsUnlocked)} · +${project.xp} XP</div>
        <div class="grid two-col">
          <div><label class="field-label">GitHub URL</label><input type="text" class="text-input" value="${escapeHtml(pp.githubUrl)}" data-save="projects.${escapeHtml(project.name)}.githubUrl"></div>
          <div><label class="field-label">Demo URL</label><input type="text" class="text-input" value="${escapeHtml(pp.demoUrl)}" data-save="projects.${escapeHtml(project.name)}.demoUrl"></div>
          <div><label class="field-label">README URL</label><input type="text" class="text-input" value="${escapeHtml(pp.readmeUrl)}" data-save="projects.${escapeHtml(project.name)}.readmeUrl"></div>
          <div><label class="field-label">Monitoring</label><input type="text" class="text-input" value="${escapeHtml(pp.monitoring)}" data-save="projects.${escapeHtml(project.name)}.monitoring"></div>
        </div>
        <label class="field-label">Security notes</label><textarea class="text-input" rows="2" data-save="projects.${escapeHtml(project.name)}.securityNotes">${escapeHtml(pp.securityNotes)}</textarea>
        <label class="field-label">Cost notes</label><textarea class="text-input" rows="2" data-save="projects.${escapeHtml(project.name)}.costNotes">${escapeHtml(pp.costNotes)}</textarea>
        <label class="field-label">Lessons learned</label><textarea class="text-input" rows="2" data-save="projects.${escapeHtml(project.name)}.lessonsLearned">${escapeHtml(pp.lessonsLearned)}</textarea>
      </div>`;
    }).join('')}
  </div>`;
}
