"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoPersonOutline } from "react-icons/io5";

export function UserAvatar() {
  const { data: session }: { data: any } = useSession();

  return (
    <Button size={"icon"} variant={"ghost"}>
      <Link
        href={session ? "/account" : "/auth/login"}
        className="hover:text-primary transition-all text-xl font-bold"
      >
        <IoPersonOutline />
      </Link>
    </Button>
  );
}
