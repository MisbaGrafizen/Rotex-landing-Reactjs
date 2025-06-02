import React from 'react'
import { Link } from 'react-router-dom';

import product1 from "../../public/imges/mainfolder/product1.jpg"
import product2 from "../../public/imges/mainfolder/product2.jpg"
import product3 from "../../public/imges/mainfolder/product3.jpg"
import product4 from "../../public/imges/mainfolder/product4.jpg"
// import product5 from "../../public/imges/mainfolder/product5.jpg"





export default function Product() {

    const products = [
        {
            id: 1,
            name: "Eco Lite",
            price: "₹2999",
            image: product4,
            link: "https://rotexfans.com/details/eco-lite"
        },
        {
            id: 2,
            name: "Eco Adv.",
            price: "₹3099 - ₹3199",
            image: product1,
            link: "https://rotexfans.com/details/eco-adv."
        },
        {
            id: 3,
            name: "Phi",
            price: "₹3599 - ₹3799",
            image: product2,
            link: "https://rotexfans.com/details/phi"
        },
        {
            id: 4,
            name: "Trio",
            price: "₹3599 - ₹3799",
            image: product3,
            link: "https://rotexfans.com/details/trio"
        },
    ]

    return (
        <>



            <div className="font-Poppins w-[100%] mt-[40px]  pb-[20px] pt-16 ">
                <div className=" flex flex-col w-[90%] mx-auto">
                    {/* Header Section */}
                    <div className="relative mb-16 px-">
                        <div className="absolute md:top-[-40px] left-[-10px] top-[-18px] w-[115px] h-[115px] bg-yellow-400 rounded-full"></div>
                        <h1 className="relative text-[40px] ml-[14px]  leading-[40px] font-[800] text-gray-900 l">
                            OUR BEST <span className="  pl-[] CDH-gradiant">SELLING FANS</span>
                        </h1>
                    </div>

                    {/* Products Grid */}
                    {/* Infinite Sliding Products */}
                    <div className="overflow-hidden w-full">
                        <div className="flex w-max animate-slide whitespace-nowrap gap-8">
                            {[...products, ...products].map((product, index) => (
                                <div key={index} className="bg-gray-200 w-[300px] flex-shrink-0 rounded-[17px] p-4">
                                    {/* Product Card */}
                                    <div className="bg-white rounded-2xl mb-6 min-h-[200px] flex flex-col items-center justify-center">
                                        <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            className="w-full max-w-[220px] h-auto object-contain"
                                        />
                                    </div>
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-[18px] font-bold CDH-gradiant mb-2">{product.name}</h3>
                                            <p className="text-[16px] font-semibold text-gray-900">MRP {product.price}</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-3">
                                            <div className="flex flex-col space-y-2">
                                                <div className="w-8 h-8 bg-gray-300 border-2 border-gray-400 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                                                <div className="w-8 h-8 bg-gray-800 border-2 border-gray-600 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {product.link ? (
                                        <Link to={product.link}>
                                            <button className="w-full bs-mix-rotex text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200">
                                                Know More
                                            </button>
                                        </Link>
                                    ) : (
                                        <button className="w-full bs-mix-rotex text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200" disabled>
                                            Know More
                                        </button>
                                    )}

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
