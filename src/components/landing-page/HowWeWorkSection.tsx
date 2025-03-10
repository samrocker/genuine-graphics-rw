"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Rocket from "@/../public/images/Rocket.svg";
import Reload from "@/../public/images/Reload.svg";
import PenTool from "@/../public/images/PenTool.svg";

const HowWeWorkSection = () => {
  return (
    <section className="min-h-fit w-screen mt-20 relative overflow-hidden">
      <div className="absolute right-[-100px] md:right-[-150px] top-[18%] md:top-[0px] z-[-1] w-[13rem] md:w-[17rem] lg:w-[22rem] rotate-[230deg] duration-300">
        <Image
          src="/images/crystal-left.png"
          alt="hero-crystal-left"
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <div className="absolute left-[-100px] md:right-[-150px] top-[32%] md:top-[40%] z-[-1] w-[13rem] md:w-[17rem] lg:w-[15rem] rotate-[35deg] duration-300">
        <Image
          src="/images/crystal-left.png"
          alt="hero-crystal-left"
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <main className="max-w-[1440px] m-auto flex-center flex-col gap-10">
        <div className="px-5 py-5 h-fit w-full flex flex-col lg:flex-row gap-5 items-center justify-start">
          <div className="h-full flex-[1] w-full flex flex-col items-start justify-center gap-5">
            <span className="text-sm text-gradient font-bold">How We Work</span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold">
              Create a Stunning Brand for Your Discord Shop with Expert GFX
            </h1>
          </div>
          <div className="h-full flex-[1] w-full flex flex-col pt-20 items-start justify-start gap-5">
            <p className="text-justify text-neutral-400 text-3xl font-light">
              Unlock the power of a dedicated design work to elevate your
              Discord server and marketplace branding, product marketing all for
              a fraction of the cost of hiring in-house designers.
            </p>
            <Button className="px-8 py-6 bg-gradient  text-black font-medium">
                See Pricing
              </Button>
          </div>
        </div>
        <div className="px-5 py-20 min-h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-between mb-10">
          {[
            {
              icon: "/images/Rocket.svg",
              title: "Understanding your business",
              description:
                "We take the time to understand your brand's unique identity, ensuring every design aligns perfectly with your vision and goals.",
              showArrow: true,
            },
            {
              icon: "/images/Reload.svg",
              title: "Perfect Design Selection",
              description:
                "We'll help you choose the perfect designs that align with your brand's personality, ensuring a cohesive and impactful visual identity.",
              showArrow: true,
            },
            {
              icon: "/images/PenTool.svg",
              title: "Easy Turnaround",
              description:
                "With our new policy and TOS, we will deliver all the work between 2-5 days. There may be extra time for specific works and designs.",
              showArrow: false,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-7 items-start justify-center"
            >
              <div className="flex-center gap-3">
                <span className="bg-gradient p-5 rounded-full">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={20}
                    height={20}
                    className="h-14 w-auto"
                  />
                </span>
                {item.showArrow && (
                  <Image
                    src="/icons/arrow right.png"
                    alt="Arrow Right"
                    width={250}
                    height={50}
                    className="max-w-[250px] hidden lg:block"
                  />
                )}
              </div>
              <h1 className="text-lg md:text-2xl text-white font-medium">
                {item.title}
              </h1>
              <p className="text-lg text-neutral-400 font-light max-w-[400px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default HowWeWorkSection;
