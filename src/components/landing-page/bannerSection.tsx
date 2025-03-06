"use client"
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowBigRight } from "lucide-react";
import { ButtonProps } from "../ui/button";

const BannerSection: React.FC = () => {
  // Variants for container and child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="mt-16">
      <main className="max-w-[1440px] m-auto">
        <motion.div 
          className="px-5 py-5 w-full flex-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="px-5 py-10 w-full flex-center flex-col gap-7 bg-white/10 rounded-3xl"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold max-w-[650px]"
              variants={itemVariants}
            >
              Become part of the Genuine Graphics
            </motion.h1>
            
            <motion.p 
              className="text-lg text-center text-white font-medium max-w-[400px]"
              variants={itemVariants}
            >
              Jump on a membership and start requesting designs right away!
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button 
                className="px-5 py-6 w-36 text-white bg-gradient flex-center gap-1"
                asChild
              >
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Pricing <ArrowBigRight height={27} width={27} />
                </motion.button>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};

export default BannerSection;