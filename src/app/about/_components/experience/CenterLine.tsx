import React from "react";

export const CenterLine = () => {
  return (
    <div className='flex flex-col items-center mx-2 lg:mx-10 xl:mx-20 flex-shrink-0'>
      <div className='bg-white ring-4 ring-red-500 rounded-full w-4 h-4 md:w-6 md:h-6 '></div>
      <div className='w-2 bg-black h-full'></div>
    </div>
  );
};
