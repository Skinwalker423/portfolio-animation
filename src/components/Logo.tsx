import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div className='md:hidden lg:flex justify-center'>
      <Link
        className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center gap-3'
        href={"/"}
      >
        <span className='text-white px-1'>Art</span>
        <span className='bg-white text-black w-12 h-8 flex items-center justify-center'>
          .dev
        </span>
      </Link>
    </div>
  );
};
