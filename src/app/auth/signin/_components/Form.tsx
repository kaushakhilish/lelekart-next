import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import SigninButton from '@/components/auth/SigninButton';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import Image from "next/image";

 
const formSchema = z.object({
    email   : z.coerce.string().email().min(5),
    password: z.string().min(8).max(12),
  })

const FormComponent = () => {
   const form = useForm<z.infer<typeof formSchema>>({
    resolver     : zodResolver(formSchema),
    defaultValues: {
    email   : "",
    password: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
            
        console.log(values)
    } 
      
  return (
    <div className = 'w-[100vw] h-[100vh] bg-[#efefef] flex justify-center items-center '>
    <div className = 'flex md:hidden bg-white w-[90%] h-[80%] rounded-3xl'>

    </div>
    <div className = 'hidden md:flex bg-[#F9F9F9] shadow-sm shadow-slate-100 w-[1000px] h-[80%] rounded-3xl md:justify-center md:items-center'>
    <div className = 'h-[70%] flex flex-col w-[55%]'>
        <div className="flex gap-2 justify-start items-center"><div className="w-4 h-4 rounded-full bg-green-500"></div><div className="text-xl font-semibold">Hi User</div></div>
        <div className="flex justify-center items-center  overflow-hidden "><Image  src={'/cart.png'} alt="" width={500} height={500}  /></div>
        <div className="font-bold text-2xl pr-10 justify-center items-center w-full flex">Welcome to Lelekart</div>

    </div>
    <div className = 'h-[80%] gap-2 bg-white shadow-slate-200 flex justify-center items-center flex-col rounded-3xl shadow-2xl w-[30%]'>
        <div className="pb-6 font-semibold text-xl">Sign In</div>
        <Form {...form}>
      <form onSubmit = {form.handleSubmit(onSubmit)} className = "space-y-5 px-6 w-full">
        <FormField
          control = {form.control}
          name    = "email"
          render  = {({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder = "Email" {...field} className = "bg-[#F9F9F9] rounded-3xl" />
              </FormControl>
              
              <FormMessage className = "text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control = {form.control}
          name    = "password"
          render  = {({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder = "Password" {...field} className = "bg-[#F9F9F9] rounded-3xl" />
              </FormControl>
              
              <FormMessage className = "text-xs" />
            </FormItem>
          )}
        />
        <Button type = "submit" className = "rounded-3xl w-full">Login</Button>
      </form>
    </Form>
    <div className = "flex justify-center items-center pt-6 pb-2 gap-2">
        <div className = "h-[1px] w-8 bg-gray-500"></div>
        <div className = "text-xs text-gray-500"> OR REGISTER WITH</div>
        <div className = "h-[1px] w-8 bg-gray-500"></div>
    </div>
    <div className="flex gap-2 justify-center items-center pb-4">
        <SigninButton type="google" />
        <SigninButton type="github" />
    </div>
    <div className="text-xs" >Don&apos;t have an Account? <Link href={'/register'} className="font-semibold" >Register now</Link></div>
    </div>
    </div>
    </div>
  )
}

export default FormComponent