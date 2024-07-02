"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface RotatingTextAroundCircleLinkProps {
  rotatingText: string;
  innerText?: string;
  href?: string;
  rotatingTextColor?: string;
  innerTextColor?: string;
  circleColor?: string;
}

export const RotatingTextAroundCircleLink = ({
  rotatingText,
  innerText,
  href = "/",
  rotatingTextColor = "fill-black",
  innerTextColor = "text-white",
  circleColor = "bg-black",
}: RotatingTextAroundCircleLinkProps) => {
  return (
    <div className='relative'>
      <motion.svg
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
        viewBox='0 0 300 300'
        className='w-80 h-80 md:w-[500px] md:h-[500px]'
      >
        <defs>
          <path
            id='circlePath'
            d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
          />
        </defs>
        <text className=''>
          <textPath
            xlinkHref='#circlePath'
            className={cn("text-xl", rotatingTextColor)}
          >
            {rotatingText}
          </textPath>
        </text>
      </motion.svg>
      <Link className='' href={href}>
        <Button
          className={cn(
            "absolute top-0 left-0 right-0 bottom-0 m-auto h-24 w-24 md:w-32 md:h-32 rounded-full flex justify-center items-center shadow-xl",
            innerTextColor,
            circleColor
          )}
        >
          {innerText}
        </Button>
      </Link>
    </div>
  );
};
