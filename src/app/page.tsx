import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BibleVerseSection } from "@/components/sections/BibleVerseSection";
import { DonationOptionsSection } from "@/components/sections/DonationOptionsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { MassesAndRafflesSection } from "@/components/sections/MassesAndRafflesSection";
import { BenefitsImpactSection } from "@/components/sections/BenefitsImpactSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BibleVerseSection />
        <DonationOptionsSection />
        <MassesAndRafflesSection />
        <BenefitsImpactSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
