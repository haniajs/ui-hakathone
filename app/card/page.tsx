import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import React from "react";
import SecondLast from "@/components/Secondlast";
import Footer from "@/components/Footer";

export default function Card () {
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
        <h1 className="font-medium text-[48px] leading-[72px] text-center">Cart</h1>
        <div className="flex gap-x-2 justify-center items-center">
       <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/card"}><h1 className="font-light text-[16px] leading-[24px] text-center">Cart</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] md:hidden sm:block">
         <div className="pt-[90px]">
         <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[180px]"/>
            <h1 className="font-medium text-[48px] leading-[72px] text-center">Cart</h1>
            <div className="flex gap-x-2 justify-center items-center">
            <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/card"}><h1 className="font-light text-[16px] leading-[24px] text-center">Cart</h1></Link>
            </div>
         </div>
         </div>
        
        {/* Hero section close*/}



        {/* Main section open*/}

        {/* for large screen*/}
        <div className="sm:hidden md:block">
            <div className="w-full h-[525px] grid grid-cols-5 grid-rows-5 gap-6 mt-[60px]">
                <div className="col-span-3 ml-[80px]">
                    <div className="flex p-6 gap-x-6 bg-[#F9F1E7]">
                        <h1 className="font-medium text-[16px] leading-[24px] ml-[100px]">Product</h1>
                        <h1 className="font-medium text-[16px] leading-[24px] ml-[40px]">Price</h1>
                        <h1 className="font-medium text-[16px] leading-[24px] ml-[50px]">Quantity</h1>
                        <h1 className="font-medium text-[16px] leading-[24px] ml-[40px]">Subtotal</h1>
                    </div>

                    <div>
                        <div className="flex mt-12 gap-x-6" >
                            <Image src={"/Images/sofa.png"} alt="sofa" height={100} width={100} className="bg-[#F9F1E7] w-[108px] h-[105px] rounded-[10px]"/>
                            <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] mt-10">Asgaard sofa</h1>
                            <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] mt-10">Rs. 250,000.00</h1>
                            <h1 className="h-[32px] w-[32px] border border-black rounded-[5px] p-2 mt-10">1</h1>
                            <h1 className="font-normal text-[16px] leading-[24px] mt-10">Rs. 250,000.00</h1>
                            <AiFillDelete className="h-6 w-6 text-[#B88E2F] mt-10"/>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 row-span-4 bg-[#F9F1E7] mr-[80px]">
                    <h1 className="font-semibold text-[32px] leading-[48px] text-center mt-[20px]">Cart Totals</h1>
                    <div className="flex mt-16 gap-x-20 ml-[60px]">
                        <h1 className="font-medium text-[16px] leading-[24px]">Subtotal</h1>
                        <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Rs. 250,000.00</p>
                    </div>
                    <div className="flex mt-10 gap-x-20 ml-[60px]">
                        <h1 className="font-medium text-[16px] leading-[24px]">Total</h1>
                        <p className="font-normal text-[20px] leading-[30px] text-[#B88E2F]">Rs. 250,000.00</p>
                    </div>
                    <Link href={"/checkout"}><button className="font-normal text-[20px] leading-[30px] w-[222px] h-[58.95px] border border-black rounded-[15px] mt-12 ml-20">Check Out</button></Link>
                </div>
            </div>
        </div>


        {/* for mobile screen*/}
        <div className="md:hidden sm:block">
            <div className="flex">
                <div className="flex-1">
                <div className="bg-[#F9F1E7] w-24 h-[400px] mt-10 ml-[40px]">
                    <h1 className="font-medium text-[16px] leading-[24px] pt-[125px] pl-[10px]">Product</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] pt-10 pl-[16px]">Price</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] pt-10 pl-[10px]">Quantity</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] pt-10 pl-[10px]">Subtotal</h1>
                </div>
                </div>
                <div className="flex-1">
                <Image src={"/Images/sofa.png"} alt="sofa" height={100} width={100} className="bg-[#F9F1E7] w-[108px] h-[105px] rounded-[10px] mt-10"/>
                <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] mt-6">Asgaard sofa</h1>
                <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] mt-8">Rs. 250,000.00</h1>
                <h1 className="h-[32px] w-[32px] border border-black rounded-[5px] p-2 mt-8">1</h1>
                <h1 className="font-normal text-[16px] leading-[24px] mt-8">Rs. 250,000.00</h1>
                <AiFillDelete className="h-6 w-6 text-[#B88E2F] mt-8"/>
                </div>
            </div>

            <div className="w-[428px] h-[400px] bg-[#F9F1E7] mt-6">
            <h1 className="font-semibold text-[32px] leading-[48px] text-center pt-[20px]">Cart Totals</h1>
                    <div className="flex mt-16 gap-x-20 ml-[80px]">
                        <h1 className="font-medium text-[16px] leading-[24px]">Subtotal</h1>
                        <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Rs. 250,000.00</p>
                    </div>
                    <div className="flex mt-10 gap-x-20 ml-[80px]">
                        <h1 className="font-medium text-[16px] leading-[24px]">Total</h1>
                        <p className="font-normal text-[20px] leading-[30px] text-[#B88E2F]">Rs. 250,000.00</p>
                    </div>
                    <Link href={"/checkout"}><button className="font-normal text-[20px] leading-[30px] w-[222px] h-[58.95px] border border-black rounded-[15px] mt-12 ml-[100px]">Check Out</button></Link>
            </div>
        </div>

        {/* Main section close*/}

        {/* Second last section  open*/}
        <SecondLast />
        {/* Second last section  open*/}

        {/* Footer  open*/}
        <Footer />
         {/* Footer  close*/}
        </>
    );
}