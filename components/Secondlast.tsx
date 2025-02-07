import React from "react";
import Image from "next/image";

export default function SecondLast () {
    return (
        <main>

           {/* for large screen */}

        <div className="w-full h-[270px] bg-[#FAF3EA] items-center sm:hidden md:block">
            <div className="flex">
                <div className="flex mt-[90px] ml-16">
                    <Image src={"/Images/sl1.png"} alt="sl1" width={100} height={50} className="h-20 w-14"/>
                    <div className="ml-2">
                    <h1 className="font-semibold text-[25px] leading-[37.5px]">High Quality</h1>
                    <p className="font-medium text-[20px] leading-[30px] text-[#898989]">crafted from top materials</p>
                    </div>
                </div>

                <div className="flex mt-[90px] ml-16">
                <Image src={"/Images/sl2.png"} alt="sl2" width={100} height={100} className="h-20 w-14"/>
                    <div className="ml-2">
                    <h1 className="font-semibold text-[25px] leading-[37.5px]">Warranty Protection</h1>
                    <p className="font-medium text-[20px] leading-[30px] text-[#898989]">Over 2 years</p>
                    </div>
                </div>

                <div className="flex mt-[90px] ml-16">
                 <Image src={"/Images/sl3.png"} alt="sl3" height={100} width={100} className="h-20 w-14"/>
                    <div className="ml-2">
                    <h1 className="font-semibold text-[25px] leading-[37.5px]">Free Shipping</h1>
                    <p className="font-medium text-[20px] leading-[30px] text-[#898989]">Order over 150 $</p>
                    </div>
                </div>

                <div className="flex mt-[90px] ml-16">
                <Image src={"/Images/sl4.png"} alt="sl4" width={100} height={100} className="h-20 w-14"/>
                    <div className="ml-2">
                    <h1 className="font-semibold text-[25px] leading-[37.5px]">24 / 7 Support</h1>
                    <p className="font-medium text-[20px] leading-[30px] text-[#898989]">Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>



        {/* for small screen */}

        <div className="w-[427px] h-[840px] bg-[#FAF3EA] items-center md:hidden sm:block overflow-hidden">
            <div className="pt-12">
            <Image src={"/Images/sl1.png"} alt="sl1" width={100} height={50} className="h-20 w-14 ml-[190px]"/>
                    <h1 className="font-semibold text-[25px] leading-[37.5px] text-center mt-2">High Quality</h1>
                    <p className="font-medium text-[20px] leading-[30px] text-[#898989] text-center mt-2">crafted from top materials</p>
            </div>

            <div className="mt-6">
            <Image src={"/Images/sl2.png"} alt="sl2" width={100} height={100} className="h-20 w-14  ml-[190px]"/>
                    <h1 className="font-semibold text-[25px] leading-[37.5px] text-center mt-2">Warranty Protection</h1>
                    <p className="font-medium text-[20px] leading-[30px] text-[#898989] text-center mt-2">Over 2 years</p>
            </div>

            <div className="mt-6">
            <Image src={"/Images/sl3.png"} alt="sl3" height={100} width={100} className="h-20 w-14 ml-[190px]"/>
                    <h1 className="font-semibold text-[25px] leading-[37.5px] text-center mt-2">Free Shipping</h1>
                    <p className="font-medium text-[20px] leading-[30px] text-[#898989] text-center mt-2">Order over 150 $</p>
            </div>

            <div className="mt-6">
            <Image src={"/Images/sl4.png"} alt="sl4" width={100} height={100} className="h-20 w-14 ml-[190px]"/>
                    <h1 className="font-semibold text-[25px] leading-[37.5px] text-center mt-2">24 / 7 Support</h1>
                    <p className="font-medium text-[20px] leading-[30px] text-[#898989] text-center mt-2">Dedicated support</p>
            </div>
        </div>
        </main>
    );
}