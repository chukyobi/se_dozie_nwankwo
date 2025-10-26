import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Ready to Make a Difference?</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Join thousands of supporters who believe in our vision for a better future. Together, we can create real
            change.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-green-200">
            Join Our Campaign
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            <Mail className="mr-2 h-5 w-5" />
            Subscribe to Updates
          </Button>
        </div>

        <p className="text-sm text-white/80">
          No spam, just important updates about our campaign and community initiatives.
        </p>
      </div>
    </section>
  )
}
