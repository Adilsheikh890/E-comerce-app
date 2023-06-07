"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'
import { GiHamburgerMenu } from 'react-icons/Gi';
import { MdOutlineClose } from 'react-icons/Md';


export default function Header() {
  const [toggle, setToggle]= useState(true)
  return (
    
    <div className="flex md:flex md:gap-20 sticky top-5  z-10 md:mt-10 mt-10  md:pl-20 px-3 ">

                   <div className="  ">
                    <Link href="/">
                           <Image src="/logo.webp" alt='logo' width={150} height={150} ></Image>
                           </Link>
                    </div>

                    <div className=" md:flex hidden">
                        <ul className=" flex md:gap-10 md:pl-40">
                            <li>
                            <Link href="/Man">Man</Link>
                            </li>
                            <li>
                            <Link href="/Woman">Women</Link>
                            </li>
                            <li>
                            <Link href="/Kids">Kids</Link>
                            </li>
                            <li>
                            <Link href="/Product">All Product</Link>
                            </li>
                        </ul>
                    </div >
                    
                    {/* hmburger */}
                    <div className=" pl-20 pr-4 md:hidden   gap-10 " onClick={()=>{setToggle(!toggle);}} >

                      {toggle ?
                          <GiHamburgerMenu  size={25}/> : <MdOutlineClose size={25} /> }
                          
                      </div>

                      {/* over lay */}
                      
                      {!toggle && (
                      <div className="fixed  md:pt-10 top-0 left-0 bg-gray-200  max-w-md w-[200px] h-full margin-auto  flex  text-center">
                      
                        <ul className=" pt-5 m-8 text-black ">
                            <li className="mx-5 my-2  text-xl border-b-2">
                            <Link href="/Man">Man</Link>
                            </li>
                            <li className="mx-5 my-2 pt-4 text-xl border-b-2">
                            <Link href="/Woman">Women</Link>
                            </li>
                            <li className="mx-5 my-2  pt-4 text-xl border-b-2">
                            <Link href="/Kids">Kids</Link>
                            </li>
                            <li className="mx-5 my-2 pt-4 text-xl border-b-2">
                            <Link href="/Product">All Product</Link>
                            </li>
                        </ul>
                    </div >
                     )}
                      
                    
                    
                    
                    
                
                      </div>
                    
                   

  
  )
}
