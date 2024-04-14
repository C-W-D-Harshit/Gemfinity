"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "../components/wrappers/MaxWidthWrapper";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface AdsCompProps {
  ads: {
    id: string;
    title: string;
    imageUrl: string;
    altText: string;
    shortDescription: string;
    productId: string;
  }[];
}

export default function AdsComponent(props: AdsCompProps) {
  return (
    <div>
      <Carousel
        autoFocus
        autoPlay
        infiniteLoop
        showArrows={false}
        emulateTouch
        showStatus={false}
        showThumbs={false}
      >
        {props.ads.map((ad) => (
          <div
            className="relative w-full h-[30vh] md:h-[35vh] lg:h-[45vh] xl:h-[50vh] 2xl:h-[60vh]"
            key={ad.id}
          >
            <Image
              fill
              alt=""
              src={ad.imageUrl}
              className="object-cover brightness-50"
            />
            <div className="w-full lg:w-full absolute left-0 top-0 px-5 lg:px-6 xl:px-10 2xl:px-72 flex h-full items-center">
              <div className="text-left space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-8">
                <p className="text-muted font-medium text-sm md:text-base lg:text-lg xl:text-xl">
                  {ad.altText}
                </p>
                <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl lg:w-2/3">
                  {ad.title}
                </h1>
                <p>{ad.shortDescription}</p>
                <Link href={`/product/${ad.productId}`}>
                  <Button className="gap-3 lg:w-fit lg:h-12 lg:px-4 lg:text-xl">
                    Shop Now <FaArrowRight className="text-sm lg:text-base" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
