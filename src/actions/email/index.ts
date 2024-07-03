"use server";

import { formSchema } from "@/app/contact/_components/ContactForm";
import emailjs from "@emailjs/browser";
import { z } from "zod";

export const sendCommentEmail = async (
  formData: z.infer<typeof formSchema>
) => {
  try {
    const parsedData = formSchema.safeParse(formData);

    if (!parsedData.success) {
      return {
        error: parsedData.error.message,
      };
    }

    const confirmationEmail = await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      {
        user_email: parsedData.data.email,
        user_message: parsedData.data.comment,
      },
      {
        publicKey: process.env
          .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      }
    );

    return {
      message: confirmationEmail.text,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else {
      return {
        error:
          "Something went wrong with sending the email",
      };
    }
  }
};
