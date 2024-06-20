"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu } from "lucide-react";

import { links, socials } from "../../../constants";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='h-full flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-8 md:px-12 xl:px-0 lg:grid lg:grid-cols-3'>
      <div className='hidden md:flex gap-8 justify-start'>
        {links.map(({ title, url }) => {
          return (
            <Link href={url} key={title}>
              {title}
            </Link>
          );
        })}
      </div>
      {/* logo */}
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
      <div className='hidden md:flex gap-4 justify-end'>
        {socials.map(({ alt, href, src }) => {
          return (
            <Link key={alt} href={href}>
              <Image
                src={src}
                alt={alt}
                width={24}
                height={24}
              />
            </Link>
          );
        })}
      </div>
      {/* responsive user menu */}

      <div className='md:hidden'>
        <button
          onClick={() => setOpen((prevState) => !prevState)}
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
        >
          {open ? (
            <p className='z-50 text-white'>X</p>
          ) : (
            <Menu
              className='z-50'
              color='black'
              size={40}
            />
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
