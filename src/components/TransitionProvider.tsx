"use client";

import { AnimatePresence, motion } from "framer-motion";
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

  if (pathname === "/")
    return (
      <div
        key={pathname}
        className='min-w-screen min-h-screen'
      >
        <div className='h-24'>
          <Navbar />
        </div>
        <div className={`min-h-[calc(100vh-6rem)]`}>
          {children}
        </div>
      </div>
    );

  return (
    <AnimatePresence mode='wait'>
      <div key={pathname} className='w-screen min-h-screen'>
        <motion.div
          exit={{ height: "140vh" }}
          initial={{ height: "0vw" }}
          animate={{
            height: "0vh",
          }}
          transition={{
            duration: transitionConfig.duration,
            ease: "easeOut",
          }}
          className={cn(
            "w-screen h-full fixed rounded-b-[100px] z-30",
            transitionConfig.color
          )}
        />
        <motion.div
          initial={{ opacity: 1, scale: "100%" }}
          animate={{
            opacity: 0,
            scale: "0%",
          }}
          exit={{
            opacity: 0,
            scale: "0%",
          }}
          transition={{
            delay: 0.5,
            duration: 0.75,
            ease: "easeOut",
          }}
          className='text-white fixed m-auto top-0 left-0 bottom-0 right-0 text-4xl lg:text-8xl w-fit h-fit z-50'
        >
          {pathname.toUpperCase().replace("/", "") ||
            "Home"}
        </motion.div>
        <motion.div
          initial={{ height: "140vw" }}
          animate={{
            height: "0vw",
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
        <div className={`min-h-[calc(100vh-6rem)]`}>
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};
