window.IAN_FAQ = (function () {
  const extra = {
    who: {
      lines: [
        "Ian Relecker. Systems administrator in Los Angeles.",
        "I keep endpoint fleets honest and build the tools I wish existed."
      ]
    },
    name: {
      lines: [
        "Ian Relecker. That's the whole name — no middle one on the site."
      ]
    },
    location: {
      lines: [
        "Los Angeles. The day job is out of Studio City. Pacific time."
      ]
    },
    title: {
      lines: [
        "Systems administrator. Endpoint fleets, security operations, and the unglamorous glue.",
        "The tagline I actually use is computer person."
      ]
    },
    employer: {
      lines: [
        "KSP Systems, since February 2024. Studio City.",
        "It's MSP work — roughly twenty client environments, not one internal fleet."
      ]
    },
    clients: {
      lines: [
        "Roughly twenty client fleets. Windows and macOS. Each one arrives with its own history.",
        "The work is making all of that behave the same way."
      ],
      link: { href: "/systems", text: "The long answer" }
    },
    geek: {
      lines: [
        "Geek Squad, Advanced Repair Agent, Woodland Hills. October 2020 to October 2022.",
        "Hardware and OS-level diagnosis at volume, Windows and macOS. That's where the repair instinct comes from."
      ]
    },
    education: {
      lines: [
        "Both degrees are from California Lutheran University.",
        "B.S. Computer Science in December 2022. M.S. Information Technology — cybersecurity concentration — in August 2024. GPA 3.8 on the master's."
      ],
      link: { href: "/resume", text: "Read the resume" }
    },
    certs: {
      lines: [
        "Azure Solutions Architect Expert (AZ-305), Azure Administrator Associate (AZ-104), CompTIA Security+ CE."
      ],
      link: { href: "/resume", text: "Read the resume" }
    },
    email: {
      lines: [
        "ianrelecker@gmail.com. That's the front door."
      ]
    },
    phone: {
      lines: [
        "No phone number on the site. Email is ianrelecker@gmail.com. Signal is @relecker.01 if you want something more careful."
      ]
    },
    signal: {
      lines: [
        "Signal is @relecker.01."
      ]
    },
    pgp: {
      lines: [
        "Yes. Keys are on the site. Use them if the conversation should stay that way."
      ],
      link: { href: "/pgpkeys", text: "PGP keys" }
    },
    github: {
      lines: [
        "github.com/ianrelecker — Graph MCP, multi-cloud Terraform, Kubernetes delivery, and the other tools I needed enough to write."
      ]
    },
    linkedin: {
      lines: [
        "linkedin.com/in/ian-relecker — the professional version. This site is the one I actually wrote."
      ]
    },
    twitter: {
      lines: [
        "X is @ianrelecker."
      ]
    },
    resume: {
      lines: [
        "relecker.com/resume — HTML. There's a PDF too if you need to forward something."
      ],
      link: { href: "/resume", text: "Read the resume" }
    },
    rate: {
      lines: [
        "Not something I publish. Email me if it's a real conversation."
      ]
    },
    remote: {
      lines: [
        "I'm in Los Angeles. The day job is Studio City.",
        "If you're asking about an arrangement, that's an email, not a chatbot."
      ]
    },
    bot: {
      lines: [
        "The answers I wrote are mine. Free text is matched to them here in the page.",
        "There isn't a model behind this conversation. The real me is ianrelecker@gmail.com."
      ]
    },
    helpdesk: {
      lines: [
        "This isn't a helpdesk. I did that stretch at Geek Squad — I'm not taking your laptop over the internet.",
        "If it's a fleet, a tenant, or an endpoint program, email me."
      ]
    },
    likejob: {
      lines: [
        "Yes. Endpoint work is unfashionable, which is part of why I like it.",
        "It's the layer where security stops being a diagram and becomes whether a specific laptop in a specific bag is encrypted, patched, and checking in."
      ]
    },
    stress: {
      lines: [
        "The quiet days are the job. The loud days are why you wrote the runbook on a quiet one.",
        "I don't romanticize being on fire. I romanticize having already decided what I'd do."
      ]
    },
    oncall: {
      lines: [
        "MSP life isn't a clean on-call rotation with a pager that never goes off. When EDR escalates, you pick up.",
        "The trick is not living there. Baselines and automation so 2 a.m. is rare."
      ]
    },
    proud: {
      lines: [
        "The DLP rollout that didn't detonate. The lab script that replaced walking to every bench.",
        "And the incidents that ended in a runbook instead of a war story."
      ]
    },
    advice: {
      lines: [
        "Make the secure path the easy path. If people have to be heroes to do the right thing, they won't.",
        "Write it down. Future-you is a coworker who wasn't in the room."
      ]
    },
    student: {
      lines: [
        "Learn the boring layer — identity, endpoints, what a log actually says. The certifications help. The repair instinct helps more.",
        "Build something small that you can show. Email me if you want eyes on it."
      ]
    },
    collab: {
      lines: [
        "If it's a fleet, a tenant, a local-model problem, or something that should stay on-device — email ianrelecker@gmail.com.",
        "If it's 'can you fix my laptop this weekend,' that's a no."
      ]
    },
    hours: {
      lines: [
        "Pacific time. The day job is Studio City hours, plus whenever an endpoint gets weird.",
        "Email anytime. I don't live in Slack."
      ]
    },
    favorite: {
      lines: [
        "Turning twenty slightly-different environments into one boringly reliable system. The moment a re-run is safe because detection is idempotent.",
        "Also: a local model that actually does the work without the data leaving the building."
      ]
    },
    unglamorous: {
      lines: [
        "Packaging. Drift. The Mac that won't forget Platform SSO. The file share nobody classified. The browser add-in finance cannot live without.",
        "That's most of the job, and it's the part that keeps the loud days rare."
      ]
    },
    weather: {
      lines: [
        "Los Angeles. If it's raining I notice. Most days I don't."
      ]
    },
    coffee: {
      lines: [
        "Yes. Then the fleets."
      ]
    },
    browsing: {
      lines: [
        "Poke around. Ask about the fleets, the AI setup, or a bad day. Or pick a chip."
      ]
    },
    recruiter: {
      lines: [
        "Resume is at relecker.com/resume. Email is ianrelecker@gmail.com. That's the whole funnel."
      ],
      link: { href: "/resume", text: "Read the resume" }
    },
    whattoask: {
      lines: [
        "Ask about a bad day, how twenty fleets don't catch fire, or the local AI setup. Those are the true ones."
      ]
    },
    mspwhat: {
      lines: [
        "Managed service provider. We run IT for other companies so they don't have to staff the whole stack.",
        "My slice is endpoints and the security around them — roughly twenty of those companies."
      ]
    },
    team: {
      lines: [
        "KSP is a real shop, not a one-man band. I own the endpoint and security slice across those fleets.",
        "The interesting coordination is with whoever owns identity, the firewall, and the thing the user actually wanted to do."
      ]
    },
    commute: {
      lines: [
        "Los Angeles. Studio City for the day job. That's as specific as the site gets."
      ]
    },
    english: {
      lines: [
        "Plain English: I keep a bunch of companies' laptops and Macs patched, encrypted, and enrolled, and I show up when one of them gets attacked."
      ]
    },
    private: {
      lines: [
        "That's not on the site. Email me if it actually matters."
      ]
    },
    why: {
      lines: [
        "Endpoint work is unfashionable. It's also the layer where security stops being a diagram and becomes whether a specific laptop in a specific person's bag is encrypted, patched, and reporting in.",
        "Twenty fleets teaches you that reliability is mostly the absence of exceptions."
      ],
      link: { href: "/systems", text: "The long answer" }
    },
    runbook: {
      lines: [
        "Every environment change gets a runbook. Not for the auditor. For the version of me who has to touch this in eight months, or for whoever inherits it."
      ]
    },
    socca: {
      lines: [
        "socca.tech — a Python and Docker pipeline that ingests newly published CVEs, writes up risk and MITRE/CWE mapping, and feeds Microsoft Sentinel.",
        "It's the kind of thing I built because waiting on someone else's intel feed was slower than writing it."
      ]
    },
    m365mcp: {
      lines: [
        "m365mcp is an open-source Microsoft Graph integration server. Tenant data as something you can query, not a screenshot of a portal."
      ]
    },
    terraformProj: {
      lines: [
        "cloudterraform — a multi-cloud Terraform template library. exo-arcocd — Kubernetes workload delivery through ArgoCD. Both public on GitHub."
      ]
    },
    fieldmarkFree: {
      lines: [
        "FieldMark is free. Photograph, mark up, PDF. No account, no FieldMark backend, no telemetry."
      ],
      link: { href: "/fieldmark/", text: "Look at FieldMark" }
    },
    physical: {
      lines: [
        "Yes. Rack-and-stack, structured cabling, MDF/IDF closet buildout, UPS, multi-site hardware refresh, component-level repair.",
        "The Geek Squad years were the repair school. City of Malibu was the closet-and-closet-again years."
      ]
    },
    linux: {
      lines: [
        "Enough to be dangerous and occasionally useful. At Malibu I configured Linux-based QLess display boards across city facilities.",
        "The day job is mostly Windows and macOS estates. Linux shows up where it shows up."
      ]
    },
    skill: {
      lines: [
        "Yes. That's in the day job.",
        "Intune, Jamf, Autopilot, Group Policy, Atera, BitLocker, Entra, Azure, Microsoft 365, Huntress, Defender, PowerShell, Graph, Python, Terraform, Docker, Kubernetes — the resume has the rest."
      ],
      link: { href: "/resume", text: "Read the resume" }
    },
    intune: {
      lines: [
        "Yes. Device configuration, compliance, app configuration and app protection, Autopilot, Windows Update rings. It's the default control plane for the Windows side of those twenty fleets."
      ]
    },
    jamf: {
      lines: [
        "Yes. macOS endpoints go through Jamf and Intune, depending on the environment. Same intent, different delivery."
      ]
    },
    azure: {
      lines: [
        "Yes. Azure Solutions Architect Expert, Azure Administrator Associate. Identity, Intune, Migrate, NSGs — cloud is where a lot of the estates actually live now."
      ]
    },
    entra: {
      lines: [
        "Yes. Entra ID, Conditional Access, hybrid and Entra join. A lot of the messy environments are half-joined on purpose and half-joined by accident."
      ]
    },
    powershell: {
      lines: [
        "Yes. That's the lever — SYSTEM-context deployment, remediation, inventory, pushed through RMM. If a technician would otherwise walk to two hundred machines, it becomes a script."
      ]
    },
    python: {
      lines: [
        "Yes. Open-source Python servers against Microsoft Graph for tenant reporting, plus the CVE pipeline and the other tools on GitHub."
      ]
    },
    compliance: {
      lines: [
        "Audits and remediation mapped to CMMC L2, HIPAA, PCI DSS, and ISO 27001, with DISA STIGs and NIST as the control baseline underneath.",
        "The frameworks differ in vocabulary more than in substance. The question is always: what is configured, how do you know, and can you show me."
      ],
      link: { href: "/systems", text: "The long answer" }
    },
    edr: {
      lines: [
        "Huntress and Microsoft Defender. When they escalate, a human has to decide. That's the job on the bad days."
      ]
    },
    meraki: {
      lines: [
        "Yes. Cisco Meraki, VLANs, IPsec, firewall and NSG administration. City of Malibu was a lot of that. It still shows up."
      ]
    },
    macos: {
      lines: [
        "Yes. Managed macOS through Intune and Jamf across those client fleets. Not a Mac-only shop — mixed estates."
      ]
    },
    windows: {
      lines: [
        "Yes. Windows 11, Windows Server 2016/2019/2022, Autopilot, GPO, BitLocker. That's most of the endpoint mass."
      ]
    },
    graph: {
      lines: [
        "Yes. Direct Microsoft Graph work, and an open-source MCP server so tenant data is queryable instead of screenshotted."
      ]
    },
    k8s: {
      lines: [
        "Kubernetes with ArgoCD is in the toolkit, and internals — schedulers, networking, policy as code — are on the learning roadmap. I don't pretend the cluster is a black box I never open."
      ]
    },
    when: {
      lines: [
        "Geek Squad 2020–2022. City of Malibu October 2022 to February 2024. KSP Systems February 2024 to now.",
        "B.S. December 2022, M.S. August 2024. Call it nearly six years in the work."
      ]
    },
    migrate: {
      lines: [
        "Yes. Production Windows workloads off on-prem Hyper-V onto Azure IaaS — including Active Directory services and a 1 TB file server.",
        "VNet, NSG rulesets, site-to-site VPN, cutover plan. Then the boring part: Recovery Services vault, Update Manager, VM sizing against disk throughput and quota."
      ]
    },
    browser: {
      lines: [
        "Scoping a fleet-wide browser migration across roughly 300 machines: profile and settings over, block the outgoing browser, stand up the replacement as a managed browser tied to Microsoft 365."
      ]
    },
    lab: {
      lines: [
        "An engineering test lab needed instrumentation on every workstation — vector network analyzer, RF power meter toolkits, motion control, label printing.",
        "PowerShell in SYSTEM context through RMM replaced the walk. Detection against Add/Remove inventory so a re-run is never a re-install."
      ]
    },
    years: {
      lines: [
        "Nearly six years. Geek Squad in 2020, city IT in Malibu, then KSP. The through-line is the same: make it boringly reliable, then automate what isn't."
      ]
    },
    watchdog: {
      lines: [
        "365watchdog — a Docker container that watches Microsoft 365 sign-in and audit logs for the ugly stuff and emails you. On GitHub."
      ]
    },
    mag: {
      lines: [
        "MAG is command-line management for Google Workspace. Some of the estates aren't all-Microsoft, and the portal doesn't scale."
      ]
    },
    powerbi: {
      lines: [
        "powerbimcp — a local MCP server for delegated Power BI dashboard access. Same idea as the Graph one: the model talks to the tenant without the tenant spilling everywhere."
      ]
    },
    siem: {
      lines: [
        "At Malibu I stood up citywide RMM and EDR and put configuration management and security auditing on top, including SIEM. The CVE pipeline later feeds Microsoft Sentinel."
      ]
    },
    githubMore: {
      lines: [
        "Thirty-plus public repos. The ones people ask about: m365mcp, powerbimcp, 365watchdog, cloudterraform, exo-arcocd, dioxideai, MAG, handy-pwsh-scripts, FreshdeskAI, adsec, tenetsec.",
        "github.com/ianrelecker."
      ]
    }
  };

  const keywords = {
    who: ['who are you', 'who is ian', 'who is this', 'introduce yourself', 'about you', 'about yourself'],
    name: ['your name', 'full name', 'called'],
    location: ['where do you live', 'where are you based', 'where are you located', 'what city', 'los angeles', 'la', 'studio city', 'timezone', 'time zone', 'pacific'],
    title: ['your title', 'job title', 'what are you', 'computer person'],
    employer: ['who do you work for', 'current employer', 'ksp', 'ksp systems', 'msp', 'company'],
    clients: ['how many clients', 'how many fleets', 'twenty fleets', '20 fleets', 'how many environments'],
    geek: ['geek squad', 'best buy', 'repair agent', 'woodland hills'],
    education: ['where did you go to school', 'cal lutheran', 'california lutheran', 'clu', 'gpa', 'masters', 'bachelor', 'graduat'],
    certs: ['certification', 'certified', 'az-305', 'az-104', 'az305', 'az104', 'security+', 'security plus', 'architect expert'],
    email: ['your email', 'email address', 'mail you'],
    phone: ['phone number', 'your phone', 'call you', 'whatsapp', 'cell'],
    signal: ['signal'],
    pgp: ['pgp', 'gpg', 'public key'],
    github: ['github', 'source code', 'repositories', 'repos'],
    linkedin: ['linkedin'],
    twitter: ['twitter', 'tweet', ' x.com', '@ianrelecker'],
    resume: ['resume', 'cv', 'curriculum'],
    rate: ['hourly rate', 'day rate', 'how much do you charge', 'your rate', 'salary', 'compensation', 'what do you make'],
    remote: ['remote', 'hybrid', 'on site', 'onsite', 'in office', 'relocate', 'relocation'],
    bot: ['are you a bot', 'are you ai', 'is this ai', 'real person', 'human', 'chatgpt'],
    helpdesk: ['fix my', 'help me with my pc', 'my laptop', 'my computer is', 'can you repair'],
    private: ['how old', 'your age', 'birthday', 'married', 'girlfriend', 'boyfriend', 'kids', 'children', 'religion', 'political'],
    why: ['why endpoints', 'why this work', 'why do you like', 'why sysadmin'],
    runbook: ['runbook', 'documentation', 'how do you document'],
    socca: ['socca', 'cve pipeline', 'sentinel', 'vulnerability intelligence'],
    m365mcp: ['m365mcp', 'graph mcp', 'mcp server'],
    terraformProj: ['cloudterraform', 'exo-arcocd', 'argocd', 'argo cd'],
    fieldmarkFree: ['free', 'price of fieldmark', 'cost of fieldmark', 'app store'],
    physical: ['rack', 'cabling', 'closet', 'hardware refresh', 'break fix', 'break-fix', 'hands on'],
    linux: ['linux', 'qless', 'ubuntu', 'debian'],
    intune: ['intune'],
    jamf: ['jamf'],
    azure: ['azure'],
    entra: ['entra', 'azure ad', 'active directory', 'conditional access'],
    powershell: ['powershell'],
    python: ['python'],
    compliance: ['cmmc', 'hipaa', 'pci', 'iso 27001', 'nist', 'stig', 'cis benchmark', 'compliance'],
    edr: ['huntress', 'defender', 'edr', 'sentinelone', 'crowdstrike'],
    meraki: ['meraki', 'cisco', 'vlan', 'firewall'],
    macos: ['macos', 'mac os', 'mac fleet', 'apple'],
    windows: ['windows 11', 'windows server', 'autopilot', 'bitlocker', 'gpo', 'group policy'],
    graph: ['microsoft graph', 'graph api'],
    k8s: ['kubernetes', 'k8s', 'container'],
    when: ['when did you', 'how long have you', 'start date', 'since when'],
    migrate: ['azure migrate', 'lift and shift', 'hyper-v to azure', 'file server', 'site-to-site', 'iaas'],
    browser: ['browser migration', 'chrome', 'edge', 'managed browser'],
    lab: ['test lab', 'vector network', 'rf power', 'motion control'],
    years: ['years of experience', 'how many years', 'how long have you been in it'],
    watchdog: ['365watchdog', 'watchdog', 'sign-in logs', 'audit logs'],
    mag: ['google workspace', 'gws', 'gam '],
    powerbi: ['power bi', 'powerbi'],
    siem: ['siem', 'sentinel'],
    githubMore: ['how many repos', 'public repos', 'open source work'],
    likejob: ['like your job', 'enjoy your job', 'do you like it', 'fun job'],
    stress: ['stressful', 'burnout', 'overwhelming', 'hard days'],
    oncall: ['on call', 'oncall', 'pager', 'after hours', '2am', '2 a.m'],
    proud: ['proud of', 'biggest win', 'best work', 'accomplishment'],
    advice: ['advice', 'tips', 'what would you tell', 'lesson'],
    student: ['i am a student', 'i\'m a student', 'breaking into it', 'entry level', 'career advice'],
    collab: ['work together', 'collaborate', 'freelance', 'consult', 'side gig'],
    hours: ['what hours', 'timezone', 'when do you work', 'pacific'],
    favorite: ['favorite part', 'favourite part', 'best part', 'what do you enjoy'],
    unglamorous: ['boring part', 'worst part', 'hate about', 'unglamorous'],
    weather: ['weather', 'raining', 'hot out'],
    coffee: ['coffee', 'caffeine', 'tea'],
    browsing: ['just looking', 'just browsing', 'checking you out', 'poking around'],
    recruiter: ['i am a recruiter', 'i\'m a recruiter', 'recruiter here', 'talent partner'],
    whattoask: ['what should i ask', 'what can i ask', 'ask you'],
    mspwhat: ['what is an msp', 'what\'s an msp', 'msp mean'],
    team: ['your team', 'how big is the team', 'coworkers'],
    commute: ['commute', 'drive in', 'office'],
    english: ['plain english', 'eli5', 'explain like', 'simple terms']
  };

  const followUps = {
    who: ['days', 'background', 'contact'],
    name: ['who', 'contact', 'location'],
    location: ['remote', 'employer', 'contact'],
    title: ['days', 'employer', 'hire'],
    employer: ['clients', 'days', 'hire'],
    clients: ['rollout', 'days', 'why'],
    geek: ['malibu', 'physical', 'background'],
    education: ['certs', 'background', 'hire'],
    certs: ['azure', 'education', 'stack'],
    email: ['signal', 'pgp', 'contact'],
    phone: ['email', 'signal', 'contact'],
    signal: ['pgp', 'email', 'contact'],
    pgp: ['signal', 'email', 'contact'],
    github: ['work', 'm365mcp', 'terraformProj'],
    linkedin: ['resume', 'contact', 'github'],
    twitter: ['contact', 'github', 'who'],
    resume: ['hire', 'stack', 'contact'],
    rate: ['contact', 'hire', 'days'],
    remote: ['location', 'contact', 'hire'],
    bot: ['who', 'contact', 'hot'],
    helpdesk: ['geek', 'contact', 'days'],
    private: ['who', 'contact', 'days'],
    why: ['days', 'rollout', 'incident'],
    runbook: ['rollout', 'automation', 'days'],
    socca: ['work', 'hot', 'github'],
    m365mcp: ['graph', 'automation', 'github'],
    terraformProj: ['k8s', 'github', 'learning'],
    fieldmarkFree: ['fieldmark', 'hot', 'work'],
    physical: ['geek', 'malibu', 'days'],
    linux: ['stack', 'malibu', 'learning'],
    intune: ['jamf', 'rollout', 'days'],
    jamf: ['intune', 'macos', 'days'],
    azure: ['certs', 'entra', 'stack'],
    entra: ['azure', 'security', 'days'],
    powershell: ['automation', 'graph', 'days'],
    python: ['graph', 'socca', 'github'],
    compliance: ['rollout', 'security', 'runbook'],
    edr: ['incident', 'security', 'days'],
    meraki: ['physical', 'malibu', 'stack'],
    macos: ['jamf', 'windows', 'days'],
    windows: ['intune', 'macos', 'days'],
    graph: ['python', 'automation', 'm365mcp'],
    k8s: ['learning', 'terraformProj', 'stack'],
    when: ['employer', 'education', 'background'],
    migrate: ['azure', 'days', 'stack'],
    browser: ['rollout', 'intune', 'days'],
    lab: ['automation', 'powershell', 'days'],
    years: ['when', 'background', 'geek'],
    watchdog: ['githubMore', 'graph', 'm365mcp'],
    mag: ['githubMore', 'stack', 'python'],
    powerbi: ['m365mcp', 'githubMore', 'graph'],
    siem: ['socca', 'malibu', 'security'],
    githubMore: ['work', 'm365mcp', 'watchdog']
  };

  const phrases = {};
  const put = (key, list) => {
    list.forEach((item) => {
      const p = String(item).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
      if (p) phrases[p] = key;
    });
  };

  put('who', [
    'who are you', 'who is ian', 'who is ian relecker', 'tell me about yourself', 'tell me about you',
    'introduce yourself', 'about you', 'about yourself', 'bio', 'biography', 'profile', 'who am i talking to',
    'what should i know about you', 'summary', 'elevator pitch', 'in a nutshell', 'tldr', 'tl dr'
  ]);
  put('name', [
    'what is your name', 'whats your name', 'your name', 'full name', 'do you have a middle name',
    'how do you spell your name', 'is ian your real name'
  ]);
  put('location', [
    'where do you live', 'where are you based', 'where are you located', 'what city', 'what city are you in',
    'los angeles', 'are you in la', 'are you in los angeles', 'studio city', 'where in california',
    'what timezone', 'what time zone', 'pacific time', 'are you in california', 'are you local'
  ]);
  put('title', [
    'what is your title', 'job title', 'what do you call yourself', 'are you a sysadmin',
    'are you an engineer', 'are you in security', 'computer person', 'what are you'
  ]);
  put('employer', [
    'where do you work', 'who do you work for', 'current employer', 'current company', 'what company',
    'ksp', 'ksp systems', 'is it an msp', 'are you at an msp', 'msp or internal'
  ]);
  put('clients', [
    'how many clients', 'how many fleets', 'how many environments', 'how many companies',
    'twenty fleets', '20 fleets', 'twenty environments', 'how big is the environment', 'scale'
  ]);
  put('days', [
    'what do you do', 'what do you actually do', 'describe your job', 'day to day', 'day in the life',
    'typical day', 'responsibilities', 'what does a systems administrator do'
  ]);
  put('geek', [
    'geek squad', 'did you work at best buy', 'best buy', 'repair tech', 'advanced repair agent',
    'woodland hills'
  ]);
  put('malibu', [
    'city of malibu', 'malibu it', 'did you work for the city', 'municipal it', 'public sector it'
  ]);
  put('education', [
    'where did you go to school', 'what did you study', 'college', 'university', 'cal lutheran',
    'california lutheran', 'clu', 'your gpa', 'what is your gpa', 'masters degree', 'bachelor degree',
    'bs computer science', 'ms information technology', 'when did you graduate'
  ]);
  put('certs', [
    'what certifications do you have', 'are you certified', 'azure architect', 'az-305', 'az-104',
    'security+', 'comptia', 'solutions architect expert', 'azure administrator'
  ]);
  put('email', [
    'what is your email', 'whats your email', 'email address', 'how do i email you', 'mailto'
  ]);
  put('phone', [
    'what is your phone number', 'whats your number', 'phone number', 'can i call you', 'whatsapp'
  ]);
  put('signal', ['signal', 'signal username', 'your signal', 'relecker.01']);
  put('pgp', ['pgp', 'gpg', 'public key', 'encryption key', 'do you have pgp']);
  put('github', ['github', 'your github', 'source code', 'open source', 'repositories']);
  put('linkedin', ['linkedin', 'your linkedin', 'are you on linkedin']);
  put('twitter', ['twitter', 'are you on twitter', 'are you on x', 'x.com', '@ianrelecker']);
  put('resume', [
    'resume', 'cv', 'can i see your resume', 'link to resume', 'pdf resume', 'curriculum vitae'
  ]);
  put('rate', [
    'what is your rate', 'hourly rate', 'day rate', 'how much do you charge', 'consulting rate',
    'what do you make', 'salary', 'compensation', 'day rate', 'contract rate'
  ]);
  put('remote', [
    'are you remote', 'do you work remote', 'hybrid', 'on site', 'onsite', 'willing to relocate',
    'can you relocate', 'office or remote'
  ]);
  put('bot', [
    'are you a bot', 'are you ai', 'is this ai', 'are you real', 'is this chatgpt',
    'am i talking to a person', 'are these real answers'
  ]);
  put('helpdesk', [
    'can you fix my computer', 'my laptop is broken', 'help me with windows', 'remote support for me',
    'can you repair my pc'
  ]);
  put('private', [
    'how old are you', 'what is your age', 'are you married', 'do you have kids', 'girlfriend',
    'religion', 'political views', 'who did you vote for'
  ]);
  put('why', [
    'why endpoints', 'why this job', 'why sysadmin', 'why do you like this', 'why this work'
  ]);
  put('runbook', ['runbook', 'do you write runbooks', 'how do you document changes']);
  put('socca', ['socca', 'socca.tech', 'cve pipeline', 'vulnerability intelligence']);
  put('m365mcp', ['m365mcp', 'graph mcp', 'microsoft graph mcp']);
  put('terraformProj', ['cloudterraform', 'exo-arcocd', 'argocd project']);
  put('fieldmark', [
    'what is fieldmark', 'tell me about fieldmark', 'field mark', 'your ios app', 'field logging app'
  ]);
  put('fieldmarkFree', [
    'is fieldmark free', 'how much is fieldmark', 'fieldmark price', 'does fieldmark cost money',
    'fieldmark on the app store'
  ]);
  put('dioxide', [
    'what is dioxide', 'dioxide ai', 'your chatbot', 'local llm product'
  ]);
  put('physical', [
    'do you rack servers', 'structured cabling', 'hands on hardware', 'break fix', 'hardware repair',
    'mdf', 'idf', 'closet buildout'
  ]);
  put('linux', ['do you know linux', 'linux experience', 'qless', 'ubuntu']);
  put('intune', ['do you know intune', 'intune experience', 'microsoft intune', 'can you do intune']);
  put('jamf', ['do you know jamf', 'jamf experience', 'jamf pro']);
  put('azure', ['do you know azure', 'azure experience', 'microsoft azure']);
  put('entra', ['entra id', 'azure ad', 'active directory', 'conditional access']);
  put('powershell', ['do you know powershell', 'powershell experience', 'can you script powershell']);
  put('python', ['do you know python', 'python experience']);
  put('compliance', [
    'cmmc', 'hipaa', 'pci dss', 'iso 27001', 'nist', 'stig', 'cis benchmarks', 'compliance experience',
    'are you a compliance person'
  ]);
  put('edr', ['huntress', 'microsoft defender', 'edr', 'endpoint detection']);
  put('meraki', ['meraki', 'cisco meraki', 'do you do networking']);
  put('macos', ['macos fleet', 'do you manage macs', 'apple endpoints']);
  put('windows', ['windows fleet', 'windows 11', 'windows server', 'autopilot', 'bitlocker']);
  put('graph', ['microsoft graph', 'graph api', 'do you use graph']);
  put('k8s', ['kubernetes', 'do you know kubernetes', 'k8s', 'argo cd']);
  put('when', [
    'how long have you been at ksp', 'when did you start', 'how long in it', 'years of experience',
    'when did you graduate', 'how long were you in malibu'
  ]);
  put('incident', [
    'web shell', 'aitm', 'adversary in the middle', 'have you done ir', 'incident response experience',
    'have you handled a breach'
  ]);
  put('rollout', [
    'endpoint dlp', 'phased rollout', 'how do you roll out', '130 endpoints'
  ]);
  put('contact', [
    'how can i contact you', 'how do i reach you', 'best way to reach you', 'get in touch'
  ]);
  put('hire', [
    'should i hire you', 'why should i hire you', 'would you hire you', 'are you good'
  ]);
  put('work', [
    'what are you building', 'side projects', 'what are you working on', 'current projects'
  ]);
  put('security', [
    'security philosophy', 'how do you think about security', 'your take on security'
  ]);
  put('learning', [
    'what are you learning', 'learning roadmap', 'next skill'
  ]);
  put('hot', [
    'hot take', 'opinion on ai', 'thoughts on ai', 'ai in it'
  ]);
  put('stack', [
    'tech stack', 'what tools do you use', 'toolkit', 'technologies'
  ]);
  put('automation', [
    'what do you automate', 'automation examples', 'scripting at work'
  ]);
  put('migrate', [
    'azure migrate', 'hyper-v to azure', 'have you migrated to azure', 'lift and shift',
    'file server migration', 'site to site vpn', 'azure iaas'
  ]);
  put('browser', [
    'browser migration', 'migrating chrome', 'managed browser', '300 machines'
  ]);
  put('lab', [
    'test lab', 'engineering lab', 'vector network analyzer', 'rf power meter'
  ]);
  put('years', [
    'years of experience', 'how many years in it', 'how long have you been doing this'
  ]);
  put('watchdog', ['365watchdog', 'm365 watchdog', 'sign in monitoring']);
  put('mag', ['google workspace', 'do you know google workspace', 'gws']);
  put('powerbi', ['power bi', 'powerbi', 'powerbi mcp']);
  put('siem', ['siem', 'microsoft sentinel', 'do you know sentinel']);
  put('githubMore', [
    'how many github repos', 'what have you published', 'open source projects list'
  ]);
  put('likejob', ['do you like your job', 'do you enjoy it', 'is it fun', 'love your job']);
  put('stress', ['is it stressful', 'do you get burned out', 'hard job']);
  put('oncall', ['are you on call', 'on call', 'pager duty', 'after hours']);
  put('proud', ['what are you proud of', 'biggest win', 'best thing you shipped']);
  put('advice', ['any advice', 'career advice', 'what would you tell someone']);
  put('student', ['i am a student', 'im a student', 'breaking into it', 'how do i get started']);
  put('collab', ['can we work together', 'do you freelance', 'do you consult', 'hire you for a project']);
  put('hours', ['what hours do you work', 'what timezone', 'when are you around']);
  put('favorite', ['favorite part of the job', 'favourite part', 'what do you enjoy most']);
  put('unglamorous', ['worst part', 'boring part', 'what do you hate']);
  put('weather', ['hows the weather', 'how is the weather', 'is it hot']);
  put('coffee', ['coffee', 'need coffee', 'tea or coffee']);
  put('browsing', ['just looking', 'just browsing', 'checking this out', 'poking around']);
  put('recruiter', ['im a recruiter', 'i am a recruiter', 'recruiter here']);
  put('whattoask', ['what should i ask', 'what can i ask you', 'ask you something']);
  put('mspwhat', ['what is an msp', 'whats an msp', 'msp']);
  put('team', ['your team', 'how big is the team', 'do you work alone']);
  put('commute', ['do you commute', 'in office']);
  put('english', ['plain english', 'eli5', 'explain like im five', 'in simple terms']);
  put('ai', [
    "what's the ai setup", 'whats the ai setup', 'your ai setup', 'are you an ai guy', 'local models',
    'openchamber', 'ollama', 'do you use ai', 'agents'
  ]);

  const skillTemplates = [
    'do you know', 'do you use', 'have you used', 'experience with', 'can you do',
    'are you good at', 'skills in', 'worked with', 'comfortable with', 'proficient in',
    'any experience with', 'how is your', 'tell me about your'
  ];
  const skillMap = {
    intune: 'intune', jamf: 'jamf', autopilot: 'windows', 'group policy': 'windows', gpo: 'windows',
    atera: 'skill', rmm: 'skill', bitlocker: 'windows', entra: 'entra', 'entra id': 'entra',
    azure: 'azure', 'microsoft 365': 'skill', m365: 'skill', 'google workspace': 'skill', gcp: 'skill',
    huntress: 'edr', defender: 'edr', powershell: 'powershell', python: 'python', bash: 'skill',
    terraform: 'terraformProj', docker: 'skill', kubernetes: 'k8s', k8s: 'k8s', argocd: 'k8s',
    'active directory': 'entra', 'conditional access': 'entra', meraki: 'meraki', hyperv: 'skill',
    'hyper-v': 'skill', iis: 'skill', dns: 'skill', dhcp: 'skill', vlan: 'meraki', ipsec: 'meraki',
    dlp: 'rollout', cmmc: 'compliance', hipaa: 'compliance', pci: 'compliance', nist: 'compliance',
    stig: 'compliance', 'cis': 'compliance', graph: 'graph', macos: 'macos', windows: 'windows',
    linux: 'linux', git: 'skill', github: 'github', packaging: 'skill', msi: 'skill'
  };
  Object.keys(skillMap).forEach((skill) => {
    skillTemplates.forEach((prefix) => {
      phrases[(prefix + ' ' + skill).replace(/\s+/g, ' ')] = skillMap[skill];
    });
    phrases[skill] = skillMap[skill];
  });

  const skip = [
    'are you looking for a job', 'are you open to work', 'open to work', 'job hunting',
    'are you job hunting', 'are you on the market', 'can i recruit you', 'new opportunities',
    'are you available for work', 'available for work', 'looking for work', 'looking for a job',
    'currently looking for work', 'currently open to new opportunities', 'open to new opportunities',
    'interested in new opportunities'
  ].map((s) => s.replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim());

  return { extra, keywords, followUps, phrases, skip };
})();
