// All site copy lives here so content edits never touch layout code.
// Source of truth for facts: public/pdfs/SandyZhang_Resume.pdf

export const profile = {
  name: 'Sandy Zhang',
  tagline: 'Product Operations Manager · Surge AI',
  intro: 'I study and build interactive systems, with a focus on human-AI interaction and intentional technology use.',
  email: 'sandyzhang.zyn@gmail.com',
  resume: '/pdfs/SandyZhang_Resume.pdf',
  photo: '/static/profile.jpeg',
  links: {
    linkedin: 'https://www.linkedin.com/in/sandy-zhang-zyn/',
    github: 'https://github.com/sandyzyn',
  },
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'posters', label: 'Research' },
  { id: 'contact', label: 'Contact' },
] as const

export const about = {
  lead:
    'I graduated cum laude from Princeton in 2026 with a degree in Computer Science and a minor in Finance. I now work at Surge AI on human evaluations of frontier AI models.',
  body:
    "My research is in HCI: how interactive systems shape the way people think, learn, communicate, and collaborate. I'm especially interested in human-AI interaction and in interfaces that keep people engaged with their work and with each other as AI becomes part of everyday life.",
  skills: [
    {
      group: 'Research methods',
      items: ['Mixed-methods design', 'Semi-structured interviews', 'Thematic analysis', 'Survey design', 'Usability testing', 'Human evaluation of LLMs'],
    },
    { group: 'Programming', items: ['Python', 'Java', 'C', 'JavaScript / TypeScript', 'SQL', 'HTML/CSS', 'Solidity'] },
    { group: 'Frameworks', items: ['React', 'Flask', 'PyTorch', 'Scikit-learn', 'Selenium', 'MJML', 'Web3'] },
    { group: 'Tools & databases', items: ['Docker', 'Figma', 'GitHub', 'Jira', 'MongoDB', 'MySQL'] },
    { group: 'Languages', items: ['English (fluent)', 'Mandarin Chinese (fluent)'] },
  ],
}

export type Role = {
  org: string
  title: string
  dates: string
  summary: string
}

export const experience: Role[] = [
  {
    org: 'Surge AI',
    title: 'Product Operations Manager',
    dates: 'June 2026 - Present',
    summary:
      'Run human evaluations of frontier AI models, including snapshot evaluations across model versions and competitive evaluations between models. Collect tasks for evaluation prompt sets and rebuild evaluation workflows.',
  },
  {
    org: 'Princeton HCI Lab',
    title: 'Undergraduate Researcher',
    dates: 'Aug 2025 - Present',
    summary:
      'Advised by Prof. Andrés Monroy-Hernández. Built an email digest layer that delivers Bluesky content as finite newsletters and ran a multi-week field study with 17 participants. Co-ran the Capybara AR workshops with children.',
  },
  {
    org: 'UnitedMasters',
    title: 'Software Engineering Intern',
    dates: 'June - Aug 2025',
    summary:
      "Designed and shipped Forever Saves in React and TypeScript, letting fans permanently follow any of UnitedMasters' 1.5M+ artists on Spotify. Built dashboards for artist audience growth and fan interactions.",
  },
  {
    org: 'Business Today',
    title: 'Co-Director of Design Nation',
    dates: 'July 2024 - May 2026',
    summary:
      'Co-directed Design Nation 2026, a national undergraduate design conference: a 30-member team across 7 sub-committees, a $30,000 budget, and 30+ industry speakers.',
  },
]

export const education = {
  school: 'Princeton University',
  degree: 'B.S.E. in Computer Science, Minor in Finance',
  honors: 'cum laude',
  years: 'Sep 2022 - May 2026',
  thesis: 'Email Digests as an Interface for Intentional Social Media Consumption',
  coursework: [
    {
      group: 'Computer science & AI',
      items: [
        'Computational Models of Cognition',
        'Machine Learning',
        'Computer Vision',
        'Intelligent Robotics',
        'Autonomous Fabrication',
        'Advanced Programming Techniques',
        'Algorithms & Data Structures',
        'Graph Theory',
        'Computer System Design',
      ],
    },
    {
      group: 'Interdisciplinary',
      items: ['Computational Biology', 'Economics & Computation', 'Decentralized Finance'],
    },
  ],
}

export type Project = {
  title: string
  kind: string
  dates: string
  description: string
  stack: string[]
  demo?: string
  repo?: string
  image?: string
  stat?: { value: string; label: string }
}

export const projects: Project[] = [
  {
    title: 'Orange & Blackjack',
    kind: 'Blockchain',
    dates: 'Spring 2025',
    description:
      'Blackjack with no casino in the middle. Solidity contracts handle LUSD betting, gameplay, and payouts on-chain, with a React frontend, MetaMask sign-in, and a live leaderboard. Built by a five-person team.',
    stack: ['Solidity', 'Web3', 'React', 'Ethers.js'],
    demo: 'https://orangeblackjack.netlify.app',
    repo: 'https://github.com/sandyzyn/orange-blackjack',
    image: '/work/orange-blackjack.jpg',
  },
  {
    title: 'Pantry 2 Plate',
    kind: 'Full stack',
    dates: 'Fall 2024',
    description:
      "Enter what's in your pantry and get recipes back, filtered by cooking time, skill level, and dietary needs. Recipe data comes from custom scrapers.",
    stack: ['Python', 'Flask', 'React', 'MongoDB', 'Selenium'],
    demo: 'https://pantry-2-plate.onrender.com',
    repo: 'https://github.com/kaylaxu15/pantry_2_plate',
    stat: { value: '6,000+', label: 'recipes searchable' },
  },
]

export const publication = {
  venue: 'ACM CSCW 2026 · Poster',
  date: 'October 2026',
  title: 'How Children Collaborate within Programmable AR Environments with Co-Located Collaborative Features',
  authors: ['Romina Mahinpei', 'Diya Ajay Hundiwala', 'Sandy Zhang', 'Lana Glisic', 'Andrés Monroy-Hernández'],
  summary:
    'We extended Capybara, a programmable AR app for children, with co-located collaborative features and ran workshops with 9 children. Collaboration was mostly lightweight and implicit: parallel play with social awareness, iterative remixing, and spontaneous peer support.',
  url: 'https://doi.org/10.1145/3785651.3831503',
  arxiv: 'https://arxiv.org/abs/2608.11442',
}

export const inPreparation = {
  venue: 'ACM CHI Extended Abstracts · Poster',
  title: 'Email Digests as a Delivery Interface for Intentional Social Media Consumption',
  authors: ['Sandy Zhang', 'Romina Mahinpei', 'Andrés Monroy-Hernández'],
  summary:
    'A digest layer that turns Bluesky feeds into finite, periodic newsletters using LLM-based curation, studied in a multi-week field study with 17 participants. Also my senior thesis.',
}

export type ResearchItem = {
  title: string
  meta: string
  description: string
  image?: string
  links: { label: string; href: string; kind: 'pdf' | 'github' | 'plain' }[]
}

export const csResearch: ResearchItem[] = [
  {
    title: 'Few-Shot Calorie-Aware Snack Detection',
    meta: 'Computer vision project · Fall 2025',
    description:
      'Implemented YOLOv1 from scratch and fine-tuned YOLOv12 on a custom 7-class snack dataset, reaching 81.7% mAP@50. Per-instance detection had 55% lower calorie error than Gemini 2.5 Flash.',
    image: '/work/cos429-paper.jpg',
    links: [
      { label: 'Paper', href: '/projects/COS_429_Final.pdf', kind: 'pdf' },
      { label: 'GitHub', href: 'https://github.com/sandyzyn/casd', kind: 'github' },
    ],
  },
  {
    title: 'On-Chain Blackjack: Verifiable Fairness in Decentralized Games',
    meta: 'Princeton DeCenter Spring Conference poster · Spring 2025',
    description:
      'The research behind Orange & Blackjack: a stateless player-vs-dealer contract that cuts gas cost while keeping every outcome auditable.',
    image: '/work/ece473-poster.jpg',
    links: [{ label: 'Poster', href: '/projects/ECE473_ConferencePoster.pdf', kind: 'pdf' }],
  },
]

export const bioResearch: ResearchItem[] = [
  {
    title: 'Comparative Analysis of Computational gRNA Design Tools for CRISPR',
    meta: 'Independent research report · Fall 2024',
    description:
      'Advised by Prof. Yuri Pritykin. A comparison of gRNA design software for CRISPR applications targeting the orco gene in honey bees.',
    links: [{ label: 'Report', href: '/projects/written_final_report.pdf', kind: 'pdf' }],
  },
  {
    title: 'Beta-Lactamase Research',
    meta: 'Lab research · 2021 - 2022',
    description: 'Studies of the beta-lactamase enzyme and the mechanisms behind antibiotic resistance.',
    links: [
      { label: 'Research', href: '/projects/Chomet_Zhang_Sandy.pptx.pdf', kind: 'plain' },
      { label: 'EMBL', href: '/projects/Beta-Lactamase-Poster-10-11-21.pdf', kind: 'plain' },
      { label: 'ASM Pt 1', href: '/projects/SheuliPoster-3-22.pdf', kind: 'plain' },
      { label: 'ASM Pt 2', href: '/projects/Texas-ASM-Poster-final-11-3a-21.pdf', kind: 'plain' },
    ],
  },
]
