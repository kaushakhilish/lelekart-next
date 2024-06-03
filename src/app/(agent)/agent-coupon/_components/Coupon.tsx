import { Button } from "@/components/ui/button"
import Image from "next/image"


const Coupon = () => {
  return (
    <div className="bg-white w-[300px] h-[350px] rounded-2xl p-8 flex flex-col justify-start items-start" >
        <div className="font-medium flex justify-center items-center text-2xl" >
            <div className="relative w-[60px] h-[40px] flex justify-center items-center overflow-hidden">
                <Image src={'/nike.jpg'} alt="" fill  />
            </div>
            Nike</div>
            <div className="flex flex-col py-14 justify-start items-start gap-1">
                <div className="text-5xl font-semibold">-21%</div>
                <div className="text-xl font-bold" >On your next order</div>
            </div>
           <div className="pb-2" > <Button className="font-bold" >COPY</Button></div>
           <div className="text-gray-400 font-semibold">Valid till 1-1-2025</div>
    </div>
  )
}

export default Coupon