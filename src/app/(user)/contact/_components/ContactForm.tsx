"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"

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
import { Send } from "lucide-react"


const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email   : z.coerce.string().email().min(5),
  message :z.string().min(5)
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email:"",
      message:"",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 font-bold ">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-lg" >Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" className="placeholder:text-slate-400 placeholder:font-medium" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-lg" >Email</FormLabel>
              <FormControl>
                <Input placeholder="youremail@email.com" className="placeholder:text-slate-400 placeholder:font-medium" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-lg" >Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here"  className="h-[100px] placeholder:text-slate-400 placeholder:font-medium" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit" className="w-full flex gap-2 justify-center items-center">Send Message <Send size={18} /></Button>
      </form>
    </Form>
  )
}
