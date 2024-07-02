"use client";

import React from "react";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ContactForm } from "./_components/ContactForm";

const GREETING = "Say Hello!";

const ContactPage = () => {
  const splitGreeting = GREETING.split("");

  return (
    <PageTransition>
      <div className='h-[calc(100vh-6rem)] w-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center'>
        <div className='flex flex-1 items-center justify-center text-4xl lg:text-6xl'>
          <div className='flex gap-2'>
            {splitGreeting.map((letter, index) => {
              return (
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    ease: "easeInOut",
                    delay: index * 0.1,
                    duration: 3,
                    repeat: Infinity,
                  }}
                  key={index}
                >
                  {letter === " " ? <>&nbsp;</> : letter}
                  <span>
                    {splitGreeting.length - 1 === index &&
                      "😊"}
                  </span>
                </motion.span>
              );
            })}
          </div>
        </div>
        <div className='flex w-full flex-1 items-center'>
          <ContactForm />
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
