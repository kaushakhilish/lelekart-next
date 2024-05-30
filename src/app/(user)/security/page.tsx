import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const page = () => {
  return (
    <div className='flex flex-col w-full px-20 pb-6 font-urbanist gap-6' >
      <div className='font-bold text-3xl pt-14'>Safe and Secure Shopping</div>
      <div className='pb-6 w-[60%] text-gray-400 font-bold' >Lelekart is dedicated to ensuring a safe and secure shopping experience for our customers. Here are some frequently asked questions regarding the security of online payments on Lelekart:</div>
      <div className='flex justify-between w-full flex-wrap gap-y-6' >
      <Card className='w-[49%]'>
  <CardHeader>
    <CardTitle>Is making online payment secure on Lelekart?</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Yes, making the online payment is secure on Lelekart.</p>
  </CardContent>
</Card>

<Card className='w-[49%]'>
  <CardHeader>
    <CardTitle>Does Lelekart store my credit/debit card information?</CardTitle>
  </CardHeader>
  <CardContent>
    <p>No. Lelekart only stores the last 4 digits of your card number for the purpose of card identification.</p>
  </CardContent>
</Card>

<Card className='w-[49%]'>
  <CardHeader>
    <CardTitle>What credit/debit cards are accepted on Lelekart?</CardTitle>
  </CardHeader>
  <CardContent>
    <p>We accept VISA, MasterCard, Maestro, Rupay, American Express, Diner&apos;s Club, and Discover credit/debit cards.</p>
  </CardContent>
</Card>
<Card className='w-[49%]'>
  <CardHeader>
    <CardTitle>What other payment options are available on Lelekart?</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Apart from Credit and Debit Cards, we accept payments via Internet Banking (covering 44 banks), Cash on Delivery, Equated Monthly Installments (EMI), E-Gift Vouchers, Lelekart Pay Later, UPI, Wallet, and Paytm Postpaid.</p>
  </CardContent>
</Card>
<Card className='w-full'>
  <CardHeader>
    <CardTitle>Do you accept payment made by credit/debit cards issued in other countries?</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Yes! We accept VISA, MasterCard, Maestro, American Express credit/debit cards issued by banks in India and in the following countries: Australia, Austria, Belgium, Canada, Cyprus, Denmark, Finland, France, Germany, Ireland, Italy, Luxembourg, the Netherlands, New Zealand, Norway, Portugal, Singapore, Spain, Sweden, the UK, and the US. Please note that we do not accept internationally issued credit/debit cards for eGV payments/top-ups.</p>
  </CardContent>
</Card>
      </div>
    <div className='flex justify-between items-center' >
      <div className='flex flex-col gap-4 w-[48%]' >
        <div className='text-2xl font-bold pt-4'>Privacy Policy</div>
        <div  className='text-gray-400 font-bold' >Lelekart.com respects your privacy and is committed to protecting it. For more details, please see our Privacy Policy.</div>
      </div>
      <div className='flex flex-col gap-4 w-[48%]' >
        <div className='text-2xl font-bold pt-4'>Contact Us</div>
        <div  className='text-gray-400 font-bold' >Couldn&apos;t find the information you need? Please Contact Us.</div>
      </div>
    </div>

    </div>
  )
}

export default page