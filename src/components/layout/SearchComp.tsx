"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SearchComp() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const query = searchParams.get("q");
    setQ(query || "");
    return () => {};
  }, [searchParams]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (path === "/") {
      router.push("/shop" + "?" + createQueryString("q", q));
    } else {
      router.push(path + "?" + createQueryString("q", q));
    }
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size={"icon"}
          variant={"ghost"}
          className={cn("hover:text-primary transition-all text-2xl", {
            "bg-accent text-primary": open,
          })}
        >
          <IoSearchOutline />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form className="w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="Search"
            onChange={(e) => setQ(e.target.value)}
            value={q}
          />
        </form>
      </PopoverContent>
    </Popover>
  );
}
