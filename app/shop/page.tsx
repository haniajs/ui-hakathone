import Navbar from "@/components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { FaShareNodes } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SecondLast from "@/components/Secondlast";
import Footer from "@/components/Footer";

export default function Shop () {
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
        <h1 className="font-medium text-[48px] leading-[72px] text-center">Shop</h1>
        <div className="flex gap-x-2 justify-center items-center">
       <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/shop"}><h1 className="font-light text-[16px] leading-[24px] text-center">Shop</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] md:hidden sm:block">
         <div className="pt-[90px]">
         <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[180px]"/>
            <h1 className="font-medium text-[48px] leading-[72px] text-center">Shop</h1>
            <div className="flex gap-x-2 justify-center items-center">
            <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/shop"}><h1 className="font-light text-[16px] leading-[24px] text-center">Shop</h1></Link>
            </div>
         </div>
         </div>
        
        {/* Hero section close*/}


        {/* Subhero section open*/}

        {/* For large screen*/}

        <div className="sm:hidden md:block">
            <div className="w-full bg-[#F9F1E7] h-[100px] flex justify-between">
                <div className="flex ml-[80px] items-center gap-x-4">
                    <Image src={"/Images/icon1.png"} alt="icon1" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <h1 className="font-normal text-[20px] leading-[30px]">Filter</h1>
                    <Image src={"/Images/icon2.png"} alt="icon2" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <Image src={"/Images/icon3.png"} alt="icon3" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <p>|</p>
                    <h1 className="font-normal text-[16px] leading-[24px]">Showing 1–16 of 32 results</h1>
                </div>
                <div className="flex items-center gap-x-4 mr-[80px]">
                    <h1 className="font-normal text-[20px] leading-[30px]">Show</h1>
                    <input type="text" placeholder="16" className="w-[55px] h-[55px] text-center"/>
                    <h1 className="font-normal text-[20px] leading-[30px]">Short by</h1>
                    <input type="text" placeholder="Default" className="w-[188px] h-[55px] text-center"/>
                </div>
            </div>
        </div>

        {/* For mobile screen*/}

        <div className="md:hidden sm:block">
            <div className="w-[428px] bg-[#F9F1E7] h-[100px] flex justify-center border-b-2 mt-1">
                <div className="flex items-center gap-x-4">
                <Image src={"/Images/icon1.png"} alt="icon1" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <h1 className="font-normal text-[20px] leading-[30px]">Filter</h1>
                    <Image src={"/Images/icon2.png"} alt="icon2" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <Image src={"/Images/icon3.png"} alt="icon3" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <p>|</p>
                    <h1 className="font-normal text-[16px] leading-[24px]">Showing 1–16 of 32 results</h1>
                </div>
                </div>
                <div className="w-[428px] bg-[#F9F1E7] h-[100px] flex justify-center mt-1">
                <div className="flex items-center gap-x-4">
                <h1 className="font-normal text-[20px] leading-[30px]">Show</h1>
                    <input type="text" placeholder="16" className="w-[55px] h-[55px] text-center"/>
                    <h1 className="font-normal text-[20px] leading-[30px]">Short by</h1>
                    <input type="text" placeholder="Default" className="w-[188px] h-[55px] text-center"/>
                </div>
            </div>
        </div>

        {/* Subhero section close*/}


        {/* Main section open*/}

        {/* first section for large screen*/}

        <div className="sm:hidden md:block">
            <div>
            <div className="flex gap-x-2">
                <div className="flex-1 ml-[40px] mt-[60px]">

                    <div className="bg-[url('/Images/shop1.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price1.png"} alt="price1" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Syltherine</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 2.500.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 3.500.000</p>
                      </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                    <div className="bg-[url('/Images/shop2a.png')] w-[285px] h-[446px]">
                    <div className="bg-[url('/Images/shop2ab.png')] w-[285px] h-[446px]">
                    <Link href={"/card"}><button className="font-semibold text-[16px] leading-[24px] text-[#E89F71] h-[48px] w-[202px] text-center bg-white mt-[170px] ml-10">Add to cart</button></Link>
                    <div className="flex gap-x-2 mt-4 ml-4">
                    <FaShareNodes className="w-4 h-4 text-white"/>
                    <h1 className="font-semibold text-[16px] leading-[24px] text-white">Share</h1>
                    <Image src={"/Images/compare.png"} alt="compare" height={100} width={100} className="w-4 h-4 text-white"/>
                    <h1 className="font-semibold text-[16px] leading-[24px] text-white">Compare</h1>
                    <CiHeart className="w-4 h-4 text-white"/>
                    <h1 className="font-semibold text-[16px] leading-[24px] text-white">Like</h1>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                <div className="bg-[url('/Images/shop3.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price2.png"} alt="price2" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Lolito</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Luxury big sofa</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 7.000.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 14.000.000</p>
                      </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px] mr-[40px]">
                <div className="bg-[url('/Images/shop4.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Respira</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Outdoor bar table and stool</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 500.000</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>

        {/* first section for mobile  screen*/}


        <div className="md:hidden sm:block">
            <div>
                <div className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop1.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price1.png"} alt="price1" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Syltherine</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 2.500.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 3.500.000</p>
                      </div>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop2a.png')] w-[285px] h-[446px]">
                    <div className="bg-[url('/Images/shop2ab.png')] w-[285px] h-[446px]">
                    <Link href={"/card"}><button className="font-semibold text-[16px] leading-[24px] text-[#E89F71] h-[48px] w-[202px] text-center bg-white mt-[170px] ml-10">Add to cart</button></Link>
                    <div className="flex gap-x-2 mt-4 ml-4">
                    <FaShareNodes className="w-4 h-4 text-white"/>
                    <h1 className="font-semibold text-[16px] leading-[24px] text-white">Share</h1>
                    <Image src={"/Images/compare.png"} alt="compare" height={100} width={100} className="w-4 h-4 text-white"/>
                    <h1 className="font-semibold text-[16px] leading-[24px] text-white">Compare</h1>
                    <CiHeart className="w-4 h-4 text-white"/>
                    <h1 className="font-semibold text-[16px] leading-[24px] text-white">Like</h1>
                    </div>
                    </div>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop3.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price2.png"} alt="price2" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Lolito</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Luxury big sofa</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 7.000.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 14.000.000</p>
                      </div>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop4.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Respira</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Outdoor bar table and stool</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 500.000</h1>
                    </div>
                </div>
            </div>
        </div>


        {/* Second section for large  screen*/}

        <div className="sm:hidden md:block">
            <div>
            <div className="flex gap-x-2">
                <div className="flex-1 ml-[40px] mt-[60px]">

                    <div className="bg-[url('/Images/shop1.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price1.png"} alt="price1" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Syltherine</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 2.500.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 3.500.000</p>
                      </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                <div className="bg-[url('/Images/shop2.png')] h-[301px] w-[285px]">
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Leviosa</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 2.500.000</h1>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                <div className="bg-[url('/Images/shop3.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price2.png"} alt="price2" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Lolito</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Luxury big sofa</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 7.000.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 14.000.000</p>
                      </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px] mr-[40px]">
                <div className="bg-[url('/Images/shop4.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Respira</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Outdoor bar table and stool</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 500.000</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>

        {/* Second section for mobile  screen*/}

        <div className="md:hidden sm:block">
            <div>
                <div className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop1.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price1.png"} alt="price1" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Syltherine</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 2.500.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 3.500.000</p>
                      </div>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop2.png')] h-[301px] w-[285px]">
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Leviosa</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 2.500.000</h1>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop3.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price2.png"} alt="price2" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Lolito</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Luxury big sofa</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 7.000.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 14.000.000</p>
                      </div>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop4.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Respira</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Outdoor bar table and stool</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 500.000</h1>
                    </div>
                </div>
            </div>
        </div>

        {/* Third section for large  screen*/}

        <div className="sm:hidden md:block">
            <div>
            <div className="flex gap-x-2">
                <div className="flex-1 ml-[40px] mt-[60px]">

                    <div className="bg-[url('/Images/shop1.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price1.png"} alt="price1" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Syltherine</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 2.500.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 3.500.000</p>
                      </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                <div className="bg-[url('/Images/shop2.png')] h-[301px] w-[285px]">
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Leviosa</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 2.500.000</h1>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                <div className="bg-[url('/Images/shop3.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price2.png"} alt="price2" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Lolito</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Luxury big sofa</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 7.000.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 14.000.000</p>
                      </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px] mr-[40px]">
                <div className="bg-[url('/Images/shop4.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Respira</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Outdoor bar table and stool</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 500.000</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>

          {/* Third section for mobile  screen*/}

          <div className="md:hidden sm:block">
            <div>
                <div className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop1.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price1.png"} alt="price1" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Syltherine</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 2.500.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 3.500.000</p>
                      </div>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop2.png')] h-[301px] w-[285px]">
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Leviosa</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 2.500.000</h1>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop3.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price2.png"} alt="price2" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Lolito</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Luxury big sofa</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 7.000.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 14.000.000</p>
                      </div>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop4.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Respira</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Outdoor bar table and stool</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 500.000</h1>
                    </div>
                </div>
            </div>
        </div>

        {/* Fourth section for large  screen*/}

        <div className="sm:hidden md:block">
            <div>
            <div className="flex gap-x-2">
                <div className="flex-1 ml-[40px] mt-[60px]">

                    <div className="bg-[url('/Images/shop1.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price1.png"} alt="price1" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Syltherine</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 2.500.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 3.500.000</p>
                      </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                <div className="bg-[url('/Images/shop2.png')] h-[301px] w-[285px]">
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Leviosa</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 2.500.000</h1>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                <div className="bg-[url('/Images/shop3.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price2.png"} alt="price2" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Lolito</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Luxury big sofa</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 7.000.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 14.000.000</p>
                      </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px] mr-[40px]">
                <div className="bg-[url('/Images/shop4.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Respira</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Outdoor bar table and stool</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 500.000</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>

        {/* Fourth section for mobile  screen*/}

        <div className="md:hidden sm:block">
            <div>
                <div className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop1.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price1.png"} alt="price1" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Syltherine</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 2.500.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 3.500.000</p>
                      </div>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop2.png')] h-[301px] w-[285px]">
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Leviosa</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Stylish cafe chair</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 2.500.000</h1>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop3.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price2.png"} alt="price2" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Lolito</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Luxury big sofa</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 7.000.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 14.000.000</p>
                      </div>
                    </div>
                </div>

                <div  className="mt-8 flex flex-col items-center">
                <div className="bg-[url('/Images/shop4.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Respira</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Outdoor bar table and stool</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 500.000</h1>
                    </div>
                </div>
            </div>
        </div>



         {/* Fifth section for large  screen*/}

          <div className="sm:hidden md:block">
         <div className="flex justify-center items-center gap-x-4 mt-[60px] mb-4">
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">1</button>
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">2</button>
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">3</button>
            <button className="font-light text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[98px] rounded-[10px]"><Link href={"/product"}>Next</Link></button>
         </div>
         </div>

          {/* Fifth section for mobile  screen*/}

          <div className="md:hidden sm:block">
          <div className="flex justify-center items-center gap-x-4 mt-[60px] mb-4">
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">1</button>
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">2</button>
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">3</button>
            <button className="font-light text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[98px] rounded-[10px]"><Link href={"/product"}>Next</Link></button>
         </div>
          </div>

           {/* Main section open*/}

            {/* Second last section  open*/}
            <SecondLast />
             {/* Second last section  close*/}

             {/* Footer  open*/}
             <Footer />
             {/* Footer  close*/}
        </>
    )
}