import { IndianRupee, Minus, Plus, X } from "lucide-react"
import Image from "next/image"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from "next/link"
  

const CartCard = () => {
  return (
    <Link href={'/product-detail/Tshirt'} className="w-full p-3 flex justify-between items-center hover:bg-gray-100 rounded-2xl pr-4">
        <div className="flex" >
        <div className="relative rounded-xl w-[100px] h-[100px] bg-[#E8E7E5]">
        <Image alt="" src={'/men.png'} objectFit="cover" fill />
        </div>
        <div className="flex flex-col pl-4 gap-1 w-auto">
            <div className="text-xl font-semibold" >Black T Shirt</div>
            <div className="text-gray-400 font-semibold pb-2.5" >12 available</div>
            <div className="flex justify-start items-center gap-2" >
            <Select>
            <SelectTrigger className="w-[70px] h-[30px] font-semibold">
                <SelectValue placeholder="4XL" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="4XL">4XL</SelectItem>
                <SelectItem value="XL">XL</SelectItem>
                <SelectItem value="SM">SM</SelectItem>
            </SelectContent>
            </Select>
            <Select>
            <SelectTrigger className="w-[90px] h-[30px] font-semibold ">
                <SelectValue placeholder="Black" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Black">Black</SelectItem>
                <SelectItem value="White">White</SelectItem>
                <SelectItem value="Blue">Blue</SelectItem>
            </SelectContent>
            </Select>
            <div className=" border-[#E8E7E5] border-2 rounded-md h-[30px] flex justify-center items-center gap-2 px-2 font-bold text-gray-400">
                <Minus size={18}/> <div className="font-bold text-black" >1</div> <Plus size={18} />
            </div>
            </div>
        </div>
        </div>
        <div className="flex flex-col justify-between h-full items-end gap-4 font-bold" >
            <div><X size={14} /></div>
            <div className=" flex gap-1 justify-center items-center font-bold" ><IndianRupee size={14}/>799</div>

        </div>
    </Link>
  )
}

export default CartCard