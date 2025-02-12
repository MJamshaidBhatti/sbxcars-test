import Image from "next/image";
import card1 from "../public/img/caed1.jpg";
import card2 from "../public/img/caed3.webp";
import card3 from "../public/img/caerd5.webp";
import card4 from "../public/img/caery6.webp";
import card5 from "../public/img/card2.webp";
import card6 from "../public/img/creete6.jpg";

const CarCard = ({ car }) => {
    return (
        <div class="grid p-4 border">
            <div className=" bg-white">
                <div className="relative">
                    <Image src={car.image} alt={car.name}  className="w-full   object-cover" />
                    <div className="bg-[#0707076b] absolute top-0 h-full w-full"></div>
                    <div className="">
                    <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 text-sm rounded-lg flex items-center">
                        ⭐ {car.favorites}
                    </div>

                    <div className="p-4 absolute bottom-4 left- flex items-end justify-between w-full">
                        <div>
                            <p className="text-[#bfbfbf] text-sm">{car.year}</p>
                            <h2 className="text-lg text-white font-bold uppercase">{car.name}</h2>
                            <p className="text-[#bfbfbf] text-sm">{car.model}</p>
                        </div>
                        <p className="text-[#bfbfbf] text-sm">{car.location}</p>
                    </div>
                    </div>
                </div>

                <div className="p-4 border-t flex justify-between items-center text-sm">
                    <div>
                        <p className="text-gray-500">Latest bid</p>
                        <p className="font-bold text-yellow-600">{car.price}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Time left</p>
                        <p className="font-bold text-red-600">{car.timeLeft}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const CarListing = () => {
    const cars = [
        {
            image: card1,
            year: 2023,
            name: "Porsche",
            model: "911 Carrera T",
            location: "Dubai, United Arab Emirates",
            price: "20,000 AED",
            timeLeft: "7 days",
            favorites: 23,
        },
        {
            image: card2,
            year: 2018,
            name: "Aston Martin",
            model: "V12 Zagato - 1 of 18 RHD Spec",
            location: "Cobham, United Kingdom",
            price: "£16,900",
            timeLeft: "8 days",
            favorites: 31,
        },
        {
            image: card3,
            year: 1995,
            name: "Land Rover",
            model: 'Defender 90 300Tdi "Brooklyn Coachworks"',
            location: "Jessup, Maryland, USA",
            price: "US$15,500",
            timeLeft: "9 days",
            favorites: 17,
        },
        {
            image: card4,
            year: 2023,
            name: "Porsche",
            model: "911 Carrera T",
            location: "Dubai, United Arab Emirates",
            price: "20,000 AED",
            timeLeft: "7 days",
            favorites: 23,
        },
        {
            image: card5,
            year: 2018,
            name: "Aston Martin",
            model: "V12 Zagato - 1 of 18 RHD Spec",
            location: "Cobham, United Kingdom",
            price: "£16,900",
            timeLeft: "8 days",
            favorites: 31,
        },
        {
            image: card6,
            year: 1995,
            name: "Land Rover",
            model: 'Defender 90 300Tdi "Brooklyn Coachworks"',
            location: "Jessup, Maryland, USA",
            price: "US$15,500",
            timeLeft: "9 days",
            favorites: 17,
        },
        {
            image: card4,
            year: 2023,
            name: "Porsche",
            model: "911 Carrera T",
            location: "Dubai, United Arab Emirates",
            price: "20,000 AED",
            timeLeft: "7 days",
            favorites: 23,
        },
        {
            image: card5,
            year: 2018,
            name: "Aston Martin",
            model: "V12 Zagato - 1 of 18 RHD Spec",
            location: "Cobham, United Kingdom",
            price: "£16,900",
            timeLeft: "8 days",
            favorites: 31,
        },
        {
            image: card6,
            year: 1995,
            name: "Land Rover",
            model: 'Defender 90 300Tdi "Brooklyn Coachworks"',
            location: "Jessup, Maryland, USA",
            price: "US$15,500",
            timeLeft: "9 days",
            favorites: 17,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 ">
            {cars.map((car, index) => (
                <CarCard key={index} car={car} />
            ))}
        </div>
    );
};

export default CarListing;
