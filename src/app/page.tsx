import AdsComponent from "@/app/AdsComponent";
import { prisma } from "@/lib/prisma/prisma";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const AdsComp = async () => {
  const ads = await prisma.ad.findMany();
  return <AdsComponent ads={ads} />;
};

const AdsCompLoader = () => {
  return (
    <Suspense
      fallback={
        <Skeleton className="w-full h-[30vh] md:h-[35vh] lg:h-[45vh] xl:h-[50vh] 2xl:h-[60vh]" />
      }
    >
      <AdsComp />
    </Suspense>
  );
};

export default function Home() {
  return (
    <main>
      <AdsCompLoader />
    </main>
  );
}
