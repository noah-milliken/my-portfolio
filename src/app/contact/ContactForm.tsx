"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { sendEmail } from "@/utils/send-email";
//components
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


//form schemas
const required_error = "This field cannot be left blank";

const formSchema = z.object({
    emailAddress: z.string().email(),
    message: z.string({required_error})
})


export default function ContactForm() {
   const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        emailAddress: '',
        message: ''
    }
   })
   const onSubmit = (values) => {
    sendEmail(values)
   }
   return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="emailAddress"
                render={({field}) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="emailme@yourEmail.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Email address
                    </FormDescription>
                    <FormMessage />
                  </FormItem> 
                )}
            />
            <FormField
                control={form.control}
                name="message"
                render={({field}) => (
                    <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field}></Textarea>
                    </FormControl>
                    <FormDescription>
                      Email address
                    </FormDescription>
                    <FormMessage />
                  </FormItem> 
                )}
            />
            <Button type='submit'>Send Message</Button>
        </form>

    </Form>
   )
}
