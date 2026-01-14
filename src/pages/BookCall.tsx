import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Video, MessageSquare, FileText, ArrowRight } from "lucide-react";

const expectations = [
  {
    icon: Clock,
    title: "20 minutes",
    description: "A focused conversation to understand your situation and goals.",
  },
  {
    icon: Video,
    title: "Video call",
    description: "We'll meet via Zoom so we can connect face-to-face.",
  },
  {
    icon: MessageSquare,
    title: "No pressure",
    description: "This is an exploration, not a sales call. We'll only suggest next steps if it makes sense.",
  },
  {
    icon: FileText,
    title: "Come prepared",
    description: "Think about your top 1-2 financial concerns you'd like clarity on.",
  },
];

const BookCall = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-secondary blur-3xl" />
          </div>
          
          <div className="container-narrow relative z-10 text-center">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
              Book a Call
            </p>
            <h1 className="text-primary-foreground mb-6 opacity-0 animate-fade-up delay-100">
              Start with a free clarity call
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto opacity-0 animate-fade-up delay-200">
              Let's chat about where you are, where you want to be, and whether we're a good fit.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section bg-background">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left Column - What to Expect */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 opacity-0 animate-fade-up">What to expect</h2>
                
                <div className="space-y-6">
                  {expectations.map((item, index) => (
                    <div 
                      key={item.title}
                      className="flex gap-4 opacity-0 animate-fade-up"
                      style={{ animationDelay: `${100 + index * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Intake Form Link */}
                <div className="mt-10 p-6 rounded-xl bg-card border border-border opacity-0 animate-fade-up delay-500">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Before your call
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For the most productive conversation, please complete a brief intake form before our call.
                  </p>
                  <Button variant="outline" className="w-full">
                    Complete Intake Form
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Right Column - Calendar Embed */}
              <div className="lg:col-span-3 opacity-0 animate-fade-up delay-200">
                <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <h3 className="text-xl font-semibold text-foreground">
                      Choose a time that works for you
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      All times shown in your local timezone
                    </p>
                  </div>
                  
                  {/* Calendly Embed Placeholder */}
                  <div className="p-8 min-h-[500px] flex items-center justify-center bg-muted/30">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-10 h-10 text-primary"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Calendly Integration
                      </h4>
                      <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-6">
                        {/* Connect your Calendly account to enable booking directly on this page. */}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {/* Embed code: Add your Calendly widget URL in the project settings */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact */}
        <section className="py-12 bg-card border-t border-border">
          <div className="container-narrow text-center">
            <p className="text-muted-foreground">
              Prefer email? Reach out at{" "}
              <a 
                href="mailto:hello@truenorth.com" 
                className="text-secondary hover:text-secondary-dark transition-colors font-medium"
              >
                hello@truenorth.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookCall;
