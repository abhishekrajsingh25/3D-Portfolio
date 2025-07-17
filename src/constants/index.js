import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  internship,
  graduate,
  doctor,
  blog,
  chatapp,
  threejs,
  htmlLogo,
  cssLogo,
  javascriptLogo,
  reactjsLogo,
  reduxLogo,
  nextjsLogo,
  tailwindcssLogo,
  materialuiLogo,
  bootstrapLogo,
  springbootLogo,
  nodejsLogo,
  expressjsLogo,
  mysqlLogo,
  mongodbLogo,
  cLogo,
  cppLogo,
  javaLogo,
  pythonLogo,
  typescriptLogo,
  gitLogo,
  githubLogo,
  vscodeLogo,
  postmanLogo,
  mcLogo,
  figmaLogo,
  netlifyLogo,
  vercelLogo,
  postgreLogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skill",
  },
  {
    id: "projects",
    title: "Project",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Specbits",
    icon: internship,
    iconBg: "#E6DEDD",
    date: "May 2024 - Oct 2024",
    points: [
      "Designed and developed a full-stack Learning Management System (LMS) website using the MERN stack as part of a two-member team",
      "Implemented and deployed a robust admin dashboard with dynamic sales revenue analytics and interactive data visualizations using charts and graphs. ",
      "Assisted in designing RESTful APIs and integrating them with responsive front end interfaces.",
      "Contributed to UI development and testing to ensure responsiveness and cross browser compatibility.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Technology - BTECH (Computer Science)",
    company_name: "GITA Autonomous College, Bhubaneswar",
    icon: graduate,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - present",
    points: [
      "I have completed my Bachelor's degree (BTECH) in Computer Science from GITA Autonomous College, Bhubaneswar.",
      "During my time at GITA, I gained a strong foundation in programming, software development, and computer science principles.",
      "I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.",
      "My time at GITA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    ],
  },
];

const projects = [
  {
    name: "Doctor Appointment Booking System",
    description:
      "Developed a full-stack doctor booking app with MERN, featuring dashboards for doctors and admins.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: doctor,
    source_code_link: "https://github.com/abhishekrajsingh25/Prescripto-Doctor",
    webapp: "https://prescripto-doctor-abhishek.vercel.app/",
  },
  {
    name: "Blog Application",
    description:
      "Built a full-stack blog app with Next.js, Prisma, and NeonDB, featuring SSR, secure auth with Clerk, and dynamic post management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/abhishekrajsingh25/ByteCode-Blog-App",
    webapp: "https://bytecode-blogapp-abhishekrajsingh.vercel.app/",
  },
  {
    name: "Real Time Chat Application",
    description:
      "Built a real-time chat app with MERN and Socket.IO, featuring file sharing, read receipts, and a user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link:
      "https://github.com/abhishekrajsingh25/QuickChat-Chat-App",
    webapp: "https://quickchat-chatapp-abhishek.vercel.app/",
  },
];

export { services, technologies, experiences, education, projects };
