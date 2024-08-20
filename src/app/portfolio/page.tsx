"use client";

import { PageTransition } from "@/components/PageTransition";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useRef } from "react";
import { projects } from "../../../constants";
import Image from "next/image";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { RotatingTextAroundCircleLink } from "@/components/animations/RotatingContactMe";
import { SlideInSection } from "@/components/animations/SlideInSection";
import { Button } from "@/components/ui/button";
import { CornerRightUp } from "lucide-react";

const PortfolioPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["11%", "-80%"]
  );
  return (
    <PageTransition>
      <div
        id='top'
        className='h-[600vh] relative'
        ref={containerRef}
        style={{
          position: "relative",
        }}
      >
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
          My Projects
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-cyan-300 to-orange-200' />
            {projects.map((item, index) => {
              return (
                <div
                  className={cn(
                    `h-screen w-screen flex items-center justify-center`,
                    `bg-gradient-to-r ${
                      index % 2 === 0
                        ? "from-orange-200 to-cyan-300"
                        : "from-cyan-300 to-orange-200"
                    }`
                  )}
                  key={item.id}
                >
                  <div className='flex flex-col gap-8 text-white'>
                    <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>
                      {item.title}
                    </h1>
                    <div className='relative w-80 h-56 aspect-video md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className='object-contain'
                        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    </div>
                    <p className='w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] font-bold text-black'>
                      {item.desc}
                    </p>
                    <Button
                      asChild
                      size={"lg"}
                      className='w-32 flex self-end p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-secondary text-secondary-foreground hover:bg-yellow-600'
                    >
                      <a href={item.link} target='_blank'>
                        See Demo
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-[calc(100vh-5rem)] sm:h-[calc(100vh-7rem)] md:h-[calc(100vh-9rem)] lg:h-[calc(100vh-12rem)]  flex flex-col justify-center items-center md:pt-40 px-5'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl text-center'>
          Do you have a project idea?
        </h1>
        <RotatingTextAroundCircleLink
          rotatingText='Front-end Developer and UI Designer'
          innerText='Contact Me'
          rotatingTextColor='fill-secondary'
          href='/contact'
        />
      </div>
      <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:px-52'>
        <SlideInSection>
          <Button
            className='max-w-40'
            variant={"destructive"}
            asChild
          >
            <Link
              href={"/portfolio"}
              className='flex gap-3'
            >
              <span>Back to top</span> <CornerRightUp />
            </Link>
          </Button>
        </SlideInSection>
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;
