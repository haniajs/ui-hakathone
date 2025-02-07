"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import SecondLast from "./Secondlast";
import Footer from "./Footer";


const Login = () => {
 
  return (
    <>
    {/* Navbar open */}
    <Navbar />
    {/* Navbar close */}

    <div className="flex flex-col lg:flex-row w-full h-screen bg-gray-100">
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center" style={{
      backgroundImage: "url('login-banner.jpg')",}}>
      <div className="flex flex-col items-center justify-center w-full h-full text-black p-10 ">
        <h1 className="text-5xl font-bold text-[#B88E2F]">Welcome to our Furniro.CO</h1>
        <p className="mt-4 text-lg text-center">Discover exclusive deals and latest trending furniture on our Website</p>
        </div>
      </div>

   
      <div className="w-full lg:w-1/2 mt-6 flex flex-col bg-white justify-center px-8 lg:px-20 shadow-md">
        <SignedIn>
    
          <div className="flex flex-col items-center text-center">
            <UserButton />
            <h1 className="text-3xl font-bold mt-4">
              Welcome,
            </h1>
            <p className="mt-4 text-lg text-center">
               Use coupon <span className="font-bold text-[#B88E2F]">DISCOUNT111</span> to get a
              $50 discount on your next purchase!
            </p>
          </div>
        </SignedIn>

         <SignedOut>
            <h1 className="text-4xl font-bold mb-6 text-center text-[#B88E2F]">Login</h1>
            <form>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-md"/>
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="relative">
            <input type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-md"/>
            <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">👁</span>
            </div>
            </div>


            <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
               <span className="text-gray-700 text-sm">Remember Me</span>
                </label>
                <Link href="#" className="text-sm text-gray-500 hover:underline">Forgot Password?</Link>
            </div>
            </form>


            <div className="text-center bg-[#B88E2F] text-white py-3 rounded-lg hover:bg-[#947121] cursor-pointer">

                
                    <SignInButton mode="modal"/>
               
            </div>
           

          <p className="text-center mt-4 text-gray-600">New here?<Link href="#" className="text-[#B88E2F] font-bold">Create an Account</Link></p>
          </SignedOut>
      </div>
    </div>

    {/* Second last section open */}
    <SecondLast />
    {/* Second last section close */}

    {/* Footer open */}
    <Footer />
    {/* Footer open */}
    </>
  );
};

export default Login;
