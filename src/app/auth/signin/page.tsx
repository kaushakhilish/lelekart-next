"use client"

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import Form from './_components/Form';


const Page = () => {
    const session =  useSession();
    console.log(session);

    if(session.status==='loading'){
        return <div>Loading...</div>
    }
    if(session.status==='authenticated'){
    redirect('/');
    }
  
    return (
    <Form/>
    )
}

export default Page