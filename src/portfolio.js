const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'HP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Farhaan Patel',
  role: 'Fullstack Developer',
  description:
    'Experienced Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes. Bringing forth expertise in design, installation, testing and maintenance of web systems. Equipped with a diverse and promising skill set. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/farhaan-patel-4658ba237/',
    github: 'https://github.com/happi89',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Reddit',
    description:
      'Reddit Clone with posts, comments, up votes, downvotes, nested comments, Oauth, and subreddits',
    stack: [
      'NextJs',
      'TypeScript',
      'TRPC',
      'TailwindCSS',
      'Prisma',
      'PostgreSQL',
      'React Query',
    ],
    sourceCode: 'https://github.com/happi89/reddit/tree/main',
    livePreview: 'https://reddit-happi89.vercel.app/',
  },
  {
    name: 'Library',
    description:
      'Library App that keeps track of your books With GraphQL Subscriptions',
    stack: ['React', 'NodeJS', 'Express', 'GraphQL', 'JWT', 'MongoDB'],
    sourceCode: 'https://github.com/happi89/library/tree/master',
    livePreview: 'https://library-ft54dv7br-happi89.vercel.app/',
  },
  {
    name: 'BlogList',
    description: 'BlogList App where users post blogs for others to view!',
    stack: ['React', 'NodeJS', 'ExpressJS', 'JWT', 'MongoDB'],
    sourceCode: 'https://github.com/happi89/blog-list-fullstack',
    livePreview: 'https://blog-list-fullstack-production.up.railway.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'TailwindCSS',
  'React',
  'Redux',
  'NextJS',
  'NodeJS',
  'ExpressJS',
  'GraphQL',
  'MongoDb',
  'PostgressSQL',
  'Git',
  'Jest',
  'Cypress',
  'React Native',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'farhaanpatel99@gmail.com',
}

export { header, about, projects, skills, contact }
