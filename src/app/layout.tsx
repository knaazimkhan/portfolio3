import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Loading } from "@/components/ui/loading";
import { PageTransition } from "@/components/ui/page-transition";
import { cn } from "@/lib/utils";
import "./globals.css";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com';
const name = "Your Name";
const title = `${name} - Full-stack Developer Portfolio`;
const description = "Full-stack developer specializing in React, Next.js, and modern web technologies. Creating beautiful, responsive, and user-friendly web applications.";

// Generate dynamic OG image URL
const ogImage = new URL('/api/og', baseUrl);
ogImage.searchParams.set('title', name);
ogImage.searchParams.set('description', 'Full-stack Developer');
const ogImageUrl = ogImage.toString();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s | ${name}`,
  },
  description,
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
    "Web Applications",
    "UI/UX Design",
    "Responsive Design",
    "Modern Web Technologies",
  ],
  authors: [{ name, url: baseUrl }],
  creator: name,
  publisher: name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
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
    url: baseUrl,
    title,
    description,
    siteName: `${name} Portfolio`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${name} - Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@your_twitter",
    images: [ogImageUrl],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': baseUrl,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseUrl}/#person`,
  name,
  url: baseUrl,
  image: {
    "@type": "ImageObject",
    url: `${baseUrl}/profile.jpg`,
    width: "400",
    height: "400",
    "@id": `${baseUrl}/#image`,
  },
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
  description,
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Full-stack Development",
    "UI/UX Design",
    "Responsive Design",
    "Web Performance",
    "SEO Optimization",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": baseUrl,
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Your University",
      url: "https://university.edu",
    },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-stack Developer",
    occupationLocation: {
      "@type": "City",
      name: "Your City",
    },
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      currency: "USD",
      duration: "P1Y",
      percentile10: "80000",
      percentile25: "90000",
      median: "100000",
      percentile75: "120000",
      percentile90: "150000",
    },
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Full-stack Development",
      "UI/UX Design",
    ],
  },
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add meta theme color */}
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading text="Loading..." />}>
            <PageTransition>
              {children}
            </PageTransition>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
