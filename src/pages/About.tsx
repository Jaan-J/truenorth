import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Shield,
    title: "No Selling",
    description: "We don't sell products or earn commissions. Our only job is to help you understand your money.",
  },
  {
    icon: Heart,
    title: "No Judgment",
    description: "Everyone's financial journey is different. We meet you where you are with compassion and respect.",
  },
  {
    icon: Users,
    title: "Structure & Support",
    description: "Clear frameworks and ongoing guidance to help you build lasting financial confidence.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
          </div>

          <div className="container-narrow relative z-10">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4 opacity-0 animate-fade-up">
              About TrueNorth
            </p>
            <h1 className="text-primary-foreground mb-6 opacity-0 animate-fade-up delay-100">
              A calm, practical approach to money
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl opacity-0 animate-fade-up delay-200">
              Financial coaching that prioritizes clarity, education, and your peace of mind.
            </p>
          </div>
        </section>

        {/* Background Section */}
        <section className="section bg-card">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="opacity-0 animate-fade-up">
                <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                  My Background
                </p>
                <h2 className="mb-6">From economics to empowerment</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I hold a degree in Economics and have spent years working in client advisory roles, helping
                    individuals understand their financial options, make informed decisions, and move forward with
                    confidence.
                  </p>
                  <p>
                    With a background in economics and over a decade of experience in client advisory,
                    I've seen firsthand how the financial industry often fails everyday people.
                  </p>
                  <p>
                    My approach is grounded in real experience, not theory. I focus on clarity, structure, and honest
                    conversations about money.
                  </p>
                </div>
              </div>

              <div className="opacity-0 animate-fade-up delay-200">
                <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                  Why Coaching
                </p>
                <h2 className="mb-6">Bridging the education gap</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Most people don't need more financial products—they need understanding
                  </p>
                  <p>
                    I started TrueNorth Financial Coaching to close the education gap that leaves many people
                    feeling overwhelmed, embarrassed, or stuck. Financial stress can affect confidence,
                    relationships, and overall well-being. Coaching provides a safe, supportive space to gain clarity,
                    rebuild confidence, and take control—step by step.
                  </p>
                  <p>
                    This is about dignity, not judgment. Everyone deserves to understand how the system works
                    and how to use it to their advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-background">
          <div className="container-narrow">
            <div className="text-center mb-12 opacity-0 animate-fade-up">
              <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Our Values
              </p>
              <h2>How we work</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-elevated transition-all duration-slow opacity-0 animate-fade-up"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-card">
          <div className="container-narrow">
            <blockquote className="text-center max-w-3xl mx-auto opacity-0 animate-fade-up">
              <p className="font-editorial text-2xl md:text-3xl italic text-primary mb-6">
                "My goal isn't to tell you what to do with your money.
                It's to help you understand it well enough to decide for yourself."
              </p>
              <div className="divider-compass max-w-32 mx-auto" />
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary">
          <div className="container-narrow text-center">
            <h2 className="text-primary-foreground mb-4 opacity-0 animate-fade-up">
              Ready to find your clarity?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto opacity-0 animate-fade-up delay-100">
              Book a free 20-minute call to see if coaching is right for you.
            </p>
            <Link to="/book" className="opacity-0 animate-fade-up delay-200 inline-block">
              <Button variant="accent" size="lg">
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

export default About;
