import React from "react";
import { PageTransition } from "@/components/PageTransition";
import { ContactForm } from "./_components/ContactForm";
import { TypingText } from "@/components/animations/TypingText";

const GREETING = "Say Hello!";

const ContactPage = () => {
  return (
    <PageTransition>
      <div className='h-[calc(100vh-6rem)] w-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center'>
        <div className='flex flex-1 items-center justify-center'>
          <TypingText text={GREETING} />
        </div>
        <div className='flex w-full flex-1 items-center'>
          <ContactForm />
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
