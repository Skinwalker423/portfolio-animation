import Image from "next/image";
import React from "react";

interface HeroImageProps {
  src?: string;
  alt?: string;
}

export const HeroImage = ({
  src = "/hero.png",
  alt = "hero image",
}: HeroImageProps) => {
  return (
    <div className='relative flex-1 self-center w-full h-full'>
      <Image
        src={src}
        alt={alt}
        fill
        className='object-contain'
      />
    </div>
  );
};
