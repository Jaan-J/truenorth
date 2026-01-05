import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="section bg-muted relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-compass-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold-400/5 to-transparent rounded-full" />
      
      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft mb-8 opacity-0 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Complimentary Consultation
            </span>
          </div>
          
          <h2 className="mb-6 opacity-0 animate-fade-up delay-100">
            Ready to Chart Your Course?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto opacity-0 animate-fade-up delay-200">
            Schedule a confidential consultation with our advisors. No pressure, no obligations—just a genuine conversation about your financial goals.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up delay-300">
            <Button variant="secondary" size="xl">
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="xl">
              <Phone className="w-5 h-5" />
              Call (555) 123-4567
            </Button>
          </div>
          
          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground opacity-0 animate-fade-up delay-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free 30-minute session
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Fiduciary advisors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
