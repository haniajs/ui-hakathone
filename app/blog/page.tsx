import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaDumpster } from "react-icons/fa";
import React from "react";
import SecondLast from "@/components/Secondlast";
import Footer from "@/components/Footer";

export default function blog () {
    return (
        <>
        {/* Navbar open */}
        <Navbar />
        {/* Navbar close */}


         {/* Hero section open*/}

         {/* for large screen*/}

         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] sm:hidden md:block">
        <div className="pt-[90px]">
        <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[620px]"/>
        <h1 className="font-medium text-[48px] leading-[72px] text-center">Blog</h1>
        <div className="flex gap-x-2 justify-center items-center">
       <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/blog"}><h1 className="font-light text-[16px] leading-[24px] text-center">Blog</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] md:hidden sm:block">
         <div className="pt-[90px]">
         <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[180px]"/>
            <h1 className="font-medium text-[48px] leading-[72px] text-center">Blog</h1>
            <div className="flex gap-x-2 justify-center items-center">
            <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/blog"}><h1 className="font-light text-[16px] leading-[24px] text-center">Blog</h1></Link>
            </div>
         </div>
         </div>
        
        {/* Hero section close*/}


        {/* Main section open*/}

        {/* For large screen */}

        <div className="sm:hidden md:block">
            <div className="grid grid-cols-5 mt-20">
                <div className="col-span-3 ml-16">

                    {/* For first section */}

                    <Image src={"/Images/b1.png"} alt="blog1" height={400} width={400} className="w-[817px] h-[500px] rounded-[10px]"/>

                    <div className="flex mt-4 gap-x-6"> 
                    <div className="flex gap-x-1">
                    <BsFillPersonFill  className="text-[#9F9F9F] h-6 w-6"/>
                    <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Admin</h1>
                    </div>                 


                    <div className="flex gap-x-1">
                    <FaDumpster className="text-[#9F9F9F] h-6 w-6"/>
                    <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">14 Oct 2022</h1>
                    </div>

                    <div className="flex gap-x-1">
                    <FaTag className="text-[#9F9F9F] h-6 w-6"/>
                    <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Wood</h1>
                    </div>
                    </div>

                    <h1 className="font-medium text-[30px] leading-[45px] mt-4">Going all-in with millennial design</h1>
                    <p className="font-normal text-[15px] leading-[22.5px] text-[#9F9F9F] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer 
                         malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
                          tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                           pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra
                            et ultrices neque ornare aenean euismod elementum.</p>
                    <button className="font-normal text-[16px] leading-[24px] text-center border-b-2 border-black w-[89px] h-[24px] mt-4"><Link href={"/blog"}>Read more</Link></button>

                    

                      {/* For second section */}

                    <Image src={"/Images/b2.png"} alt="blog2" height={400} width={400} className="w-[817px] h-[500px] rounded-[10px] mt-16"/>

                    <div className="flex mt-4 gap-x-6"> 
                    <div className="flex gap-x-1">
                    <BsFillPersonFill  className="text-[#9F9F9F] h-6 w-6"/>
                    <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Admin</h1>
                    </div>                 


                    <div className="flex gap-x-1">
                    <FaDumpster className="text-[#9F9F9F] h-6 w-6"/>
                    <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">14 Oct 2022</h1>
                    </div>

                    <div className="flex gap-x-1">
                    <FaTag className="text-[#9F9F9F] h-6 w-6"/>
                    <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Handmade</h1>
                    </div>
                    </div>

                    <h1 className="font-medium text-[30px] leading-[45px] mt-4">Exploring new ways of decorating</h1>
                    <p className="font-normal text-[15px] leading-[22.5px] text-[#9F9F9F] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer 
                         malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
                          tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                           pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra
                            et ultrices neque ornare aenean euismod elementum.</p>
                    <button className="font-normal text-[16px] leading-[24px] text-center border-b-2 border-black w-[89px] h-[24px] mt-4"><Link href={"/blog"}>Read more</Link></button> 




                    {/* For third section */}

                    <Image src={"/Images/b3.png"} alt="blog3" height={400} width={400} className="w-[817px] h-[500px] rounded-[10px] mt-16"/>

                    <div className="flex mt-4 gap-x-6"> 
                    <div className="flex gap-x-1">
                    <BsFillPersonFill  className="text-[#9F9F9F] h-6 w-6"/>
                    <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Admin</h1>
                    </div>                 


                    <div className="flex gap-x-1">
                    <FaDumpster className="text-[#9F9F9F] h-6 w-6"/>
                    <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">14 Oct 2022</h1>
                    </div>

                    <div className="flex gap-x-1">
                    <FaTag className="text-[#9F9F9F] h-6 w-6"/>
                    <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Wood</h1>
                    </div>
                    </div>

                    <h1 className="font-medium text-[30px] leading-[45px] mt-4">Handmade pieces that took time to make</h1>
                    <p className="font-normal text-[15px] leading-[22.5px] text-[#9F9F9F] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer 
                         malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
                          tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                           pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra
                            et ultrices neque ornare aenean euismod elementum.</p>
                    <button className="font-normal text-[16px] leading-[24px] text-center border-b-2 border-black w-[89px] h-[24px] mt-4"><Link href={"/blog"}>Read more</Link></button>     
                </div>



                <div className="col-span-2 ml-20">
                    <button className="border border-black w-[311px] h-[58px] rounded-[10px]"><IoSearch className="h-6 w-6 ml-[260px]"/></button>
                    <h1 className="font-medium text-[24px] leading-[36px] mt-6 ml-10">Categories</h1>

                    <div className="flex justify-between ml-10 mt-8 mr-[160px]">
                        <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Crafts</h1>
                        <p className="text-[#9F9F9F]">2</p>
                    </div>
                    <div className="flex justify-between ml-10 mt-8 mr-[160px]">
                         <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Design</h1>
                         <p className="text-[#9F9F9F]">8</p>
                    </div>
                    <div className="flex justify-between ml-10 mt-8 mr-[160px]">
                         <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Handmade</h1>
                         <p className="text-[#9F9F9F]">7</p>
                    </div>
                    <div className="flex justify-between ml-10 mt-8 mr-[160px]">
                        <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Interior</h1>
                        <p className="text-[#9F9F9F]">1</p>
                    </div>
                    <div className="flex justify-between ml-10 mt-8 mr-[160px]">
                        <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Wood</h1>
                        <p className="text-[#9F9F9F]">6</p>
                    </div>

                    <h1 className="font-medium text-[24px] leading-[36px] mt-16 ml-10">Recent Posts</h1>

                    <div className="flex mt-10 gap-x-4">
                        <Image src={"/Images/b4.png"} alt="blog4" height={100} width={100} className="ml-10 w-[80px] h-[80px] rounded-[10px]"/>
                        <div>
                        <h1 className="font-normal text-[14px] leading-[21px]">Going all-in with<br /> millennial design</h1>
                        <p className="font-normal text-[12px] leading-[18px] text-[#9F9F9F] mt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-x-4">
                        <Image src={"/Images/b5.png"} alt="blog5" height={100} width={100} className="ml-10 w-[80px] h-[80px] rounded-[10px]"/>
                        <div>
                        <h1 className="font-normal text-[14px] leading-[21px]">Exploring new ways<br /> of decorating</h1>
                        <p className="font-normal text-[12px] leading-[18px] text-[#9F9F9F] mt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-x-4">
                        <Image src={"/Images/b6.png"} alt="blog6" height={100} width={100} className="ml-10 w-[80px] h-[80px] rounded-[10px]"/>
                        <div>
                        <h1 className="font-normal text-[14px] leading-[21px]">Handmade pieces<br /> that took time to make</h1>
                        <p className="font-normal text-[12px] leading-[18px] text-[#9F9F9F] mt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-x-4">
                        <Image src={"/Images/b7.png"} alt="blog7" height={100} width={100} className="ml-10 w-[80px] h-[80px] rounded-[10px]"/>
                        <div>
                        <h1 className="font-normal text-[14px] leading-[21px]">Modern home in<br /> Milan</h1>
                        <p className="font-normal text-[12px] leading-[18px] text-[#9F9F9F] mt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-x-4">
                        <Image src={"/Images/b8.png"} alt="blog8" height={100} width={100} className="ml-10 w-[80px] h-[80px] rounded-[10px]"/>
                        <div>
                        <h1 className="font-normal text-[14px] leading-[21px]">Colorful office<br /> redesign</h1>
                        <p className="font-normal text-[12px] leading-[18px] text-[#9F9F9F] mt-2">03 Aug 2022</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="flex justify-center items-center gap-x-4 mt-[60px] mb-4">
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">1</button>
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">2</button>
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">3</button>
            <button className="font-light text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[98px] rounded-[10px]"><Link href={"/product"}>Next</Link></button>
         </div>

        </div>


        {/* For mobile screen */}

        <div className="md:hidden sm:block">
            <div className="mt-20">
                {/* For first section */}

                <Image src={"/Images/b1.png"} alt="blog1" height={400} width={400} className="w-[428px] h-[450px] rounded-[10px]"/>

                 <div className="flex mt-4 gap-x-6"> 
                 <div className="flex gap-x-1">
                 <BsFillPersonFill  className="text-[#9F9F9F] h-6 w-6"/>
                 <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Admin</h1>
                </div>                 


                <div className="flex gap-x-1">
                <FaDumpster className="text-[#9F9F9F] h-6 w-6"/>
                <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">14 Oct 2022</h1>
                </div>

               <div className="flex gap-x-1">
               <FaTag className="text-[#9F9F9F] h-6 w-6"/>
               <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Wood</h1>
                </div>
               </div>

              <h1 className="font-medium text-[30px] leading-[45px] mt-4">Going all-in with millennial design</h1>
              <p className="font-normal text-[15px] leading-[22.5px] text-[#9F9F9F] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer 
               malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
               tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
              pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra
              et ultrices neque ornare aenean euismod elementum.</p>
             <button className="font-normal text-[16px] leading-[24px] text-center border-b-2 border-black w-[89px] h-[24px] mt-4"><Link href={"/blog"}>Read more</Link></button>



     {/* For second section */}

            <Image src={"/Images/b2.png"} alt="blog2" height={400} width={400} className="w-[428px] h-[450px] rounded-[10px] mt-16"/>

             <div className="flex mt-4 gap-x-6"> 
            <div className="flex gap-x-1">
            <BsFillPersonFill  className="text-[#9F9F9F] h-6 w-6"/>
            <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Admin</h1>
            </div>                 


            <div className="flex gap-x-1">
            <FaDumpster className="text-[#9F9F9F] h-6 w-6"/>
             <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">14 Oct 2022</h1>
            </div>

            <div className="flex gap-x-1">
            <FaTag className="text-[#9F9F9F] h-6 w-6"/>
             <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Handmade</h1>
            </div>
            </div>

            <h1 className="font-medium text-[30px] leading-[45px] mt-4">Exploring new ways of decorating</h1>
            <p className="font-normal text-[15px] leading-[22.5px] text-[#9F9F9F] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer 
              malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
             tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
              pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra
            et ultrices neque ornare aenean euismod elementum.</p>
           <button className="font-normal text-[16px] leading-[24px] text-center border-b-2 border-black w-[89px] h-[24px] mt-4"><Link href={"/blog"}>Read more</Link></button> 




      {/* For third section */}

           <Image src={"/Images/b3.png"} alt="blog3" height={400} width={400} className="w-[428px] h-[450px] rounded-[10px] mt-16"/>

           <div className="flex mt-4 gap-x-6"> 
           <div className="flex gap-x-1">
           <BsFillPersonFill  className="text-[#9F9F9F] h-6 w-6"/>
            <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Admin</h1>
            </div>                 


            <div className="flex gap-x-1">
           <FaDumpster className="text-[#9F9F9F] h-6 w-6"/>
          <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">14 Oct 2022</h1>
          </div>

          <div className="flex gap-x-1">
         <FaTag className="text-[#9F9F9F] h-6 w-6"/>
         <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Wood</h1>
         </div>
          </div>

         <h1 className="font-medium text-[30px] leading-[45px] mt-4">Handmade pieces that took time to make</h1>
         <p className="font-normal text-[15px] leading-[22.5px] text-[#9F9F9F] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer 
        malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
         tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
          pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra
         et ultrices neque ornare aenean euismod elementum.</p>
       <button className="font-normal text-[16px] leading-[24px] text-center border-b-2 border-black w-[89px] h-[24px] mt-4"><Link href={"/blog"}>Read more</Link></button> <br /> 






     <div className="ml-12">
       <button className="border border-black w-[311px] h-[58px] rounded-[10px] mt-20"><IoSearch className="h-6 w-6 ml-[260px]"/></button>
                    <h1 className="font-medium text-[24px] leading-[36px] mt-6 ml-10">Categories</h1>

                    <div className="flex justify-between ml-10 mt-8 mr-[160px]">
                        <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Crafts</h1>
                        <p className="text-[#9F9F9F]">2</p>
                    </div>
                    <div className="flex justify-between ml-10 mt-8 mr-[160px]">
                         <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Design</h1>
                         <p className="text-[#9F9F9F]">8</p>
                    </div>
                    <div className="flex justify-between ml-10 mt-8 mr-[160px]">
                         <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Handmade</h1>
                         <p className="text-[#9F9F9F]">7</p>
                    </div>
                    <div className="flex justify-between ml-10 mt-8 mr-[160px]">
                        <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Interior</h1>
                        <p className="text-[#9F9F9F]">1</p>
                    </div>
                    <div className="flex justify-between ml-10 mt-8 mr-[160px]">
                        <h1 className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">Wood</h1>
                        <p className="text-[#9F9F9F]">6</p>
                    </div>

                    <h1 className="font-medium text-[24px] leading-[36px] mt-16 ml-10">Recent Posts</h1>

                    <div className="flex mt-10 gap-x-4">
                        <Image src={"/Images/b4.png"} alt="blog4" height={100} width={100} className="ml-10 w-[80px] h-[80px] rounded-[10px]"/>
                        <div>
                        <h1 className="font-normal text-[14px] leading-[21px]">Going all-in with<br /> millennial design</h1>
                        <p className="font-normal text-[12px] leading-[18px] text-[#9F9F9F] mt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-x-4">
                        <Image src={"/Images/b5.png"} alt="blog5" height={100} width={100} className="ml-10 w-[80px] h-[80px] rounded-[10px]"/>
                        <div>
                        <h1 className="font-normal text-[14px] leading-[21px]">Exploring new ways<br /> of decorating</h1>
                        <p className="font-normal text-[12px] leading-[18px] text-[#9F9F9F] mt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-x-4">
                        <Image src={"/Images/b6.png"} alt="blog6" height={100} width={100} className="ml-10 w-[80px] h-[80px] rounded-[10px]"/>
                        <div>
                        <h1 className="font-normal text-[14px] leading-[21px]">Handmade pieces<br /> that took time to make</h1>
                        <p className="font-normal text-[12px] leading-[18px] text-[#9F9F9F] mt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-x-4">
                        <Image src={"/Images/b7.png"} alt="blog7" height={100} width={100} className="ml-10 w-[80px] h-[80px] rounded-[10px]"/>
                        <div>
                        <h1 className="font-normal text-[14px] leading-[21px]">Modern home in<br /> Milan</h1>
                        <p className="font-normal text-[12px] leading-[18px] text-[#9F9F9F] mt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-x-4">
                        <Image src={"/Images/b8.png"} alt="blog8" height={100} width={100} className="ml-10 w-[80px] h-[80px] rounded-[10px]"/>
                        <div>
                        <h1 className="font-normal text-[14px] leading-[21px]">Colorful office<br /> redesign</h1>
                        <p className="font-normal text-[12px] leading-[18px] text-[#9F9F9F] mt-2">03 Aug 2022</p>
                        </div>
                    </div>   
                    </div>


                    <div className="flex justify-center items-center gap-x-4 mt-[60px] mb-4">
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">1</button>
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">2</button>
            <button className="font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px]">3</button>
            <button className="font-light text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[98px] rounded-[10px]"><Link href={"/product"}>Next</Link></button>
         </div>
            </div>
        </div>


        {/* Main section close */}


         {/* Second section open */}
         <SecondLast />
          {/* Second section open */}

        {/* Footer open */}
        <Footer />
         {/* Footer close */}
        </>
    );
}