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
                Background
              </h1>
              <p className='text-lg'>
                Highly motivated with years of sales,
                customer service experience, and a dedicated
                tech enthusiast seeking IT Networking roles
                to leverage strong problem-solving,
                communication, and active listening skills.
                Proven ability to resolve customer issues
                promptly and efficiently, maintain a
                positive and professional demeanor, and
                adapt to diverse communication styles.
              </p>

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
                <ExperienceRow
                  title='Web Developer'
                  company='Freelance'
                  date='2021 - Present'
                  description='Collaborate with clients, website and graphic designers, monitor website traffic, troubleshoot website problems when they arise, and update websites as necessary.'
                />
                <ExperienceRow
                  variant='reverse'
                  title='Aspiring Developer'
                  company='100 Devs'
                  date='2020 - 2021'
                  description='A community of aspiring developers working on community based projects and collaborating to design web apps, while learning different technologies.'
                />
                <ExperienceRow
                  company='LBCC Long Beach City College'
                  title='A.S. Electrical Technology'
                  description='Fundamentals of circuitry, Programming Control Logic, Arduino, Solidworks, Network installation (CCNA), and troubleshooting'
                  date='2016'
                />
                <ExperienceRow
                  variant='reverse'
                  title='Inside Sales'
                  company='Public Storage'
                  date=''
                  description='Receive inbound calls from potential customers to maximize reservations and rentals in an expert consultative approach. Consistently provide exceptional customer service and professionalism to all our customers'
                />
                <ExperienceRow
                  title='Travel Agent / Sales'
                  company='Disney'
                  date=''
                  description='Engage with Guests exploring their desired vacation experience, providing recommendations and direction for a vacation at Walt Disney resorts worldwide.'
                />
                <ExperienceRow
                  variant='reverse'
                  title='Assistant Manager Customer Service'
                  company="Chevron / Terrible's Casino"
                  date=''
                  description='Payroll, accounts payable, accounts receivable, inventory managament, and train customer service agents.'
                />
                <ExperienceRow
                  title='Sales Associate'
                  company='Radioshack'
                  description='Interacting with customers and helping them find the products for their DIY electronics projects and home networking needs such as CAT5 cables, RJ-45 connectors, modems, adapters and couplers'
                  date=''
                />
                <ExperienceRow
                  variant='reverse'
                  title='A.A. Business Administration'
                  company='Cerritos College'
                  description='A.A. Emphasis on Computer Information Systems'
                  date='2006'
                />
                <ExperienceRow
                  title='Sales Representative'
                  company='Verizon Wireless / Mobile Telesys'
                  description='Build rapport with customers to sell Verizon Wireless cellphones, run credit checks, and established service contracts'
                  date=''
                />
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
