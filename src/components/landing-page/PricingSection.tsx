"use client";
import { Button } from "../ui/button";
import PricingCard from "../ui/PricingCard";
import { CustomPricing, PremiumPricing, StandardPricing } from "@/constants";

const PricingSection = () => {
  return (
    <section className="mt-10 pb-20">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 min-h-fit flex flex-col items-center text-center gap-10">
          <div className="py-5 w-full flex-center flex-col gap-5">
            <span className="text-lg text-gradient font-medium uppercase">
              Clear & Simple Pricing
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Simple pricing to level up your brand.
            </h1>
            <p className="text-base md:text-md text-neutral-400 max-w-[400px]">
              Senior experts. On-demand requests. Fast turnarounds. Flat monthly
              fee. Cancel anytime.
            </p>
          </div>

          <div className="py-5 w-full flex-center flex-wrap gap-10">
            {StandardPricing.map((plan, index) => (
              <div key={index}>
                <PricingCard
                  title={plan.title}
                  description={plan.description}
                  pricingFrom={plan.pricingFrom}
                  pricingTo={plan.pricingTo}
                  keyPoints={plan.keyPoints}
                />
              </div>
            ))}

            {PremiumPricing.map((plan, index) => (
              <div key={index}>
                <PricingCard
                  title={plan.title}
                  description={plan.description}
                  pricingFrom={plan.pricingFrom}
                  pricingTo={plan.pricingTo}
                  keyPoints={plan.keyPoints}
                />
              </div>
            ))}

            {CustomPricing.map((plan, index) => (
              <div key={index}>
                <PricingCard
                  title={plan.title}
                  description={plan.description}
                  pricingFrom={plan.pricingFrom}
                  pricingTo={plan.pricingTo}
                  keyPoints={plan.keyPoints}
                />
              </div>
            ))}
          </div>
          <div className="pt-5 w-full flex-center flex-col gap-7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium">
              Check specific pricing of each{" "}
              <span className="text-gradient">Design/work</span>
            </h1>
            <p className="text-sm md:text-lg text-white font-medium">
              we offer clear and specific pricing for all our design services,
              ensuring transparency and no hidden costs
            </p>
            <div className="w-full flex-center gap-5">
              <Button className="py-6 px-7 bg-gradient">
                Animated Pricing
              </Button>
              <Button className="py-6 px-7 bg-transparent text-white border-2 border-orange-600">
                Non Animated Pricing
              </Button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default PricingSection;
