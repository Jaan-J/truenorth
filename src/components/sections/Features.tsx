import { 
  TrendingUp, 
  Shield, 
  Target, 
  PieChart, 
  Lightbulb, 
  HeartHandshake 
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Wealth Growth",
    description: "Strategic investment approaches designed to compound your wealth over time with risk-adjusted returns.",
    color: "emerald" as const,
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive protection strategies to safeguard your assets against market volatility and unexpected events.",
    color: "navy" as const,
  },
  {
    icon: Target,
    title: "Goal Planning",
    description: "Personalized roadmaps aligned with your life milestones—from education funding to retirement.",
    color: "gold" as const,
  },
  {
    icon: PieChart,
    title: "Portfolio Optimization",
    description: "Data-driven rebalancing and allocation strategies tailored to your unique financial situation.",
    color: "emerald" as const,
  },
  {
    icon: Lightbulb,
    title: "Tax Strategy",
    description: "Intelligent tax planning to maximize your after-tax returns through efficient structures.",
    color: "navy" as const,
  },
  {
    icon: HeartHandshake,
    title: "Estate Planning",
    description: "Thoughtful legacy planning to ensure your wealth transfers according to your wishes.",
    color: "gold" as const,
  },
];

const colorStyles = {
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-500",
    border: "group-hover:border-emerald-200",
  },
  navy: {
    bg: "bg-navy-50",
    icon: "text-navy-500",
    border: "group-hover:border-navy-200",
  },
  gold: {
    bg: "bg-gold-50",
    icon: "text-gold-500",
    border: "group-hover:border-gold-200",
  },
};

export function Features() {
  return (
    <section id="solutions" className="section bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
            Our Services
          </p>
          <h2 className="mb-6 opacity-0 animate-fade-up delay-100">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-up delay-200">
            Every financial journey is unique. Our suite of services adapts to your needs, 
            providing the guidance and expertise to navigate complexity with confidence.
          </p>
        </div>
        
        {/* Compass Divider */}
        <div className="divider-compass mb-16 opacity-0 animate-fade-up delay-200" />
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const styles = colorStyles[feature.color];
            return (
              <article
                key={feature.title}
                className={`group card-elevated opacity-0 animate-fade-up`}
                style={{ animationDelay: `${200 + index * 75}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${styles.bg} flex items-center justify-center mb-6 transition-transform duration-normal group-hover:scale-110`}>
                  <feature.icon className={`w-7 h-7 ${styles.icon}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-dark transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Subtle Learn More */}
                <div className="mt-4 pt-4 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                  <a 
                    href="#" 
                    className="text-sm font-medium text-secondary hover:text-secondary-dark inline-flex items-center gap-1"
                  >
                    Learn more
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
