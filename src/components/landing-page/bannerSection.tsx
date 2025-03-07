"use client"
import React from "react";
import { Button } from "../ui/button";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
const BannerSection: React.FC = () => {
  return (
    <section className="mt-16">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 w-full flex-center">
          <div className="px-10 py-20 w-full flex-center flex-col gap-7 bg-white/10 rounded-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-center text-white font-bold max-w-[650px]">
              Become part of the Genuine Graphics
            </h1>
            
            <p className="text-lg text-center text-white font-light max-w-[400px]">
              Jump on a membership and start requesting designs right away!
            </p>
            
            <div>
              <Button 
                className="px-5 py-6 w-36 text-black bg-gradient flex-center gap-1"
                asChild
              >
                <button>
                  See Pricing <HiMiniArrowRightCircle height={27} width={27} />
                </button>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BannerSection;
