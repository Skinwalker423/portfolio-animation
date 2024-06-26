"use client";
import React from "react";
import { type Variants, motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { signature } from "../../../public";
import Image from "next/image";
import { CircleArrowDown } from "lucide-react";

const AboutPage = () => {
  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);

  const variants: Variants | undefined = {
    variant1: {
      x: 500,
      opacity: 0,
      rotate: 180,
      transition: {
        bounce: 0.5,
        duration: 4,
        delay: 2,
        type: "spring",
      },
    },
    variant2: {
      x: 200,
      y: 200,
      rotate: 45,
      transition: { duration: 4 },
    },
  };

  return (
    <PageTransition>
      <div className='max-w-7xl mx-auto flex flex-col'>
        <div className='flex md:grid md:grid-cols-2'>
          {/* text */}
          <div className='flex flex-col'>
            <div className='flex flex-col gap-12 justify-center'>
              <h1 className='text-2xl font-bold'>
                BIOGRAPHY
              </h1>
              <p className='text-lg'>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Possimus magni blanditiis
                numquam perferendis consequuntur? Quibusdam
                autem eaque, rem culpa est enim eligendi
                molestiae incidunt explicabo sint odio
                numquam qui voluptatem?
              </p>
              <span className='italic'>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit.
              </span>
              <div className='self-end'>
                <Image
                  src={signature}
                  alt={"signature"}
                  width={185}
                  height={77}
                />
              </div>
              <div>
                <CircleArrowDown
                  className='stroke-red-500'
                  size={64}
                />
              </div>
            </div>
            <div>SKILLS</div>
            <div>EXPERIENCE</div>
          </div>
          {/* image */}
          <div className='hidden md:block'>image</div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
