import React from "react";
import { HeroImage } from "./HeroImage";
import { HeroTextBox } from "./HeroTextBox";

export const HeroSection = () => {
  return (
    <div className='flex flex-col w-full h-full md:flex-row'>
      <HeroImage />
      <HeroTextBox />
    </div>
  );
};
