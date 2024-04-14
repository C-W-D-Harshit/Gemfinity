"use client";

import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { IoMenuOutline } from "react-icons/io5";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="hover:text-primary lg:hidden transition-all text-3xl"
        >
          <IoMenuOutline />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
