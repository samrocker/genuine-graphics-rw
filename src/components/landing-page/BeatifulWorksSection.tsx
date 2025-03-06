"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { BeautifulWorks } from "@/constants";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import SignatureThumb from "../../../public/images/signature-thumb.png";

const BeautifulWorksSection = () => {
  // Variants for smooth animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Customize vertical positioning here
  const getVerticalOffset = (idx: number) => {
    // Example positioning strategies:
    // 1. Wave-like pattern
    // return idx % 3 === 0 ? "translate-y-10" : 
    //        idx % 3 === 1 ? "-translate-y-5" : 
    //        "translate-y-3";

    // 2. More dramatic vertical shifts
    // return idx % 2 === 0 ? "translate-y-12" : "-translate-y-12";

    // 3. Subtle offset
    return idx % 2 === 0 ? "translate-y-5" : "-translate-y-3";

    // 4. No vertical offset
    // return "";
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="w-full bg-[#FFFFFF] pt-16"
    >
      <main className="max-w-[1440px] mx-auto">
        <div className="px-5 py-5 min-h-fit flex flex-col items-center text-center gap-6">
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-black"
          >
            Our Beautiful Works
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-black max-w-[550px]"
          >
            We help our clients grow their bottom-line with clear and
            professional websites.
          </motion.p>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="py-5 px-6 bg-transparent flex-center border border-black text-black text-lg">
              <Loader2 width={27} height={27} />
              Load More
            </Button>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="pb-20 mt-10 hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {BeautifulWorks.map((works, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className={`bg-black rounded-3xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden p-4 flex flex-col items-start gap-4 ${getVerticalOffset(idx)}`}
            >
              <h1 className="text-lg md:text-xl font-bold text-white text-left">
                {works.title}
              </h1>
              <Image
                src={SignatureThumb}
                alt={works.title}
                width={1920}
                height={1080}
                className="w-full rounded-3xl"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="px-5 mt-10 flex-center flex-wrap md:hidden gap-10"
        >
          {BeautifulWorks.map((works, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className={`bg-black rounded-3xl shadow-lg transition-transform duration-300 transform overflow-hidden p-4 flex flex-col items-start justify-between gap-5`}
            >
              <h1 className="text-lg md:text-xl font-bold text-white text-left">
                {works.title}
              </h1>
              <Image
                src={SignatureThumb}
                alt={works.title}
                width={1920}
                height={1080}
                className="w-full rounded-3xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </motion.section>
  );
};

export default BeautifulWorksSection;