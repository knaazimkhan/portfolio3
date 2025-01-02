"use client";

import { useState } from "react";
import type { Route } from "next";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@/components/ui/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "Home", href: "/" as Route },
  { name: "Projects", href: "/projects" as Route },
  { name: "Skills", href: "/skills" as Route },
  { name: "Education", href: "/education" as Route },
  { name: "Contact", href: "/contact" as Route },
] as const;

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      {/* Skip Link */}
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
      >
        Skip to main content
      </Link>

      <nav 
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" 
        aria-label="Main navigation"
        role="navigation"
      >
        <div className="flex lg:flex-1">
          <Link 
            href="/" 
            className="-m-1.5 p-1.5 text-2xl font-bold"
            aria-label="Go to homepage"
            exact
          >
            Portfolio
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
              aria-label={`Go to ${item.name.toLowerCase()} section`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden",
          mobileMenuOpen
            ? "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            : "hidden"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-muted">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="-m-1.5 p-1.5 text-2xl font-bold"
              aria-label="Go to homepage"
              exact
            >
              Portfolio
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-muted">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    activeClassName="text-foreground bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={`Go to ${item.name.toLowerCase()} section`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}; 