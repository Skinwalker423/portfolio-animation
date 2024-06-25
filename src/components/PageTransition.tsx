"use client";

import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface PageTransitionProps extends PropsWithChildren {}

export const PageTransition = ({
  children,
}: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{
        y: "0%",
      }}
      transition={{
        duration: 1,
      }}
      className='w-full h-full'
    >
      {children}
    </motion.div>
  );
};
