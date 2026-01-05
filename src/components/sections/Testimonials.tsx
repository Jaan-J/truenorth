import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "TrueNorth transformed our approach to retirement planning. Their calm, strategic guidance helped us see a clear path forward when everything felt uncertain.",
    author: "Margaret Chen",
    role: "Retired Executive",
    avatar: "MC",
    rating: 5,
  },
  {
    quote: "Working with TrueNorth feels like having a trusted friend who happens to be a financial expert. They've helped us grow our wealth while sleeping soundly at night.",
    author: "James & Sarah Williams",
    role: "Business Owners",
    avatar: "JW",
    rating: 5,
  },
  {
    quote: "Their goal-oriented planning made saving for our children's education actually achievable. We finally have confidence in our financial future.",
    author: "David Rodriguez",
    role: "Healthcare Professional",
    avatar: "DR",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section id="insights" className="section bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-gold-400/10 rounded-full" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-emerald-500/10 rounded-full" />
      
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
            Client Stories
          </p>
          <h2 className="mb-6 opacity-0 animate-fade-up delay-100">
            Trusted by Families Across the Nation
          </h2>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center z-10">
              <Quote className="w-6 h-6 text-gold-500" />
            </div>
            
            {/* Testimonial Card */}
            <div className="card-featured pt-10 opacity-0 animate-fade-up delay-200">
              <div className="min-h-[200px] flex flex-col items-center justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-x-6 transition-all duration-slow",
                      index === activeIndex
                        ? "opacity-100 translate-x-0"
                        : index < activeIndex
                        ? "opacity-0 -translate-x-8"
                        : "opacity-0 translate-x-8"
                    )}
                    style={{ display: index === activeIndex ? 'block' : 'none' }}
                  >
                    {/* Quote */}
                    <blockquote className="text-center">
                      <p className="text-xl md:text-2xl font-editorial italic text-foreground leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </p>
                      
                      {/* Author */}
                      <footer className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold mb-3">
                          {testimonial.avatar}
                        </div>
                        <cite className="not-italic">
                          <div className="font-semibold text-foreground">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </cite>
                        
                        {/* Rating */}
                        <div className="flex gap-1 mt-3">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-gold-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-border/50">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="rounded-full"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-normal",
                        index === activeIndex
                          ? "bg-gold-400 w-6"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="rounded-full"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
