// views-roadmap.js — phase/quest browser + quest detail
function questProgressPct(quest) {
  const done = quest.concepts.filter(c => AppState.data.concepts[c.id].mastery >= 2).length;
  return Math.round((done / quest.concepts.length) * 100);
}

function renderRoadmap() {
  const s = AppState.data;
  return `
  <div class="page">
    <h1>🗺️ Roadmap</h1>
    <p class="dim">The curriculum, phase by phase. This mirrors ROADMAP-2.md exactly — nothing here has been reordered or rewritten.</p>
    ${R.phases.map(phase => {
      const questsInPhase = phase.questIds.map(id => Quests.byId(id));
      const complete = Quests.phaseComplete(phase.id);
      const boss = R.bosses.find(b => b.phase === phase.id);
      return `
      <div class="card phase-card">
        <div class="phase-header">
          <h2>${complete ? '🟢' : '🔒'} Phase ${phase.id} — ${phase.name}</h2>
          ${boss ? `<span class="badge">${s.bosses[boss.name].status === 'defeated' ? '💀 Boss defeated' : s.bosses[boss.name].status === 'available' ? '⚔️ Boss available' : `🔒 ${boss.name}`}</span>` : ''}
        </div>
        <div class="quest-list">
          ${questsInPhase.map(q => {
            const qp = s.quests[q.id];
            const pct = questProgressPct(q);
            const locked = qp.status === 'locked';
            return `
            <a class="quest-row ${locked ? 'locked' : ''}" href="${locked ? '#' : `#/quest/${q.id}`}">
              <span class="quest-number">Q${String(q.number).padStart(2, '0')}</span>
              <span class="quest-name">${locked ? '🔒' : qp.status === 'complete' ? '🟢' : '🟡'} ${q.name}</span>
              <span class="mono dim small">${blockBar(pct, 8)} ${pct}%</span>
              <span class="mono dim small">+${q.xpAvailable} XP</span>
            </a>`;
          }).join('')}
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

function renderQuestDetail(questId) {
  const quest = Quests.byId(questId);
  if (!quest) return `<div class="page"><p>Quest not found.</p></div>`;
  const qp = Quests.progress(questId);
  const checklist = Quests.completionChecklist(questId);
  const checkpoint = R.interviewCheckpoints.find(c =>
    quest.name.toLowerCase().includes(c.name.replace(' Interview Checkpoint', '').toLowerCase()) ||
    c.name.toLowerCase().includes(quest.phaseName.toLowerCase())
  );

  return `
  <div class="page">
    <a class="back-link" href="#/roadmap">← Roadmap</a>
    <h1>⚔️ QUEST ${String(quest.number).padStart(2, '0')} — ${quest.name}</h1>
    <div class="mono dim">Phase ${quest.phaseId} — ${quest.phaseName} · Difficulty ${quest.difficulty} · +${quest.xpAvailable} XP · Boss: ${quest.bossName}</div>

    <div class="card">
      <div class="section-label">Objectives (${quest.concepts.filter(c => AppState.data.concepts[c.id].mastery >= 2).length}/${quest.concepts.length} understood)</div>
      <div class="concept-list">
        ${quest.concepts.map(c => {
          const prog = AppState.data.concepts[c.id];
          return `<a class="list-row" href="#/concept/${c.id}">${Mastery.statusEmoji(prog.status)} ${c.name} <span class="dim mono small">(${c.id} · Lv${prog.mastery})</span></a>`;
        }).join('')}
      </div>
    </div>

    <div class="card">
      <div class="section-label">Completion Requirements</div>
      ${checklist.map((item, i) => `
        <label class="check-row ${item.done ? 'done' : ''}">
          <input type="checkbox" ${item.done ? 'checked' : ''} ${i === 0 ? 'disabled' : ''}
            data-action="toggle-quest-flag" data-quest="${quest.id}" data-flag="${['','labCompleted','troubleshootingCompleted','interviewCompleted'][i]}">
          <span>${item.label}</span>
        </label>`).join('')}
      ${qp.status === 'complete' ? `<p class="dim success-text">✅ Quest complete — +${quest.xpAvailable} XP awarded.</p>` : ''}
    </div>

    ${checkpoint ? `
    <div class="card">
      <div class="section-label">🎤 ${checkpoint.name}</div>
      <p class="dim small">Answer these cold, out loud, before ticking the interview checklist item above.</p>
      <ul class="plain-list">${checkpoint.questions.map(q => `<li>${escapeHtml(q)}</li>`).join('')}</ul>
    </div>` : ''}

    <div class="grid two-col">
      <div class="card">
        <div class="section-label">Prerequisites</div>
        <ul class="plain-list">${quest.prerequisites.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
      </div>
      <div class="card">
        <div class="section-label">Unlocks</div>
        <ul class="plain-list">${quest.unlocks.map(u => `<li>${escapeHtml(u)}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="card">
      <div class="section-label">Rewards</div>
      <ul class="plain-list">${quest.rewards.map(r => `<li>${escapeHtml(r)}</li>`).join('')}</ul>
    </div>
  </div>`;
}
