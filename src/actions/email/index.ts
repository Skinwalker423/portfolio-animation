import { formSchema } from "@/lib/schemas";
import emailjs from "@emailjs/browser";
import { z } from "zod";

export const sendCommentEmail = async (
  formData: z.infer<typeof formSchema>
) => {
  try {
    const parsedData = formSchema.safeParse(formData);

    if (!parsedData.success) {
      return {
        error: `parsed data error, ${parsedData.error.message}`,
      };
    }

    await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      {
        user_email: parsedData.data.email,
        user_message: parsedData.data.comment,
        to_name: "Luis",
      },
      {
        publicKey: process.env
          .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      }
    );

    return {
      message: "Message sent. Thank you for your interest.",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: `emailjs error, ${error.message}`,
      };
    } else {
      console.error(error);
      return {
        error: `Something went wrong with sending the email. Try again later`,
      };
    }
  }
};
