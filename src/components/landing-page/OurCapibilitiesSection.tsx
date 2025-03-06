"use client"
import { CapabilitiesGrid, Services } from "@/constants";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const OurCapibilitiesSection = () => {
  // Variant for container animations
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

  // Variant for individual item animations
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
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
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-20"
    >
      <main className="max-w-[1440px] m-auto">
        <motion.div 
          variants={containerVariants}
          className="px-5 py-5 min-h-fit flex flex-col items-center text-center gap-10"
        >
          <motion.div 
            variants={itemVariants}
            className="w-full flex-center flex-col gap-5"
          >
            <motion.span 
              variants={itemVariants}
              className="text-lg text-orange-600 font-medium uppercase"
            >
              Our Capabilities
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              We can help you with...
            </motion.h1>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="py-5 w-full flex-center flex-wrap gap-5"
          >
            {Services.map((service, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="px-5 py-3 bg-gradient rounded-xl"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <h1 className="text-sm lg:text-lg text-white font-medium">
                  {service.title}
                </h1>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="px-5 py-10 w-full flex-between flex-col lg:flex-row gap-10"
          >
            <div className="flex-[1] w-full flex flex-col gap-5 items-start justify-center">
              <motion.span 
                variants={itemVariants}
                className="text-lg text-orange-600 font-medium"
              >
                Benefits
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl text-white text-left font-medium"
              >
                The design subscription that connects you to your dream team
              </motion.h1>
            </div>
            <div className="flex-[1] w-full flex flex-col gap-5 items-start justify-center">
              <motion.p 
                variants={itemVariants}
                className="text-lg text-neutral-400 text-left font-medium"
              >
                A subscription can alleviate the stress of staffing, managing
                expenses, or make design calls like a Creative Director. We
                partner with you to ensure that your design elevates your brand
                to new levels.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="px-5 py-5 bg-gradient text-white font-bold">
                  See Pricing
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="px-5 py-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {CapabilitiesGrid.map((items, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </motion.section>
  );
};

export default OurCapibilitiesSection;