"use client";
import React from "react";
import { Button } from "../ui/button";
import { BeautifulWorks } from "@/constants";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import SignatureThumb from "../../../public/images/signature-thumb.png";

const BeautifulWorksSection = () => {
  // Customize vertical positioning here
  const getVerticalOffset = (idx: number) => {
    return idx % 2 === 0 ? "translate-y-5" : "-translate-y-3";
  };

  return (
    <section className="w-full bg-[#FFFFFF] pt-16">
      <main className="max-w-[1440px] mx-auto">
        <div className="px-5 py-5 min-h-fit flex flex-col items-center text-center gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Our Beautiful Works
          </h1>
          <p className="text-base md:text-xl text-black max-w-[550px]">
            We help our clients grow their bottom-line with clear and
            professional websites.
          </p>
          <Button className="py-5 px-6 bg-transparent hover:bg-black/10 flex-center border border-black text-black text-lg mt-5">
            <Loader2 width={27} height={27} />
            Load More
          </Button>
        </div>

        {/* Desktop Grid */}
        <div className="pb-20 mt-10 hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {BeautifulWorks.map((works, idx) => (
            <div
              key={idx}
              className={`bg-[#1B1B1B] shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden p-4 flex flex-col items-start gap-4 ${getVerticalOffset(idx)}`}
            >
              <h1 className="text-lg md:text-xl font-bold text-white text-left">
                {works.title}
              </h1>
              <Image
                src={SignatureThumb}
                alt={works.title}
                width={1920}
                height={1080}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="px-5 mt-10 flex-center flex-wrap md:hidden gap-10">
          {BeautifulWorks.map((works, idx) => (
            <div
              key={idx}
              className={`bg-[#1B1B1B] shadow-lg transition-transform duration-300 transform overflow-hidden p-4 flex flex-col items-start justify-between gap-5`}
            >
              <h1 className="text-lg md:text-xl font-bold text-white text-left">
                {works.title}
              </h1>
              <Image
                src={SignatureThumb}
                alt={works.title}
                width={1920}
                height={1080}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default BeautifulWorksSection;
