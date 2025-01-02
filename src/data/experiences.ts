import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    startDate: "2022-01",
    endDate: "Present",
    description: [
      "Led the development of a high-performance web application using Next.js and TypeScript",
      "Implemented responsive designs and animations using Tailwind CSS and Framer Motion",
      "Mentored junior developers and conducted code reviews",
      "Optimized application performance and improved Core Web Vitals scores",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    logo: "/companies/company1.png",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "InnovateLabs",
    location: "New York, NY",
    type: "Full-time",
    startDate: "2020-03",
    endDate: "2021-12",
    description: [
      "Developed responsive web applications using React and modern JavaScript",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Integrated RESTful APIs and implemented state management solutions",
      "Participated in agile development processes and sprint planning",
    ],
    skills: ["React", "JavaScript", "CSS3", "HTML5", "Redux", "REST APIs"],
    logo: "/companies/company2.png",
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "WebTech Studios",
    location: "Remote",
    type: "Contract",
    startDate: "2019-06",
    endDate: "2020-02",
    description: [
      "Assisted in developing and maintaining client websites",
      "Learned modern web development practices and tools",
      "Fixed bugs and implemented new features for existing projects",
      "Gained experience with version control and collaborative development",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Git", "WordPress"],
    logo: "/companies/company3.png",
  },
  {
    id: "4",
    title: "Software Engineering Intern",
    company: "StartupBoost",
    location: "Boston, MA",
    type: "Internship",
    startDate: "2019-01",
    endDate: "2019-05",
    description: [
      "Assisted in developing and maintaining client websites",
      "Learned modern web development practices and tools",
      "Fixed bugs and implemented new features for existing projects",
      "Gained experience with version control and collaborative development",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Git", "WordPress"],
    logo: "/companies/company3.png",
  },
]; 