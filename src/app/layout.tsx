import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Loading } from "@/components/ui/loading";
import { cn } from "@/lib/utils";
import "./globals.css";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Your Name - Portfolio",
    template: "%s | Your Name",
  },
  description: "Full-stack developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience.",
  keywords: [
    "Full-stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    title: "Your Name - Full-stack Developer Portfolio",
    description: "Full-stack developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience.",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your Name - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Full-stack Developer Portfolio",
    description: "Full-stack developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience.",
    creator: "@your_twitter",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://your-portfolio.com",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Your Name",
  url: "https://your-portfolio.com",
  image: "https://your-portfolio.com/profile.jpg",
  sameAs: [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername",
    "https://twitter.com/yourusername",
  ],
  jobTitle: "Full-stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Your Company",
  },
  description: "Full-stack developer specializing in React, Next.js, and modern web technologies.",
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Full-stack Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading text="Loading..." />}>
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
