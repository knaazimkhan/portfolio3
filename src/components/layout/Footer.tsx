import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/knaazimkhan",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/naazimkhan",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/knaazimkhan",
    icon: FaTwitter,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/knaazimkhan",
    icon: FaDiscord,
  },
] as const;

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Naazim Khan. All rights reserved.
        </p>
        <nav className="flex items-center gap-4" aria-label="Social media">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Visit ${link.name}`}
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}; 