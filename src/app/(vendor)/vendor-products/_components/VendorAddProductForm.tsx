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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const FormSchema = z.object({
  productName: z.string().min(1, {
    message: "Product Name is required.",
  }),
  brandName: z.string().optional(),
  category: z.string().optional(),
  subCategory: z.string().optional(),
  stock: z.number().min(0, { message: "Stock must be a non-negative number." }).optional(),
  price: z.number().min(0, { message: "Price must be a non-negative number." }).optional(),
  minimumQuantity: z.number().min(1, { message: "Minimum Quantity must be at least 1." }).optional(),
  discountedPrice: z.number().min(0, { message: "Discounted Price must be a non-negative number." }).optional(),
  preOrder: z.boolean().optional(),
  allowWholesale: z.boolean().optional(),
  tags: z.string().optional(),
  sku: z.string().optional(),
  color: z.string().optional(),
  size: z.string().optional(),
  description: z.string().optional(),
  videos: z.string().optional(),
  images: z.string().optional(),
})

export default function VendorAddProductForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      productName: "",
      brandName: "",
      category: "",
      subCategory: "",
      stock: 0,
      price: 0,
      minimumQuantity: 1,
      discountedPrice: 0,
      preOrder: false,
      allowWholesale: false,
      tags: "",
      sku: "",
      color: "",
      size: "",
      description: "",
      videos: "",
      images: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col justify-start items-end gap-6">
        <div className="w-full flex justify-center items-start">
          <div className="w-[40%] p-4 flex flex-col justify-start items-start gap-2">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter full description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="videos"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Videos</FormLabel>
                  <FormControl>
                    <Input placeholder="Add video URLs" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <Input placeholder="Add image URLs" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-[60%] p-4 flex flex-wrap justify-start items-start gap-2">
            <FormField
              control={form.control}
              name="brandName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Brand Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Brand" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Select Category" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subCategory"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Sub Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Select Sub Category" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Stock" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minimumQuantity"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Minimum Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Minimum Quantity" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="discountedPrice"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Discounted Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Discounted Price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preOrder"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Pre Order?</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">Yes</SelectItem>
                        <SelectItem value="false">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="allowWholesale"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Allow Wholesale?</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">Yes</SelectItem>
                        <SelectItem value="false">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tags separated by spaces" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>SKU</FormLabel>
                  <FormControl>
                    <Input placeholder="SKU" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <Input placeholder="Color" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <Input placeholder="Size" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Send for approval</Button>
      </form>
    </Form>
  )
}
