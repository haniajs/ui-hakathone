import React from "react";

export default function Footer () {
    return (
        <main>

         {/* for large screen */}

        <div className="w-full h-[505px] sm:hidden md:block">
            <div className="flex border-b-2 pb-[50px]">
                <div className="flex-1 mt-[50px] ml-[100px]">
                    <h1 className="font-bold text-[24px] leading-[36px]">Funiro.</h1>
                    <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] mt-12">400 University Drive Suite 200 Coral<br /> Gables,<br />
                    FL 33134 USA</p>
                </div>
                <div className="flex-1 mt-[65px] ml-[40px]">
                    <h1 className="font-medium text-[16px] leading-[24px] text-[#9F9F9F]">Links</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] mt-12">Home</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] mt-12">Shop</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] mt-12">About</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] mt-12">Contact</h1>
                </div>
                <div className="flex-1 mt-[65px]">
                    <h1 className="font-medium text-[16px] leading-[24px] text-[#9F9F9F]">Help</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] mt-12">Payment Options</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] mt-12">Returns</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] mt-12">Privacy Policies</h1>
                </div>
                <div className="flex-1 mt-[65px] mr-[100px]">
                    <h1 className="font-medium text-[16px] leading-[24px] text-[#9F9F9F]">Newsletter</h1>
                    <div className="flex gap-x-2">
                    <input type="text" placeholder="Enter Your Email Address" className="border-b-2 border-black  mt-12" />
                    <h1 className="font-medium text-[14px] leading-[21px] border-b-2 border-black mt-12">SUBSCRIBE</h1>
                    </div>
                </div>
            </div>

            <div className="ml-[100px] mt-8 m-16">
                    <h1 className="font-normal text-[16px] leading-[24px]">2023 furino. All rights reverved</h1>
             </div>
        </div>



          {/*  For Mobile screen */}

          <div className="md:hidden overflow-hidden">
          <div className="border-b-2 p-6">
          <h1 className="font-bold text-[24px] leading-[36px] text-center mt-4">Funiro.</h1>
        <p className="font-normal text-[16px] leading-[24px] text-[#9F9F9F] mt-6 text-center">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>

        <h1 className="font-medium text-[16px] leading-[24px] text-[#9F9F9F] text-center mt-6">Links</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] text-center mt-6">Home</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] text-center mt-6">Shop</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] text-center mt-6">About</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] text-center mt-6">Contact</h1>

                    <h1 className="font-medium text-[16px] leading-[24px] text-[#9F9F9F] text-center mt-6">Help</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] text-center mt-6">Payment Options</h1>
                    <h1 className="font-medium text-[16px] leading-[24px] text-center mt-6">Returns</h1>
                    <h1 className="font-medium text-[16px] leading-[24px]  text-center mt-6">Privacy Policies</h1>

                    <h1 className="font-medium text-[16px] leading-[24px] text-[#9F9F9F] text-center mt-6">Newsletter</h1>
                    <div className="flex gap-x-8 mt-2 ml-[120px]">
                    <input type="text" placeholder="Enter Your Email Address" className="border-b-2 border-black  mt-12" />
                    <h1 className="font-medium text-[14px] leading-[21px] border-b-2 border-black mt-12">SUBSCRIBE</h1>
                    </div>
          </div>
          <div className="m-4">
          <h1 className="font-normal text-[16px] leading-[24px] text-center">2023 furino. All rights reverved</h1>
          </div>
          </div>






        </main>
    )
}