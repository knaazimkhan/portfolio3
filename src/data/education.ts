import { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "1",
    institution: "University of California, Berkeley",
    logo: "/education/berkeley.png",
    degree: "Master of Science",
    field: "Computer Science",
    date: "2019 - 2021",
    location: "Berkeley, CA",
    description: "Specialized in Software Engineering and Artificial Intelligence. Conducted research in Human-Computer Interaction and Modern Web Technologies.",
    achievements: [
      "4.0 GPA",
      "Research Assistant",
      "Teaching Assistant",
    ],
  },
  {
    id: "2",
    institution: "Stanford University",
    logo: "/education/stanford.png",
    degree: "Bachelor of Science",
    field: "Computer Science",
    date: "2015 - 2019",
    location: "Stanford, CA",
    description: "Focused on Software Development and Web Technologies. Participated in various hackathons and coding competitions.",
    achievements: [
      "Dean's List",
      "Hackathon Winner",
      "CS Club President",
    ],
  },
]; 