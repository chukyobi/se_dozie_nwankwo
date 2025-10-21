import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
//import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import CTA from "@/components/cta"
import ValuesSection from "@/components/values-section"
import PrioritiesSection from "@/components/priorities-section"
import VideoPolicySection from "@/components/video-policy-section"

export default function Home() {
  return (
    <>
      <Hero />
      <ValuesSection />
      {/* <PrioritiesSection /> */}
      <VideoPolicySection />
      <Services />
      <About />
      {/* <Team /> */}
      <Testimonials />
      <Blog />
      <CTA />
    </>
  )
}
