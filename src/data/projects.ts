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
      "Strapi CMS",
      "MySQL",
      "GraphQL API",
      "Responsive Design",
      "i18n Internationalization"
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
      "Content management with Strapi CMS",
      "Bilingual support (English & Arabic)"
    ],
  },
  {
    id: "aqarchain",
    title: "Aqarchain",
    description: "A modern real estate platform revolutionizing property transactions with digital solutions and smart features. (Collaborator & Technical Supervisor)",
    longDescription: "A comprehensive real estate platform that modernizes traditional real estate, offering digital property management, seamless transactions, and an innovative marketplace for buying, selling, and investing in real estate. Contributing as a collaborator and technical supervisor to ensure best practices and project success.",
    image: "/projects/aqarchain/thumbnail.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Payload CMS v2",
      "MongoDB",
      "Express.js",
      "GraphQL API",
      "REST API",
      "JWT Authentication",
      "Responsive Design"
    ],
    category: "web",
    featured: true,
    links: {
      live: "https://aqarchain.com",
    },
    completedAt: "2024-01",
    highlights: [
      "Technical supervision and project collaboration",
      "Code review and architecture planning",
      "Digital property management platform",
      "Property marketplace with advanced filters",
      "Secure transaction system",
      "Real-time property analytics",
      "Multi-currency support",
      "Interactive property maps",
      "Content management with Strapi CMS"
    ],
  },
  {
    id: "traders-hub-sc",
    title: "Traders Hub Seychelles",
    description: "A sophisticated multi-asset trading platform offering over 1000+ financial instruments with MetaTrader 5 integration and automated KYC verification.",
    longDescription: "A comprehensive trading platform licensed by FSA Seychelles, offering forex, indices, shares, ETFs & commodity CFDs trading. Features include MetaTrader 5 integration, multi-platform support, automated KYC verification, and multiple payment gateway integrations. The platform is accessible via Android, Windows, and iOS devices with a focus on both new and experienced traders.",
    image: "/projects/traders-hub-sc/thumbnail.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Responsive Design",
      "i18n Internationalization",
    ],
    category: "fintech",
    featured: true,
    links: {
      live: "https://tradershub.sc",
    },
    completedAt: "2024-01",
    highlights: [
      "Multi-asset trading platform with 1000+ financial instruments",
      "MetaTrader 5 integration with advanced trading capabilities",
      "Automated KYC verification system",
      "Multiple payment gateway integrations",
      "Real-time market data and price analysis",
      "Cross-platform accessibility (Desktop, Tablet, Mobile)",
      "Risk management tools and analytics",
      "Content management with Payload CMS",
      "Bilingual support (English & Arabic)",
      "Comprehensive client dashboard",
      "Advanced security measures and compliance",
      "Copy trading functionality"
    ],
  },
  {
    id: "sokos-esports",
    title: "Sokos Esports",
    description: "A dynamic esports platform offering competitive gaming tournaments, live streaming, and community engagement features.",
    longDescription: "An innovative esports platform that brings together competitive gamers, tournament organizers, and gaming enthusiasts. The platform features tournament management, live streaming integration, player profiles, and a comprehensive reward system, creating an engaging ecosystem for the gaming community.",
    image: "/projects/sokos-esports/thumbnail.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Payload CMS v2",
      "Responsive Design"
    ],
    category: "gaming",
    featured: true,
    links: {
      live: "https://esports.sokos.cafe",
    },
    completedAt: "2024-01",
    highlights: [
      "Tournament organization and management",
      "Live streaming integration",
      "Player profile and statistics tracking",
      "Real-time match updates and scoring",
      "Community features and social integration",
      "Cross-platform accessibility",
      "Reward system and leaderboards",
      "Interactive tournament brackets",
      "Multi-game support",
      "Automated tournament scheduling",
      "Team management features",
      "Secure payment processing for entry fees"
    ],
  },
  {
    id: "smart-meals",
    title: "Smart Meals",
    description: "A direct-to-home food delivery platform specializing in frozen ready-to-eat products with subscription-based service.",
    longDescription: "An innovative food delivery platform offering high-quality frozen products, including both vegetarian and non-vegetarian Halal-certified options. Features include subscription services, flexible delivery scheduling, and a comprehensive product management system.",
    image: "/projects/smart-meals/thumbnail.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Payload CMS",
      "MongoDB",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Responsive Design",
      "Payment Gateway Integration",
      "Subscription Management",
      "Order Management System"
    ],
    category: "web",
    featured: true,
    links: {
      live: "https://smartmeals.kitchen",
    },
    completedAt: "2024-01",
    highlights: [
      "Direct-to-home delivery service",
      "Subscription-based ordering system",
      "Weekly meals plans with customizable options",
      "Halal-certified product management",
      "Flexible delivery scheduling",
      "Multi-category product catalog",
      "Secure payment processing",
      "Real-time order tracking",
      "Customer loyalty program",
      "Business client portal"
    ],
  },
]; 