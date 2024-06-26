"use client";

import React, { use, useEffect, useState } from "react";
import Header from "../layout/Header";
import Nav from "../layout/Nav";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import ScrollToTop from "react-scroll-to-top";
import VerifyBar from "../layout/VerifyBar";
import Footer from "../layout/Footer";

export default function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const router = useRouter();
  const { data: session }: { data: any } = useSession();

  if (path.startsWith("/auth")) {
    return <>{children}</>;
  }
  return (
    <>
      {/* {session?.user.verified === false && <VerifyBar session={session} />} */}
      <Header />
      <div className="min-h-[calc(100vh-5rem)]">{children}</div>
      <Footer />
      <div className="w-full h-20 bg-gradient-to-b from-transparent to-white fixed bottom-0 left-0 lg:hidden" />
      <Nav />
      <ScrollToTop className="flex items-center justify-center" smooth />
    </>
  );
}
