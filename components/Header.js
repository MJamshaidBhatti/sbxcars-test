"use client";

import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import imgd from "../public/img/sbx-cars-sb-2024.svg"




const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="bg-[#d6bd83] text-black text-sm text-center py-2 px-4">

                <div className="flex justify-center items-center ">
                    <a href="#" className="text-[16px] font-medium hover:underline">
                        Sell Your Supercar &rsaquo;
                    </a>
                </div>
            </div>

            <div className="bg-[#ededed] text-black text-sm text-center py-2 px-4">


                <div className="flex justify-between items-center ">
                    <div className="hidden md:flex space-x-4">
                        <span>US +1 323-407-8523</span>
                        <span>UAE +971 4 876 1764</span>
                        <span>UK +44 20 4525 8014</span>
                        <span>|</span>
                        <span>sales@sbxcars.com</span>
                    </div>
                </div>
            </div>


            <div className="bg-white shadow-md sticky top-0">
                <div className="flex items-center justify-between py-4 px-4">
                   
                <nav className="hidden md:flex space-x-6 text-sm font-medium">
                <FiMenu className="text-lg" />
                    </nav>

                    <Link href="/" className="text-2xl font-bold tracking-wide">
                        <Image
                            src={imgd}
                            alt="Logo"
                            width={250}
                          
                            priority
                        /> </Link>
                  
                    <div className="flex items-center space-x-4">
                        <FiSearch className="text-xl cursor-pointer hidden md:block" />
                        <Link href="/signin" className="text-sm font-medium">Sign In</Link>
                     
                        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
                        </button>
                    </div>
                </div>

              
                   
              
            </div>
            <div className=" bg-white shadow-lg">
                        <nav className="flex flex-row items-center justify-center gap-8 py-6 border-t-[1px]">
                            <Link href="/auctions" className="text-gray-700">Auctions</Link>
                            <Link href="/preview" className="text-gray-700">Preview</Link>
                            <Link href="/results" className="text-gray-700">Results</Link>
                            <Link href="/sell" className="text-gray-700">Sell</Link>
                            <Link href="/faq" className="text-gray-700">FAQ</Link>
                            <Link href="/about" className="text-gray-700">About</Link>
                        </nav>
                    </div>
        </header>
    );
};

export default Header;

