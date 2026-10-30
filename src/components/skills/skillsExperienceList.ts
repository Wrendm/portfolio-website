export type HardSkillGroup = {
  category: string;
  items: string[];
  projects?: string[];
};

export type ExperienceEntry = {
  title: string;
  org: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
  projects?: string[];
  githubLink?: string;
};

export type SoftSkill = {
  title: string;
  evidence: string;
  projects?: string[];
};

export type EducationEntry = {
  degree: string;
  school: string;
  focus: string;
  coursework: string[];
};

type SkillsData = {
  hard: HardSkillGroup[];
  experience: ExperienceEntry[];
  soft: SoftSkill[];
  education: EducationEntry[];
};

export const skillsData: SkillsData = {
  hard: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "PHP", "SQL", "C", "C++", "Python"], projects: ["RACC", "The End Times", "Seeds of Sage"] },
    { category: "Frontend", items: ["React", "Next.js", "HTML5", "CSS", "Bootstrap"], projects: ["The End Times"] },
    { category: "Backend", items: ["Node.js", "Express", "PHP", "REST APIs"], projects: ["The End Times", "Seeds of Sage"] },
    { category: "Databases", items: ["MySQL", "MongoDB"], projects: ["Seeds of Sage", "The End Times"] },
    { category: "Tools", items: ["Git", "WordPress"], projects: ["RACC"] },
    { category: 'Testing', items: ['Jest', 'Supertest', 'API integration testing', 'Authentication and rate-limit testing'], projects: ['The End Times'] },
    { category: 'Content & Communications', items: ['Copywriting', 'Content planning', 'Content research', 'Newsletter', 'Social media'], projects: ['RACC'] },
    { category: 'Design', items: ['Graphic design', 'Social media graphics', 'Web and Mobile App UI', 'Personal art practice', 'Photoshop', 'Canva'], projects: ['RACC', 'The End Times'] },
  ],

  experience: [
    {
      title: "Web Developer",
      org: "Regional Arts & Culture Council",
      location: "Portland, OR",
      dates: "Sep 2023 – Present",
      summary: 'I joined as a contractor to refresh the WordPress site and organize a decade of content, and grew into the organization\'s only communications staff. I maintain the site and handle design, copy, and content across the website, newsletter, and social media.',
      highlights: [
        'Reorganized and rewrote site content to match the organization\'s current state through years of continuous, major organizational change, including multiple homepage redesigns',
        'Overhauled the UI/UX of the community listing board and grantee event calendars, converting listings to a calendar, revising submission forms based on user feedback, and integrating the new Cruncho API',
        'Created graphics and maintained a consistent brand identity across the website, newsletter, and social media',
        'Wrote copy and planned content across those channels, researching material from disorganized internal archives and consulting with team members',
        'Built a new WordPress theme from the _s starter, replacing a legacy theme on a deprecated PHP version',
        'Cut hosting usage from 110% to 35% of the data limit',
      ],
      projects: ["RACC"],
    },
    {
      title: "Frontend Developer (Volunteer)",
      org: "Code PDX",
      location: "Portland, OR",
      dates: "Sep 2026 – Present",
      summary: 'Volunteer frontend work on open-source civic technology projects for the Portland community.',
      highlights: [
        "Build frontend features and improve usability and consistency in a Next.js, React, and TypeScript codebase for Portland-area civic technology",
        "Work through Git-based workflows, issue tracking, and code review with other volunteers",
      ],
    },
    {
      title: 'UI Design Consultant',
      org: 'Ghidora Games',
      location: 'Remote',
      dates: 'March 2026',
      summary: 'UI consulting on an unreleased mobile game, covering its interface elements, menus, and brand color palette.',
      highlights: [
        'Designed UI elements for an unreleased mobile game, including in-game elements and menu items',
        'Created the color palette for the game\'s branding',
      ],
      githubLink: 'https://github.com/GhidoraGames/Boom-Balls',
    },
  ],

  education: [
    {
      degree: "B.S. Computer and Information Science",
      school: "University of Oregon",
      focus: "Software Engineering",
      coursework: ["Data Structures & Algorithms", "Software Engineering Methodology", "Secure Software Development", "User Interface", "Object-Oriented Programming", "Operating Systems", "Web Development", "Principles of Programming Languages", "Multi-Agent Systems and Game Theory"],
    },
  ],
  soft: [
    {
      title: 'Stakeholder Need Assessment',
      evidence: 'I meet stakeholders where they are and translate what they say into what they need. Much of the organization\'s knowledge lived in individual staff members\' heads, and my colleagues were stretched thin, so I tied every request for information to the goals of the project: how it contributes to the community and the creative economy. The same translation drives the site-wide copy rewrite I am leading, which speaks to funders, project partners, artists, and community members in terms of what we do and why we are best positioned to do it.',
    },
    {
      title: 'User Centered Design',
      evidence: 'I organize sites around what visitors are trying to do. At RACC, I restructured the navigation from three broad sections into four organized around those tasks, converted the popular community listings from a list to a calendar, and revised the submission forms based on user feedback.',
    },
    {
      title: 'Priority Assessment',
      evidence: 'When the original theme became mission critical, I set my other duties aside for several months to replace it. When the organization\'s web presence had spread across five-plus domains, I advised on which were needed and which could be replaced by content on the main site or a shared drive for board files.',
    },
    {
      title: 'Critical Use of AI',
      evidence: 'I use AI tools as a learning and working aid, not a replacement for understanding. I read suggestions critically, check them against documentation and my existing codebase, and push back when they add complexity the problem does not need. [Add one concrete example.]',
    },
  ],
};
