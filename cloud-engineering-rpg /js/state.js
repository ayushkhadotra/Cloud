// state.js — the single source of truth for user progress (not curriculum data)
const R = window.ROADMAP_DATA;

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function defaultConceptProgress() {
  return {
    mastery: 0, // 0 = locked/untouched, 1-6 per roadmap mastery system
    status: 'locked', // locked | learning | practicing | troubleshooting | interview_ready | mastered | needs_review
    awarded: { exposure: false, understanding: false, handson: false, troubleshooting: false, interview: false },
    evidence: { githubUrl: '', notes: '', labEvidence: '', screenshotUrl: '' },
    lastPracticed: null
  };
}

function defaultQuestProgress() {
  return {
    status: 'locked', // locked | active | complete
    xpAwarded: false,
    labCompleted: false,
    troubleshootingCompleted: false,
    interviewCompleted: false
  };
}

function buildDefaultState() {
  const concepts = {};
  R.quests.forEach(q => q.concepts.forEach(c => { concepts[c.id] = defaultConceptProgress(); }));
  // unlock the very first quest + its first concept by default
  const quests = {};
  R.quests.forEach((q, i) => { quests[q.id] = defaultQuestProgress(); });
  if (R.quests[0]) quests[R.quests[0].id].status = 'active';
  if (R.quests[0] && R.quests[0].concepts[0]) concepts[R.quests[0].concepts[0].id].status = 'learning';

  const bosses = {};
  R.bosses.forEach(b => { bosses[b.name] = { status: 'locked', evidence: '', defeatedDate: null }; });

  const achievements = {};
  R.achievements.forEach(a => { achievements[a.name] = { unlocked: false, date: null }; });

  const certifications = {};
  R.certifications.forEach(c => {
    certifications[c.name] = {
      status: 'not_started', progress: 0, examDate: '', attempts: '', result: '',
      weakDomains: '', evidence: '', practiceExams: 0
    };
  });

  const projects = {};
  R.projects.forEach(p => {
    projects[p.name] = {
      status: 'locked', progress: 0, githubUrl: '', demoUrl: '', readmeUrl: '',
      securityNotes: '', costNotes: '', monitoring: '', lessonsLearned: ''
    };
  });

  return {
    version: 1,
    xp: 0,
    xpLedger: [], // {id, date, activity, xp, ref}
    concepts,
    quests,
    bosses,
    achievements,
    certifications,
    projects,
    streaks: {
      learning: { current: 0, longest: 0, lastDate: null },
      lab: { current: 0, longest: 0, lastDate: null },
      github: { current: 0, longest: 0, lastDate: null },
      docs: { current: 0, longest: 0, lastDate: null }
    },
    dailyQuest: {
      date: todayISO(),
      objectives: { learnConcept: false, completeLab: false, troubleshooting: false, technicalNote: false, githubEvidence: false },
      xpEarnedToday: 0
    },
    weeklyMission: {
      weekStart: todayISO(),
      xpTarget: 0, conceptTarget: 0, labTarget: 0, projectTarget: 0, certTarget: 0,
      objectives: [],
      progress: { xp: 0, concepts: 0, labs: 0, projects: 0 }
    },
    weeklyReports: [],
    revisionQueue: [], // {conceptId, reason, addedDate, priority}
    logs: {
      weekly: [], // {week, hours, focus, labProject, whatBroke, whatLearned, evidence}
      troubleshooting: [] // {date, system, symptom, rootCause, fix, lesson, evidence}
    },
    jobHunt: [], // {id, company, role, location, date, status, resumeVersion, referral, interviewResult, weakArea, followUp}
    interviewPostMortems: [], // {question, tested, toLearn, toBuild, toRevise, revisitDate}
    notes: {}, // freeform per-concept notes already in concepts.evidence.notes; global notes here if needed
    settings: { theme: 'dark', reducedMotion: false },
    meta: {
      createdAt: new Date().toISOString(),
      lastOpened: new Date().toISOString(),
      currentQuestId: R.quests[0] ? R.quests[0].id : null,
      currentConceptId: R.quests[0] && R.quests[0].concepts[0] ? R.quests[0].concepts[0].id : null
    }
  };
}

function mergeWithDefaults(saved) {
  const base = buildDefaultState();
  // shallow-merge top level, then patch nested dictionaries so new roadmap items get defaults
  const merged = Object.assign({}, base, saved);
  ['concepts', 'quests', 'bosses', 'achievements', 'certifications', 'projects'].forEach(key => {
    merged[key] = Object.assign({}, base[key], saved[key] || {});
  });
  merged.streaks = Object.assign({}, base.streaks, saved.streaks || {});
  merged.dailyQuest = Object.assign({}, base.dailyQuest, saved.dailyQuest || {});
  merged.weeklyMission = Object.assign({}, base.weeklyMission, saved.weeklyMission || {});
  merged.settings = Object.assign({}, base.settings, saved.settings || {});
  merged.meta = Object.assign({}, base.meta, saved.meta || {});
  merged.weeklyReports = saved.weeklyReports || [];
  merged.revisionQueue = saved.revisionQueue || [];
  merged.logs = Object.assign({ weekly: [], troubleshooting: [] }, saved.logs || {});
  merged.jobHunt = saved.jobHunt || [];
  merged.interviewPostMortems = saved.interviewPostMortems || [];
  merged.xpLedger = saved.xpLedger || [];
  return merged;
}

const AppState = {
  data: null,
  init() {
    const saved = Storage.load();
    this.data = saved ? mergeWithDefaults(saved) : buildDefaultState();
    this.data.meta.lastOpened = new Date().toISOString();
    this.persist();
  },
  persist() {
    Storage.save(this.data);
  },
  reset() {
    Storage.clear();
    this.data = buildDefaultState();
    this.persist();
  },
  replaceAll(newState) {
    this.data = mergeWithDefaults(newState);
    this.persist();
  }
};
