import { Button } from "@/components/ui/button"
import { CreditCard, Heart, IndianRupee, ShoppingBasket } from "lucide-react"
import Image from "next/image"
import ProductTab from "../_components/ProductTab"
import PincodeForm from "../_components/PincodeForm"
import ReviewCard from "../_components/ReviewCard"
import CarouselBestOf from "../../_components/CarouselBestOf"


const page = () => {
  return (
    <div className="flex-col justify-start items-center w-full px-8 font-urbanist" >
        <div className="text-gray-400 font-bold pb-6" >/Men/Men-Casual</div>
        <div className="w-full flex justify-between">
            <div className="w-[50%] flex flex-col gap-4 items-center justify-start">
                <div className="w-[80%] h-[450px] bg-[#E8E7E5] relative rounded-2xl" >
                    <Image alt="" src={'/men.png'} objectFit="cover" fill />
                    <div className="absolute top-4 right-4"><Heart size={26} /></div>
                </div>
                <div className="w-[80%] flex justify-between" >
                    <div className="w-[31%] bg-[#E8E7E5] relative rounded-2xl h-[150px]">
                    <Image alt="" src={'/men.png'} objectFit="cover" fill />
                    </div>
                <div className="w-[31%] bg-[#E8E7E5] relative rounded-2xl h-[150px]">
                <Image alt="" src={'/men.png'} objectFit="cover" fill />
                </div>
                <div className="w-[31%] bg-[#E8E7E5] relative rounded-2xl h-[150px]">
                <Image alt="" src={'/men.png'} objectFit="cover" fill /></div></div>
                <div className="w-[80%] pt-8 font-bold text-2xl " >Check For Delivery</div>
                <PincodeForm/>
                <div className="w-[80%] font-semibold text-2xl pt-2">Features</div>
                <div className="flex flex-col gap-2 w-[80%] pb-4 font-semibold" >
                    <div className="flex gap-2 items-center">
                        <div className="h-2 w-2 bg-black rounded-full"></div>
                        100% Original Products
                        </div>
                        <div className="flex gap-2 items-center">
                        <div className="h-2 w-2 bg-black rounded-full"></div>
                        Easy 14 days returns and exchanges
                        </div>
                        <div className="flex gap-2 items-center">
                        <div className="h-2 w-2 bg-black rounded-full"></div>
                        Pay on delivery might be available
                        </div>
                
</div>
            </div>
            <div className="w-[45%]">
                    <div className="font-bold text-3xl " >Men T shirt</div>
                    <div className='flex items-center text-2xl font-medium gap-2 py-2' > <IndianRupee size={20}/>599</div>
                    <div className="pt-8 font-semibold" >Color : Black</div>
                    <div className="flex py-4 gap-3 items-center">
                    <div className="border-2 border-black rounded-full p-1" ><div className="w-5 h-5 rounded-full bg-black" ></div></div>
                    <div className="w-5 h-5 rounded-full bg-sky-500" ></div>
                    <div className="w-5 h-5 rounded-full bg-red-500" ></div>
                    <div className="w-5 h-5 rounded-full bg-green-500" ></div>
                    <div className="w-5 h-5 rounded-full bg-violet-500" ></div>
                    <div className="w-5 h-5 rounded-full bg-slate-500" ></div>

                    </div>
                    <div className="pt-2 font-semibold" >Size : 4XL</div>
                    <div className="flex py-4 gap-3 items-center text-sm font-bold">

                    <div className="border-2 border-black rounded-full p-1" ><div className=" flex justify-center items-center w-7 h-7" >4XL</div></div>
                    <div className=" rounded-full p-1" ><div className=" flex justify-center items-center w-7 h-7" >3XL</div></div>
                    <div className=" rounded-full p-1" ><div className=" flex justify-center items-center" >2XL</div></div>
                    <div className=" rounded-full p-1" ><div className=" flex justify-center items-center" >XL</div></div>
                    <div className=" rounded-full p-1" ><div className=" flex justify-center items-center" >L</div></div>
                    <div className=" rounded-full p-1" ><div className=" flex justify-center items-center" >M</div></div>
                    <div className=" rounded-full p-1" ><div className=" flex justify-center items-center" >SM</div></div>
                    </div>
                    <div className="flex gap-2 py-4">
                        <Button variant="default" className="rounded-full px-14 font-bold flex items-center gap-2" ><ShoppingBasket size={20}/>ADD TO CART</Button>
                        <Button variant="outline" className="rounded-full px-8 font-bold border-2 border-black flex gap-2 items-center"  ><CreditCard size={20}/>BUY NOW</Button>
                    </div>
                       <div className="pt-10 font-semibold text-2xl border-b-2 w-[80%] border-b-gray-700">Details</div>
                       <div className="py-4 pl-2">
                        <ul className="flex flex-col gap-1 font-bold text-gray-500">
                            <li>Product Dimensions: 29.5 x 20.2 x 11.1 cm; 910 Grams</li>
                            <li>Tags: #levis #men #regular #t-shirt</li>
                            <li>Manufacturer:</li>
                            <li>Category: Men</li>
                            <li>Sub Category: Shirts and T-Shirts</li>
                            <li>Vendor Name: Abhishek</li>
                            <li>Vendor Business Name: Atiuttam</li>
                            <li>Stock Left: 59</li>
                            <li>Pre Order: No</li>
                            <li>Approved Product: No</li>
                        </ul>
                    </div>
                    <div className="w-[80%] py-6">
                        <ReviewCard/>
                    </div>
                    
                    
            </div>
        </div>
        <div className="pt-14 full justify-between items-center"><CarouselBestOf category="Men" img='/men.png' name='Tshirt' description='Black Stylish Pure cotton Tshirt' price={599} /></div>
    </div>
  )
}

export default page