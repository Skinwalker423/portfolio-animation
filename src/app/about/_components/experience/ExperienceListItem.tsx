import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

interface ExperienceListItemProps {
  title?: string;
  description?: string;
  date?: string;
  company?: string;
  variant?: "reverse";
}

export const ExperienceListItem = ({
  company,
  date,
  description,
  title,
  variant,
}: ExperienceListItemProps) => {
  return (
    <div className='flex flex-col pb-4 flex-1'>
      <div className='flex flex-col gap-6'>
        <h2
          className={cn(
            "bg-white text-black px-2 py-3 font-bold text-lg md:text-2xl rounded-lg text-center text-clip",
            variant ? "rounded-tl-none" : "rounded-tr-none"
          )}
        >
          {title}
        </h2>
        <p className='italic text-clip text-sm md:text-base'>
          {description}
        </p>
        <span className='text-red-400 text-sm font-semibold'>
          {date}
        </span>
        <span>
          <Badge className='bg-white text-black text-sm md:text-lg font-semibold hover:text-white hover:bg-black/60'>
            {company}
          </Badge>
        </span>
      </div>
    </div>
  );
};
