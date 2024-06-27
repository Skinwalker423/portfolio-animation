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
          <div className='flex flex-col p-4 gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
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
              className='flex flex-col justify-center'
            >
              <h1 className='text-2xl font-bold'>
                EXPERIENCE
              </h1>
              <div className='flex'>
                {/* left */}
                <div className='flex flex-col py-4 flex-1'>
                  <div className='flex flex-col gap-6'>
                    <h2 className='bg-white text-black px-2 py-3 font-bold text-2xl rounded-lg text-center text-clip'>
                      Freelance Web Developer
                    </h2>
                    <p className='italic text-clip'>
                      Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit.
                      Cupiditate, et! Lorem ipsum dolor, sit
                      amet consectetur adipisicing elit.
                      Cupiditate, et!
                    </p>
                    <span className='text-red-400'>
                      2022 - present
                    </span>
                    <span>
                      <Badge className='bg-white text-black hover:text-white hover:bg-black/60'>
                        Apple
                      </Badge>
                    </span>
                  </div>
                </div>
                {/* center */}

                <div className='flex flex-col items-center mx-2 lg:mx-10 mt-4 flex-shrink-0'>
                  <div className='bg-white ring-4 ring-red-500 rounded-full w-4 h-4 md:w-6 md:h-6 '></div>
                  <div className='w-2 bg-black h-full'></div>
                </div>

                {/* right */}
                <div className='h-full w-full border flex-1'></div>
              </div>
              <div className='flex'>
                {/* left */}
                <div className='h-full w-full flex-1 border'></div>

                {/* center */}

                <div className='flex flex-col items-center mx-2 lg:mx-10 flex-shrink-0'>
                  <div className='bg-white ring-4 ring-red-500 rounded-full w-4 h-4 md:w-6 md:h-6 '></div>
                  <div className='w-2 bg-black h-full'></div>
                </div>

                {/* right */}
                <div className='flex flex-col flex-1'>
                  <div className='flex flex-col gap-6'>
                    <h2 className='bg-white text-black px-2 py-3 font-bold text-2xl rounded-lg text-center text-clip'>
                      Freelance Web Developer
                    </h2>
                    <p className='italic text-clip'>
                      Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit.
                      Cupiditate, et! Lorem ipsum dolor, sit
                      amet consectetur adipisicing elit.
                      Cupiditate, et!
                    </p>
                    <span className='text-red-400'>
                      2022 - present
                    </span>
                    <span>
                      <Badge className='bg-white text-black hover:text-white hover:bg-black/60'>
                        Apple
                      </Badge>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex'>
                {/* left */}
                <div className='flex flex-col flex-1'>
                  <div className='flex flex-col gap-6'>
                    <h2 className='bg-white text-black px-2 py-3 font-bold text-2xl rounded-lg text-center text-clip'>
                      Freelance Web Developer
                    </h2>
                    <p className='italic text-clip'>
                      Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit.
                      Cupiditate, et! Lorem ipsum dolor, sit
                      amet consectetur adipisicing elit.
                      Cupiditate, et!
                    </p>
                    <span className='text-red-400'>
                      2022 - present
                    </span>
                    <span>
                      <Badge className='bg-white text-black hover:text-white hover:bg-black/60'>
                        Apple
                      </Badge>
                    </span>
                  </div>
                </div>
                {/* center */}

                <div className='flex flex-col items-center mx-2 lg:mx-10 flex-shrink-0'>
                  <div className='bg-white ring-4 ring-red-500 rounded-full w-4 h-4 md:w-6 md:h-6 '></div>
                  <div className='w-2 bg-black h-full'></div>
                </div>

                {/* right */}
                <div className='h-full w-full border flex-1'></div>
              </div>
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
