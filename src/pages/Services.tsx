import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, User, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Lightbulb,
    name: "Financial Clarity Session",
    price: "$150",
    duration: "90 minutes",
    description: "A focused, one-on-one session to get clear on your current financial picture and next steps.",
    whoFor: "Anyone feeling overwhelmed or unsure where to start with their finances.",
    includes: [
      "Complete financial snapshot assessment",
      "Identification of your top 3 priorities",
      "Personalized action plan with clear next steps",
      "Recording of our session for reference",
      "Follow-up email with resources",
    ],
    outcome: "Walk away with clarity on exactly where you stand and what to focus on first.",
  },
  {
    icon: User,
    name: "Credit & Debt Reset Program",
    price: "$750",
    duration: "6 weeks",
    featured: true,
    description: "A comprehensive program to understand, rebuild, and take control of your credit and debt.",
    whoFor: "Those dealing with credit challenges, debt stress, or wanting to improve their credit score.",
    includes: [
      "6 weekly one-on-one coaching sessions",
      "Full credit report analysis and action plan",
      "Debt payoff strategy customized to your life",
      "Creditor communication templates",
      "Credit monitoring setup and guidance",
      "Unlimited email support during program",
    ],
    outcome: "Build a sustainable debt payoff plan and understand how to maintain healthy credit for life.",
  },
  {
    icon: Users,
    name: "Group Workshops",
    price: "Starting at $45/person",
    duration: "2 hours",
    description: "Interactive workshops for organizations, teams, or community groups on essential money topics.",
    whoFor: "Companies, nonprofits, or community groups wanting to support their members' financial wellness.",
    includes: [
      "Customized workshop content for your group",
      "Interactive exercises and real-world examples",
      "Take-home resources for all participants",
      "Q&A session",
      "Follow-up resource email to all attendees",
    ],
    outcome: "Equip your team with practical financial skills they can apply immediately.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary blur-3xl" />
          </div>
          
          <div className="container-narrow relative z-10">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
              Services
            </p>
            <h1 className="text-primary-foreground mb-6 opacity-0 animate-fade-up delay-100">
              How we can help
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl opacity-0 animate-fade-up delay-200">
              Clear, practical financial coaching tailored to where you are right now.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section bg-background">
          <div className="container-narrow">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className={`rounded-2xl overflow-hidden opacity-0 animate-fade-up ${
                    service.featured 
                      ? 'card-featured' 
                      : 'bg-card border border-border shadow-lg'
                  }`}
                  style={{ animationDelay: `${100 + index * 150}ms` }}
                >
                  {service.featured && (
                    <div className="bg-accent/10 px-4 py-2 text-center">
                      <span className="text-sm font-medium text-accent">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="p-8 md:p-10">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-7 h-7 text-secondary" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold text-foreground mb-1">
                              {service.name}
                            </h2>
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-bold text-primary">{service.price}</span>
                              <span className="text-muted-foreground">· {service.duration}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>
                        
                        <div className="mb-6">
                          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">
                            Who it's for
                          </p>
                          <p className="text-foreground">{service.whoFor}</p>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">
                            The Outcome
                          </p>
                          <p className="text-foreground font-medium">{service.outcome}</p>
                        </div>
                      </div>
                      
                      {/* Right Column */}
                      <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                          What's Included
                        </p>
                        <ul className="space-y-3 mb-8">
                          {service.includes.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-secondary" />
                              </div>
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Link to="/book">
                          <Button 
                            variant={service.featured ? "accent" : "secondary"} 
                            size="lg" 
                            className="w-full"
                          >
                            Book Now
                            <ArrowRight className="w-5 h-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="section bg-card">
          <div className="container-narrow text-center">
            <h2 className="mb-4 opacity-0 animate-fade-up">Not sure which is right for you?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto opacity-0 animate-fade-up delay-100">
              Book a free 20-minute call and we'll figure it out together. No pressure, no pitch.
            </p>
            <Link to="/book" className="opacity-0 animate-fade-up delay-200 inline-block">
              <Button variant="secondary" size="lg">
                Book a Free Clarity Call
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

export default Services;
