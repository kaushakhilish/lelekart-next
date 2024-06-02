import Image from "next/image"
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React from 'react'
import VendorAddProductForm from "./_components/VendorAddProductForm"
import VendorEditProductForm from "./_components/VendorEditProductForm"

const page = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <Tabs className="" defaultValue="all">
      <div className="flex items-center">
        <TabsList className="bg-white" >
          <TabsTrigger value="all" className="border-gray-500 rounded-xl border-2 font-bold">All</TabsTrigger>
          <TabsTrigger value="active">Pending</TabsTrigger>
          <TabsTrigger value="draft">Rejected</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Accepted
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Price
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>  Sales</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
              Stocks
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Dialog>
  <DialogTrigger><div className="flex justify-center items-center px-4 text-sm font-bold bg-black text-white rounded-xl h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap ">
              Add Product
            </span>
          </div></DialogTrigger>
  <DialogContent className="sm:min-w-[90vw] h-[90vh] overflow-y-scroll" >
    <DialogHeader>
      <DialogTitle className="text-xl py-1" >Fill the form to add product </DialogTitle>
      <DialogDescription>
        <VendorAddProductForm/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

        </div>
      </div>
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle> Products and Performance table</CardTitle>
            <CardDescription>
             
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell font-bold">
                    <span className="">Image</span>
                  </TableHead>
                  <TableHead className=" font-bold" >Name</TableHead>
                  <TableHead className=" font-bold" >Approval</TableHead>
                  <TableHead className="hidden md:table-cell  font-bold">
                    Price
                  </TableHead>
                  <TableHead className="hidden md:table-cell  font-bold">
                    Total Sales
                  </TableHead>
                  <TableHead className="hidden md:table-cell  font-bold">
                    Stock Available
                  </TableHead>
                  <TableHead className="w-0"  >
                    <span>Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt="Product image"
                      className="aspect-square bg-gray-300 rounded-md object-cover"
                      height="64"
                      src="/men.png"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-semibold text-black">
                   T Shirt
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-orange-500 hover:bg-orange-500">Pending</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-black">
                    499.99
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-black">
                    25
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-black">
                   100
                  </TableCell>
                  <TableCell className="justify-end items-center w-[150px] gap-2 flex " >
                          <Dialog>
                        <DialogTrigger><div className="px-2 py-1 border-2 rounded-md" >Edit</div></DialogTrigger>
                        <DialogContent className=" sm:min-w-[90vw]   " >
                          <DialogHeader>
                            <DialogTitle>Edit your product here</DialogTitle>
                            <DialogDescription>
                              <VendorEditProductForm/>  
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="w-[70px] h-[30px]" size={'sm'}>Delete </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt="Product image"
                      className="aspect-square bg-gray-300 rounded-md object-cover"
                      height="64"
                      src="/men.png"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-semibold text-black">
                   T Shirt
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-500 hover:bg-green-500">Accepted</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-black">
                    499.99
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-black">
                    25
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-black">
                   100
                  </TableCell>
                  <TableCell>
                   
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt="Product image"
                      className="aspect-square bg-gray-300 rounded-md object-cover"
                      height="64"
                      src="/men.png"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-semibold text-black">
                   T Shirt
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-red-500 hover:bg-red-500">Rejected</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-black">
                    499.99
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-black">
                    25
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-black">
                   100
                  </TableCell>
                  <TableCell>
                   
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong>{" "}
              products
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </main>
  )
}

export default page