"use client"
import { BrandLogos } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TrustedBrandsSection = () => {
  // Variants for smooth animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="block md:hidden"
    >
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 h-fit w-full flex flex-col gap-5 items-center justify-center">
          <motion.div 
            variants={itemVariants}
            className="py-5 w-full flex-center gap-7"
          >
            <span className="h-1 w-20 flex-center bg-orange-600 rounded-full" />
            <h1 className="text-lg md:text-2xl text-white text-center font-medium">
              TRUSTED BY AMAZING BRANDS
            </h1>
            <span className="h-1 w-20 flex-center bg-orange-600 rounded-full" />
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="py-10 px-5 lg:px-10 w-full flex-center flex-wrap md:grid md:grid-cols-3 lg:grid-cols-5 gap-5 place-content-center bg-white/10 backdrop-blur-md rounded-3xl"
          >
            {BrandLogos.map((logo, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    delay: idx * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
                className="flex-center"
              >
                <Image
                  src={logo.src as string}
                  alt={logo.title as string}
                  width={1920}
                  height={1080}
                  className="h-8 lg:h-12 w-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </motion.section>
  );
};

export default TrustedBrandsSection;