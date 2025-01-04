import { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    id: "1",
    role: "Software Engineer",
    company: "Smart Chain",
    logo: "/companies/smart-chain.jpeg",
    date: "2022 - Present",
    location: "Al Barsha, Dubai",
    // description: "Smart Chain Information Technology Consulting Ltd. stands out as a pioneering tech-driven company specializing in the creation of software platforms tailored to businesses of all sizes.",
    description: "Led the development of multiple high-impact web applications using React and Next.js. Implemented modern UI/UX practices and improved performance metrics by 40%.",
    technologies: ["Next.js", "React", "TypeScript", "Payload CMS", "TailwindCSS"],
    responsibilities: [
      "Led a team of 5 frontend developers in developing and maintaining multiple web applications",
      "Architected and implemented scalable frontend solutions using React and Next.js",
      "Established coding standards and best practices for the frontend team",
      "Conducted code reviews and mentored junior developers",
      "Optimized application performance and reduced load times by 40%",
      "Developed new features in the client-facing vertical",
      "Organized cross-team guilds to solve engineering issues related to projects",
      "Mentored entry-level and new software engineers across the organisation",
      "Led migration of legacy systems to modern tech stack",
      "Collaborated with cross-functional teams to deliver high-quality solutions"
    ],
    achievements: [
      "Successfully delivered 3 major projects ahead of schedule",
      "Reduced bundle size by 60% through code splitting and lazy loading",
      "Implemented automated testing that increased code coverage to 85%",
      "Successfully migrated key products from legacy monolith to modern Next.js with Payload headless CMS based platform",
      "Improved development efficiency through modern tech stack adoption",
      "Enhanced team productivity through mentorship and knowledge sharing"
    ]
  },
  {
    id: "2",
    role: "Software Engineer",
    company: "Enthusiast Global Group",
    logo: "/companies/enthusiast.jpeg",
    date: "2020 - 2022",
    location: "Noida, India",
    description: "Enthusiast Global Group is the India arm of the Beckett Group known for building the best products and services on the planet for collectors.",
    technologies: ["React", "Node.js", "TypeScript", "Stripe", "PayPal", "Klaviyo"],
    responsibilities: [
      "Led development of Dragon Shield web shop for Europe and USA markets",
      "Implemented and maintained full-stack features using React and Node.js",
      "Integrated multiple payment gateways including Stripe and PayPal",
      "Implemented Klaviyo for marketing automation and customer engagement",
      "Collaborated with international teams across different time zones"
    ],
    achievements: [
      "Successfully launched Dragon Shield web shop in multiple regions",
      "Streamlined payment processing with multiple gateway integrations",
      "Improved customer engagement through Klaviyo integration"
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