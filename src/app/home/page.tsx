import { PageTransition } from "@/components/PageTransition";
import { HeroSection } from "@/components/hero";
import React from "react";

const HomePage = () => {
  return (
    <PageTransition>
      <div className='max-w-7xl h-full mx-auto'>
        <HeroSection />
      </div>
    </PageTransition>
  );
};

export default HomePage;
