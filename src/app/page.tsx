import BannerSection from "@/components/landing-page/bannerSection";
import BeatifulWorksSection from "@/components/landing-page/BeatifulWorksSection";
import FaqSection from "@/components/landing-page/FaqSection";
import HeroSection from "@/components/landing-page/HeroSection";
import HowWeWorkSection from "@/components/landing-page/HowWeWorkSection";
import OurCapibilitiesSection from "@/components/landing-page/OurCapibilitiesSection";
import PricingSection from "@/components/landing-page/PricingSection";
import TrustedBrandsSection from "@/components/landing-page/TrustedBrandsSection";

export default function Home() {
  return (
    <main>
       <HeroSection />
       <TrustedBrandsSection />
       <HowWeWorkSection />
       <BeatifulWorksSection />
       <OurCapibilitiesSection />
       <PricingSection />
       <FaqSection />
       <BannerSection />
    </main>
  );
}

