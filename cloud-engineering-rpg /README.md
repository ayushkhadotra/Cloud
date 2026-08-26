# Cloud Engineering RPG

A personal, offline dashboard/game-engine for tracking real progress through the
**Cloud Engineering RPG Master Roadmap** (`ROADMAP-2.md`). The Markdown file is the
curriculum — every phase, quest, concept, XP value, level threshold, boss, achievement,
certification, and project in this app was extracted directly from it, unchanged.
This app is the interface and tracking engine on top of that curriculum.

## What it does

- Tracks your progress through 350 concepts across 32 quests and 7 phases
- Runs the roadmap's exact XP system, 10 RPG levels, and 6-level concept mastery system
  (Exposure → Understanding → Hands-on → Troubleshooting → Interview Ready → Mastered)
- Computes a "Next Action" — the one thing to do next — from your actual state
- Unlocks quests, phase bosses, and projects automatically as prerequisites are met
- Tracks real date-based streaks, a daily quest, weekly missions, boss battles,
  achievements, certifications, a project portfolio, a revision queue for stale/weak
  concepts, learning/troubleshooting logs, interview post-mortems, and job-hunt tracking
- Persists everything in your browser's `localStorage` — no backend, no login, no
  server required. Everything works by opening `index.html` (or serving the folder
  with any static file server).

## Folder structure

```
cloud-engineering-rpg/
├── index.html            Entry point — open this in a browser
├── styles.css             All styling
├── data/
│   └── roadmap-data.js    Curriculum data, extracted from ROADMAP-2.md (generated — don't hand-edit)
├── js/
│   ├── storage.js          localStorage read/write, import/export, validation
│   ├── state.js            User-progress schema, defaults, load/merge on boot
│   ├── xp.js                XP ledger, dedupe, level calculation
│   ├── mastery.js           6-level concept mastery state machine
│   ├── streaks.js           Real date-based streak tracking
│   ├── revision.js          Revision queue (weak/stale concepts)
│   ├── quests.js            Quest completion, unlocks, boss/project unlock logic, "Next Action"
│   ├── achievements.js      Achievement trigger conditions
│   ├── ui.js                Router, sidebar nav, modal, toasts, XP popups, search
│   ├── dashboard.js         Home screen
│   ├── views-roadmap.js     Roadmap browser + quest detail
│   ├── views-concept.js     Concept detail screen
│   ├── views-game.js        Skill tree, boss battles, project portfolio
│   ├── views-tracking.js    Achievements, certifications, revision queue
│   ├── views-tracking2.js   Analytics, logs, job hunt
│   ├── views-daily-settings.js  Daily quest, weekly mission, settings
│   └── app.js                Bootstraps everything, wires all click/change events
├── tools/
│   └── regenerate_data.py  Re-extracts data/roadmap-data.js from an edited ROADMAP-2.md
└── assets/                 (empty — for any images you add later)
```

## How to run it

Just open `index.html` in a browser. No build step, no install, no server needed.

If your browser blocks local file access for some features, serve the folder instead:

```
python3 -m http.server 8080
```

then visit `http://localhost:8080`.

## How progress is stored

Everything is saved to `localStorage` under the key `cerpg_progress_v1` — your XP,
concept mastery, quest/boss/project/certification status, streaks, logs, job
applications, and settings. It persists across browser restarts on the same
browser/device. It does **not** sync between devices — use Export/Import (below)
to move it.

## Export / import (backup, or moving between computers)

**Settings → Export Progress** downloads a timestamped JSON snapshot of everything.
**Settings → Import Progress** loads a previously exported file back in (this
replaces your current progress, with a confirmation prompt first). Keep periodic
backups — clearing your browser's site data will erase local progress with no
warning.

## Where curriculum data lives, and how to update it

All curriculum content — quests, concepts, resources, XP values, levels, bosses,
achievements, certifications, projects — lives in `data/roadmap-data.js`, which is
generated from `ROADMAP-2.md` by `tools/regenerate_data.py`. It is **not** hand-edited.

If you update your roadmap (add a quest, tweak a resource link, adjust XP), regenerate
the data file instead of editing it directly:

```
python3 tools/regenerate_data.py /path/to/your/ROADMAP-2.md
```

This overwrites `data/roadmap-data.js` from the current markdown. It's deterministic —
running it twice on the same file produces byte-identical output. Your saved
*progress* (in `localStorage`) is separate from curriculum data and is unaffected by
regenerating it; new items you added to the roadmap will show up with default
(untouched) progress the next time you open the app.

## How the XP system works

XP values are the roadmap's own, unchanged:

| Activity | XP |
|---|---:|
| Concept Exposure | +5 |
| Concept Understanding | +10 |
| Hands-on Lab | +25 |
| Troubleshooting Challenge | +30 |
| Interview Checkpoint (answered cold) | +25 |
| Mini Project | +100 |
| Major Project | +250 |
| Phase Boss defeated | +150 |
| Certification passed | +500 |
| Interview Milestone | +100 |
| Job Offer | +1000 |

Every XP award goes through a single function (`XP.award`) with a dedupe key, so the
same action can never award XP twice — clicking an already-completed button is a
no-op. All awards are recorded in an auto-generated XP ledger (visible in your
exported JSON) that your total XP and current level are computed from.

**Mastered is never just a button click.** A concept can only be marked Mastered
after Exposure, Understanding, Hands-on, Troubleshooting, and Interview Ready are
all done, **and** you've recorded at least one piece of evidence (a GitHub URL, lab
evidence, a screenshot link, or notes) — mirroring the roadmap's own Completion Rule.

## How the unlock system works

- **Quests** unlock in sequence: quest *N+1* becomes active once quest *N* is
  complete (every concept reaches at least Understanding, plus the quest's lab,
  troubleshooting, and interview checkpoint boxes are ticked).
- **Phase bosses** unlock once every quest in that boss's phase is complete.
- **Projects** use a best-effort match against their stated prerequisites (e.g.
  "Sessions 1-4", "Phase 2") to suggest when they become realistic to start — you can
  always override a project's status manually.
- **Achievements** check their exact roadmap-stated condition (e.g. "Complete
  Sessions 1-2" or "Submit your first serious job application") every time relevant
  state changes, and award their XP once.

## Known limitations (v1)

- The skill tree's status per node is inferred from a simple keyword match against
  concept names — it's a helpful approximation, not a hand-authored mapping.
- Project prerequisite auto-detection is best-effort text parsing of the roadmap's
  "Sessions X-Y" / "Phase N" phrasing — override the status dropdown if it's wrong
  for your case.
- This is a single-user, single-browser tool. There's no account system and no
  cloud sync; use Export/Import to move or back up your progress.
