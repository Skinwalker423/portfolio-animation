import React from "react";
import { ExperienceListItem } from "./ExperienceListItem";
import { CenterLine } from "./CenterLine";
import { EmptyListItem } from "./EmptyListItem";

interface ExperienceRowProps {
  title?: string;
  description?: string;
  date?: string;
  company?: string;
  variant?: "reverse";
}

export const ExperienceRow = ({
  company = "Apple",
  date = "2022 - present",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, et! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Cupiditate, et!",
  title = "Freelance Web Developer",
  variant,
}: ExperienceRowProps) => {
  return (
    <div className='flex'>
      {/* left */}
      {variant ? (
        <EmptyListItem />
      ) : (
        <ExperienceListItem
          company={company}
          date={date}
          description={description}
          title={title}
          variant={variant}
        />
      )}

      {/* center */}
      <CenterLine />

      {/* right */}
      {variant ? (
        <ExperienceListItem
          company={company}
          date={date}
          description={description}
          title={title}
          variant={variant}
        />
      ) : (
        <EmptyListItem />
      )}
    </div>
  );
};
