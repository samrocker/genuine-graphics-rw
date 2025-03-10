"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const SignaturePage = () => {
  return (
    <section className="pt-28">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 h-fit w-full flex flex-col lg:flex-row gap-5 items-center justify-start">
          <div className="h-full flex-[1] w-full flex flex-col items-start justify-center gap-5">
            <span className="text-sm text-gradient font-bold">How We Work</span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold">
              <span className="text-gradient">Signature Banners</span> are used
              in stock posting and product marketing.
            </h1>
          </div>
          <div className="h-full flex-[1] w-full flex flex-col items-start justify-start gap-5">
            <p className="text-justify text-neutral-400 text-3xl font-light">
              Unlock the power of a dedicated design work to elevate your
              Discord server and marketplace branding, product marketing all for
              a fraction of the cost of hiring in-house designers.
            </p>
            <Button className="px-8 py-6 bg-gradient  text-black font-medium pt-5">
              See Pricing
            </Button>
          </div>
        </div>
        <div className="px-5 py-5 w-full flex-center flex-wrap gap-10">
          <div className="min-h-[200px] w-full flex-center bg-gradient rounded-xl">
            9<h1 className="text-xl text-black font-medium">See Pricing</h1>
          </div>
          <div className="min-h-[200px] w-full flex-center bg-gradient rounded-xl">
            <h1 className="text-xl text-black font-medium">See Pricing</h1>
          </div>
          <div className="min-h-[200px] w-full flex-center bg-gradient rounded-xl">
            <h1 className="text-xl text-black font-medium">See Pricing</h1>
          </div>
          <div className="min-h-[200px] w-full flex-center bg-gradient rounded-xl">
            <h1 className="text-xl text-black font-medium">See Pricing</h1>
          </div>
          <div className="min-h-[200px] w-full flex-center bg-gradient rounded-xl">
            <h1 className="text-xl text-black font-medium">See Pricing</h1>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SignaturePage;
