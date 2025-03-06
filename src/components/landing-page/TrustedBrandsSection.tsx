"use client"
import { headerContent } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const HeaderSection = () => {
  // Animation Variants
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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full fixed top-0 bg-[#0A0A0A]/75 z-[40] backdrop-blur-md"
    >
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-7 w-full flex-between">
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex-[1] w-full flex-start">
            <h1 className="text-xl lg:text-2xl text-white font-normal">
              Genuine <span className="text-gradient">Graphics</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div variants={itemVariants} className="flex-[1] w-full hidden lg:flex-end gap-7">
            {headerContent.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Link
                  href={item.redirect}
                  className="text-sm text-white font-medium hover:text-opacity-80 transition-all duration-300"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <Button className="px-5 py-5 bg-gradient font-bold">Join Discord</Button>
            </motion.div>
          </motion.div>

          {/* Mobile Navigation */}
          <motion.div variants={itemVariants} className="flex-[1] w-full flex-end lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <div>
                  <Menu height={27} width={27} className="text-white" />
                </div>
              </SheetTrigger>
              <SheetContent
                className="bg-[#0A0A0A] border-neutral-900 border-[1px] rounded-3xl"
                forceMount
              >
                <SheetHeader>
                  <SheetTitle className="flex-start mt-5">
                    <motion.h1 variants={itemVariants} className="text-xl lg:text-2xl text-white font-normal">
                      Genuine <span className="text-gradient">Graphics</span>
                    </motion.h1>
                  </SheetTitle>
                </SheetHeader>
                <motion.div
                  variants={containerVariants}
                  className="mt-12 w-full flex flex-col items-start justify-center gap-5"
                >
                  {headerContent.map((item, idx) => (
                    <motion.div key={idx} variants={itemVariants}>
                      <Link href={item.redirect} className="text-2xl text-white font-medium">
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants}>
                    <Button className="px-5 py-5 bg-gradient font-bold w-full">Join Discord</Button>
                  </motion.div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </main>
    </motion.section>
  );
};

export default HeaderSection;
