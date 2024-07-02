import React from "react";
import { Button } from "../ui/button";

interface HeroTextBoxProps {
  title?: string;
  description?: string;
  buttonTitleOne?: string;
  buttonTitleTwo?: string;
}

export const HeroTextBox = ({
  title = "Crafting Digital Experiences, Designing Tomorrow.",
  description = `Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Vel, quis earum. Eos laboriosam soluta quae
        illo molestiae, sapiente quidem dignissimos
        praesentium quo! Sint totam omnis, necessitatibus
        mollitia illo optio ipsa!`,
  buttonTitleOne = "Learn more",
  buttonTitleTwo = "Get started",
}: HeroTextBoxProps) => {
  return (
    <div className='flex flex-col flex-1 w-full px-2 justify-center gap-5 sm:gap-8'>
      <h1 className='text-4xl lg:text-6xl font-bold'>
        {title}
      </h1>
      <p className='text-clip lg:text-xl'>{description}</p>
      <div className='space-x-3'>
        <Button className='ring-1' variant={"outline"}>
          {buttonTitleOne}
        </Button>
        <Button>{buttonTitleTwo}</Button>
      </div>
    </div>
  );
};
