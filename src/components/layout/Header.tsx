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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [whatOpen, setWhatOpen] = useState<string>("");

  return (
    <>
      <header className="h-20 w-full border-b">
        <MaxWidthWrapper>
          <div></div>
        </MaxWidthWrapper>
      </header>
    </>
  );
}
