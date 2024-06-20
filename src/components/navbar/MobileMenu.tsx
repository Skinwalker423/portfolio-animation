"use client";

import React, { useState } from "react";

import { Menu } from "lucide-react";
import { links } from "../../../constants";
import Link from "next/link";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='md:hidden'>
      <button
        onClick={() => setOpen((prevState) => !prevState)}
        className='w-10 h-8 flex flex-col justify-between z-50 relative'
      >
        {open ? (
          <p className='z-50 text-white'>X</p>
        ) : (
          <Menu className='z-50' color='black' size={40} />
        )}
      </button>

      {open && (
        <div className='absolute top-0 left-0 w-screen h-screen bg-black flex flex-col items-center justify-center gap-8 text-4xl text-white'>
          {links.map(({ title, url }) => {
            return (
              <Link href={url} key={title}>
                {title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
