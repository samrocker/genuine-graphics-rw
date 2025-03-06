"use client"
import { CapabilitiesGrid, Services } from "@/constants";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const OurCapibilitiesSection = () => {
  return (
    <section className="mt-20">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 min-h-fit flex flex-col items-center text-center gap-10">
          <div className="w-full flex-center flex-col gap-5">
            <span className="text-lg text-orange-600 font-medium uppercase">
              Our Capabilities
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              We can help you with...
            </h1>
          </div>

          <div className="py-5 w-full flex-center flex-wrap gap-5">
            {Services.map((service, idx) => (
              <div 
                key={idx} 
                className="px-5 py-3 bg-gradient rounded-xl"
              >
                <h1 className="text-sm lg:text-lg text-white font-medium">
                  {service.title}
                </h1>
              </div>
            ))}
          </div>

          <div className="px-5 py-10 w-full flex-between flex-col lg:flex-row gap-10">
            <div className="flex-[1] w-full flex flex-col gap-5 items-start justify-center">
              <span className="text-lg text-orange-600 font-medium">
                Benefits
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white text-left font-medium">
                The design subscription that connects you to your dream team
              </h1>
            </div>
            <div className="flex-[1] w-full flex flex-col gap-5 items-start justify-center">
              <p className="text-lg text-neutral-400 text-left font-medium">
                A subscription can alleviate the stress of staffing, managing
                expenses, or make design calls like a Creative Director. We
                partner with you to ensure that your design elevates your brand
                to new levels.
              </p>
              <Button className="px-5 py-5 bg-gradient text-white font-bold">
                See Pricing
              </Button>
            </div>
          </div>

          <div className="px-5 py-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {CapabilitiesGrid.map((items, idx) => (
              <div 
                key={idx}
                className="p-4 flex flex-col gap-5 items-start justify-center border-r-[1px] border-r-neutral-400/20"
              >
                <Image
                  src={items.icon as string}
                  alt={items.title as string}
                  width={1920}
                  height={1080}
                  className="h-10 w-auto"
                />
                <h1 className="text-lg text-left text-white font-bold">
                  {items.title as string}
                </h1>
                <p className="text-sm text-left text-neutral-400 font-medium max-w-[300px]">
                  {items.description as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default OurCapibilitiesSection;
