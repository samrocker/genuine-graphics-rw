"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { BrandLogos } from "@/constants";

const HeroSection = () => {
  return (
    <section className="w-screen h-screen flex-center flex-col gap-5 relative overflow-hidden">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div
        className="absolute left-[-200px] bottom-10 z-[-1] w-[15rem] md:w-[20rem] lg:w-[25rem] rotate-45 duration-300"
      >
        <Image
          src="/images/crystal-left.png"
          alt="hero-crystal-left"
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <div
        className="absolute right-[-100px] lg:right-[-130px] top-36 lg:top-48 z-[-1] w-[15rem] md:w-[20rem] lg:w-[25rem] rotate-90 duration-300"
      >
        <Image
          src="/images/crystal-right.png"
          alt="hero-crystal-right"
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-7 w-full flex-center flex-col gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-white text-center font-bold max-w-[1000px]">
            Transform Your Discord Shop into stunning{" "}
            <span className="text-gradient">brand</span>
          </h1>
          <p className="text-sm font-medium text-white max-w-[500px] text-center">
            Elevate your Discord server and marketplace with custom graphics,
            designed to make your brand stand out!
          </p>
          <div>
            <Button className="px-5 py-5 bg-gradient text-white font-bold">
              Create a Ticket
            </Button>
          </div>
        </div>
        <div className="px-5 py-5 h-fit w-full hidden md:flex flex-col gap-5 items-center justify-center md:mt-10">
          <div className="py-5 w-full flex-center gap-7">
            <span className="h-1 w-20 flex-center bg-orange-600 rounded-full" />
            <h1 className="text-lg md:text-2xl text-white text-center font-medium">
              TRUSTED BY AMAZING BRANDS
            </h1>
            <span className="h-1 w-20 flex-center bg-orange-600 rounded-full" />
          </div>
          <div className="py-10 px-5 lg:px-10 w-full flex-center flex-wrap md:grid md:grid-cols-3 lg:grid-cols-5 gap-5 place-content-center bg-white/10 backdrop-blur-md rounded-3xl">
            {BrandLogos.map((logo, idx) => (
              <div key={idx} className="flex-center">
                <Image
                  src={logo.src}
                  alt={logo.title}
                  width={100}
                  height={50}
                  className="h-9 lg:h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
