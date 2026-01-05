import { ArrowRight, Award, Users, Target, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Compass,
    title: "Client-First Philosophy",
    description: "As fiduciaries, your interests always come first. We're legally and ethically bound to act in your best interest.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "We don't chase trends. Every recommendation ties directly to your personal life goals and timeline.",
  },
  {
    icon: Award,
    title: "Transparent Fees",
    description: "No hidden costs or commissions. Our fee structure is simple, fair, and aligned with your success.",
  },
  {
    icon: Users,
    title: "Personal Relationships",
    description: "You'll work with the same dedicated team who knows your story, not a call center.",
  },
];

export function About() {
  return (
    <section id="about" className="section bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
              Why TrueNorth
            </p>
            
            <h2 className="mb-6 opacity-0 animate-fade-up delay-100">
              Your Financial Partner for Life
            </h2>
            
            <div className="space-y-4 text-muted-foreground opacity-0 animate-fade-up delay-200">
              <p>
                Founded in 2009, TrueNorth Advisory was born from a simple belief: 
                every family deserves access to the same quality financial guidance 
                that was once reserved for the ultra-wealthy.
              </p>
              <p>
                We combine <span className="text-foreground font-medium">institutional-grade investment strategies</span> with 
                deeply personal service, creating financial plans that adapt as your 
                life evolves.
              </p>
            </div>
            
            {/* Editorial Quote */}
            <blockquote className="my-8 pl-6 border-l-2 border-gold-400 opacity-0 animate-fade-up delay-300">
              <p className="font-editorial text-xl italic text-foreground">
                "We don't just manage wealth—we help families find financial peace of mind."
              </p>
              <footer className="mt-3 text-sm text-muted-foreground">
                — Sarah Mitchell, Founder & CEO
              </footer>
            </blockquote>
            
            <Button variant="secondary" className="opacity-0 animate-fade-up delay-400">
              Meet Our Team
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Right - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-background border border-border hover:border-secondary/30 hover:shadow-elevated transition-all duration-slow opacity-0 animate-fade-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
