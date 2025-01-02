import type { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "edu1",
    school: "Stanford University",
    degree: "Master of Science",
    field: "Computer Science",
    location: "Stanford, CA",
    startDate: "2018",
    endDate: "2020",
    grade: "3.9 GPA",
    activities: [
      "Teaching Assistant for Web Development course",
      "Member of Computer Science Student Association",
      "Research Assistant in Human-Computer Interaction Lab",
    ],
    achievements: [
      "Dean's List for Academic Excellence",
      "Best Graduate Research Project Award",
      "Published paper on Web Accessibility",
    ],
    description: [
      "Specialized in Human-Computer Interaction and Web Technologies",
      "Conducted research on improving web accessibility for visually impaired users",
      "Developed innovative solutions for educational technology platforms",
    ],
    logo: "/education/stanford.png",
  },
  {
    id: "edu2",
    school: "University of California, Berkeley",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "Berkeley, CA",
    startDate: "2014",
    endDate: "2018",
    grade: "3.8 GPA",
    activities: [
      "Web Development Club President",
      "Hackathon Organizer",
      "Undergraduate Research Assistant",
    ],
    achievements: [
      "Graduated with Honors",
      "First Place in University Hackathon",
      "Outstanding Undergraduate Research Award",
    ],
    description: [
      "Focused on Software Engineering and Web Development",
      "Led team projects in full-stack web development",
      "Completed internships at leading tech companies",
    ],
    logo: "/education/berkeley.png",
  },
]; 