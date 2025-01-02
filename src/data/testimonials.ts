import { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    title: "CTO",
    company: "TechCorp Solutions",
    text: "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise helped us deliver our project ahead of schedule.",
    avatar: "/testimonials/avatar1.svg",
    location: "San Francisco, CA",
    date: "2024-01",
    rating: 5,
    projectName: "E-commerce Platform",
    projectUrl: "https://techcorp-solutions.com/projects/ecommerce"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    title: "Product Manager",
    company: "InnovateLabs",
    text: "Exceptional problem-solving skills and great communication. They consistently delivered high-quality code and were always ready to tackle new challenges.",
    avatar: "/testimonials/avatar2.svg",
    location: "New York, NY",
    date: "2023-12",
    rating: 5,
    projectName: "Task Management App"
  },
  {
    id: "3",
    name: "Michael Chen",
    title: "Lead Developer",
    company: "WebTech Studios",
    text: "Their expertise in React and modern web technologies significantly improved our application's performance and user experience.",
    avatar: "/testimonials/avatar3.svg",
    location: "Seattle, WA",
    date: "2023-11",
    rating: 5,
    projectName: "Analytics Dashboard",
    projectUrl: "https://webtech-studios.com/analytics"
  }
]; 