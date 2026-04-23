import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ForWhoSection } from "@/components/landing/for-who-section"
import { DifferentialsSection } from "@/components/landing/differentials-section"
import { CredibilitySection } from "@/components/landing/credibility-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { VisionSection } from "@/components/landing/vision-section"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LexoraLandingPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19]">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ForWhoSection />
      <DifferentialsSection />
      <CredibilitySection />
      <PricingSection />
      <VisionSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
