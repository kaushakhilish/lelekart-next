import { Button } from "@/components/ui/button"
import SingoutButton from "@/components/auth/SingoutButton";
import { getServerSession } from "next-auth";
import Link from "next/link";


export default async function Home() {
  const session = await getServerSession();
  return (
   <div className="">{session ? <SingoutButton/>: <Button variant="default"><Link  href={'/auth/signin'}>Signin</Link></Button>}
   {session && <div>{session.user?.name} is logged in</div>}</div> 
  );
}
