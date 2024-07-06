import React from "react";
import { socials } from "../../../constants";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Socials = () => {
  return (
    <div className='hidden md:flex gap-4 justify-end'>
      {socials.map(({ alt, href, src }) => {
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a target='_blank' key={alt} href={href}>
                  <Image
                    src={src}
                    alt={alt}
                    width={24}
                    height={24}
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent className='mt-3'>
                <p>{alt}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};
