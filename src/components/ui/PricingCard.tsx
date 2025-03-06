"use client";

import Image from "next/image";
import Star from "../../../public/icons/Star.png";
import { Button } from "./button";
import type { PricingCardProps } from "@/types";

const PricingCard = ({
  title,
  description,
  pricingFrom,
  pricingTo,
  keyPoints,
}: PricingCardProps) => {
  return (
    <div className="px-7 py-10 min-h-fit w-full max-w-[300px] flex flex-col gap-8 bg-[#222222] items-start justify-center rounded-xl">
      {/* Header Section */}
      <div className="w-full flex flex-col gap-5 items-start">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl text-white font-medium">{title}</h1>
          <Button className="text-white font-bold bg-gradient">Rebrand</Button>
        </div>
        <p className="text-sm text-neutral-400 text-left max-w-[300px]">{description}</p>
      </div>

      {/* Pricing Section */}
      <div className="px-3 py-5 w-full flex flex-col gap-1 items-start justify-center border-y-[1px] border-orange-600">
        <h1 className="text-3xl text-left text-gradient font-bold">
          {pricingFrom} <span className="text-sm">to {pricingTo}</span>
        </h1>
        <p className="text-sm text-left text-neutral-400 font-medium">Non-negotiable prices</p>
      </div>

      {/* Features List */}
      <ul className="w-full flex flex-col gap-3 items-start">
        {keyPoints.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div>
              <Image src={Star || "/placeholder.svg"} width={20} height={20} alt="check" />
            </div>
            <p className="text-sm text-left text-white font-medium">{feature}</p>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-3">
        <Button className="px-5 py-5 w-full bg-transparent text-white font-bold border-2 border-orange-600">
          Check Samples
        </Button>
        <Button className="px-5 py-5 w-full bg-gradient text-white font-bold">
          Click to Buy
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
