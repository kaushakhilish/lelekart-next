import { getServerSession } from "next-auth";
import UserNavbar from "./_components/UserNavbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <div className="w-full px-14 font-urbanist" >
        {/* <UserNavbar/> */}
        {children}
       
    </div>
  );
}
