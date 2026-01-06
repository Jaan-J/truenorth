import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { WhatWeHelpWith } from "@/components/sections/WhatWeHelpWith";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyTrueNorth } from "@/components/sections/WhyTrueNorth";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhoThisIsFor />
        <WhatWeHelpWith />
        <ServicesOverview />
        {/* <WhyTrueNorth /> */}
        {/* Testimonials section placeholder for later */}
        {/* <FinalCTA /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
