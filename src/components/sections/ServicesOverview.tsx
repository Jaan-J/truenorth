import { ArrowRight, Lightbulb, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Lightbulb,
    name: "Financial Clarity Session",
    price: "$150",
    duration: "90 min",
    description: "Get clear on your financial picture and next steps in a focused, one-on-one session.",
  },
  {
    icon: User,
    name: "Credit & Debt Reset",
    price: "$750",
    duration: "6 weeks",
    featured: true,
    description: "A comprehensive program to rebuild your credit and create a sustainable debt payoff plan.",
  },
  {
    icon: Users,
    name: "Group Workshops",
    price: "From $45",
    duration: "2 hours",
    description: "Interactive workshops for teams and organizations on essential money skills.",
  },
];

export function ServicesOverview() {
  return (
    <section id="services" className="section bg-card">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
            Services
          </p>
          
          <h2 className="mb-6 opacity-0 animate-fade-up delay-100">
            How we work together
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up delay-200">
            Choose the level of support that fits your needs. Every option includes 
            personalized attention and practical guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`rounded-xl p-6 opacity-0 animate-fade-up transition-all duration-slow hover:shadow-elevated ${
                service.featured 
                  ? 'card-featured' 
                  : 'bg-background border border-border hover:border-secondary/30'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {service.featured && (
                <div className="badge-gold text-xs mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.name}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-primary">{service.price}</span>
                <span className="text-sm text-muted-foreground">· {service.duration}</span>
              </div>
              
              <p className="text-muted-foreground text-sm mb-5">
                {service.description}
              </p>
              
              <Link to="/services">
                <Button variant="ghost" size="sm" className="p-0 h-auto text-secondary hover:text-secondary-dark">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 opacity-0 animate-fade-up delay-500">
          <Link to="/pricing">
            <Button variant="outline" size="lg">
              View Full Pricing
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
