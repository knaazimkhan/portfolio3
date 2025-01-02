import { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "1",
    institution: "University of California, Berkeley",
    logo: "/education/berkeley.png",
    degree: "Master of Science",
    field: "Computer Science",
    location: "Berkeley, CA",
    startDate: "2019",
    endDate: "2021",
    grade: "4.0 GPA",
    description: [
      "Specialized in Software Engineering and Artificial Intelligence",
      "Conducted research in Human-Computer Interaction",
      "Focused on Modern Web Technologies and Distributed Systems",
    ],
    activities: [
      "Teaching Assistant for Web Development course",
      "Member of Computer Science Student Association",
      "Research Assistant in HCI Lab",
    ],
    achievements: [
      "Outstanding Graduate Student Award",
      "Research Publication in HCI Conference",
      "Dean's List for Academic Excellence",
    ],
  },
  {
    id: "2",
    institution: "Stanford University",
    logo: "/education/stanford.png",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "Stanford, CA",
    startDate: "2015",
    endDate: "2019",
    grade: "3.9 GPA",
    description: [
      "Focused on Software Development and Web Technologies",
      "Specialized in User Interface Design",
      "Completed advanced coursework in Algorithms",
    ],
    activities: [
      "President of CS Club",
      "Hackathon Organizer",
      "Peer Tutor for Programming Courses",
    ],
    achievements: [
      "First Place in University Hackathon",
      "Best Undergraduate Project Award",
      "Summer Research Fellowship",
    ],
  },
]; 