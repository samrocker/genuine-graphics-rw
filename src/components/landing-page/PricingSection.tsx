"use client"
import PricingCard from "../ui/PricingCard"
import { CustomPricing, PremiumPricing, StandardPricing } from "@/constants"

const PricingSection = () => {
  return (
    <section className="mt-10">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 min-h-fit flex flex-col items-center text-center gap-10">
          <div className="py-5 w-full flex-center flex-col gap-5">
            <span className="text-lg text-gradient font-medium uppercase">
              Clear & Simple Pricing
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Simple pricing to level up your brand.
            </h1>
            <p className="text-base md:text-sm text-neutral-400 max-w-[400px]">
              Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.
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
        </div>
      </main>
    </section>
  )
}

export default PricingSection
