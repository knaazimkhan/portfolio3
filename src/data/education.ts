import { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "1",
    institution: "Jamia Millia Islamia University",
    logo: "/education/jamia.jpeg",
    degree: "Master's Degree",
    field: "Computer Science",
    location: "New Delhi, India",
    startDate: "2013",
    endDate: "2016",
    description: [
      "Master of Computer Application (MCA) is a professional Master's degree course designated to give practical as well as theoretical training to the students.",
      "This course has been designed and launched to fulfil the demands of qualified IT professionals.",
    ],
    activities: [],
    achievements: [],
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