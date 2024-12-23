import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
export default function Slide () {
  return (
    <>

    {/* For Large screen */}
      <div className="sm:hidden md:block">
        <div className="flex bg-[#FCF8F3] w-full h-[670px]">

            <div className="flex-1 ml-[20px] mt-[200px]">
            <h1 className="font-bold text-[40px] leading-[48px] text-[#3A3A3A]">50+ Beautiful rooms<br /> inspiration</h1>
            <p className="font-medium text-[16px] leading-[24px] text-[#616161] mt-6">
              Our designer already made a lot of beautiful<br /> prototipe of rooms that
              inspire you
            </p>
            <button className="bg-[#B88E2F] p-2 text-white mt-6 w-[176px] h-[48px]">Exlore More</button>
            </div>

            <div className="flex-1">
                <div className="bg-[url('/Images/s1.png')] w-[404px] h-[582px] mt-10 ml-6">
                 
                 <div className="flex">
                <div className="pt-[420px] ml-8 flex">
                    <div className="w-[217px] h-[130px] bg-[#FFFFFFB8]">
                    <h1 className="font-medium text-[16px] leading-[24px] text-[#616161] pl-6 pt-8">01 - Bed Room</h1>
                    <h1 className="font-semibold text-[28px] leading-[33.6px] text-[#3A3A3A] text-center pt-2">Inner Peace</h1>
                    </div>
                    <div className="bg-[#B88E2F] h-[48px] w-[48px] mt-20">
                    <FaArrowRight className="text-white mt-4 ml-4"/>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex-1">
                <div className="bg-[url('/Images/s2.png')] h-[486px] w-[372px] mt-10 ml-6"></div>
                <div className="flex gap-x-4 mt-8 ml-4">
                <GoDotFill className="text-[#B88E2F] h-6 w-6"/>
                <GoDotFill className="text-[#D8D8D8] h-6 w-6"/>
                <GoDotFill className="text-[#D8D8D8] h-6 w-6"/>
                <GoDotFill className="text-[#D8D8D8] h-6 w-6"/>
                </div>
            </div>

        </div>
      </div>

       {/* For mobile screen */}

       <div className="md:hidden sm:block">
        <div className="flex flex-col bg-[#FCF8F3] w-full h-[2000px]">

            <div className="flex-1 justify-center items-center mt-[200px]">
            <h1 className="font-bold text-[40px] leading-[48px] text-[#3A3A3A]">50+ Beautiful rooms<br /> inspiration</h1>
            <p className="font-medium text-[16px] leading-[24px] text-[#616161] mt-6">
              Our designer already made a lot of beautiful<br /> prototipe of rooms that
              inspire you
            </p>
            <button className="bg-[#B88E2F] p-2 text-white mt-6 w-[176px] h-[48px]">Exlore More</button>
            </div>

            <div className="flex-1">
                <div className="bg-[url('/Images/s1.png')] w-[404px] h-[582px] mt-4 ml-4">
                 
                 <div className="flex">
                <div className="pt-[420px] ml-8 flex">
                    <div className="w-[217px] h-[130px] bg-[#FFFFFFB8]">
                    <h1 className="font-medium text-[16px] leading-[24px] text-[#616161] pl-6 pt-8">01 - Bed Room</h1>
                    <h1 className="font-semibold text-[28px] leading-[33.6px] text-[#3A3A3A] text-center pt-2">Inner Peace</h1>
                    </div>
                    <div className="bg-[#B88E2F] h-[48px] w-[48px] mt-20">
                    <FaArrowRight className="text-white mt-4 ml-4"/>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex-1">
                <div className="bg-[url('/Images/s2.png')] h-[486px] w-[372px] mt-10 ml-6"></div>
                <div className="flex gap-x-4 mt-8 ml-4">
                <GoDotFill className="text-[#B88E2F] h-6 w-6"/>
                <GoDotFill className="text-[#D8D8D8] h-6 w-6"/>
                <GoDotFill className="text-[#D8D8D8] h-6 w-6"/>
                <GoDotFill className="text-[#D8D8D8] h-6 w-6"/>
                </div>
            </div>

        </div>
      </div>
    </>
  );
}
