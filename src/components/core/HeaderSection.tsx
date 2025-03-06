"use client"
import { headerContent } from "@/constants";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const HeaderSection = () => {
  // Smooth variants for desktop navigation
  const navItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
    },
    visible: (custom: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.4,
        ease: "easeOut"
      },
    }),
  };

  // Smooth mobile menu variants
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      x: "10%",
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: "10%",
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
      }}
      className="w-full fixed top-0 bg-[#0A0A0A]/75 z-[40] backdrop-blur-md"
    >
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-7 w-full flex-between">
          {/* Logo with smooth scale */}
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.4,
              ease: "easeOut"
            }}
            className="flex-[1] w-full flex-start"
          >
            <h1 className="text-xl lg:text-2xl text-white font-normal">
              Genuine <span className="text-gradient">Graphics</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex-[1] w-full hidden lg:flex-end gap-7">
            <AnimatePresence>
              {headerContent.map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <Link
                    href={item.redirect}
                    className="text-sm text-white font-medium hover:text-opacity-80 transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={headerContent.length}
                variants={navItemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="px-5 py-5 bg-gradient font-bold"
                  >
                    Join Discord
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-[1] w-full flex-end lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Menu height={27} width={27} className="text-white" />
                </motion.div>
              </SheetTrigger>
              <SheetContent 
                className="bg-[#0A0A0A] border-neutral-900 border-[1px] rounded-3xl"
                forceMount
              >
                <AnimatePresence>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={mobileMenuVariants}
                  >
                    <SheetHeader>
                      <SheetTitle className="flex-start mt-5">
                        <h1 className="text-xl lg:text-2xl text-white font-normal">
                          Genuine <span className="text-gradient">Graphics</span>
                        </h1>
                      </SheetTitle>
                    </SheetHeader>
                    <div className="mt-12 w-full flex flex-col items-start justify-center gap-5">
                      {headerContent.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ 
                            opacity: 0, 
                            x: -20,
                          }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { 
                              delay: idx * 0.1,
                              duration: 0.4,
                              ease: "easeOut"
                            } 
                          }}
                        >
                          <Link
                            href={item.redirect as string}
                            className="text-2xl text-white font-medium"
                          >
                            {item.title as string}
                          </Link>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ 
                          opacity: 0, 
                          y: 20,
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            delay: headerContent.length * 0.1,
                            duration: 0.4,
                            ease: "easeOut"
                          } 
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            className="px-5 py-5 bg-gradient font-bold w-full"
                          >
                            Join Discord
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </motion.section>
  );
};

export default HeaderSection;