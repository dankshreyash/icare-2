/**
 * ICARE - Indian Centre for Academic Rankings & Excellence
 * Master Content File
 * 
 * Source of truth: todo.txt
 * All copy is strictly derived from verified source content.
 * Missing items are marked with 'TODO:' for clear placeholder tracking.
 */

export const siteMetadata = {
  name: "ICARE",
  fullName: "Indian Centre for Academic Rankings & Excellence",
  tagline: "Measuring, benchmarking and improving the quality of higher education in India",
  shortDescription: "Measuring, benchmarking and improving the quality of higher education in India.",
  heroSubline: "ICARE (Indian Centre for Academic Rankings & Excellence) works with governments, universities and ranking bodies on institutional ranking, rating, accreditation and data-driven improvement. Our work spans close to two decades, most of it in the last fifteen years.",
  email: "info@icare-india.org",
  phone: "+91 44 XXXX XXXX", // TODO: add official phone number
  address: "ICARE Headquarters, Chennai, Tamil Nadu, India", // TODO: add full street address
  copyrightYear: 2026,
  portalUrl: "https://icare-india.org"
};

export const navigationLinks = [
  { name: "About", path: "/about" },
  { name: "What We Do", path: "/what-we-do" },
  { name: "Track Record", path: "/track-record" },
  { name: "Tools & Initiatives", path: "/tools-and-initiatives" },
  { name: "Leadership & Team", path: "/leadership-and-team" },
  { name: "Contact", path: "/contact" }
];

export const heroStats = [
  {
    id: "years",
    value: 20,
    prefix: "About",
    suffix: " Years",
    label: "Of Work in Rankings, Ratings and Accreditation",
    description: "Our work spans close to two decades, most of it in the last fifteen years."
  },
  {
    id: "states",
    value: 6,
    prefix: "",
    suffix: "+",
    label: "States Engaged",
    description: "With state-level ranking and rating programmes across India."
  },
  {
    id: "universities",
    value: 7,
    prefix: "",
    suffix: " Universities",
    label: "In Maharashtra Where ICARE Analysts Are Embedded",
    description: "Data analysts work inside these universities to build dashboards and insights so progress can be tracked over time."
  }
];

export const whatWeAreKnownFor = [
  {
    id: "nirf",
    title: "Recommending and Building NIRF",
    description: "Recommending and building the National Institutional Ranking Framework (NIRF), which grew out of our early state-level framework KSURF.",
    icon: "ShieldCheck"
  },
  {
    id: "accreditation-validation",
    title: "Accreditation and Data Validation",
    description: "Accreditation and data validation work with India's national accreditation authority (NAAC).",
    icon: "Award"
  },
  {
    id: "civil-service",
    title: "Civil-Service Capacity Building (Mission Karmayogi)",
    description: "Assessing and accrediting civil-service training institutions for Mission Karmayogi, with the Prime Minister's Office.",
    icon: "GraduationCap"
  },
  {
    id: "state-programmes",
    title: "State-Level Ranking and Rating Programmes",
    description: "State-level ranking and rating programmes across India including Karnataka, Gujarat, Maharashtra, Tamil Nadu, Haryana, and Kerala.",
    icon: "Landmark"
  },
  {
    id: "rankings-support",
    title: "National and Global Rankings Support",
    description: "Supporting leading public and private universities in national and global rankings (NIRF, QS, Times Higher Education).",
    icon: "Globe"
  },
  {
    id: "media-rankings",
    title: "Major Ranking Publications",
    description: "Producing the institutional rankings published by major Indian news magazines.",
    icon: "Database"
  }
];

export const ourApproach = {
  quote: "We do not chase rankings. We help institutions do the right things, so that rankings follow as a byproduct.",
  subtext: "National ranking data is public, so our value lies in analysis: showing an institution where it stands against peers, how far it is from its goals, and which focus areas will move it most.",
  reputationInsight: "Global rankings also depend heavily on academic reputation surveys, which carry about 30% weight in major world rankings. We therefore encourage Indian institutions to support one another's reputation globally while competing at home.",
  pillars: [
    {
      title: "Evidence-Based Action",
      description: "Showing an institution where it stands against peers, how far it is from its goals, and which focus areas will move it most."
    },
    {
      title: "Sustainable Quality Over Shortcuts",
      description: "Rankings are the byproduct of doing the right things structurally — building internal capacity, verifiable research, and governance."
    },
    {
      title: "Global Reputation Collaboration",
      description: "Encouraging Indian institutions to support one another's reputation globally on world ranking tables (QS, THE) while competing constructively at home."
    }
  ]
};

export const partnerLogos = [
  { name: "Prime Minister's Office (Mission Karmayogi)", category: "Government", placeholderText: "Prime Minister's Office / CBC" },
  { name: "Ministry of Education (NIRF)", category: "National Framework", placeholderText: "NIRF Formulation & Support" },
  { name: "NAAC", category: "Accreditation", placeholderText: "National Accreditation Authority (NAAC)" },
  { name: "IIT Bombay, IIT Delhi, IIT Kanpur, IIT Kharagpur", category: "Advisory to Premier Institutes", placeholderText: "Leading Older IITs & Bangalore Institute" },
  { name: "BITS Pilani, Manipal, VIT, SRM, SASTRA, Amrita, OP Jindal", category: "Private Universities", placeholderText: "Large Private Universities Network" },
  { name: "QS & Times Higher Education", category: "Global Ranking Bodies", placeholderText: "QS Quacquarelli Symonds & THE" },
  { name: "The Week, Business World, Outlook", category: "Media Ranking Publications", placeholderText: "Major Indian News Magazine Rankings" },
  { name: "Government of Maharashtra (MahaSTRIDE / 7 Universities)", category: "State Government", placeholderText: "7 Public State Universities (MU, SPPU, etc.)" },
  { name: "Governments of Gujarat, Karnataka, Tamil Nadu, Haryana, Kerala", category: "State Governments", placeholderText: "State-Level Rating Frameworks" }
];

export const aboutContent = {
  headline: "About ICARE",
  kicker: "Institutional Evolution",
  lead: "ICARE helps Indian higher education understand how well its institutions perform, and what to do next. We began with a state project, the Karnataka State Universities' Rating Framework (KSURF), which later became the National Institutional Ranking Framework (NIRF).",
  storyParagraphs: [
    "ICARE (Indian Centre for Academic Rankings & Excellence) works with governments, universities and ranking bodies on institutional ranking, rating, accreditation and data-driven improvement. Our work spans close to two decades, most of it in the last fifteen years.",
    "We began with a state project, the Karnataka State Universities' Rating Framework (KSURF), which later became the National Institutional Ranking Framework (NIRF).",
    "Since then we have worked with central and state governments, the Prime Minister's Office, leading IITs, large private universities, and the global ranking agencies QS and Times Higher Education, to build frameworks, validate data and turn it into insight that institutions can act on."
  ],
  reputationSurveyPoint: {
    title: "The Role of Academic Reputation Surveys",
    summary: "Global rankings depend heavily on academic reputation surveys, which carry about 30% weight in major world rankings.",
    counterApproach: "Because national ranking data is public, our value lies in deep comparative analysis: showing an institution where it stands against peers, how far it is from its goals, and which focus areas will move it most. At the same time, we actively encourage Indian institutions to support one another's reputation globally while competing at home."
  },
  vision: "To help Indian higher education understand how well its institutions perform, benchmark with global rigor, and implement the right structural actions so that excellence and rankings follow as a byproduct.",
  mission: "To work with governments, universities and ranking bodies to build transparent frameworks, validate institutional data, and turn telemetry into insight that leadership can act on."
};

export const services = [
  {
    id: "ranking-frameworks",
    number: "01",
    title: "Ranking and rating frameworks",
    shortDescription: "Designing national and state-level frameworks, from KSURF to NIRF, and state programmes that show how institutions perform within a state.",
    icon: "Sliders",
    deliverables: [
      "National and state framework architecture (KSURF, NIRF, GSIRF)",
      "State-level institutional performance evaluation",
      "Parameter definition and methodology formulation",
      "Transparent multi-dimensional rating matrices"
    ]
  },
  {
    id: "accreditation-validation",
    number: "02",
    title: "Accreditation and data validation",
    shortDescription: "Accrediting institutions for the national accreditation authority, and validating and verifying the data they submit.",
    icon: "CheckCircle2",
    deliverables: [
      "Empanelled nationwide institutional accreditation",
      "Data validation and verification (DVV) partner workflows",
      "Institutional metric reconciliation and audit",
      "Compliance and evidentiary accuracy checking"
    ]
  },
  {
    id: "civil-service",
    number: "03",
    title: "Civil-service capacity building",
    shortDescription: "Assessing and accrediting civil-service training institutions under Mission Karmayogi, and developing standards with national training institutions, for the Prime Minister's Office.",
    icon: "Compass",
    deliverables: [
      "Mission Karmayogi civil-service training institution assessment",
      "Capacity Building Commission (CBC) empanelled auditing",
      "National Standards for Civil Service Training Institutions (NSCSTI)",
      "Continuous administrative capability enhancement"
    ]
  },
  {
    id: "institutional-analytics",
    number: "04",
    title: "Institutional analytics",
    shortDescription: "Data analysts embedded in universities, building dashboards and insights so effort goes in the right direction and progress is visible over time.",
    icon: "BarChart3",
    deliverables: [
      "Dedicated analysts embedded inside university campuses",
      "Analytical dashboards and longitudinal KPI tracking",
      "Departmental performance and research gap identification",
      "Direct technical and reporting coordination"
    ]
  },
  {
    id: "national-global-rankings",
    number: "05",
    title: "National and global rankings support",
    shortDescription: "Advising public and private universities on NIRF, QS and Times Higher Education rankings.",
    icon: "Globe2",
    deliverables: [
      "NIRF category-wise diagnostic and rank target roadmaps",
      "QS World, Regional, and Subject rankings advisory",
      "Times Higher Education (THE) metrics and reputation alignment",
      "Data cleansing and international submission profiling"
    ]
  },
  {
    id: "policy-strategy",
    number: "06",
    title: "Policy and strategy",
    shortDescription: "Recommending and shaping the Institutions of Eminence initiative, and working on the National Education Policy.",
    icon: "FileText",
    deliverables: [
      "Institutions of Eminence (IoE) initiative conception and presentation",
      "National Education Policy (NEP) policy formulation advisory",
      "Collaboration with apex policy architects",
      "Strategic university transformation roadmaps"
    ]
  },
  {
    id: "ranking-publications",
    number: "07",
    title: "Ranking publications",
    shortDescription: "Putting together the rankings published by major Indian news magazines.",
    icon: "BookOpen",
    deliverables: [
      "The Week annual university and college rankings",
      "Business World higher education rankings",
      "Outlook national institutional ranking surveys",
      "Methodology design, data audit, and publication gazettes"
    ]
  }
];

export const trackRecordData = {
  nationalMandates: [
    {
      title: "NIRF (National Institutional Ranking Framework)",
      year: "2014 – Present",
      description: "ICARE recommended and built the National Institutional Ranking Framework, which grew out of the Karnataka State Universities' Rating Framework (KSURF).",
      highlight: "Recommended & Built NIRF"
    },
    {
      title: "Accreditation & Data Validation",
      year: "Ongoing",
      description: "Appointed to accredit institutions across the country, and data validation and verification partner of the national accreditation authority (NAAC).",
      highlight: "National Accreditation Partner"
    },
    {
      title: "Institutions of Eminence",
      year: "National Initiative",
      description: "Recommended and helped create the initiative, and prepared the presentations through which several institutions earned the Eminence title.",
      highlight: "Created Eminence Framework"
    },
    {
      title: "National Education Policy",
      year: "Policy Mandate",
      description: "Worked closely on the policy, including with the late Dr Kasturirangan.",
      highlight: "NEP Contribution"
    },
    {
      title: "Mission Karmayogi",
      year: "PMO Mandate",
      description: "Empanelled by the Prime Minister's Office for the Capacity Building Commission. ICARE assesses and accredits civil-service training institutions across India.",
      highlight: "PMO / CBC Empanelled"
    }
  ],
  stateProgrammes: [
    {
      state: "Karnataka",
      programme: "KSURF (Karnataka State Universities' Rating Framework)",
      partner: "Government of Karnataka",
      scale: "State-wide universities rating",
      description: "The model first built in Karnataka became a national model. ICARE has audited, assessed and rated institutions in Karnataka, laying the foundation for national frameworks."
    },
    {
      state: "Maharashtra",
      programme: "MahaSTRIDE / Public State Universities Transformation",
      partner: "Government of Maharashtra",
      scale: "7 Public State Universities",
      description: "Most recently, the Government of Maharashtra appointed ICARE to work with its seven public state universities, including Mumbai and Pune. ICARE data analysts work inside these universities to build dashboards and insights, so progress can be tracked over time."
    },
    {
      state: "Gujarat",
      programme: "GSIRF (Gujarat State Institutional Rating Framework)",
      partner: "Government of Gujarat",
      scale: "500+ institutions evaluated",
      description: "State-level ranking and rating programme auditing, assessing and rating universities and colleges across disciplines."
    },
    {
      state: "Tamil Nadu, Haryana, Kerala & Others",
      programme: "State Institutional Assessments & Audits",
      partner: "Respective State Governments",
      scale: "Multiple state-level programmes",
      description: "ICARE has audited, assessed and rated institutions in Tamil Nadu, Haryana, Kerala and others, where several state governments have asked us to run state-level ranking and rating programmes."
    }
  ],
  partners: [
    {
      category: "Advisory to Leading Institutions",
      entities: [
        "IIT Bombay (Formal official advisors)",
        "IIT Delhi (Formal official advisors)",
        "IIT Kanpur (Formal official advisors)",
        "IIT Kharagpur (Formal official advisors)",
        "Bangalore Institute (Formal official advisors)",
        "Older IITs on global university rankings"
      ]
    },
    {
      category: "Private Universities",
      entities: [
        "BITS Pilani",
        "Manipal University",
        "VIT (Vellore Institute of Technology)",
        "SRM Institute of Science and Technology",
        "SASTRA Deemed University",
        "Amrita Vishwa Vidyapeetham",
        "OP Jindal Global University"
      ]
    },
    {
      category: "Global Ranking Agencies",
      entities: [
        "QS (Quacquarelli Symonds) - Officially engaged in their early years in India",
        "Times Higher Education (THE) - Officially engaged in their early years in India"
      ]
    },
    {
      category: "Media Publications",
      entities: [
        "The Week (rankings put together by ICARE)",
        "Business World (rankings put together by ICARE)",
        "Outlook (rankings put together by ICARE)"
      ]
    },
    {
      category: "Governments & Authorities",
      entities: [
        "Prime Minister's Office (Mission Karmayogi / CBC)",
        "National Accreditation Authority (NAAC)",
        "State Governments across India (Maharashtra, Gujarat, Karnataka, etc.)"
      ]
    }
  ]
};

export const toolsAndInitiatives = [
  {
    id: "ai-simulator",
    title: "AI-Based Simulators",
    badge: "Interactive What-If Engine",
    description: "A what-if tool built on public NIRF data. Enter a change, such as 20 more research papers, and see where it could move an institution.",
    interactive: true,
    capabilities: [
      "Built directly on public NIRF institutional dataset models",
      "Simulate impact of additional research papers (e.g. +20 to +100 papers)",
      "Citation impact and patent grant sensitivity modeling",
      "Immediate sample estimated rank movement projection"
    ]
  },
  {
    id: "benchmarking-tools",
    title: "Benchmarking Tools",
    badge: "Peer Gap Diagnostics",
    description: "Shows the distance between an institution and a peer such as IIT Madras, so leaders can choose their focus areas for the year.",
    interactive: false,
    capabilities: [
      "Distance-to-peer metric calculations against institutions like IIT Madras",
      "Identify high-impact focus areas for the coming academic year",
      "Parameter-by-parameter gap identification",
      "Resource allocation prioritization for university leadership"
    ]
  },
  {
    id: "truth-index",
    title: "TRUTH Index",
    badge: "Research Transparency",
    description: "Tracks research retractions to uphold transparency and honesty.",
    interactive: false,
    capabilities: [
      "Rigorous tracking of research paper retractions",
      "Identification of questionable or predatory publication pipelines",
      "Promoting genuine institutional integrity and ethical scholarship",
      "Safeguarding universities against reputational damage"
    ]
  },
  {
    id: "stanford-top-2",
    title: "Stanford Top-2% List Analysis",
    badge: "Scientometric Intelligence",
    description: "ICARE decodes and analyses the widely cited list of world top-2% scientists.",
    interactive: false,
    capabilities: [
      "Decoding and institutional mapping of the widely cited Stanford/Elsevier database",
      "Discipline-wise and researcher-wise impact evaluation",
      "Highlighting high-citation faculty and institutional research stars",
      "Strategic talent retention and research fellowship benchmarking"
    ]
  },
  {
    id: "grog",
    title: "Global Rankings Outreach Group",
    badge: "Global Reputation Consortium",
    description: "Being set up at IIT Madras to bring Indian institutions together on global reputation, in talks with the Ministry of Education.",
    interactive: false,
    capabilities: [
      "Consortium initiative being set up at IIT Madras",
      "Brings Indian institutions together to build collective global reputation",
      "Under active discussions with the Ministry of Education",
      "Addresses the ~30% academic reputation survey weight in global rankings"
    ]
  }
];

export const leadershipMembers = [
  {
    id: "sridhar-subramanyam",
    name: "Sridhar Subramanyam",
    role: "Leadership",
    initials: "SS",
    category: "Leadership",
    shortBio: "TODO: add bio",
    fullBio: "TODO: add bio. Leading veteran in higher education institutional evaluation and governance.",
    credentials: "TODO: add credentials",
    focus: "Institutional Advisory, Policy & Strategy"
  },
  {
    id: "dr-karthick-sridhar",
    name: "Dr. Karthick Sridhar",
    role: "Founding Leadership & Strategic Advisor",
    initials: "KS",
    photoUrl: "/team/dr-karthick-sridhar.jpg",
    photoWebp: "/team/dr-karthick-sridhar.webp",
    category: "Leadership",
    shortBio: "Originally responsible for bringing both QS and Times Higher Education to India, working closely with the Prime Minister when he was Chief Minister of Gujarat. Helped recommend and build NIRF. Advisor to IIT Madras.",
    fullBio: "Dr. Karthick Sridhar was originally responsible for bringing both QS and Times Higher Education to India, working closely with the Prime Minister when he was Chief Minister of Gujarat. Helped recommend and build NIRF. Advisor to IIT Madras. Works on Africa projects, including the Zanzibar campus.",
    credentials: "Ph.D. • Strategic Advisor to IIT Madras",
    focus: "NIRF Formulation, Global Ranking Agencies (QS & THE), International Projects (Zanzibar)"
  },
  {
    id: "dr-kumara-swamy",
    name: "Dr. Kumara Swamy T.R.",
    role: "Senior Colleague & Policy Specialist",
    initials: "KS",
    photoUrl: "/team/dr-kumara-swamy.jpg",
    photoWebp: "/team/dr-kumara-swamy.webp",
    category: "Leadership",
    shortBio: "Worked very closely on the National Education Policy with the late Dr Kasturirangan, and presents ranking-data analysis for institutions.",
    fullBio: "Dr. Kumara Swamy T.R. is an ICARE colleague who has worked very closely on the National Education Policy with the late Dr Kasturirangan, and presents ranking-data analysis for institutions.",
    credentials: "Ph.D. • National Education Policy Specialist",
    focus: "National Education Policy (NEP), Ranking-Data Analysis"
  },
  {
    id: "jagan-sridhar",
    name: "Jagan Sridhar",
    role: "Chief Assessments Officer",
    initials: "JS",
    category: "Executive Leadership",
    shortBio: "Spearheads institutional intelligence, higher education governance, and quality assurance frameworks across domestic and international educational corridors.",
    fullBio: "Jagan Sridhar serves as Chief Assessments Officer at ICARE, spearheading institutional intelligence, higher education governance, and quality assurance frameworks across domestic and international educational corridors. Drawing on deep expertise in national assessment exercises under the National Standards for Civil Service Training Institutions (NSCSTI - Mission Karmayogi) and strategic institutional benchmarking, he advises university leadership and governing bodies on bridging policy with student experience to strengthen institutional outcomes across NAAC, NIRF, QS, and global ranking tables.",
    credentials: "Chief Assessments Officer • NSCSTI Assessor",
    focus: "Mission Karmayogi (NSCSTI), NAAC & NIRF Assessments, University Governance"
  },
  {
    id: "saagar-teli",
    name: "Saagar Teli",
    role: "Assistant Director of Data Science & Institutional Analytics",
    initials: "ST",
    photoUrl: "/team/saagar-teli.jpg",
    photoWebp: "/team/saagar-teli.webp",
    category: "Leadership",
    shortBio: "Leads advanced machine learning pipelines, predictive performance modeling, and automated data architectures for state-wide higher education initiatives.",
    fullBio: "Saagar Teli is an Assistant Director of Data Science & Institutional Analytics at ICARE, leading advanced machine learning pipelines, predictive performance modeling, and automated data architectures for state-wide higher education initiatives. Backed by an engineering foundation, enterprise experience at Tata Consultancy Services, and specialization in Artificial Intelligence and Data Science, he focuses on turning raw institutional datasets into actionable executive intelligence. At ICARE, he oversees data governance and analytical pipelines across participating public universities, designing automated dashboards and strategic scorecards that empower institutions to optimize ranking trajectories, track compliance indicators, and build scalable institutional capacity.",
    credentials: "TCS Alum • Specialist in AI & Data Science",
    focus: "Data Science, Machine Learning, State-Wide Analytics Pipelines"
  },
  {
    id: "padmashree",
    name: "Padma S. (Padmashree)",
    role: "Assistant Director of Programme Implementation",
    initials: "PS",
    photoUrl: "/team/padmashree.jpg",
    photoWebp: "/team/padmashree.webp",
    category: "Leadership",
    shortBio: "Drives executive project execution, stakeholder coordination, and institutional ranking alignment with over eight years of global rankings expertise at QS Quacquarelli Symonds.",
    fullBio: "Padma S. serves as Assistant Director of Programme Implementation at ICARE, driving executive project execution, stakeholder coordination, and institutional ranking alignment. With more than eight years of specialized expertise in global higher education rankings at QS Quacquarelli Symonds, she has led public ranking methodology reviews, global data validation pipelines, and complex stakeholder advisory support across World University, Regional, and Subject Rankings. Holding a Master’s degree from the University of Mumbai and possessing multilingual research proficiency, she combines deep knowledge of international academic benchmarking with on-ground operational rigor to streamline data governance and milestone delivery across ICARE’s key institutional frameworks.",
    credentials: "Ex-QS Quacquarelli Symonds • M.A. University of Mumbai",
    focus: "Programme Implementation, QS Ranking Methodologies, Global Data Validation"
  },
  {
    id: "sribhashyam-akhil",
    name: "Sribhashyam Akhil",
    role: "Senior Data Analyst",
    initials: "SA",
    photoUrl: "/team/sribhashyam-akhil.jpg",
    photoWebp: "/team/sribhashyam-akhil.webp",
    category: "Analytics Leadership",
    shortBio: "Builds national-scale education analytics platforms for Indian higher education governance, using Power BI, Python, SQL, DAX, Figma and RAG and AI agent architectures.",
    fullBio: "Sribhashyam Akhil is a Senior Data Analyst at ICARE. Builds national-scale education analytics platforms for Indian higher education governance, using Power BI, Python, SQL, DAX, Figma and RAG and AI agent architectures.",
    credentials: "Senior Data Analyst • AI Systems Specialist",
    focus: "Education Analytics Platforms, Power BI, Python, AI Agent & RAG Architectures"
  },
  {
    id: "kirti",
    name: "Kirti S.",
    role: "HR & Operations Administration Manager",
    initials: "KS",
    photoUrl: "/team/kirti.jpg",
    photoWebp: "/team/kirti.webp",
    category: "Operations & Audits",
    shortBio: "Manages Human Resources, operations administration, and desktop assessment frameworks, contributing to quality audits and projects including MahaSTRIDE under MITRA.",
    fullBio: "Kirti S. manages Human Resources, operations administration, and desktop assessment frameworks at ICARE, contributing to institutional quality audits and large-scale governance projects including MahaSTRIDE under MITRA. Bringing extensive cross-sector experience spanning banking operations, vendor management, and Management Information Systems (MIS)—including leadership roles as Deputy Manager at HDFC Bank—she ensures rigorous compliance, process standardization, and meticulous documentation.",
    credentials: "Ex-Deputy Manager HDFC Bank • MIS & Quality Audits Specialist",
    focus: "Desktop Assessments, MahaSTRIDE (MITRA), Compliance & Operations"
  }
];

export const embeddedAnalysts = [
  {
    universityShort: "BAMU",
    universityFull: "Dr. Babasaheb Ambedkar Marathwada University",
    location: "Chhatrapati Sambhajinagar",
    logo: "/universities/BAMU.jpg",
    logoWebp: "/universities/BAMU.webp",
    analysts: [
      { 
        name: "Atharav Paturkar", 
        role: "Data Analyst", 
        photoUrl: "/team/atharav-paturkar.jpg",
        photoWebp: "/team/atharav-paturkar.webp",
        focus: "Works in higher education analytics, institutional performance assessment, ranking assessments, dashboard development, benchmarking initiatives, and performance gap analysis." 
      }
    ]
  },
  {
    universityShort: "RTMNU",
    universityFull: "Rashtrasant Tukadoji Maharaj Nagpur University",
    location: "Nagpur",
    logo: "/universities/RTMNU.jpg",
    logoWebp: "/universities/RTMNU.webp",
    analysts: [
      { 
        name: "Anjali Singh", 
        role: "Data Analyst", 
        photoUrl: "/team/anjali-singh.jpg",
        photoWebp: "/team/anjali-singh.webp",
        focus: "Focuses on higher education analytics, analysing institutional and ranking data, developing analytical dashboards, and supporting benchmarking initiatives to identify improvement opportunities." 
      }
    ]
  },
  {
    universityShort: "SGBAU",
    universityFull: "Sant Gadge Baba Amravati University",
    location: "Amravati",
    logo: "/universities/SGBAU.jpg",
    logoWebp: "/universities/SGBAU.webp",
    analysts: [
      { 
        name: "Prathamesh Babhulkar", 
        role: "Data Analyst", 
        photoUrl: "/team/prathamesh-babhulkar.jpg",
        photoWebp: "/team/prathamesh-babhulkar.webp",
        focus: "Works under the MahaSTRIDE Initiative, coordinating data collection, NIRF analysis, ranking improvement, and Dashboard & Visualization Team (Python, SQL, Power BI, Flask)." 
      }
    ]
  },
  {
    universityShort: "KBCNMU",
    universityFull: "Kavayitri Bahinabai Chaudhari North Maharashtra University",
    location: "Jalgaon",
    logo: "/universities/KBCNMU.png",
    logoWebp: "/universities/KBCNMU.webp",
    analysts: [
      { 
        name: "Nitish Kumbhar", 
        role: "Data Analyst", 
        photoUrl: "/team/nitish-kumbhar.jpg",
        photoWebp: "/team/nitish-kumbhar.webp",
        focus: "Higher education analytics, ranking assessments, analytical dashboards, and benchmarking initiatives, transforming complex datasets into actionable institutional insights." 
      }
    ]
  },
  {
    universityShort: "COEP",
    universityFull: "COEP Technological University, Pune",
    location: "Pune",
    logo: "/universities/COEP.jpg",
    logoWebp: "/universities/COEP.webp",
    analysts: [
      { 
        name: "Vaibhav Ambekar", 
        role: "Data Analyst", 
        photoUrl: "/team/vaibhav-ambekar.jpg",
        photoWebp: "/team/vaibhav-ambekar.webp",
        focus: "Analysing institutional data, developing dashboards, KPI monitoring, process improvement, performance benchmarking, and technical implementation." 
      }
    ]
  },
  {
    universityShort: "MU",
    universityFull: "Mumbai University",
    location: "Mumbai",
    logo: "/universities/MU.jpg",
    logoWebp: "/universities/MU.webp",
    analysts: [
      { 
        name: "Sneha Kashitkar", 
        role: "Data Analyst", 
        photoUrl: "/team/sneha-kashitkar.jpg",
        photoWebp: "/team/sneha-kashitkar.webp",
        focus: "Ranking data analysis, analytical reporting, dashboard development, and institutional benchmarking to identify performance gaps and improvement opportunities." 
      }
    ]
  },
  {
    universityShort: "SPPU",
    universityFull: "Savitribai Phule Pune University",
    location: "Pune",
    logo: "/universities/SPPU.jpg",
    logoWebp: "/universities/SPPU.webp",
    analysts: [
      { 
        name: "Harsh Shetty", 
        role: "Data Analyst", 
        photoUrl: "/team/harsh-shetty.jpg",
        photoWebp: "/team/harsh-shetty.webp",
        focus: "Higher education analytics, institutional data analysis, analytical reporting, dashboard development, and ranking-related performance improvement." 
      }
    ]
  }
];

export const maharashtraUniversities = embeddedAnalysts.map(u => ({
  short: u.universityShort,
  name: u.universityFull,
  location: u.location,
  logo: u.logo,
  logoWebp: u.logoWebp
}));

export const technologyTeam = [
  {
    name: "Shreyash Gaikwad",
    role: "Full Stack AI Engineer",
    initials: "SG",
    photoUrl: "/team/shreyash-gaikwad.jpg",
    photoWebp: "/team/shreyash-gaikwad.webp",
    focus: "React.js, Node.js, SQL/NoSQL databases, Generative AI, RAG, LLMs, LangChain, vector databases (FAISS), embeddings, semantic search, prompt engineering, scalable AI-powered web applications and intelligent chatbots."
  },
  {
    name: "Sribhashyam Akhil",
    role: "Senior Data Analyst & Platform Architect",
    initials: "SA",
    photoUrl: "/team/sribhashyam-akhil.jpg",
    photoWebp: "/team/sribhashyam-akhil.webp",
    focus: "National-scale education analytics platforms, Power BI, Python, SQL, DAX, Figma, RAG and AI agent architectures for Indian higher education governance."
  },
  {
    name: "Saagar Teli",
    role: "Assistant Director of Data Science & Institutional Analytics",
    initials: "ST",
    photoUrl: "/team/saagar-teli.jpg",
    photoWebp: "/team/saagar-teli.webp",
    focus: "Advanced machine learning pipelines, predictive performance modeling, automated data architectures, and executive dashboards across participating public universities."
  }
];

export const contactInfo = {
  headquarters: {
    title: "ICARE Headquarters",
    address: "ICARE – Indian Centre for Academic Rankings & Excellence",
    city: "Chennai, Tamil Nadu, India",
    pin: "TODO: add pincode",
    email: "info@icare-india.org",
    phone: "+91 44 XXXX XXXX", // TODO: add official phone number
    hours: "Monday – Friday: 9:30 AM – 6:00 PM IST"
  },
  regionalOffices: [
    {
      region: "Western Region Operations (Maharashtra)",
      location: "Mumbai / Pune, Maharashtra",
      focus: "MahaSTRIDE & Public State Universities Embedded Analytics"
    },
    {
      region: "Gujarat Project Coordination Office",
      location: "Ahmedabad / Gandhinagar, Gujarat",
      focus: "GSIRF Framework Operations & Institutional Assessments"
    }
  ]
};
