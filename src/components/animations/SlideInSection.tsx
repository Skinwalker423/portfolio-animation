"use client";

import { PropsWithChildren, useRef } from "react";
import { useInView, motion } from "framer-motion";

interface SlideInSectionProps extends PropsWithChildren {}

export function SlideInSection({
  children,
}: SlideInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50px",
  });

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
        x: "-300px",
      }}
      animate={
        isInView
          ? {
              x: 0,
              opacity: 1,
            }
          : {}
      }
      transition={{
        ease: "easeIn",
        bounce: 1,
        delay: 0.2,
      }}

      // style={{
      //   transform: isInView
      //     ? "none"
      //     : "translateX(-200px)",
      //   opacity: isInView ? 1 : 0,
      //   transition:
      //     "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      // }}
    >
      {children}
    </motion.section>
  );
}
