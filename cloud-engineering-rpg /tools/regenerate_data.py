import re, json, sys, os

# Usage: python3 tools/regenerate_data.py /path/to/ROADMAP-2.md
# Run from the project root (the folder containing index.html).
# Regenerates data/roadmap-data.js from the current roadmap markdown.
if len(sys.argv) < 2:
    print('Usage: python3 tools/regenerate_data.py /path/to/ROADMAP-2.md')
    sys.exit(1)

roadmap_path = sys.argv[1]
script_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(script_dir)

with open(roadmap_path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')

def strip_md_link(s):
    return s.strip()

SEP_ROW = re.compile(r'^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$')

def parse_md_table(block_text):
    """Split a markdown table into rows of cells, line-by-line (never crosses newlines),
    skipping the header separator row (e.g. |---|---:|---|)."""
    rows = []
    for line in block_text.split('\n'):
        line = line.strip()
        if not line.startswith('|'):
            continue
        if SEP_ROW.match(line):
            continue
        cells = [c.strip() for c in line.strip('|').split('|')]
        rows.append(cells)
    return rows

# ---------- Levels ----------
levels = []
level_pat = re.compile(r'^### Level (\d+) — (.+)$')
i = 0
n = len(lines)
while i < n:
    m = level_pat.match(lines[i])
    if m:
        num = int(m.group(1))
        rank = m.group(2).strip()
        block = []
        j = i+1
        while j < n and not lines[j].startswith('### Level') and not lines[j].startswith('## '):
            block.append(lines[j])
            j += 1
        blocktext = '\n'.join(block)
        def field(label):
            mm = re.search(r'\*\*' + re.escape(label) + r':\*\*\s*(.+)', blocktext)
            return mm.group(1).strip() if mm else ''
        xp_req = field('XP required')
        skills = field('Skills unlocked')
        capability = field('Typical capability')
        milestone = field('Major milestone')
        levels.append({
            'level': num,
            'rank': rank,
            'xpRequired': int(re.sub(r'[^\d]', '', xp_req)) if xp_req else 0,
            'skillsUnlocked': [s.strip() for s in skills.split(',')] if skills else [],
            'typicalCapability': capability,
            'majorMilestone': milestone
        })
        i = j
    else:
        i += 1

# ---------- XP System table ----------
xp_table = []
xp_section = re.search(r'## ⭐ XP System\n(.*?)\n### 📒 XP Ledger', text, re.S)
if xp_section:
    for cells in parse_md_table(xp_section.group(1)):
        if len(cells) < 2 or cells[0].lower() == 'activity':
            continue
        m = re.search(r'[+\-]?\d+', cells[1])
        if m:
            xp_table.append({'activity': cells[0], 'xp': int(m.group(0))})

# ---------- Mastery levels ----------
mastery_levels = []
mastery_section = re.search(r'## 🧠 Concept Mastery System\n(.*?)\nStatus shorthand', text, re.S)
if mastery_section:
    for cells in parse_md_table(mastery_section.group(1)):
        if len(cells) < 3 or not cells[0].isdigit():
            continue
        mastery_levels.append({'level': int(cells[0]), 'name': cells[1], 'definition': cells[2]})

# ---------- Phases & Quests ----------
phase_pat = re.compile(r'^## Phase (\d+) — (.+)$')
quest_pat = re.compile(r'^### ⚔️ QUEST (\d+) — (.+)$')
interview_pat = re.compile(r'^### 🎤 (.+ Interview Checkpoint)$')

phases = []
quests = []
interview_checkpoints = []
current_phase = None

i = 0
while i < n:
    line = lines[i]
    pm = phase_pat.match(line)
    qm = quest_pat.match(line)
    im = interview_pat.match(line)
    if pm:
        current_phase = {'id': int(pm.group(1)), 'name': pm.group(2).strip(), 'questIds': []}
        phases.append(current_phase)
        i += 1
        continue
    if line.startswith('## 💀 Boss Battles'):
        break
    if qm:
        qnum = int(qm.group(1))
        qname = qm.group(2).strip()
        # gather block until next quest/interview/phase header at same or higher level
        j = i + 1
        block = []
        while j < n:
            if quest_pat.match(lines[j]) or interview_pat.match(lines[j]) or phase_pat.match(lines[j]) or lines[j].startswith('## 💀'):
                break
            block.append(lines[j])
            j += 1
        blocktext = '\n'.join(block)

        def field(label):
            mm = re.search(r'\*\*' + re.escape(label) + r':\*\*\s*(.+)', blocktext)
            return mm.group(1).strip() if mm else ''

        difficulty = field('Difficulty')
        xp_avail = field('XP Available')
        boss = field('Phase Boss')

        # prerequisites
        prereq_m = re.search(r'\*\*Prerequisites\*\*\n\n(.*?)\n\n', blocktext, re.S)
        prereqs = []
        if prereq_m:
            prereqs = [re.sub(r'^-\s*', '', l).strip() for l in prereq_m.group(1).split('\n') if l.strip()]

        unlocks_m = re.search(r'\*\*Unlocks\*\*\n\n(.*?)\n\n', blocktext, re.S)
        unlocks = []
        if unlocks_m:
            unlocks = [re.sub(r'^-\s*', '', l).strip() for l in unlocks_m.group(1).split('\n') if l.strip()]

        # concepts: pattern "- [ ] **Name** — 🔒 Locked" followed by <details> block with resource ID
        concepts = []
        concept_pat = re.compile(r'^- \[ \] \*\*(.+?)\*\* — .+$')
        k = 0
        cblock_lines = block
        while k < len(cblock_lines):
            cm = concept_pat.match(cblock_lines[k])
            if cm:
                cname = cm.group(1).strip()
                # find details block right after
                detail_text = ''
                m2 = k+1
                while m2 < len(cblock_lines) and cblock_lines[m2].strip() != '</details>':
                    detail_text += cblock_lines[m2] + '\n'
                    m2 += 1
                idmatch = re.search(r'Open Resources — ([A-Z0-9\-]+)', detail_text)
                cid = idmatch.group(1) if idmatch else f'C{len(concepts)+1}'
                def res(label):
                    rm = re.search(re.escape(label) + r':\s*(.+)', detail_text)
                    return rm.group(1).strip() if rm else ''
                concepts.append({
                    'id': cid,
                    'name': cname,
                    'resources': {
                        'primary': res('📺 Primary'),
                        'alternative': res('🎥 Alternative'),
                        'official': res('📖 Official'),
                        'deepDive': res('📚 Deep Dive'),
                        'lab': res('🧪 Lab'),
                        'interview': res('🎯 Interview'),
                    }
                })
                k = m2
            k += 1

        # completion requirements
        creq_m = re.search(r'\*\*Completion Requirements\*\*\n\n(.*?)\n\n\*\*Rewards\*\*', blocktext, re.S)
        completion_requirements = []
        if creq_m:
            completion_requirements = [re.sub(r'^- \[ \]\s*', '', l).strip() for l in creq_m.group(1).split('\n') if l.strip()]

        rewards_m = re.search(r'\*\*Rewards\*\*\n\n(.*?)(?:\n---|\Z)', blocktext, re.S)
        rewards = []
        if rewards_m:
            rewards = [re.sub(r'^-\s*', '', l).strip() for l in rewards_m.group(1).split('\n') if l.strip()]

        quest = {
            'id': f'quest-{qnum:02d}',
            'number': qnum,
            'name': qname,
            'difficulty': difficulty,
            'xpAvailable': int(re.sub(r'[^\d]', '', xp_avail)) if xp_avail else 0,
            'phaseId': current_phase['id'] if current_phase else None,
            'phaseName': current_phase['name'] if current_phase else '',
            'bossName': boss,
            'prerequisites': prereqs,
            'unlocks': unlocks,
            'concepts': concepts,
            'completionRequirements': completion_requirements,
            'rewards': rewards,
        }
        quests.append(quest)
        if current_phase:
            current_phase['questIds'].append(quest['id'])
        i = j
        continue
    if im:
        name = im.group(1).strip()
        j = i + 1
        qs = []
        while j < n and not (quest_pat.match(lines[j]) or interview_pat.match(lines[j]) or phase_pat.match(lines[j]) or lines[j].startswith('## ')):
            if lines[j].startswith('- [ ]'):
                qs.append(re.sub(r'^- \[ \]\s*', '', lines[j]).strip())
            j += 1
        interview_checkpoints.append({'name': name, 'questions': qs})
        i = j
        continue
    i += 1

# ---------- Boss Battles ----------
bosses = []
boss_section_m = re.search(r'## 💀 Boss Battles\n(.*?)\n## 🏆 Achievements', text, re.S)
if boss_section_m:
    boss_blocks = re.split(r'\n### ', boss_section_m.group(1))
    for b in boss_blocks:
        b = b.strip()
        if not b or b.startswith('One realistic'):
            continue
        title_m = re.match(r'(.+)', b)
        title = title_m.group(1).strip()
        def bfield(label, txt):
            mm = re.search(r'\*\*' + re.escape(label) + r':\*\*\s*(.+)', txt)
            return mm.group(1).strip() if mm else ''
        scenario = bfield('Scenario', b)
        environment = bfield('Environment', b)
        symptoms_m = re.search(r'\*\*Symptoms:\*\*\n((?:- .+\n?)+)', b)
        symptoms = [l[2:].strip() for l in symptoms_m.group(1).split('\n') if l.strip()] if symptoms_m else []
        req_m = re.search(r'\*\*Requirements to clear the boss:\*\*\n((?:- .+\n?)+)', b)
        requirements = [l[2:].strip() for l in req_m.group(1).split('\n') if l.strip()] if req_m else []
        skills_tested = bfield('Skills tested', b)
        evidence = bfield('Evidence to submit', b)
        xp_reward = bfield('XP Reward', b)
        status = bfield('Status', b)
        phase_match = re.search(r'— Phase (\d+)', title)
        bosses.append({
            'name': re.sub(r' — Phase \d+', '', title).strip(),
            'title': title,
            'phase': int(phase_match.group(1)) if phase_match else None,
            'scenario': scenario,
            'environment': environment,
            'symptoms': symptoms,
            'requirements': requirements,
            'skillsTested': skills_tested,
            'evidence': evidence,
            'xpReward': int(re.sub(r'[^\d]', '', xp_reward)) if xp_reward else 0,
        })

# ---------- Achievements ----------
achievements = []
ach_section_m = re.search(r'## 🏆 Achievements\n\n(.*?)\n\n---', text, re.S)
if ach_section_m:
    for cells in parse_md_table(ach_section_m.group(1)):
        if len(cells) < 3 or cells[0].lower() == 'achievement':
            continue
        m = re.search(r'[+\-]?\d+', cells[2])
        if not m:
            continue
        achievements.append({'name': cells[0], 'requirement': cells[1], 'xp': int(m.group(0))})

# ---------- Certifications ----------
certifications = []
cert_section_m = re.search(r'## 📜 Certification Roadmap\n(.*?)\n> \*\*Principle', text, re.S)
if cert_section_m:
    cert_blocks = re.split(r'\n### ', cert_section_m.group(1))
    for cb in cert_blocks:
        cb = cb.strip()
        if not cb:
            continue
        title = cb.split('\n')[0].strip()
        def cfield(label):
            mm = re.search(r'\*\*' + re.escape(label) + r'\*\*\s*\|\s*(.+?)\s*\|', cb)
            return mm.group(1).strip() if mm else ''
        stage = cfield('Stage')
        xp_pass = cfield('XP on pass')
        position = cfield('Recommended roadmap position')
        url_m = re.search(r'\*\*Official info\*\*\s*\|\s*\[.+?\]\((.+?)\)', cb)
        url = url_m.group(1) if url_m else ''
        certifications.append({
            'name': title,
            'stage': stage,
            'xpOnPass': int(re.sub(r'[^\d]', '', xp_pass)) if xp_pass else 0,
            'recommendedPosition': position,
            'officialUrl': url,
        })

# ---------- Project Portfolio ----------
projects = []
proj_section_m = re.search(r'## 🏗️ Project Portfolio\n\n(.*?)\n\n### ', text, re.S)
proj_detail_section = re.search(r'## 🏗️ Project Portfolio\n(.*?)\n## 🔗 Resource Index', text, re.S)
if proj_detail_section:
    blocks = re.split(r'\n### ', proj_detail_section.group(1))
    for pb in blocks:
        pb = pb.strip()
        if not pb or pb.startswith('| Project'):
            continue
        lines_pb = pb.split('\n')
        title = lines_pb[0].strip()
        def pfield(label):
            mm = re.search(r'\*\*' + re.escape(label) + r':\*\*\s*(.*)', pb)
            return mm.group(1).strip() if mm else ''
        tier = pfield('Difficulty tier')
        xp = pfield('XP')
        prereq = pfield('Prerequisites')
        skills = pfield('Skills unlocked')
        objectives = pfield('Objectives')
        projects.append({
            'name': title,
            'tier': tier,
            'xp': int(re.sub(r'[^\d]', '', xp)) if xp else 0,
            'prerequisites': prereq,
            'skillsUnlocked': skills,
            'objectives': objectives,
        })

# ---------- Reference Library ----------
reference_library = []
ref_section_m = re.search(r'## 📖 Reference Library\n\n(.*?)\n\n---', text, re.S)
if ref_section_m:
    for cells in parse_md_table(ref_section_m.group(1)):
        if len(cells) < 3 or not re.match(r'^Phase \d+$', cells[0]):
            continue
        reference_library.append({'phase': cells[0], 'area': cells[1], 'reference': cells[2]})

# ---------- Final boss capstone ----------
final_boss_section_m = re.search(r'## 🏁 Final Boss — Production Cloud Capstone\n(.*?)\n## 🏆 Dream-Job Readiness', text, re.S)
final_boss = {}
if final_boss_section_m:
    fb_text = final_boss_section_m.group(1)
    def extract_list(header):
        mm = re.search(r'### ' + re.escape(header) + r'\n\n((?:- .+\n?)+)', fb_text)
        if not mm:
            return []
        out = []
        for l in mm.group(1).split('\n'):
            l = l.strip()
            if not l:
                continue
            l = re.sub(r'^- (\[ \] )?', '', l)
            out.append(l)
        return out
    final_boss = {
        'requirements': extract_list('Requirements'),
        'constraints': extract_list('Constraints'),
        'threatModel': extract_list('Threat Model'),
        'costConsiderations': extract_list('Cost Considerations'),
        'monitoring': extract_list('Monitoring'),
        'failureScenarios': extract_list('Failure Scenarios to Demonstrate'),
        'deploymentProcess': extract_list('Deployment Process / Rollback / Disaster Recovery'),
        'documentationRequirements': extract_list('Documentation Requirements'),
        'interviewQuestions': extract_list('Interview Questions'),
    }

# ---------- Skill tree (parse ascii block) ----------
skill_tree_branches = [
    {'name': 'Systems', 'skills': ['Linux CLI', 'Filesystem', 'Permissions', 'Processes', 'systemd']},
    {'name': 'Scripting', 'skills': ['Bash', 'Loops', 'Traps', 'Git/GitHub']},
    {'name': 'Network', 'skills': ['OSI/TCP', 'DNS', 'NAT', 'Subnetting']},
    {'name': 'Automation', 'skills': ['Python', 'Boto3', 'REST/JSON', 'CLI tools']},
    {'name': 'Cloud (AWS)', 'skills': ['Regions/AZs', 'IAM', 'VPC/Subnets', 'EC2', 'S3/RDS', 'Lambda/CFN']},
]
skill_tree_trunk = [
    {'name': 'Containers & CI/CD', 'skills': ['Docker', 'Jenkins', 'GitHub Actions', 'SonarQube']},
    {'name': 'Infrastructure as Code', 'skills': ['Terraform', 'Ansible']},
    {'name': 'Kubernetes', 'skills': ['Core K8s', 'EKS', 'GitOps (ArgoCD)']},
    {'name': 'Observability', 'skills': ['CloudWatch', 'Prometheus', 'Grafana']},
    {'name': 'Architecture', 'skills': ['Well-Architected', 'HA/DR', 'Cost Optimization']},
]

link_pat = re.compile(r'\[(.*?)\]\((https?://[^\s)]+)\)')

def clean_resource(raw):
    if not raw:
        return {'label': '', 'url': ''}
    m = link_pat.search(raw)
    if m:
        label = m.group(1).strip()
        url = m.group(2).strip()
        return {'label': label, 'url': url}
    return {'label': raw.strip(), 'url': ''}

any_link_pat = re.compile(r'\[(.*?)\]\([^)]*\)')

def strip_links_to_text(s):
    # Replace [label](url) with just label for plain-text display fields
    return any_link_pat.sub(lambda m: m.group(1), s) if s else s

for q in quests:
    for c in q['concepts']:
        for k, v in list(c['resources'].items()):
            if k == 'interview':
                c['resources'][k] = {'label': strip_links_to_text(v), 'url': ''}
            else:
                c['resources'][k] = clean_resource(v)
    q['prerequisites'] = [strip_links_to_text(p) for p in q['prerequisites']]
    q['unlocks'] = [strip_links_to_text(u) for u in q['unlocks']]
    q['rewards'] = [strip_links_to_text(r) for r in q['rewards']]

for c in certifications:
    pass  # already clean

for p in projects:
    pass

data = {
    'levels': levels,
    'xpTable': xp_table,
    'masteryLevels': mastery_levels,
    'phases': phases,
    'quests': quests,
    'interviewCheckpoints': interview_checkpoints,
    'bosses': bosses,
    'achievements': achievements,
    'certifications': certifications,
    'projects': projects,
    'referenceLibrary': reference_library,
    'finalBoss': final_boss,
    'skillTreeBranches': skill_tree_branches,
    'skillTreeTrunk': skill_tree_trunk,
}

out_path = os.path.join(project_root, 'data', 'roadmap-data.js')
with open(out_path, 'w', encoding='utf-8') as f:
    f.write('// AUTO-EXTRACTED FROM ' + os.path.basename(roadmap_path) + ' — do not hand-edit; rerun this script instead.\n')
    f.write('window.ROADMAP_DATA = ')
    json.dump(data, f, indent=1, ensure_ascii=False)
    f.write(';\n')
print('Wrote', out_path)

# ---------- Report ----------
total_concepts = sum(len(q['concepts']) for q in quests)
print('Levels:', len(levels))
print('XP table rows:', len(xp_table))
print('Mastery levels:', len(mastery_levels))
print('Phases:', len(phases))
print('Quests:', len(quests))
print('Total concepts parsed:', total_concepts)
print('Interview checkpoints:', len(interview_checkpoints))
print('Bosses:', len(bosses))
print('Achievements:', len(achievements))
print('Certifications:', len(certifications))
print('Projects:', len(projects))
print('Reference library rows:', len(reference_library))
