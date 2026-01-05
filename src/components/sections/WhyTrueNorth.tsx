import { Shield, Heart, Compass, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "No Products, No Commissions",
    description: "We don't sell investments or insurance. Our only incentive is your success.",
  },
  {
    icon: Heart,
    title: "Judgment-Free Zone",
    description: "Wherever you're starting from is perfectly fine. We've heard it all.",
  },
  {
    icon: Compass,
    title: "Education, Not Dependence",
    description: "Our goal is to teach you to fish, not to make you reliant on us forever.",
  },
  {
    icon: Users,
    title: "Real Relationship",
    description: "You'll work with the same person who knows your story and goals.",
  },
];

export function WhyTrueNorth() {
  return (
    <section id="why" className="section bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary blur-3xl" />
      </div>
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
              Why TrueNorth
            </p>
            
            <h2 className="text-primary-foreground mb-6 opacity-0 animate-fade-up delay-100">
              A different kind of financial support
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8 opacity-0 animate-fade-up delay-200">
              Most financial services are designed to sell you something. We're 
              designed to help you understand. That's the difference.
            </p>
            
            <blockquote className="pl-6 border-l-2 border-accent opacity-0 animate-fade-up delay-300">
              <p className="font-editorial text-xl italic text-primary-foreground">
                "Clarity first. Confidence follows."
              </p>
            </blockquote>
          </div>
          
          {/* Right - Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-slow opacity-0 animate-fade-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-primary-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
