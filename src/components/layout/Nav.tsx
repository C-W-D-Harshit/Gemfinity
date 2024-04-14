"use client";

import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import Link from "next/link";
import { FiCalendar, FiHome } from "react-icons/fi";
import {
  IoCartOutline,
  IoHeart,
  IoHeartOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: IoStorefrontOutline, text: "Shop", href: "/store" },
  { icon: IoHeartOutline, text: "Wishlist", href: "/wishlist" },
  { icon: FiHome, text: "Home", href: "/" },
  { icon: IoCartOutline, text: "Cart", href: "/cart" },
  { icon: IoPersonOutline, text: "Account", href: "/account" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <div className="w-full py-2 fixed bottom-2  z-20 lg:hidden ">
      <MaxWidthWrapper className="flex justify-center">
        <div className="w-full drop-shadow-xl bg-white rounded-full p-3 border max-w-screen-md">
          <div className="w-full flex items-center justify-evenly">
            {navItems.map((item, index) => {
              if (item.href === "/") {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn("flex flex-col items-center gap-0.5", {
                      "text-primary": path === item.href,
                    })}
                  >
                    <item.icon className="text-2xl" />
                    <p className="text-xs">{item.text}</p>
                  </Link>
                );
              } else {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn("flex flex-col items-center gap-0.5", {
                      "text-primary": path.startsWith(item.href),
                    })}
                  >
                    <item.icon className="text-2xl" />
                    <p className="text-xs">{item.text}</p>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
