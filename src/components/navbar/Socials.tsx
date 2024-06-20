import React from "react";
import { socials } from "../../../constants";
import Image from "next/image";
import Link from "next/link";

export const Socials = () => {
  return (
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
  );
};
