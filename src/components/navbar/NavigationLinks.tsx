"use client";

import React from "react";

import Link from "next/link";

import { links } from "../../../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const NavigationLinks = () => {
  const path = usePathname();

  return (
    <nav className='hidden md:flex justify-start'>
      <ul className='flex gap-8 items-center'>
        {links.map(({ title, url }) => {
          return (
            <Link
              className={cn(
                "px-2 py-1 hover:text-secondary-foreground",
                (path === url ||
                  (url === "/home" && path === "/")) &&
                  "bg-black text-white rounded scale-110"
              )}
              key={title}
              href={url}
            >
              <li>{title}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
