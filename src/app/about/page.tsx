"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100, y: 300, opacity: 0 }}
        transition={{ bounce: 1, duration: 2, delay: 2 }}
        className='w-96 h-96 bg-red-400 rounded'
      >
        AboutPage
      </motion.div>
      ;
    </div>
  );
};

export default AboutPage;
