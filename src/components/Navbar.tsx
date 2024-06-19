import Link from "next/link";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { links } from "../../constants";

export const Navbar = () => {
  return (
    <div className='h-full flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-8 md:px-12 xl:px-0'>
      {/* logo */}
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
      {/* responsive user menu */}

      <div>
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative'>
          <Menu className='z-50' color='white' size={40} />
          {/* <div className='w-10 h-1 bg-white rounded'></div>
          <div className='w-10 h-1 bg-white rounded'></div>
          <div className='w-10 h-1 bg-white rounded'></div> */}
        </button>

        <div className='absolute top-0 left-0 w-screen h-screen bg-black flex flex-col items-center justify-center gap-8 text-4xl text-white'>
          {links.map(({ title, url }) => {
            return (
              <Link href={url} key={title}>
                {title}
              </Link>
            );
          })}
        </div>
      </div>

      {/* <Menubar className='p-0'>
        <MenubarMenu>
          <MenubarTrigger className='w-full border-none'>
            <Menu size={32} />
          </MenubarTrigger>
          <MenubarContent className='absolute top-0 left-0 w-screen h-screen bg-black flex flex-col items-center justify-center gap-8 text-4xl '>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar> */}
    </div>
  );
};
