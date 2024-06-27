import { Badge } from "@/components/ui/badge";
import React from "react";

interface ExperienceListItemProps {
  title?: string;
  description?: string;
  date?: string;
  company?: string;
  variant?: "reverse";
}

export const ExperienceListItem = ({
  company = "Apple",
  date = "2022 - present",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, et! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Cupiditate, et!",
  title = "Freelance Web Developer",
}: ExperienceListItemProps) => {
  return (
    <div className='flex flex-col pb-4 flex-1'>
      <div className='flex flex-col gap-6'>
        <h2 className='bg-white text-black px-2 py-3 font-bold text-2xl rounded-lg text-center text-clip'>
          {title}
        </h2>
        <p className='italic text-clip'>{description}</p>
        <span className='text-red-400'>{date}</span>
        <span>
          <Badge className='bg-white text-black hover:text-white hover:bg-black/60'>
            {company}
          </Badge>
        </span>
      </div>
    </div>
  );
};
