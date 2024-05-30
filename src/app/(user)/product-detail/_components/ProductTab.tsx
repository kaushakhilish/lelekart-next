import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function ProductTab() {
  return (
    <Tabs defaultValue="account" className="w-[550px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="detail">Detail</TabsTrigger>
        <TabsTrigger value="delivery">Delivery</TabsTrigger>
      </TabsList>
      <TabsContent value="detail">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
             
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="delivery">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, 
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
           
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
