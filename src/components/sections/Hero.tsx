import { Button } from "@/components/ui/button";
import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center section-navy overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-navy-800" />

      {/* Compass Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent transform -rotate-12" />
      <div className="absolute top-1/3 right-0 w-64 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent transform rotate-12" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-gold-400/20 to-transparent transform -rotate-45" />

      {/* Floating Orbs */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-narrow relative z-10 pt-32 pb-20">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 opacity-0 animate-fade-up">
              <Compass className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Financial Coaching for Real Life
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-primary-foreground mb-6 opacity-0 animate-fade-up delay-100">
              Get clear on your money.
              <span className="block mt-2 text-gradient-gold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Build lasting confidence.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up delay-200 leading-relaxed">
              TrueNorth helps you understand your finances—no jargon, no judgment, no products to sell.
              Just practical guidance to help you move forward.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center opacity-0 animate-fade-up delay-300">
              <Link to="/book">
                <Button variant="hero" size="xl">
                  Book a Free Clarity Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicator */}
            <p className="text-sm text-primary-foreground/50 mt-10 opacity-0 animate-fade-up delay-400">
              No pressure. No pitch. Just clarity.
            </p>
          </div>
          {/* Right Visual */}
          <div className="relative hidden lg:block opacity-0 animate-fade-up delay-300">
            {/* Main Card */}
            <div className="relative bg-card/10 backdrop-blur-xl rounded-2xl p-8 border border-primary-foreground/10 shadow-dramatic">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-primary-foreground/50 text-sm uppercase tracking-wider">Portfolio Value</p>
                  <p className="text-3xl font-semibold text-primary-foreground mt-1">$847,234.56</p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                  <span className="text-emerald-400 text-sm font-medium">+12.4%</span>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="relative h-48 mb-6">
                <svg viewBox="0 0 400 150" className="w-full h-full">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(165, 63%, 33%)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(165, 63%, 33%)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,120 C50,100 100,110 150,80 C200,50 250,70 300,40 C350,30 380,35 400,25 L400,150 L0,150 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M0,120 C50,100 100,110 150,80 C200,50 250,70 300,40 C350,30 380,35 400,25"
                    fill="none"
                    stroke="hsl(165, 63%, 43%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Data Points */}
                  <circle cx="150" cy="80" r="4" fill="hsl(165, 63%, 43%)" />
                  <circle cx="300" cy="40" r="4" fill="hsl(165, 63%, 43%)" />
                  <circle cx="400" cy="25" r="6" fill="hsl(42, 53%, 55%)" stroke="hsl(0, 0%, 100%)" strokeWidth="2" />
                </svg>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Stocks", value: "58%", color: "bg-emerald-500" },
                  { label: "Bonds", value: "28%", color: "bg-navy-400" },
                  { label: "Cash", value: "14%", color: "bg-gold-400" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className={`w-2 h-2 rounded-full ${item.color} mx-auto mb-2`} />
                    <p className="text-lg font-medium text-primary-foreground">{item.value}</p>
                    <p className="text-xs text-primary-foreground/50">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path
            d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,40 L1440,100 L0,100 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
