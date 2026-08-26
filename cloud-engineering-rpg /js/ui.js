// ui.js — shell: sidebar nav, hash router, modal, toasts, XP popups, level-up screen
function escapeHtml(str) {
  if (str == null) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function todayISO() { return new Date().toISOString().slice(0, 10); }

const NAV_ITEMS = [
  { id: 'dashboard', label: '🏠 Dashboard' },
  { id: 'roadmap', label: '🗺️ Roadmap' },
  { id: 'daily', label: '🧪 Daily Quest' },
  { id: 'weekly', label: '📅 Weekly Mission' },
  { id: 'skilltree', label: '🌳 Skill Tree' },
  { id: 'bosses', label: '⚔️ Bosses' },
  { id: 'projects', label: '🏗️ Projects' },
  { id: 'achievements', label: '🏆 Achievements' },
  { id: 'certifications', label: '📜 Certifications' },
  { id: 'revision', label: '🔴 Revision Queue' },
  { id: 'analytics', label: '📊 Analytics' },
  { id: 'logs', label: '📝 Logs' },
  { id: 'jobhunt', label: '💼 Job Hunt' },
  { id: 'settings', label: '⚙️ Settings' }
];

const Router = {
  current: { view: 'dashboard', param: null },

  parse() {
    const hash = location.hash.replace(/^#\/?/, '');
    const [view, param] = hash.split('/');
    return { view: view || 'dashboard', param: param ? decodeURIComponent(param) : null };
  },

  go(view, param) {
    location.hash = `#/${view}${param ? '/' + encodeURIComponent(param) : ''}`;
  },

  render() {
    this.current = this.parse();
    ensureDailyQuestFresh();
    document.getElementById('app-root').innerHTML = viewFor(this.current.view, this.current.param);
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.nav === this.current.view);
    });
    // Any navigation (nav click, in-page link, or programmatic route change) should close
    // the mobile sidebar — otherwise its overlay can be left blocking the page.
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');
    window.scrollTo(0, 0);
  }
};

function viewFor(view, param) {
  switch (view) {
    case 'dashboard': return renderDashboard();
    case 'roadmap': return renderRoadmap();
    case 'quest': return renderQuestDetail(param);
    case 'concept': return renderConceptDetail(param);
    case 'skilltree': return renderSkillTree();
    case 'bosses': return renderBosses(param);
    case 'projects': return renderProjects();
    case 'achievements': return renderAchievements();
    case 'certifications': return renderCertifications();
    case 'revision': return renderRevision();
    case 'analytics': return renderAnalytics();
    case 'logs': return renderLogs();
    case 'jobhunt': return renderJobHunt();
    case 'daily': return renderDailyQuestPage();
    case 'weekly': return renderWeeklyMissionPage();
    case 'settings': return renderSettings();
    case 'search': return renderSearchResults(param);
    default: return renderDashboard();
  }
}

function renderNav() {
  return `
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">☰</button>
    <nav class="sidebar" id="sidebar">
      <div class="brand">☁️ CE&nbsp;RPG</div>
      <div class="search-box">
        <input type="text" id="global-search" placeholder="Search docker, IAM, EKS..." />
      </div>
      ${NAV_ITEMS.map(i => `<a href="#/${i.id}" class="nav-item" data-nav="${i.id}">${i.label}</a>`).join('')}
    </nav>`;
}

// ---------- Toasts / XP popups ----------
function toast(message, kind = 'info') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast toast-${kind}`;
  el.textContent = message;
  container.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 3200);
}

function xpPopup(amount, label) {
  const container = document.getElementById('xp-popup-container');
  const el = document.createElement('div');
  el.className = 'xp-popup';
  el.innerHTML = `<div class="xp-amount">+${amount} XP</div><div class="xp-label">${escapeHtml(label.toUpperCase())}</div>`;
  container.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => el.remove(), 2200);
}

function showLevelUp(level) {
  const overlay = document.getElementById('levelup-overlay');
  overlay.innerHTML = `
    <div class="levelup-card">
      <div class="levelup-eyebrow">LEVEL UP!</div>
      <div class="levelup-level">LEVEL ${level.level}</div>
      <div class="levelup-rank">${level.rank}</div>
      <div class="levelup-skills">
        <span class="dim">New Skills Unlocked</span>
        <div class="chip-row">${level.skillsUnlocked.map(s => `<span class="chip">${escapeHtml(s)}</span>`).join('')}</div>
      </div>
      <button class="btn btn-primary" id="levelup-close">Continue</button>
    </div>`;
  overlay.classList.add('show');
  document.getElementById('levelup-close').addEventListener('click', () => overlay.classList.remove('show'));
}

function achievementToast(a) {
  toast(`🏆 Achievement unlocked: ${a.name} (+${a.xp} XP)`, 'achievement');
}

// ---------- Modal ----------
function openModal(html) {
  const modal = document.getElementById('modal-root');
  modal.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><div class="modal-box" role="dialog">${html}</div></div>`;
  modal.classList.add('show');
}
function closeModal() {
  document.getElementById('modal-root').classList.remove('show');
  document.getElementById('modal-root').innerHTML = '';
}

// ---------- Search ----------
function runSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return { concepts: [], quests: [], projects: [], skills: [], certifications: [] };
  const concepts = [];
  R.quests.forEach(quest => quest.concepts.forEach(c => {
    if (c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)) concepts.push({ concept: c, quest });
  }));
  const quests = R.quests.filter(qq => qq.name.toLowerCase().includes(q));
  const projects = R.projects.filter(p => p.name.toLowerCase().includes(q));
  const certifications = R.certifications.filter(c => c.name.toLowerCase().includes(q));
  const skills = [];
  [...R.skillTreeBranches, ...R.skillTreeTrunk].forEach(b => b.skills.forEach(s => {
    if (s.toLowerCase().includes(q)) skills.push({ branch: b.name, skill: s });
  }));
  return { concepts, quests, projects, certifications, skills };
}

function renderSearchResults(query) {
  const q = query || '';
  const r = runSearch(q);
  const total = r.concepts.length + r.quests.length + r.projects.length + r.certifications.length + r.skills.length;
  return `
    <div class="page">
      <h1>Search: "${escapeHtml(q)}"</h1>
      <p class="dim">${total} result${total === 1 ? '' : 's'}</p>
      ${r.quests.length ? `<div class="card"><div class="section-label">Quests</div>${r.quests.map(qq => `<a class="list-row" href="#/quest/${qq.id}">${qq.name}</a>`).join('')}</div>` : ''}
      ${r.concepts.length ? `<div class="card"><div class="section-label">Concepts</div>${r.concepts.slice(0, 40).map(({ concept, quest }) => `<a class="list-row" href="#/concept/${concept.id}">${Mastery.statusEmoji(AppState.data.concepts[concept.id].status)} ${concept.name} <span class="dim">— ${quest.name}</span></a>`).join('')}</div>` : ''}
      ${r.projects.length ? `<div class="card"><div class="section-label">Projects</div>${r.projects.map(p => `<a class="list-row" href="#/projects">${p.name}</a>`).join('')}</div>` : ''}
      ${r.certifications.length ? `<div class="card"><div class="section-label">Certifications</div>${r.certifications.map(c => `<a class="list-row" href="#/certifications">${c.name}</a>`).join('')}</div>` : ''}
      ${r.skills.length ? `<div class="card"><div class="section-label">Skill Tree</div>${r.skills.map(s => `<a class="list-row" href="#/skilltree">${s.skill} <span class="dim">— ${s.branch}</span></a>`).join('')}</div>` : ''}
      ${total === 0 ? `<div class="card empty-state">No matches. Try a shorter or different term.</div>` : ''}
    </div>`;
}
