import { getServerSession } from "next-auth";
import { CarouselComponent } from "./_components/Carousel";
import Footer from "./_components/Footer";


export default async function Home() {
  const session = await getServerSession();
  return (
   <div className="flex flex-col justify-start items-center w-full">
    <CarouselComponent/>
    
    <div className="mt-[100px] w-[30%]"></div>
    <Footer/>
   </div> 
  );
}
