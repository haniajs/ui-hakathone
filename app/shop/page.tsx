"use client"
import Navbar from "@/components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SecondLast from "@/components/Secondlast";
import Footer from "@/components/Footer";


import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import  { useEffect, useState } from "react";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";
import SearchAndFilter from "@/components/SearchAndFilter";


export default function Shop () {


  const [product, setProduct] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

   // Pagination states
   const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Display 12 products per page


  useEffect(() => {
      async function fetchproduct() {
          const fetchedProduct : Product[] = await client.fetch(allProducts)
          setProduct(fetchedProduct)
          setFilteredProducts(fetchedProduct); // Initialize with all products
      }
      fetchproduct()
  }, []) 
 



//  Add to cart work

const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    Swal.fire({
        position : "top-right",
        icon : "success",
        title : `${product.title} added to cart`,
        showConfirmButton : false,
        timer : 1000
    })
    addToCart(product)
}
// add to cart work close

  // Calculate the products to show based on the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct); // This line now calculates the correct slice of products

  // Pagination logic
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Number of pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
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
        <h1 className="font-medium text-[48px] leading-[72px] text-center">Shop</h1>
        <div className="flex gap-x-2 justify-center items-center">
       <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/shop"}><h1 className="font-light text-[16px] leading-[24px] text-center">Shop</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[316px] md:hidden sm:block">
         <div className="pt-[90px]">
         <Image src={"/Images/logo.png"} alt="logo" height={50} width={50} className="ml-[180px]"/>
            <h1 className="font-medium text-[48px] leading-[72px] text-center">Shop</h1>
            <div className="flex gap-x-2 justify-center items-center">
            <Link href={"/"}><h1 className="font-medium text-[16px] leading-[24px] text-center">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-center"/>
       <Link href={"/shop"}><h1 className="font-light text-[16px] leading-[24px] text-center">Shop</h1></Link>
            </div>
         </div>
         </div>
        
        {/* Hero section close*/}


   {/* Subhero section open*/}

        {/* For large screen*/}

      {/*  <div className="sm:hidden md:block">
            <div className="w-full bg-[#F9F1E7] h-[100px] flex justify-between">
                <div className="flex ml-[80px] items-center gap-x-4">
                    <Image src={"/Images/icon1.png"} alt="icon1" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <h1 className="font-normal text-[20px] leading-[30px]">Filter</h1>
                    <Image src={"/Images/icon2.png"} alt="icon2" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <Image src={"/Images/icon3.png"} alt="icon3" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <p>|</p>
                    <h1 className="font-normal text-[16px] leading-[24px]">Showing 1–16 of 32 results</h1>
                </div>
                <div className="flex items-center gap-x-4 mr-[80px]">
                    <h1 className="font-normal text-[20px] leading-[30px]">Show</h1>
                    <input type="text" placeholder="16" className="w-[55px] h-[55px] text-center"/>
                    <h1 className="font-normal text-[20px] leading-[30px]">Short by</h1>
                    <input type="text" placeholder="Default" className="w-[188px] h-[55px] text-center"/>
                </div>
            </div>
        </div> */}

        {/* For mobile screen*/}

      {/*  <div className="md:hidden sm:block overflow-hidden">
            <div className="w-[428px] bg-[#F9F1E7] h-[100px] flex justify-center border-b-2 mt-1">
                <div className="flex items-center gap-x-4">
                <Image src={"/Images/icon1.png"} alt="icon1" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <h1 className="font-normal text-[20px] leading-[30px]">Filter</h1>
                    <Image src={"/Images/icon2.png"} alt="icon2" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <Image src={"/Images/icon3.png"} alt="icon3" height={100} width={100} className="h-[25px] w-[25px]"/>
                    <p>|</p>
                    <h1 className="font-normal text-[16px] leading-[24px]">Showing 1–16 of 32 results</h1>
                </div>
                </div>
                <div className="w-[428px] bg-[#F9F1E7] h-[100px] flex justify-center mt-1">
                <div className="flex items-center gap-x-4">
                <h1 className="font-normal text-[20px] leading-[30px]">Show</h1>
                    <input type="text" placeholder="16" className="w-[55px] h-[55px] text-center"/>
                    <h1 className="font-normal text-[20px] leading-[30px]">Short by</h1>
                    <input type="text" placeholder="Default" className="w-[188px] h-[55px] text-center"/>
                </div>
            </div>
        </div>  */}

        {/* Subhero section close*/}
        
         {/* Subhero, Search and filter and pagination section open*/}
        
         <div className="filters-container">
        <SearchAndFilter products={product} setFilteredProducts={setFilteredProducts} />
      </div>

      <div className="grid sm:grid-col-1 md:grid-cols-4">
         {/* Filtered and Paginated Products */}
        {currentProducts.map((product) => (
          <div key={product._id} className="product-item ml-6 mr-6 sm:flex flex-col sm:justify-center sm:items-center md:w-[285px]">
            <Link href={`/product/${product.slug.current}`}>
                            {product.productImage && (
                                <Image src={urlFor(product.productImage).url()} alt="image" width={200} height={200} className="h-[301px] w-[285px] mt-10"/>
                            )}
                             <div className="gap-b-10 sm:flex sm:justify-center sm:items-center">
                            <div className="bg-[#F4F5F7] md:h-[280px] sm:h-[280px] sm:w-[285px]">
                            <div className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">{product.title}</div><br/>
                           <div className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4 line-clamp-2"> {product.description}</div><br/>
                           <div className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] ml-4"><h1>Rp ${product.price}</h1>                          </div> <br/>
                          <div>   {/* add to cart button start */}
                            <button className="bg-[#B88E2F] text-white ml-[70px] font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                           onClick={(e) => handleAddToCart(e, product)}
                           >
                            Add To Cart
                           </button></div>
                         
                           </div>
                           </div>
                         
                           </Link>
          </div>
        ))}
      </div>
      
         {/* Subhero, Search and filter and pagination section close*/}


         {/* Main section open */}

    {/*    <div className="grid sm:grid-col-1 md:grid-cols-4">
                    {currentProducts.map((product) => (
                        <div key={product._id} className="ml-6 mr-6 sm:flex flex-col sm:justify-center sm:items-center md:w-[285px]">
                          <Link href={`/product/${product.slug.current}`}>
                            {product.productImage && (
                                <Image src={urlFor(product.productImage).url()} alt="image" width={200} height={200} className="h-[301px] w-[285px] mt-10"/>
                            )}
                            <div className="gap-b-10 sm:flex sm:justify-center sm:items-center">
                            <div className="bg-[#F4F5F7] md:h-[280px] sm:h-[280px] sm:w-[285px]">
                            <div className="font-semibold text-[24px] leading-[28.8px] pt-6 ml-4">{product.title}</div><br/>
                           <div className="font-medium text-[16px] leading-[24px] text-[#898989] pt-2 ml-4 line-clamp-2"> {product.description}</div><br/>
                           <div className="font-semibold  text-[20px] leading-[30px] text-[#3A3A3A] ml-4"><h1>Rp ${product.price}</h1>                          </div> <br/>
                          <div> 

                        
                          <button className="bg-[#B88E2F] text-white ml-[70px] font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                           onClick={(e) => handleAddToCart(e, product)}
                           >
                            Add To Cart
                           </button></div>
                         
                           </div>
                           </div>
                         
                           </Link>
                        </div>
                    ))}
                </div>   
                */}
                 {/* Main section close */}


        {/* Pagination Controls open */}
      <div className="flex justify-center items-center gap-x-4 mt-[60px] mb-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`font-normal text-[20px] leading-[30px] text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white h-[60px] w-[60px] rounded-[10px] ${
              currentPage === number ? "bg-[#B88E2F] text-black" : ""
            }`}
          >
            {number}
          </button>
        ))}
      </div>
      {/* Pagination Controls close */}
        

            {/* Second last section  open*/}
            <SecondLast />
             {/* Second last section  close*/}

             {/* Footer  open*/}
             <Footer />
             {/* Footer  close*/}
        </>
    );
}

