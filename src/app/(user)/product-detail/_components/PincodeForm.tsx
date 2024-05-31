"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const FormSchema = z.object({
    pincode: z.coerce.number().min(5),
})

export default function FooterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
   
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-[80%] gap-2 p-2">
        <FormField
          control={form.control}
          name="pincode"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter Your Pincode" {...field} className="border-[1px] border-gray-400 rounded-full px-14 text-base" />
              </FormControl>
              <FormDescription>
                Enter Your Pincode To Check Availability
              </FormDescription>
              <FormMessage className="pl-2" />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full px-14 text-base">Check</Button>
      </form>
    </Form>
  )
}
