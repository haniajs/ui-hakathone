import React from "react";
import { PiLockKeyLight } from "react-icons/pi";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import Link from "next/link";

export default function ProductSecond () {
    return (
        <>
          

          {/* For Large screen */}
            <div className="sm:hidden md:block">
                <div className="">
                    <div className="mt-4 flex justify-center items-center border-b-2 mb-6 gap-x-40">
                        <h1 className="font-semibold text-[24px] leading-[36px]">Shopping Cart</h1>
                        <PiLockKeyLight  className="h-6 w-6"/>
                    </div>
                    

                    <div className="mt-4 flex justify-center items-center gap-x-28">
                        <div>
                            <Image  src={"/Images/sofa1.png"} alt="sofa1" height={100} width={100}
                            className="h-[105px] w-[105px] rounded-[10px] bg-[#F9F1E7]"/>
                        </div>
                        <div>
                            <h1 className="font-normal text-[16px] leading-[24px]">Asgaard sofa</h1>
                            <div className="flex gap-x-4 mt-2">
                                <p className="font-light text-[16px] leading-[24px]">1</p>
                                <p className="font-light text-[16px] leading-[24px]">X</p>
                                <p className="font-medium text-[12px] leading-[18px] text-[#B88E2F]">Rs. 250,000.00</p>

                                <div className="flex">
                            <RxCrossCircled className="h-4 w-4 mr-8"/>
                            </div>
                            </div>
                        </div>
                    </div>




                    <div className="mt-4 flex justify-center items-center gap-x-28">
                        <div>
                            <Image  src={"/Images/sofa8.png"} alt="sofa8" height={100} width={100}
                            className="h-[105px] w-[105px] rounded-[10px]"/>
                        </div>
                        <div>
                            <h1 className="font-normal text-[16px] leading-[24px]">Casaliving Wood</h1>
                            <div className="flex gap-x-4 mt-2">
                                <p className="font-light text-[16px] leading-[24px]">1</p>
                                <p className="font-light text-[16px] leading-[24px]">X</p>
                                <p className="font-medium text-[12px] leading-[18px] text-[#B88E2F]">Rs. 270,000.00</p>

                                <div className="flex">
                            <RxCrossCircled className="h-4 w-4 mr-8"/>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>




                <div className="flex justify-between items-center mt-[200px] ml-[440px] mr-[440px] mb-4 border-b-2">
                    <h1 className="font-normal text-[16px] leading-[24px]">Subtotal</h1>
                    <h1 className="font-normal text-[16px] leading-[24px]  text-[#B88E2F]">Rs. 520,000.00</h1>
                </div>


                <div className="flex mt-10 gap-x-4 justify-center items-center">
                    <button className="w-[87px] h-[30px] rounded-[50px] border border-black text-center font-normal text-[12px] leading-[18px]"><Link href={"/cart"}>Cart</Link></button>
                    <button className="w-[118px] h-[30px] rounded-[50px] border border-black text-center font-normal text-[12px] leading-[18px]"><Link href={"/checkouts"}>Checkout</Link></button>
                    <button className="w-[135px] h-[30px] rounded-[50px] border border-black text-center font-normal text-[12px] leading-[18px]"><Link href={"/comparison"}>Comparison</Link></button>
                </div>
            </div>

    

       {/* For mobile screen */}


       <div className="md:hidden sm:block">
                <div className="">
                    <div className="mt-4 flex justify-center items-center border-b-2 mb-6 gap-x-40">
                        <h1 className="font-semibold text-[24px] leading-[36px]">Shopping Cart</h1>
                        <PiLockKeyLight  className="h-6 w-6"/>
                    </div>
                    

                    <div className="mt-4 flex justify-center items-center gap-x-28">
                        <div>
                            <Image  src={"/Images/sofa1.png"} alt="sofa1" height={100} width={100}
                            className="h-[105px] w-[105px] rounded-[10px] bg-[#F9F1E7]"/>
                        </div>
                        <div>
                            <h1 className="font-normal text-[16px] leading-[24px]">Asgaard sofa</h1>
                            <div className="flex gap-x-4 mt-2">
                                <p className="font-light text-[16px] leading-[24px]">1</p>
                                <p className="font-light text-[16px] leading-[24px]">X</p>
                                <p className="font-medium text-[12px] leading-[18px] text-[#B88E2F]">Rs. 250,000.00</p>

                                <div className="flex">
                            <RxCrossCircled className="h-4 w-4 mr-8"/>
                            </div>
                            </div>
                        </div>
                    </div>




                    <div className="mt-4 flex justify-center items-center gap-x-28">
                        <div>
                            <Image  src={"/Images/sofa8.png"} alt="sofa8" height={100} width={100}
                            className="h-[105px] w-[105px] rounded-[10px]"/>
                        </div>
                        <div>
                            <h1 className="font-normal text-[16px] leading-[24px]">Casaliving Wood</h1>
                            <div className="flex gap-x-4 mt-2">
                                <p className="font-light text-[16px] leading-[24px]">1</p>
                                <p className="font-light text-[16px] leading-[24px]">X</p>
                                <p className="font-medium text-[12px] leading-[18px] text-[#B88E2F]">Rs. 270,000.00</p>

                                <div className="flex">
                            <RxCrossCircled className="h-4 w-4 mr-8"/>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>




                <div className="flex justify-between items-center mt-[200px] mb-4 border-b-2">
                    <h1 className="font-normal text-[16px] leading-[24px]">Subtotal</h1>
                    <h1 className="font-normal text-[16px] leading-[24px]  text-[#B88E2F]">Rs. 520,000.00</h1>
                </div>


                <div className="flex mt-10 gap-x-4 justify-center items-center">
                    <button className="w-[87px] h-[30px] rounded-[50px] border border-black text-center font-normal text-[12px] leading-[18px]"><Link href={"/cart"}>Cart</Link></button>
                    <button className="w-[118px] h-[30px] rounded-[50px] border border-black text-center font-normal text-[12px] leading-[18px]"><Link href={"/checkouts"}>Checkout</Link></button>
                    <button className="w-[135px] h-[30px] rounded-[50px] border border-black text-center font-normal text-[12px] leading-[18px]"><Link href={"/comparison"}>Comparison</Link></button>
                </div>
            </div>



        </>
    );
}