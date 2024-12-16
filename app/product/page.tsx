import Navbar from "@/components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";

export default function Product () {
    return (
        <>
        {/* Navbar open */}
        <Navbar />
        {/* Navbar close */}
         

        {/* First section open */}

         {/* For large screen */}
        <div className="sm:hidden md:block">
            <div className="bg-[#F9F1E7] flex h-[100px] items-center gap-x-4 pl-[90px]">
                <div className="flex items-center gap-x-4">
                <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Home</h1>
                <IoIosArrowForward />
                <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Shop</h1>
                <IoIosArrowForward />
                <p className="text-[#9F9F9F]">|</p>
                <h1 className="font-normal text-[16px] leading-[24px]">Asgaard sofa</h1>
                </div>
                <div className="ml-[800px]">
                <Link href={"/"}><IoIosArrowDown /></Link>
                </div>
            </div>
        </div>

         {/* For mobile screen */}

         <div className="md:hidden sm:block">
         <div className="bg-[#F9F1E7] flex h-[100px] items-center">
                <div className="flex items-center gap-x-2 ml-6">
                <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Home</h1>
                <IoIosArrowForward />
                <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Shop</h1>
                <IoIosArrowForward />
                <p className="text-[#9F9F9F]">|</p>
                <h1 className="font-normal text-[16px] leading-[24px]">Asgaard sofa</h1>
                </div>
                <div className="ml-[80px]">
                <Link href={"/"}><IoIosArrowDown /></Link>
                </div>
            </div>
         </div>

          {/* First section close */}

           {/* Second section open */}

           {/* For large screen */}

           <div className="sm:hidden md:block">
            <div className="flex border-b-2">
                <div className="flex-1 ml-[80px]">
                    <div className="flex gap-x-4">
                        <div className="mt-10">
                    <Image src={"/Images/sofa2.png"} alt="sofa2" height={100} width={100} className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]"/><br />
                    <Image src={"/Images/sofa3.png"} alt="sofa3" height={100} width={100} className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]"/><br />
                    <Image src={"/Images/sofa4.png"} alt="sofa4" height={100} width={100} className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]"/><br />
                    <Image src={"/Images/sofa5.png"} alt="sofa5" height={100} width={100} className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]"/>
                    </div>
                    <div className="bg-[#F9F1E7] h-[500px] w-[423px] rounded-[10px] mt-10">
                        <Image src={"/Images/sofa1.png"} alt="sofa1" height={600} width={600} className="h-[500px] w-[423px] rounded-[10px]"/>
                    </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="mt-10 border-b-2 pb-6">
                        <h1 className="font-normal text-[42px] leading-[63px]">Asgaard sofa</h1>
                        <p className="font-medium text-[24px] leading-[36px] text-[#9F9F9F]">Rs. 250,000.00</p>
                        <div className="flex gap-x-2 mt-4">
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStarHalf className="text-[#FFC700]"/>
                        <div className="flex gap-x-6">
                            <p className=" text-[#9F9F9F]">|</p>
                            <h1 className="font-normal text-[13px] leading-[19.5px] text-[#9F9F9F]">5 Customer Review</h1>
                        </div>
                        </div>
                        <p className="font-normal text-[13px] leading-[19.5px] mt-4">Setting the bar as one of the loudest speakers in its class, the<br />
                         Kilburn is a compact, stout-hearted hero with a well-balanced<br />
                          audio which boasts a clear midrange and extended highs<br />
                           for a sound.</p>
                           <h1 className="font-normal text-[14px] leading-[21px] text-[#9F9F9F] mt-4">Size</h1>
                           <div className="flex mt-4 gap-x-4">
                            <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-center">L</button>
                            <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-center">XL</button>
                            <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-center">XS</button>
                           </div>
                           <h1 className="font-normal text-[14px] leading-[21px] text-[#9F9F9F] mt-2">Color</h1>
                           <div className="flex mt-4 gap-x-4">
                           <FaCircle className="text-[#816DFA]"/>
                           <FaCircle />
                           <FaCircle className="text-[#B88E2F]"/>
                           </div>

                           <div className="mt-4 flex gap-x-3">
                            <button className="w-[123px] h-[64px] rounded-[10px] border"><p>- 1 +</p></button>
                            <button className="w-[215px] h-[64px] rounded-[10px] border border-black"><p>Add To Cart</p></button>
                            <button className="w-[215px] h-[64px] rounded-[10px] border border-black"><p>+ Compare</p></button>
                           </div>
                    </div>

                    <div className="flex gap-x-4 mt-4">
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">SKU</p>
                            <p className=" text-[#9F9F9F]">:</p>
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">SS001</p>
                           </div>

                           <div className="flex gap-x-4 mt-4">
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Category</p>
                            <p className=" text-[#9F9F9F]">:</p>
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Sofas</p>
                           </div>

                           <div className="flex gap-x-4 mt-4">
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Tags</p>
                            <p className=" text-[#9F9F9F]">:</p>
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Sofa, Chair, Home, Shop</p>
                           </div>

                           <div className="flex gap-x-4 mt-4">
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Share</p>
                            <p className=" text-[#9F9F9F]">:</p>
                            <div className="flex gap-x-4 mb-20">
                            <FaFacebook />
                            <FaLinkedin />
                            <AiFillTwitterCircle />
                            </div>
                           </div>
                </div>
            </div>
           </div>

           {/* For mobile screen */}

           <div className="md:hidden sm:block">
            <div className="border-b-2">

                <div>
                <div className="flex gap-x-2">
                        <div className="mt-10">
                    <Image src={"/Images/sofa2.png"} alt="sofa2" height={100} width={100} className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]"/><br />
                    <Image src={"/Images/sofa3.png"} alt="sofa3" height={100} width={100} className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]"/><br />
                    <Image src={"/Images/sofa4.png"} alt="sofa4" height={100} width={100} className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]"/><br />
                    <Image src={"/Images/sofa5.png"} alt="sofa5" height={100} width={100} className="w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7]"/>
                    </div>
                    <div className="bg-[#F9F1E7] h-[500px] w-[423px] rounded-[10px] mt-10">
                        <Image src={"/Images/sofa1.png"} alt="sofa1" height={600} width={600} className="h-[500px] w-[423px] rounded-[10px]"/>
                    </div>
                    </div>
                </div>


               
               <div>
               <div className="mt-10 border-b-2 pb-6">
                        <h1 className="font-normal text-[42px] leading-[63px]">Asgaard sofa</h1>
                        <p className="font-medium text-[24px] leading-[36px] text-[#9F9F9F]">Rs. 250,000.00</p>
                        <div className="flex gap-x-2 mt-4">
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStar className="text-[#FFC700]"/>
                        <FaStarHalf className="text-[#FFC700]"/>
                        <div className="flex gap-x-6">
                            <p className=" text-[#9F9F9F]">|</p>
                            <h1 className="font-normal text-[13px] leading-[19.5px] text-[#9F9F9F]">5 Customer Review</h1>
                        </div>
                        </div>
                        <p className="font-normal text-[13px] leading-[19.5px] mt-4">Setting the bar as one of the loudest speakers in its class, the<br />
                         Kilburn is a compact, stout-hearted hero with a well-balanced<br />
                          audio which boasts a clear midrange and extended highs<br />
                           for a sound.</p>
                           <h1 className="font-normal text-[14px] leading-[21px] text-[#9F9F9F] mt-4">Size</h1>
                           <div className="flex mt-4 gap-x-4">
                            <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-center">L</button>
                            <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-center">XL</button>
                            <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-center">XS</button>
                           </div>
                           <h1 className="font-normal text-[14px] leading-[21px] text-[#9F9F9F] mt-2">Color</h1>
                           <div className="flex mt-4 gap-x-4">
                           <FaCircle className="text-[#816DFA]"/>
                           <FaCircle />
                           <FaCircle className="text-[#B88E2F]"/>
                           </div>

                           <div className="mt-4 flex gap-x-3">
                            <button className="w-[123px] h-[64px] rounded-[10px] border"><p>- 1 +</p></button>
                            <button className="w-[215px] h-[64px] rounded-[10px] border border-black"><p>Add To Cart</p></button>
                            <button className="w-[215px] h-[64px] rounded-[10px] border border-black"><p>+ Compare</p></button>
                           </div>
                    </div>

                    <div className="flex gap-x-4 mt-4">
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">SKU</p>
                            <p className=" text-[#9F9F9F]">:</p>
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">SS001</p>
                           </div>

                           <div className="flex gap-x-4 mt-4">
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Category</p>
                            <p className=" text-[#9F9F9F]">:</p>
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Sofas</p>
                           </div>

                           <div className="flex gap-x-4 mt-4">
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Tags</p>
                            <p className=" text-[#9F9F9F]">:</p>
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Sofa, Chair, Home, Shop</p>
                           </div>

                           <div className="flex gap-x-4 mt-4">
                            <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Share</p>
                            <p className=" text-[#9F9F9F]">:</p>
                            <div className="flex gap-x-4 mb-20">
                            <FaFacebook />
                            <FaLinkedin />
                            <AiFillTwitterCircle />
                            </div>
                           </div>

                </div>
               </div>
           </div>

            {/* Second section close */}



             {/* Third section open */}

              {/* For large screen */}

              <div className="sm:hidden md:block">
                <div className="border-b-2">
                    <div className="mt-12 flex justify-center items-center gap-x-4">
                        <h1 className="font-medium text-[24px] leading-[36px]">Description</h1>
                        <h1 className="font-normal text-[24px] leading-[36px] text-[#9F9F9F]">Additional Information</h1>
                        <h1  className="font-normal text-[24px] leading-[36px] text-[#9F9F9F]">Reviews [5]</h1>
                    </div>
                    <p className="font-normal text-[16px] leading-[24px] text-left mt-8 text-[#9F9F9F] ml-[160px]">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and<br />
                     sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p className="font-normal text-[16px] leading-[24px] text-left mt-8 text-[#9F9F9F] ml-[160px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest<br />
                     speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange<br />
                      and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls<br />
                       to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

                       <div className="flex gap-x-4 mt-8 justify-center items-center mb-20">
                        <Image src={"/Images/sofa6.png"} alt="sofa6" height={300} width={300} className="w-[605px] h-[348px] rounded-[10px] bg-[#F9F1E7]"/>
                        <Image src={"/Images/sofa7.png"} alt="sofa7" height={300} width={300} className="w-[605px] h-[348px] rounded-[10px] bg-[#F9F1E7]"/>
                       </div>
                </div>
              </div>


              {/* For mobile screen */}

              <div className="md:hidden sm:block">
                <div className="border-b-2">
                <div className="mt-12 flex flex-col justify-center items-center">
                        <h1 className="font-medium text-[24px] leading-[36px]">Description</h1>
                        <h1 className="font-normal text-[24px] leading-[36px] text-[#9F9F9F]">Additional Information</h1>
                        <h1  className="font-normal text-[24px] leading-[36px] text-[#9F9F9F]">Reviews [5]</h1>
                    </div>
                    <p className="font-normal text-[16px] leading-[24px] mt-8 text-[#9F9F9F] text-center">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and
                     sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p className="font-normal text-[16px] leading-[24px] mt-8 text-[#9F9F9F] text-center">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest
                     speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
                      and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls
                       to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

                       <div className="flex flex-col gap-y-4 mt-8 justify-center items-center mb-20">
                        <Image src={"/Images/sofa6.png"} alt="sofa6" height={300} width={300} className="w-[427px] h-[348px] rounded-[10px] bg-[#F9F1E7]"/>
                        <Image src={"/Images/sofa7.png"} alt="sofa7" height={300} width={300} className="w-[427px] h-[348px] rounded-[10px] bg-[#F9F1E7]"/>
                       </div>
                </div>
              </div>

               {/* Third section close */}


                {/* Forth section open */}

                 {/* For large screen */}
                 
                 <div className="sm:hidden md:block">
                 <div className="border-b-2">
                    <div>
                        <h1 className="font-medium text-[36px] leading-[54px] text-center mt-12">Related Products</h1>
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

                            <div className="mt-12 ml-[500px] mb-20">
                                <button className="font-semibold text-[16px] leading-[24px] text-[#B88E2F] w-[245px] h-[48px] border border-[#B88E2F]"><h1>Show More</h1></button>
                            </div>
                 </div>
                 </div>

                 {/* For mobile screen */}

                 <div className="md:hidden sm:block">
                    <div className="border-b-2">
                    <h1 className="font-medium text-[36px] leading-[54px] text-center mt-12">Related Products</h1>

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

                                <div className="mt-12 ml-[90px] mb-20">
                                <button className="font-semibold text-[16px] leading-[24px] text-[#B88E2F] w-[245px] h-[48px] border border-[#B88E2F]"><h1>Show More</h1></button>
                            </div>
                    </div>
                 </div>

          {/* Forth section close */}

          {/* Footer open*/}
          <Footer />
          {/* Footer close */}

        </>
    );
}