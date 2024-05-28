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
    repeatPassword:z.string().min(8).max(12),
  })

const FormComponent = () => {
   const form = useForm<z.infer<typeof formSchema>>({
    resolver     : zodResolver(formSchema),
    defaultValues: {
    email   : "",
    password: "",
    repeatPassword:""

        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
            
        console.log(values)
    } 
      
  return (
    <div className = 'w-[100vw] h-[100vh] bg-[#efefef] flex justify-center items-center font-urbanist'>
    <div className = 'flex md:hidden bg-[#EFEFEF] w-[90%]  rounded-3xl justify-center flex-col gap-4 items-center'>
     
    <div className="flex gap-2 w-[300px] pb-6 justify-start items-center"><div className="w-4 h-4 rounded-full bg-purple-500"></div><div className="text-xl font-semibold">Hi User</div></div>
     
      <div className="text-xl font-bold font-bungee pb-4" >
      Welcome to <span className="text-purple-500" >Lelekart</span>
      </div>
    <div className = 'h-[80%]  gap-2 bg-white shadow-slate-200 flex justify-center items-center flex-col rounded-3xl shadow-2xl w-[300px]'>
        <div className="pb-6 font-semibold text-xl mt-8">Register</div>
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
        <FormField
          control = {form.control}
          name    = "repeatPassword"
          render  = {({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder = "Repeat Password" {...field} className = "bg-[#F9F9F9] rounded-3xl" />
              </FormControl>
              
              <FormMessage className = "text-xs" />
            </FormItem>
          )}
        />
        <Button type = "submit" className = "rounded-3xl w-full bg-purple-500 duration-300 hover:bg-purple-700">Register</Button>
      </form>
    </Form>
    
    <div className="text-xs pt-4 pb-6" >Have have an Account? <Link href={'/auth/signin'} className="font-semibold" >Login</Link></div>
    </div>
    </div>
    <div className = 'hidden md:flex bg-[#F9F9F9] shadow-sm shadow-slate-100 w-[1000px] h-[80%] rounded-3xl md:justify-center md:items-center'>
    <div className = 'h-[70%] flex flex-col w-[55%]'>
        <div className="flex gap-2 justify-start items-center"><div className="w-4 h-4 rounded-full bg-purple-500"></div><div className="text-xl font-semibold">Hi User</div></div>
        <div className="flex justify-center items-center  overflow-hidden "><Image  src={'/cart.png'} alt="" width={500} height={500}  /></div>
        <div className="font-bold text-2xl pr-10 justify-center items-center w-full flex font-bungee gap-2">Welcome to <span className="text-purple-500">Lelekart</span></div>

    </div>
    <div className = 'h-[80%] gap-2 bg-white shadow-slate-200 flex justify-center items-center flex-col rounded-3xl shadow-2xl w-[30%]'>
        <div className="pb-6 font-semibold text-xl">Sign Up</div>
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
        <FormField
          control = {form.control}
          name    = "repeatPassword"
          render  = {({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder = "Repeat Password" {...field} className = "bg-[#F9F9F9] rounded-3xl" />
              </FormControl>
              
              <FormMessage className = "text-xs" />
            </FormItem>
          )}
        />
        <Button type = "submit" className = "rounded-3xl w-full bg-purple-500 hover:bg-purple-700 duration-300">Register</Button>
      </form>
    </Form>
    
    <div className="text-xs pt-4" >Have have an Account? <Link href={'/auth/signin'} className="font-semibold" >Login</Link></div>
    </div>
    </div>
    </div>
  )
}

export default FormComponent