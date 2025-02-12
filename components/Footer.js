import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter, FaTiktok, FaLinkedin } from "react-icons/fa";
import footer from "../public/img/footer.svg"
import Image from "next/image";
const Footer = () => {
    return (
        <footer className=" pt-10">
            <div className="container-fluid px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

                    <div>
                        <Image
                            src={footer}
                            alt="Logo"
                            width={250}

                            priority
                        />
                        <div className="flex space-x-4 mt-4 text-gray-600">
                            <FaFacebookF className="cursor-pointer hover:text-black" />
                            <FaInstagram className="cursor-pointer hover:text-black" />
                            <FaYoutube className="cursor-pointer hover:text-black" />
                            {/* <FaXTwitter className="cursor-pointer hover:text-black" /> */}
                            <FaTiktok className="cursor-pointer hover:text-black" />
                            <FaLinkedin className="cursor-pointer hover:text-black" />
                        </div>
                    </div>


                    <div className="pr-[50px]">
                        <p className="text-sm text-gray-600">Get the latest updates by subscribing to our newsletter.</p>
                        <div className="flex mt-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="px-4 py-2 mr-2 border border-black rounded-0 focus:outline-none w-full"
                            />
                            <button className="bg-gray-200 px-4 py-2 rounded-0 hover:bg-gray-300">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <ul className="text-sm text-gray-600 space-y-2 list-disc">
                            <li><a href="#" className="hover:text-black">Auctions</a></li>
                            <li><a href="#" className="hover:text-black">Brands</a></li>
                            <li><a href="#" className="hover:text-black">Sell your vehicle</a></li>
                            <li><a href="#" className="hover:text-black">FAQ</a></li>
                            <li><a href="#" className="hover:text-black">Contact us</a></li>
                            <li><a href="#" className="hover:text-black">Auction Results</a></li>
                        </ul>
                        <ul className="text-sm text-gray-600 space-y-2 list-disc">
                            <li><a href="#" className="hover:text-black">About us</a></li>
                            <li><a href="#" className="hover:text-black">Team</a></li>
                            <li><a href="#" className="hover:text-black">Careers</a></li>
                            <li><a href="#" className="hover:text-black">Terms of use</a></li>
                            <li><a href="#" className="hover:text-black">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-black">Cookie declaration</a></li>
                        </ul>
                    </div>
                </div>

             
            </div>
            <div className="mt-8 text-center bg-gray-100 text-sm border-t py-4">
                    © Copyright 2025 All rights reserved SB Media USA Inc
                </div>
        </footer>
    );
};

export default Footer;
