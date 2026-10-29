export const skillsData = {
  hard: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "PHP", "SQL", "C", "C++", "Python"], projects: ["RACC", "The End Times", "Seeds of Sage"] },
    { category: "Frontend", items: ["React", "Next.js", "HTML5", "CSS", "Bootstrap"], projects: ["The End Times"] },
    { category: "Backend", items: ["Node.js", "Express", "PHP", "REST APIs"], projects: ["The End Times", "Seeds of Sage"] },
    { category: "Databases", items: ["MySQL", "MongoDB"], projects: ["Seeds of Sage", "The End Times"] },
    { category: "Tools", items: ["Git", "WordPress"], projects: ["RACC"] },
    { category: 'Design', items: ['Graphic design', 'Social media graphics', 'Web and Mobile App UI', 'Personal art practice', 'Photoshop', 'Canva'], projects: ['RACC', 'The End Times'] },
  ],

  experience: [
    {
      title: "Web Developer",
      org: "Regional Arts & Culture Council",
      location: "Portland, OR",
      dates: "Sep 2023 – Present",
      highlights: [
        "Built a new WordPress theme from the _s starter, replacing a legacy theme on a deprecated PHP version",
        "Converted community listings to a calendar and revised submission forms based on user feedback",
        "Cut hosting usage from 110% to 35% of the data limit",
        "Translate requirements from non-technical stakeholders into working solutions and explain technical decisions to both technical and non-technical audiences",
      ],
      projects: ["RACC"],
    },
    {
      title: "Frontend Developer (Volunteer)",
      org: "Code PDX",
      location: "Portland, OR",
      dates: "Sep 2026 – Present",
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
