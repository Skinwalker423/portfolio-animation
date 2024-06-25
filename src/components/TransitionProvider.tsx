"use client";

import {
  AnimatePresence,
  motion,
  type Variants,
} from "framer-motion";
import React, { PropsWithChildren } from "react";
import { Navbar } from "./navbar/Navbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const transitionConfig = {
  duration: 0.5,
  color: "bg-black",
};

interface TransitionProviderProps
  extends PropsWithChildren {}

export const TransitionProvider = ({
  children,
}: TransitionProviderProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathname}
        className='w-screen h-screen bg-gradient-to-b from-[#fce2d3]/50 to-blue-100'
      >
        <motion.div
          exit={{ height: "140vh" }}
          initial={{ height: "0vh" }}
          animate={{
            height: "0vh",
          }}
          transition={{
            duration: transitionConfig.duration,
            ease: "easeOut",
          }}
          className={cn(
            "w-screen h-screen fixed rounded-b-[100px] z-30",
            transitionConfig.color
          )}
        />
        <motion.div
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: {
              delay: transitionConfig.duration,
            },
          }}
          className={cn(
            "w-screen h-screen fixed rounded-t-[100px] bottom-0 z-40",
            transitionConfig.color
          )}
        />
        <div className='h-24'>
          <Navbar />
        </div>
        <div className={`h-[calc(100vh-6rem)]`}>
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};
