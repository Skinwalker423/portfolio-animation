import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email({
    message: "Not a valid email",
  }),
  comment: z.string().min(1, {
    message: "Please add a comment",
  }),
});
