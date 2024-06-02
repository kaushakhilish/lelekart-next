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
  vendorName: z.string().min(5),
  companyName: z.string().min(5),
  phoneNumber: z.string().min(5),
  email: z.string().min(5),
  businessName: z.string().min(5),
  displayName: z.string().min(5),
  name: z.string().min(5),
  house: z.string().min(5),
  street: z.string().min(5),
  landmark: z.string().min(5),
  city: z.string().min(5),
  state: z.string().min(5),
  pincode: z.string().min(5),
  country: z.string().min(5),
  pan: z.string().min(5),
  aadhar: z.string().min(5),
  gst: z.string().min(5),
  accountNumber: z.string().min(5),
  accountHolderName: z.string().min(5),
  bankName: z.string().min(5),
  branchName: z.string().min(5),
  ifscCode: z.string().min(5),
})

export default function VendorCompanyForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        vendorName: "Souvik Sarkar",
        companyName: "Acme Corporation",
        phoneNumber: "1234567890",
        email: "souvik@example.com",
        businessName: "Acme Business",
        displayName: "Acme Display",
        name: "Souvik Sarkar",
        house: "123",
        street: "Main Street",
        landmark: "Near Central Park",
        city: "Metropolis",
        state: "Stateville",
        pincode: "123456",
        country: "Countryland",
        pan: "ABCDE1234F",
        aadhar: "123412341234",
        gst: "22AAAAA0000A1Z5",
        accountNumber: "123456789012",
        accountHolderName: "Souvik Sarkar",
        bankName: "Bank of Countryland",
        branchName: "Central Branch",
        ifscCode: "BKID0001234",
      }
      
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="flex flex-wrap justify-between p-0 items-start">
          <FormField
            control={form.control}
            name="vendorName"
            render={({ field }) => (
              <FormItem className="w-[30%]">
                <FormLabel>Vendor Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="w-[30%]">
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-[30%]">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="displayName"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Display Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="house"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>House</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="landmark"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Landmark</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
             
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pincode"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Pincode</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pan"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>PAN</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="aadhar"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Aadhar</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gst"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>GST</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Account Holder Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Bank Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="branchName"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>Branch Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ifscCode"
            render={({ field }) => (
              <FormItem className="w-[24%]">
                <FormLabel>IFSC Code</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
