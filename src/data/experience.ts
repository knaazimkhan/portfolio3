import { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    logo: "/companies/company1.png",
    date: "2021 - Present",
    location: "San Francisco, CA",
    description: "Led the development of multiple high-impact web applications using React and Next.js. Implemented modern UI/UX practices and improved performance metrics by 40%.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "GraphQL"],
    responsibilities: [
      "Led a team of 5 frontend developers in developing and maintaining multiple web applications",
      "Architected and implemented scalable frontend solutions using React and Next.js",
      "Established coding standards and best practices for the frontend team",
      "Conducted code reviews and mentored junior developers",
      "Optimized application performance and reduced load times by 40%"
    ],
    achievements: [
      "Successfully delivered 3 major projects ahead of schedule",
      "Reduced bundle size by 60% through code splitting and lazy loading",
      "Implemented automated testing that increased code coverage to 85%"
    ]
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Digital Solutions",
    logo: "/companies/company2.png",
    date: "2019 - 2021",
    location: "New York, NY",
    description: "Developed and maintained full-stack applications using Node.js and React. Collaborated with cross-functional teams to deliver features on time.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "AWS"],
    responsibilities: [
      "Developed and maintained full-stack web applications using React and Node.js",
      "Designed and implemented RESTful APIs and database schemas",
      "Integrated third-party services and APIs",
      "Collaborated with UX designers to implement responsive designs",
      "Managed AWS infrastructure and deployments"
    ],
    achievements: [
      "Reduced API response time by 50% through caching and optimization",
      "Implemented CI/CD pipeline that reduced deployment time by 70%",
      "Developed reusable component library used across multiple projects"
    ]
  },
  {
    id: "3",
    role: "Frontend Developer",
    company: "Creative Agency",
    logo: "/companies/company3.png",
    date: "2017 - 2019",
    location: "Los Angeles, CA",
    description: "Created responsive and interactive web applications. Worked closely with designers to implement pixel-perfect interfaces.",
    technologies: ["JavaScript", "React", "SASS", "Redux", "Webpack"],
    responsibilities: [
      "Developed responsive and interactive user interfaces using React",
      "Implemented state management solutions using Redux",
      "Created reusable components and maintained component documentation",
      "Optimized website performance and accessibility",
      "Collaborated with designers to ensure pixel-perfect implementation"
    ],
    achievements: [
      "Improved Google Lighthouse score from 65 to 95",
      "Reduced page load time by 30% through optimization techniques",
      "Created a design system that improved development efficiency by 40%"
    ]
  },
]; 