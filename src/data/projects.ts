import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "smart-menu",
    title: "The Smart Menu",
    description: "A comprehensive digital menu solution for restaurants, cafes, and hospitality businesses with QR code-based contactless menus.",
    longDescription: "A digital menu platform revolutionizing the restaurant industry with features like real-time updates, custom branding, analytics dashboard, and multi-platform support for restaurants, cafes, bakeries, and ghost kitchens.",
    image: "/projects/smart-menu/thumbnail.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Payload CMS",
      "MongoDB",
      "Express.js",
      "QR Code Integration",
      "Analytics Dashboard",
      "REST API",
      "JWT Authentication",
      "Responsive Design",
      "Multi-tenant Architecture",
      "RBAC (Role-Based Access Control)"
    ],
    category: "web",
    featured: true,
    links: {
      live: "https://thesmartmenu.io",
    },
    completedAt: "2024-01",
    highlights: [
      "Multi-tenant system supporting multiple restaurants and brands",
      "Role-based access control for staff management",
      "Contactless QR Code menus for HORECA clients",
      "Real-time menu management and updates",
      "Custom branded menu designs",
      "Analytics and customer insights",
      "Multi-platform support (Web, Tablet, Mobile)",
    ],
  },
  {
    id: "sokos",
    title: "Sokos NFT Marketplace",
    description: "A decentralized NFT marketplace for digital and physical assets, featuring unique collectibles, art, and gaming assets.",
    longDescription: "A blockchain-based NFT platform providing a unique experience in NFT trading where proof of ownership and real products collaborate. Features include NFT minting, marketplace, P2E card game, and phygital NFT integration.",
    image: "/projects/sokos/thumbnail.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Payload CMS v2",
      "MongoDB",
      "Express.js",
      "Digital Wallet UI Integration",
      "REST API",
      "GraphQL API",
      "JWT Authentication",
      "Responsive Design",
      "Web3 Frontend Integration",
      "Access Control"
    ],
    category: "web3",
    featured: true,
    links: {
      live: "https://sokos.io/uae-en",
    },
    completedAt: "2024-01",
    highlights: [
      "Decentralized NFT marketplace with physical asset integration",
      "NFT minting for single and multiple editions",
      "P2E card game integration",
      "Digital wallet and blockchain integration",
      "Auction and fixed price sale options",
      "Authentication and ownership verification",
      "Multi-chain support for NFT trading",
      "Content management with Payload CMS",
      "Role-based access control"
    ],
  },
  {
    id: "traders-hub",
    title: "Traders Hub",
    description: "A comprehensive trading platform for forex, stocks, and futures with advanced trading tools and real-time market data.",
    longDescription: "A sophisticated trading platform designed for both beginners and seasoned traders, offering MetaTrader 5 integration, multi-asset trading capabilities, and a user-friendly interface accessible across multiple devices.",
    image: "/projects/traders-hub/thumbnail.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Payload CMS v2",
      "MongoDB",
      "Express.js",
      "REST API",
      "GraphQL API",
      "JWT Authentication",
      "MetaTrader 5 Integration",
      "KYC Integration",
      "Payment Gateway Integration",
      "Responsive Design"
    ],
    category: "fintech",
    featured: true,
    links: {
      live: "https://tradershub.ae",
    },
    completedAt: "2024-01",
    highlights: [
      "Multi-asset trading platform (Forex, Stocks, Futures)",
      "MetaTrader 5 integration with advanced trading tools",
      "Automated KYC verification system",
      "Multiple payment gateway integrations",
      "Real-time market data and price analysis",
      "Cross-platform accessibility (Desktop, Tablet, Mobile)",
      "Risk management tools and analytics",
      "Content management with Payload CMS",
      "Role-based access control"
    ],
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "A beautiful weather application with detailed forecasts and animations",
    longDescription: "A weather application that provides detailed forecasts, beautiful animations, and location-based weather information.",
    image: "/projects/images/weather-app.svg",
    technologies: ["React Native", "TypeScript", "OpenWeatherMap API"],
    category: "mobile",
    featured: false,
    links: {
      github: "https://github.com/yourusername/weather-app",
      demo: "https://demo.your-weather-app.com",
    },
    completedAt: "2023-11",
    highlights: [
      "Location-based weather",
      "7-day forecast",
      "Weather animations",
      "Offline support",
    ],
  },
  {
    id: "code-editor",
    title: "Code Editor",
    description: "A lightweight code editor with syntax highlighting and themes",
    longDescription: "A desktop code editor built with Electron, featuring syntax highlighting, multiple themes, and file management.",
    image: "/projects/images/code-editor.svg",
    technologies: ["Electron", "React", "TypeScript", "Monaco Editor"],
    category: "desktop",
    featured: false,
    links: {
      github: "https://github.com/yourusername/code-editor",
    },
    completedAt: "2023-10",
    highlights: [
      "Syntax highlighting",
      "Multiple themes",
      "File management",
      "Auto-save feature",
    ],
  },
]; 