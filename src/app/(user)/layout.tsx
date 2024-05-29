import { getServerSession } from "next-auth";
import Navbar from "./_components/Navbar";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <div className="overflow-x-hidden" >
        <Navbar/>
        {children}
    </div>
  );
}
