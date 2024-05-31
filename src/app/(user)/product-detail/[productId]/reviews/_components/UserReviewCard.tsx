import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
  

const UserReviewCard = () => {
  return (
    <Card className="w-[30%]" >
  <CardHeader>
    <CardTitle><div className="flex justify-between items-center">
        <div>Souvik Sarkar</div>
        <div className="text-sm" >24-2-2024</div>
        </div></CardTitle>
    <CardDescription className="text-base" >I recently purchased this t-shirt, and thoroughly impressed! The 100% cotton fabric is incredibly soft and feels wonderful on my skin. Its lightweight and breathable, perfect for the warmer months</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex gap-2 justify-start items-center">
        <div className="relative rounded-xl w-20 h-20 bg-[#E8E7E5]">
            <Image src={'/men.png'} alt="" fill objectFit="contain" />
        </div>
        <div className="relative rounded-xl w-20 h-20 bg-[#E8E7E5]">
            <Image src={'/men.png'} alt="" fill objectFit="contain" />
        </div>
        <div className="relative rounded-xl w-20 h-20 bg-[#E8E7E5]">
            <Image src={'/men.png'} alt="" fill objectFit="contain" />
        </div>
    </div>
  </CardContent>
  <CardFooter>
    <div className="flex justify-center items-center gap-2" >
        <div className="flex gap-1 items-center justify-center">
            <Star size={18} fill="#FFD700" />
            <Star size={18} fill="#FFD700" />
            <Star size={18} fill="#FFD700" />
            <Star size={18} fill="#FFD700" />
            

        </div>

    </div>
  </CardFooter>
</Card>

  )
}

export default UserReviewCard