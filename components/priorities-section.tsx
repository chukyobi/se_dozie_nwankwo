export function PrioritiesSection() {
  const priorities = [
    {
      number: "1",
      title: "Economic Integration",
      description:
        "Accelerate continental trade through the African Continental Free Trade Area and strengthen economic partnerships across all regions.",
    },
    {
      number: "2",
      title: "Peace and Security",
      description:
        "Promote lasting peace, conflict resolution, and security cooperation to ensure stability and prosperity for all African nations.",
    },
    {
      number: "3",
      title: "Youth Empowerment",
      description:
        "Invest in education, technology, and entrepreneurship to unlock the potential of Africa's young population.",
    },
    {
      number: "4",
      title: "Climate Action",
      description:
        "Lead sustainable development initiatives and climate resilience programs to protect our continent's future.",
    },
  ]

  return (
    <section id="priorities" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Key Priorities
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty">
            A comprehensive vision for Africa's transformation and prosperity
          </p>
        </div>

        {/* Priority Cards */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {priorities.map((priority, index) => (
            <div
              key={priority.number}
              className="group p-6 md:p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="text-5xl md:text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {priority.number}
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {priority.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{priority.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
