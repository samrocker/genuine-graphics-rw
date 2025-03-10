import PricingCard from "@/components/ui/PricingCard";
import { CustomPricing, PremiumPricing, Services, StandardPricing } from "@/constants";
import React from "react";

const PricingsPage = () => {
  return (
    <section className="mt-28">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 w-full flex-center flex-col gap-5">
          <div className="w-full flex-center flex-col gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-medium">
              Our <span className="text-gradient">Animated services</span> are
              priced competitively, offering high-quality work to fit any
              budget.
            </h1>
            <div className="py-5 w-full flex-center flex-wrap gap-3">
              {Services.map((service, idx) => (
                <div key={idx} className="px-5 py-3 bg-gradient rounded-sm">
                  <h1 className="text-sm lg:text-lg text-black font-light">
                    {service.title}
                  </h1>
                </div>
              ))}
            </div>
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
        </div>
      </main>
    </section>
  );
};

export default PricingsPage;
