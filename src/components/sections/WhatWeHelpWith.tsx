import { CreditCard, PiggyBank, Target, TrendingUp, Shield, Heart } from "lucide-react";

const helpAreas = [
  {
    icon: CreditCard,
    title: "Credit & Debt",
    description: "Understand your credit, create payoff strategies, and break free from debt stress.",
  },
  {
    icon: PiggyBank,
    title: "Budgeting & Cash Flow",
    description: "Build a spending plan that works with your life, not against it.",
  },
  {
    icon: Target,
    title: "Goal Planning",
    description: "Turn vague dreams into concrete, achievable financial milestones.",
  },
  {
    icon: TrendingUp,
    title: "Building Savings",
    description: "Create systems that make saving automatic and sustainable.",
  },
  {
    icon: Shield,
    title: "Financial Foundation",
    description: "Establish emergency funds, insurance basics, and financial security.",
  },
  {
    icon: Heart,
    title: "Money Mindset",
    description: "Unpack your relationship with money and build healthier habits.",
  },
];

export function WhatWeHelpWith() {
  return (
    <section id="help" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
            What We Help With
          </p>
          
          <h2 className="mb-6 opacity-0 animate-fade-up delay-100">
            Financial clarity, one step at a time
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up delay-200">
            We focus on the fundamentals that create lasting change—not complex 
            investment strategies or quick fixes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpAreas.map((area, index) => (
            <div
              key={area.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-elevated transition-all duration-slow opacity-0 animate-fade-up"
              style={{ animationDelay: `${200 + index * 75}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center mb-5 transition-colors duration-slow">
                <area.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-slow" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {area.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="divider-compass mt-16" />
      </div>
    </section>
  );
}
