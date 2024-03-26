"use client";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div>
          <Image
            src="https://links.papareact.com/gi1"
            alt="banner"
            width={1000}
            height={250}
          />
        </div>
        <div>
          <Image
            src="https://links.papareact.com/6ff"
            alt="banner"
            width={1000}
            height={250}
          />
        </div>
        <div>
          <Image
            src="https://links.papareact.com/7ma"
            alt="banner"
            width={1000}
            height={250}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
