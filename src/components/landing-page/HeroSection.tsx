"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { BrandLogos } from "@/constants";
import StarXL from "@/../public/images/Star-Big.png";
import StarSM from "@/../public/images/Star-Small.png";
import StarXS from "@/../public/images/Star-Xs.png";
import Grid from "@/../public/images/Grid.png";

const HeroSection = () => {
  return (
    <section className="w-screen h-screen flex-center flex-col relative overflow-hidden">
      <Image src={Grid} alt="Grid" className="absolute z-[-1] w-[2000px]" width={1000} height={1000} />
      
      <div className="absolute left-[-200px] top-60 z-[-1] w-[20rem] md:w-[25rem] lg:w-[29rem] rotate-[35deg] duration-300">
        <Image
          src="/images/crystal-left.png"
          alt="hero-crystal-left"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
      <div className="absolute right-[-100px] lg:right-[-130px] top-40 lg:top-48 z-[-1] w-[20rem] md:w-[25rem] lg:w-[32rem] rotate-90 duration-300">
        <Image
          src="/images/crystal-right.png"
          alt="hero-crystal-right"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
      <main className="max-w-[1440px] m-auto relative">
        <div className="px-5 py-7 w-full flex-center flex-col gap-12 mt-72">
          <Image src={StarXL} width={100} height={100} alt="Star Big" className="absolute right-[160px] z-[-1] top-[280px]" />
          <Image src={StarSM} width={30} height={30} alt="Star Big" className="absolute right-[450px] z-[-1] top-[650px]" />
          <Image src={StarXS} width={20} height={20} alt="Star Big" className="absolute left-[280px] z-[-1] top-[650px]" />
          <h1 className="text-3xl md:text-5xl lg:text-[90px] text-white text-center font-bold max-w-[1100px]">
            Transform Your Discord <br />Shop into stunning{" "}
            <span className="text-gradient italic pr-5">Brand</span>
          </h1>
          <p className="text-xl font-medium text-neutral-400 max-w-[600px] text-center">
            Elevate your Discord server and marketplace with custom graphics,
            designed to make your brand stand out!
          </p>
          <div>
            <Button className="px-7 py-6 bg-gradient text-black text-lg font-regular">
              Create a Ticket
            </Button>
          </div>
        </div>
        <div className="px-5 py-5 h-fit w-screen max-w-[1440px] hidden md:flex flex-col gap-5 items-center justify-center md:mt-10">
          <div className="py-5 w-full flex-center gap-7">
            <span className="h-[2px] w-20 flex-center bg-orange-600 rounded-full" />
            <h1 className="text-lg md:text-lg text-white text-center tracking-wider font-bold">
              TRUSTED BY AMAZING BRANDS
            </h1>
            <span className="h-[2px] w-20 flex-center bg-orange-600 rounded-full" />
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
