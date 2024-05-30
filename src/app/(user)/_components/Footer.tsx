import Link from "next/link"
import FooterForm from "./FooterForm"
import { Copyright } from "lucide-react"


const Footer = () => {
  return (
    <div className="flex flex-col  w-full gap-10 font-outfit">
        <div className="w-full h-[50px]"></div>
        <div className="flex justify-between items-center px-10">
            <div className="flex flex-col justify-start items-start gap-4" >
                <div className="text-3xl font-bungee" >LELEKART</div>
                <div className="text-gray-500">Get notified for out upcoming awesome product launches and best discounts of all time</div>
                <FooterForm/>
            </div>
            <div className="flex gap-20 text-gray-400 font-semibold" >
            <div className="flex flex-col gap-8">
                   <div className="flex flex-col gap-2" >
                   <div className="font-bold text-black text-lg" >About</div>
                    <Link href={'/contact'}>Contact Us</Link>
                    <Link href={'/about'}>About Us</Link>
                   </div>
                   <div className="flex flex-col gap-2" >
                   <div className="font-bold text-black text-lg">Make Money</div>
                    <Link href={'/auth/sellersignin'}>Seller Login</Link>
                    <Link href={'/'}>Agent Login</Link>
                   </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-black text-lg" >Help</div>
                    <Link href={'/payment-policy'}>Payments</Link>
                    <Link href={'/return-policy'}>Shipping and return</Link>
                    <Link href={'/refund-policy'}>Cancellation and refund</Link>
                    
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-black text-lg" >Socials</div>
                    <Link href={'https://www.facebook.com/people/Lelekart/61554705664794/?mibextid=ZbWKwL'}>Facebook</Link>
                    <Link href={'https://x.com/Lele_kart'}>Twitter</Link>
                    <Link href={'https://www.instagram.com/lele_kart/'}>Instagram</Link>    
                </div>
                
            </div>
        </div>
        <div className="bg-black text-white w-full flex justify-between px-10 text-sm">
            <div className="flex gap-2 items-center py-4" ><Copyright size={18} /> 2024 LeLeKart, Kaushal Ranjeet Pvt. Ltd.</div>
            <div className="flex gap-6 py-4">
            <Link href={'/privacy-policy'}>Privacy Policy</Link>
                    <Link href={'/terms-condition'}>Terms & Conditions</Link>
                    <Link href={'/security'}>Security</Link>
            </div>

        </div>
    </div>
  )
}

export default Footer