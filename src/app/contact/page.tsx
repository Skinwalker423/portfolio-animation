"use client";

import React from "react";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

const GREETING = "Say Hello!";

const ContactPage = () => {
  const splitGreeting = GREETING.split("");

  return (
    <PageTransition>
      <div className='h-[calc(100vh-6rem)] lg:h-full w-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center'>
        <div className='flex-1 items-center'>
          <div className='flex'>
            {splitGreeting.map((letter, index) => {
              console.log(typeof letter);

              return (
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    ease: "easeIn",
                    delay: index * 0.1,
                    duration: 3,
                    repeat: Infinity,
                  }}
                  key={index}
                >
                  {letter === " " ? <>&nbsp;</> : letter}
                </motion.span>
              );
            })}
          </div>
        </div>
        <div className='flex-1'>bottom / right &nbsp;</div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
