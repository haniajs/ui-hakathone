"use client"

import { Product } from "@/types/products";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/Navbar";
import SecondLast from "@/components/Secondlast";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";

const CartPage = () => {
     
    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
        setCartItems(getCartItems())
    }, []);


    const handleRemove = (id : string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if(result.isConfirmed) {
                removeFromCart(id)
                setCartItems(getCartItems())
                Swal.fire("Removed!", "Items has been removed.", "success");
            }
        })
    }

    // card update
    const handleQuantityChange = (id : string, quantity : number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems())
    }

    // card increment
    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if(product)
            handleQuantityChange(id, product.inventory + 1)
    }

    // card decrement
    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if(product && product.inventory > 1)
            handleQuantityChange(id, product.inventory - 1)
    }

    // card calculations
    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inventory,0)
    };

    // card proced or checkout
    const router = useRouter();
    const handleProceed = () => {
        Swal.fire({
            title: "Proceed to checkout",
            text: "Please review your cart before checkout",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, proceed!"
        }).then((result) => {
            if(result.isConfirmed){
                Swal.fire("success", "Your Order has been successfully processed", "success");
                router.push("/checkouts");
                setCartItems([])
            }
        })
    }

    return (
        <>
        <AuthGuard>
         {/* Navbar open */}
         <Navbar />
         {/* Navbar close */}


            {/* Hero section open*/}

         {/* for large screen*/}

         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] sm:hidden md:block">
        <div className="pt-[90px]">
        <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[590px]"/>
        <h1 className="font-medium text-[48px] leading-[72px] text-center">Cart</h1>
        <div className="flex gap-x-2 justify-center items-center">
       <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/card"}><h1 className="font-light text-[16px] leading-[24px] text-center">Cart</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] md:hidden sm:block">
         <div className="pt-[90px]">
         <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[180px]"/>
            <h1 className="font-medium text-[48px] leading-[72px] text-center">Cart</h1>
            <div className="flex gap-x-2 justify-center items-center">
            <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/card"}><h1 className="font-light text-[16px] leading-[24px] text-center">Cart</h1></Link>
            </div>
         </div>
         </div>
        
        {/* Hero section close*/}



        <div className="lg:container lg:mx-auto md:p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Cart Items Section */}
        <div className="lg:w-2/3">
          <h2 className="font-semibold text-[32px] leading-[48px] ml-2 mb-6">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center bg-white shadow-md rounded-lg p-4 sm:space-x-4 md:space-x-4">
                    {item.productImage && (
                        <Image  src={urlFor(item.productImage).url()} alt="image" width={500} height={500} className="w-16 h-16 object-cover rounded-lg"/>
                    )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                   
                    <p className="text-md font-semibold text-[#9F9F9F]">₹{item.price}</p>
                  </div>
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="bg-gray-200 p-2 rounded-full"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="bg-gray-200 p-2 rounded-full"
                    >
                      +
                    </button>
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-black hover:text-[#B88E2F] ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="lg:w-1/3  lg:ml-8 mt-8 lg:mt-16 sm:mb-12">
          <div className="bg-[#F9F1E7] shadow-md rounded-lg p-6">
            <h3 className="font-semibold text-[32px] leading-[48px] text-center mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-[16px] leading-[24px]">Total Items:</span>
              <span className="font-normal text-[16px] leading-[24px] text-[#9F9F9F]">{cartItems.length}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-medium text-[16px] leading-[24px]">Total Price:</span>
              <span className="font-normal text-[20px] leading-[30px] text-[#B88E2F]">₹{calculatedTotal()}</span>
            </div>
            <button
              onClick={handleProceed}
              className="w-full bg-[#B88E2F] text-white py-2 rounded-md hover:bg-[#B88E2F] transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>


     {/* Second last section  open*/}
     <SecondLast />
     {/* Second last section  close*/}

     {/* Footer  open*/}
     <Footer />
     {/* Footer  close*/}
     </AuthGuard>
        </>
    )
}

export default CartPage