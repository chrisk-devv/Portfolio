import { About, Person, Social } from "@/types";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const repoBasePath = rawBasePath ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}` : "";
const withBasePath = (path: string) =>
  repoBasePath && path.startsWith("/") ? `${repoBasePath}${path}` : path;
const avatarImagePath = "/images/porfilepic.jpg";

const person: Person = {
  firstName: "Chris",
  lastName: "K",
  name: "Chris K",
  role: "Web Developer",
  avatar: withBasePath(avatarImagePath),
  email: "chrisk.dev@outlook.com",
  location: "Asia/Beirut",
  languages: ["Arabic", "English", "French"],
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chris-k-158485279",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const about: About = {
  path: "/",
  label: "Profile",
  title: person.name,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <strong>Full-Stack Web Developer</strong> specializing in <strong>Laravel</strong>,{" "}
        <strong>React</strong>, and <strong>MySQL</strong>, with professional experience in a
        software development company building scalable web applications.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Aplimedia Offshore S.A.L",
        timeframe: "Dec 2025 - Present",
        role: "Software Developer",
        achievements: [
          <>
            Developed and maintained large-scale web applications using Laravel, React, and MySQL,
            ensuring high performance, scalability, and clean code practices.
          </>,
          <>
            Collaborated with cross-functional teams to design backend APIs,
            build responsive frontend interfaces, and optimize database queries for reliability and efficiency.
          </>,
        ],
        images: [
          {
            src: withBasePath("/images/projects/project-01/aplimediaLogo.jpg"),
            alt: "Aplimedia Offshore S.A.L",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sodetel ISP",
        timeframe: "Jan 2024 - Feb 2026",
        role: "Technical Support Specialist",
        achievements: [
          <>
            Troubleshooted DSL, Fiber, 4G Plus, and Connect services. Resolving connectivity issues, optimizing network performance, providing remote support.
          </>,
          <>
            Identified and escalated major technical issues to engeneering and outdoor support teams for immediate resolution.
          </>,
        ],
        images: [
          {
            src: withBasePath("/images/projects/project-01/sodetelLogo.jpg"),
            alt: "Sodetel ISP",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "AUL - Arts, Sciences, and Technology University In Lebanon",
        description: <>Bachelor degree in Computer Science.</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        title: "IT Specialist - HTML and CSS",
        link: "https://www.credly.com/badges/bac36811-53f7-47b8-8cf9-5381e61891ef/linked_in?t=sg3npj",
        timeframe: "Jul 2024",
        issuer: "Certiport - A Pearson VUE Business",
        image: {
          src: withBasePath("/images/projects/project-01/ITS-Badge.jpg"),
          alt: "IT Specialist - HTML and CSS badge",
          width: 8,
          height: 8,
        },
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "React",
        description: <>Building responsive frontends and reusable UI components.</>,
        tags: [
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
            icon: "react",
          },
        ],
      },
      {
        title: "Laravel",
        description: <>Developing backend applications and APIs with Laravel.</>,
        tags: [
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
        ],
      },
      {
        title: "MySQL",
        description: <>Designing and managing relational databases for web applications.</>,
        tags: [
          {
            name: "MySQL",
            icon: "mysql",
          },
        ],
      },
    ],
  },
};

export { person, social, about };
export { avatarImagePath };
