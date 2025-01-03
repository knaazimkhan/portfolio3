import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CursorEffect } from "@/components/ui/cursor-effect";
import { ShortcutsHelp } from "@/components/shortcuts-help";
import { RoutePrefetchProvider } from "@/components/providers/route-prefetch-provider";
import { ServiceWorkerProvider } from "@/components/providers/service-worker-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com';
const name = "Your Name";
const title = `${name} - Full-stack Developer Portfolio`;
const description = "Full-stack developer specializing in React, Next.js, and modern web technologies. Creating beautiful, responsive, and user-friendly web applications.";

// Generate dynamic OG image URL
const ogImage = new URL('/api/og', baseUrl);
ogImage.searchParams.set('title', name);
ogImage.searchParams.set('description', 'Full-stack Developer');
const ogImageUrl = ogImage.toString();

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  url: baseUrl,
  jobTitle: "Full-stack Developer",
  description,
  image: ogImageUrl,
  sameAs: [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername",
    "https://twitter.com/yourusername"
  ],
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Full-stack Development"
  ]
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        "antialiased"
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className="min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ServiceWorkerProvider>
            <RoutePrefetchProvider>
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1" id="main-content">
                  {children}
                </main>
                <Footer />
              </div>
              <CursorEffect />
              <ShortcutsHelp />
            </RoutePrefetchProvider>
          </ServiceWorkerProvider>
          <Toaster position="bottom-right" />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
