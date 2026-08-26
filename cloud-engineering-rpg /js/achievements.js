// achievements.js — trigger conditions for each of the roadmap's named achievements.
// Matched by exact name so this stays correct even if roadmap.js array order changes.
function questDone(n) {
  const q = R.quests.find(qq => qq.number === n);
  return q ? Quests.isComplete(q.id) : false;
}
function questsDone(nums) { return nums.every(questDone); }
function anyConceptAtLeast(level) {
  return Object.values(AppState.data.concepts).some(c => c.mastery >= level);
}
function allQuestsDone() { return R.quests.every(q => Quests.isComplete(q.id)); }
function allBossesDefeated() {
  return R.bosses.every(b => AppState.data.bosses[b.name].status === 'defeated');
}
function anyInterviewCheckpointCleared() {
  // "Pass a full phase Interview Checkpoint" — approximate as any quest whose
  // interviewCompleted flag has been ticked.
  return Object.values(AppState.data.quests).some(qp => qp.interviewCompleted);
}

const ACHIEVEMENT_TRIGGERS = {
  '🏆 First Blood': () => anyConceptAtLeast(2),
  '🐧 Penguin': () => questsDone([1, 2]),
  '📜 Scriptwright': () => questsDone([3, 4]),
  '🌱 Version Controlled': () => questsDone([5, 6]),
  '🌐 Packet Runner': () => questsDone([7]),
  '🐍 Automation Engineer': () => questsDone([8, 9]),
  '☁️ Cloudborn': () => questsDone([10, 11]),
  '🔐 IAM Guardian': () => questsDone([12]),
  '🕸️ Network Architect': () => questsDone([13]),
  '🗄️ Data Custodian': () => questsDone([15]),
  '🤖 Boto Wrangler': () => questsDone([17]),
  '🐳 Containerized': () => questsDone([18, 19]),
  '🛡️ Quality Gatekeeper': () => questsDone([20]),
  '🚀 Pipeline Engineer': () => questsDone([21, 22, 23]),
  '🏗️ Infrastructure Builder': () => questsDone([24, 25]),
  '🤖 Automation Master': () => questsDone([26, 27]),
  '☸️ Orchestrator': () => questsDone([28, 29]),
  '🛰️ Cluster Commander': () => questsDone([30, 31]),
  '🌍 Production Ready': () => questsDone([32]) && AppState.data.bosses['💀 FINAL BOSS — PRODUCTION-DAY INCIDENT']?.status === 'defeated',
  '💼 Job Hunter': () => AppState.data.jobHunt.some(j => j.status && j.status !== 'preparing'),
  '🎯 Interview Ready': () => anyInterviewCheckpointCleared(),
  '🏆 Cloud Engineer': () => allQuestsDone() && allBossesDefeated()
};

const Achievements = {
  checkAll() {
    const s = AppState.data;
    let changed = false;
    R.achievements.forEach(a => {
      const rec = s.achievements[a.name];
      if (rec.unlocked) return;
      const trigger = ACHIEVEMENT_TRIGGERS[a.name];
      if (trigger && trigger()) {
        rec.unlocked = true;
        rec.date = todayISO();
        XP.award(`Achievement: ${a.name}`, a.xp, `achievement:${a.name}`, a.name);
        changed = true;
        Events.emit('achievement:unlocked', a);
      }
    });
    if (changed) AppState.persist();
    return changed;
  }
};
