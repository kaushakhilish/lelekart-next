import { MapPinned, Package, RotateCcw, Trash, Trash2, UserRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { redirect } from 'next/navigation'
import Link from 'next/link'
import AddressCard from "./_components/AddressCard"

const page = () => {
  return (
    <div className='w-full flex justify-start items-center flex-col gap-2' >
      <div className='w-full justify-between flex items-start'>
      <div className='w-[35%] flex flex-col justify-start items-center py-10  font-semibold '>
        <div className='pb-20 w-full text-3xl' >Profile</div>
        <div className='w-[250px] h-[250px] relative rounded-full overflow-hidden justify-center items-center flex'>
          <Image src={'https://avatars.githubusercontent.com/u/124427334?v=4'} alt='' fill objectFit='cover' />
        </div>
        <div className='text-2xl pt-4' >Souvik Sarkar</div>
        <div className='text-gray-400 font-bold' >12345souvik12345@gmail.com</div>
        <div className='flex gap-4 py-4'>
          <Button variant={'default'} className='px-6 font-bold text-base hover:bg-black text-white cursor-default rounded-full'>9682602820</Button>
          <Button variant={'outline'}  className='text-base font-bold hover:bg-white text-black cursor-default rounded-full' >Male</Button>
          </div>
        <div></div>
      </div>
      <div className='w-[55%] py-10  flex flex-col justify-start items-start'>
        <div className='text-2xl font-semibold' >Actions</div>
        <div className='w-[100%] flex justify-start items-start pt-6 gap-6 flex-wrap'>
          <Link href={'/account/orders'} className='border-2  border-black rounded-2xl text-lg px-6 py-1 flex items-center gap-2 font-semibold hover:bg-purple-300 cursor-pointer' ><Package size={21}/> Your Orders</Link>
          
           <Dialog>
           <DialogTrigger asChild>
           <div className='border-2  border-black rounded-2xl text-lg px-6 py-1 flex items-center gap-2 font-semibold hover:bg-yellow-300 cursor-pointer' ><UserRound size={21} /> Edit Profile</div>
           </DialogTrigger>
           <DialogContent className="sm:max-w-[425px]">
             <DialogHeader>
               <DialogTitle>Edit profile</DialogTitle>
               <DialogDescription>
                 Make changes to your profile here. Click save when you&apos;re done.
               </DialogDescription>
             </DialogHeader>
             <div className="grid gap-4 py-4">
               <div className="flex flex-col items-start justify-center gap-4">
                 <Label htmlFor="name" className="text-right">
                   Name
                 </Label>
                 <Input
                   id="name"
                   defaultValue="Souvik Sarkar"
                   className="col-span-3"
                 />
               </div>
               <div className="flex">
               <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Gender</SelectLabel>
          
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="other">Others</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
               </div>
             </div>
             <DialogFooter>
               <Button type="submit">Save changes</Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>
          <AlertDialog>
  <AlertDialogTrigger><div className='border-2  border-black rounded-2xl text-lg px-6 py-1 flex items-center gap-2 font-semibold hover:bg-red-300 cursor-pointer ' ><Trash2 size={21} /> Delete Account</div></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

          <Dialog>
      <DialogTrigger asChild>
      <div className='border-2  border-black rounded-2xl text-lg px-6 py-1 flex items-center gap-2 font-semibold hover:bg-orange-300 cursor-pointer' ><RotateCcw size={21} /> Reset Password</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reset Password</DialogTitle>
          <DialogDescription>
           Enter the Details to reset you password
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name" className="text-right font-semibold">
              Password
            </Label>
            <Input
              id="password"
              placeholder='Enter Password'
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="username" className="text-right">
              Repeat Password
            </Label>
            <Input
              id="repeatpassword"
              placeholder='Password Again'
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>


        
        </div>
    <div className=' mb-4 flex w-full items-end justify-between '><div className='text-2xl font-semibold mt-14' >Addresses</div><Dialog>
  <DialogTrigger><Button variant={'default'} size={'sm'} className='rounded-xl text-xs font-bold py-0'  >ADD</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Fill the form to add Address</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
</div>
      <div className='w-[95%] flex justify-start items-start gap-6' >
        <AddressCard/>
        <AddressCard/>
        

      </div>
      </div>
      

      </div>
    </div>
  )
}

export default page