"use client";

import { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import type { FAQ } from "@/sanity/lib/api";
import { FaqSectionContent } from "@/constants"; // Keep as fallback

const FaqSection = () => {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = useState<number[]>([]);
  // State to store FAQs from Sanity
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // Fetch FAQs from API route on component mount
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('/api/faqs');
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();
        setFaqs(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // Toggle function to open/close FAQ items
  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  // Use fallback data if Sanity data is not available
  const faqItems = faqs.length > 0 ? faqs : FaqSectionContent;

  return (
    <section className="w-full bg-[#FFFFFF]">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-12 md:py-16 min-h-screen w-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">FAQ's</h1>
          <p className="text-lg text-black mb-4">Providing answers to your questions</p>

          <div className="w-full max-w-[700px] flex flex-col gap-4">
            {isLoading ? (
              // Loading state
              <div className="w-full text-center py-8">
                <p className="text-lg text-black">Loading FAQs...</p>
              </div>
            ) : (
              // Render FAQs
              faqItems.map((faq, index) => (
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
                    <h2 className="text-xl text-left text-white font-light">{faq.question}</h2>
                    <div
                      className={`flex-center rounded-full bg-[#FC6B0A] p-3 transition-transform ${
                        openItems.includes(index) ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <SlArrowDown width={30} height={30} className="text-black" />
                    </div>
                  </div>
                  {openItems.includes(index) && (
                    <div className="px-6 py-5 bg-[#222222] rounded-b-3xl text-white overflow-hidden">
                      <p className="text-base md:text-light">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="w-full flex-center flex-col gap-5">
            <Textarea
              className="min-h-[160px] w-full max-w-[700px] text-2xl border-[1px] border-black/50"
              placeholder="Ask us what you want to know..."
            />
            <div className="w-full max-w-[700px] flex-between">
              <p className="text-sm text-left text-black font-medium max-w-[350px]">
                We will answer your questions via email <br /> within 48 hours.
              </p>
              <Button className="w-28 px-5 py-6 bg-gradient text-black font-bold rounded-full">
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
