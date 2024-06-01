import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"


const page = () => {
  return (
    <div className="w-full flex  justify-center gap-24 font-urbanist py-10 px-10 items-center">
        <div><div className="text-4xl font-bold pt-4">Order Successful</div>
        <div className="text-xl font-bold pt-1 pb-2 text-slate-400" >Thanks for shopping with us</div>
        <div className="flex py-4 gap-4" >
            <Link href={'/'} ><Button  className="font-bold text-base" >Continue Shopping</Button></Link>
            <Link href={'/account/orders'} ><Button  className="font-bold text-base border-black"  variant={'outline'} >Go To Orders</Button></Link>
        </div>
        </div>
        <div className="w-[600px] h-[600px] rounded-2xl relative">
            <Image fill alt="" src={'/success.jpg'} />
        </div>
    </div>
  )
}

export default page