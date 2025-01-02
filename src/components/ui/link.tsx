"use client";

import * as React from "react";
import NextLink from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type RouteType = Route<string> | URL;

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: RouteType;
  activeClassName?: string;
  inactiveClassName?: string;
  exact?: boolean;
  prefetch?: boolean;
}

export function Link({
  href,
  className,
  activeClassName,
  inactiveClassName,
  exact = false,
  prefetch = true,
  children,
  onClick,
  ...props
}: LinkProps) {
  const pathname = usePathname();
  const hrefString = href.toString();
  const isActive = exact ? pathname === hrefString : pathname.startsWith(hrefString);

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      className={cn(className, isActive ? activeClassName : inactiveClassName)}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextLink>
  );
} 