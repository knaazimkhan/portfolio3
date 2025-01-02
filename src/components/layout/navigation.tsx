"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex gap-6", className)}>
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          prefetch={true}
          className="text-muted-foreground transition-colors hover:text-foreground"
          activeClassName="text-foreground font-medium"
          exact={href === "/"}
        >
          <motion.span
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {label}
          </motion.span>
        </Link>
      ))}
    </nav>
  );
} 