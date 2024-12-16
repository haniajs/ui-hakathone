import Navbar from "@/components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SecondLast from "@/components/Secondlast";
import Footer from "@/components/Footer";

export default function Comparison () {
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
        <h1 className="font-medium text-[48px] leading-[72px] text-center">Product Comparison</h1>
        <div className="flex gap-x-2 justify-center items-center">
       <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/card"}><h1 className="font-light text-[16px] leading-[24px] text-center">Comparison</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] md:hidden sm:block">
         <div className="pt-[90px]">
         <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[180px]"/>
            <h1 className="font-medium text-[48px] leading-[72px] text-center">Product Comparison</h1>
            <div className="flex gap-x-2 justify-center items-center">
            <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/card"}><h1 className="font-light text-[16px] leading-[24px] text-center">Comparison</h1></Link>
            </div>
         </div>
         </div>
        
        {/* Hero section close*/}



         {/* First section open*/}

          {/* For large screen*/}

          <div className="sm:hidden md:block">
            <div className="flex ml-[80px] border-b-2 mr-[80px] gap-x-4">
                <div className="flex-1 mt-10">
                    <h1 className="font-semibold text-[28px] leading-[35.42px]">Go to Product<br /> page for more <br />
                    Products</h1>
                   <button><p className="font-semibold text-[20px] leading-[30px] text-[#727272] mt-4 border-b-2 border-[#727272]">View More</p> </button> 
                </div>

                <div className="flex-1 mt-8">
                    <Image src={"/Images/sofa1.png"} alt="sofa1" height={100} width={100} className="w-[280px] h-[177px] rounded-[10px] bg-[#F9F1E7]"/>
                    <h1 className="font-semibold text-[24px] leading-[30.36px] mt-2">Asgaard Sofa</h1>
                    <h1 className="font-semibold text-[18px] leading-[27px] mt-2">Rs. 250,000.00</h1>
                    <div className="flex gap-x-2 mt-2">
                        <h1  className="font-semibold text-[18px] leading-[27px]">4.7</h1>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStarHalf className="text-[#FFC700]"/>
                        <p className="text-[#9F9F9F]">|</p>
                        <h1 className="font-normal text-[13px] leading-[19.5px] text-[#9F9F9F]">204 Review</h1>
                    </div>
                </div>

                <div className="flex-1 mt-8">
                <Image src={"/Images/sofa9.png"} alt="sofa9" height={300} width={300} className="w-[280px] h-[177px] rounded-[10px] bg-[#F9F1E7]"/>
                    <h1 className="font-semibold text-[24px] leading-[30.36px] mt-2">Outdoor Sofa Set</h1>
                    <h1 className="font-semibold text-[18px] leading-[27px] mt-2">Rs. 224,000.00</h1>
                    <div className="flex gap-x-2 mt-2">
                        <h1  className="font-semibold text-[18px] leading-[27px]">4.2</h1>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStarHalf className="text-[#FFC700]"/>
                        <p className="text-[#9F9F9F]">|</p>
                        <h1 className="font-normal text-[13px] leading-[19.5px] text-[#9F9F9F]">145 Review</h1>
                    </div>
                </div>

                <div className="flex-1 mt-16 mb-28">
                    <h1 className="font-semibold text-[24px] leading-[30.36px]">Add A Product</h1>
                    <div className="flex  text-white w-[242px] h-[26px] bg-[#B88E2F] rounded-[6px] mt-4">
                   <button  className="font-semibold text-[14px] leading-[17.71px] text-white w-[242px] h-[26px] text-left p-1">Choose a Product</button>
                   <IoIosArrowDown className="w-4 h-6 text-white"/>
                   </div>
                </div>
            </div>
          </div>


          {/* For mobile screen*/}

          <div className="md:hidden sm:block">
            <div className="flex flex-col ml-[80px] border-b-2 mr-[80px] gap-x-4">
                <div className="flex-1 mt-20">
                    <h1 className="font-semibold text-[28px] leading-[35.42px]">Go to Product<br /> page for more <br />
                    Products</h1>
                   <button><p className="font-semibold text-[20px] leading-[30px] text-[#727272] mt-4 border-b-2 border-[#727272]">View More</p> </button> 
                </div>

                <div className="flex-1 mt-12">
                    <Image src={"/Images/sofa1.png"} alt="sofa1" height={100} width={100} className="w-[280px] h-[177px] rounded-[10px] bg-[#F9F1E7]"/>
                    <h1 className="font-semibold text-[24px] leading-[30.36px] mt-2">Asgaard Sofa</h1>
                    <h1 className="font-semibold text-[18px] leading-[27px] mt-2">Rs. 250,000.00</h1>
                    <div className="flex gap-x-2 mt-2">
                        <h1  className="font-semibold text-[18px] leading-[27px]">4.7</h1>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStarHalf className="text-[#FFC700]"/>
                        <p className="text-[#9F9F9F]">|</p>
                        <h1 className="font-normal text-[13px] leading-[19.5px] text-[#9F9F9F]">204 Review</h1>
                    </div>
                </div>

                <div className="flex-1 mt-12">
                <Image src={"/Images/sofa9.png"} alt="sofa9" height={300} width={300} className="w-[280px] h-[177px] rounded-[10px] bg-[#F9F1E7]"/>
                    <h1 className="font-semibold text-[24px] leading-[30.36px] mt-2">Outdoor Sofa Set</h1>
                    <h1 className="font-semibold text-[18px] leading-[27px] mt-2">Rs. 224,000.00</h1>
                    <div className="flex gap-x-2 mt-2">
                        <h1  className="font-semibold text-[18px] leading-[27px]">4.2</h1>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStarHalf className="text-[#FFC700]"/>
                        <p className="text-[#9F9F9F]">|</p>
                        <h1 className="font-normal text-[13px] leading-[19.5px] text-[#9F9F9F]">145 Review</h1>
                    </div>
                </div>

                <div className="flex-1 mt-16 mb-28">
                    <h1 className="font-semibold text-[24px] leading-[30.36px]">Add A Product</h1>
                    <div className="flex  text-white w-[242px] h-[26px] bg-[#B88E2F] rounded-[6px] mt-4">
                   <button  className="font-semibold text-[14px] leading-[17.71px] text-white w-[242px] h-[26px] text-left p-1">Choose a Product</button>
                   <IoIosArrowDown className="w-4 h-6 text-white"/>
                   </div>
                </div>
            </div>
          </div>

           {/* First section close */}


            {/* Second section open */}

             {/* For Large screen */}

             <div className="sm:hidden md:block">
                <div className="flex mb-20">
                    <div className="flex-1 border-r-2">
                        <h1 className="font-medium text-[28px] leading-[35.42px] text-center mt-12">General</h1>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Sales Package</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Model Number</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Secondary Material</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Configuration</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Upholstery Material</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Upholstery Color</p>

                        <h1 className="font-medium text-[28px] leading-[35.42px] text-center mt-24">Product</h1>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Filling Material</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Finish Type</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Adjustable Headrest</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Maximum Load<br /> Capacity</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-24 mt-8">Origin of Manufacture</p>

                        <h1 className="font-medium text-[28px] leading-[35.42px] text-center mt-24">Dimensions</h1>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-8">Width</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-8">Height</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-8">Depth</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-8">Weight</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-8">Seat Height</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-8">Leg Height</p>

                        <h1 className="font-medium text-[28px] leading-[35.42px] ml-20 mt-24">Warranty</h1>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-8">Warranty Summary</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-12">Warranty Service<br /> Type</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-28">Covered in Warranty</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-28">Not Covered in<br /> Warranty</p>
                        <p className="font-normal text-[20px] leading-[25.3px] ml-20 mt-40">Domestic Warranty</p>
                    </div>

                    <div className="flex-1 border-r-2 ml-4">
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-28">1 sectional sofa</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">TFCBLIGRBL6SRHS</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">Solid Wood</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">L-shaped</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">Fabric + Cotton</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">Bright Grey & Lion</p>

                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-40">Foam</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-10">Bright Grey & Lion</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">No</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">280 KG</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-14">India</p>

                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-48">265.32 cm</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">76 cm</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">167.76 cm</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">45 KG</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">41.52 cm</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">5.46 cm</p>

                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-40">1 Year Manufacturing<br /> Warranty</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">For Warranty Claims or<br /> Any Product Related<br /> Issues Please Email at<br /> operations@trevifurnitu<br />re.com</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">Warranty Against<br /> Manufacturing Defect</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-20">
                        The Warranty Does Not<br /> Cover Damages Due To<br /> Usage Of The Product<br /> Beyond Its Intended Use<br /> And Wear & Tear In The<br /> Natural Course Of<br /> Product Usage.</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-10">1 Year</p>

                    <Link href={"/card"}><button className="font-normal text-[20px] leading-[30px] ml-8 mt-10 text-white w-[215px] h-[64px] bg-[#B88E2F] hover:text-white hover:bg-black">Add To Cart</button></Link>
                    </div>


                    <div className="flex-1 border-r-2 ml-4">
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-28">1 Three Seater, 2 Single<br /> Seater</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-6">DTUBLIGRBL568</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">Solid Wood</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">L-shaped</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">Fabric + Cotton</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">Bright Grey & Lion</p>

                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-40">Matte</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-10">Bright Grey & Lion</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">yes</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">300 KG</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-14">India</p>

                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-44">265.32 cm</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">76 cm</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">167.76 cm</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">65 KG</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">41.52 cm</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">5.46 cm</p>

                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-40">1.2 Year Manufacturing<br /> Warranty</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-8">For Warranty Claims or<br /> Any Product Related<br /> Issues Please Email at<br /> support@xyz.com</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-12">Warranty of the product<br /> is limited to<br /> manufacturing defects<br /> only.</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-10">
                    The Warranty Does Not<br /> Cover Damages Due To<br /> Usage Of The Product<br /> Beyond Its Intended Use<br /> And Wear & Tear In The<br /> Natural Course Of<br /> Product Usage.</p>
                    <p className="font-normal text-[20px] leading-[25.3px] ml-8 mt-10">3 Months</p>

                   <Link href={"/card"}><button className="font-normal text-[20px] leading-[30px] ml-8 mt-10 text-white w-[215px] h-[64px] bg-[#B88E2F] hover:text-white hover:bg-black">Add To Cart</button></Link>
                    </div>
                    <div className="flex-1"></div>
                </div>
             </div>


             {/* For mobile screen */}

             <div className="md:hidden sm:block mb-12">

                <div>
                <h1 className="font-medium text-[28px] leading-[35.42px] text-center mt-12">General</h1>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Sales Package</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">1 sectional sofa</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">1 Three Seater, 2 Single<br /> Seater</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Model Number</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">TFCBLIGRBL6SRHS</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">DTUBLIGRBL568</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Secondary Material</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Solid Wood</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Solid Wood</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Configuration</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">L-shaped</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">L-shaped</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Upholstery Material</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Fabric + Cotton</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Fabric + Cotton</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Upholstery Color</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Bright Grey & Lion</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Bright Grey & Lion</p>
                </div>


                <div>
                <h1 className="font-medium text-[28px] leading-[35.42px] text-center mt-12">Product </h1>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Filling Material</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Foam</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Matte</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Finish Type</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Bright Grey & Lion</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Bright Grey & Lion</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Adjustable Headrest</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">No</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">yes</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Maximum Load<br /> Capacity</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">280 KG</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">300 KG</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Origin of Manufacture</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">India</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">India</p>
                </div>


                <div>
                <h1 className="font-medium text-[28px] leading-[35.42px] text-center mt-12">Dimensions </h1>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Width</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">265.32 cm</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">265.32 cm</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Height</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">76 cm</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">76 cm</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Depth</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">167.76 cm</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">167.76 cm</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Weight</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">45 KG</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">65 KG</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Seat Height</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">41.52 cm</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">41.52 cm</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Leg Height</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">5.46 cm</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">5.46 cm</p>
                </div>


                <div>
                <h1 className="font-medium text-[28px] leading-[35.42px] text-center mt-12">Warranty </h1>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Warranty Summary</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">1 Year Manufacturing<br /> Warranty</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">1.2 Year Manufacturing<br /> Warranty</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Warranty Service<br /> Type</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">For Warranty Claims or<br /> Any Product Related<br /> Issues Please Email at<br /> operations@trevifurnitu<br />re.com</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">For Warranty Claims or<br /> Any Product Related<br /> Issues Please Email at<br /> support@xyz.com</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Covered in Warranty</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Warranty Against<br /> Manufacturing Defect</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">Warranty of the product<br /> is limited to<br /> manufacturing defects<br /> only.</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Not Covered in<br /> Warranty</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">The Warranty Does Not<br /> Cover Damages Due To<br /> Usage Of The Product<br /> Beyond Its Intended Use<br /> And Wear & Tear In The<br /> Natural Course Of<br /> Product Usage.</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">The Warranty Does Not<br /> Cover Damages Due To<br /> Usage Of The Product<br /> Beyond Its Intended Use<br /> And Wear & Tear In The<br /> Natural Course Of<br /> Product Usage.</p>

                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-10">Domestic Warranty</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">1 Year</p>
                <p className="font-normal text-[20px] leading-[25.3px] text-center mt-2">3 Months</p>

                <Link href={"/card"}><button className="font-normal text-[20px] leading-[30px] ml-28 mt-10 text-white w-[215px] h-[64px] bg-[#B88E2F] hover:text-white hover:bg-black">Add To Cart</button></Link>
                </div>
             </div>

             {/* Second section open */}


             {/* Secondlast section open */}
             <SecondLast />
             {/* Secondlast section close */}


             {/* Footer open */}
             <Footer />
              {/* Footer close */}
        </>
    );
}