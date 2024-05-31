import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SingoutButton from '@/components/auth/SingoutButton'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

  

const UserAvatar = ({name,img}:{name:string|null|undefined,img:string|null|undefined}) => {
    if(!name || !img){
        return 
    }
  return (
    <Popover>
    <PopoverTrigger><Avatar>
  <AvatarImage src={img} />
  <AvatarFallback>{name}</AvatarFallback>
</Avatar>
</PopoverTrigger>
    <PopoverContent className='' ><div className=' flex flex-col p-2 justify-center items-center gap-2' >
        
        <div className='flex gap-2 justify-center items-center w-full' >
            <Link href={'/account'} ><Button className='font-bold px-6' >Profile</Button></Link>
            <SingoutButton/>
        </div>
        </div></PopoverContent>
  </Popover>
  )
}

export default UserAvatar