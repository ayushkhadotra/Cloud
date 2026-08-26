// views-concept.js — the concept detail screen
function resourceButton(label, res) {
  if (!res || (!res.url && !res.label)) return '';
  if (res.url) return `<a class="btn btn-secondary btn-sm" href="${escapeHtml(res.url)}" target="_blank" rel="noopener">${label}</a>`;
  return `<span class="btn btn-secondary btn-sm disabled" title="${escapeHtml(res.label)}">${label}</span>`;
}

function renderConceptDetail(conceptId) {
  const meta = Mastery.findConceptMeta(conceptId);
  if (!meta) return `<div class="page"><p>Concept not found.</p></div>`;
  const { concept, quest } = meta;
  const prog = AppState.data.concepts[conceptId];
  const masteryName = R.masteryLevels.find(m => m.level === Math.max(prog.mastery, 0));
  const nextStep = Mastery.nextStepFor(conceptId);
  const canMaster = Mastery.canMarkMastered(conceptId);

  const stepRows = MASTERY_STEPS.map(step => {
    const done = prog.awarded[step.key];
    const locked = !done && step.level > 1 && prog.mastery < step.level - 1;
    return `<div class="progress-step ${done ? 'done' : ''}">${done ? '✓' : '○'} ${step.xpLabel}</div>`;
  }).join('');

  return `
  <div class="page">
    <a class="back-link" href="#/quest/${quest.id}">← ${quest.name}</a>
    <h1>${concept.name}</h1>
    <div class="mono dim">${concept.id} · ${quest.phaseName} · ${quest.name}</div>

    <div class="card">
      <div class="section-label">Mastery</div>
      <div class="big">${prog.mastery === 0 ? 'Not started' : `Level ${prog.mastery} — ${masteryName ? masteryName.name : ''}`}</div>
      <div class="progress-steps">${stepRows}</div>
    </div>

    <div class="card">
      <div class="section-label">Resources</div>
      <div class="chip-row">
        ${resourceButton('📺 Primary Resource', concept.resources.primary)}
        ${resourceButton('🎥 Alternative', concept.resources.alternative)}
        ${resourceButton('📖 Official Docs', concept.resources.official)}
        ${resourceButton('📚 Deep Dive', concept.resources.deepDive)}
        <span class="btn btn-secondary btn-sm disabled" title="${escapeHtml(concept.resources.lab.label)}">🧪 Lab</span>
        <span class="btn btn-secondary btn-sm disabled" title="${escapeHtml(concept.resources.interview.label)}">🎯 Interview Checkpoint</span>
      </div>
    </div>

    <div class="card">
      <div class="section-label">Evidence</div>
      <label class="field-label">GitHub URL</label>
      <input type="text" class="text-input" placeholder="https://github.com/you/repo" value="${escapeHtml(prog.evidence.githubUrl)}" data-save="concepts.${conceptId}.evidence.githubUrl">
      <label class="field-label">Lab evidence</label>
      <input type="text" class="text-input" placeholder="Command output, config, log snippet reference..." value="${escapeHtml(prog.evidence.labEvidence)}" data-save="concepts.${conceptId}.evidence.labEvidence">
      <label class="field-label">Screenshot / evidence URL</label>
      <input type="text" class="text-input" placeholder="https://..." value="${escapeHtml(prog.evidence.screenshotUrl)}" data-save="concepts.${conceptId}.evidence.screenshotUrl">
      <label class="field-label">Personal notes</label>
      <textarea class="text-input" rows="3" placeholder="What clicked, what didn't..." data-save="concepts.${conceptId}.evidence.notes">${escapeHtml(prog.evidence.notes)}</textarea>
    </div>

    <div class="card">
      <div class="section-label">Actions</div>
      <div class="action-row">
        ${MASTERY_STEPS.map(step => `
          <button class="btn ${prog.awarded[step.key] ? 'btn-done' : 'btn-primary'}" ${prog.awarded[step.key] ? 'disabled' : ''}
            data-action="advance-concept" data-concept="${conceptId}" data-step="${step.key}">
            ${prog.awarded[step.key] ? '✓ ' : ''}${step.buttonLabel}
          </button>`).join('')}
      </div>
      <button class="btn btn-mastered" ${canMaster.ok ? '' : 'disabled'} data-action="mark-mastered" data-concept="${conceptId}" title="${canMaster.ok ? '' : escapeHtml(canMaster.reason)}">
        🟢 Mark Mastered
      </button>
      ${!canMaster.ok && prog.mastery < 6 ? `<p class="dim small">${escapeHtml(canMaster.reason)}</p>` : ''}
      <button class="btn btn-warn" data-action="mark-needs-review" data-concept="${conceptId}">🔴 Flag as Needs Review</button>
    </div>
  </div>`;
}
