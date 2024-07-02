"use client";

import React from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
}

export const TypingText = ({ text }: TypingTextProps) => {
  const splitGreeting = text.split("");
  return (
    <div className='flex gap-2 text-4xl lg:text-6xl'>
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
              {splitGreeting.length - 1 === index && "👍"}
            </span>
          </motion.span>
        );
      })}
    </div>
  );
};
