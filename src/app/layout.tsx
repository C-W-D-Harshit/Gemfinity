import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobWrapper from "@/components/wrappers/MobWrapper";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import LayoutProvider from "@/components/providers/LayoutProvider";
import TopLoader from "@/components/loaders/TopLoader";
import AuthSessionProvider from "@/components/providers/AuthSessionProvider";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GEMFINITY",
    template: "%s | GEMFINITY",
  },
  description:
    "Discover the joy of daily home-cooked tiffins, delivered with convenience. Join us for exclusive pricing, priority access, and the freedom to cancel anytime. Elevate your daily dining experience today!",
  metadataBase: new URL("https://gemfinity.cleverdeveloper.in/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: {
      default: "GEMFINITY",
      template: "%s | GEMFINITY",
    },
    description: "Dummy Website",
    images: [
      {
        url: "https://gemfinity.cleverdeveloper.in/logo.png",
      },
    ],
    url: "https://gemfinity.cleverdeveloper.in/",
    siteName: "GEMFINITY",
    locale: "en_US",
    type: "website",
  },
  manifest: "/assets/manifest.json",
  icons: { apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("bg-background font-sans antialiased", inter.className)}
      >
        <Suspense>
          <TopLoader />
          <AuthSessionProvider>
            <ThemeProvider
              attribute="class"
              // defaultTheme="system"
              // enableSystem
              disableTransitionOnChange
              forcedTheme="light"
            >
              <Toaster />
              <LayoutProvider>{children}</LayoutProvider>
            </ThemeProvider>
          </AuthSessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
