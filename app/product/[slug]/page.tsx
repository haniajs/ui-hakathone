import { client } from "@/sanity/lib/client";
import { Product } from "@/types/products";
import Image from "next/image";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import React  from "react";
import Link from "next/link";
import SecondLast from "@/components/Secondlast";


interface ProductPageProps {
    params : Promise<{slug : string}>
}

async function getProduct(slug :string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        title,
        _type,
        description,
        productImage,
        price,
        }`, {slug}
    )
}



     
   


export default async function ProductPage({params} : ProductPageProps){
    const {slug} = await params;
    const product = await getProduct(slug)

    return(
       <>
       <Navbar />
        <div className="max-w-7xl- mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 md:pl-5 md:pr-5 mt-12">
                <div className="aspect-square">
                    {product.productImage &&(
                        <Image src={urlFor(product.productImage).url()} alt={product.title} width={500} height={500} className="rounded-lg shadow-md h-[400px] w-[400px]"/>
                    )}
                </div>

                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">{product.title}</h1>
                    <p className="text-2xl font-sans text-[#9F9F9F]">Rs : ${product.price}</p>
                    <div className="flex gap-x-2 mt-0">
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
                    <p className="text-2xl font-sans text-black line-clamp-5">{product.description}</p>

                    <h1 className="font-normal text-[14px] leading-[21px] text-[#9F9F9F]">Color</h1>
                     <div className="flex gap-x-4">
                            <FaCircle className="text-[#816DFA]"/>
                            <FaCircle />
                            <FaCircle className="text-[#B88E2F]"/>
                         </div>
                      <Link href={"/cart"}><button className="border border-black p-4 rounded-md w-[150px] sm:mb-6 hover:text-white hover:bg-[#B88E2F]">Add To Cart</button></Link>
                    </div>
            </div>
        </div>
        <SecondLast />
        <Footer />
        </>
    )
}