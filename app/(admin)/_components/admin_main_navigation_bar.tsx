"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const MainNavigationBar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/admin/${params.storeId}`,
      label: "Overview",
      active: pathname === `admin/${params.storeId}`,
    },
    {
      href: `/admin/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathname === `admin/${params.storeId}/billboards`,
    },
    {
      href: `/admin/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `admin/${params.storeId}/settings`,
    },
  ];
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6")}>
      {routes.map((route) => {
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              " text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white "
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNavigationBar;
