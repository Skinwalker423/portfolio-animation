import React from "react";
import { HeroImage } from "./HeroImage";
import { HeroTextBox } from "./HeroTextBox";

export const HeroSection = () => {
  return (
    <div className='flex flex-col w-full h-[calc(100vh-8rem)] md:flex-row gap-1 sm:gap-10'>
      <HeroImage src='/hero4.png' alt='winter is coming' />
      <HeroTextBox
        buttonTitleOne='View projects'
        buttonTitleTwo='Contact me'
      />
    </div>
  );
};
