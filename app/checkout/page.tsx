import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import React from "react";
import SecondLast from "@/components/Secondlast";
import Footer from "@/components/Footer";


export default function Checkout () {
    return (
        <>
         {/* Navbar open */}
         <Navbar />
         {/* Navbar close */}

         {/* Hero section open*/}

         {/* for large screen*/}

         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] sm:hidden md:block">
        <div className="pt-[90px]">
        <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[590px]"/>
        <h1 className="font-medium text-[48px] leading-[72px] text-center">Checkout</h1>
        <div className="flex gap-x-2 justify-center items-center">
       <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/checkout"}><h1 className="font-light text-[16px] leading-[24px] text-center">Checkout</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] md:hidden sm:block">
         <div className="pt-[90px]">
         <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[180px]"/>
            <h1 className="font-medium text-[48px] leading-[72px] text-center">Checkout</h1>
            <div className="flex gap-x-2 justify-center items-center">
            <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/checkout"}><h1 className="font-light text-[16px] leading-[24px] text-center">Checkout</h1></Link>
            </div>
         </div>
         </div>
        
        {/* Hero section close*/}


        {/* Sub hero section open*/}

        {/* For large screen*/}

        <div className="sm:hidden md:block">
            <div className="flex">
                <div className="flex-1 mt-16 ml-[120px] ">
                    <h1 className="font-semibold text-[36px] leading-[54px]">Billing details</h1>

                    <div className="mt-10 flex space-x-8">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-medium text-[16px] leading-[24px]">First Name</label><br />
                            <input type="text" className="w-[211px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-medium text-[16px] leading-[24px]">Last Name</label><br />
                            <input type="text" className="w-[211px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/>
                        </div>
                    </div>
                    
                    <div className="flex flex-col">
                    <label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-6">Company Name (Optional)</label><br />
                    <input type="text" className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-4">Country / Region</label><br />
                    <select name="" id="" className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4">
                        <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Sri Lanka</option>
                        <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Pakistan</option>
                        <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Turkey</option>
                        <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Dubai</option>
                    </select>

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-8">Street address</label><br />
                    <input type="text" className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-8">Town / City</label><br />
                    <input type="text" className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-4">Province</label><br />
                    <select name="" id="" className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4">
                        <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Western Province</option>
                        <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Eastern Province</option>
                    </select>

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-8">ZIP code</label><br />
                    <input type="text" className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-8">Phone</label><br />
                    <input type="text" className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-8">Email address</label><br />
                    <input type="text" className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

                    <input type="text" placeholder="Additional information" className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4"/><br />
                    </div>
                </div>



                <div className="flex-1 ml-[60px] mr-[110px] mt-28">

                    <div className="flex justify-between">
                        <h1 className="font-medium text-[24px] leading-[36px]">Product</h1>
                        <h1  className="font-medium text-[24px] leading-[36px]">Subtotal</h1>
                    </div>

                    <div className="flex justify-between mt-4">
                        <div className="flex gap-x-2">
                            <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Asgaard sofa</h1>
                            <p className="font-medium text-[12px] leading-[18px]">X</p>
                            <p className="font-medium text-[12px] leading-[18px]">1</p>
                        </div>
                        <h1 className="font-light text-[16px] leading-[24px]">Rs. 250,000.00</h1>
                    </div>

                    <div className="flex justify-between mt-4">
                        <h1 className="font-normal text-[16px] leading-[24px]">Subtotal</h1>
                        <h1 className="font-light text-[16px] leading-[24px]">Rs. 250,000.00</h1>
                    </div>

                    <div className="flex justify-between mt-4 mb-4 border-[#D9D9D9] border-b">
                    <h1 className="font-normal text-[16px] leading-[24px]">Total</h1>
                    <h1 className="font-bold text-[24px] leading-[36px] text-[#B88E2F]">Rs. 250,000.00</h1>
                    </div>

                    <div>
                    <div className="flex gap-x-4 mt-4">
                     <FaCircle />
                     <h1 className="font-normal text-[16px] leading-[24px]">Direct Bank Transfer</h1>
                     </div>

                     
                     <p className="font-light text-[16px] leading-[24px] text-[#9F9F9F] mt-4">Make your payment directly into our bank account. Please use
                      your Order ID as the payment reference. Your order will not be
                       shipped until the funds have cleared in our account.</p>

                       <div className="flex gap-x-4 mt-4">
                       <FaRegCircle className="text-[#9F9F9F] mt-1"/>
                     <h1 className="font-medium text-[16px] leading-[24px] text-[#9F9F9F]">Direct Bank Transfer</h1>
                     </div>

                     <div className="flex gap-x-4 mt-4">
                       <FaRegCircle className="text-[#9F9F9F] mt-1"/>
                     <h1 className="font-medium text-[16px] leading-[24px] text-[#9F9F9F]">Cash On Delivery</h1>
                     </div>
                      

                      <p className="font-light text-[16px] leading-[24px] mt-4">Your personal data will be used to support your experience
                         throughout this website, to manage access to your account, and 
                         for other purposes described in our<b> privacy policy</b>.</p>

                         <button className="w-[318px] h-[64px] border border-black rounded-[15px] font-normal text-[20px] leading-[30px] mt-10 ml-24">Place order</button>
                     </div>
                    </div>
            </div>
        </div>



        {/* For mobile screen*/}

        <div className="md:hidden sm:block">
            <div className="mt-16">
            <h1 className="font-semibold text-[36px] leading-[54px]">Billing details</h1>

<div className="mt-10 flex flex-col">
        <label htmlFor="" className="font-medium text-[16px] leading-[24px]">First Name</label><br />
        <input type="text" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/>

        <label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-4">Last Name</label><br />
        <input type="text" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/>
    </div>
</div>

<div className="flex flex-col">
<label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-6">Company Name (Optional)</label><br />
<input type="text" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

<label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-4">Country / Region</label><br />
<select name="" id="" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4">
    <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Sri Lanka</option>
    <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Pakistan</option>
    <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Turkey</option>
    <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Dubai</option>
</select>

<label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-8">Street address</label><br />
<input type="text" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

<label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-8">Town / City</label><br />
<input type="text" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

<label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-4">Province</label><br />
<select name="" id="" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4">
    <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Western Province</option>
    <option value="" className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Eastern Province</option>
</select>

<label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-8">ZIP code</label><br />
<input type="text" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

<label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-8">Phone</label><br />
<input type="text" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

<label htmlFor="" className="font-medium text-[16px] leading-[24px] mt-8">Email address</label><br />
<input type="text" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4"/><br />

<input type="text" placeholder="Additional information" className="w-[426px] h-[75px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4"/><br />
</div>




 
         <div className="mt-12 mr-4 ml-4">
         <div className="flex justify-between">
                        <h1 className="font-medium text-[24px] leading-[36px]">Product</h1>
                        <h1  className="font-medium text-[24px] leading-[36px]">Subtotal</h1>
                    </div>

                    <div className="flex justify-between mt-4">
                        <div className="flex gap-x-2">
                            <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Asgaard sofa</h1>
                            <p className="font-medium text-[12px] leading-[18px]">X</p>
                            <p className="font-medium text-[12px] leading-[18px]">1</p>
                        </div>
                        <h1 className="font-light text-[16px] leading-[24px]">Rs. 250,000.00</h1>
                    </div>

                    <div className="flex justify-between mt-4">
                        <h1 className="font-normal text-[16px] leading-[24px]">Subtotal</h1>
                        <h1 className="font-light text-[16px] leading-[24px]">Rs. 250,000.00</h1>
                    </div>

                    <div className="flex justify-between mt-4 mb-4 border-[#D9D9D9] border-b">
                    <h1 className="font-normal text-[16px] leading-[24px]">Total</h1>
                    <h1 className="font-bold text-[24px] leading-[36px] text-[#B88E2F]">Rs. 250,000.00</h1>
                    </div>

                    <div>
                    <div className="flex gap-x-4 mt-4">
                     <FaCircle />
                     <h1 className="font-normal text-[16px] leading-[24px]">Direct Bank Transfer</h1>
                     </div>

                     
                     <p className="font-light text-[16px] leading-[24px] text-[#9F9F9F] mt-4">Make your payment directly into our bank account. Please use
                      your Order ID as the payment reference. Your order will not be
                       shipped until the funds have cleared in our account.</p>

                       <div className="flex gap-x-4 mt-4">
                       <FaRegCircle className="text-[#9F9F9F] mt-1"/>
                     <h1 className="font-medium text-[16px] leading-[24px] text-[#9F9F9F]">Direct Bank Transfer</h1>
                     </div>

                     <div className="flex gap-x-4 mt-4">
                       <FaRegCircle className="text-[#9F9F9F] mt-1"/>
                     <h1 className="font-medium text-[16px] leading-[24px] text-[#9F9F9F]">Cash On Delivery</h1>
                     </div>
                      

                      <p className="font-light text-[16px] leading-[24px] mt-4">Your personal data will be used to support your experience
                         throughout this website, to manage access to your account, and 
                         for other purposes described in our<b> privacy policy</b>.</p>

                         <button className="w-[318px] h-[64px] border border-black rounded-[15px] font-normal text-[20px] leading-[30px] mt-10 ml-10 mb-8">Place order</button>
                     </div>
                    </div>
                
        </div>
       
       {/* Sub hero section close*/}


         {/* Second last section open*/}
         <SecondLast />
         {/* Second last section close*/}


         {/* Footer open*/}
         <Footer />
        {/* Footer close*/}
        </>
    )
}