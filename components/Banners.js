"use client"; // Ensure this is at the top

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import ban1 from "../public/img/Banner (1).webp"
import ban2 from "../public/img/Banner.webp"
import ban3 from "../public/img/Coons 1 (2).webp"

const images = [ban1, ban2, ban3];

const Banners = () => {
    return (
        <div className="w-full ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="rounded-0 shadow-lg"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[300px] md:h-[500px]">

                            <Image src={src} alt={`Slide ${index}`} layout="fill" objectFit="cover" className="rounded-0" />
                            <div class=" w-full h-60 bg-cover bg-center">
                                <div class="absolute  inset-0 bg-black/40 flex flex-col justify-start px-6">
                                   <div className="absolute left-[20px] bottom-[100px] text-left">
                                   <p class="text-gray-300 text-xl font-light">2021</p>
                                    <h1 class="text-white text-4xl font-bold">Aston Martin</h1>
                                    <p class="text-gray-300 text-lg">DB5 Continuation Goldfinger Ed.</p>
                                   </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banners;
