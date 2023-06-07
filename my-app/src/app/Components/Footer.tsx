import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import { BsTwitter } from 'react-icons/Bs';
import { FaFacebookSquare } from 'react-icons/Fa';
import {  BsLinkedin } from 'react-icons/Bs';


export default function Footer() {
  return (
  <Wrapper>
   <div className=" flex md:flex-row flex-col gap-[30px] pb-10">
                <div className="md:w-5/6">
                <Link href="/">
                           <Image src="/logo.webp" alt='logo' width={150} height={150} ></Image>
                </Link>
                <p className="pt-5  font-serif">
                Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                </p>
                <div className="flex gap-7 pt-5">
               <BsTwitter size={25}/>
               <FaFacebookSquare size={25}/>
               <BsLinkedin size={25}/>
                </div>
                </div>


                <div className="md:w-5/6 md:pl-40">
                  <h2 className="font-sans text-xl">Company</h2>
                  <ol className="pt-5 font-serif">
                    <li>About</li>
                    <li className="pt-2">Terms of Use</li>
                    <li className="pt-2">Privacy Policy</li>
                    <li className="pt-2">How it Works</li>
                    <li className="pt-2">Contact Us</li>
                  </ol>
                </div>

                <div className="md:w-5/6">
                  <h2 className="font-sans text-xl">Support</h2>
                  <ol className="pt-5  font-serif">
                    <li>Support Carrer</li>
                    <li className="pt-2">24h Service</li>
                    <li className="pt-2">Quick Chat</li>
                  </ol>
                </div>

                <div className="md:w-5/6">
                  <h2 className="font-sans text-xl">Contact</h2>
                  <ol className="pt-5  font-serif">
                    <li>Whatsapp</li>
                    <li className="pt-2">Support 24h</li>
                  </ol>
                </div>
                </div>
                {/* second part */}
                <div className="flex md:flex-row flex-col gap-5   pt-10  border-t-2 border-orange-500">
                <div className="md:w-2/4">
                <h3>Copyright © 2022 Dine <br/> Market </h3>
                
                </div>

                <div className="md:w-2/4 md:pl-10">
                  <h3>Design by. Mr_Adil</h3>
                  <h3 className="font-serif text-black text-lg">Design Studio</h3>
                </div>

                <div className="md:w-2/4">
                  <h3>Code by. Adil Sheikh on</h3>
                  <h3 className="font-serif text-black text-lg" > github</h3>
                
                </div>
                </div>
                    
               
  
 </Wrapper>
  )
}
