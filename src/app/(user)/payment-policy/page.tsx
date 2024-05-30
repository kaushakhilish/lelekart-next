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
      <div className='font-bold text-3xl pt-14 pb-6'>Payment Information</div>
      <Card className='w-full' >
  <CardHeader>
    <CardTitle> How do I pay for a LeleKart purchase?</CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>LeleKart offers you multiple payment methods. Whatever your online mode of payment, you can rest assured that LeleKarts&apos;s trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.
You may use Internet Banking, Gift Card, Cash on Delivery, and Wallet to make your purchase.
LeleKart also accepts payments made using Visa, MasterCard, Maestro, and American Express credit/debit cards in India and 21 other countries.</p>
  </CardContent>
</Card>
<Card className='w-full' >
<CardHeader>
<CardTitle> Are there any hidden charges (Octroi or Sales Tax) when I make a purchase on Lelekart?</CardTitle>
</CardHeader>
<CardContent>
<p>There are NO hidden charges when you make a purchase on Lelekart. The prices listed for all items are final and all-inclusive. The price you see on the product page is exactly what you pay. Delivery charges may be extra depending on the seller&apos;s policy. Please check the individual seller for the same. In the case of seller WS Retail, the ₹50 delivery charge is waived off on orders worth ₹500 and over.</p>
</CardContent>
</Card>

<Card className='w-full' >
<CardHeader>
<CardTitle>What is Cash on Delivery?</CardTitle>
</CardHeader>
<CardContent>
<p>If you are not comfortable making an online payment on lelekart.com, you can opt for the Cash on Delivery (C-o-D) payment method instead. With C-o-D, you can pay in cash at the time of the actual delivery of the product at your doorstep, without requiring you to make any advance payment online.
The maximum order value for a Cash on Delivery (C-o-D) payment is ₹50,000. It is strictly a cash-only payment method. Gift Cards or store credit cannot be used for C-o-D orders. Foreign currency cannot be used to make a C-o-D payment. Only Indian Rupees accepted.</p>
</CardContent>
</Card>

<Card className='w-full' >
<CardHeader>
<CardTitle>How do I pay using a credit/debit card?</CardTitle>
</CardHeader>
<CardContent>
<p>We accept payments made by credit/debit cards issued in India and 21 other countries.
Credit cards: Visa, MasterCard, and American Express are accepted.
Debit cards: Visa, MasterCard, and Maestro are accepted.</p>
</CardContent>
</Card>

<Card className='w-full' >
<CardHeader>
<CardTitle>Is it safe to use my credit/debit card on Lelekart?</CardTitle>
</CardHeader>
<CardContent>
<p>Your online transaction on Lelekart is secure with 256-bit encryption technology to protect your card information. Lelekart uses trusted payment gateways managed by leading banks. Banks also use 3D Secure password for additional security.</p>
</CardContent>
</Card>

<Card className='w-full' >
<CardHeader>
<CardTitle>What steps does Lelekart take to prevent card fraud?</CardTitle>
</CardHeader>
<CardContent>
<p>Lelekart and their partners monitor transactions for suspicious activity. They may request identity documents in rare cases to verify the cardholder.</p>
</CardContent>
</Card>

<Card className='w-full' >
<CardHeader>
<CardTitle>What is a 3D Secure password?</CardTitle>
</CardHeader>
<CardContent>
<p>The 3D Secure password is an additional layer of security for online credit/debit card transactions. It is created by you and known only to you.</p>
</CardContent>
</Card>

<Card className='w-full' >
<CardHeader>
<CardTitle>Can I make a credit/debit card or Internet Banking payment on Lelekart through my mobile?</CardTitle>
</CardHeader>
<CardContent>
<p>Yes, you can make credit card payments through the Lelekart mobile site and application. Lelekart uses secure encryption technology to protect your card information.</p>
</CardContent>
</Card>
<Card className='w-full' >
<CardHeader>
<CardTitle>How do I place a Cash on Delivery (C-o-D) order? </CardTitle>
</CardHeader>
<CardContent>
<p>Look for the &quot;Cash on Delivery Available&quot; icon on the item. Add the item to your cart and proceed to checkout. Choose &quot;Pay By Cash on Delivery&quot; and enter the CAPTCHA text. Once verified, your order will be processed for shipment.</p>
<ul>
<li>Maximum order value for C-o-D is ₹50,00</li>
<li>(continued) Only cash is accepted at the time of delivery.</li>
<li>Gift Cards or store credit cannot be used for C-o-D orders.</li>
</ul>
</CardContent>
</Card>

<Card className='w-full' >
<CardHeader>
<CardTitle>What is Lelekart&apos;s credit card EMI option?</CardTitle>
</CardHeader>
<CardContent>
<p>Lelekart&apos;s credit card EMI option allows you to pay for your purchases in installments of 3, 6, 9, 12, 18*, or 24 months* with credit cards from select banks (HDFC, Citi, ICICI, etc.). There is no processing fee, but the bank may charge interest. Be sure to check with your bank for details on how cancellations, refunds, or pre-closure could affect your EMI terms and interest charges.</p>
</CardContent>
</Card>

<Card className='w-full' >
<CardHeader>
<CardTitle>How do I make a payment using Lelekart&apos;s credit card EMI option?</CardTitle>
</CardHeader>
<CardContent>
<div><ul>
<li>1. Add your desired items to your Lelekart shopping cart.</li>
<li>2. Proceed with your order and enter your address.</li>
<li>3. When choosing a payment method, select &quot;EMI&quot;.</li>
<li>4. Choose your credit card issuing bank and select your preferred EMI plan.</li>
<li>5. Enter your credit card details and click &quot;Save and Pay&quot;.</li>
<li>Please note: The full amount will be charged to your card on the day of the transaction.</li>
  </ul></div>
</CardContent>
</Card>

    </div>
  )
}

export default page