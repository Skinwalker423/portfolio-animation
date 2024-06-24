import React from "react";
import { HeroImage } from "./HeroImage";
import { HeroTextBox } from "./HeroTextBox";

export const HeroSection = () => {
  return (
    <div className='flex flex-col w-full h-full md:flex-row gap-10'>
      <HeroImage src='/hero.png' alt='winter is coming' />
      <HeroTextBox />
    </div>
  );
};
