"use client";

import React, { useState } from "react";

import { links } from "../../../constants";
import Link from "next/link";
import {
  type Variants,
  motion,
  stagger,
} from "framer-motion";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const topMenuBarVariant: Variants | undefined = {
    opened: {
      rotate: 45,
      transition: {
        duration: 0.25,
        ease: "easeIn",
      },
      backgroundColor: "rgb(255,255,255)",
    },
    closed: {
      rotate: 0,
    },
  };
  const centerMenuBarVariant: Variants | undefined = {
    opened: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  };
  const bottomMenuBarVariant: Variants | undefined = {
    opened: {
      rotate: -45,
      transition: {
        duration: 0.25,
        ease: "easeIn",
      },
      backgroundColor: "rgb(255,255,255)",
    },
    closed: {
      rotate: 0,
    },
  };

  const linksVariants: Variants | undefined = {
    opened: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <div className='md:hidden z-40'>
      <button
        onClick={() => setOpen((prevState) => !prevState)}
        className='w-10 h-8 flex flex-col justify-between z-50 relative'
      >
        <motion.div
          animate={open ? "opened" : "closed"}
          variants={topMenuBarVariant}
          className='w-10 h-1 bg-black rounded origin-left z-50'
        ></motion.div>
        <motion.div
          animate={open ? "opened" : "closed"}
          variants={centerMenuBarVariant}
          className='w-10 h-1 bg-black rounded z-50'
        ></motion.div>
        <motion.div
          animate={open ? "opened" : "closed"}
          variants={bottomMenuBarVariant}
          className='w-10 h-1 bg-black rounded origin-left z-50'
        ></motion.div>
      </button>

      {open && (
        <motion.nav
          variants={linksVariants}
          animate={open ? "opened" : "closed"}
          className='absolute top-0 left-0 w-screen h-screen bg-black flex flex-col items-center justify-center gap-8 text-4xl text-white'
        >
          {links.map(({ title, url }) => {
            return (
              <Link href={url} key={title}>
                {title}
              </Link>
            );
          })}
        </motion.nav>
      )}
    </div>
  );
};
