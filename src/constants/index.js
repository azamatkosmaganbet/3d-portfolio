/* eslint-disable no-unused-vars */
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ddw,
  sdu,
  attractor,
  nextjs
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Next JS",
    icon: nextjs,
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

const experiences = [
  {
    title: "Bachelor Information Technology",
    company_name: "Suleiman Demirel University",
    icon: sdu,
    iconBg: "#fff",
    date: "Sep 2020 - May 2024",
    points: [
      "Java, Python, SQL and other related technologies.",
      "Information Systems Entrepreneurship, Design for production, Business Process Modeling, Self-development in computer science",
      "Basic of DevOps, Frontend, Backend, Database",
      "Group projects with other students",
    ],
  },
  {
    title: "Full Stack Developer (Student)",
    company_name: "Attractor school",
    icon: attractor,
    iconBg: "#383E56",
    date: "Nov 2021 - Feb 2023",
    points: [
      "HTML, CSS: Grid, Flexbox, Table, Sass, Responsive Design, Bootstrap, Forms",
      "Javascript: Algorithms, Functions, Git, Typescript, OOP, Inheritance, Patterns, JQuery, AJAX, Local Storage, Interfaces and Types, Promises, Issue Tracker, Closure, Async / await",
      "React: Npm, Jsx, CRA, Project Structure, Hooks, Life Cycle, Layout, Rest, React Router, Firebase, Redux, React Native, ",
      "Node JS: HTTP, Express Routing, Rest API, CORS, MongoDB, Prop-types, SQL, Authentication, Websoket, Roles, Docker, Jenkins, ",
      "ESDP: We worked with a team with a mentor and a real client. I tried myself as a captain analyst and developer"
    ],
  },
  {
    title: "React.js / Node.js Developer",
    company_name: "DDW GROUP",
    icon: ddw,
    iconBg: "#383E56",
    date: "Febrary 2023 - Present",
    points: [
      "Developing and maintaining online stores using React.js / Next.js and other related technologies.",
      "Development of an ERP system for managing vacation programs using React JS / Node JS",
      "A small project on React Native that scans a barcode and sends it to the database",
      "Order tracking board where customers can see their order",
    ],
  },
  {
    title: "Master's degree",
    company_name: "Suleiman Demirel University (Maybe)",
    icon: sdu,
    iconBg: "#E6DEDD",
    date: "Future (2024 September)",
    points: [
      "Just for the future",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Soon...",
    name: "Name Surname",
    designation: "CFO",
    company: "Company name",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Soon...",
    name: "Name Surname",
    designation: "COO",
    company: "Company name",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Soon...",
    name: "Name Surname",
    designation: "CTO",
    company: "Company name",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Soon...",
    description:
      "Soon...",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Soon...",
    description:
      "Soon...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Soon...",
    description:
      "Soon...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
