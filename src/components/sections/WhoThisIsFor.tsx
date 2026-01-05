import { Check } from "lucide-react";

const audiences = [
  {
    title: "First-time money managers",
    description: "Just starting your career and want to build good habits from day one.",
  },
  {
    title: "Career changers",
    description: "Navigating new income levels, benefits decisions, or severance situations.",
  },
  {
    title: "Debt survivors",
    description: "Ready to stop feeling shame and start building a sustainable payoff plan.",
  },
  {
    title: "Couples seeking alignment",
    description: "Want to get on the same page financially without the arguments.",
  },
  {
    title: "Goal setters",
    description: "Have dreams—a home, travel, retirement—but no roadmap to get there.",
  },
  {
    title: "Overwhelmed overthinkers",
    description: "Paralyzed by too many options and conflicting financial advice.",
  },
];

export function WhoThisIsFor() {
  return (
    <section id="who" className="section bg-card">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
              Who This Is For
            </p>
            
            <h2 className="mb-6 opacity-0 animate-fade-up delay-100">
              Is this you?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 opacity-0 animate-fade-up delay-200">
              TrueNorth is for people who are ready to understand their money—not 
              just manage it. If you're looking for quick fixes or get-rich-quick 
              schemes, we're not the right fit.
            </p>
            
            <blockquote className="pl-6 border-l-2 border-accent opacity-0 animate-fade-up delay-300">
              <p className="font-editorial text-xl italic text-foreground">
                "You don't need to be 'good with money' to start. You just need to be ready for clarity."
              </p>
            </blockquote>
          </div>
          
          {/* Right - Audience Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className="p-5 rounded-xl bg-background border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-slow opacity-0 animate-fade-up"
                style={{ animationDelay: `${200 + index * 75}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {audience.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
