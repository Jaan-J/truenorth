import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function FinalCTA() {
  return (
    <section className="section bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 border border-primary rounded-full" />
          <div className="absolute inset-8 border border-primary rounded-full" />
          <div className="absolute inset-16 border border-primary rounded-full" />
        </div>
      </div>
      
      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
            Ready to Start?
          </p>
          
          <h2 className="mb-6 opacity-0 animate-fade-up delay-100">
            Your first step toward financial clarity
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 opacity-0 animate-fade-up delay-200">
            Book a free 20-minute clarity call. No pitch, no pressure—just a 
            conversation to see if we're a good fit for each other.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-300">
            <Link to="/book">
              <Button variant="secondary" size="lg">
                Book Your Free Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 opacity-0 animate-fade-up delay-400">
            Or email us at{" "}
            <a 
              href="mailto:hello@truenorth.com" 
              className="text-secondary hover:text-secondary-dark transition-colors"
            >
              hello@truenorth.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
