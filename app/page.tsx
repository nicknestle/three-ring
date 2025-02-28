import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
    </main>
  )
}

