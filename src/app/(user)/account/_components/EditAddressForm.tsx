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
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const FormSchema = z.object({
  name: z.string().min(2),
  city: z.string().min(2),
  house: z.string().min(5),
  state: z.string().min(5),
  street: z.string().min(5),
  pincode: z.string().min(5),
  landmark: z.string().min(5),
  country: z.string().min(5),
  
  
  

})

export default function EditAddressForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name:"Souvik Sarkar",
      city:"Balurghat",
      house:"A3N33",
      state:"West Bengal",
      street:"NH512",
      pincode:"733101",
      landmark:"Near Sum Hospital",
      country:"India",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col justify-between items-end gap-4 space-y-6">
       <div className="flex gap-4 w-full justify-center flex-wrap items-center pt-6" > <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-[45%]" >
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="w-[45%]" >
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Your City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="house"
          render={({ field }) => (
            <FormItem className="w-[45%]">
              <FormLabel>House</FormLabel>
              <FormControl>
                <Input placeholder="house No" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem className="w-[45%]">
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input placeholder="street No" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="w-[45%]">
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="Your State" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pincode"
          render={({ field }) => (
            <FormItem className="w-[45%]">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Your Pincode" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="landmark"
          render={({ field }) => (
            <FormItem className="w-[45%]">
              <FormLabel>Landmark</FormLabel>
              <FormControl>
                <Input placeholder="Places near You" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem className="w-[45%]">
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input placeholder="Your Country" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        </div>
        <Button className="mr-6" type="submit">Submit</Button>
      </form>
    </Form>
  )
}
