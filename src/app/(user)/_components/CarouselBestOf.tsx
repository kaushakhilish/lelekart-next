import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-sideArrow"
import ProductCard from "./ProductCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CarouselBestOf = ({category,img,name,description,price}:{category:string,img:string,name:string,description:string,price:number}) => {
  return (
    <div className="w-full flex flex-col gap-2" >
       <div className="w-full flex justify-between px-2 py-2 items-center">
       <div className="font-bold font-outfit text-3xl" >Best Of {category}</div>
       <Link href={`/category/${category}`} ><Button className="font-bold" >View More</Button></Link>
       </div>
       <div className="flex justify-center items-center"> <Carousel
      opts={{
        align: "start",
      }}
      className="w-[95%]"
    >
      <CarouselContent className="w-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="">
            <ProductCard img={img} name={name} description={description} price={price} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel></div>
    </div>
  )
}

export default CarouselBestOf