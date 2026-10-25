export const skillsData = {
  hard: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "PHP", "SQL"], projects: ["RACC", "The End Times", "Seeds of Sage"] },
    { category: "Frontend", items: ["React", "Next.js", "HTML5", "CSS", "Bootstrap"], projects: ["The End Times"] },
    { category: "Backend", items: ["Node.js", "Express", "PHP", "REST APIs"], projects: ["The End Times", "Seeds of Sage"] },
    { category: "Databases", items: ["MySQL", "MongoDB"], projects: ["Seeds of Sage", "The End Times"] },
    { category: "Tools", items: ["Git", "WordPress"], projects: ["RACC"] },
    { category: "Coursework", items: ["C++", "C", "Python", "Data Structures & Algorithms", "Operating Systems"] },
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
  ],

  education: [
    {
      degree: "B.S. Computer and Information Science",
      school: "University of Oregon",
      focus: "Software Engineering",
      coursework: ["Data Structures & Algorithms", "Software Engineering Methodology", "Secure Software Development", "User Interface", "Object-Oriented Programming", "Operating Systems", "Web Development", "Principles of Programming Languages", "Multi-Agent Systems and Game Theory"],
    },
  ],

  soft: [], // TODO
};
