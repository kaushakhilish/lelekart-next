"use client"

import { Circle, CircleCheck, CircleDot, IndianRupee } from "lucide-react"
import { useState } from "react";
import AddressCard from "../account/_components/AddressCard";
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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import AddAddressForm from "../account/_components/AddAddressForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";


const Page = () => {
  const [count,setCount] = useState<number>(0);
  return (
    <div className='flex flex-col w-full justify-start items-center font-urbanist font-bold' >
      <div className='w-full text-lg py-10 flex items-center gap-2 justify-center'>
         {count===0 ?  <CircleDot/>  : <CircleCheck/>}
         <div> Select Address </div>
          <div className={`w-32 border-t-2 ${count!==0 && 'border-t-black'}`}></div>
          {count===0 ?  <Circle/> : count===1 ?  <CircleDot/>: <CircleCheck/>}
          <div>Confirm Item</div>
          <div className={`w-32 border-t-2 ${count===2 && 'border-t-black'}`}></div>
          {count===2 ?  <CircleDot/>: <Circle/>}
          <div>Payment</div>
      </div>
      <div className="flex justify-center gap-2 w-full items-start px-20">
        <div className="w-[65%] flex flex-col">
          {count===0 && <>
            <div className="text-2xl font-semibold py-6 flex justify-between border-b-2 w-[90%]">
            <div>Select Address</div>
            <Dialog>
            <DialogTrigger><Button variant={'default'} size={'sm'} className='rounded-xl text-xs font-bold py-0'  >ADD</Button></DialogTrigger>
            <DialogContent className="sm:max-w-[800px] min-h-[500px]" >
            <DialogHeader>
            <DialogTitle>Fill the form to add Address</DialogTitle>
            <DialogDescription >
            <AddAddressForm/>
            </DialogDescription>
            </DialogHeader>
            </DialogContent>
            </Dialog>
            </div>
          <div className="w-full flex gap-6 justify-start pt-6 flex-wrap items-center">
           <div className="p-2 rounded-2xl border-2 border-black">
           <AddressCard/>
           </div>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>

          </div></>}
          {count===1 &&  <div className="flex flex-col justify-start items-center pr-20  " >
          <div className="text-2xl font-semibold py-6 flex justify-between w-full pl-2 ">
            <div>Product Details</div>
            </div>
            <Table className="text-base" >
     
      <TableHeader>
        <TableRow className="text-lg" >
          <TableHead className="w-[150px] text-black font-bold">Image</TableHead>
          <TableHead className="text-black font-bold" >Name</TableHead>
          <TableHead className="text-black font-bold" >Quantity</TableHead>
          <TableHead className="text-right text-black font-bold">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">
              <div className="w-[100px] h-[100px] bg-[#E8E7E5] relative rounded-xl overflow-hidden flex justify-center items-center" >
            <Image alt="" src={'/men.png'} fill objectFit="cover" />
            </div></TableCell>
            <TableCell>T shirt</TableCell>
            <TableCell>1</TableCell>
            <TableCell className="text-right flex justify-end items-center gap-1"><IndianRupee size={15} />90</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
          </div>
}
        {count===2 && <div className="w-full flex flex-col justify-start items-center" >
          <div className="w-full text-2xl py-6 flex" >
            Confirm payment Option
          </div>
          <div className="w-[40%] border-black rounded-2xl"></div>
          <div className="p-4 w-full" >
          <RadioGroup defaultValue="cash">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="cash" id="r1" />
        <Label htmlFor="r1" className="text-xl" >Cash On Delivery</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="online" id="r2" />
        <Label htmlFor="r2" className="text-xl" >Pay Online</Label>
      </div>
    </RadioGroup>
          </div>
        <div className="w-full py-2 pl-4" >
        <Link href={'/success'} ><Button variant="default" >Complete Order</Button></Link>

        </div>
        </div>
        }
        </div>
        <div className="w-[27%] flex flex-col gap-6" >
       

        <div className="w-full border-2 border-black rounded-2xl">
        <div className='w-full flex flex-col justify-start items-center bg-white  rounded-3xl p-4'>
            <div className='w-[90%] pt-6 font-bold text-xl' >Delivery</div>
            <div className='w-[90%] h-4 pb-4 border-b-2'></div>
            <div className='w-[90%] flex justify-between items-center py-4'>
                <Input className='focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-offset-0 rounded-r-none placeholder:text-gray-400 placeholder:text-base placeholder:font-semibold' placeholder='Coupon' /><Button variant={'outline'} className='rounded-l-none font-bold' >Apply</Button>
            </div>
            <div className='w-[90%] h-4 pb-4 border-t-2'></div>
            <div className='w-[90%] pb-3 flex justify-between items-center font-semibold text-gray-500'>
                <div>Subtotal</div>
                <div><div className=" flex gap-1 justify-center items-center font-bold " ><IndianRupee size={14}/>799</div></div>
            </div>
            <div className='w-[90%] pb-1 flex justify-between items-center font-semibold text-gray-500'>
                <div>Discount</div>
                <div><div className=" flex gap-1 justify-center items-center font-bold " ><IndianRupee size={14}/>0.00</div></div>
            </div>
            <div className='w-[90%] pb-1 flex justify-between items-center font-semibold text-gray-500'>
                <div>Delivery</div>
                <div><div className=" flex gap-1 justify-center items-center font-bold " ><IndianRupee size={14}/>120.5</div></div>
            </div>
            <div className='w-[90%] pb-1 flex justify-between items-center font-semibold text-gray-500'>
                <div>Tax</div>
                <div><div className=" flex gap-1 justify-center items-center font-bold " ><IndianRupee size={14}/>9.5</div></div>
            </div>
            <div className='w-[90%] h-4 pb-4 border-b-2'></div>
            <div className='w-[90%] py-3 flex justify-between items-center font-semibold text-black text-lg'>
                <div>Total</div>
                <div><div className=" flex gap-1 justify-center items-center font-bold " ><IndianRupee size={14}/>929.5</div></div>
            </div>
            {count!==2 && <Button className='w-[90%] text-base font-semibold my-4' onClick={()=>setCount(count+1)} >confirm and continue</Button>}
           


            
        </div>
        </div>
        <div className="w-full flex justify-end mb-6">
         {count!==0 &&  <Button className="font-bold" onClick={()=>setCount(count-1)} >Go Back</Button>}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Page

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  
]