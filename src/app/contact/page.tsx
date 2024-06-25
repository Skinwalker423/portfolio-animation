import { PageTransition } from "@/components/PageTransition";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <PageTransition>
      <div className='max-w-7xl mx-auto h-screen flex flex-col justify-start items-center '>
        <h1 className='text-8xl'>Contact Me</h1>
        <Image
          src={"/hero2.png"}
          alt='hero alt'
          width={500}
          height={500}
          priority
        />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
