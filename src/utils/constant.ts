import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si';
import { IExperience, INavItem, IProject, ISocialMedia } from './interface';

export const NAV_ITEMS: INavItem[] = [
  {
    section: 'about',
  },
  {
    section: 'experience',
  },
  {
    section: 'projects',
  },
  {
    section: 'articles',
  },
];

export const SOCIAL_MEDIA: ISocialMedia[] = [
  {
    link: 'https://www.linkedin.com/in/perdana-putro-harwanto-1515a5245/',
    image: SiLinkedin,
    title: 'LinkedIn',
  },
  {
    link: 'https://github.com/perdanaph',
    image: SiGithub,
    title: 'GitHub',
  },
  {
    link: 'https://www.instagram.com/perdanaph_/',
    image: SiInstagram,
    title: 'Instagram',
  },
];

export const EXPERIENCES: IExperience[] = [
  {
    position: 'Backend Web Development',
    type: 'Bootcamp',
    company: 'HACKTIV8: PT HACKTIVATE TEKNOLOGI INDONESIA.',
    link: 'www.hacktiv8.com',
    date: 'Aug 2022 - Des 2022',
    jobDesc: [
      'Developed a production-ready RESTful API using Node.js and Express.js, implementing industry best practices.',
      'Designed and implemented secure authentication system using JWT tokens.',
      'Implemented database design and management using PostgreSQL.',
      'Applied Test-Driven Development (TDD) principles using Jest/Mocha].',
      'Understand and implement software architecture principles, including design patterns, clean programming, and SOLID principles.',
    ],
    techStack: ['Express JS', 'PostgreSQL', 'Node JS', 'Jest'],
  },
  {
    position: 'Frontend Web Development',
    type: 'Bootcamp',
    company: 'SKILVUL PT. IMPACTBYTE TEKNOLOGI INDONESIA ',
    link: 'https://skilvul.com/',
    date: 'Jan 2023 - Jun 2023',
    jobDesc: [
      'Hard Skills: design for every event, Developed web site organization.',
      'Product Development: product strategy; interaction design; visual direction; UI design; interactive prototyping and validation.',
      'Product Innovation: Danone; ideation; validation and prototyping, developing.',
      'Built a responsive web application using React.js and TailwindCSS.',
      'Implemented state management using Redux.',
      'Integrated with external APIs and handled asynchronous operations.',
    ],
    techStack: ['Node JS', 'ReactJS', 'Axios', 'TailwindCSS', 'Redux'],
  },
  {
    position: 'Fullstack Developer',
    type: 'Freelance',
    company: 'Build and Service',
    link: 'https://buildandservice.vercel.app/',
    date: 'Dec, 2023 - Present',
    jobDesc: [
      'Created web or mobile application.',
      'Responsible for meeting with clients to discuss project needs.',
      'Designing database and project structure.',
      'Deployment projects.',
      'Ensure that all programs that have been carried out run well and in accordance with the standards set.',
    ],
    techStack: [
      'Figma',
      'HTML/CSS',
      'PHP',
      'Next JS',
      'Express JS',
      'Python',
      'Flask',
      'Laravel',
      'MySQL',
      'Flutter',
      'React Native',
    ],
  },
];

export const PROJECTS: IProject[] = [
  {
    name: 'Gading Bakery',
    link: 'https://gading-bakery.com/',
    position: 'Fullstack Developer',
    description:
      'Mobile application of goods management and cashier for bread sales at Gading Bakery, Gresik (East Java, Indonesia).',
    jobDesc: [
      'Design, develop, and maintain APIs, ensuring optimal performance application.',
      'Develop robust and scalable APIs for seamless communication between the front-end and back-end systems.',
      'Perform APIs deployment process to production environment.',
      'Create an app user interface using flutter.',
      'Consume APIs with flutter.',
      'Integrate the Print Invoice Tool with the App.',
    ],
    techStack: ['Laravel', 'MySQL', 'Flutter'],
  },
  {
    name: 'Kharisma Ilham Jaya',
    link: 'https://kharisma-ilham-jaya.com/',
    position: 'Fullstack Developer',
    description: 'Company profile website for export-import business.',
    jobDesc: [
      'Created responsive Website',
      'Implemented multilingual support and content management system.',
      'Optimized for search engines and performance.',
    ],
    techStack: ['Bootstrap', 'Laravel', 'MySQL'],
  },
  {
    name: 'Abonie Music Digital',
    link: '#',
    position: 'Fullstack Developer',
    description:
      'Abonie Media Group is a platform for independent musicians to distribute, promote, and develop their work in the global music industry.',
    jobDesc: [
      'Designed and developed company landing page.',
      'Built integrated systems for short links, bio links, and music pre-save functionality.',
      'Optimized for search engines and performance.',
    ],
    techStack: ['Bootstrap', 'Laravel', 'MySQL', 'TailwindCSS', 'ReactJS'],
  },
];
