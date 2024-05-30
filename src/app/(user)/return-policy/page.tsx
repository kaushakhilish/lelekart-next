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
    <div className='flex flex-col justify-start items-start w-full px-20 pb-6 font-urbanist gap-6' >
      <div className='font-bold text-3xl pt-14 pb-6'>Shipping & Return Policy</div>
      <div className='w-full flex gap-y-6 justify-between flex-wrap' >
      <Card className='w-[48%]' >
<CardHeader>
<CardTitle>What are the delivery charges on Lelekart?</CardTitle>
</CardHeader>
<CardContent>
<ul>
<li>Delivery charges depend on the seller and the order value.</li>
<li>For Lelekart items:
<ul>
<li>Orders below Rs 500: Rs 40 per item delivery charge.</li>
<li>Orders Rs 500 and above: Free delivery.</li>
</ul>
</li>
<li>For seller-listed items, refer to the order summary for individual product delivery charges.</li>
</ul>
</CardContent>
</Card>
<Card className='w-[50%]' >
<CardHeader>
<CardTitle>What is the estimated delivery time on Lelekart?</CardTitle>
</CardHeader>
<CardContent>
<p>Estimated delivery time depends on several factors:</p>
<ul>
<li>Seller offering the product</li>
<li>Product availability</li>
<li>Your shipping destination</li>
<li>Seller location</li>
<li>Courier partner&apos;s delivery time in your area</li>
</ul>
<p>Business days exclude Sundays and public holidays.</p>
<p>Check the product page for the estimated delivery time. Entering your pin code can provide a more accurate estimate.</p>
</CardContent>
</Card>
<Card className='w-full' >
<CardHeader>
<CardTitle>Why does the estimated delivery time vary for each seller?</CardTitle>
</CardHeader>
<CardContent>
You have probably noticed varying estimated delivery times for sellers of the product you are interested in. Delivery times are influenced by product availability, geographic location of the Seller, your shipping destination and the courier partner&apos;s time-to-deliver in your location. Please enter your default pin code on the product page (you don&apos;t have to enter it every single time) to know more accurate delivery times on the product page itself.
</CardContent>
</Card>
<Card className='w-[53%]' >
<CardHeader>
<CardTitle>Why might the delivery date differ from the advertised timeline?</CardTitle>
</CardHeader>
<CardContent>
<p>There are a few reasons why the delivery date might not exactly match the advertised timeline of X-Y business days:</p>
<ul>
<li>Holidays: If a holiday falls between the order placement and expected delivery, the date may shift by a day.</li>
<li>Weekends: Some sellers or courier partners don&apos;t operate on Sundays, so this can be factored into the delivery date.</li>
</ul>
</CardContent>
</Card>
<Card className='w-[45%]' >
<CardHeader>
<CardTitle>Are there hidden costs on Lelekart (sales tax, octroi, etc.)?</CardTitle>
</CardHeader>
<CardContent>
<p>No, there are NO hidden charges on Lelekart.</p>
<p>The listed price on the product page is the final price you&apos;ll pay. This includes all applicable taxes.</p>
<p>Delivery charges are separate and may apply depending on the seller&apos;s policy.</p>
</CardContent>
</Card>
<Card className='w-full' >
<CardHeader>
<CardTitle>Seller does not/cannot ship to my area. Why?</CardTitle>
</CardHeader>
<CardContent>
<p>Please enter your pincode on the product page (you don&apos;t have to enter it every single time) to know whether the product can be delivered to your location. If you haven&apos;t provided your pincode until the checkout stage, the pincode in your shipping address will be used to check for serviceability.</p>
<ul>
  <li>1. Whether the Seller ships to your location</li>
  <li>2. Legal restrictions, if any, in shipping particular products to your location</li>
  <li>3. The availability of reliable courier partners in your location</li>
  <li>4. At times Sellers prefer not to ship to certain locations. This is entirely at their discretion.</li>

</ul>
</CardContent>
</Card>
<Card className='w-full' >
<CardHeader>
<CardTitle>Why is the CoD option not offered in my location?</CardTitle>
</CardHeader>
<CardContent>
<p>Availability of CoD depends on the ability of our courier partner servicing your location to accept cash as payment at the time of delivery. Our courier partners have limits on the cash amount payable on delivery depending on the destination and your order value might have exceeded this limit. Please enter your pin code on the product page to check if CoD is available in your location.</p>

</CardContent>
</Card>

      </div>
      <div className='font-bold text-3xl pt-14 pb-6'>Product Tag Explained</div>
      <div className='w-full flex justify-between pb-6'>
      <Card className='w-[32%]' >
<CardHeader>
<CardTitle className='text-center'>In Stock</CardTitle>
</CardHeader>
<CardContent>
<p>For items listed as &quot;In Stock&quot;, Sellers will mention the delivery time based on your location pincode (usually 2-3 business days, 4-5 business days, or 4-6 business days in areas where standard courier service is available). For other areas, orders will be sent by Registered Post through the Indian Postal Service, which may take 1-2 weeks depending on the location.</p>

</CardContent>
</Card>
<Card className='w-[32%]' >
<CardHeader>
<CardTitle className='text-center' >Available</CardTitle>
</CardHeader>
<CardContent>
<p>The Seller might not have the item in stock but can procure it when an order is placed for the item. The delivery time will depend on the estimated procurement time and the estimated shipping time to your location.</p>

</CardContent>
</Card>
<Card className='w-[32%]' >
<CardHeader>
<CardTitle className='text-center' >&quot;Preorder&quot; or &quot;Forthcoming&quot;</CardTitle>
</CardHeader>
<CardContent>
<p>Such items are expected to be released soon and can be pre-booked for you. The item will be shipped to you on the day of its official release launch and will reach you in 2 to 6 business days. The Preorder duration varies from item to item. Once known, release time and date are mentioned (e.g., 5th May, August 3rd week).</p>

</CardContent>
</Card>

      </div>

    </div>
  )
}

export default page