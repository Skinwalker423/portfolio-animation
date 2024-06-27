"use client";
import React from "react";
import { type Variants, motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { signature } from "../../../public";
import Image from "next/image";
import { CircleArrowDown } from "lucide-react";
import { techXp } from "../../../constants";
import { Badge } from "@/components/ui/badge";

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
      <div className='flex flex-col'>
        <div className='flex md:grid md:grid-cols-2'>
          {/* text */}
          <div className='flex flex-col p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
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
              <a href='#skills'>
                <CircleArrowDown
                  className='stroke-red-500'
                  size={64}
                />
              </a>
            </div>
            <div
              id='skills'
              className='flex flex-col gap-12 justify-center'
            >
              <h1 className='text-2xl font-bold'>SKILLS</h1>
              <div className='flex flex-wrap gap-2'>
                {techXp.map((tech) => {
                  return (
                    <Badge key={tech.name}>
                      {tech.name}
                    </Badge>
                  );
                })}
              </div>
              <a href='#experience'>
                <CircleArrowDown
                  className='stroke-red-500'
                  size={64}
                />
              </a>
            </div>
            <div
              id='experience'
              className='flex flex-col gap-12 justify-center'
            >
              <h1 className='text-2xl font-bold'>
                EXPERIENCE
              </h1>
              <div>xp list</div>
            </div>
          </div>
          {/* image */}
          <div className='hidden md:block'>image</div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
