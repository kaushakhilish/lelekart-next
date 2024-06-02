import Image from "next/image"
import Link from "next/link"
import {
    Activity,
  ArrowUpRight,

  DollarSign,
  File,
  Home,
  IndianRupee,
  ShoppingBag,
  Weight,
} from "lucide-react"
import BarGraph from "./_components/BarGraph"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const page = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
       
      <Card  >
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-semibold">Total Earning</CardTitle>
      <DollarSign className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-black flex justify-start py-1 items-center gap-1"><IndianRupee size={18} />45,231.89</div>
      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
    </CardContent>
  </Card>
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm  text-black font-bold">Total Sales</CardTitle>
      <Weight className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-black py-1">+2350</div>
      <p className="text-xs text-muted-foreground">+180.1% from last month</p>
    </CardContent>
  </Card>
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-bold text-black">Total Product</CardTitle>
      <ShoppingBag className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-black py-1">+12,234</div>
      <p className="text-xs text-muted-foreground">+19% from last month</p>
    </CardContent>
  </Card>
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-bold text-black">Total Order</CardTitle>
      <Activity className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-black py-1">+573</div>
      <p className="text-xs text-muted-foreground">+201 since last hour</p>
    </CardContent>
  </Card>
      </div>
      <Card className="">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                <BarGraph/>
                </CardContent>
              </Card>
              
    </div>
    <div>
    <div className="w-full ">
    <Card className="xl:col-span-2">
    <CardHeader className="flex flex-row items-center">
      <div className="grid gap-2">
        <CardTitle>Transactions</CardTitle>
        <CardDescription>
          Recent transactions from your store.
        </CardDescription>
      </div>
      <Button asChild size="sm" className="ml-auto gap-1">
        <Link href="#">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Button>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead className="hidden xl:table-column">Type</TableHead>
            <TableHead className="hidden xl:table-column">Status</TableHead>
            <TableHead className="hidden xl:table-column">Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                liam@example.com
              </div>
            </TableCell>
            <TableCell className="hidden xl:table-column">Sale</TableCell>
            <TableCell className="hidden xl:table-column">
              <Badge className="text-xs" variant="outline">
                Approved
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
              2023-06-23
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                olivia@example.com
              </div>
            </TableCell>
            <TableCell className="hidden xl:table-column">Refund</TableCell>
            <TableCell className="hidden xl:table-column">
              <Badge className="text-xs" variant="outline">
                Declined
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
              2023-06-24
            </TableCell>
            <TableCell className="text-right">$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                noah@example.com
              </div>
            </TableCell>
            <TableCell className="hidden xl:table-column">
              Subscription
            </TableCell>
            <TableCell className="hidden xl:table-column">
              <Badge className="text-xs" variant="outline">
                Approved
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
              2023-06-25
            </TableCell>
            <TableCell className="text-right">$350.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                emma@example.com
              </div>
            </TableCell>
            <TableCell className="hidden xl:table-column">Sale</TableCell>
            <TableCell className="hidden xl:table-column">
              <Badge className="text-xs" variant="outline">
                Approved
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
              2023-06-26
            </TableCell>
            <TableCell className="text-right">$450.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                liam@example.com
              </div>
            </TableCell>
            <TableCell className="hidden xl:table-column">Sale</TableCell>
            <TableCell className="hidden xl:table-column">
              <Badge className="text-xs" variant="outline">
                Approved
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
              2023-06-27
            </TableCell>
            <TableCell className="text-right">$550.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
    </div>
    </div>
  </main>
  )
}

export default page