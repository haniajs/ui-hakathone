"use client"

import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import SecondLast from "@/components/Secondlast";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";

const CheckOuts = () => {

    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] = useState<number>(0)
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    })

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    })

    useEffect(() => {
        setCartItems(getCartItems())
        const appliedDiscount = localStorage.getItem("appliedDiscount")
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount))
        }
    }, [])

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory,0
    )

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }

    const validateForm = () => {
        const errors = {
            firstName : !formValues.firstName,
            lastName : !formValues.lastName,
            email : !formValues.email,
            phone : !formValues.phone,
            address : !formValues.address,
            zipCode : !formValues.zipCode,
            city : !formValues.city,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    }

    const handlePlaceOrder = async () => {
        if(validateForm()) {
            localStorage.removeItem("applliedDscount")
       }


        Swal.fire({
        title: "Processing your order...",
       text: "Please wait a moment",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Proceed",
      }).then((result) => {
        if(result.isConfirmed){
            if(validateForm()) {
                localStorage.removeItem("appliedDiscount");
                Swal.fire(
                    "Success!",
                "Your order has been successfully processed!",
                    "success"
                );
   
         } else {
                Swal.fire(
                    "Error!",
                    "Please fill in all the fields before proceeding.",
                    "error"
                );
            }
        }
      });

     const orderData = {
        _type : 'order',
        firstName : formValues.firstName,
        lastName : formValues.lastName,
        address : formValues.address,
        city : formValues.city,
        zipCode : formValues.zipCode,
        phone : formValues.phone,
        email : formValues.email,
        cartItems : cartItems.map(item => ({
            _type : 'reference',
            _ref : item._id
        })),
        total : subTotal,
        discount : discount,
        orderDate : new Date().toISOString(),
     };

     try {
        await client.create(orderData)
        localStorage.removeItem("appliedDiscount")
     } catch (error) {
        console.log("error creating order", error)
     }
    }
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
        <h1 className="font-medium text-[48px] leading-[72px] text-center">Checkout</h1>
        <div className="flex gap-x-2 justify-center items-center">
       <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/checkouts"}><h1 className="font-light text-[16px] leading-[24px] text-center">Checkout</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] md:hidden sm:block">
         <div className="pt-[90px]">
         <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[180px]"/>
            <h1 className="font-medium text-[48px] leading-[72px] text-center">Checkout</h1>
            <div className="flex gap-x-2 justify-center items-center">
            <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/checkouts"}><h1 className="font-light text-[16px] leading-[24px] text-center">Checkout</h1></Link>
            </div>
         </div>
         </div>
        
        {/* Hero section close*/}


        <div className="min-h-screen bg-white">
            <div className="mt-6 bg-[#F9F1E7]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 py-4">
                        <Link href={"/cart"} className="text-[#666666] hover:text-black transition text-sm">cart</Link>
                        <CgChevronRight />
                        <span>CheckOut</span>
                    </nav>
                </div>
            </div>


            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gray-50 border border-gray-500 rounded-lg p-6 space-y-6">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item._id} className="flex items-center gap-4 py-3 border-b border-b-gray-500">
                                    <div className="w-16 h-16 rounded overflow-hidden">{item.productImage && (
                                        <Image src={urlFor(item.productImage).url()} alt="image" width={50} height={50} className="object-cover"/>
                                    )}</div>

                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium">{item.title}</h3>
                                        <p className="text-xs text-gray-500">Quantity : {item.inventory}</p>
                                        <p>${item.price * item.inventory}</p>
                                        </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-xs font-medium">No item in cart</p>
                        )}

                        <div className="text-right pt-4">
                            <p className="text-sm">subTotal: <span className="font-medium">${subTotal}</span></p>
                            <p className="text-sm">Discount: <span className="font-medium">${discount}</span></p>
                            <p className="text-lg font-semibold">Total : ${subTotal.toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-500 rounded-lg p-6 space-y-6">
                        <h2 className="text-xl font-semibold">Billing Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:space-y-4 gap-4">
                            <div>
                                <label htmlFor="">First Name  </label>
                                <input type="text" id="firstName" placeholder="Enter Your First Name" value={formValues.firstName} onChange={handleInputChange} className="border border-black rounded-md h-10"/>
                                {formErrors.firstName && (<p className="text-sm text-red-500">First Name is Required</p>)}
                            </div>

                            <div>
                                <label htmlFor="">Last Name  </label>
                                <input type="text" id="lastName" placeholder="Enter Your Last Name" value={formValues.lastName} onChange={handleInputChange} className="border border-black rounded-md h-10"/>
                                {formErrors.lastName && (<p className="text-sm text-red-500">Last Name is Required</p>)}
                            </div>

                            <div>
                                <label htmlFor="">Address  </label>
                                <input type="text" id="address" placeholder="Enter Your Address" value={formValues.address} onChange={handleInputChange} className="border border-black rounded-md h-10"/>
                                {formErrors.address && (<p className="text-sm text-red-500">Address is Required</p>)}
                            </div>

                            <div>
                                <label htmlFor="">Email  </label>
                                <input type="text" id="email" placeholder="Enter Your Email" value={formValues.email} onChange={handleInputChange} className="border border-black rounded-md h-10"/>
                                {formErrors.email && (<p className="text-sm text-red-500">Email is Required</p>)}
                            </div>

                            <div>
                                <label htmlFor="">City  </label>
                                <input type="text" id="city" placeholder="Enter Your City Name" value={formValues.city} onChange={handleInputChange} className="border border-black rounded-md h-10"/>
                                {formErrors.city && (<p className="text-sm text-red-500">City Name is Required</p>)}
                            </div>

                            <div>
                                <label htmlFor="">Phone  </label>
                                <input type="text" id="phone" placeholder="Enter Your Phone Number" value={formValues.phone} onChange={handleInputChange} className="border border-black rounded-md h-10"/>
                                {formErrors.phone && (<p className="text-sm text-red-500">Phone Number is Required</p>)}
                            </div>

                            <div>
                                <label htmlFor="">Zip Code  </label>
                                <input type="text" id="zipCode" placeholder="Enter Your Zip Code" value={formValues.zipCode} onChange={handleInputChange} className="border border-black rounded-md h-10"/>
                                {formErrors.zipCode && (<p className="text-sm text-red-500">Zip Code is Required</p>)}
                            </div>

                            <button onClick={handlePlaceOrder} className="w-full h-12 bg-[#B88E2F] hover:bg-[#9f7922] text-white">Place Order</button>

                        </div>
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
        </>
    );
}

export default CheckOuts