"use client";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendCommentEmail } from "@/actions/email";

export const formSchema = z.object({
  email: z.string().email({
    message: "Not a valid email",
  }),
  comment: z.string().min(1, {
    message: "Please add a comment",
  }),
});

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [error, seterror] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      comment: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof formSchema>
  ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const emailResonse = await sendCommentEmail(values);

    if (emailResonse.error) {
      seterror(emailResonse.error);
    }
    if (emailResonse.message) {
      setMessage(emailResonse.message);
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 w-full p-24 bg-neutral-100 rounded-xl'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='myemail@example.com'
                  {...field}
                  className='bg-transparent outline-none ring-offset-0 border border-b-4 border-b-black focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none border-t-0 border-x-0 focus-visible:border-b-secondary'
                />
              </FormControl>
              <FormDescription>
                Your email address
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='comment'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Have any questions?'
                  {...field}
                  className='bg-transparent outline-none ring-offset-0 border border-b-4 border-b-black focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none border-t-0 border-x-0 focus-visible:border-b-secondary'
                />
              </FormControl>
              <FormDescription>
                Send me a message
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit'>
          Send
        </Button>
      </form>
      {error && (
        <p className='text-red-500'>
          Error message: {error}
        </p>
      )}
      {message && (
        <p className='text-green-500'>message: {message}</p>
      )}
    </Form>
  );
}
