"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu state
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  
  }
      


  return (
    <>
    {/* for large screen */}
     <div className="w-full h-[100px] md:flex md:justify-between md:items-center p-8 sm:hidden">
        <div className="flex gap-x-2 pl-[10px]">
            <Image src={"/Images/logo.png"} alt="logo" height={50} width={50}/>
            <h1 className="font-['Montserrat'] font-bold text-[34px] leading-[41.45px]"><b>Furniro</b></h1>
        </div>
        <div>
            <ul className="flex gap-x-[80px]">
                <Link href={"/"} className="font-medium text-[16px] leading-[24px]"><li>Home </li></Link>
                <Link href={"/shop"} className="font-medium text-[16px] leading-[24px]"><li>Shop </li></Link>
                <Link href={"/blog"} className="font-medium text-[16px] leading-[24px]"><li>Blog </li></Link>
                <Link href={"/contact"} className="font-medium text-[16px] leading-[24px]"><li>Contact </li></Link>
            </ul>
        </div>
        <div className="flex gap-x-12 pr-[10px]">
            <Link href={"/"}>
            <MdOutlinePersonOutline className="h-6 w-6"/>
            </Link>

            <Link href={"/"}>
            <IoSearch className="h-6 w-6"/>
            </Link>

            <Link href={"/products"}>
            <FaRegHeart className="h-6 w-6"/>
            </Link>

            <Link href={"/card"}>
            <MdOutlineShoppingCart className="h-6 w-6"/>
            </Link>
        </div>
     </div>






  {/*  For Mobile screen */}

  <nav className="h-[90px] p-4 md:hidden">
      {/* Navbar Container */}
      <div className="flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="flex gap-x-2 pl-[10px]">
        <Image src={"/Images/logo.png"} alt="logo" height={50} width={50}/>
        <h1 className="font-['Montserrat'] font-bold text-[34px] leading-[41.45px]"><b>Furniro</b></h1>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`lg:flex flex-grow items-center justify-center space-x-4 ${
            isMenuOpen ?  "flex flex-col space-y-4 absolute top-[90px] right-0 w-[300px] bg-white p-4" : "hidden"
          }`}
        >


<Link href="/" className="text-black font-medium border-b border-black text-[16px] leading-[24px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
            Home
          </Link>
          <Link href="/shop" className="text-black font-medium border-b border-black text-[16px] leading-[24px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
            Shop
          </Link>
          <Link href="/blog" className="text-black font-medium border-b border-black text-[16px] leading-[24px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
            Blog
          </Link>
          <Link href="/contact" className="text-black font-medium border-b border-black text-[16px] leading-[24px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
            Contact
          </Link>
          <Link href="/card" className="text-black font-medium border-b border-black text-[16px] leading-[24px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
            Card
          </Link>

          <Link href="/products" className="text-black font-medium border-b border-black text-[16px] leading-[24px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
            products
          </Link>


</div>
      </div>
    </nav>



    </>
  );
}