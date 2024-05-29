
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay" 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselComponent() {
    return (
      <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-[98vw] h-[80vh]  ">
        <CarouselContent className="h-[600px] "  >
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-full">
                <Card className="h-full rounded-3xl overflow-hidden ">
                  <CardContent className="flex flex-col items-center relative h-full justify-end p-6">
                    <Image src={'/carousel.jpg'} className="z-0"  alt="" fill />
                    <div className="z-10 text-white justify-end w-full h-[150px] flex flex-col gap-3">
                      <div className="text-5xl font-lilita">LELEKART WINTER COLLECTION</div>
                      <div className="flex justify-between w-full items-end" >
                        <div className=" w-[60%] font-urbanist">Find out our best winter collection . Offering quality products in an affordable price</div>
                        <Button className="bg-white px-10 hover:bg-black hover:text-white text-black rounded-full">Buy Now</Button>
                      </div>
                    </div>
                  </CardContent>

                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        
       
      </Carousel>
    )
  }