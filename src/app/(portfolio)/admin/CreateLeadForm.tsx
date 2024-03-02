"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

//components
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
import { useRouter } from "next/navigation";

//form schemas
const required_error = "This field cannot be left blank";

const formSchema = z.object({
  first_name: z.string({ required_error }),
  last_name: z.string(),
  linkedin_url: z.string(),
  email_address: z.string().email(),
});

export default function ContactForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      linkedin_url: "",
      email_address: "",
    },
  });
  const {
    reset,
    formState: { isSubmitSuccessful },
  } = form;

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    console.log(res);

    const lead = await res.json();
    console.log(lead);
    if (lead.error) {
      console.log(lead.error);
    }
    if (lead.data) {
      setIsLoading(false);
      router.refresh();
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
        <div className="sm:flex flex-col sm:space-y-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormControl>
                  <Input placeholder="First Name*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormControl>
                  <Input placeholder="Last Name*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email_address"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormControl>
                  <Input placeholder="Email *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="linkedin_url"
          render={({ field }) => (
            <FormItem className="w-1/3">
              <FormControl>
                <Input placeholder="Linked In *" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Lead</span>}
        </Button>
      </form>
    </Form>
  );
}
