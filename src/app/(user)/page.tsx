import { getServerSession } from "next-auth";
import { CarouselComponent } from "./_components/Carousel";
import Footer from "./_components/Footer";
import Body from "./_components/Body";


export default async function Home() {
  const session = await getServerSession();
  return (
   <div className="flex flex-col justify-start items-center w-full">
    <CarouselComponent/>
    <Body/>
    <Footer/>
   </div> 
  );
}
