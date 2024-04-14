import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Menu() {
  const path = usePathname();
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:flex hidden items-center gap-10">
      {menuItems.map((item, index) => {
        if (item.href === "/") {
          return (
            <Link
              href={item.href}
              key={index}
              className={cn(
                "hover:text-primary transition-all relative group",
                {
                  "text-primary": path === "/",
                }
              )}
            >
              <p className="font-medium">{item.label}</p>
              <div
                className={cn(
                  "h-0.5 rounded w-0 bg-primary group-hover:bg-primary group-hover:w-full transition-all duration-700 mt-0.5",
                  {
                    "w-full bg-primary": path === "/",
                  }
                )}
              />
            </Link>
          );
        } else {
          return (
            <Link
              href={item.href}
              key={index}
              className={cn(
                "hover:text-primary transition-all relative group",
                {
                  "text-primary": path.startsWith(item.href),
                }
              )}
            >
              <p className="font-medium">{item.label}</p>
              <div
                className={cn(
                  "h-0.5 rounded w-0 bg-primary group-hover:bg-primary group-hover:w-full transition-all duration-700 mt-0.5",
                  {
                    "w-full bg-primary": path.startsWith(item.href),
                  }
                )}
              />
            </Link>
          );
        }
      })}
    </div>
  );
}
