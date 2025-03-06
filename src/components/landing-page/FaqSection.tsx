"use client";

import { FaqSectionContent } from "@/constants";
import { ArrowBigDown } from "lucide-react";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

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

  return (
    <section className="w-full bg-[#FFFFFF]">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-12 md:py-16 min-h-screen w-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">FAQ's</h1>
          <p className="text-lg text-black mb-4">Providing answers to your questions</p>

          <div className="w-full max-w-[800px] flex flex-col gap-4">
            {FaqSectionContent.map((faq, index) => (
              <div
                key={index}
                className="w-full overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div
                  onClick={() => toggleItem(index)}
                  className={`px-5 py-5 w-full flex justify-between items-center gap-5 cursor-pointer ${
                    openItems.includes(index) ? "bg-[#222222] rounded-t-3xl" : "bg-[#222222] rounded-3xl"
                  }`}
                >
                  <h2 className="text-xl text-left text-white font-medium">{faq.question}</h2>
                  <div
                    className={`flex-center rounded-full bg-gradient p-3 transition-transform ${
                      openItems.includes(index) ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ArrowBigDown width={30} height={30} className="text-white" />
                  </div>
                </div>
                {openItems.includes(index) && (
                  <div className="px-6 py-5 bg-[#333333] rounded-b-3xl text-white overflow-hidden">
                    <p className="text-base md:text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full flex-center flex-col gap-5">
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
          </div>
        </div>
      </main>
    </section>
  );
};

export default FaqSection;
