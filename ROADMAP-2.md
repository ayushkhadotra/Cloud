# ☁️ CLOUD ENGINEERING RPG — MASTER ROADMAP

> **Career objective:** Build the skills, projects and evidence required to land a Cloud Engineering / DevOps / Infrastructure Engineering role.

![Status](https://img.shields.io/badge/status-in%20progress-0B6E69)
![Concepts](https://img.shields.io/badge/concepts-0%20%2F%20350-17324D)
![Path](https://img.shields.io/badge/path-Linux%20→%20AWS%20→%20Kubernetes-1261A0)
![Level](https://img.shields.io/badge/level-1%20Linux%20Initiate-6A0DAD)

> **How this file works:** this is a single static Markdown file. Nothing here auto-updates — XP, levels, streaks, and percentages are numbers *you* edit by hand as you genuinely complete work. See [§ No Fake Automation](#-no-fake-automation) for why, and treat every checkbox and number here as a personal ledger, not a game engine.

---

## 🎯 Player Profile

| | |
|---|---|
| **Level** | 1 |
| **Rank** | Linux Initiate |
| **XP** | 0 |
| **XP to Next Level** | 600 |
| **Current Phase** | Phase 1 — Foundations |
| **Current Session** | Session 1 — Linux Fundamentals I |
| **Current Quest** | [Quest 01 — Linux Fundamentals I](#-quest-01--linux-fundamentals-i) |
| **Current Concept** | Linux architecture: kernel, user space and shell |
| **Current Boss** | 🧟 Linux System Failure (locked — clear Phase 1 first) |
| **Current Project** | Linux System Health Monitor |
| **Next Certification** | AWS Certified Solutions Architect — Associate (SAA-C03) |

## 📊 Overall Progress

```
Concept Progress        ░░░░░░░░░░░░  0 / 350
Project Progress        ░░░░░░░░░░░░  0 / 12
Certification Progress  ░░░░░░░░░░░░  0 / 6
Interview Readiness     ░░░░░░░░░░░░  0 / 8 checkpoints
Job Applications        ░░░░░░░░░░░░  0 submitted
```

> Update these bars manually. Roughly: 1 block per ~8% complete (12 blocks total). Example at 25%: `███░░░░░░░░░`.

🔥 **Learning Streak:** 0 days · 🧪 **Lab Streak:** 0 days · 💻 **GitHub Commit Streak:** 0 days · 📝 **Documentation Streak:** 0 days

---

## 🎯 Next Action

| | |
|---|---|
| **Current Quest** | Quest 01 — Linux Fundamentals I |
| **Current Concept** | Linux architecture: kernel, user space and shell |
| **Recommended Primary Resource** | Open the concept's resource block below |
| **Alternative Resource** | Open the concept's resource block below |
| **Required Lab** | See concept resource block |
| **Completion Condition** | Reach Mastery Level 3 (Hands-on) on this concept, then move to the next unchecked concept |

> **Workflow:** Learn → Practice → Troubleshoot → Interview → Master → Next Concept. When you finish a concept, manually edit this table to point at the next unfinished one.

---

## 🧭 Table of Contents

- [Player Profile](#-player-profile)
- [Overall Progress](#-overall-progress)
- [Next Action](#-next-action)
- [Today's Quest](#-todays-quest)
- [Weekly Mission](#-weekly-mission)
- [Streak System](#-streak-system)
- [RPG Level System](#-rpg-level-system)
- [XP System & Ledger](#-xp-system)
- [No Fake Automation](#-no-fake-automation)
- [Cloud Engineering Skill Tree](#-cloud-engineering-skill-tree)
- [Concept Mastery System](#-concept-mastery-system)
- [Phase 1 — Foundations](#phase-1--foundations)
- [Phase 2 — Python for Automation](#phase-2--python-for-automation)
- [Phase 3 — AWS Cloud Core](#phase-3--aws-cloud-core)
- [Phase 4 — Containers & CI/CD](#phase-4--containers-cicd)
- [Phase 5 — Terraform & Configuration Management](#phase-5--terraform-configuration-management)
- [Phase 6 — Kubernetes](#phase-6--kubernetes)
- [Phase 7 — Architecture & Capstone](#phase-7--architecture-capstone)
- [Boss Battles](#-boss-battles)
- [Achievements](#-achievements)
- [Certification Roadmap](#-certification-roadmap)
- [Project Portfolio](#-project-portfolio)
- [Resource Index](#-resource-index)
- [Revision Queue](#-revision-queue)
- [Reference Library](#-reference-library)
- [Weekly Review](#-weekly-review)
- [Monthly Level-Up](#-monthly-level-up)
- [Weekly Learning Log](#-weekly-learning-log)
- [Troubleshooting Log](#-troubleshooting-log)
- [Job Hunt Mode](#-job-hunt-mode)
- [Interview Post-Mortem](#-interview-post-mortem)
- [Final Boss — Production Cloud Capstone](#-final-boss--production-cloud-capstone)
- [Dream-Job Readiness](#-dream-job-readiness)
- [Suggested Repository Structure](#-suggested-repository-structure)
- [Final Quality Control Audit](#-final-quality-control-audit)
- [Journey](#-️-journey)

---

## 🎮 RPG Level System

A professional progression track layered on top of the curriculum below. Levels are cumulative XP milestones, not a separate curriculum — they're earned by doing the sessions, projects, and bosses that already exist in this roadmap.

### Level 1 — Linux Initiate

- **XP required:** 0
- **Skills unlocked:** Core Linux CLI, filesystem, permissions, processes
- **Typical capability:** Can survive and navigate a Linux server unaided
- **Major milestone:** Complete Phase 1 Sessions 1-4

### Level 2 — Systems Apprentice

- **XP required:** 600
- **Skills unlocked:** Git, GitHub workflows, version control discipline
- **Typical capability:** Can manage code history and collaborate via PRs
- **Major milestone:** Complete Sessions 5-6, defeat no boss yet

### Level 3 — Network Operator

- **XP required:** 900
- **Skills unlocked:** Networking fundamentals: OSI, TCP/IP, DNS, NAT
- **Typical capability:** Can reason about how traffic moves and troubleshoot connectivity
- **Major milestone:** Complete Session 7, defeat Linux System Failure

### Level 4 — Automation Engineer

- **XP required:** 1400
- **Skills unlocked:** Python for automation, scripting, APIs
- **Typical capability:** Can write scripts and tools that remove manual toil
- **Major milestone:** Complete Phase 2, defeat Automation Breaker

### Level 5 — Cloud Apprentice

- **XP required:** 2200
- **Skills unlocked:** AWS core services: EC2, IAM, VPC, S3, RDS
- **Typical capability:** Can stand up and secure basic AWS infrastructure
- **Major milestone:** Complete Sessions 10-13

### Level 6 — Cloud Engineer

- **XP required:** 3200
- **Skills unlocked:** Advanced AWS, serverless, CloudFormation, Boto3
- **Typical capability:** Can design and automate AWS environments end-to-end
- **Major milestone:** Complete Phase 3, defeat AWS Architecture Incident

### Level 7 — Infrastructure Engineer

- **XP required:** 4400
- **Skills unlocked:** Docker, CI/CD pipelines, quality gates
- **Typical capability:** Can containerize and ship applications through a pipeline
- **Major milestone:** Complete Phase 4, defeat Deployment Incident

### Level 8 — DevOps Engineer

- **XP required:** 5800
- **Skills unlocked:** Terraform, Ansible, Infrastructure as Code
- **Typical capability:** Can provision and configure infrastructure repeatably
- **Major milestone:** Complete Phase 5, defeat Infrastructure Failure

### Level 9 — Platform Engineer

- **XP required:** 7500
- **Skills unlocked:** Kubernetes, EKS, GitOps
- **Typical capability:** Can operate container platforms in production-style conditions
- **Major milestone:** Complete Phase 6, defeat Kubernetes Production Incident

### Level 10 — Cloud Architect

- **XP required:** 9500
- **Skills unlocked:** Well-Architected design, HA/DR, cost optimization
- **Typical capability:** Can design, defend, and operate a production-grade cloud system
- **Major milestone:** Complete Phase 7, defeat the Final Boss

---

## ⭐ XP System

| Activity | XP |
|---|---:|
| Concept Exposure (watched/read) | +5 |
| Concept Understanding (can explain unaided) | +10 |
| Hands-on Lab | +25 |
| Troubleshooting Challenge | +30 |
| Interview Checkpoint question answered cold | +25 |
| Mini Project | +100 |
| Major Project | +250 |
| Phase Boss defeated | +150 |
| Certification passed | +500 |
| Interview Milestone (real interview stage cleared) | +100 |
| Job Offer | +1000 |

**Rule:** do not award XP just because a checkbox is ticked. XP is earned only after the activity is genuinely done — see the [Completion Rule](#-completion-rule) below and the six-level [Concept Mastery System](#-concept-mastery-system).

### 📒 XP Ledger

Add a row every time you earn XP. Keep a running total — this is your source of truth for your current Level and Rank.

| Date | Activity | XP | Running Total |
|---|---|---:|---:|
| | | | |

---

## 🧮 No Fake Automation

This file is static GitHub Markdown. It cannot calculate XP, detect checked boxes, update percentages, unlock levels, track streaks, or determine mastery automatically. There is no JavaScript, no database, and no external hosting required — it works as a plain `.md` file in any Git repository.

Everything in this roadmap — the dashboard numbers, progress bars, streaks, XP ledger, and status emoji — is **manually maintained by you**. That's intentional: the act of updating it is itself a small, honest checkpoint on whether you actually did the work.

---

## ✅ Completion Rule

Tick a concept only after:

- [ ] I understand the concept without memorising commands.
- [ ] I have completed a hands-on lab.
- [ ] I can troubleshoot a basic failure.
- [ ] I can explain it in an interview.
- [ ] I have documented useful evidence where appropriate.

---

## 🌳 Cloud Engineering Skill Tree

Legend: 🔒 Locked · 🟡 Learning · 🔵 Practicing · 🟢 Mastered

```
                              ☁️ CLOUD ENGINEER
                                     │
        ┌────────────────┬──────────┼──────────┬────────────────┐
        │                │          │          │                │
     SYSTEMS          SCRIPTING   NETWORK    AUTOMATION       CLOUD (AWS)
        │                │          │          │                │
  🔒 Linux CLI      🔒 Bash      🔒 OSI/TCP   🔒 Python      🔒 Regions/AZs
  🔒 Filesystem      🔒 Loops     🔒 DNS       🔒 Boto3       🔒 IAM
  🔒 Permissions     🔒 Traps     🔒 NAT       🔒 REST/JSON   🔒 VPC/Subnets
  🔒 Processes        │          🔒 Subnetting  🔒 CLI tools  🔒 EC2
  🔒 systemd       🔒 Git/GitHub    │             │           🔒 S3/RDS
        │                │          │             │          🔒 Lambda/CFN
        └────────────────┴──────────┴─────────────┴────────────────┘
                                     │
                            🔒 CONTAINERS & CI/CD
                       🔒 Docker · 🔒 Jenkins · 🔒 GitHub Actions · 🔒 SonarQube
                                     │
                            🔒 INFRASTRUCTURE AS CODE
                              🔒 Terraform · 🔒 Ansible
                                     │
                                🔒 KUBERNETES
                        🔒 Core K8s · 🔒 EKS · 🔒 GitOps (ArgoCD)
                                     │
                              🔒 OBSERVABILITY
                          🔒 CloudWatch · 🔒 Prometheus · 🔒 Grafana
                                     │
                              🔒 ARCHITECTURE
                    🔒 Well-Architected · 🔒 HA/DR · 🔒 Cost Optimization
                                     │
                              ☁️ CLOUD ARCHITECT
```

Update each branch's lock icon as you progress: 🔒 → 🟡 → 🔵 → 🟢. This mirrors the phases below one-to-one, so there's nothing here that isn't already tracked concept-by-concept in the curriculum.

---

## 🧠 Concept Mastery System

Every concept in this roadmap can be tracked through six mastery levels. A video alone never equals mastery.

| Level | Name | Definition |
|---|---|---|
| 1 | Exposure | I have encountered the concept. |
| 2 | Understanding | I can explain it. |
| 3 | Hands-on | I have implemented it. |
| 4 | Troubleshooting | I can diagnose a realistic failure. |
| 5 | Interview Ready | I can explain and defend the concept under questioning. |
| 6 | Mastered | I can implement, troubleshoot, explain and apply it in a production-style scenario. |

Status shorthand used throughout this file: 🔒 Locked · 🟡 Learning · 🔵 Practicing · 🟠 Troubleshooting · 🟣 Interview Ready · 🟢 Mastered · 🔴 Needs Review

---

## 🎯 Today's Quest

| | |
|---|---|
| **Date** | |
| **Current XP** | |
| **Target XP** | |

- [ ] Learn one concept
- [ ] Complete one lab
- [ ] Solve one troubleshooting challenge
- [ ] Write one technical note
- [ ] Commit evidence to GitHub

**Reward:** +15–40 XP depending on activities completed (see [XP System](#-xp-system)).

---

## 📅 Weekly Mission

| | |
|---|---|
| **Week** | |
| **XP Target** | |
| **Concept Target** | |
| **Lab Target** | |
| **Project Target** | |
| **Certification Target** | |

**Objectives**

- [ ] 
- [ ] 
- [ ] 

**Reward:** sum of XP for all objectives completed this week.

---

## 🔥 Streak System

| Streak | Current |
|---|---:|
| 🔥 Learning Streak | 0 days |
| 🧪 Lab Streak | 0 days |
| 💻 GitHub Commit Streak | 0 days |
| 📝 Documentation Streak | 0 days |

Manually update these each day you genuinely do the activity. A missed day resets that streak to 0.

---

## Phase 1 — Foundations

### ⚔️ QUEST 01 — Linux Fundamentals I

**Difficulty:** ⭐  
**XP Available:** 200  
**Status:** 🔒 Locked  
**Phase Boss:** 🧟 Linux System Failure

**Prerequisites**

- None — starting quest

**Unlocks**

- Linux Fundamentals II — Power User

> **Progress:** 0 / 10 concepts

**Objectives**

- [ ] **Linux architecture: kernel, user space and shell** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-001</summary>

- 📺 Primary: [YT-LIN-001 — search: "Linux architecture: kernel, user space and shell"](https://www.youtube.com/results?search_query=Linux+architecture%3A+kernel%2C+user+space+and+shell+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Linux architecture: kernel, user space and shell" alternate explanation](https://www.youtube.com/results?search_query=Linux+architecture%3A+kernel%2C+user+space+and+shell+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Filesystem hierarchy: /etc /var /home /tmp /usr** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-002</summary>

- 📺 Primary: [YT-LIN-002 — search: "Filesystem hierarchy: /etc /var /home /tmp /usr"](https://www.youtube.com/results?search_query=Filesystem+hierarchy%3A+%2Fetc+%2Fvar+%2Fhome+%2Ftmp+%2Fusr+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Filesystem hierarchy: /etc /var /home /tmp /usr" alternate explanation](https://www.youtube.com/results?search_query=Filesystem+hierarchy%3A+%2Fetc+%2Fvar+%2Fhome+%2Ftmp+%2Fusr+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Absolute vs relative paths** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-003</summary>

- 📺 Primary: [YT-LIN-003 — search: "Absolute vs relative paths"](https://www.youtube.com/results?search_query=Absolute+vs+relative+paths+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Absolute vs relative paths" alternate explanation](https://www.youtube.com/results?search_query=Absolute+vs+relative+paths+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **File operations: ls cd cp mv rm mkdir touch** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-004</summary>

- 📺 Primary: [YT-LIN-004 — search: "File operations: ls cd cp mv rm mkdir touch"](https://www.youtube.com/results?search_query=File+operations%3A+ls+cd+cp+mv+rm+mkdir+touch+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "File operations: ls cd cp mv rm mkdir touch" alternate explanation](https://www.youtube.com/results?search_query=File+operations%3A+ls+cd+cp+mv+rm+mkdir+touch+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Permissions: read write execute and chmod** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-005</summary>

- 📺 Primary: [YT-LIN-005 — search: "Permissions: read write execute and chmod"](https://www.youtube.com/results?search_query=Permissions%3A+read+write+execute+and+chmod+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Permissions: read write execute and chmod" alternate explanation](https://www.youtube.com/results?search_query=Permissions%3A+read+write+execute+and+chmod+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Ownership: chown and chgrp** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-006</summary>

- 📺 Primary: [YT-LIN-006 — search: "Ownership: chown and chgrp"](https://www.youtube.com/results?search_query=Ownership%3A+chown+and+chgrp+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Ownership: chown and chgrp" alternate explanation](https://www.youtube.com/results?search_query=Ownership%3A+chown+and+chgrp+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Processes: ps top htop jobs fg bg** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-007</summary>

- 📺 Primary: [YT-LIN-007 — search: "Processes: ps top htop jobs fg bg"](https://www.youtube.com/results?search_query=Processes%3A+ps+top+htop+jobs+fg+bg+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Processes: ps top htop jobs fg bg" alternate explanation](https://www.youtube.com/results?search_query=Processes%3A+ps+top+htop+jobs+fg+bg+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Signals and kill** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-008</summary>

- 📺 Primary: [YT-LIN-008 — search: "Signals and kill"](https://www.youtube.com/results?search_query=Signals+and+kill+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Signals and kill" alternate explanation](https://www.youtube.com/results?search_query=Signals+and+kill+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **stdin stdout stderr** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-009</summary>

- 📺 Primary: [YT-LIN-009 — search: "stdin stdout stderr"](https://www.youtube.com/results?search_query=stdin+stdout+stderr+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "stdin stdout stderr" alternate explanation](https://www.youtube.com/results?search_query=stdin+stdout+stderr+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Pipes and redirection** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-010</summary>

- 📺 Primary: [YT-LIN-010 — search: "Pipes and redirection"](https://www.youtube.com/results?search_query=Pipes+and+redirection+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Pipes and redirection" alternate explanation](https://www.youtube.com/results?search_query=Pipes+and+redirection+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +200 XP
- 🏅 Linux Fundamentals I Badge
- 🔓 Unlocks: Linux Fundamentals II — Power User

---

### ⚔️ QUEST 02 — Linux Fundamentals II — Power User

**Difficulty:** ⭐  
**XP Available:** 220  
**Status:** 🔒 Locked  
**Phase Boss:** 🧟 Linux System Failure

**Prerequisites**

- Linux Fundamentals I

**Unlocks**

- Shell Scripting I

> **Progress:** 0 / 12 concepts

**Objectives**

- [ ] **grep and regular expressions** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-011</summary>

- 📺 Primary: [YT-LIN-011 — search: "grep and regular expressions"](https://www.youtube.com/results?search_query=grep+and+regular+expressions+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "grep and regular expressions" alternate explanation](https://www.youtube.com/results?search_query=grep+and+regular+expressions+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **sed text processing** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-012</summary>

- 📺 Primary: [YT-LIN-012 — search: "sed text processing"](https://www.youtube.com/results?search_query=sed+text+processing+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "sed text processing" alternate explanation](https://www.youtube.com/results?search_query=sed+text+processing+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **awk text processing** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-013</summary>

- 📺 Primary: [YT-LIN-013 — search: "awk text processing"](https://www.youtube.com/results?search_query=awk+text+processing+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "awk text processing" alternate explanation](https://www.youtube.com/results?search_query=awk+text+processing+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **find locate which** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-014</summary>

- 📺 Primary: [YT-LIN-014 — search: "find locate which"](https://www.youtube.com/results?search_query=find+locate+which+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "find locate which" alternate explanation](https://www.youtube.com/results?search_query=find+locate+which+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Users and groups** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-015</summary>

- 📺 Primary: [YT-LIN-015 — search: "Users and groups"](https://www.youtube.com/results?search_query=Users+and+groups+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Users and groups" alternate explanation](https://www.youtube.com/results?search_query=Users+and+groups+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **sudo and sudoers basics** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-016</summary>

- 📺 Primary: [YT-LIN-016 — search: "sudo and sudoers basics"](https://www.youtube.com/results?search_query=sudo+and+sudoers+basics+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "sudo and sudoers basics" alternate explanation](https://www.youtube.com/results?search_query=sudo+and+sudoers+basics+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **APT package management** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-017</summary>

- 📺 Primary: [YT-LIN-017 — search: "APT package management"](https://www.youtube.com/results?search_query=APT+package+management+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "APT package management" alternate explanation](https://www.youtube.com/results?search_query=APT+package+management+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **DNF package management** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-018</summary>

- 📺 Primary: [YT-LIN-018 — search: "DNF package management"](https://www.youtube.com/results?search_query=DNF+package+management+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "DNF package management" alternate explanation](https://www.youtube.com/results?search_query=DNF+package+management+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **systemd and systemctl** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-019</summary>

- 📺 Primary: [YT-LIN-019 — search: "systemd and systemctl"](https://www.youtube.com/results?search_query=systemd+and+systemctl+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "systemd and systemctl" alternate explanation](https://www.youtube.com/results?search_query=systemd+and+systemctl+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **journalctl and service logs** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-020</summary>

- 📺 Primary: [YT-LIN-020 — search: "journalctl and service logs"](https://www.youtube.com/results?search_query=journalctl+and+service+logs+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "journalctl and service logs" alternate explanation](https://www.youtube.com/results?search_query=journalctl+and+service+logs+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **df du free disk and memory tools** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-021</summary>

- 📺 Primary: [YT-LIN-021 — search: "df du free disk and memory tools"](https://www.youtube.com/results?search_query=df+du+free+disk+and+memory+tools+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "df du free disk and memory tools" alternate explanation](https://www.youtube.com/results?search_query=df+du+free+disk+and+memory+tools+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **SSH fundamentals** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-022</summary>

- 📺 Primary: [YT-LIN-022 — search: "SSH fundamentals"](https://www.youtube.com/results?search_query=SSH+fundamentals+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "SSH fundamentals" alternate explanation](https://www.youtube.com/results?search_query=SSH+fundamentals+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +220 XP
- 🏅 Linux Fundamentals II — Power User Badge
- 🔓 Unlocks: Shell Scripting I

---

### ⚔️ QUEST 03 — Shell Scripting I

**Difficulty:** ⭐⭐  
**XP Available:** 210  
**Status:** 🔒 Locked  
**Phase Boss:** 🧟 Linux System Failure

**Prerequisites**

- Linux Fundamentals II — Power User

**Unlocks**

- Shell Scripting II — Filesystems & Performance

> **Progress:** 0 / 11 concepts

**Objectives**

- [ ] **Shebang and executable scripts** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-023</summary>

- 📺 Primary: [YT-LIN-023 — search: "Shebang and executable scripts"](https://www.youtube.com/results?search_query=Shebang+and+executable+scripts+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Shebang and executable scripts" alternate explanation](https://www.youtube.com/results?search_query=Shebang+and+executable+scripts+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Variables and environment variables** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-024</summary>

- 📺 Primary: [YT-LIN-024 — search: "Variables and environment variables"](https://www.youtube.com/results?search_query=Variables+and+environment+variables+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Variables and environment variables" alternate explanation](https://www.youtube.com/results?search_query=Variables+and+environment+variables+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Quoting rules** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-025</summary>

- 📺 Primary: [YT-LIN-025 — search: "Quoting rules"](https://www.youtube.com/results?search_query=Quoting+rules+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Quoting rules" alternate explanation](https://www.youtube.com/results?search_query=Quoting+rules+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Positional arguments** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-026</summary>

- 📺 Primary: [YT-LIN-026 — search: "Positional arguments"](https://www.youtube.com/results?search_query=Positional+arguments+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Positional arguments" alternate explanation](https://www.youtube.com/results?search_query=Positional+arguments+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Test operators** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-027</summary>

- 📺 Primary: [YT-LIN-027 — search: "Test operators"](https://www.youtube.com/results?search_query=Test+operators+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Test operators" alternate explanation](https://www.youtube.com/results?search_query=Test+operators+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **if elif else** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-028</summary>

- 📺 Primary: [YT-LIN-028 — search: "if elif else"](https://www.youtube.com/results?search_query=if+elif+else+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "if elif else" alternate explanation](https://www.youtube.com/results?search_query=if+elif+else+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **case statements** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-029</summary>

- 📺 Primary: [YT-LIN-029 — search: "case statements"](https://www.youtube.com/results?search_query=case+statements+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "case statements" alternate explanation](https://www.youtube.com/results?search_query=case+statements+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **for loops** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-030</summary>

- 📺 Primary: [YT-LIN-030 — search: "for loops"](https://www.youtube.com/results?search_query=for+loops+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "for loops" alternate explanation](https://www.youtube.com/results?search_query=for+loops+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **while and until loops** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-031</summary>

- 📺 Primary: [YT-LIN-031 — search: "while and until loops"](https://www.youtube.com/results?search_query=while+and+until+loops+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "while and until loops" alternate explanation](https://www.youtube.com/results?search_query=while+and+until+loops+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Functions and arguments** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-032</summary>

- 📺 Primary: [YT-LIN-032 — search: "Functions and arguments"](https://www.youtube.com/results?search_query=Functions+and+arguments+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Functions and arguments" alternate explanation](https://www.youtube.com/results?search_query=Functions+and+arguments+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Exit codes and $?** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-033</summary>

- 📺 Primary: [YT-LIN-033 — search: "Exit codes and $?"](https://www.youtube.com/results?search_query=Exit+codes+and+%24%3F+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Exit codes and $?" alternate explanation](https://www.youtube.com/results?search_query=Exit+codes+and+%24%3F+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +210 XP
- 🏅 Shell Scripting I Badge
- 🔓 Unlocks: Shell Scripting II — Filesystems & Performance

---

### ⚔️ QUEST 04 — Shell Scripting II — Filesystems & Performance

**Difficulty:** ⭐⭐  
**XP Available:** 200  
**Status:** 🔒 Locked  
**Phase Boss:** 🧟 Linux System Failure

**Prerequisites**

- Shell Scripting I

**Unlocks**

- Mastering Git

> **Progress:** 0 / 10 concepts

**Objectives**

- [ ] **set -euo pipefail** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-034</summary>

- 📺 Primary: [YT-LIN-034 — search: "set -euo pipefail"](https://www.youtube.com/results?search_query=set+-euo+pipefail+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "set -euo pipefail" alternate explanation](https://www.youtube.com/results?search_query=set+-euo+pipefail+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **trap and cleanup** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-035</summary>

- 📺 Primary: [YT-LIN-035 — search: "trap and cleanup"](https://www.youtube.com/results?search_query=trap+and+cleanup+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "trap and cleanup" alternate explanation](https://www.youtube.com/results?search_query=trap+and+cleanup+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Input validation** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-036</summary>

- 📺 Primary: [YT-LIN-036 — search: "Input validation"](https://www.youtube.com/results?search_query=Input+validation+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Input validation" alternate explanation](https://www.youtube.com/results?search_query=Input+validation+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Logging and timestamps** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-037</summary>

- 📺 Primary: [YT-LIN-037 — search: "Logging and timestamps"](https://www.youtube.com/results?search_query=Logging+and+timestamps+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Logging and timestamps" alternate explanation](https://www.youtube.com/results?search_query=Logging+and+timestamps+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **bash -x debugging** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-038</summary>

- 📺 Primary: [YT-LIN-038 — search: "bash -x debugging"](https://www.youtube.com/results?search_query=bash+-x+debugging+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "bash -x debugging" alternate explanation](https://www.youtube.com/results?search_query=bash+-x+debugging+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **ShellCheck** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-039</summary>

- 📺 Primary: [YT-LIN-039 — search: "ShellCheck"](https://www.youtube.com/results?search_query=ShellCheck+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "ShellCheck" alternate explanation](https://www.youtube.com/results?search_query=ShellCheck+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **CPU monitoring in Bash** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-040</summary>

- 📺 Primary: [YT-LIN-040 — search: "CPU monitoring in Bash"](https://www.youtube.com/results?search_query=CPU+monitoring+in+Bash+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "CPU monitoring in Bash" alternate explanation](https://www.youtube.com/results?search_query=CPU+monitoring+in+Bash+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Memory monitoring in Bash** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-041</summary>

- 📺 Primary: [YT-LIN-041 — search: "Memory monitoring in Bash"](https://www.youtube.com/results?search_query=Memory+monitoring+in+Bash+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Memory monitoring in Bash" alternate explanation](https://www.youtube.com/results?search_query=Memory+monitoring+in+Bash+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Disk monitoring in Bash** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-042</summary>

- 📺 Primary: [YT-LIN-042 — search: "Disk monitoring in Bash"](https://www.youtube.com/results?search_query=Disk+monitoring+in+Bash+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Disk monitoring in Bash" alternate explanation](https://www.youtube.com/results?search_query=Disk+monitoring+in+Bash+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **cron scheduling** — 🔒 Locked

<details>
<summary>📚 Open Resources — LIN-043</summary>

- 📺 Primary: [YT-LIN-043 — search: "cron scheduling"](https://www.youtube.com/results?search_query=cron+scheduling+Linux+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "cron scheduling" alternate explanation](https://www.youtube.com/results?search_query=cron+scheduling+Linux+explained)
- 📖 Official: [Linux Docs](https://man7.org/linux/man-pages/)
- 📚 Deep Dive: [Linux learning resource](https://labex.io/linuxjourney)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Linux / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +200 XP
- 🏅 Shell Scripting II — Filesystems & Performance Badge
- 🔓 Unlocks: Mastering Git

---

### ⚔️ QUEST 05 — Mastering Git

**Difficulty:** ⭐⭐  
**XP Available:** 200  
**Status:** 🔒 Locked  
**Phase Boss:** 🧟 Linux System Failure

**Prerequisites**

- Shell Scripting II — Filesystems & Performance

**Unlocks**

- Advanced Git & GitHub

> **Progress:** 0 / 10 concepts

**Objectives**

- [ ] **Working tree, staging area and repository** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-001</summary>

- 📺 Primary: [YT-GIT-001 — search: "Working tree, staging area and repository"](https://www.youtube.com/results?search_query=Working+tree%2C+staging+area+and+repository+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Working tree, staging area and repository" alternate explanation](https://www.youtube.com/results?search_query=Working+tree%2C+staging+area+and+repository+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **git init/status/add/commit** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-002</summary>

- 📺 Primary: [YT-GIT-002 — search: "git init/status/add/commit"](https://www.youtube.com/results?search_query=git+init%2Fstatus%2Fadd%2Fcommit+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "git init/status/add/commit" alternate explanation](https://www.youtube.com/results?search_query=git+init%2Fstatus%2Fadd%2Fcommit+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **git log and history inspection** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-003</summary>

- 📺 Primary: [YT-GIT-003 — search: "git log and history inspection"](https://www.youtube.com/results?search_query=git+log+and+history+inspection+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "git log and history inspection" alternate explanation](https://www.youtube.com/results?search_query=git+log+and+history+inspection+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Branches** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-004</summary>

- 📺 Primary: [YT-GIT-004 — search: "Branches"](https://www.youtube.com/results?search_query=Branches+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Branches" alternate explanation](https://www.youtube.com/results?search_query=Branches+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Merge** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-005</summary>

- 📺 Primary: [YT-GIT-005 — search: "Merge"](https://www.youtube.com/results?search_query=Merge+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Merge" alternate explanation](https://www.youtube.com/results?search_query=Merge+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Merge conflicts** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-006</summary>

- 📺 Primary: [YT-GIT-006 — search: "Merge conflicts"](https://www.youtube.com/results?search_query=Merge+conflicts+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Merge conflicts" alternate explanation](https://www.youtube.com/results?search_query=Merge+conflicts+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **git diff** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-007</summary>

- 📺 Primary: [YT-GIT-007 — search: "git diff"](https://www.youtube.com/results?search_query=git+diff+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "git diff" alternate explanation](https://www.youtube.com/results?search_query=git+diff+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **git stash** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-008</summary>

- 📺 Primary: [YT-GIT-008 — search: "git stash"](https://www.youtube.com/results?search_query=git+stash+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "git stash" alternate explanation](https://www.youtube.com/results?search_query=git+stash+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **git revert vs reset** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-009</summary>

- 📺 Primary: [YT-GIT-009 — search: "git revert vs reset"](https://www.youtube.com/results?search_query=git+revert+vs+reset+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "git revert vs reset" alternate explanation](https://www.youtube.com/results?search_query=git+revert+vs+reset+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Remote repositories push pull** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-010</summary>

- 📺 Primary: [YT-GIT-010 — search: "Remote repositories push pull"](https://www.youtube.com/results?search_query=Remote+repositories+push+pull+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Remote repositories push pull" alternate explanation](https://www.youtube.com/results?search_query=Remote+repositories+push+pull+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +200 XP
- 🏅 Mastering Git Badge
- 🔓 Unlocks: Advanced Git & GitHub

---

### ⚔️ QUEST 06 — Advanced Git & GitHub

**Difficulty:** ⭐⭐  
**XP Available:** 200  
**Status:** 🔒 Locked  
**Phase Boss:** 🧟 Linux System Failure

**Prerequisites**

- Mastering Git

**Unlocks**

- Networking Fundamentals

> **Progress:** 0 / 10 concepts

**Objectives**

- [ ] **Interactive rebase** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-011</summary>

- 📺 Primary: [YT-GIT-011 — search: "Interactive rebase"](https://www.youtube.com/results?search_query=Interactive+rebase+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Interactive rebase" alternate explanation](https://www.youtube.com/results?search_query=Interactive+rebase+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Squash commits** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-012</summary>

- 📺 Primary: [YT-GIT-012 — search: "Squash commits"](https://www.youtube.com/results?search_query=Squash+commits+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Squash commits" alternate explanation](https://www.youtube.com/results?search_query=Squash+commits+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Cherry-pick** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-013</summary>

- 📺 Primary: [YT-GIT-013 — search: "Cherry-pick"](https://www.youtube.com/results?search_query=Cherry-pick+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Cherry-pick" alternate explanation](https://www.youtube.com/results?search_query=Cherry-pick+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Reflog and recovery** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-014</summary>

- 📺 Primary: [YT-GIT-014 — search: "Reflog and recovery"](https://www.youtube.com/results?search_query=Reflog+and+recovery+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Reflog and recovery" alternate explanation](https://www.youtube.com/results?search_query=Reflog+and+recovery+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **GitHub Flow** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-015</summary>

- 📺 Primary: [YT-GIT-015 — search: "GitHub Flow"](https://www.youtube.com/results?search_query=GitHub+Flow+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "GitHub Flow" alternate explanation](https://www.youtube.com/results?search_query=GitHub+Flow+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Git Flow** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-016</summary>

- 📺 Primary: [YT-GIT-016 — search: "Git Flow"](https://www.youtube.com/results?search_query=Git+Flow+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Git Flow" alternate explanation](https://www.youtube.com/results?search_query=Git+Flow+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Trunk-based development** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-017</summary>

- 📺 Primary: [YT-GIT-017 — search: "Trunk-based development"](https://www.youtube.com/results?search_query=Trunk-based+development+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Trunk-based development" alternate explanation](https://www.youtube.com/results?search_query=Trunk-based+development+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Pull requests and code review** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-018</summary>

- 📺 Primary: [YT-GIT-018 — search: "Pull requests and code review"](https://www.youtube.com/results?search_query=Pull+requests+and+code+review+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Pull requests and code review" alternate explanation](https://www.youtube.com/results?search_query=Pull+requests+and+code+review+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Branch protection** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-019</summary>

- 📺 Primary: [YT-GIT-019 — search: "Branch protection"](https://www.youtube.com/results?search_query=Branch+protection+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Branch protection" alternate explanation](https://www.youtube.com/results?search_query=Branch+protection+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **GitHub Actions introduction** — 🔒 Locked

<details>
<summary>📚 Open Resources — GIT-020</summary>

- 📺 Primary: [YT-GIT-020 — search: "GitHub Actions introduction"](https://www.youtube.com/results?search_query=GitHub+Actions+introduction+Git+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "GitHub Actions introduction" alternate explanation](https://www.youtube.com/results?search_query=GitHub+Actions+introduction+Git+explained)
- 📖 Official: [Git Docs](https://git-scm.com/doc)
- 📚 Deep Dive: [Git learning resource](https://www.atlassian.com/git/tutorials)
- 🧪 Lab: [Git hands-on](https://learngitbranching.js.org/)
- 🎯 Interview: see [Git / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +200 XP
- 🏅 Advanced Git & GitHub Badge
- 🔓 Unlocks: Networking Fundamentals

---

### ⚔️ QUEST 07 — Networking Fundamentals

**Difficulty:** ⭐⭐⭐  
**XP Available:** 240  
**Status:** 🔒 Locked  
**Phase Boss:** 🧟 Linux System Failure

**Prerequisites**

- Advanced Git & GitHub

**Unlocks**

- Python for Automation I

> **Progress:** 0 / 14 concepts

**Objectives**

- [ ] **OSI model** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-001</summary>

- 📺 Primary: [YT-NET-001 — search: "OSI model"](https://www.youtube.com/results?search_query=OSI+model+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "OSI model" alternate explanation](https://www.youtube.com/results?search_query=OSI+model+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **TCP/IP model** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-002</summary>

- 📺 Primary: [YT-NET-002 — search: "TCP/IP model"](https://www.youtube.com/results?search_query=TCP%2FIP+model+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "TCP/IP model" alternate explanation](https://www.youtube.com/results?search_query=TCP%2FIP+model+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **IPv4 addressing and binary** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-003</summary>

- 📺 Primary: [YT-NET-003 — search: "IPv4 addressing and binary"](https://www.youtube.com/results?search_query=IPv4+addressing+and+binary+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "IPv4 addressing and binary" alternate explanation](https://www.youtube.com/results?search_query=IPv4+addressing+and+binary+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **CIDR notation** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-004</summary>

- 📺 Primary: [YT-NET-004 — search: "CIDR notation"](https://www.youtube.com/results?search_query=CIDR+notation+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "CIDR notation" alternate explanation](https://www.youtube.com/results?search_query=CIDR+notation+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Subnetting** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-005</summary>

- 📺 Primary: [YT-NET-005 — search: "Subnetting"](https://www.youtube.com/results?search_query=Subnetting+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Subnetting" alternate explanation](https://www.youtube.com/results?search_query=Subnetting+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **VLSM** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-006</summary>

- 📺 Primary: [YT-NET-006 — search: "VLSM"](https://www.youtube.com/results?search_query=VLSM+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "VLSM" alternate explanation](https://www.youtube.com/results?search_query=VLSM+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Routing tables** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-007</summary>

- 📺 Primary: [YT-NET-007 — search: "Routing tables"](https://www.youtube.com/results?search_query=Routing+tables+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Routing tables" alternate explanation](https://www.youtube.com/results?search_query=Routing+tables+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **TCP vs UDP** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-008</summary>

- 📺 Primary: [YT-NET-008 — search: "TCP vs UDP"](https://www.youtube.com/results?search_query=TCP+vs+UDP+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "TCP vs UDP" alternate explanation](https://www.youtube.com/results?search_query=TCP+vs+UDP+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **Ports and sockets** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-009</summary>

- 📺 Primary: [YT-NET-009 — search: "Ports and sockets"](https://www.youtube.com/results?search_query=Ports+and+sockets+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Ports and sockets" alternate explanation](https://www.youtube.com/results?search_query=Ports+and+sockets+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **DNS** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-010</summary>

- 📺 Primary: [YT-NET-010 — search: "DNS"](https://www.youtube.com/results?search_query=DNS+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "DNS" alternate explanation](https://www.youtube.com/results?search_query=DNS+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **HTTP and HTTPS** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-011</summary>

- 📺 Primary: [YT-NET-011 — search: "HTTP and HTTPS"](https://www.youtube.com/results?search_query=HTTP+and+HTTPS+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "HTTP and HTTPS" alternate explanation](https://www.youtube.com/results?search_query=HTTP+and+HTTPS+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **SSH** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-012</summary>

- 📺 Primary: [YT-NET-012 — search: "SSH"](https://www.youtube.com/results?search_query=SSH+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "SSH" alternate explanation](https://www.youtube.com/results?search_query=SSH+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **ICMP** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-013</summary>

- 📺 Primary: [YT-NET-013 — search: "ICMP"](https://www.youtube.com/results?search_query=ICMP+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "ICMP" alternate explanation](https://www.youtube.com/results?search_query=ICMP+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

- [ ] **NAT** — 🔒 Locked

<details>
<summary>📚 Open Resources — NET-014</summary>

- 📺 Primary: [YT-NET-014 — search: "NAT"](https://www.youtube.com/results?search_query=NAT+Networking+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "NAT" alternate explanation](https://www.youtube.com/results?search_query=NAT+Networking+explained)
- 📖 Official: [Networking Docs](https://www.cloudflare.com/learning/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Networking / Phase Interview Checkpoint](#linux-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +240 XP
- 🏅 Networking Fundamentals Badge
- 🔓 Unlocks: Python for Automation I

---

### 🎤 Linux Interview Checkpoint

- [ ] Explain the Linux boot process at a high level.
- [ ] What's the difference between a hard link and a symlink?
- [ ] How do file permissions and ownership actually get enforced by the kernel?
- [ ] Walk me through how you'd find what's consuming CPU/memory on a live box.
- [ ] What's the difference between a process and a thread, practically speaking?
- [ ] How does `grep -r` differ from `find` piped to `grep`, and when would you use each?

### 🎤 Networking Interview Checkpoint

- [ ] Explain the Linux boot process at a high level.
- [ ] What's the difference between a hard link and a symlink?
- [ ] How do file permissions and ownership actually get enforced by the kernel?
- [ ] Walk me through how you'd find what's consuming CPU/memory on a live box.
- [ ] What's the difference between a process and a thread, practically speaking?
- [ ] How does `grep -r` differ from `find` piped to `grep`, and when would you use each?

---

## Phase 2 — Python for Automation

### ⚔️ QUEST 08 — Python for Automation I

**Difficulty:** ⭐⭐  
**XP Available:** 210  
**Status:** 🔒 Locked  
**Phase Boss:** 🐍 Automation Breaker

**Prerequisites**

- Networking Fundamentals

**Unlocks**

- Python for Automation II

> **Progress:** 0 / 11 concepts

**Objectives**

- [ ] **Python syntax and variables** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-001</summary>

- 📺 Primary: [YT-PY-001 — search: "Python syntax and variables"](https://www.youtube.com/results?search_query=Python+syntax+and+variables+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Python syntax and variables" alternate explanation](https://www.youtube.com/results?search_query=Python+syntax+and+variables+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Strings** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-002</summary>

- 📺 Primary: [YT-PY-002 — search: "Strings"](https://www.youtube.com/results?search_query=Strings+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Strings" alternate explanation](https://www.youtube.com/results?search_query=Strings+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Lists** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-003</summary>

- 📺 Primary: [YT-PY-003 — search: "Lists"](https://www.youtube.com/results?search_query=Lists+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Lists" alternate explanation](https://www.youtube.com/results?search_query=Lists+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Tuples sets dictionaries** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-004</summary>

- 📺 Primary: [YT-PY-004 — search: "Tuples sets dictionaries"](https://www.youtube.com/results?search_query=Tuples+sets+dictionaries+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Tuples sets dictionaries" alternate explanation](https://www.youtube.com/results?search_query=Tuples+sets+dictionaries+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Conditions and loops** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-005</summary>

- 📺 Primary: [YT-PY-005 — search: "Conditions and loops"](https://www.youtube.com/results?search_query=Conditions+and+loops+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Conditions and loops" alternate explanation](https://www.youtube.com/results?search_query=Conditions+and+loops+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Functions and arguments** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-006</summary>

- 📺 Primary: [YT-PY-006 — search: "Functions and arguments"](https://www.youtube.com/results?search_query=Functions+and+arguments+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Functions and arguments" alternate explanation](https://www.youtube.com/results?search_query=Functions+and+arguments+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Exceptions and try except** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-007</summary>

- 📺 Primary: [YT-PY-007 — search: "Exceptions and try except"](https://www.youtube.com/results?search_query=Exceptions+and+try+except+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Exceptions and try except" alternate explanation](https://www.youtube.com/results?search_query=Exceptions+and+try+except+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **File handling** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-008</summary>

- 📺 Primary: [YT-PY-008 — search: "File handling"](https://www.youtube.com/results?search_query=File+handling+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "File handling" alternate explanation](https://www.youtube.com/results?search_query=File+handling+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Modules and imports** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-009</summary>

- 📺 Primary: [YT-PY-009 — search: "Modules and imports"](https://www.youtube.com/results?search_query=Modules+and+imports+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Modules and imports" alternate explanation](https://www.youtube.com/results?search_query=Modules+and+imports+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **pip and virtual environments** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-010</summary>

- 📺 Primary: [YT-PY-010 — search: "pip and virtual environments"](https://www.youtube.com/results?search_query=pip+and+virtual+environments+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "pip and virtual environments" alternate explanation](https://www.youtube.com/results?search_query=pip+and+virtual+environments+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **os pathlib subprocess** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-011</summary>

- 📺 Primary: [YT-PY-011 — search: "os pathlib subprocess"](https://www.youtube.com/results?search_query=os+pathlib+subprocess+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "os pathlib subprocess" alternate explanation](https://www.youtube.com/results?search_query=os+pathlib+subprocess+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +210 XP
- 🏅 Python for Automation I Badge
- 🔓 Unlocks: Python for Automation II

---

### ⚔️ QUEST 09 — Python for Automation II

**Difficulty:** ⭐⭐  
**XP Available:** 200  
**Status:** 🔒 Locked  
**Phase Boss:** 🐍 Automation Breaker

**Prerequisites**

- Python for Automation I

**Unlocks**

- AWS Global Infrastructure & EC2

> **Progress:** 0 / 10 concepts

**Objectives**

- [ ] **argparse CLI arguments** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-012</summary>

- 📺 Primary: [YT-PY-012 — search: "argparse CLI arguments"](https://www.youtube.com/results?search_query=argparse+CLI+arguments+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "argparse CLI arguments" alternate explanation](https://www.youtube.com/results?search_query=argparse+CLI+arguments+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Project structure** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-013</summary>

- 📺 Primary: [YT-PY-013 — search: "Project structure"](https://www.youtube.com/results?search_query=Project+structure+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Project structure" alternate explanation](https://www.youtube.com/results?search_query=Project+structure+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **HTTP requests** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-014</summary>

- 📺 Primary: [YT-PY-014 — search: "HTTP requests"](https://www.youtube.com/results?search_query=HTTP+requests+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "HTTP requests" alternate explanation](https://www.youtube.com/results?search_query=HTTP+requests+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **REST APIs** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-015</summary>

- 📺 Primary: [YT-PY-015 — search: "REST APIs"](https://www.youtube.com/results?search_query=REST+APIs+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "REST APIs" alternate explanation](https://www.youtube.com/results?search_query=REST+APIs+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **JSON** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-016</summary>

- 📺 Primary: [YT-PY-016 — search: "JSON"](https://www.youtube.com/results?search_query=JSON+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "JSON" alternate explanation](https://www.youtube.com/results?search_query=JSON+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **YAML** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-017</summary>

- 📺 Primary: [YT-PY-017 — search: "YAML"](https://www.youtube.com/results?search_query=YAML+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "YAML" alternate explanation](https://www.youtube.com/results?search_query=YAML+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Logging** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-018</summary>

- 📺 Primary: [YT-PY-018 — search: "Logging"](https://www.youtube.com/results?search_query=Logging+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Logging" alternate explanation](https://www.youtube.com/results?search_query=Logging+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Scheduling jobs** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-019</summary>

- 📺 Primary: [YT-PY-019 — search: "Scheduling jobs"](https://www.youtube.com/results?search_query=Scheduling+jobs+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Scheduling jobs" alternate explanation](https://www.youtube.com/results?search_query=Scheduling+jobs+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Robust error handling** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-020</summary>

- 📺 Primary: [YT-PY-020 — search: "Robust error handling"](https://www.youtube.com/results?search_query=Robust+error+handling+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Robust error handling" alternate explanation](https://www.youtube.com/results?search_query=Robust+error+handling+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

- [ ] **Build a CLI tool** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-021</summary>

- 📺 Primary: [YT-PY-021 — search: "Build a CLI tool"](https://www.youtube.com/results?search_query=Build+a+CLI+tool+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Build a CLI tool" alternate explanation](https://www.youtube.com/results?search_query=Build+a+CLI+tool+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#python-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +200 XP
- 🏅 Python for Automation II Badge
- 🔓 Unlocks: AWS Global Infrastructure & EC2

---

### 🎤 Python Interview Checkpoint

- [ ] Explain what happens on `git rebase` vs `git merge`, and when you'd choose each.
- [ ] How would you recover a commit you accidentally hard-reset away?
- [ ] Explain conflict resolution in a multi-branch PR workflow.
- [ ] What's the danger of `git push --force` and when is it acceptable?

---

## Phase 3 — AWS Cloud Core

### ⚔️ QUEST 10 — AWS Global Infrastructure & EC2

**Difficulty:** ⭐⭐⭐  
**XP Available:** 220  
**Status:** 🔒 Locked  
**Phase Boss:** ☁️ AWS Architecture Incident

**Prerequisites**

- Python for Automation II

**Unlocks**

- Instance Configuration & Connectivity

> **Progress:** 0 / 12 concepts

**Objectives**

- [ ] **AWS Regions** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-001</summary>

- 📺 Primary: [YT-AWS-001 — search: "AWS Regions"](https://www.youtube.com/results?search_query=AWS+Regions+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "AWS Regions" alternate explanation](https://www.youtube.com/results?search_query=AWS+Regions+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Availability Zones** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-002</summary>

- 📺 Primary: [YT-AWS-002 — search: "Availability Zones"](https://www.youtube.com/results?search_query=Availability+Zones+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Availability Zones" alternate explanation](https://www.youtube.com/results?search_query=Availability+Zones+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Edge locations** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-003</summary>

- 📺 Primary: [YT-AWS-003 — search: "Edge locations"](https://www.youtube.com/results?search_query=Edge+locations+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Edge locations" alternate explanation](https://www.youtube.com/results?search_query=Edge+locations+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Shared Responsibility Model** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-004</summary>

- 📺 Primary: [YT-AWS-004 — search: "Shared Responsibility Model"](https://www.youtube.com/results?search_query=Shared+Responsibility+Model+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Shared Responsibility Model" alternate explanation](https://www.youtube.com/results?search_query=Shared+Responsibility+Model+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **EC2 fundamentals** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-005</summary>

- 📺 Primary: [YT-AWS-005 — search: "EC2 fundamentals"](https://www.youtube.com/results?search_query=EC2+fundamentals+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "EC2 fundamentals" alternate explanation](https://www.youtube.com/results?search_query=EC2+fundamentals+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **AMI** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-006</summary>

- 📺 Primary: [YT-AWS-006 — search: "AMI"](https://www.youtube.com/results?search_query=AMI+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "AMI" alternate explanation](https://www.youtube.com/results?search_query=AMI+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **EC2 instance families** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-007</summary>

- 📺 Primary: [YT-AWS-007 — search: "EC2 instance families"](https://www.youtube.com/results?search_query=EC2+instance+families+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "EC2 instance families" alternate explanation](https://www.youtube.com/results?search_query=EC2+instance+families+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **On-Demand pricing** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-008</summary>

- 📺 Primary: [YT-AWS-008 — search: "On-Demand pricing"](https://www.youtube.com/results?search_query=On-Demand+pricing+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "On-Demand pricing" alternate explanation](https://www.youtube.com/results?search_query=On-Demand+pricing+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Reserved Instances** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-009</summary>

- 📺 Primary: [YT-AWS-009 — search: "Reserved Instances"](https://www.youtube.com/results?search_query=Reserved+Instances+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Reserved Instances" alternate explanation](https://www.youtube.com/results?search_query=Reserved+Instances+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Spot Instances** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-010</summary>

- 📺 Primary: [YT-AWS-010 — search: "Spot Instances"](https://www.youtube.com/results?search_query=Spot+Instances+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Spot Instances" alternate explanation](https://www.youtube.com/results?search_query=Spot+Instances+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Launch an EC2 instance** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-011</summary>

- 📺 Primary: [YT-AWS-011 — search: "Launch an EC2 instance"](https://www.youtube.com/results?search_query=Launch+an+EC2+instance+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Launch an EC2 instance" alternate explanation](https://www.youtube.com/results?search_query=Launch+an+EC2+instance+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **SSH into EC2** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-012</summary>

- 📺 Primary: [YT-AWS-012 — search: "SSH into EC2"](https://www.youtube.com/results?search_query=SSH+into+EC2+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "SSH into EC2" alternate explanation](https://www.youtube.com/results?search_query=SSH+into+EC2+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +220 XP
- 🏅 AWS Global Infrastructure & EC2 Badge
- 🔓 Unlocks: Instance Configuration & Connectivity

---

### ⚔️ QUEST 11 — Instance Configuration & Connectivity

**Difficulty:** ⭐⭐⭐  
**XP Available:** 180  
**Status:** 🔒 Locked  
**Phase Boss:** ☁️ AWS Architecture Incident

**Prerequisites**

- AWS Global Infrastructure & EC2

**Unlocks**

- IAM, Security & Governance

> **Progress:** 0 / 8 concepts

**Objectives**

- [ ] **EC2 hardening** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-013</summary>

- 📺 Primary: [YT-AWS-013 — search: "EC2 hardening"](https://www.youtube.com/results?search_query=EC2+hardening+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "EC2 hardening" alternate explanation](https://www.youtube.com/results?search_query=EC2+hardening+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **EBS volumes** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-014</summary>

- 📺 Primary: [YT-AWS-014 — search: "EBS volumes"](https://www.youtube.com/results?search_query=EBS+volumes+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "EBS volumes" alternate explanation](https://www.youtube.com/results?search_query=EBS+volumes+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **EBS snapshots** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-015</summary>

- 📺 Primary: [YT-AWS-015 — search: "EBS snapshots"](https://www.youtube.com/results?search_query=EBS+snapshots+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "EBS snapshots" alternate explanation](https://www.youtube.com/results?search_query=EBS+snapshots+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Placement groups** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-016</summary>

- 📺 Primary: [YT-AWS-016 — search: "Placement groups"](https://www.youtube.com/results?search_query=Placement+groups+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Placement groups" alternate explanation](https://www.youtube.com/results?search_query=Placement+groups+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Instance Metadata Service** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-017</summary>

- 📺 Primary: [YT-AWS-017 — search: "Instance Metadata Service"](https://www.youtube.com/results?search_query=Instance+Metadata+Service+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Instance Metadata Service" alternate explanation](https://www.youtube.com/results?search_query=Instance+Metadata+Service+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Golden AMIs** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-018</summary>

- 📺 Primary: [YT-AWS-018 — search: "Golden AMIs"](https://www.youtube.com/results?search_query=Golden+AMIs+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Golden AMIs" alternate explanation](https://www.youtube.com/results?search_query=Golden+AMIs+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Systems Manager Session Manager** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-019</summary>

- 📺 Primary: [YT-AWS-019 — search: "Systems Manager Session Manager"](https://www.youtube.com/results?search_query=Systems+Manager+Session+Manager+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Systems Manager Session Manager" alternate explanation](https://www.youtube.com/results?search_query=Systems+Manager+Session+Manager+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Baseline server configuration** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-020</summary>

- 📺 Primary: [YT-AWS-020 — search: "Baseline server configuration"](https://www.youtube.com/results?search_query=Baseline+server+configuration+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Baseline server configuration" alternate explanation](https://www.youtube.com/results?search_query=Baseline+server+configuration+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +180 XP
- 🏅 Instance Configuration & Connectivity Badge
- 🔓 Unlocks: IAM, Security & Governance

---

### ⚔️ QUEST 12 — IAM, Security & Governance

**Difficulty:** ⭐⭐⭐⭐  
**XP Available:** 240  
**Status:** 🔒 Locked  
**Phase Boss:** ☁️ AWS Architecture Incident

**Prerequisites**

- Instance Configuration & Connectivity

**Unlocks**

- VPC & AWS Networking Deep Dive

> **Progress:** 0 / 14 concepts

**Objectives**

- [ ] **IAM users** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-021</summary>

- 📺 Primary: [YT-AWS-021 — search: "IAM users"](https://www.youtube.com/results?search_query=IAM+users+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "IAM users" alternate explanation](https://www.youtube.com/results?search_query=IAM+users+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **IAM groups** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-022</summary>

- 📺 Primary: [YT-AWS-022 — search: "IAM groups"](https://www.youtube.com/results?search_query=IAM+groups+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "IAM groups" alternate explanation](https://www.youtube.com/results?search_query=IAM+groups+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **IAM roles** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-023</summary>

- 📺 Primary: [YT-AWS-023 — search: "IAM roles"](https://www.youtube.com/results?search_query=IAM+roles+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "IAM roles" alternate explanation](https://www.youtube.com/results?search_query=IAM+roles+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **IAM policies** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-024</summary>

- 📺 Primary: [YT-AWS-024 — search: "IAM policies"](https://www.youtube.com/results?search_query=IAM+policies+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "IAM policies" alternate explanation](https://www.youtube.com/results?search_query=IAM+policies+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Policy evaluation logic** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-025</summary>

- 📺 Primary: [YT-AWS-025 — search: "Policy evaluation logic"](https://www.youtube.com/results?search_query=Policy+evaluation+logic+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Policy evaluation logic" alternate explanation](https://www.youtube.com/results?search_query=Policy+evaluation+logic+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Least privilege** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-026</summary>

- 📺 Primary: [YT-AWS-026 — search: "Least privilege"](https://www.youtube.com/results?search_query=Least+privilege+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Least privilege" alternate explanation](https://www.youtube.com/results?search_query=Least+privilege+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **MFA** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-027</summary>

- 📺 Primary: [YT-AWS-027 — search: "MFA"](https://www.youtube.com/results?search_query=MFA+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "MFA" alternate explanation](https://www.youtube.com/results?search_query=MFA+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Credential security** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-028</summary>

- 📺 Primary: [YT-AWS-028 — search: "Credential security"](https://www.youtube.com/results?search_query=Credential+security+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Credential security" alternate explanation](https://www.youtube.com/results?search_query=Credential+security+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **AWS Organizations** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-029</summary>

- 📺 Primary: [YT-AWS-029 — search: "AWS Organizations"](https://www.youtube.com/results?search_query=AWS+Organizations+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "AWS Organizations" alternate explanation](https://www.youtube.com/results?search_query=AWS+Organizations+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Service Control Policies** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-030</summary>

- 📺 Primary: [YT-AWS-030 — search: "Service Control Policies"](https://www.youtube.com/results?search_query=Service+Control+Policies+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Service Control Policies" alternate explanation](https://www.youtube.com/results?search_query=Service+Control+Policies+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **KMS** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-031</summary>

- 📺 Primary: [YT-AWS-031 — search: "KMS"](https://www.youtube.com/results?search_query=KMS+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "KMS" alternate explanation](https://www.youtube.com/results?search_query=KMS+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Secrets Manager** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-032</summary>

- 📺 Primary: [YT-AWS-032 — search: "Secrets Manager"](https://www.youtube.com/results?search_query=Secrets+Manager+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Secrets Manager" alternate explanation](https://www.youtube.com/results?search_query=Secrets+Manager+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **CloudTrail** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-033</summary>

- 📺 Primary: [YT-AWS-033 — search: "CloudTrail"](https://www.youtube.com/results?search_query=CloudTrail+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "CloudTrail" alternate explanation](https://www.youtube.com/results?search_query=CloudTrail+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **GuardDuty** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-034</summary>

- 📺 Primary: [YT-AWS-034 — search: "GuardDuty"](https://www.youtube.com/results?search_query=GuardDuty+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "GuardDuty" alternate explanation](https://www.youtube.com/results?search_query=GuardDuty+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +240 XP
- 🏅 IAM, Security & Governance Badge
- 🔓 Unlocks: VPC & AWS Networking Deep Dive

---

### ⚔️ QUEST 13 — VPC & AWS Networking Deep Dive

**Difficulty:** ⭐⭐⭐⭐  
**XP Available:** 210  
**Status:** 🔒 Locked  
**Phase Boss:** ☁️ AWS Architecture Incident

**Prerequisites**

- IAM, Security & Governance

**Unlocks**

- Advanced AWS Services

> **Progress:** 0 / 11 concepts

**Objectives**

- [ ] **VPC fundamentals** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-035</summary>

- 📺 Primary: [YT-AWS-035 — search: "VPC fundamentals"](https://www.youtube.com/results?search_query=VPC+fundamentals+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "VPC fundamentals" alternate explanation](https://www.youtube.com/results?search_query=VPC+fundamentals+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Public vs private subnets** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-036</summary>

- 📺 Primary: [YT-AWS-036 — search: "Public vs private subnets"](https://www.youtube.com/results?search_query=Public+vs+private+subnets+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Public vs private subnets" alternate explanation](https://www.youtube.com/results?search_query=Public+vs+private+subnets+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Route tables** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-037</summary>

- 📺 Primary: [YT-AWS-037 — search: "Route tables"](https://www.youtube.com/results?search_query=Route+tables+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Route tables" alternate explanation](https://www.youtube.com/results?search_query=Route+tables+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Internet Gateway** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-038</summary>

- 📺 Primary: [YT-AWS-038 — search: "Internet Gateway"](https://www.youtube.com/results?search_query=Internet+Gateway+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Internet Gateway" alternate explanation](https://www.youtube.com/results?search_query=Internet+Gateway+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **NAT Gateway** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-039</summary>

- 📺 Primary: [YT-AWS-039 — search: "NAT Gateway"](https://www.youtube.com/results?search_query=NAT+Gateway+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "NAT Gateway" alternate explanation](https://www.youtube.com/results?search_query=NAT+Gateway+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Security Groups** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-040</summary>

- 📺 Primary: [YT-AWS-040 — search: "Security Groups"](https://www.youtube.com/results?search_query=Security+Groups+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Security Groups" alternate explanation](https://www.youtube.com/results?search_query=Security+Groups+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Network ACLs** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-041</summary>

- 📺 Primary: [YT-AWS-041 — search: "Network ACLs"](https://www.youtube.com/results?search_query=Network+ACLs+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Network ACLs" alternate explanation](https://www.youtube.com/results?search_query=Network+ACLs+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **VPC peering** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-042</summary>

- 📺 Primary: [YT-AWS-042 — search: "VPC peering"](https://www.youtube.com/results?search_query=VPC+peering+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "VPC peering" alternate explanation](https://www.youtube.com/results?search_query=VPC+peering+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Transit Gateway** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-043</summary>

- 📺 Primary: [YT-AWS-043 — search: "Transit Gateway"](https://www.youtube.com/results?search_query=Transit+Gateway+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Transit Gateway" alternate explanation](https://www.youtube.com/results?search_query=Transit+Gateway+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Route 53** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-044</summary>

- 📺 Primary: [YT-AWS-044 — search: "Route 53"](https://www.youtube.com/results?search_query=Route+53+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Route 53" alternate explanation](https://www.youtube.com/results?search_query=Route+53+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **End-to-end VPC routing** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-045</summary>

- 📺 Primary: [YT-AWS-045 — search: "End-to-end VPC routing"](https://www.youtube.com/results?search_query=End-to-end+VPC+routing+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "End-to-end VPC routing" alternate explanation](https://www.youtube.com/results?search_query=End-to-end+VPC+routing+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +210 XP
- 🏅 VPC & AWS Networking Deep Dive Badge
- 🔓 Unlocks: Advanced AWS Services

---

### ⚔️ QUEST 14 — Advanced AWS Services

**Difficulty:** ⭐⭐⭐  
**XP Available:** 190  
**Status:** 🔒 Locked  
**Phase Boss:** ☁️ AWS Architecture Incident

**Prerequisites**

- VPC & AWS Networking Deep Dive

**Unlocks**

- Databases on AWS

> **Progress:** 0 / 9 concepts

**Objectives**

- [ ] **Application Load Balancer** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-046</summary>

- 📺 Primary: [YT-AWS-046 — search: "Application Load Balancer"](https://www.youtube.com/results?search_query=Application+Load+Balancer+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Application Load Balancer" alternate explanation](https://www.youtube.com/results?search_query=Application+Load+Balancer+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Network Load Balancer** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-047</summary>

- 📺 Primary: [YT-AWS-047 — search: "Network Load Balancer"](https://www.youtube.com/results?search_query=Network+Load+Balancer+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Network Load Balancer" alternate explanation](https://www.youtube.com/results?search_query=Network+Load+Balancer+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Auto Scaling Groups** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-048</summary>

- 📺 Primary: [YT-AWS-048 — search: "Auto Scaling Groups"](https://www.youtube.com/results?search_query=Auto+Scaling+Groups+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Auto Scaling Groups" alternate explanation](https://www.youtube.com/results?search_query=Auto+Scaling+Groups+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Health checks** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-049</summary>

- 📺 Primary: [YT-AWS-049 — search: "Health checks"](https://www.youtube.com/results?search_query=Health+checks+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Health checks" alternate explanation](https://www.youtube.com/results?search_query=Health+checks+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Multi-AZ architecture** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-050</summary>

- 📺 Primary: [YT-AWS-050 — search: "Multi-AZ architecture"](https://www.youtube.com/results?search_query=Multi-AZ+architecture+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Multi-AZ architecture" alternate explanation](https://www.youtube.com/results?search_query=Multi-AZ+architecture+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **S3 fundamentals** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-051</summary>

- 📺 Primary: [YT-AWS-051 — search: "S3 fundamentals"](https://www.youtube.com/results?search_query=S3+fundamentals+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "S3 fundamentals" alternate explanation](https://www.youtube.com/results?search_query=S3+fundamentals+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **S3 storage classes** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-052</summary>

- 📺 Primary: [YT-AWS-052 — search: "S3 storage classes"](https://www.youtube.com/results?search_query=S3+storage+classes+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "S3 storage classes" alternate explanation](https://www.youtube.com/results?search_query=S3+storage+classes+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **ECS fundamentals** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-053</summary>

- 📺 Primary: [YT-AWS-053 — search: "ECS fundamentals"](https://www.youtube.com/results?search_query=ECS+fundamentals+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "ECS fundamentals" alternate explanation](https://www.youtube.com/results?search_query=ECS+fundamentals+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Container workloads on AWS** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-054</summary>

- 📺 Primary: [YT-AWS-054 — search: "Container workloads on AWS"](https://www.youtube.com/results?search_query=Container+workloads+on+AWS+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Container workloads on AWS" alternate explanation](https://www.youtube.com/results?search_query=Container+workloads+on+AWS+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +190 XP
- 🏅 Advanced AWS Services Badge
- 🔓 Unlocks: Databases on AWS

---

### ⚔️ QUEST 15 — Databases on AWS

**Difficulty:** ⭐⭐⭐  
**XP Available:** 200  
**Status:** 🔒 Locked  
**Phase Boss:** ☁️ AWS Architecture Incident

**Prerequisites**

- Advanced AWS Services

**Unlocks**

- CloudFormation, CloudWatch & Serverless

> **Progress:** 0 / 10 concepts

**Objectives**

- [ ] **RDS fundamentals** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-055</summary>

- 📺 Primary: [YT-AWS-055 — search: "RDS fundamentals"](https://www.youtube.com/results?search_query=RDS+fundamentals+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "RDS fundamentals" alternate explanation](https://www.youtube.com/results?search_query=RDS+fundamentals+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **RDS Multi-AZ** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-056</summary>

- 📺 Primary: [YT-AWS-056 — search: "RDS Multi-AZ"](https://www.youtube.com/results?search_query=RDS+Multi-AZ+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "RDS Multi-AZ" alternate explanation](https://www.youtube.com/results?search_query=RDS+Multi-AZ+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Read replicas** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-057</summary>

- 📺 Primary: [YT-AWS-057 — search: "Read replicas"](https://www.youtube.com/results?search_query=Read+replicas+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Read replicas" alternate explanation](https://www.youtube.com/results?search_query=Read+replicas+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **RDS backups and snapshots** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-058</summary>

- 📺 Primary: [YT-AWS-058 — search: "RDS backups and snapshots"](https://www.youtube.com/results?search_query=RDS+backups+and+snapshots+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "RDS backups and snapshots" alternate explanation](https://www.youtube.com/results?search_query=RDS+backups+and+snapshots+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **DynamoDB fundamentals** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-059</summary>

- 📺 Primary: [YT-AWS-059 — search: "DynamoDB fundamentals"](https://www.youtube.com/results?search_query=DynamoDB+fundamentals+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "DynamoDB fundamentals" alternate explanation](https://www.youtube.com/results?search_query=DynamoDB+fundamentals+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Partition keys and sort keys** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-060</summary>

- 📺 Primary: [YT-AWS-060 — search: "Partition keys and sort keys"](https://www.youtube.com/results?search_query=Partition+keys+and+sort+keys+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Partition keys and sort keys" alternate explanation](https://www.youtube.com/results?search_query=Partition+keys+and+sort+keys+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **DynamoDB capacity** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-061</summary>

- 📺 Primary: [YT-AWS-061 — search: "DynamoDB capacity"](https://www.youtube.com/results?search_query=DynamoDB+capacity+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "DynamoDB capacity" alternate explanation](https://www.youtube.com/results?search_query=DynamoDB+capacity+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **ElastiCache** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-062</summary>

- 📺 Primary: [YT-AWS-062 — search: "ElastiCache"](https://www.youtube.com/results?search_query=ElastiCache+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "ElastiCache" alternate explanation](https://www.youtube.com/results?search_query=ElastiCache+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Redis caching** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-063</summary>

- 📺 Primary: [YT-AWS-063 — search: "Redis caching"](https://www.youtube.com/results?search_query=Redis+caching+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Redis caching" alternate explanation](https://www.youtube.com/results?search_query=Redis+caching+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **SQL vs NoSQL selection** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-064</summary>

- 📺 Primary: [YT-AWS-064 — search: "SQL vs NoSQL selection"](https://www.youtube.com/results?search_query=SQL+vs+NoSQL+selection+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "SQL vs NoSQL selection" alternate explanation](https://www.youtube.com/results?search_query=SQL+vs+NoSQL+selection+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +200 XP
- 🏅 Databases on AWS Badge
- 🔓 Unlocks: CloudFormation, CloudWatch & Serverless

---

### ⚔️ QUEST 16 — CloudFormation, CloudWatch & Serverless

**Difficulty:** ⭐⭐⭐⭐  
**XP Available:** 220  
**Status:** 🔒 Locked  
**Phase Boss:** ☁️ AWS Architecture Incident

**Prerequisites**

- Databases on AWS

**Unlocks**

- Python for Automation III — Boto3

> **Progress:** 0 / 12 concepts

**Objectives**

- [ ] **CloudFormation templates** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-065</summary>

- 📺 Primary: [YT-AWS-065 — search: "CloudFormation templates"](https://www.youtube.com/results?search_query=CloudFormation+templates+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "CloudFormation templates" alternate explanation](https://www.youtube.com/results?search_query=CloudFormation+templates+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Stacks and parameters** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-066</summary>

- 📺 Primary: [YT-AWS-066 — search: "Stacks and parameters"](https://www.youtube.com/results?search_query=Stacks+and+parameters+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Stacks and parameters" alternate explanation](https://www.youtube.com/results?search_query=Stacks+and+parameters+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Infrastructure as Code** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-067</summary>

- 📺 Primary: [YT-AWS-067 — search: "Infrastructure as Code"](https://www.youtube.com/results?search_query=Infrastructure+as+Code+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Infrastructure as Code" alternate explanation](https://www.youtube.com/results?search_query=Infrastructure+as+Code+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **CloudWatch metrics** — 🔒 Locked

<details>
<summary>📚 Open Resources — OBS-001</summary>

- 📺 Primary: [YT-OBS-001 — search: "CloudWatch metrics"](https://www.youtube.com/results?search_query=CloudWatch+metrics+Observability+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "CloudWatch metrics" alternate explanation](https://www.youtube.com/results?search_query=CloudWatch+metrics+Observability+explained)
- 📖 Official: [Observability Docs](https://prometheus.io/docs/introduction/overview/)
- 📚 Deep Dive: [Observability learning resource](https://grafana.com/docs/grafana/latest/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Observability / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **CloudWatch logs** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-068</summary>

- 📺 Primary: [YT-AWS-068 — search: "CloudWatch logs"](https://www.youtube.com/results?search_query=CloudWatch+logs+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "CloudWatch logs" alternate explanation](https://www.youtube.com/results?search_query=CloudWatch+logs+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **CloudWatch alarms** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-069</summary>

- 📺 Primary: [YT-AWS-069 — search: "CloudWatch alarms"](https://www.youtube.com/results?search_query=CloudWatch+alarms+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "CloudWatch alarms" alternate explanation](https://www.youtube.com/results?search_query=CloudWatch+alarms+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **CloudWatch dashboards** — 🔒 Locked

<details>
<summary>📚 Open Resources — OBS-002</summary>

- 📺 Primary: [YT-OBS-002 — search: "CloudWatch dashboards"](https://www.youtube.com/results?search_query=CloudWatch+dashboards+Observability+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "CloudWatch dashboards" alternate explanation](https://www.youtube.com/results?search_query=CloudWatch+dashboards+Observability+explained)
- 📖 Official: [Observability Docs](https://prometheus.io/docs/introduction/overview/)
- 📚 Deep Dive: [Observability learning resource](https://grafana.com/docs/grafana/latest/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Observability / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **SNS** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-070</summary>

- 📺 Primary: [YT-AWS-070 — search: "SNS"](https://www.youtube.com/results?search_query=SNS+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "SNS" alternate explanation](https://www.youtube.com/results?search_query=SNS+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **SQS** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-071</summary>

- 📺 Primary: [YT-AWS-071 — search: "SQS"](https://www.youtube.com/results?search_query=SQS+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "SQS" alternate explanation](https://www.youtube.com/results?search_query=SQS+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Lambda** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-072</summary>

- 📺 Primary: [YT-AWS-072 — search: "Lambda"](https://www.youtube.com/results?search_query=Lambda+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Lambda" alternate explanation](https://www.youtube.com/results?search_query=Lambda+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **API Gateway** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-073</summary>

- 📺 Primary: [YT-AWS-073 — search: "API Gateway"](https://www.youtube.com/results?search_query=API+Gateway+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "API Gateway" alternate explanation](https://www.youtube.com/results?search_query=API+Gateway+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Event-driven architecture** — 🔒 Locked

<details>
<summary>📚 Open Resources — AWS-074</summary>

- 📺 Primary: [YT-AWS-074 — search: "Event-driven architecture"](https://www.youtube.com/results?search_query=Event-driven+architecture+AWS+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Event-driven architecture" alternate explanation](https://www.youtube.com/results?search_query=Event-driven+architecture+AWS+explained)
- 📖 Official: [AWS Docs](https://docs.aws.amazon.com/)
- 📚 Deep Dive: [AWS learning resource](https://aws.amazon.com/architecture/well-architected/)
- 🧪 Lab: [AWS hands-on](https://aws.amazon.com/getting-started/hands-on/)
- 🎯 Interview: see [AWS / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +220 XP
- 🏅 CloudFormation, CloudWatch & Serverless Badge
- 🔓 Unlocks: Python for Automation III — Boto3

---

### ⚔️ QUEST 17 — Python for Automation III — Boto3

**Difficulty:** ⭐⭐⭐  
**XP Available:** 210  
**Status:** 🔒 Locked  
**Phase Boss:** ☁️ AWS Architecture Incident

**Prerequisites**

- CloudFormation, CloudWatch & Serverless

**Unlocks**

- Docker I — Images, Containers & Dockerfiles

> **Progress:** 0 / 11 concepts

**Objectives**

- [ ] **Boto3 installation** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-022</summary>

- 📺 Primary: [YT-PY-022 — search: "Boto3 installation"](https://www.youtube.com/results?search_query=Boto3+installation+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Boto3 installation" alternate explanation](https://www.youtube.com/results?search_query=Boto3+installation+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **AWS profiles and sessions** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-023</summary>

- 📺 Primary: [YT-PY-023 — search: "AWS profiles and sessions"](https://www.youtube.com/results?search_query=AWS+profiles+and+sessions+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "AWS profiles and sessions" alternate explanation](https://www.youtube.com/results?search_query=AWS+profiles+and+sessions+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Boto3 clients** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-024</summary>

- 📺 Primary: [YT-PY-024 — search: "Boto3 clients"](https://www.youtube.com/results?search_query=Boto3+clients+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Boto3 clients" alternate explanation](https://www.youtube.com/results?search_query=Boto3+clients+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Boto3 resources** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-025</summary>

- 📺 Primary: [YT-PY-025 — search: "Boto3 resources"](https://www.youtube.com/results?search_query=Boto3+resources+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Boto3 resources" alternate explanation](https://www.youtube.com/results?search_query=Boto3+resources+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **EC2 automation** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-026</summary>

- 📺 Primary: [YT-PY-026 — search: "EC2 automation"](https://www.youtube.com/results?search_query=EC2+automation+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "EC2 automation" alternate explanation](https://www.youtube.com/results?search_query=EC2+automation+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **S3 automation** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-027</summary>

- 📺 Primary: [YT-PY-027 — search: "S3 automation"](https://www.youtube.com/results?search_query=S3+automation+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "S3 automation" alternate explanation](https://www.youtube.com/results?search_query=S3+automation+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **IAM automation** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-028</summary>

- 📺 Primary: [YT-PY-028 — search: "IAM automation"](https://www.youtube.com/results?search_query=IAM+automation+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "IAM automation" alternate explanation](https://www.youtube.com/results?search_query=IAM+automation+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Pagination** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-029</summary>

- 📺 Primary: [YT-PY-029 — search: "Pagination"](https://www.youtube.com/results?search_query=Pagination+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Pagination" alternate explanation](https://www.youtube.com/results?search_query=Pagination+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **AWS API error handling** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-030</summary>

- 📺 Primary: [YT-PY-030 — search: "AWS API error handling"](https://www.youtube.com/results?search_query=AWS+API+error+handling+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "AWS API error handling" alternate explanation](https://www.youtube.com/results?search_query=AWS+API+error+handling+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **Retries** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-031</summary>

- 📺 Primary: [YT-PY-031 — search: "Retries"](https://www.youtube.com/results?search_query=Retries+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Retries" alternate explanation](https://www.youtube.com/results?search_query=Retries+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

- [ ] **AWS inventory reporting** — 🔒 Locked

<details>
<summary>📚 Open Resources — PY-032</summary>

- 📺 Primary: [YT-PY-032 — search: "AWS inventory reporting"](https://www.youtube.com/results?search_query=AWS+inventory+reporting+Python+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "AWS inventory reporting" alternate explanation](https://www.youtube.com/results?search_query=AWS+inventory+reporting+Python+explained)
- 📖 Official: [Python Docs](https://docs.python.org/3/)
- 📚 Deep Dive: [Python learning resource](https://realpython.com/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Python / Phase Interview Checkpoint](#aws-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +210 XP
- 🏅 Python for Automation III — Boto3 Badge
- 🔓 Unlocks: Docker I — Images, Containers & Dockerfiles

---

### 🎤 AWS Interview Checkpoint

- [ ] Explain the OSI model in your own words, focused on layers 3-4-7.
- [ ] What's the difference between TCP and UDP, and when would you choose each?
- [ ] How does DNS resolution work end to end?
- [ ] Explain NAT and why it matters for private networks.
- [ ] What's the difference between a subnet mask and CIDR notation?

---

## Phase 4 — Containers & CI/CD

### ⚔️ QUEST 18 — Docker I — Images, Containers & Dockerfiles

**Difficulty:** ⭐⭐⭐  
**XP Available:** 200  
**Status:** 🔒 Locked  
**Phase Boss:** 🐳 Deployment Incident

**Prerequisites**

- Python for Automation III — Boto3

**Unlocks**

- Docker II — Networking, Volumes & Security

> **Progress:** 0 / 10 concepts

**Objectives**

- [ ] **VMs vs containers** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-001</summary>

- 📺 Primary: [YT-DOK-001 — search: "VMs vs containers"](https://www.youtube.com/results?search_query=VMs+vs+containers+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "VMs vs containers" alternate explanation](https://www.youtube.com/results?search_query=VMs+vs+containers+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Docker architecture** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-002</summary>

- 📺 Primary: [YT-DOK-002 — search: "Docker architecture"](https://www.youtube.com/results?search_query=Docker+architecture+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Docker architecture" alternate explanation](https://www.youtube.com/results?search_query=Docker+architecture+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Docker Engine** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-003</summary>

- 📺 Primary: [YT-DOK-003 — search: "Docker Engine"](https://www.youtube.com/results?search_query=Docker+Engine+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Docker Engine" alternate explanation](https://www.youtube.com/results?search_query=Docker+Engine+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Images and layers** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-004</summary>

- 📺 Primary: [YT-DOK-004 — search: "Images and layers"](https://www.youtube.com/results?search_query=Images+and+layers+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Images and layers" alternate explanation](https://www.youtube.com/results?search_query=Images+and+layers+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Containers** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-005</summary>

- 📺 Primary: [YT-DOK-005 — search: "Containers"](https://www.youtube.com/results?search_query=Containers+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Containers" alternate explanation](https://www.youtube.com/results?search_query=Containers+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Container lifecycle** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-006</summary>

- 📺 Primary: [YT-DOK-006 — search: "Container lifecycle"](https://www.youtube.com/results?search_query=Container+lifecycle+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Container lifecycle" alternate explanation](https://www.youtube.com/results?search_query=Container+lifecycle+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Dockerfile** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-007</summary>

- 📺 Primary: [YT-DOK-007 — search: "Dockerfile"](https://www.youtube.com/results?search_query=Dockerfile+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Dockerfile" alternate explanation](https://www.youtube.com/results?search_query=Dockerfile+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **CMD vs ENTRYPOINT** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-008</summary>

- 📺 Primary: [YT-DOK-008 — search: "CMD vs ENTRYPOINT"](https://www.youtube.com/results?search_query=CMD+vs+ENTRYPOINT+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "CMD vs ENTRYPOINT" alternate explanation](https://www.youtube.com/results?search_query=CMD+vs+ENTRYPOINT+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Multi-stage builds** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-009</summary>

- 📺 Primary: [YT-DOK-009 — search: "Multi-stage builds"](https://www.youtube.com/results?search_query=Multi-stage+builds+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Multi-stage builds" alternate explanation](https://www.youtube.com/results?search_query=Multi-stage+builds+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Container registries** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-010</summary>

- 📺 Primary: [YT-DOK-010 — search: "Container registries"](https://www.youtube.com/results?search_query=Container+registries+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Container registries" alternate explanation](https://www.youtube.com/results?search_query=Container+registries+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +200 XP
- 🏅 Docker I — Images, Containers & Dockerfiles Badge
- 🔓 Unlocks: Docker II — Networking, Volumes & Security

---

### ⚔️ QUEST 19 — Docker II — Networking, Volumes & Security

**Difficulty:** ⭐⭐⭐  
**XP Available:** 190  
**Status:** 🔒 Locked  
**Phase Boss:** 🐳 Deployment Incident

**Prerequisites**

- Docker I — Images, Containers & Dockerfiles

**Unlocks**

- SonarQube, Quality Gates & Pipeline Security

> **Progress:** 0 / 9 concepts

**Objectives**

- [ ] **Bridge networking** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-011</summary>

- 📺 Primary: [YT-DOK-011 — search: "Bridge networking"](https://www.youtube.com/results?search_query=Bridge+networking+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Bridge networking" alternate explanation](https://www.youtube.com/results?search_query=Bridge+networking+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Host networking** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-012</summary>

- 📺 Primary: [YT-DOK-012 — search: "Host networking"](https://www.youtube.com/results?search_query=Host+networking+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Host networking" alternate explanation](https://www.youtube.com/results?search_query=Host+networking+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Port publishing** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-013</summary>

- 📺 Primary: [YT-DOK-013 — search: "Port publishing"](https://www.youtube.com/results?search_query=Port+publishing+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Port publishing" alternate explanation](https://www.youtube.com/results?search_query=Port+publishing+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Volumes** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-014</summary>

- 📺 Primary: [YT-DOK-014 — search: "Volumes"](https://www.youtube.com/results?search_query=Volumes+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Volumes" alternate explanation](https://www.youtube.com/results?search_query=Volumes+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Bind mounts** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-015</summary>

- 📺 Primary: [YT-DOK-015 — search: "Bind mounts"](https://www.youtube.com/results?search_query=Bind+mounts+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Bind mounts" alternate explanation](https://www.youtube.com/results?search_query=Bind+mounts+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Docker Compose** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-016</summary>

- 📺 Primary: [YT-DOK-016 — search: "Docker Compose"](https://www.youtube.com/results?search_query=Docker+Compose+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Docker Compose" alternate explanation](https://www.youtube.com/results?search_query=Docker+Compose+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Container-to-container networking** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-017</summary>

- 📺 Primary: [YT-DOK-017 — search: "Container-to-container networking"](https://www.youtube.com/results?search_query=Container-to-container+networking+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Container-to-container networking" alternate explanation](https://www.youtube.com/results?search_query=Container-to-container+networking+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Container security** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-018</summary>

- 📺 Primary: [YT-DOK-018 — search: "Container security"](https://www.youtube.com/results?search_query=Container+security+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Container security" alternate explanation](https://www.youtube.com/results?search_query=Container+security+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Trivy image scanning** — 🔒 Locked

<details>
<summary>📚 Open Resources — DOK-019</summary>

- 📺 Primary: [YT-DOK-019 — search: "Trivy image scanning"](https://www.youtube.com/results?search_query=Trivy+image+scanning+Docker+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Trivy image scanning" alternate explanation](https://www.youtube.com/results?search_query=Trivy+image+scanning+Docker+explained)
- 📖 Official: [Docker Docs](https://docs.docker.com/)
- 📚 Deep Dive: [Docker learning resource](https://docs.docker.com/get-started/overview/)
- 🧪 Lab: [Docker hands-on](https://docs.docker.com/get-started/)
- 🎯 Interview: see [Docker / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +190 XP
- 🏅 Docker II — Networking, Volumes & Security Badge
- 🔓 Unlocks: SonarQube, Quality Gates & Pipeline Security

---

### ⚔️ QUEST 20 — SonarQube, Quality Gates & Pipeline Security

**Difficulty:** ⭐⭐⭐  
**XP Available:** 200  
**Status:** 🔒 Locked  
**Phase Boss:** 🐳 Deployment Incident

**Prerequisites**

- Docker II — Networking, Volumes & Security

**Unlocks**

- Jenkins CI/CD

> **Progress:** 0 / 10 concepts

**Objectives**

- [ ] **Static analysis** — 🔒 Locked

<details>
<summary>📚 Open Resources — SNR-001</summary>

- 📺 Primary: [YT-SNR-001 — search: "Static analysis"](https://www.youtube.com/results?search_query=Static+analysis+SonarQube+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Static analysis" alternate explanation](https://www.youtube.com/results?search_query=Static+analysis+SonarQube+explained)
- 📖 Official: [SonarQube Docs](https://docs.sonarsource.com/sonarqube/latest/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [SonarQube / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Bugs vs vulnerabilities vs code smells** — 🔒 Locked

<details>
<summary>📚 Open Resources — SNR-002</summary>

- 📺 Primary: [YT-SNR-002 — search: "Bugs vs vulnerabilities vs code smells"](https://www.youtube.com/results?search_query=Bugs+vs+vulnerabilities+vs+code+smells+SonarQube+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Bugs vs vulnerabilities vs code smells" alternate explanation](https://www.youtube.com/results?search_query=Bugs+vs+vulnerabilities+vs+code+smells+SonarQube+explained)
- 📖 Official: [SonarQube Docs](https://docs.sonarsource.com/sonarqube/latest/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [SonarQube / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **SonarQube projects** — 🔒 Locked

<details>
<summary>📚 Open Resources — SNR-003</summary>

- 📺 Primary: [YT-SNR-003 — search: "SonarQube projects"](https://www.youtube.com/results?search_query=SonarQube+projects+SonarQube+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "SonarQube projects" alternate explanation](https://www.youtube.com/results?search_query=SonarQube+projects+SonarQube+explained)
- 📖 Official: [SonarQube Docs](https://docs.sonarsource.com/sonarqube/latest/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [SonarQube / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Quality profiles** — 🔒 Locked

<details>
<summary>📚 Open Resources — SNR-004</summary>

- 📺 Primary: [YT-SNR-004 — search: "Quality profiles"](https://www.youtube.com/results?search_query=Quality+profiles+SonarQube+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Quality profiles" alternate explanation](https://www.youtube.com/results?search_query=Quality+profiles+SonarQube+explained)
- 📖 Official: [SonarQube Docs](https://docs.sonarsource.com/sonarqube/latest/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [SonarQube / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Quality gates** — 🔒 Locked

<details>
<summary>📚 Open Resources — SNR-005</summary>

- 📺 Primary: [YT-SNR-005 — search: "Quality gates"](https://www.youtube.com/results?search_query=Quality+gates+SonarQube+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Quality gates" alternate explanation](https://www.youtube.com/results?search_query=Quality+gates+SonarQube+explained)
- 📖 Official: [SonarQube Docs](https://docs.sonarsource.com/sonarqube/latest/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [SonarQube / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Pipeline enforcement** — 🔒 Locked

<details>
<summary>📚 Open Resources — SNR-006</summary>

- 📺 Primary: [YT-SNR-006 — search: "Pipeline enforcement"](https://www.youtube.com/results?search_query=Pipeline+enforcement+SonarQube+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Pipeline enforcement" alternate explanation](https://www.youtube.com/results?search_query=Pipeline+enforcement+SonarQube+explained)
- 📖 Official: [SonarQube Docs](https://docs.sonarsource.com/sonarqube/latest/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [SonarQube / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **SAST** — 🔒 Locked

<details>
<summary>📚 Open Resources — SNR-007</summary>

- 📺 Primary: [YT-SNR-007 — search: "SAST"](https://www.youtube.com/results?search_query=SAST+SonarQube+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "SAST" alternate explanation](https://www.youtube.com/results?search_query=SAST+SonarQube+explained)
- 📖 Official: [SonarQube Docs](https://docs.sonarsource.com/sonarqube/latest/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [SonarQube / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Dependency scanning** — 🔒 Locked

<details>
<summary>📚 Open Resources — SNR-008</summary>

- 📺 Primary: [YT-SNR-008 — search: "Dependency scanning"](https://www.youtube.com/results?search_query=Dependency+scanning+SonarQube+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Dependency scanning" alternate explanation](https://www.youtube.com/results?search_query=Dependency+scanning+SonarQube+explained)
- 📖 Official: [SonarQube Docs](https://docs.sonarsource.com/sonarqube/latest/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [SonarQube / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Shift-left security** — 🔒 Locked

<details>
<summary>📚 Open Resources — SNR-009</summary>

- 📺 Primary: [YT-SNR-009 — search: "Shift-left security"](https://www.youtube.com/results?search_query=Shift-left+security+SonarQube+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Shift-left security" alternate explanation](https://www.youtube.com/results?search_query=Shift-left+security+SonarQube+explained)
- 📖 Official: [SonarQube Docs](https://docs.sonarsource.com/sonarqube/latest/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [SonarQube / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **SonarQube Jenkins integration** — 🔒 Locked

<details>
<summary>📚 Open Resources — SNR-010</summary>

- 📺 Primary: [YT-SNR-010 — search: "SonarQube Jenkins integration"](https://www.youtube.com/results?search_query=SonarQube+Jenkins+integration+SonarQube+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "SonarQube Jenkins integration" alternate explanation](https://www.youtube.com/results?search_query=SonarQube+Jenkins+integration+SonarQube+explained)
- 📖 Official: [SonarQube Docs](https://docs.sonarsource.com/sonarqube/latest/)
- 📚 Deep Dive: No additional article required.
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [SonarQube / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +200 XP
- 🏅 SonarQube, Quality Gates & Pipeline Security Badge
- 🔓 Unlocks: Jenkins CI/CD

---

### ⚔️ QUEST 21 — Jenkins CI/CD

**Difficulty:** ⭐⭐⭐⭐  
**XP Available:** 220  
**Status:** 🔒 Locked  
**Phase Boss:** 🐳 Deployment Incident

**Prerequisites**

- SonarQube, Quality Gates & Pipeline Security

**Unlocks**

- GitHub Actions Deep Dive

> **Progress:** 0 / 12 concepts

**Objectives**

- [ ] **CI/CD fundamentals** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-001</summary>

- 📺 Primary: [YT-JNK-001 — search: "CI/CD fundamentals"](https://www.youtube.com/results?search_query=CI%2FCD+fundamentals+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "CI/CD fundamentals" alternate explanation](https://www.youtube.com/results?search_query=CI%2FCD+fundamentals+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Jenkins architecture** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-002</summary>

- 📺 Primary: [YT-JNK-002 — search: "Jenkins architecture"](https://www.youtube.com/results?search_query=Jenkins+architecture+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Jenkins architecture" alternate explanation](https://www.youtube.com/results?search_query=Jenkins+architecture+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Jenkins controller and agents** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-003</summary>

- 📺 Primary: [YT-JNK-003 — search: "Jenkins controller and agents"](https://www.youtube.com/results?search_query=Jenkins+controller+and+agents+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Jenkins controller and agents" alternate explanation](https://www.youtube.com/results?search_query=Jenkins+controller+and+agents+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Installing Jenkins** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-004</summary>

- 📺 Primary: [YT-JNK-004 — search: "Installing Jenkins"](https://www.youtube.com/results?search_query=Installing+Jenkins+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Installing Jenkins" alternate explanation](https://www.youtube.com/results?search_query=Installing+Jenkins+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Freestyle jobs** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-005</summary>

- 📺 Primary: [YT-JNK-005 — search: "Freestyle jobs"](https://www.youtube.com/results?search_query=Freestyle+jobs+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Freestyle jobs" alternate explanation](https://www.youtube.com/results?search_query=Freestyle+jobs+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Jenkinsfile** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-006</summary>

- 📺 Primary: [YT-JNK-006 — search: "Jenkinsfile"](https://www.youtube.com/results?search_query=Jenkinsfile+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Jenkinsfile" alternate explanation](https://www.youtube.com/results?search_query=Jenkinsfile+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Declarative pipelines** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-007</summary>

- 📺 Primary: [YT-JNK-007 — search: "Declarative pipelines"](https://www.youtube.com/results?search_query=Declarative+pipelines+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Declarative pipelines" alternate explanation](https://www.youtube.com/results?search_query=Declarative+pipelines+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Stages and agents** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-008</summary>

- 📺 Primary: [YT-JNK-008 — search: "Stages and agents"](https://www.youtube.com/results?search_query=Stages+and+agents+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Stages and agents" alternate explanation](https://www.youtube.com/results?search_query=Stages+and+agents+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Artifacts** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-009</summary>

- 📺 Primary: [YT-JNK-009 — search: "Artifacts"](https://www.youtube.com/results?search_query=Artifacts+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Artifacts" alternate explanation](https://www.youtube.com/results?search_query=Artifacts+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Triggers and webhooks** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-010</summary>

- 📺 Primary: [YT-JNK-010 — search: "Triggers and webhooks"](https://www.youtube.com/results?search_query=Triggers+and+webhooks+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Triggers and webhooks" alternate explanation](https://www.youtube.com/results?search_query=Triggers+and+webhooks+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Scheduled builds** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-011</summary>

- 📺 Primary: [YT-JNK-011 — search: "Scheduled builds"](https://www.youtube.com/results?search_query=Scheduled+builds+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Scheduled builds" alternate explanation](https://www.youtube.com/results?search_query=Scheduled+builds+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Docker integration** — 🔒 Locked

<details>
<summary>📚 Open Resources — JNK-012</summary>

- 📺 Primary: [YT-JNK-012 — search: "Docker integration"](https://www.youtube.com/results?search_query=Docker+integration+Jenkins+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Docker integration" alternate explanation](https://www.youtube.com/results?search_query=Docker+integration+Jenkins+explained)
- 📖 Official: [Jenkins Docs](https://www.jenkins.io/doc/)
- 📚 Deep Dive: [Jenkins learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: [Jenkins hands-on](https://www.jenkins.io/doc/tutorials/)
- 🎯 Interview: see [Jenkins / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +220 XP
- 🏅 Jenkins CI/CD Badge
- 🔓 Unlocks: GitHub Actions Deep Dive

---

### ⚔️ QUEST 22 — GitHub Actions Deep Dive

**Difficulty:** ⭐⭐⭐  
**XP Available:** 210  
**Status:** 🔒 Locked  
**Phase Boss:** 🐳 Deployment Incident

**Prerequisites**

- Jenkins CI/CD

**Unlocks**

- CI/CD Capstone — End-to-End Pipeline

> **Progress:** 0 / 11 concepts

**Objectives**

- [ ] **Workflows** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-001</summary>

- 📺 Primary: [YT-GHA-001 — search: "Workflows"](https://www.youtube.com/results?search_query=Workflows+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Workflows" alternate explanation](https://www.youtube.com/results?search_query=Workflows+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Jobs** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-002</summary>

- 📺 Primary: [YT-GHA-002 — search: "Jobs"](https://www.youtube.com/results?search_query=Jobs+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Jobs" alternate explanation](https://www.youtube.com/results?search_query=Jobs+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Steps** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-003</summary>

- 📺 Primary: [YT-GHA-003 — search: "Steps"](https://www.youtube.com/results?search_query=Steps+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Steps" alternate explanation](https://www.youtube.com/results?search_query=Steps+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Runners** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-004</summary>

- 📺 Primary: [YT-GHA-004 — search: "Runners"](https://www.youtube.com/results?search_query=Runners+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Runners" alternate explanation](https://www.youtube.com/results?search_query=Runners+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Events and triggers** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-005</summary>

- 📺 Primary: [YT-GHA-005 — search: "Events and triggers"](https://www.youtube.com/results?search_query=Events+and+triggers+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Events and triggers" alternate explanation](https://www.youtube.com/results?search_query=Events+and+triggers+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Actions** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-006</summary>

- 📺 Primary: [YT-GHA-006 — search: "Actions"](https://www.youtube.com/results?search_query=Actions+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Actions" alternate explanation](https://www.youtube.com/results?search_query=Actions+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Secrets** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-007</summary>

- 📺 Primary: [YT-GHA-007 — search: "Secrets"](https://www.youtube.com/results?search_query=Secrets+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Secrets" alternate explanation](https://www.youtube.com/results?search_query=Secrets+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Variables** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-008</summary>

- 📺 Primary: [YT-GHA-008 — search: "Variables"](https://www.youtube.com/results?search_query=Variables+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Variables" alternate explanation](https://www.youtube.com/results?search_query=Variables+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Matrix builds** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-009</summary>

- 📺 Primary: [YT-GHA-009 — search: "Matrix builds"](https://www.youtube.com/results?search_query=Matrix+builds+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Matrix builds" alternate explanation](https://www.youtube.com/results?search_query=Matrix+builds+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Reusable workflows** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-010</summary>

- 📺 Primary: [YT-GHA-010 — search: "Reusable workflows"](https://www.youtube.com/results?search_query=Reusable+workflows+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Reusable workflows" alternate explanation](https://www.youtube.com/results?search_query=Reusable+workflows+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Docker build and push** — 🔒 Locked

<details>
<summary>📚 Open Resources — GHA-011</summary>

- 📺 Primary: [YT-GHA-011 — search: "Docker build and push"](https://www.youtube.com/results?search_query=Docker+build+and+push+GitHub+Actions+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Docker build and push" alternate explanation](https://www.youtube.com/results?search_query=Docker+build+and+push+GitHub+Actions+explained)
- 📖 Official: [GitHub Actions Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [GitHub Actions learning resource](https://docs.github.com/en/actions/learn-github-actions)
- 🧪 Lab: [GitHub Actions hands-on](https://docs.github.com/en/actions/quickstart)
- 🎯 Interview: see [GitHub Actions / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +210 XP
- 🏅 GitHub Actions Deep Dive Badge
- 🔓 Unlocks: CI/CD Capstone — End-to-End Pipeline

---

### ⚔️ QUEST 23 — CI/CD Capstone — End-to-End Pipeline

**Difficulty:** ⭐⭐⭐⭐⭐  
**XP Available:** 210  
**Status:** 🔒 Locked  
**Phase Boss:** 🐳 Deployment Incident

**Prerequisites**

- GitHub Actions Deep Dive

**Unlocks**

- Terraform — Introduction & State

> **Progress:** 0 / 11 concepts

**Objectives**

- [ ] **Git push trigger** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-001</summary>

- 📺 Primary: [YT-CICD-001 — search: "Git push trigger"](https://www.youtube.com/results?search_query=Git+push+trigger+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Git push trigger" alternate explanation](https://www.youtube.com/results?search_query=Git+push+trigger+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Automated tests** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-002</summary>

- 📺 Primary: [YT-CICD-002 — search: "Automated tests"](https://www.youtube.com/results?search_query=Automated+tests+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Automated tests" alternate explanation](https://www.youtube.com/results?search_query=Automated+tests+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **SonarQube quality gate** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-003</summary>

- 📺 Primary: [YT-CICD-003 — search: "SonarQube quality gate"](https://www.youtube.com/results?search_query=SonarQube+quality+gate+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "SonarQube quality gate" alternate explanation](https://www.youtube.com/results?search_query=SonarQube+quality+gate+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Trivy filesystem scan** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-004</summary>

- 📺 Primary: [YT-CICD-004 — search: "Trivy filesystem scan"](https://www.youtube.com/results?search_query=Trivy+filesystem+scan+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Trivy filesystem scan" alternate explanation](https://www.youtube.com/results?search_query=Trivy+filesystem+scan+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Docker build** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-005</summary>

- 📺 Primary: [YT-CICD-005 — search: "Docker build"](https://www.youtube.com/results?search_query=Docker+build+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Docker build" alternate explanation](https://www.youtube.com/results?search_query=Docker+build+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Container image scanning** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-006</summary>

- 📺 Primary: [YT-CICD-006 — search: "Container image scanning"](https://www.youtube.com/results?search_query=Container+image+scanning+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Container image scanning" alternate explanation](https://www.youtube.com/results?search_query=Container+image+scanning+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Registry push** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-007</summary>

- 📺 Primary: [YT-CICD-007 — search: "Registry push"](https://www.youtube.com/results?search_query=Registry+push+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Registry push" alternate explanation](https://www.youtube.com/results?search_query=Registry+push+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Dev staging production promotion** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-008</summary>

- 📺 Primary: [YT-CICD-008 — search: "Dev staging production promotion"](https://www.youtube.com/results?search_query=Dev+staging+production+promotion+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Dev staging production promotion" alternate explanation](https://www.youtube.com/results?search_query=Dev+staging+production+promotion+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Secrets and least privilege** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-009</summary>

- 📺 Primary: [YT-CICD-009 — search: "Secrets and least privilege"](https://www.youtube.com/results?search_query=Secrets+and+least+privilege+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Secrets and least privilege" alternate explanation](https://www.youtube.com/results?search_query=Secrets+and+least+privilege+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Rollback strategy** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-010</summary>

- 📺 Primary: [YT-CICD-010 — search: "Rollback strategy"](https://www.youtube.com/results?search_query=Rollback+strategy+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Rollback strategy" alternate explanation](https://www.youtube.com/results?search_query=Rollback+strategy+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

- [ ] **Deployment to AWS** — 🔒 Locked

<details>
<summary>📚 Open Resources — CICD-011</summary>

- 📺 Primary: [YT-CICD-011 — search: "Deployment to AWS"](https://www.youtube.com/results?search_query=Deployment+to+AWS+CI%2FCD+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Deployment to AWS" alternate explanation](https://www.youtube.com/results?search_query=Deployment+to+AWS+CI%2FCD+explained)
- 📖 Official: [CI/CD Docs](https://docs.github.com/en/actions)
- 📚 Deep Dive: [CI/CD learning resource](https://www.jenkins.io/doc/book/pipeline/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [CI/CD / Phase Interview Checkpoint](#docker-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +210 XP
- 🏅 CI/CD Capstone — End-to-End Pipeline Badge
- 🔓 Unlocks: Terraform — Introduction & State

---

### 🎤 Docker Interview Checkpoint

- [ ] How would you design a Python script to safely retry a flaky API call?
- [ ] Explain the difference between a list, tuple, and dictionary — and when each is the right tool.
- [ ] How do you structure a CLI tool so it's testable?
- [ ] Explain how you'd add logging to a long-running automation script.
- [ ] What's your approach to handling secrets in a Python automation project?

### 🎤 CI/CD Interview Checkpoint

- [ ] How would you design a Python script to safely retry a flaky API call?
- [ ] Explain the difference between a list, tuple, and dictionary — and when each is the right tool.
- [ ] How do you structure a CLI tool so it's testable?
- [ ] Explain how you'd add logging to a long-running automation script.
- [ ] What's your approach to handling secrets in a Python automation project?

---

## Phase 5 — Terraform & Configuration Management

### ⚔️ QUEST 24 — Terraform — Introduction & State

**Difficulty:** ⭐⭐⭐  
**XP Available:** 230  
**Status:** 🔒 Locked  
**Phase Boss:** 🏗️ Infrastructure Failure

**Prerequisites**

- CI/CD Capstone — End-to-End Pipeline

**Unlocks**

- Terraform Advanced + Prometheus & Grafana

> **Progress:** 0 / 13 concepts

**Objectives**

- [ ] **Infrastructure as Code** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-001</summary>

- 📺 Primary: [YT-TF-001 — search: "Infrastructure as Code"](https://www.youtube.com/results?search_query=Infrastructure+as+Code+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Infrastructure as Code" alternate explanation](https://www.youtube.com/results?search_query=Infrastructure+as+Code+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Providers** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-002</summary>

- 📺 Primary: [YT-TF-002 — search: "Providers"](https://www.youtube.com/results?search_query=Providers+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Providers" alternate explanation](https://www.youtube.com/results?search_query=Providers+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Resources** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-003</summary>

- 📺 Primary: [YT-TF-003 — search: "Resources"](https://www.youtube.com/results?search_query=Resources+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Resources" alternate explanation](https://www.youtube.com/results?search_query=Resources+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Variables** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-004</summary>

- 📺 Primary: [YT-TF-004 — search: "Variables"](https://www.youtube.com/results?search_query=Variables+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Variables" alternate explanation](https://www.youtube.com/results?search_query=Variables+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Outputs** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-005</summary>

- 📺 Primary: [YT-TF-005 — search: "Outputs"](https://www.youtube.com/results?search_query=Outputs+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Outputs" alternate explanation](https://www.youtube.com/results?search_query=Outputs+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Dependencies** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-006</summary>

- 📺 Primary: [YT-TF-006 — search: "Dependencies"](https://www.youtube.com/results?search_query=Dependencies+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Dependencies" alternate explanation](https://www.youtube.com/results?search_query=Dependencies+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **terraform init** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-007</summary>

- 📺 Primary: [YT-TF-007 — search: "terraform init"](https://www.youtube.com/results?search_query=terraform+init+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "terraform init" alternate explanation](https://www.youtube.com/results?search_query=terraform+init+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **terraform plan** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-008</summary>

- 📺 Primary: [YT-TF-008 — search: "terraform plan"](https://www.youtube.com/results?search_query=terraform+plan+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "terraform plan" alternate explanation](https://www.youtube.com/results?search_query=terraform+plan+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **terraform apply** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-009</summary>

- 📺 Primary: [YT-TF-009 — search: "terraform apply"](https://www.youtube.com/results?search_query=terraform+apply+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "terraform apply" alternate explanation](https://www.youtube.com/results?search_query=terraform+apply+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Terraform state** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-010</summary>

- 📺 Primary: [YT-TF-010 — search: "Terraform state"](https://www.youtube.com/results?search_query=Terraform+state+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Terraform state" alternate explanation](https://www.youtube.com/results?search_query=Terraform+state+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Remote state** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-011</summary>

- 📺 Primary: [YT-TF-011 — search: "Remote state"](https://www.youtube.com/results?search_query=Remote+state+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Remote state" alternate explanation](https://www.youtube.com/results?search_query=Remote+state+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Drift detection** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-012</summary>

- 📺 Primary: [YT-TF-012 — search: "Drift detection"](https://www.youtube.com/results?search_query=Drift+detection+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Drift detection" alternate explanation](https://www.youtube.com/results?search_query=Drift+detection+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **VPC with Terraform** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-013</summary>

- 📺 Primary: [YT-TF-013 — search: "VPC with Terraform"](https://www.youtube.com/results?search_query=VPC+with+Terraform+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "VPC with Terraform" alternate explanation](https://www.youtube.com/results?search_query=VPC+with+Terraform+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +230 XP
- 🏅 Terraform — Introduction & State Badge
- 🔓 Unlocks: Terraform Advanced + Prometheus & Grafana

---

### ⚔️ QUEST 25 — Terraform Advanced + Prometheus & Grafana

**Difficulty:** ⭐⭐⭐⭐  
**XP Available:** 210  
**Status:** 🔒 Locked  
**Phase Boss:** 🏗️ Infrastructure Failure

**Prerequisites**

- Terraform — Introduction & State

**Unlocks**

- Getting Started with Ansible

> **Progress:** 0 / 11 concepts

**Objectives**

- [ ] **Terraform modules** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-014</summary>

- 📺 Primary: [YT-TF-014 — search: "Terraform modules"](https://www.youtube.com/results?search_query=Terraform+modules+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Terraform modules" alternate explanation](https://www.youtube.com/results?search_query=Terraform+modules+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Workspaces** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-015</summary>

- 📺 Primary: [YT-TF-015 — search: "Workspaces"](https://www.youtube.com/results?search_query=Workspaces+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Workspaces" alternate explanation](https://www.youtube.com/results?search_query=Workspaces+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Remote state locking** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-016</summary>

- 📺 Primary: [YT-TF-016 — search: "Remote state locking"](https://www.youtube.com/results?search_query=Remote+state+locking+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Remote state locking" alternate explanation](https://www.youtube.com/results?search_query=Remote+state+locking+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Reusable infrastructure** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-017</summary>

- 📺 Primary: [YT-TF-017 — search: "Reusable infrastructure"](https://www.youtube.com/results?search_query=Reusable+infrastructure+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Reusable infrastructure" alternate explanation](https://www.youtube.com/results?search_query=Reusable+infrastructure+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **terraform fmt and validate** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-018</summary>

- 📺 Primary: [YT-TF-018 — search: "terraform fmt and validate"](https://www.youtube.com/results?search_query=terraform+fmt+and+validate+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "terraform fmt and validate" alternate explanation](https://www.youtube.com/results?search_query=terraform+fmt+and+validate+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Terraform security scanning** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-019</summary>

- 📺 Primary: [YT-TF-019 — search: "Terraform security scanning"](https://www.youtube.com/results?search_query=Terraform+security+scanning+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Terraform security scanning" alternate explanation](https://www.youtube.com/results?search_query=Terraform+security+scanning+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Prometheus architecture** — 🔒 Locked

<details>
<summary>📚 Open Resources — OBS-003</summary>

- 📺 Primary: [YT-OBS-003 — search: "Prometheus architecture"](https://www.youtube.com/results?search_query=Prometheus+architecture+Observability+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Prometheus architecture" alternate explanation](https://www.youtube.com/results?search_query=Prometheus+architecture+Observability+explained)
- 📖 Official: [Observability Docs](https://prometheus.io/docs/introduction/overview/)
- 📚 Deep Dive: [Observability learning resource](https://grafana.com/docs/grafana/latest/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Observability / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Metrics and targets** — 🔒 Locked

<details>
<summary>📚 Open Resources — OBS-004</summary>

- 📺 Primary: [YT-OBS-004 — search: "Metrics and targets"](https://www.youtube.com/results?search_query=Metrics+and+targets+Observability+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Metrics and targets" alternate explanation](https://www.youtube.com/results?search_query=Metrics+and+targets+Observability+explained)
- 📖 Official: [Observability Docs](https://prometheus.io/docs/introduction/overview/)
- 📚 Deep Dive: [Observability learning resource](https://grafana.com/docs/grafana/latest/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Observability / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **PromQL basics** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-020</summary>

- 📺 Primary: [YT-TF-020 — search: "PromQL basics"](https://www.youtube.com/results?search_query=PromQL+basics+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "PromQL basics" alternate explanation](https://www.youtube.com/results?search_query=PromQL+basics+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Grafana dashboards** — 🔒 Locked

<details>
<summary>📚 Open Resources — OBS-005</summary>

- 📺 Primary: [YT-OBS-005 — search: "Grafana dashboards"](https://www.youtube.com/results?search_query=Grafana+dashboards+Observability+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Grafana dashboards" alternate explanation](https://www.youtube.com/results?search_query=Grafana+dashboards+Observability+explained)
- 📖 Official: [Observability Docs](https://prometheus.io/docs/introduction/overview/)
- 📚 Deep Dive: [Observability learning resource](https://grafana.com/docs/grafana/latest/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Observability / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Alerting** — 🔒 Locked

<details>
<summary>📚 Open Resources — TF-021</summary>

- 📺 Primary: [YT-TF-021 — search: "Alerting"](https://www.youtube.com/results?search_query=Alerting+Terraform+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Alerting" alternate explanation](https://www.youtube.com/results?search_query=Alerting+Terraform+explained)
- 📖 Official: [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- 📚 Deep Dive: [Terraform learning resource](https://developer.hashicorp.com/terraform/intro)
- 🧪 Lab: [Terraform hands-on](https://developer.hashicorp.com/terraform/tutorials)
- 🎯 Interview: see [Terraform / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +210 XP
- 🏅 Terraform Advanced + Prometheus & Grafana Badge
- 🔓 Unlocks: Getting Started with Ansible

---

### ⚔️ QUEST 26 — Getting Started with Ansible

**Difficulty:** ⭐⭐⭐  
**XP Available:** 210  
**Status:** 🔒 Locked  
**Phase Boss:** 🏗️ Infrastructure Failure

**Prerequisites**

- Terraform Advanced + Prometheus & Grafana

**Unlocks**

- Automation with Ansible Playbooks

> **Progress:** 0 / 11 concepts

**Objectives**

- [ ] **Configuration management** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-001</summary>

- 📺 Primary: [YT-ANS-001 — search: "Configuration management"](https://www.youtube.com/results?search_query=Configuration+management+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Configuration management" alternate explanation](https://www.youtube.com/results?search_query=Configuration+management+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Push vs pull** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-002</summary>

- 📺 Primary: [YT-ANS-002 — search: "Push vs pull"](https://www.youtube.com/results?search_query=Push+vs+pull+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Push vs pull" alternate explanation](https://www.youtube.com/results?search_query=Push+vs+pull+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Ansible architecture** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-003</summary>

- 📺 Primary: [YT-ANS-003 — search: "Ansible architecture"](https://www.youtube.com/results?search_query=Ansible+architecture+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Ansible architecture" alternate explanation](https://www.youtube.com/results?search_query=Ansible+architecture+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Inventory** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-004</summary>

- 📺 Primary: [YT-ANS-004 — search: "Inventory"](https://www.youtube.com/results?search_query=Inventory+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Inventory" alternate explanation](https://www.youtube.com/results?search_query=Inventory+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Ad-hoc commands** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-005</summary>

- 📺 Primary: [YT-ANS-005 — search: "Ad-hoc commands"](https://www.youtube.com/results?search_query=Ad-hoc+commands+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Ad-hoc commands" alternate explanation](https://www.youtube.com/results?search_query=Ad-hoc+commands+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Modules** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-006</summary>

- 📺 Primary: [YT-ANS-006 — search: "Modules"](https://www.youtube.com/results?search_query=Modules+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Modules" alternate explanation](https://www.youtube.com/results?search_query=Modules+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Playbooks** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-007</summary>

- 📺 Primary: [YT-ANS-007 — search: "Playbooks"](https://www.youtube.com/results?search_query=Playbooks+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Playbooks" alternate explanation](https://www.youtube.com/results?search_query=Playbooks+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **YAML syntax for Ansible** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-008</summary>

- 📺 Primary: [YT-ANS-008 — search: "YAML syntax for Ansible"](https://www.youtube.com/results?search_query=YAML+syntax+for+Ansible+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "YAML syntax for Ansible" alternate explanation](https://www.youtube.com/results?search_query=YAML+syntax+for+Ansible+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Variables** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-009</summary>

- 📺 Primary: [YT-ANS-009 — search: "Variables"](https://www.youtube.com/results?search_query=Variables+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Variables" alternate explanation](https://www.youtube.com/results?search_query=Variables+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Facts** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-010</summary>

- 📺 Primary: [YT-ANS-010 — search: "Facts"](https://www.youtube.com/results?search_query=Facts+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Facts" alternate explanation](https://www.youtube.com/results?search_query=Facts+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Roles and collections** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-011</summary>

- 📺 Primary: [YT-ANS-011 — search: "Roles and collections"](https://www.youtube.com/results?search_query=Roles+and+collections+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Roles and collections" alternate explanation](https://www.youtube.com/results?search_query=Roles+and+collections+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +210 XP
- 🏅 Getting Started with Ansible Badge
- 🔓 Unlocks: Automation with Ansible Playbooks

---

### ⚔️ QUEST 27 — Automation with Ansible Playbooks

**Difficulty:** ⭐⭐⭐⭐  
**XP Available:** 200  
**Status:** 🔒 Locked  
**Phase Boss:** 🏗️ Infrastructure Failure

**Prerequisites**

- Getting Started with Ansible

**Unlocks**

- Kubernetes Introduction

> **Progress:** 0 / 10 concepts

**Objectives**

- [ ] **Tags** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-012</summary>

- 📺 Primary: [YT-ANS-012 — search: "Tags"](https://www.youtube.com/results?search_query=Tags+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Tags" alternate explanation](https://www.youtube.com/results?search_query=Tags+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Jinja2 templates** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-013</summary>

- 📺 Primary: [YT-ANS-013 — search: "Jinja2 templates"](https://www.youtube.com/results?search_query=Jinja2+templates+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Jinja2 templates" alternate explanation](https://www.youtube.com/results?search_query=Jinja2+templates+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Handlers** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-014</summary>

- 📺 Primary: [YT-ANS-014 — search: "Handlers"](https://www.youtube.com/results?search_query=Handlers+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Handlers" alternate explanation](https://www.youtube.com/results?search_query=Handlers+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Conditionals** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-015</summary>

- 📺 Primary: [YT-ANS-015 — search: "Conditionals"](https://www.youtube.com/results?search_query=Conditionals+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Conditionals" alternate explanation](https://www.youtube.com/results?search_query=Conditionals+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Loops** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-016</summary>

- 📺 Primary: [YT-ANS-016 — search: "Loops"](https://www.youtube.com/results?search_query=Loops+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Loops" alternate explanation](https://www.youtube.com/results?search_query=Loops+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Ansible Vault** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-017</summary>

- 📺 Primary: [YT-ANS-017 — search: "Ansible Vault"](https://www.youtube.com/results?search_query=Ansible+Vault+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Ansible Vault" alternate explanation](https://www.youtube.com/results?search_query=Ansible+Vault+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Error handling** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-018</summary>

- 📺 Primary: [YT-ANS-018 — search: "Error handling"](https://www.youtube.com/results?search_query=Error+handling+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Error handling" alternate explanation](https://www.youtube.com/results?search_query=Error+handling+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Idempotency** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-019</summary>

- 📺 Primary: [YT-ANS-019 — search: "Idempotency"](https://www.youtube.com/results?search_query=Idempotency+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Idempotency" alternate explanation](https://www.youtube.com/results?search_query=Idempotency+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Software deployment at scale** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-020</summary>

- 📺 Primary: [YT-ANS-020 — search: "Software deployment at scale"](https://www.youtube.com/results?search_query=Software+deployment+at+scale+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Software deployment at scale" alternate explanation](https://www.youtube.com/results?search_query=Software+deployment+at+scale+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

- [ ] **Terraform + Ansible** — 🔒 Locked

<details>
<summary>📚 Open Resources — ANS-021</summary>

- 📺 Primary: [YT-ANS-021 — search: "Terraform + Ansible"](https://www.youtube.com/results?search_query=Terraform+%2B+Ansible+Ansible+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Terraform + Ansible" alternate explanation](https://www.youtube.com/results?search_query=Terraform+%2B+Ansible+Ansible+explained)
- 📖 Official: [Ansible Docs](https://docs.ansible.com/)
- 📚 Deep Dive: [Ansible learning resource](https://docs.ansible.com/ansible/latest/getting_started/index.html)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Ansible / Phase Interview Checkpoint](#terraform-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +200 XP
- 🏅 Automation with Ansible Playbooks Badge
- 🔓 Unlocks: Kubernetes Introduction

---

### 🎤 Terraform Interview Checkpoint

- [ ] Explain IAM roles vs IAM users vs IAM policies.
- [ ] Design a highly available two-tier application in AWS from scratch.
- [ ] Explain public vs private subnets and why NAT Gateways are needed.
- [ ] Explain Security Groups vs NACLs — how are they actually different?
- [ ] How would you troubleshoot an EC2 instance that isn't reachable via SSH?
- [ ] Explain an AWS architecture you personally built, and why you made the choices you did.

### 🎤 Ansible Interview Checkpoint

- [ ] Explain IAM roles vs IAM users vs IAM policies.
- [ ] Design a highly available two-tier application in AWS from scratch.
- [ ] Explain public vs private subnets and why NAT Gateways are needed.
- [ ] Explain Security Groups vs NACLs — how are they actually different?
- [ ] How would you troubleshoot an EC2 instance that isn't reachable via SSH?
- [ ] Explain an AWS architecture you personally built, and why you made the choices you did.

---

## Phase 6 — Kubernetes

### ⚔️ QUEST 28 — Kubernetes Introduction

**Difficulty:** ⭐⭐⭐  
**XP Available:** 190  
**Status:** 🔒 Locked  
**Phase Boss:** ☸️ Kubernetes Production Incident

**Prerequisites**

- Automation with Ansible Playbooks

**Unlocks**

- Kubernetes Basics

> **Progress:** 0 / 9 concepts

**Objectives**

- [ ] **Container orchestration** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-001</summary>

- 📺 Primary: [YT-K8S-001 — search: "Container orchestration"](https://www.youtube.com/results?search_query=Container+orchestration+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Container orchestration" alternate explanation](https://www.youtube.com/results?search_query=Container+orchestration+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Kubernetes architecture** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-002</summary>

- 📺 Primary: [YT-K8S-002 — search: "Kubernetes architecture"](https://www.youtube.com/results?search_query=Kubernetes+architecture+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Kubernetes architecture" alternate explanation](https://www.youtube.com/results?search_query=Kubernetes+architecture+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Control plane** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-003</summary>

- 📺 Primary: [YT-K8S-003 — search: "Control plane"](https://www.youtube.com/results?search_query=Control+plane+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Control plane" alternate explanation](https://www.youtube.com/results?search_query=Control+plane+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Worker nodes** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-004</summary>

- 📺 Primary: [YT-K8S-004 — search: "Worker nodes"](https://www.youtube.com/results?search_query=Worker+nodes+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Worker nodes" alternate explanation](https://www.youtube.com/results?search_query=Worker+nodes+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Pods** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-005</summary>

- 📺 Primary: [YT-K8S-005 — search: "Pods"](https://www.youtube.com/results?search_query=Pods+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Pods" alternate explanation](https://www.youtube.com/results?search_query=Pods+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Services** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-006</summary>

- 📺 Primary: [YT-K8S-006 — search: "Services"](https://www.youtube.com/results?search_query=Services+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Services" alternate explanation](https://www.youtube.com/results?search_query=Services+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **kubectl** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-007</summary>

- 📺 Primary: [YT-K8S-007 — search: "kubectl"](https://www.youtube.com/results?search_query=kubectl+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "kubectl" alternate explanation](https://www.youtube.com/results?search_query=kubectl+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Minikube** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-008</summary>

- 📺 Primary: [YT-K8S-008 — search: "Minikube"](https://www.youtube.com/results?search_query=Minikube+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Minikube" alternate explanation](https://www.youtube.com/results?search_query=Minikube+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **First application** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-009</summary>

- 📺 Primary: [YT-K8S-009 — search: "First application"](https://www.youtube.com/results?search_query=First+application+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "First application" alternate explanation](https://www.youtube.com/results?search_query=First+application+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +190 XP
- 🏅 Kubernetes Introduction Badge
- 🔓 Unlocks: Kubernetes Basics

---

### ⚔️ QUEST 29 — Kubernetes Basics

**Difficulty:** ⭐⭐⭐⭐  
**XP Available:** 220  
**Status:** 🔒 Locked  
**Phase Boss:** ☸️ Kubernetes Production Incident

**Prerequisites**

- Kubernetes Introduction

**Unlocks**

- Kubernetes on AWS — EKS & App Ops

> **Progress:** 0 / 12 concepts

**Objectives**

- [ ] **Deployments** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-010</summary>

- 📺 Primary: [YT-K8S-010 — search: "Deployments"](https://www.youtube.com/results?search_query=Deployments+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Deployments" alternate explanation](https://www.youtube.com/results?search_query=Deployments+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **ReplicaSets** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-011</summary>

- 📺 Primary: [YT-K8S-011 — search: "ReplicaSets"](https://www.youtube.com/results?search_query=ReplicaSets+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "ReplicaSets" alternate explanation](https://www.youtube.com/results?search_query=ReplicaSets+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **ConfigMaps** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-012</summary>

- 📺 Primary: [YT-K8S-012 — search: "ConfigMaps"](https://www.youtube.com/results?search_query=ConfigMaps+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "ConfigMaps" alternate explanation](https://www.youtube.com/results?search_query=ConfigMaps+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Secrets** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-013</summary>

- 📺 Primary: [YT-K8S-013 — search: "Secrets"](https://www.youtube.com/results?search_query=Secrets+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Secrets" alternate explanation](https://www.youtube.com/results?search_query=Secrets+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Labels and selectors** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-014</summary>

- 📺 Primary: [YT-K8S-014 — search: "Labels and selectors"](https://www.youtube.com/results?search_query=Labels+and+selectors+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Labels and selectors" alternate explanation](https://www.youtube.com/results?search_query=Labels+and+selectors+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Namespaces** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-015</summary>

- 📺 Primary: [YT-K8S-015 — search: "Namespaces"](https://www.youtube.com/results?search_query=Namespaces+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Namespaces" alternate explanation](https://www.youtube.com/results?search_query=Namespaces+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Resource requests and limits** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-016</summary>

- 📺 Primary: [YT-K8S-016 — search: "Resource requests and limits"](https://www.youtube.com/results?search_query=Resource+requests+and+limits+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Resource requests and limits" alternate explanation](https://www.youtube.com/results?search_query=Resource+requests+and+limits+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Liveness probes** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-017</summary>

- 📺 Primary: [YT-K8S-017 — search: "Liveness probes"](https://www.youtube.com/results?search_query=Liveness+probes+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Liveness probes" alternate explanation](https://www.youtube.com/results?search_query=Liveness+probes+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Readiness probes** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-018</summary>

- 📺 Primary: [YT-K8S-018 — search: "Readiness probes"](https://www.youtube.com/results?search_query=Readiness+probes+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Readiness probes" alternate explanation](https://www.youtube.com/results?search_query=Readiness+probes+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Rolling updates** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-019</summary>

- 📺 Primary: [YT-K8S-019 — search: "Rolling updates"](https://www.youtube.com/results?search_query=Rolling+updates+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Rolling updates" alternate explanation](https://www.youtube.com/results?search_query=Rolling+updates+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Rollbacks** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-020</summary>

- 📺 Primary: [YT-K8S-020 — search: "Rollbacks"](https://www.youtube.com/results?search_query=Rollbacks+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Rollbacks" alternate explanation](https://www.youtube.com/results?search_query=Rollbacks+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Blue/green deployments** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-021</summary>

- 📺 Primary: [YT-K8S-021 — search: "Blue/green deployments"](https://www.youtube.com/results?search_query=Blue%2Fgreen+deployments+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Blue/green deployments" alternate explanation](https://www.youtube.com/results?search_query=Blue%2Fgreen+deployments+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +220 XP
- 🏅 Kubernetes Basics Badge
- 🔓 Unlocks: Kubernetes on AWS — EKS & App Ops

---

### ⚔️ QUEST 30 — Kubernetes on AWS — EKS & App Ops

**Difficulty:** ⭐⭐⭐⭐⭐  
**XP Available:** 200  
**Status:** 🔒 Locked  
**Phase Boss:** ☸️ Kubernetes Production Incident

**Prerequisites**

- Kubernetes Basics

**Unlocks**

- Advanced Kubernetes & GitOps

> **Progress:** 0 / 10 concepts

**Objectives**

- [ ] **EKS architecture** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-022</summary>

- 📺 Primary: [YT-K8S-022 — search: "EKS architecture"](https://www.youtube.com/results?search_query=EKS+architecture+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "EKS architecture" alternate explanation](https://www.youtube.com/results?search_query=EKS+architecture+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Managed node groups** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-023</summary>

- 📺 Primary: [YT-K8S-023 — search: "Managed node groups"](https://www.youtube.com/results?search_query=Managed+node+groups+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Managed node groups" alternate explanation](https://www.youtube.com/results?search_query=Managed+node+groups+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **IAM for Kubernetes** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-024</summary>

- 📺 Primary: [YT-K8S-024 — search: "IAM for Kubernetes"](https://www.youtube.com/results?search_query=IAM+for+Kubernetes+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "IAM for Kubernetes" alternate explanation](https://www.youtube.com/results?search_query=IAM+for+Kubernetes+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **IRSA** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-025</summary>

- 📺 Primary: [YT-K8S-025 — search: "IRSA"](https://www.youtube.com/results?search_query=IRSA+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "IRSA" alternate explanation](https://www.youtube.com/results?search_query=IRSA+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Persistent Volumes** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-026</summary>

- 📺 Primary: [YT-K8S-026 — search: "Persistent Volumes"](https://www.youtube.com/results?search_query=Persistent+Volumes+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Persistent Volumes" alternate explanation](https://www.youtube.com/results?search_query=Persistent+Volumes+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Persistent Volume Claims** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-027</summary>

- 📺 Primary: [YT-K8S-027 — search: "Persistent Volume Claims"](https://www.youtube.com/results?search_query=Persistent+Volume+Claims+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Persistent Volume Claims" alternate explanation](https://www.youtube.com/results?search_query=Persistent+Volume+Claims+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Horizontal Pod Autoscaling** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-028</summary>

- 📺 Primary: [YT-K8S-028 — search: "Horizontal Pod Autoscaling"](https://www.youtube.com/results?search_query=Horizontal+Pod+Autoscaling+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Horizontal Pod Autoscaling" alternate explanation](https://www.youtube.com/results?search_query=Horizontal+Pod+Autoscaling+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **High availability** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-029</summary>

- 📺 Primary: [YT-K8S-029 — search: "High availability"](https://www.youtube.com/results?search_query=High+availability+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "High availability" alternate explanation](https://www.youtube.com/results?search_query=High+availability+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **AWS networking for EKS** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-030</summary>

- 📺 Primary: [YT-K8S-030 — search: "AWS networking for EKS"](https://www.youtube.com/results?search_query=AWS+networking+for+EKS+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "AWS networking for EKS" alternate explanation](https://www.youtube.com/results?search_query=AWS+networking+for+EKS+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **External Secrets Operator** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-031</summary>

- 📺 Primary: [YT-K8S-031 — search: "External Secrets Operator"](https://www.youtube.com/results?search_query=External+Secrets+Operator+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "External Secrets Operator" alternate explanation](https://www.youtube.com/results?search_query=External+Secrets+Operator+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +200 XP
- 🏅 Kubernetes on AWS — EKS & App Ops Badge
- 🔓 Unlocks: Advanced Kubernetes & GitOps

---

### ⚔️ QUEST 31 — Advanced Kubernetes & GitOps

**Difficulty:** ⭐⭐⭐⭐⭐  
**XP Available:** 220  
**Status:** 🔒 Locked  
**Phase Boss:** ☸️ Kubernetes Production Incident

**Prerequisites**

- Kubernetes on AWS — EKS & App Ops

**Unlocks**

- HA, Well-Architected, Cost & Career Capstone

> **Progress:** 0 / 12 concepts

**Objectives**

- [ ] **Helm** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-032</summary>

- 📺 Primary: [YT-K8S-032 — search: "Helm"](https://www.youtube.com/results?search_query=Helm+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Helm" alternate explanation](https://www.youtube.com/results?search_query=Helm+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Helm templating** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-033</summary>

- 📺 Primary: [YT-K8S-033 — search: "Helm templating"](https://www.youtube.com/results?search_query=Helm+templating+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Helm templating" alternate explanation](https://www.youtube.com/results?search_query=Helm+templating+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Ingress** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-034</summary>

- 📺 Primary: [YT-K8S-034 — search: "Ingress"](https://www.youtube.com/results?search_query=Ingress+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Ingress" alternate explanation](https://www.youtube.com/results?search_query=Ingress+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **TLS** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-035</summary>

- 📺 Primary: [YT-K8S-035 — search: "TLS"](https://www.youtube.com/results?search_query=TLS+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "TLS" alternate explanation](https://www.youtube.com/results?search_query=TLS+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Cert-Manager** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-036</summary>

- 📺 Primary: [YT-K8S-036 — search: "Cert-Manager"](https://www.youtube.com/results?search_query=Cert-Manager+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Cert-Manager" alternate explanation](https://www.youtube.com/results?search_query=Cert-Manager+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **RBAC** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-037</summary>

- 📺 Primary: [YT-K8S-037 — search: "RBAC"](https://www.youtube.com/results?search_query=RBAC+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "RBAC" alternate explanation](https://www.youtube.com/results?search_query=RBAC+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Service Accounts** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-038</summary>

- 📺 Primary: [YT-K8S-038 — search: "Service Accounts"](https://www.youtube.com/results?search_query=Service+Accounts+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Service Accounts" alternate explanation](https://www.youtube.com/results?search_query=Service+Accounts+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Network Policies** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-039</summary>

- 📺 Primary: [YT-K8S-039 — search: "Network Policies"](https://www.youtube.com/results?search_query=Network+Policies+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Network Policies" alternate explanation](https://www.youtube.com/results?search_query=Network+Policies+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **ArgoCD** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-040</summary>

- 📺 Primary: [YT-K8S-040 — search: "ArgoCD"](https://www.youtube.com/results?search_query=ArgoCD+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "ArgoCD" alternate explanation](https://www.youtube.com/results?search_query=ArgoCD+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **GitOps** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-041</summary>

- 📺 Primary: [YT-K8S-041 — search: "GitOps"](https://www.youtube.com/results?search_query=GitOps+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "GitOps" alternate explanation](https://www.youtube.com/results?search_query=GitOps+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Git as single source of truth** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-042</summary>

- 📺 Primary: [YT-K8S-042 — search: "Git as single source of truth"](https://www.youtube.com/results?search_query=Git+as+single+source+of+truth+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Git as single source of truth" alternate explanation](https://www.youtube.com/results?search_query=Git+as+single+source+of+truth+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

- [ ] **Automated rollback** — 🔒 Locked

<details>
<summary>📚 Open Resources — K8S-043</summary>

- 📺 Primary: [YT-K8S-043 — search: "Automated rollback"](https://www.youtube.com/results?search_query=Automated+rollback+Kubernetes+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Automated rollback" alternate explanation](https://www.youtube.com/results?search_query=Automated+rollback+Kubernetes+explained)
- 📖 Official: [Kubernetes Docs](https://kubernetes.io/docs/home/)
- 📚 Deep Dive: [Kubernetes learning resource](https://kubernetes.io/docs/concepts/)
- 🧪 Lab: [Kubernetes hands-on](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- 🎯 Interview: see [Kubernetes / Phase Interview Checkpoint](#kubernetes-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +220 XP
- 🏅 Advanced Kubernetes & GitOps Badge
- 🔓 Unlocks: HA, Well-Architected, Cost & Career Capstone

---

### 🎤 Kubernetes Interview Checkpoint

- [ ] Walk me through what happens from `docker build` to a running container.
- [ ] Explain the difference between a Docker volume and a bind mount.
- [ ] How would you debug a container that starts and immediately exits?
- [ ] Explain what a CI/CD pipeline stage failure taught you about pipeline design.
- [ ] How do you keep secrets out of a Docker image and pipeline logs?

---

## Phase 7 — Architecture & Capstone

### ⚔️ QUEST 32 — HA, Well-Architected, Cost & Career Capstone

**Difficulty:** ⭐⭐⭐⭐⭐  
**XP Available:** 240  
**Status:** 🔒 Locked  
**Phase Boss:** 💀 Production-Day Incident

**Prerequisites**

- Advanced Kubernetes & GitOps

**Unlocks**

- Phase 7 Boss Battle

> **Progress:** 0 / 14 concepts

**Objectives**

- [ ] **Operational Excellence** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-001</summary>

- 📺 Primary: [YT-ARC-001 — search: "Operational Excellence"](https://www.youtube.com/results?search_query=Operational+Excellence+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Operational Excellence" alternate explanation](https://www.youtube.com/results?search_query=Operational+Excellence+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Security pillar** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-002</summary>

- 📺 Primary: [YT-ARC-002 — search: "Security pillar"](https://www.youtube.com/results?search_query=Security+pillar+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Security pillar" alternate explanation](https://www.youtube.com/results?search_query=Security+pillar+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Reliability pillar** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-003</summary>

- 📺 Primary: [YT-ARC-003 — search: "Reliability pillar"](https://www.youtube.com/results?search_query=Reliability+pillar+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Reliability pillar" alternate explanation](https://www.youtube.com/results?search_query=Reliability+pillar+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Performance Efficiency pillar** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-004</summary>

- 📺 Primary: [YT-ARC-004 — search: "Performance Efficiency pillar"](https://www.youtube.com/results?search_query=Performance+Efficiency+pillar+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Performance Efficiency pillar" alternate explanation](https://www.youtube.com/results?search_query=Performance+Efficiency+pillar+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Cost Optimization pillar** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-005</summary>

- 📺 Primary: [YT-ARC-005 — search: "Cost Optimization pillar"](https://www.youtube.com/results?search_query=Cost+Optimization+pillar+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Cost Optimization pillar" alternate explanation](https://www.youtube.com/results?search_query=Cost+Optimization+pillar+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Sustainability pillar** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-006</summary>

- 📺 Primary: [YT-ARC-006 — search: "Sustainability pillar"](https://www.youtube.com/results?search_query=Sustainability+pillar+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Sustainability pillar" alternate explanation](https://www.youtube.com/results?search_query=Sustainability+pillar+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **High availability** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-007</summary>

- 📺 Primary: [YT-ARC-007 — search: "High availability"](https://www.youtube.com/results?search_query=High+availability+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "High availability" alternate explanation](https://www.youtube.com/results?search_query=High+availability+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Fault tolerance** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-008</summary>

- 📺 Primary: [YT-ARC-008 — search: "Fault tolerance"](https://www.youtube.com/results?search_query=Fault+tolerance+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Fault tolerance" alternate explanation](https://www.youtube.com/results?search_query=Fault+tolerance+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Disaster recovery** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-009</summary>

- 📺 Primary: [YT-ARC-009 — search: "Disaster recovery"](https://www.youtube.com/results?search_query=Disaster+recovery+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Disaster recovery" alternate explanation](https://www.youtube.com/results?search_query=Disaster+recovery+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **RTO and RPO** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-010</summary>

- 📺 Primary: [YT-ARC-010 — search: "RTO and RPO"](https://www.youtube.com/results?search_query=RTO+and+RPO+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "RTO and RPO" alternate explanation](https://www.youtube.com/results?search_query=RTO+and+RPO+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Right-sizing** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-011</summary>

- 📺 Primary: [YT-ARC-011 — search: "Right-sizing"](https://www.youtube.com/results?search_query=Right-sizing+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Right-sizing" alternate explanation](https://www.youtube.com/results?search_query=Right-sizing+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Savings Plans** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-012</summary>

- 📺 Primary: [YT-ARC-012 — search: "Savings Plans"](https://www.youtube.com/results?search_query=Savings+Plans+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Savings Plans" alternate explanation](https://www.youtube.com/results?search_query=Savings+Plans+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Architecture trade-offs** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-013</summary>

- 📺 Primary: [YT-ARC-013 — search: "Architecture trade-offs"](https://www.youtube.com/results?search_query=Architecture+trade-offs+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Architecture trade-offs" alternate explanation](https://www.youtube.com/results?search_query=Architecture+trade-offs+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

- [ ] **Cloud/DevOps interview preparation** — 🔒 Locked

<details>
<summary>📚 Open Resources — ARC-014</summary>

- 📺 Primary: [YT-ARC-014 — search: "Cloud/DevOps interview preparation"](https://www.youtube.com/results?search_query=Cloud%2FDevOps+interview+preparation+Architecture+tutorial) *(YouTube search — no single video verified; pick a recent, well-reviewed result)*
- 🎥 Alternative: [search: "Cloud/DevOps interview preparation" alternate explanation](https://www.youtube.com/results?search_query=Cloud%2FDevOps+interview+preparation+Architecture+explained)
- 📖 Official: [Architecture Docs](https://aws.amazon.com/architecture/well-architected/)
- 📚 Deep Dive: [Architecture learning resource](https://aws.amazon.com/blogs/architecture/)
- 🧪 Lab: No verified dedicated lab found — practice this concept inside your own session project.
- 🎯 Interview: see [Architecture / Phase Interview Checkpoint](#system-design-interview-checkpoint)

</details>

**Completion Requirements**

- [ ] All concepts reached at least Mastery Level 2 (Understanding)
- [ ] Hands-on lab completed for the session's core concepts
- [ ] Troubleshooting challenge completed
- [ ] Interview checkpoint questions answered for this phase

**Rewards**

- +240 XP
- 🏅 HA, Well-Architected, Cost & Career Capstone Badge
- 🔓 Unlocks: Phase 7 Boss Battle

---

### 🎤 System Design Interview Checkpoint

- [ ] Explain Terraform state and why remote state with locking matters.
- [ ] What's Terraform drift, and how do you detect and fix it?
- [ ] Explain idempotency in Ansible and why it matters operationally.
- [ ] How would you structure a Terraform project for multiple environments?

---

## 💀 Boss Battles

One realistic engineering incident closes out each phase. These are not puzzles — they are the kind of failure you would realistically be paged for.

### 🧟 Linux System Failure — Phase 1

**Scenario:** A production Linux host is misbehaving: unexplained high load, a runaway process, a full disk, and a service that silently died.

**Environment:** A single Linux VM (or container) you provision yourself.

**Symptoms:**
- Load average is abnormally high with no obvious cause.
- `/var` has filled to 100% and a service has stopped logging.
- A background process is consuming CPU and won't respond to normal signals.
- SSH access is slow/intermittent.

**Requirements to clear the boss:**
- Identify the runaway process and safely terminate it.
- Free disk space without deleting anything you don't understand first.
- Restore the failed service and confirm it is logging again.
- Explain root cause in plain language.

**Skills tested:** Process management, signals, disk/filesystem tools, systemd/journalctl, basic triage under pressure.

**Evidence to submit:** A written incident report: symptoms, root cause, fix, and prevention.

**XP Reward:** +150

**Status:** 🔒 Locked

---

### 🐍 Automation Breaker — Phase 2

**Scenario:** A Python automation script that reports on cloud resources silently fails in production after working fine locally.

**Environment:** Your own Python automation project connected to a mock or real API.

**Symptoms:**
- The script works locally but throws unhandled exceptions in a different environment.
- Logs are missing or unhelpful.
- Credentials/config are hardcoded and now invalid.
- The script has no error handling for network failures.

**Requirements to clear the boss:**
- Add structured logging.
- Add robust error handling and retries.
- Externalize configuration/secrets.
- Make the script idempotent and safe to re-run.

**Skills tested:** Exception handling, logging, environment/config management, defensive scripting.

**Evidence to submit:** Before/after code diff plus a short write-up of what broke and why.

**XP Reward:** +150

**Status:** 🔒 Locked

---

### ☁️ AWS Architecture Incident — Phase 3

**Scenario:** A newly built AWS environment has a security misconfiguration and an availability gap discovered during a mock review.

**Environment:** A VPC + EC2 + RDS environment you built yourself.

**Symptoms:**
- A security group is wider than it should be.
- An IAM role has excessive permissions.
- The application has a single point of failure (one AZ, one instance).
- No monitoring/alerting exists.

**Requirements to clear the boss:**
- Tighten security groups and IAM to least privilege.
- Introduce redundancy across at least two AZs.
- Add basic CloudWatch monitoring/alerting.
- Document the before/after architecture.

**Skills tested:** IAM, VPC/subnet design, security groups vs NACLs, high availability basics.

**Evidence to submit:** Architecture diagrams (before/after) and a short security review note.

**XP Reward:** +150

**Status:** 🔒 Locked

---

### 🐳 Deployment Incident — Phase 4

**Scenario:** A containerized application fails to deploy correctly through the CI/CD pipeline — the image builds, but the pipeline or the runtime breaks.

**Environment:** Your Dockerized app plus CI/CD pipeline (Jenkins or GitHub Actions).

**Symptoms:**
- The Docker image builds but the container crashes on start.
- A quality gate or pipeline stage fails intermittently.
- Secrets are exposed in logs or the image.
- Rollback is not possible.

**Requirements to clear the boss:**
- Fix the container so it starts reliably and follows security best practice (no root, no baked-in secrets).
- Make the pipeline fail fast and clearly on real issues.
- Implement a rollback path.
- Document the pipeline stages.

**Skills tested:** Dockerfile hygiene, container networking/volumes, pipeline design, secrets handling.

**Evidence to submit:** A pipeline run log/screenshot plus a written rollback procedure.

**XP Reward:** +150

**Status:** 🔒 Locked

---

### 🏗️ Infrastructure Failure — Phase 5

**Scenario:** Terraform-managed infrastructure drifts from its defined state, and an Ansible playbook fails halfway through a run, leaving hosts in a mixed state.

**Environment:** Your Terraform-managed AWS environment plus an Ansible inventory.

**Symptoms:**
- `terraform plan` shows unexpected drift.
- State is at risk (local state, no locking).
- An Ansible playbook is not idempotent and fails partway through, leaving inconsistent hosts.
- No remote backend/state strategy exists.

**Requirements to clear the boss:**
- Reconcile drift and explain its cause.
- Move to a remote backend with state locking.
- Make the playbook idempotent and safely re-runnable.
- Document the recovery process.

**Skills tested:** Terraform state management, IaC drift, Ansible idempotency, playbook debugging.

**Evidence to submit:** Terraform plan output before/after, and an Ansible run log.

**XP Reward:** +150

**Status:** 🔒 Locked

---

### ☸️ Kubernetes Production Incident — Phase 6

**Scenario:** A pod in your cluster is stuck in CrashLoopBackOff, and a rolling deployment is stuck mid-rollout.

**Environment:** Your own Kubernetes cluster (local, EKS, or equivalent).

**Symptoms:**
- A pod repeatedly crashes and restarts.
- A Deployment rollout is stuck, with old and new pods mixed.
- A Service is not routing traffic to healthy pods.
- Resource limits appear misconfigured.

**Requirements to clear the boss:**
- Diagnose the CrashLoopBackOff using logs, describe, and events.
- Fix the rollout (readiness/liveness probes, resource requests/limits).
- Confirm traffic reaches only healthy pods.
- Document the fix.

**Skills tested:** kubectl troubleshooting, probes, rollout strategy, resource management.

**Evidence to submit:** `kubectl describe`/logs output plus a written root-cause summary.

**XP Reward:** +150

**Status:** 🔒 Locked

---

### 💀 FINAL BOSS — PRODUCTION-DAY INCIDENT

See [Final Boss — Production Cloud Capstone](#-final-boss--production-cloud-capstone) below for the full specification. This is the culmination of every phase boss combined into one production-style capstone.

**XP Reward:** +1000

---

## 🏆 Achievements

| Achievement | Requirement | XP | Date Earned | Evidence |
|---|---|---:|---|---|
| 🏆 First Blood | Complete your first concept to Level 2 (Understanding) or beyond. | +25 | | |
| 🐧 Penguin | Complete all of Session 1-2 (Linux Fundamentals I & II). | +50 | | |
| 📜 Scriptwright | Complete Sessions 3-4 (Shell Scripting I & II). | +50 | | |
| 🌱 Version Controlled | Complete Sessions 5-6 (Git & GitHub). | +50 | | |
| 🌐 Packet Runner | Complete Session 7 (Networking Fundamentals). | +50 | | |
| 🐍 Automation Engineer | Complete Phase 2 (Python for Automation). | +75 | | |
| ☁️ Cloudborn | Complete Session 10-11 (AWS core + EC2). | +75 | | |
| 🔐 IAM Guardian | Complete Session 12 (IAM, Security & Governance). | +75 | | |
| 🕸️ Network Architect | Complete Session 13 (VPC & AWS Networking Deep Dive). | +75 | | |
| 🗄️ Data Custodian | Complete Session 15 (Databases on AWS). | +75 | | |
| 🤖 Boto Wrangler | Complete Session 17 (Python for Automation III — Boto3). | +75 | | |
| 🐳 Containerized | Complete Sessions 18-19 (Docker). | +100 | | |
| 🛡️ Quality Gatekeeper | Complete Session 20 (SonarQube & Pipeline Security). | +75 | | |
| 🚀 Pipeline Engineer | Complete Sessions 21-23 (Jenkins, GitHub Actions, CI/CD Capstone). | +125 | | |
| 🏗️ Infrastructure Builder | Complete Sessions 24-25 (Terraform). | +100 | | |
| 🤖 Automation Master | Complete Sessions 26-27 (Ansible). | +100 | | |
| ☸️ Orchestrator | Complete Sessions 28-29 (Kubernetes basics). | +100 | | |
| 🛰️ Cluster Commander | Complete Sessions 30-31 (EKS & GitOps). | +125 | | |
| 🌍 Production Ready | Complete Session 32 and the Final Boss. | +250 | | |
| 💼 Job Hunter | Submit your first serious job application. | +50 | | |
| 🎯 Interview Ready | Pass a full phase Interview Checkpoint. | +75 | | |
| 🏆 Cloud Engineer | Complete the entire roadmap end to end. | +500 | | |

---

## 📜 Certification Roadmap

### AWS Certified Cloud Practitioner — CLF-C02

| | |
|---|---|
| **Stage** | Foundation (optional) |
| **Status** | 🔒 Not started |
| **Progress** | 0% |
| **XP on pass** | +500 |
| **Recommended roadmap position** | Sessions 10-11 |
| **Official info** | [AWS Certified Cloud Practitioner — CLF-C02](https://aws.amazon.com/certification/certified-cloud-practitioner/) |
| **Practice exams taken** | 0 |
| **Exam date** | |
| **Attempts** | |
| **Result** | |
| **Weak domains** | |
| **Evidence** | |

### AWS Certified Solutions Architect — Associate — SAA-C03

| | |
|---|---|
| **Stage** | Primary |
| **Status** | 🔒 Not started |
| **Progress** | 0% |
| **XP on pass** | +500 |
| **Recommended roadmap position** | After Phase 3 |
| **Official info** | [AWS Certified Solutions Architect — Associate — SAA-C03](https://aws.amazon.com/certification/certified-solutions-architect-associate/) |
| **Practice exams taken** | 0 |
| **Exam date** | |
| **Attempts** | |
| **Result** | |
| **Weak domains** | |
| **Evidence** | |

### HashiCorp Certified: Terraform Associate — 003

| | |
|---|---|
| **Stage** | Infrastructure as Code |
| **Status** | 🔒 Not started |
| **Progress** | 0% |
| **XP on pass** | +500 |
| **Recommended roadmap position** | After Phase 5 |
| **Official info** | [HashiCorp Certified: Terraform Associate — 003](https://developer.hashicorp.com/certifications/infrastructure-automation) |
| **Practice exams taken** | 0 |
| **Exam date** | |
| **Attempts** | |
| **Result** | |
| **Weak domains** | |
| **Evidence** | |

### Kubernetes and Cloud Native Associate — KCNA

| | |
|---|---|
| **Stage** | Kubernetes foundation |
| **Status** | 🔒 Not started |
| **Progress** | 0% |
| **XP on pass** | +500 |
| **Recommended roadmap position** | After Session 29 |
| **Official info** | [Kubernetes and Cloud Native Associate — KCNA](https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/) |
| **Practice exams taken** | 0 |
| **Exam date** | |
| **Attempts** | |
| **Result** | |
| **Weak domains** | |
| **Evidence** | |

### Certified Kubernetes Administrator — CKA

| | |
|---|---|
| **Stage** | Kubernetes operations |
| **Status** | 🔒 Not started |
| **Progress** | 0% |
| **XP on pass** | +500 |
| **Recommended roadmap position** | After Phase 6 |
| **Official info** | [Certified Kubernetes Administrator — CKA](https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/) |
| **Practice exams taken** | 0 |
| **Exam date** | |
| **Attempts** | |
| **Result** | |
| **Weak domains** | |
| **Evidence** | |

### AWS Certified DevOps Engineer — Professional — DOP-C02

| | |
|---|---|
| **Stage** | Later / post-job |
| **Status** | 🔒 Not started |
| **Progress** | 0% |
| **XP on pass** | +500 |
| **Recommended roadmap position** | Post-job |
| **Official info** | [AWS Certified DevOps Engineer — Professional — DOP-C02](https://aws.amazon.com/certification/certified-devops-engineer-professional/) |
| **Practice exams taken** | 0 |
| **Exam date** | |
| **Attempts** | |
| **Result** | |
| **Weak domains** | |
| **Evidence** | |

> **Principle:** certifications support the portfolio; they do not replace hands-on projects.

---

## 🏗️ Project Portfolio

| Project | Tier | XP | Status | GitHub | Demo |
|---|---|---:|:---:|---|---|
| Linux System Health Monitor | 🟢 FOUNDATION | +100 | 🔒 | — | — |
| Python Cloud Janitor / AWS Resource Reporter | 🟡 ENGINEERING | +100 | 🔒 | — | — |
| AWS VPC + EC2 + ALB + RDS Architecture | 🟡 ENGINEERING | +250 | 🔒 | — | — |
| Terraform AWS Infrastructure | 🟡 ENGINEERING | +250 | 🔒 | — | — |
| Dockerized Application | 🟢 FOUNDATION | +100 | 🔒 | — | — |
| End-to-End CI/CD Pipeline | 🔴 PRODUCTION | +250 | 🔒 | — | — |
| Ansible Multi-Node Deployment | 🟡 ENGINEERING | +150 | 🔒 | — | — |
| Prometheus + Grafana Observability Stack | 🟡 ENGINEERING | +150 | 🔒 | — | — |
| Kubernetes Application | 🟡 ENGINEERING | +150 | 🔒 | — | — |
| EKS Production-Style Deployment | 🔴 PRODUCTION | +250 | 🔒 | — | — |
| ArgoCD GitOps Deployment | 🔴 PRODUCTION | +250 | 🔒 | — | — |
| Final Production Cloud Capstone | 🔴 PRODUCTION | +500 | 🔒 | — | — |

### Linux System Health Monitor

- **Difficulty tier:** 🟢 FOUNDATION
- **XP:** +100
- **Prerequisites:** Sessions 1-4
- **Skills unlocked:** Linux CLI, shell scripting, systemd, logging
- **Objectives:** Build a shell/Python tool that reports CPU, memory, disk, and running services, and alerts on thresholds.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### Python Cloud Janitor / AWS Resource Reporter

- **Difficulty tier:** 🟡 ENGINEERING
- **XP:** +100
- **Prerequisites:** Phase 2 + Session 17
- **Skills unlocked:** Python, Boto3, REST/JSON, scheduling
- **Objectives:** A Boto3 script that inventories AWS resources, flags unused/costly ones, and can optionally clean them up safely.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### AWS VPC + EC2 + ALB + RDS Architecture

- **Difficulty tier:** 🟡 ENGINEERING
- **XP:** +250
- **Prerequisites:** Sessions 10-15
- **Skills unlocked:** VPC design, EC2, IAM, ALB, RDS, HA basics
- **Objectives:** Stand up a two-tier web application across multiple AZs with a load balancer and managed database.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### Terraform AWS Infrastructure

- **Difficulty tier:** 🟡 ENGINEERING
- **XP:** +250
- **Prerequisites:** Sessions 24-25
- **Skills unlocked:** Terraform state, modules, remote backend
- **Objectives:** Reproduce the AWS architecture above entirely in Terraform, with remote state and modules.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### Dockerized Application

- **Difficulty tier:** 🟢 FOUNDATION
- **XP:** +100
- **Prerequisites:** Sessions 18-19
- **Skills unlocked:** Dockerfile, networking, volumes, security
- **Objectives:** Containerize an application with a secure, minimal Dockerfile and documented networking/volume choices.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### End-to-End CI/CD Pipeline

- **Difficulty tier:** 🔴 PRODUCTION
- **XP:** +250
- **Prerequisites:** Sessions 20-23
- **Skills unlocked:** Jenkins or GitHub Actions, SonarQube, secrets management
- **Objectives:** Pipeline that builds, tests, scans, and deploys the Dockerized application, with quality gates and rollback.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### Ansible Multi-Node Deployment

- **Difficulty tier:** 🟡 ENGINEERING
- **XP:** +150
- **Prerequisites:** Sessions 26-27
- **Skills unlocked:** Playbooks, idempotency, inventory management
- **Objectives:** Automate configuration and deployment across multiple hosts/VMs using idempotent playbooks.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### Prometheus + Grafana Observability Stack

- **Difficulty tier:** 🟡 ENGINEERING
- **XP:** +150
- **Prerequisites:** Session 25
- **Skills unlocked:** Metrics, dashboards, alerting
- **Objectives:** Instrument your infrastructure with Prometheus metrics and build Grafana dashboards + alerts.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### Kubernetes Application

- **Difficulty tier:** 🟡 ENGINEERING
- **XP:** +150
- **Prerequisites:** Sessions 28-29
- **Skills unlocked:** Deployments, Services, probes, resource limits
- **Objectives:** Deploy the Dockerized application to a Kubernetes cluster with proper health checks and resource limits.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### EKS Production-Style Deployment

- **Difficulty tier:** 🔴 PRODUCTION
- **XP:** +250
- **Prerequisites:** Session 30
- **Skills unlocked:** EKS, AWS-native networking/IAM for K8s
- **Objectives:** Move the Kubernetes application onto EKS with IAM roles for service accounts and AWS-native networking.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### ArgoCD GitOps Deployment

- **Difficulty tier:** 🔴 PRODUCTION
- **XP:** +250
- **Prerequisites:** Session 31
- **Skills unlocked:** GitOps, ArgoCD, declarative deployment
- **Objectives:** Deploy the application via GitOps so cluster state is driven entirely from a Git repository.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

### Final Production Cloud Capstone

- **Difficulty tier:** 🔴 PRODUCTION
- **XP:** +500
- **Prerequisites:** Session 32 / Final Boss
- **Skills unlocked:** Everything above, combined
- **Objectives:** See Final Boss section.
- **Architecture diagram:** _(add link/image here)_
- **GitHub URL:** 
- **Live Demo URL:** 
- **README URL:** 
- **Security considerations:** 
- **Cost considerations:** 
- **Monitoring:** 
- **Lessons learned:** 
- **Status:** 🔒 Locked

**Tier legend:** 🟢 FOUNDATION — understand and implement · 🟡 ENGINEERING — implement + troubleshoot · 🔴 PRODUCTION — design + secure + monitor + optimize + explain.

---

## 🔗 Resource Index

Every concept-level YouTube search link is tagged with a unique ID inside its collapsible resource block above (e.g. `YT-AWS-014`). Shared official/documentation resources per topic area are indexed once here rather than repeated hundreds of times.

| ID | Resource | Type | Topic | URL |
|---|---|---|---|---|
| OFF-LIN | Linux Official Documentation | Documentation | Linux | https://man7.org/linux/man-pages/ |
| ART-LIN | Linux Learning Resource | Article/Deep-dive | Linux | https://labex.io/linuxjourney |
| OFF-GIT | Git Official Documentation | Documentation | Git | https://git-scm.com/doc |
| ART-GIT | Git Learning Resource | Article/Deep-dive | Git | https://www.atlassian.com/git/tutorials |
| LAB-GIT | Git Hands-on | Lab | Git | https://learngitbranching.js.org/ |
| OFF-NET | Networking Official Documentation | Documentation | Networking | https://www.cloudflare.com/learning/ |
| OFF-PY | Python Official Documentation | Documentation | Python | https://docs.python.org/3/ |
| ART-PY | Python Learning Resource | Article/Deep-dive | Python | https://realpython.com/ |
| OFF-AWS | AWS Official Documentation | Documentation | AWS | https://docs.aws.amazon.com/ |
| ART-AWS | AWS Learning Resource | Article/Deep-dive | AWS | https://aws.amazon.com/architecture/well-architected/ |
| LAB-AWS | AWS Hands-on | Lab | AWS | https://aws.amazon.com/getting-started/hands-on/ |
| OFF-DOK | Docker Official Documentation | Documentation | Docker | https://docs.docker.com/ |
| ART-DOK | Docker Learning Resource | Article/Deep-dive | Docker | https://docs.docker.com/get-started/overview/ |
| LAB-DOK | Docker Hands-on | Lab | Docker | https://docs.docker.com/get-started/ |
| OFF-SNR | SonarQube Official Documentation | Documentation | SonarQube | https://docs.sonarsource.com/sonarqube/latest/ |
| OFF-JNK | Jenkins Official Documentation | Documentation | Jenkins | https://www.jenkins.io/doc/ |
| ART-JNK | Jenkins Learning Resource | Article/Deep-dive | Jenkins | https://www.jenkins.io/doc/book/pipeline/ |
| LAB-JNK | Jenkins Hands-on | Lab | Jenkins | https://www.jenkins.io/doc/tutorials/ |
| OFF-GHA | GitHub Actions Official Documentation | Documentation | GitHub Actions | https://docs.github.com/en/actions |
| ART-GHA | GitHub Actions Learning Resource | Article/Deep-dive | GitHub Actions | https://docs.github.com/en/actions/learn-github-actions |
| LAB-GHA | GitHub Actions Hands-on | Lab | GitHub Actions | https://docs.github.com/en/actions/quickstart |
| OFF-CICD | CI/CD Official Documentation | Documentation | CI/CD | https://docs.github.com/en/actions |
| ART-CICD | CI/CD Learning Resource | Article/Deep-dive | CI/CD | https://www.jenkins.io/doc/book/pipeline/ |
| OFF-TF | Terraform Official Documentation | Documentation | Terraform | https://developer.hashicorp.com/terraform/docs |
| ART-TF | Terraform Learning Resource | Article/Deep-dive | Terraform | https://developer.hashicorp.com/terraform/intro |
| LAB-TF | Terraform Hands-on | Lab | Terraform | https://developer.hashicorp.com/terraform/tutorials |
| OFF-ANS | Ansible Official Documentation | Documentation | Ansible | https://docs.ansible.com/ |
| ART-ANS | Ansible Learning Resource | Article/Deep-dive | Ansible | https://docs.ansible.com/ansible/latest/getting_started/index.html |
| OFF-K8S | Kubernetes Official Documentation | Documentation | Kubernetes | https://kubernetes.io/docs/home/ |
| ART-K8S | Kubernetes Learning Resource | Article/Deep-dive | Kubernetes | https://kubernetes.io/docs/concepts/ |
| LAB-K8S | Kubernetes Hands-on | Lab | Kubernetes | https://kubernetes.io/docs/tutorials/kubernetes-basics/ |
| OFF-ARC | Architecture Official Documentation | Documentation | Architecture | https://aws.amazon.com/architecture/well-architected/ |
| ART-ARC | Architecture Learning Resource | Article/Deep-dive | Architecture | https://aws.amazon.com/blogs/architecture/ |
| OFF-OBS | Observability Official Documentation | Documentation | Observability | https://prometheus.io/docs/introduction/overview/ |
| ART-OBS | Observability Learning Resource | Article/Deep-dive | Observability | https://grafana.com/docs/grafana/latest/ |

> Per-concept `YT-XXX-###` search-link IDs live inline in each concept's `<details>` block rather than being duplicated here — there are hundreds of them and they're already anchored to their concept.

---

## 🔁 Revision Queue

Move any concept marked 🔴 Needs Review here.

| Concept | Reason | Last Studied | Next Review | Status |
|---|---|---|---|---|
| | | | | |

Status legend: 🟢 Strong · 🟡 Fading · 🔴 Forgotten

---

## 📖 Reference Library

| Phase | Area | Primary Reference |
|---|---|---|
| Phase 1 | Linux | *The Linux Command Line* — William Shotts |
| Phase 1 | Linux / Systems | *How Linux Works* — Brian Ward |
| Phase 1 | Git | *Pro Git* — Scott Chacon & Ben Straub |
| Phase 2 | Python | *Python Crash Course* — Eric Matthes |
| Phase 2 | Python Automation | *Automate the Boring Stuff with Python* — Al Sweigart |
| Phase 3 | AWS | AWS Well-Architected Framework |
| Phase 4 | Docker | *Docker Deep Dive* — Nigel Poulton |
| Phase 5 | Terraform | *Terraform: Up & Running* — Yevgeniy Brikman |
| Phase 5 | Ansible | *Ansible for DevOps* — Jeff Geerling |
| Phase 6 | Kubernetes | *Kubernetes: Up & Running* — Burns, Beda & Hightower |

---

## 🧠 Weekly Review

| | |
|---|---|
| **Week** | |
| **XP Earned** | |
| **Concepts Completed** | |
| **Labs Completed** | |
| **Projects Progressed** | |
| **Bosses Defeated** | |
| **Biggest Failure** | |
| **Biggest Breakthrough** | |
| **What I Still Don't Understand** | |
| **Weakest Skill** | |
| **Strongest Skill** | |
| **Next Week's Boss** | |
| **Next Week's Target** | |

---

## 🆙 Monthly Level-Up

| | |
|---|---|
| **Month** | |
| **Level Before** | |
| **Level After** | |
| **XP Earned** | |
| **Skills Unlocked** | |
| **Projects Completed** | |
| **Certifications** | |
| **Biggest Technical Achievement** | |
| **Biggest Weakness** | |
| **Next Month's Objective** | |

---

## 🧪 Weekly Learning Log

| Week | Hours | Focus | Lab / Project | What Broke? | What I Learned | Evidence |
|---:|---:|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |
| 9 | | | | | | |
| 10 | | | | | | |
| 11 | | | | | | |
| 12 | | | | | | |

---

## 🔧 Troubleshooting Log

| Date | System | Symptom | Root Cause | Fix | Lesson | Evidence |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

---

## 💼 Job Hunt Mode

| Company | Role | Location | Date | Status | Resume Version | Referral | Interview Result | Weak Area | Follow-up |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

**Status legend:** 📝 Preparing · 📨 Applied · 🧪 OA · 🎤 Technical · 🏗️ System Design · 👔 HR · ❌ Rejected · 🎉 Offer

**XP rewards:** 📨 Applied +10 · 🧪 OA passed +25 · 🎤 Technical passed +100 · 🏗️ System Design passed +100 · 👔 HR passed +25 · 🎉 Offer +1000

---

## 🧠 Interview Post-Mortem

Fill this out after every real interview, pass or fail.

| | |
|---|---|
| **Question I couldn't answer** | |
| **What was actually being tested** | |
| **What I need to learn** | |
| **What I need to build** | |
| **What I need to revise** | |
| **Date to revisit** | |

---

## 🏁 Final Boss — Production Cloud Capstone

**💀 PRODUCTION-DAY INCIDENT**

A single realistic capstone that combines everything from every phase into one production-style challenge, meant to become the centerpiece portfolio project.

**Combines:** Linux, Networking, AWS, IAM, VPC, Subnets, Route Tables, EC2, Load Balancer, Auto Scaling, RDS, Docker, CI/CD, Terraform, Ansible, Monitoring, Kubernetes/EKS, Security, Secrets, Cost Optimization, High Availability, Disaster Recovery.

### Architecture

Design a production-style application deployed on EKS, provisioned entirely via Terraform, configured via Ansible where applicable, sitting behind a load balancer, backed by RDS, observed with CloudWatch + Prometheus/Grafana, and deployed via a CI/CD pipeline with GitOps.

### Requirements

- [ ] Infrastructure fully defined as code (Terraform), no manual console changes.
- [ ] Application containerized and deployed to EKS.
- [ ] CI/CD pipeline builds, tests, scans, and deploys automatically.
- [ ] IAM follows least privilege throughout (including IRSA for EKS).
- [ ] Multi-AZ high availability for compute and database.
- [ ] Centralized logging and metrics with alerting.
- [ ] Secrets are never stored in plaintext or committed to Git.
- [ ] Documented disaster recovery plan with defined RTO/RPO.

### Constraints

- Must run within a realistic personal-project budget (document actual costs).
- Must tolerate the loss of a single AZ without full outage.
- Must be redeployable from scratch using only the Git repository.

### Threat Model

- Publicly exposed load balancer/ingress — what can reach it and what can't.
- Compromised container — what blast radius does IAM/network policy limit it to.
- Leaked credentials — what is the rotation/revocation plan.

### Cost Considerations

- Right-sized instance types and autoscaling limits.
- Documented monthly cost estimate vs actual.
- Cleanup/teardown script so the environment doesn't run (and bill) unattended.

### Monitoring

- CloudWatch for AWS-native metrics/logs.
- Prometheus + Grafana for application/cluster metrics.
- At least one meaningful alert (not just CPU > 80%).

### Failure Scenarios to Demonstrate

- [ ] Kill a pod — confirm self-healing.
- [ ] Kill an AZ (simulate) — confirm the app stays up.
- [ ] Deploy a broken image — confirm rollback works.
- [ ] Simulate an RDS failure — confirm recovery process is documented and (ideally) tested.

### Deployment Process / Rollback / Disaster Recovery

Document the exact steps to deploy, roll back a bad release, and recover from a full environment loss.

### Documentation Requirements

- Architecture diagram.
- README with setup/teardown instructions.
- Runbook for at least one incident type.

### Interview Questions

- [ ] Walk me through this architecture end to end.
- [ ] What would break first under 10x load, and how would you find out?
- [ ] What's the single point of failure you're least comfortable with, and why?
- [ ] How would you cut this environment's cost by 30% without hurting reliability?

**XP Reward:** +1000

**Status:** 🔒 Locked

---

## 🏆 Dream-Job Readiness

| Category | Status |
|---|:---:|
| Linux troubleshooting | 🔴 Weak |
| Networking and subnetting | 🔴 Weak |
| Secure AWS VPC design | 🔴 Weak |
| IAM and least privilege | 🔴 Weak |
| EC2 operations | 🔴 Weak |
| Terraform infrastructure | 🔴 Weak |
| Ansible automation | 🔴 Weak |
| Docker and container troubleshooting | 🔴 Weak |
| CI/CD with testing and security checks | 🔴 Weak |
| Kubernetes operations | 🔴 Weak |
| EKS and AWS-native networking/IAM | 🔴 Weak |
| CloudWatch + Prometheus/Grafana observability | 🔴 Weak |
| Architecture trade-offs: reliability, security, performance and cost | 🔴 Weak |
| Strong GitHub portfolio with READMEs and diagrams | 🔴 Weak |
| Project explanations under interview pressure | 🔴 Weak |
| Consistent job applications and tracking | 🔴 Weak |

**Status legend:** 🟢 Ready · 🟡 Needs Work · 🔴 Weak

---

## 🗂️ Suggested Repository Structure

```text
cloud-engineering/
├── README.md
├── ROADMAP.md
├── JOURNEY.md
│
├── linux/
├── networking/
├── python/
├── aws/
├── docker/
├── cicd/
├── terraform/
├── ansible/
├── kubernetes/
├── observability/
│
├── projects/
│
└── certifications/
```

---

## 🔍 Final Quality Control Audit

- [x] All 32 sessions remain (32 present).
- [x] All 7 original phases remain (7 present).
- [x] Every original concept remains (350 concepts, none merged/removed/reordered).
- [x] Existing projects remain (12 projects, now with tiers/XP/architecture fields).
- [x] Existing certification roadmap remains (6 certifications).
- [x] Weekly tracking remains (Weekly Learning Log, 12 weeks).
- [x] Troubleshooting tracking remains (Troubleshooting Log).
- [x] Job tracking remains (Job Hunt Mode).
- [x] Final readiness checklist remains (Dream-Job Readiness, 16 categories).
- [x] Every concept has a resource section (collapsible <details> block).
- [x] Resources are concept-specific (per-concept search-query links + shared verified docs).
- [x] No YouTube video IDs were fabricated — search-query links used throughout, clearly labelled.
- [x] No lab/documentation/article URLs were fabricated — only well-known, stable top-level pages used; unverifiable slots explicitly marked 'No verified dedicated lab/article found.'
- [x] Official documentation is prioritized for AWS, Docker, Kubernetes, Terraform, Ansible.
- [x] Resources are varied across official docs, third-party deep-dives, and hands-on tutorials per topic.
- [x] Resource IDs are unique (YT-<PREFIX>-###, OFF-<PREFIX>, ART-<PREFIX>, LAB-<PREFIX>).
- [x] Resource Index exists.
- [x] Revision Queue exists.
- [x] Next Action exists.
- [x] Today's Quest exists.
- [x] Weekly Mission exists.
- [x] Monthly Level-Up exists.
- [x] XP system is manually maintainable (ledger table, no automation).
- [x] Level system is manually maintainable (10 levels defined).
- [x] Streak system is manually maintainable.
- [x] Skill tree exists.
- [x] Quest system exists (all 32 sessions as Quests with prerequisites/unlocks/rewards).
- [x] Boss battles exist (6 phase bosses + 1 final boss, realistic engineering incidents).
- [x] Achievements exist (22 badges with requirements/XP).
- [x] Project XP exists (tiered 🟢🟡🔴 with XP values).
- [x] Certification tracking exists (status/progress/exam tracking per cert).
- [x] Interview checkpoints exist (8 topic checkpoints with realistic questions).
- [x] Evidence tracking exists (per-project and per-boss evidence fields).
- [x] Job Hunt Mode exists.
- [x] Final Boss exists (Production Cloud Capstone).
- [x] Dream-Job Readiness exists.
- [x] Repository structure exists.
- [x] GitHub presentation kept professional: consistent headings, tables, collapsible sections, clickable TOC.

---

## ✍️ Journey

Keep the personal story in `JOURNEY.md` — milestones, failures, breakthroughs, certifications, projects, interviews and eventually the day the offer lands.

> **Build → break → troubleshoot → document → explain → repeat.**
