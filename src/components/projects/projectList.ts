export type Project = {
    id: number;
    image: string;
    alt: string;
    name: string;
    stack: string[];
    association: string;
    features: string[];
    challenge: string;
    outcome: string;
    descriptionBody: string;
    viewLink?: string;
    githubLink?: string;
};

export const projectList: Project[] = [
{
    id: 0,
    image:'/assets/racc.png',
    alt:'screenshot of RACC.orgs homepage',
    name:'Website for Regional Arts & Culture Council',
    stack:['Wordpress', 'php'],
    association:'Full-Time - Regional Arts & Culture Council',
    features: ['New WordPress theme built from the _s starter, replacing a legacy theme tied to a deprecated PHP version',
        'Community listings converted from a list to a calendar view',
        'Submission forms revised based on user feedback',
        'Content restructured to guide visitors from broad topics to what\'s relevant to them',
        'Site-wide copy rewrite focused on what RACC does and why it\'s the right organization to do it',
       ],
    challenge: 'For most of my three years at RACC, I patched an original theme built on an increasingly deprecated version of PHP. This year it became mission critical, and I set my other duties aside for several months to replace it. The deeper challenge was structural: thirty years of history had left the site with far too much content, spread across five-plus domains, with much of the organization\'s knowledge living in individual staff members\' heads. I restructured the site to funnel visitors from broad topics to what mattered to them, whether funders, partners, artists, or community members, and advised on which domains could be replaced by content on the main site or a shared drive for board files.',    
    outcome: 'Hosting usage dropped from 110% of the data limit to 35%, and a slow, overwhelming site became easier to navigate. What started as a contract to refresh a theme grew into a full-time role as RACC\'s sole communications staff, where I manage website content, social media, the newsletter, community listing submissions, and the public inbox. The biggest lesson: patching a failing foundation only postpones the problem, and starting clean sooner would have saved time in the long run.',
    descriptionBody:'I joined the Regional Arts & Culture Council as a contractor to refresh its WordPress site and bring order to a decade of content. Today I\'m their sole communications staff, responsible for the website, its content, and the organization\'s outward-facing communications.',
    viewLink:'https://racc.org'
},
{
    id: 1,
    image:'/assets/the-end-times.png',
    alt:'screenshot of The End Times',
    name:'The End Times',
    stack:['React', 'React Router', 'TypeScript', 'Express', 'Axios', 'NodeJS', 'MongoDB with Mongoose'],
    association:'Personal Project',
    descriptionBody: 'A full-stack art-sharing platform I built from scratch as an alternative to mainstream social media: a place to post creative work without ads, likes, or follower counts. It runs on a REST API with its own authentication and permissions, built with React, TypeScript, Express, and MongoDB.',
    features: ['REST API with JWT authentication, refresh tokens, and role-based access (admin vs. user)',
        'Ownership checks so users can only edit or delete their own posts',
        'Category system with image uploads on posts',
        'Rate limiting on authentication and post routes',
        'Admin dashboard for managing users, posts, and categories',
        'No likes, follower counts, or ads, by design',
    ],
    challenge: 'I wanted a place to share creative work as an experimental \'shout into the void\', free of metrics, with bios as the place to point people toward other platforms. On the technical side, I hardened the API with validation on every route, consistent response shapes, and a dedicated pass trying to break my own app. My biggest learning opportunities were maintaining consistent data shapes as I added features and learning about different strategies (and their drawbacks/advantages) for authentication.',
    outcome: 'Version one is deployed on Netlify, with audio support, read-endpoint rate limiting, and react-query still on the roadmap. I\'m now far more confident in React and Node. Early feedback from friends, that they felt their art \'isn\'t good enough\', taught me that removing metrics doesn\'t remove the pressure of being seen, and that\'s what I\'d design around next. I also want to add further customization options for user profiles.',    
    viewLink:'https://graceful-longma-d2fa65.netlify.app/',
    githubLink:'https://github.com/Wrendm/the-end-times'
},
{
    id: 2,
    image:'/assets/sos.png',
    alt:'Screenshot of Therapy Website',
    name:'Website for Seeds of Sage',
    stack:['PHP', 'MySQL'],
    association:'Contract Work',
    features: [
        'Homepage and content pages presenting the practice, her methodology, and her services',
        'Blog with posts stored in MySQL',
        'Admin login protecting the dashboard',
        'Admin dashboard where she can create, edit, and delete her own posts',
        'Contact form connected to a third-party form API',
    ],
    challenge:
        'Because my friend would maintain the site herself, I started by evaluating what her practice needed and designed around it: a clear homepage and a blog she could manage without me. Security was the biggest challenge, since an admin dashboard puts content editing behind a login. ',
    outcome:'She used the dashboard to run her blog on her own, and the few bugs that came up were resolved quickly. The original site is no longer live now that she has moved to Squarespace, so I revived it as a hosted demo with a database schema, seed data, and a README. Looking back, I\'d approach it differently today: I styled most pages with a one-off padding and margin system that made consistency hard, and I\'d use CSS variables and reusable React components to keep it maintainable.',     descriptionBody:'I built this site from scratch for a friend launching her therapy practice. She needed a professional web presence, and she also needed to be able to maintain it herself. She wanted her clients to be able to get to know her, her methodology, and her services. Skye also wanted to be able to publish blog posts. I created a basic PHP + HTML/CSS website including an admin dashboard which would allow her to create, edit, and delete posts.',
    viewLink:'https://therapy-practice.freedev.app/',
    githubLink:'https://github.com/Wrendm/SeedsOfSage'
},
];
