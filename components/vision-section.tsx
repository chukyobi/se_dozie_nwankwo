import { Button } from "@/components/ui/button"
export function VisionSection() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance animate-fade-in-up">
            Unite, Innovate, and Prosper Together
          </h2>
          <p
            className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed text-pretty animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            A vision for an Africa that harnesses its collective strength, embraces innovation, and creates
            opportunities for all its people. Together, we will build a continent of peace, prosperity, and sustainable
            development.
          </p>
          <div className="pt-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" variant="secondary" className="rounded-full">
              Explore the Vision
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
