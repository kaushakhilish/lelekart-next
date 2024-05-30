import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const page = () => {
  return (
    <div className='flex flex-col w-full px-20 pb-6 font-urbanist gap-6' >
      <div className='font-bold text-3xl pt-14'>Refund/Cancellation Policy</div>
      <div className='pb-6 w-[60%] text-gray-400 font-bold' >At Lelekart, we are committed to providing our customers with the highest level of satisfaction. If for any reason you are not satisfied with your purchase, we offer the following Refund/Cancellation Policy.</div>
      <div className='flex flex-wrap  justify-between gap-y-6 w-full pb-6' >
        <Card className='w-[49%]' >
  <CardHeader>
    <CardTitle>Refunds</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>If you are not satisfied with your purchase, you may request a full refund within 7 days of the purchase date. To request a refund, please contact us at +91 9877454036. Refunds will be processed within 7 days of receipt of the request. The total amount will be credited within 5-7 working days to the customer&apos;s account.</p>
  </CardContent>
</Card>
<Card className='w-[49%]' >
<CardHeader>
<CardTitle>Cancellations</CardTitle>
</CardHeader>
<CardContent>
<p>If you need to cancel your order, please contact us as soon as possible at +91 9877454036. If your order has not yet been processed, we will cancel the order and issue a full refund. If your order has been processed, we may not be able to cancel it, but you may be eligible for a refund under our Refunds policy.</p>
</CardContent>
</Card>
<Card className='w-full' >
<CardHeader>
<CardTitle>Changes to this Policy</CardTitle>
</CardHeader>
<CardContent>
<p>We may update this Refund/Cancellation Policy from time to time to reflect changes in our practices or to comply with legal requirements. We will notify you of any material changes to this Policy by posting the updated policy on our website. Your continued use of our services after the effective date of any changes to this Policy constitutes your acceptance of the changes.</p>
</CardContent>
</Card>
<Card className='w-[49%]' >
<CardHeader>
<CardTitle>Exceptions
</CardTitle>
</CardHeader>
<CardContent>
<p>This Refund/Cancellation Policy does not apply to certain products or services, such as digital products or services delivered electronically. For these products and services, all sales are final and no refunds will be issued.</p>
</CardContent>
</Card>



<Card className='w-[49%]' >
<CardHeader>
<CardTitle>Contact Information</CardTitle>
</CardHeader>
<CardContent>
<p>If you have any questions about this Refund/Cancellation Policy or our information practices, please contact us at +91 9877454036.</p>
</CardContent>
</Card>
</div>


    </div>
  )
}

export default page