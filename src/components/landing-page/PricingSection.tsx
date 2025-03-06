"use client"
import { motion } from "framer-motion"
import PricingCard from "../ui/PricingCard"
import { CustomPricing, PremiumPricing, StandardPricing } from "@/constants"

const PricingSection = () => {
  // Animation variants for the header section
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  // Animation variants for the pricing cards
  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <motion.section className="mt-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 min-h-fit flex flex-col items-center text-center gap-10">
          <motion.div className="py-5 w-full flex-center flex-col gap-5" variants={headerVariants}>
            <motion.span className="text-lg text-gradient font-medium uppercase" variants={itemVariants}>
              Clear & Simple Pricing
            </motion.span>
            <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" variants={itemVariants}>
              Simple pricing to level up your brand.
            </motion.h1>
            <motion.p className="text-base md:text-sm text-neutral-400 max-w-[400px]" variants={itemVariants}>
              Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.
            </motion.p>
          </motion.div>

          <motion.div className="py-5 w-full flex-center flex-wrap gap-10" variants={cardsContainerVariants}>
            {StandardPricing.map((plan, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" custom={index}>
                <PricingCard
                  title={plan.title}
                  description={plan.description}
                  pricingFrom={plan.pricingFrom}
                  pricingTo={plan.pricingTo}
                  keyPoints={plan.keyPoints}
                />
              </motion.div>
            ))}

            {PremiumPricing.map((plan, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                custom={index + StandardPricing.length}
              >
                <PricingCard
                  title={plan.title}
                  description={plan.description}
                  pricingFrom={plan.pricingFrom}
                  pricingTo={plan.pricingTo}
                  keyPoints={plan.keyPoints}
                />
              </motion.div>
            ))}

            {CustomPricing.map((plan, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                custom={index + StandardPricing.length + PremiumPricing.length}
              >
                <PricingCard
                  title={plan.title}
                  description={plan.description}
                  pricingFrom={plan.pricingFrom}
                  pricingTo={plan.pricingTo}
                  keyPoints={plan.keyPoints}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </motion.section>
  )
}

export default PricingSection

