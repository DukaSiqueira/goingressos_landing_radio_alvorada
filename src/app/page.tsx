import { HeroSection } from "@/components/sections/HeroSection";
import { BibleVerseSection } from "@/components/sections/BibleVerseSection";
import { DonationOptionsSection } from "@/components/sections/DonationOptionsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { MassesAndRafflesSection } from "@/components/sections/MassesAndRafflesSection";
import { BenefitsImpactSection } from "@/components/sections/BenefitsImpactSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function LandingPage() {
  return (
    <div>
        <HeroSection />
        <BibleVerseSection />
        <DonationOptionsSection />
        <MassesAndRafflesSection />
        <BenefitsImpactSection />
        <TestimonialsSection />
        <FaqSection />
    </div>
  );
}
