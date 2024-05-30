import React from 'react'
import ProductCard from './ProductCard'
import { Button } from '@/components/ui/button'
import CarouselBestOf from './CarouselBestOf'

const Body = () => {
  return (
    <div className='flex flex-col justify-start items-center font-oxygen px-8 w-full'>
        <div className="mt-[100px] w-[30%]"></div>
        <div className=' text-4xl font-bold pb-6 uppercase ' >Best of all</div>
        <div className=' text-gray-400 font-semibold text-center w-[30%] pb-6'>
            Our best products where classic and contemporary style converge in perfect harmony
        </div>
        <div className='w-full flex justify-end px-2 pb-2' ><Button className='font-bold' >And More </Button></div>
        <div className='flex justify-between items-center w-full flex-wrap pb-6'>
            <ProductCard img='/men.png' name='Tshirt' description='Black Stylish Pure cotton Tshirt' price={599} />
            <ProductCard img='/women.png' name='Frock' description='long frock for girls' price={799} />
            <ProductCard img='/kid.png' name='Full Dress' description='Full Winter Dress for babies' price={899} />
            <ProductCard img='/bag.png' name='Bag' description='Orange leather bag for women' price={1299} />


        </div>
        <CarouselBestOf category="Men" img='/men.png' name='Tshirt' description='Black Stylish Pure cotton Tshirt' price={599} />
        <CarouselBestOf category="Women"  img='/women.png' name='Frock' description='long frock for girls' price={799}  />
        <CarouselBestOf category="Kids"  img='/kid.png' name='Full Dress' description='Full Winter Dress for babies' price={899}  />
        <CarouselBestOf category="Bags"  img='/bag.png' name='Bag' description='Orange leather bag for women' price={1299}  />
        <CarouselBestOf category="Cosmetic"  img='/cosmetic.png' name='Cream' description='Men Brard cream' price={999}  />
        <CarouselBestOf category="Watch"  img='/watch.png' name='Watch' description='Gucci premium Watch' price={1799}  />

    </div>
  )
}

export default Body