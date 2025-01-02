"use client";

import * as React from "react";
import NextLink from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface LinkProps<T extends string> {
  href: Route<T>;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  exact?: boolean;
  prefetch?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function Link<T extends string>({
  href,
  className,
  activeClassName,
  inactiveClassName,
  exact = false,
  prefetch = true,
  children,
  onClick,
  ...props
}: LinkProps<T>) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

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