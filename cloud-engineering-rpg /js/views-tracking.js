// views-tracking.js — achievements, certifications, revision queue
function renderAchievements() {
  const s = AppState.data;
  return `
  <div class="page">
    <h1>🏆 Achievements</h1>
    <div class="achievement-grid">
      ${R.achievements.map(a => {
        const rec = s.achievements[a.name];
        return `
        <div class="card achievement-card ${rec.unlocked ? 'unlocked' : 'locked'}">
          <div class="achievement-name">${rec.unlocked ? a.name : '🔒 ' + a.name.replace(/^[^\s]+\s/, '')}</div>
          <div class="dim small">${escapeHtml(a.requirement)}</div>
          <div class="mono dim small">+${a.xp} XP ${rec.unlocked ? `· unlocked ${rec.date}` : ''}</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

const CERT_STATUSES = ['not_started', 'studying', 'scheduled', 'passed', 'failed'];
const CERT_STATUS_LABEL = { not_started: '🔒 Not started', studying: '📖 Studying', scheduled: '📅 Scheduled', passed: '✅ Passed', failed: '❌ Failed — retrying' };

function renderCertifications() {
  const s = AppState.data;
  return `
  <div class="page">
    <h1>📜 Certification Roadmap</h1>
    <p class="dim">Certifications support the portfolio; they don't replace hands-on projects.</p>
    ${R.certifications.map(cert => {
      const cp = s.certifications[cert.name];
      return `
      <div class="card">
        <div class="phase-header">
          <h2>${cert.name}</h2>
          <select class="status-select" data-action="set-cert-status" data-cert="${escapeHtml(cert.name)}">
            ${CERT_STATUSES.map(st => `<option value="${st}" ${cp.status === st ? 'selected' : ''}>${CERT_STATUS_LABEL[st]}</option>`).join('')}
          </select>
        </div>
        <div class="mono dim small">${escapeHtml(cert.stage)} · Recommended: ${escapeHtml(cert.recommendedPosition)} · +${cert.xpOnPass} XP on pass</div>
        ${cert.officialUrl ? `<a href="${escapeHtml(cert.officialUrl)}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">Official info</a>` : ''}
        <div class="grid two-col">
          <div><label class="field-label">Progress (%)</label><input type="number" min="0" max="100" class="text-input" value="${cp.progress}" data-save="certifications.${escapeHtml(cert.name)}.progress" data-numeric="1"></div>
          <div><label class="field-label">Practice exams taken</label><input type="number" min="0" class="text-input" value="${cp.practiceExams}" data-save="certifications.${escapeHtml(cert.name)}.practiceExams" data-numeric="1"></div>
          <div><label class="field-label">Exam date</label><input type="date" class="text-input" value="${escapeHtml(cp.examDate)}" data-save="certifications.${escapeHtml(cert.name)}.examDate"></div>
          <div><label class="field-label">Attempts</label><input type="text" class="text-input" value="${escapeHtml(cp.attempts)}" data-save="certifications.${escapeHtml(cert.name)}.attempts"></div>
        </div>
        <label class="field-label">Weak domains</label><textarea class="text-input" rows="2" data-save="certifications.${escapeHtml(cert.name)}.weakDomains">${escapeHtml(cp.weakDomains)}</textarea>
        <label class="field-label">Evidence</label><input type="text" class="text-input" value="${escapeHtml(cp.evidence)}" data-save="certifications.${escapeHtml(cert.name)}.evidence">
      </div>`;
    }).join('')}
  </div>`;
}

function renderRevision() {
  const items = Revision.list();
  return `
  <div class="page">
    <h1>🔴 Revision Queue</h1>
    <p class="dim">Concepts flagged weak, or not practiced in 30+ days, land here automatically.</p>
    ${items.length === 0 ? `<div class="card empty-state">Nothing needs review right now.</div>` : `
    <div class="card">
      <table class="data-table">
        <thead><tr><th>Concept</th><th>Reason</th><th>Last Studied</th><th>Mastery</th><th></th></tr></thead>
        <tbody>
          ${items.map(item => `
            <tr>
              <td><a href="#/concept/${item.conceptId}">${escapeHtml(item.name)}</a><div class="dim small">${escapeHtml(item.questName)}</div></td>
              <td>${escapeHtml(item.reason)}</td>
              <td>${item.addedDate}</td>
              <td>Lv${item.mastery}</td>
              <td><button class="btn btn-secondary btn-sm" data-action="review-now" data-concept="${item.conceptId}">Review Now</button></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`}
  </div>`;
}
