import React from 'react'

export default function ComparisonSection() {
    const comparisonFeatures = [
        {
            feature: "Energy Efficiency",
            rotex: "5 Star BEE Rating",
            others: "3-4 Star Rating",
            rotexBetter: true,
        },
        {
            feature: "Warranty",
            rotex: "3 Years Comprehensive",
            others: "1-2 Years Limited",
            rotexBetter: true,
        },
        {
            feature: "Remote Control",
            rotex: "Smart Remote with Timer",
            others: "Basic Remote",
            rotexBetter: true,
        },
        {
            feature: "Noise Level",
            rotex: "Ultra Silent Operation",
            others: "Standard Noise",
            rotexBetter: true,
        },
        {
            feature: "Build Quality",
            rotex: "Premium Aluminum",
            others: "Standard Materials",
            rotexBetter: true,
        },
        {
            feature: "Price Range",
            rotex: "₹2,899 - ₹3,799",
            others: "₹4,000 - ₹6,000",
            rotexBetter: true,
        },
    ]

    const whyChooseFeatures = [
        {
            icon: "⚡",
            title: "Energy Efficient",
            description: "Save up to 40% on electricity bills with our 5-star BEE rated motors",
        },
        {
            icon: "🔇",
            title: "Silent Operation",
            description: "Enjoy peaceful environment with our ultra-quiet motor technology",
        },
        {
            icon: "🛡️",
            title: "3 Year Warranty",
            description: "Comprehensive warranty coverage for complete peace of mind",
        },
        {
            icon: "📱",
            title: "Smart Controls",
            description: "Advanced remote with timer, speed control and LED display",
        },
        {
            icon: "💎",
            title: "Premium Quality",
            description: "Aerospace-grade aluminum construction for durability",
        },
        {
            icon: "💰",
            title: "Best Value",
            description: "Premium features at affordable prices - unmatched value proposition",
        },
    ]

    return (
        <div className="bg-white font-Poppins">
            {/* Comparison Section */}
            <div className="pb-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="relative inline-block">
                            {/* <div className="absolute -left-6 -top-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div> */}
                            <h2 className="relative text-[30px] md:text-5xl font-[800] text-gray-900 mb-4">
                                <span className="CDH-gradiant ">ROTEX</span> VS <span className="text-gray-800">OTHER FANS</span>
                            </h2>
                        </div>
                        <p className="text-[13px] text-gray-600 max-w-3xl mx-auto">
                            See why thousands of customers choose Rotex over other brands
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className=' w-[100%] md:flex  hidden overflow-x-auto '>


                        <div className="bg-white rounded-xl flex flex-col min-w-[600px] w-[100%] flex-shrink-0 shadow-lg overflow-hidden">
                            <div className="grid grid-cols-3 bs-mix-rotex text-white">
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold">Features</h3>
                                </div>
                                <div className="p-4 text-center border-l border-white/20">
                                    <h3 className="text-xl font-bold">ROTEX Fans</h3>
                                </div>
                                <div className="p-4 text-center border-l border-white/20">
                                    <h3 className="text-xl font-bold">Other Brands</h3>
                                </div>
                            </div>

                            {comparisonFeatures.map((item, index) => (
                                <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                                    <div className="p-4 font-semibold text-gray-900 border-b border-gray-200">{item.feature}</div>
                                    <div className="p-4 border-l border-b border-gray-200 text-center">
                                        <div className="flex items-center justify-center space-x-2">
                                            <span className="text-green-600 text-xl">✓</span>
                                            <span className="font-semibold text-gray-900">{item.rotex}</span>
                                        </div>
                                    </div>
                                    <div className="p-4 border-l border-b border-gray-200 text-center">
                                        <div className="flex items-center justify-center space-x-2">
                                            <span className="text-red-500 text-xl">✗</span>
                                            <span className="text-gray-600">{item.others}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="md:hidden space-y-4">
                        <div className=" text-white p-6 bs-mix-rotex rounded-xl text-center">
                            <h2 className="text-2xl font-bold">Feature Comparison</h2>
                            <p className="text-blue-100 mt-2">ROTEX Fans vs Other Brands</p>
                        </div>

                        {comparisonFeatures.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                                <div className="bg-gray-50 p-4 border-b border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-900 text-center">{item.feature}</h3>
                                </div>

                                <div className="p-4 space-y-4">
                                    {/* ROTEX Section */}
                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-green-600 text-xl">✓</span>
                                                <span className="font-semibold  ">ROTEX Fans</span>
                                            </div>
                                            <span className="font-bold text-[14px] text-green-900">{item.rotex}</span>
                                        </div>
                                    </div>

                                    {/* Other Brands Section */}
                                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-red-500 text-xl">✗</span>
                                                <span className="font-semibold text-red-800">Other Brands</span>
                                            </div>
                                            <span className="text-red-700">{item.others}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                    {/* Winner Badge */}
                    <div className="text-center mt-8">
                        <div className="inline-flex items-center  bs-mix-rotex text-[#fff] px-8 py-4 rounded-full font-bold text-[16px] shadow-lg">
                            🏆 ROTEX WINS IN ALL CATEGORIES!
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Section */}
            <div className="pb-16 pt-[30px] px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="relative inline-block">
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-100 rounded-full"></div>
                            <h2 className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                WHY CHOOSE <span className=" CDH-gradiant">ROTEX?</span>
                            </h2>
                        </div>
                        <p className="text-xl text-gray-600  relative flex z-[10] max-w-3xl mx-auto">
                            Experience the perfect blend of innovation, quality, and affordability
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {whyChooseFeatures.map((feature, index) => (
                            <div key={index} className="group">
                                <div className="bg-gray-50  border rounded-xl p-3 h-full bg-gradient-to-br from-teal-50 hover:to-blue-50 transition-all duration-300 shadow-lg">
                                    {/* Icon */}
                                    <div className="w-[40px] h-[40px] bg-gradient-to-br from-teal-500 to-blue-500 rounded-[10px] flex items-center justify-center text-[20px] mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-[16px] font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-[13px] leading-[20px]">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16">
                        <div className=" bs-mix-rotex rounded-2xl p-4 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
                            <p className="text-[13px] mb-8 opacity-90">Join thousands of satisfied customers who made the smart choice</p>
                            <div className="flex flex-row gap-4 justify-center">
                                <button className="bg-white text-[14px] text-teal-600 font-bold py-[5px] px-8 rounded-full hover:bg-gray-100 transition-colors duration-200">
                                    Shop Now
                                </button>
                                <button className="border-2 text-[14px] border-white text-white font-bold py-[8px] px-8 rounded-full hover:bg-white hover:text-teal-600 transition-colors duration-200">
                                    Find Dealer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
