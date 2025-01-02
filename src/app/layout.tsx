import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Analytics } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Naazim Khan - Portfolio",
    template: "%s | Naazim Khan",
  },
  description: "Software Engineer specializing in web development and modern technologies. View my projects and skills.",
  keywords: [
    "Naazim Khan",
    "Software Engineer",
    "web development",
    "frontend developer",
    "full-stack developer",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Naazim Khan" }],
  creator: "Naazim Khan",
  metadataBase: new URL("https://naazimkhan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naazimkhan.com",
    title: "Naazim Khan - Portfolio",
    description: "Software Engineer specializing in web development and modern technologies. View my projects and skills.",
    siteName: "Naazim Khan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naazim Khan - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naazim Khan - Portfolio",
    description: "Software Engineer specializing in web development and modern technologies. View my projects and skills.",
    creator: "@knaazimkhan",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "a7PgGNqD3V9omRRXJDDsbNs8L6dK3d20vAcmFQTaGyw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
