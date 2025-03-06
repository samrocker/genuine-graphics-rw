"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
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
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // Animate features in a staggered sequence
    animate("li", { opacity: 1, x: 0 }, { delay: stagger(0.1), duration: 0.5 });
  }, [animate]);

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-7 py-10 min-h-fit w-full max-w-[300px] flex flex-col gap-8 bg-[#222222] items-start justify-center rounded-xl"
    >
      {/* Header Section */}
      <div className="w-full flex flex-col gap-5 items-start">
        <div className="w-full flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-white font-medium"
          >
            {title}
          </motion.h1>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="text-white font-bold bg-gradient">
              Rebrand
            </Button>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-neutral-400 text-left max-w-[300px]"
        >
          {description}
        </motion.p>
      </div>

      {/* Pricing Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        className="px-3 py-5 w-full flex flex-col gap-1 items-start justify-center border-y-[1px] border-orange-600"
      >
        <motion.h1
          className="text-3xl text-left text-gradient font-bold"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 2,
          }}
        >
          {pricingFrom} <span className="text-sm">to {pricingTo}</span>
        </motion.h1>
        <p className="text-sm text-left text-neutral-400 font-medium">
          Non-negotiable prices
        </p>
      </motion.div>

      {/* Features List */}
      <ul className="w-full flex flex-col gap-3 items-start">
        {keyPoints.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={Star || "/placeholder.svg"}
                width={20}
                height={20}
                alt="check"
              />
            </motion.div>
            <p className="text-sm text-left text-white font-medium">
              {feature}
            </p>
          </motion.li>
        ))}
      </ul>
      <div className="w-full flex-between flex-col gap-3">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-full"
        >
          <Button className="px-5 py-5 w-full bg-transparent text-white font-bold border-2 border-orange-600">
            Check Samples
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-full"
        >
          <Button className="px-5 py-5 w-full bg-gradient text-white font-bold">
            Click to Buy
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
