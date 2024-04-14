"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";
import { RiMenu4Fill } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Menu from "./Menu";
import { MdOutlineLocationOn } from "react-icons/md";
import { UserAvatar } from "./UserAvatar";
import Link from "next/link";
import { GoGear } from "react-icons/go";
import {
  IoCartOutline,
  IoPersonOutline,
  IoSearch,
  IoSearchOutline,
} from "react-icons/io5";
import SearchComp from "./SearchComp";

export default function Header() {
  return (
    <>
      <header className="w-full border-b">
        <MaxWidthWrapper>
          <div className="flex h-20 justify-between items-center relative">
            <Link href={"/"} className="inline-block">
              <h1 className="text-2xl font-bold">
                GEM<span className="text-primary">FINITY</span>
              </h1>
            </Link>
            <Menu />
            <div className="flex items-center gap-0.5">
              <SearchComp />
              <Button size={"icon"} variant={"ghost"}>
                <Link
                  href={"/cart"}
                  className="  hover:text-primary transition-all text-xl font-bold"
                >
                  <IoCartOutline />
                </Link>
              </Button>

              <UserAvatar />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </>
  );
}
