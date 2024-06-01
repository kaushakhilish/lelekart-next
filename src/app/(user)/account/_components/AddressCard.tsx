import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Pencil, X } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import EditAddressForm from "./EditAddressForm"

  

const AddressCard = () => {
  return (
    <Card className="min-w-[250px] min-h-[250px] relative" >
    <CardHeader>
      <CardTitle>Souvik Sarkar</CardTitle>
      <CardDescription>733101</CardDescription>
    </CardHeader>
    <CardContent>
      <p>512NH Road,Balurghat</p>
      <p>West Bengal,India</p>
    </CardContent>
    <CardFooter>
      <p className="font-bold" >Near SUM Hospital</p>
    </CardFooter>
    <div className="absolute top-4 right-4">
    <X className="hover:scale-110 hover:stroke-red-500 cursor-pointer" size={20} />
    </div>
    <div className="absolute bottom-4 right-4" ><Drawer>
  <DrawerTrigger><Pencil className="hover:scale-110 hover:stroke-yellow-500 cursor-pointer" size={20} /></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Edit Address</DrawerTitle>
      <DrawerDescription>Edit and Save the changes you want to make</DrawerDescription>
      <div><EditAddressForm/></div>
    </DrawerHeader>
    <DrawerFooter>

      <DrawerClose className="" >
        <Button variant="outline" className="w-full" >Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
</div>
  </Card>
  
  )
}

export default AddressCard