import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaShareNodes } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import React from "react";
import Slide from "@/components/Slide";
import Grid from "@/components/grid";

export default function Home() {
  return (
    <>
    {/* Navbar open */}
    <Navbar />
    {/* Navbar close */}


    {/* Hero Section open */}
     
     {/* For Large screen */}
     <div className="sm:hidden md:block">
      <div className="bg-[url('/Images/hero1.png')] w-full h-[716.83px]">
      <div className="pt-[160px] pl-[620px]">
      <div className="bg-[#FFF3E3] w-[643px] h-[443px] rounded-[10px] pt-[60px] pl-[60px]">
        <h1 className="font-semibold text-[16px] leading-[24px] text-[#333333]">New Arrival</h1>
        <h1 className="font-bold text-[52px] leading-[65px] text-[#B88E2F] mt-2">Discover Our<br /> New Collection</h1>
        <p className="font-medium text-[18px] leading-[24px] text-[#333333] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br /> elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="w-[222px] h-[74px] text-white bg-[#B88E2F] font-bold text-[16px] leading-[24px] mt-6">BUY Now</button>
        </div>
      </div>

      </div>
     </div>
     {/* For mobile screen */}

     <div className="md:hidden sm:block overflow-hidden">
      <div className="bg-[url('/Images/hero1.png')] w-[428px] h-[700px]">
      <div className="pt-[160px] pl-1">
      <div className="bg-[#FFF3E3] w-[420px] h-[443px] rounded-[10px] pt-10 pl-4">
        <h1 className="font-semibold text-[16px] leading-[24px] text-[#333333]">New Arrival</h1>
        <h1 className="font-bold text-[52px] leading-[65px] text-[#B88E2F] mt-2">Discover Our<br /> New Collection</h1>
        <p className="font-medium text-[18px] leading-[24px] text-[#333333] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br /> elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="w-[222px] h-[74px] text-white bg-[#B88E2F] font-bold text-[16px] leading-[24px] mt-6">BUY Now</button>
        </div>
      </div>

      </div>
     </div>

    {/* Hero Section close */}

    {/* First Section open */}

    {/* For large screen */}

    <div className="sm:hidden md:block">
      <div>
        <div className="mt-[60px]">
        <h1 className="font-bold text-[32px] leading-[48px] text-[#333333] text-center">Browse The Range</h1>
        <p className="font-normal text-[20px] leading-[30px] text-[#666666] text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="flex gap-x-2 mt-[80px]">
          <div className="flex-1 ml-8">
            <Image src={"/Images/hero2.png"} alt="hero2" height={100} width={100} className="w-[381px] h-[480px] rounded-[10px]"/>
            <h1 className="font-semibold text-[24px] leading-[36px] text-[#333333] ml-[140px] mt-6">Dining</h1>
          </div>
          <div className="flex-1">
          <Image src={"/Images/hero3.png"} alt="hero3" height={100} width={100} className="w-[381px] h-[480px] rounded-[10px]"/>
          <h1 className="font-semibold text-[24px] leading-[36px] text-[#333333] ml-[140px] mt-6">Living</h1>
          </div>
          <div className="flex-1">
          <Image src={"/Images/hero4.png"} alt="hero4" height={100} width={100} className="w-[381px] h-[480px] rounded-[10px]"/>
          <h1 className="font-semibold text-[24px] leading-[36px] text-[#333333] ml-[140px] mt-6">Bedroom</h1>
          </div>
        </div>
      </div>
    </div>

      {/* For mobile screen */}

      <div className="md:hidden sm:block overflow-hidden">
      <div>
        <div className="mt-[60px]">
        <h1 className="font-bold text-[32px] leading-[48px] text-[#333333] text-center">Browse The Range</h1>
        <p className="font-normal text-[20px] leading-[30px] text-[#666666] text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="flex flex-col gap-x-2 mt-[80px]">
          <div className="flex-1 ml-8">
            <Image src={"/Images/hero2.png"} alt="hero2" height={100} width={100} className="w-[381px] h-[480px] rounded-[10px]"/>
            <h1 className="font-semibold text-[24px] leading-[36px] text-[#333333] text-center mt-6">Dining</h1>
          </div>
          <div className="flex-1 ml-8 mt-6">
          <Image src={"/Images/hero3.png"} alt="hero3" height={100} width={100} className="w-[381px] h-[480px] rounded-[10px]"/>
          <h1 className="font-semibold text-[24px] leading-[36px] text-[#333333] text-center mt-6">Living</h1>
          </div>
          <div className="flex-1 ml-8 mt-6">
          <Image src={"/Images/hero4.png"} alt="hero4" height={100} width={100} className="w-[381px] h-[480px] rounded-[10px]"/>
          <h1 className="font-semibold text-[24px] leading-[36px] text-[#333333] text-center mt-6">Bedroom</h1>
          </div>
        </div>
      </div>
    </div>
    
    {/* First Section close */}


    {/* Second Section open */}

    {/* For large screen */}

    <div className="sm:hidden md:block">
      <div className="mt-[80px]">
        <h1 className="font-bold text-[40px] leading-[48px] text-[#3A3A3A] text-center">Our Products</h1>
      </div>


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



            <div>
            <div className="flex gap-x-2">
                <div className="flex-1 ml-[40px] mt-[60px]">

                    <div className="bg-[url('/Images/sofa10.png')] h-[301px] w-[285px]">
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Grifo</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Night lamp</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 1.500.000</h1>
                    </div>
                </div>

                <div className="flex-1 ml-[40px] mt-[60px]">

                    <div className="bg-[url('/Images/sofa11.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Muggo</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Small mug</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 150.000</h1>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                <div className="bg-[url('/Images/sofa12.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price2.png"} alt="price2" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Pingky</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Cute bed set</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 7.000.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 14.000.000</p>
                      </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px] mr-[40px]">
                <div className="bg-[url('/Images/sofa13.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Potty</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Minimalist flower pot</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 500.000</h1>
                    </div>
                </div>
            </div>
            </div>

            <button className="font-semibold text-[16px] leading-[24px] text-[#B88E2F] text-center w-[245px] h-[48px] border border-[#B88E2F] mt-10 ml-[520px] mb-20"><Link href={"/shop"}>Show More</Link></button>
    

    </div>

    {/* For mobile screen */}


    <div className="md:hidden sm:block">
      <div className="mt-[80px]">
        <h1 className="font-bold text-[40px] leading-[48px] text-[#3A3A3A] text-center">Our Products</h1>
      </div>


            <div>
            <div className="flex flex-col justify-center items-center gap-x-2">
                <div className="flex-1 mt-[60px]">

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

                <div className="flex-1 mt-[60px]">
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



            <div>
            <div className="flex flex-col justify-center items-center gap-x-2">
                <div className="flex-1 mt-[60px]">

                    <div className="bg-[url('/Images/sofa10.png')] h-[301px] w-[285px]">
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Grifo</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Night lamp</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 1.500.000</h1>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">

                    <div className="bg-[url('/Images/sofa11.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Muggo</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Small mug</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 150.000</h1>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                <div className="bg-[url('/Images/sofa12.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price2.png"} alt="price2" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Pingky</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Cute bed set</p>
                      <div className="flex justify-between mt-2 ml-4 mr-4">
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A]">Rp 7.000.000</h1>
                        <p className="font-normal text-[16px] leading-[24px] line-through text-[#B0B0B0]">Rp 14.000.000</p>
                      </div>
                    </div>
                </div>

                <div className="flex-1 mt-[60px]">
                <div className="bg-[url('/Images/sofa13.png')] h-[301px] w-[285px]">
                    <Image src={"/Images/price3.png"} alt="price3" height={100} width={100} className="h-[48px] w-[48px] pt-3 ml-[220px]"/>
                    </div>

                    <div className="bg-[#F4F5F7] h-[145px] w-[285px]">
                      <h1 className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">Potty</h1>
                      <p className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4">Minimalist flower pot</p>
                        <h1 className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] pt-2 ml-4">Rp 500.000</h1>
                    </div>
                </div>
            </div>
            </div>

            <button className="font-semibold text-[16px] leading-[24px] text-[#B88E2F] text-center w-[245px] h-[48px] border border-[#B88E2F] mt-10 ml-[90px] mb-20"><Link href={"/shop"}>Show More</Link></button>

    </div>

     {/* Second Section close */}

     
     {/* Slide open */}
      <Slide />
    {/* Slide close */}


       {/* Grid open */}
       <Grid />
       {/* Grid close */}
    

    {/* Footer open */}
    <Footer />
    {/* Footer close */}
    </>
  );
}
