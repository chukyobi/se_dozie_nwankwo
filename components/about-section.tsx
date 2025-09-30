import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
            <Image
              src="/images/candidate-portrait.png"
              alt="Raila Odinga"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              Champion of Pan-Africanism
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                With decades of leadership experience and unwavering commitment to African unity, Dozie Nwankwo brings a
                vision of prosperity, innovation, and collaboration to the African Union Commission.
              </p>
              <p>
                His track record in diplomacy, economic development, and social justice positions him as the ideal
                candidate to lead Africa into a new era of growth and solidarity.
              </p>
            </div>
            <Button size="lg" className="mt-4 rounded-full">
              Read Full Biography
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
