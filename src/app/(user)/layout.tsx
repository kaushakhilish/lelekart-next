import { getServerSession } from "next-auth";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <div className="overflow-x-hidden max-w-[1920px] flex-col flex justify-start items-center" >
        <Navbar/>
        {children}
        <Footer/>
    </div>
  );
}
