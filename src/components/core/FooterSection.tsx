"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, X } from "lucide-react";

import EmailIcon from "../../../public/icons/email.png";
import PhoneIcon from "../../../public/icons/phone.png";
import { FooterSectionContent } from "@/constants";

const FooterSection = () => {
  // Animation variants
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
      y: 20 
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
    <motion.footer 
      className="mt-10 text-white py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Company Info */}
          <motion.div className="space-y-5" variants={itemVariants}>
            <h1 className="text-3xl font-bold">
              Genuine <span className="text-gradient">Graphics</span>
            </h1>
            <p className="text-neutral-300 max-w-md">
              Genuine - the leading digital agency based in the UK, working with
              top-tier clients, from start-ups to enterprises.
            </p>
          </motion.div>

          {/* Contact & Social */}
          <motion.div className="space-y-5 lg:text-right" variants={itemVariants}>
            <motion.div 
              className="flex items-center lg:justify-end gap-3"
              variants={itemVariants}
            >
              <Image
                src={EmailIcon}
                alt="Email Icon"
                width={24}
                height={24}
                className="text-blue-500"
              />
              <a
                href="mailto:info@kronix.com"
                className="text-neutral-300 hover:text-blue-500 transition"
              >
                info@kronix.com
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center lg:justify-end gap-3"
              variants={itemVariants}
            >
              <Image
                src={PhoneIcon}
                alt="Phone Icon"
                width={24}
                height={24}
                className="text-blue-500"
              />
              <a
                href="tel:+11231343"
                className="text-neutral-300 hover:text-blue-500 transition"
              >
                (001) 1231 3435
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              className="flex items-center lg:justify-end gap-5 mt-4"
              variants={itemVariants}
            >
              <Link
                href="https://facebook.com"
                className="text-neutral-400 hover:text-blue-500 transition"
              >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Facebook size={24} />
                </motion.div>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-neutral-400 hover:text-blue-500 transition"
              >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Instagram size={24} />
                </motion.div>
              </Link>
              <Link
                href="https://x.com"
                className="text-neutral-400 hover:text-blue-500 transition"
              >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <X size={24} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Links & Copyright */}
        <motion.div 
          className="mt-12 pt-6 border-t border-neutral-700 grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={itemVariants}
        >
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {FooterSectionContent.map((content, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={content.redirect}
                  className="text-sm text-neutral-400 hover:text-blue-500 transition"
                >
                  {content.title}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center lg:text-right"
            variants={itemVariants}
          >
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Genuine Graphics - All Rights
              Reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;