"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, X } from "lucide-react";

import EmailIcon from "../../../public/icons/email.png";
import PhoneIcon from "../../../public/icons/phone.png";
import { FooterSectionContent } from "@/constants";

const FooterSection = () => {
  return (
    <footer className="mt-10 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <h1 className="text-3xl font-bold">
              Genuine <span className="text-gradient">Graphics</span>
            </h1>
            <p className="text-neutral-300 max-w-md">
              Genuine - the leading digital agency based in the UK, working with
              top-tier clients, from start-ups to enterprises.
            </p>
          </div>

          {/* Contact & Social */}
          <div className="space-y-5 lg:text-right">
            <div className="flex items-center lg:justify-end gap-3">
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
            </div>
            <div className="flex items-center lg:justify-end gap-3">
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
            </div>

            {/* Social Icons */}
            <div className="flex items-center lg:justify-end gap-5 mt-4">
              <Link
                href="https://facebook.com"
                className="text-neutral-400 hover:text-blue-500 transition"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-neutral-400 hover:text-blue-500 transition"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://x.com"
                className="text-neutral-400 hover:text-blue-500 transition"
              >
                <X size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Links & Copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-700 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {FooterSectionContent.map((content, idx) => (
              <div key={idx}>
                <Link
                  href={content.redirect}
                  className="text-sm text-neutral-400 hover:text-blue-500 transition"
                >
                  {content.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center lg:text-right">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Genuine Graphics - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
