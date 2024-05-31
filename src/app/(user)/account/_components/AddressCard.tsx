import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const AddressCard = () => {
  return (
    <Card className="min-w-[250px] min-h-[250px]" >
    <CardHeader>
      <CardTitle>Home</CardTitle>
      <CardDescription>733101</CardDescription>
    </CardHeader>
    <CardContent>
      <p>512NH Road,Balurghat</p>
      <p>West Bengal,India</p>
    </CardContent>
    <CardFooter>
      <p className="font-bold" >Near SUM Hospital</p>
    </CardFooter>
  </Card>
  
  )
}

export default AddressCard