import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface HeroTextBoxProps {
  title?: string;
  description?: string;
  buttonTitleOne?: string;
  buttonTitleTwo?: string;
}

export const HeroTextBox = ({
  title = "Imagine Today. Design tomorrow. Create timeless experiences.",
  description = `Are you looking for a creative and reliable developer to bring your web projects to life? I specialize in crafting functional web apps and beautiful websites that leave a lasting impact.`,
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
        <Button
          asChild
          className='ring-1'
          variant={"outline"}
        >
          <Link href={"/portfolio"}>{buttonTitleOne}</Link>
        </Button>
        <Button asChild>
          <Link href={"/contact"}>{buttonTitleTwo}</Link>
        </Button>
      </div>
    </div>
  );
};
