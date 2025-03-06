"use client";

import { FaqSectionContent } from "@/constants";
import { ArrowBigDown } from "lucide-react";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const FaqSection = () => {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Toggle function to open/close FAQ items
  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  // Variants for container animations
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

  // Variants for individual FAQ items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Variants for answer expansion
  const answerVariants = {
    hidden: { 
      height: 0, 
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3
      }
    },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3
      }
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF]">
      <main className="max-w-[1440px] m-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="px-5 py-12 md:py-16 min-h-screen w-full flex flex-col gap-8 justify-center items-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black"
          >
            FAQ's
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-black mb-4"
          >
            Providing answers to your questions
          </motion.p>

          <div className="w-full max-w-[800px] flex flex-col gap-4">
            {FaqSectionContent.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full overflow-hidden transition-all duration-300 ease-in-out"
              >
                <motion.div
                  onClick={() => toggleItem(index)}
                  whileTap={{ scale: 0.98 }}
                  className={`px-5 py-5 w-full flex justify-between items-center gap-5 ${
                    openItems.includes(index)
                      ? "bg-[#222222] rounded-t-3xl"
                      : "bg-[#222222] rounded-3xl"
                  } cursor-pointer`}
                >
                  <h2 className="text-xl text-left text-white font-medium">
                    {faq.question}
                  </h2>
                  <motion.div
                    animate={{ 
                      rotate: openItems.includes(index) ? 180 : 0 
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20 
                    }}
                    className="flex-center rounded-full bg-gradient p-3"
                  >
                    <ArrowBigDown
                      width={30}
                      height={30}
                      className="text-white"
                    />
                  </motion.div>
                </motion.div>

                {/* Animated answer section */}
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={answerVariants}
                      className="px-6 py-5 bg-[#333333] rounded-b-3xl text-white overflow-hidden"
                    >
                      <p className="text-base md:text-lg">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <motion.div 
            variants={itemVariants}
            className="w-full flex-center flex-col gap-5"
          >
            <Textarea
              className="min-h-[160px] w-full max-w-[800px] border-[1px] border-black/50"
              placeholder="Ask us what you want to know..."
            />
            <div className="w-full max-w-[800px] flex-between">
              <p className="text-lg text-left text-neutral-500 font-bold max-w-[350px]">
                We will answer your questions via email within 48 hours.
              </p>
              <Button className="w-28 px-5 py-6 bg-gradient text-white font-bold rounded-full">
                Send
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};

export default FaqSection;