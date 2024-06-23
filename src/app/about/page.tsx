"use client";
import React, { useRef } from "react";
import { type Variants, motion } from "framer-motion";
import { useFollowPointer } from "@/hooks/useFollowPointer";

const AboutPage = () => {
  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);

  const variants: Variants | undefined = {
    variant1: {
      x: 300,
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
      x: 100,
      y: 100,
      rotate: 45,
      transition: { duration: 4 },
    },
  };

  return (
    <div className='h-full flex items-center justify-center'>
      <motion.div
        initial={{ x: -100 }}
        animate={"variant1"}
        variants={variants}
        transition={{ bounce: 1, duration: 2, delay: 2 }}
        className='w-96 h-40 bg-red-400 rounded'
      >
        AboutPage
      </motion.div>
      {/* <motion.div
        ref={ref}
        className='w-40 h-40 rounded-full bg-blue-400'
        style={{ x, y }}
      /> */}
      ;
    </div>
  );
};

export default AboutPage;
