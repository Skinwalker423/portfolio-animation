import React from "react";
import { ExperienceListItem } from "./ExperienceListItem";
import { CenterLine } from "./CenterLine";
import { EmptyListItem } from "./EmptyListItem";

interface ExperienceRowProps {
  title: string;
  description: string;
  date: string;
  company: string;
  variant?: "reverse";
}

export const ExperienceRow = (
  props: ExperienceRowProps
) => {
  return (
    <div className='flex'>
      {/* left */}
      {props.variant ? (
        <EmptyListItem />
      ) : (
        <ExperienceListItem {...props} />
      )}

      {/* center */}
      <CenterLine />

      {/* right */}
      {props.variant ? (
        <ExperienceListItem {...props} />
      ) : (
        <EmptyListItem />
      )}
    </div>
  );
};
