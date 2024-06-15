import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className='h-full flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-8 md:px-12 xl:px-0'>
      <div>
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
      <div>right side</div>
    </div>
  );
};
