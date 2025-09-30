import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedVideoSection } from "@/components/featured-video-section"
import { AboutSection } from "@/components/about-section"
import { PrioritiesSection } from "@/components/priorities-section"
import { VisionSection } from "@/components/vision-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedVideoSection />
      <AboutSection />
      <PrioritiesSection />
      <VisionSection />
    </main>
  )
}
