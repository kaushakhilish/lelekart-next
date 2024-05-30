import { CircleArrowRight, Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const page = () => {
  return (
    <div className='w-full flex font-urbanist flex-col justify-start items-start px-14 py-6' >
     
      <div className='w-full flex justify-between' > 
      <div className='w-[50%] pr-14' ><div className='   font-semibold text-6xl pb-6' >about us</div>
      <div className=' text-gray-400 font-semibold pb-8 text-lg' >Lelekart, under the adept guidance of Kaushal Ranjeet Private Limited, is an Indian e-commerce pioneer committed to transforming fashion retail. We blend style, quality, and affordability, offering an array of clothing that speaks to your individuality.</div></div>
      <div className='w-[50%] pl-24 border-l-2 border-l-text-gray-500' >
        <div className='font-bold text-4xl pb-6' >Why shop with us ?</div>
        <div className='flex gap-2 py-2 font-bold text-gray-400 w-full ' ><CircleArrowRight className='mt-0.5' size={20} /><div className='w-[80%]' >Diverse Collection: Explore a world of fashion with our handpicked selections, from everyday essentials to statement pieces.</div></div>
        <div className='flex gap-2 py-2 font-bold text-gray-400' ><CircleArrowRight className='mt-0.5'  size={20}/><div className='w-[80%]' >Uncompromised Quality: Every product is a testament to superior quality, ensuring satisfaction and durability.</div></div>
        <div className='flex gap-2 py-2 font-bold text-gray-400' ><CircleArrowRight className='mt-0.5'  size={20}/><div className='w-[80%]'>Affordable Elegance: Fashion is for everyone. Our competitive pricing makes style accessible to all.</div></div>
        <div className='flex gap-2 py-2 font-bold text-gray-400' ><CircleArrowRight className='mt-0.5'  size={20}/><div className='w-[80%]'>Seamless Shopping: Our intuitive website makes shopping a breeze, offering a streamlined browsing and purchasing process.</div></div>
        <div className='flex gap-2 py-2 font-bold text-gray-400' ><CircleArrowRight className='mt-0.5'  size={20}/><div className='w-[80%]'>Customer-First Approach: Your happiness is our mission. Our customer service team is always ready to assist with any queries or feedback.</div></div>
        <div className='flex gap-2 py-2 font-bold text-gray-400' ><CircleArrowRight className='mt-0.5'  size={20}/><div className='w-[80%]'>Prompt Delivery: Count on us for swift and dependable delivery throughout India.</div></div>

      </div>
      
      </div>
      <div className='w-full flex flex-col gap-10 pt-14 px-14' >
          <div className='text-4xl font-bold '>Our Support Team</div>
          <div className='w-full flex flex-wrap justify-start gap-14 pb-14'>
          <Card className='w-[350px] h-[400px]' >
  <CardHeader>
    <CardTitle>Kaushlendra Kumar</CardTitle>
    <CardDescription>CEO</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Kaushlendra is an entrepreneur and one of the co-founders of Lelekart. With a passion for innovation and business development, Kaushlendra&apos;s extensive experience in e-commerce and his dedication to customer satisfaction drive Lelekart&apos;s mission to provide high-quality products with exceptional service.</p>
  </CardContent>
  <CardFooter>
    <p className='flex gap-2' ><Facebook/><Twitter/><Instagram/></p>
  </CardFooter>
</Card>
<Card className='w-[350px] h-[400px]' >
  <CardHeader>
    <CardTitle>Ranjeet Dilshan</CardTitle>
    <CardDescription>Manager</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Ranjeet is an experienced manager and one of the co-founders of Lelekart, overseeing various aspects of operations to ensure smooth functioning and efficiency. With a focus on team collaboration and customer satisfaction, Ranjeet plays a key role in maintaining high standards of service and product quality.</p>
  </CardContent>
  <CardFooter>
    <p className='flex gap-2' ><Facebook/><Twitter/><Instagram/></p>
  </CardFooter>
</Card>

<Card className='w-[350px] h-[400px]' >
  <CardHeader>
    <CardTitle>Adarsh Aryan</CardTitle>
    <CardDescription>Frontend Developer</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Adarsh is a talented frontend developer with expertise in modern web technologies such as React.js, Vue.js, and Angular. He is passionate about creating intuitive and visually appealing user interfaces that enhance the overall user experience.</p>
  </CardContent>
  <CardFooter>
    <p className='flex gap-2' ><Facebook/><Twitter/><Instagram/></p>
  </CardFooter>
</Card>

<Card className='w-[350px] h-[400px]' >
  <CardHeader>
    <CardTitle>Rohan Goswami</CardTitle>
    <CardDescription>Frontend Developer</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Rohan is a skilled frontend developer with a passion for creating elegant and responsive web applications. He specializes in HTML, CSS, JavaScript, and various frontend frameworks such as React.js and React Native. With a keen eye for detail, Rohan ensures that the user interfaces he builds are not only functional but also visually appealing.</p>
  </CardContent>  
  <CardFooter>
    <p className='flex gap-2' ><Facebook/><Twitter/><Instagram/></p>
  </CardFooter>
</Card>

<Card className='w-[350px] h-[400px]' >
  <CardHeader>
    <CardTitle>Abhishek Naula</CardTitle>
    <CardDescription>Full-stack Web Developer</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Abhishek is a full-stack web developer with a focus on backend technologies. He excels in building and maintaining server-side applications using Node.js, Express.js, and various databases. With a strong foundation in frontend technologies, Abhishek is able to collaborate effectively with frontend developers to ensure that the web applications he builds are both functional and user-friendly.</p>
  </CardContent>
  <CardFooter>
    <p className='flex gap-2' ><Facebook/><Twitter/><Instagram/></p>
  </CardFooter>
</Card>

          </div>
      </div>
    </div>
  )
}

export default page