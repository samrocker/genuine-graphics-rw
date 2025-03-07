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

const HeaderSection = () => {
  return (
    <section 
      className="w-full fixed top-0 bg-[#0A0A0A]/75 z-[40] backdrop-blur-md"
    >
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-7 w-full flex-between">
          {/* Logo */}
          <div className="flex-[1] w-full flex-start">
            <h1 className="text-xl lg:text-2xl text-white font-normal">
              Genuine <span className="text-gradient">Graphics</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-[1] w-full hidden lg:flex-end gap-7">
            {headerContent.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={item.redirect}
                  className="text-sm text-black font-light hover:text-opacity-80 transition-all duration-300"
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <div>
              <Button 
                className="px-5 py-5 bg-gradient text-black font-bold"
              >
                Join Discord
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-[1] w-full flex-end lg:hidden">
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
                    <h1 className="text-xl lg:text-2xl text-white font-normal">
                      Genuine <span className="text-gradient">Graphics</span>
                    </h1>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-12 w-full flex flex-col items-start justify-center gap-5">
                  {headerContent.map((item, idx) => (
                    <div key={idx}>
                      <Link
                        href={item.redirect as string}
                        className="text-2xl text-white font-medium"
                      >
                        {item.title as string}
                      </Link>
                    </div>
                  ))}
                  <div>
                    <Button 
                      className="px-5 py-5 bg-gradient font-light text-black w-full"
                    >
                      Join Discord
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;
