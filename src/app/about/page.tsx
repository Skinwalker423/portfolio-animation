"use client";
import React, { useRef } from "react";
import { type Variants, useScroll } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { signature } from "../../../public";
import Image from "next/image";
import {
  CircleArrowDown,
  CornerRightUp,
} from "lucide-react";
import { techXp } from "../../../constants";
import { Badge } from "@/components/ui/badge";
import { ExperienceRow } from "./_components/experience/ExperienceRow";
import { Button } from "@/components/ui/button";
import Brain from "./_components/Brain";
import { SlideInSection } from "@/components/animations/SlideInSection";

const AboutPage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

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
      <div className='flex flex-col w-full h-full'>
        <div
          ref={containerRef}
          className='flex w-full h-full'
        >
          {/* text */}
          <div className='flex flex-col p-4 sm:p-8 md:p-12 lg:p-20 gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-full'>
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
            <SlideInSection>
              <div
                id='skills'
                className='flex flex-col gap-12 justify-center'
              >
                <h1 className='text-2xl font-bold'>
                  SKILLS
                </h1>
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
            </SlideInSection>
            <SlideInSection>
              <div
                id='experience'
                className='flex flex-col justify-center'
              >
                <h1 className='text-2xl font-bold mb-12'>
                  EXPERIENCE
                </h1>
                <ExperienceRow />
                <ExperienceRow variant='reverse' />
                <ExperienceRow />
              </div>
            </SlideInSection>
            <SlideInSection>
              <Button
                className='max-w-40'
                variant={"destructive"}
                asChild
              >
                <a href='#' className='flex gap-3'>
                  <span>Back to top</span> <CornerRightUp />
                </a>
              </Button>
            </SlideInSection>
          </div>
          {/* image */}
          <div className='w-full h-screen hidden lg:block sticky top-0 z-30'>
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
