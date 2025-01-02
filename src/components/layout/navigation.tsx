"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Route } from "next";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/" as Route, label: "Home" },
  { href: "/projects" as Route, label: "Projects" },
  { href: "/skills" as Route, label: "Skills" },
  { href: "/education" as Route, label: "Education" },
  { href: "/blog" as Route, label: "Blog" },
  { href: "/contact" as Route, label: "Contact" },
] as const;

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