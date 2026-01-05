import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    name: "Financial Clarity Session",
    price: "$150",
    description: "One-time 90-minute session",
    features: [
      "Complete financial snapshot",
      "Top 3 priorities identified",
      "Personalized action plan",
      "Session recording",
      "Follow-up resources",
    ],
    cta: "Book Session",
  },
  {
    name: "Credit & Debt Reset",
    price: "$750",
    description: "6-week comprehensive program",
    featured: true,
    features: [
      "6 weekly coaching sessions",
      "Full credit report analysis",
      "Custom debt payoff strategy",
      "Creditor communication support",
      "Credit monitoring guidance",
      "Unlimited email support",
    ],
    cta: "Start Program",
  },
  {
    name: "Group Workshops",
    price: "$45+",
    description: "Per person, 2-hour workshop",
    features: [
      "Customized content",
      "Interactive exercises",
      "Take-home resources",
      "Live Q&A session",
      "Follow-up materials",
    ],
    cta: "Inquire",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
          </div>
          
          <div className="container-narrow relative z-10 text-center">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
              Pricing
            </p>
            <h1 className="text-primary-foreground mb-6 opacity-0 animate-fade-up delay-100">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto opacity-0 animate-fade-up delay-200">
              No hidden fees. No upsells. No pressure. Just clear options to fit your needs.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section bg-background">
          <div className="container-narrow">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-8 opacity-0 animate-fade-up ${
                    tier.featured 
                      ? 'card-featured scale-105' 
                      : 'bg-card border border-border shadow-lg'
                  }`}
                  style={{ animationDelay: `${100 + index * 100}ms` }}
                >
                  {tier.featured && (
                    <div className="badge-gold mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 pb-6 border-b border-border">
                    {tier.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-secondary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/book">
                    <Button 
                      variant={tier.featured ? "accent" : "outline"} 
                      className="w-full"
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="section bg-card">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 opacity-0 animate-fade-up">Our promise to you</h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="opacity-0 animate-fade-up delay-100">
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Selling</h3>
                  <p className="text-muted-foreground text-sm">
                    We don't sell financial products. Our only interest is helping you succeed.
                  </p>
                </div>
                
                <div className="opacity-0 animate-fade-up delay-200">
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Judgment</h3>
                  <p className="text-muted-foreground text-sm">
                    Whatever your situation, we meet you where you are with respect and understanding.
                  </p>
                </div>
                
                <div className="opacity-0 animate-fade-up delay-300">
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Pressure</h3>
                  <p className="text-muted-foreground text-sm">
                    Take your time. Book a free call. We're here when you're ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary">
          <div className="container-narrow text-center">
            <h2 className="text-primary-foreground mb-4 opacity-0 animate-fade-up">
              Questions about pricing?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto opacity-0 animate-fade-up delay-100">
              Book a free 20-minute call to discuss your needs and find the right fit.
            </p>
            <Link to="/book" className="opacity-0 animate-fade-up delay-200 inline-block">
              <Button variant="accent" size="lg">
                Book a Free Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
