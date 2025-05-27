import React, { useState } from 'react'


import logo from "../../../Public/imges/mainfolder/Logo-Rotex.png";
import choice from "../../../Public/imges/mainfolder/bestChoice.png";
import room from "../../../public/imges/mainfolder/room.png"
import fan from "../../../public/imges/mainfolder/fan2.png"


export default function HeroSection() {


    const [variant, setVariant] = useState("purple")

    const data = [
        { date: "30 & 31 May ", city: "Crawley" },
        { date: "1st June ", city: "Wembley" },
        { date: "3rd June ", city: " Harrow" },
        { date: "4th & 5th June ", city: "Birmingham " },
        { date: "7th & 8th June ", city: "Leicester " },



    ]

    const variants = {

        ocean: {
            container: "bg-gradient-to-br from-teal-50 to-blue-100 shadow-md rounded-lg",
            header: "bg-gradient-to-r from-teal-500 to-blue-500 text-white",
            headerRow: "bg-gradient-to-r from-teal-200 to-blue-200",
            row: "even:bg-white odd:bg-gradient-to-r odd:from-teal-50 odd:to-blue-50",
        },
    }

    const currentVariant = variants[variant]

    return (
        <>

            <div className='  md:hidden  md:w-[80%] w-[90%] mx-auto font-Poppins flex  pt-[10px] md:pt-[10px] '>
                <div className=' mx-auto flex md:flex-row flex-col pt-[20px]  justify-between gap-[30px] rounded-[20px] h-[60vh] md:px-[20px] w-[100%]'>
                    <div className=' flex  flex-col gap-[10px]'>
                        <div className=' flex  relative flex-col  gap-[20px]'>

                            <div className=" flex  " >
                                {/* <video autoPlay muted className="w-[400px] h-auto">
                                      <source src={logo} type="video/webm" />
                                    </video> */}
                                <img className=" flex w-[130px]" src={logo} />
                            </div>
                            <h1 className='  font-[800] md:leading-[65px] leading-[43px] text-[36px] md:  uppercase'>
                                <b className=' CDH-gradiant text-[40px] text- font-[800] flex-shrink-0'> Indias Only Bldc Fans </b>
                            </h1>
                            <img className=' flex w-[150px] rotate-[30deg]  absolute top-[150px] z-40 right-[-20px] object-cover rounded-[10px] h-[110px]' src={choice} />
                        </div>

                        <div className=' relative '>
                            <img className=' w-[100%] h-[280px]' src={room} />
                            <img className=' absolute top-[30px] right-[90px] w-[160px] ' src={fan} />
                        </div>

                    </div>

                </div>
            </div>



            <div className='  md:flex h-[85vh]  md:w-[90%] relative bglatest w-[90%] mx-auto font-Poppins hidden  pt-[10px] md:pt-[10px] '>
                <div className=' mx-auto flex md:flex-row flex-col pt-[20px]  justify-between gap-[30px] rounded-[20px]  md:px-[20px] w-[100%]'>
                    <div className=' flex  flex-col gap-[10px]'>
                        <div className=' flex  top-[35%] left-[20%] flex-col absolute  gap-[10px]'>

                            <div className=" flex  " >
                                {/* <video autoPlay muted className="w-[400px] h-auto">
                                      <source src={logo} type="video/webm" />
                                    </video> */}
                                <img className=" flex w-[130px]" src={logo} />
                            </div>
                            <h1 className='  font-[800] md:leading-[65px] leading-[43px] text-[36px] md:  uppercase'>
                                <b className=' CDH-gradiant text-[40px] text- font-[800] flex-shrink-0'> Indias Only Bldc Fans </b>
                            </h1>

                        </div>

                        <img className=' flex w-[200px] rotate-[30deg]  absolute top-[190px] z-40 right-[20%] object-cover rounded-[10px] h-[110px]' src={choice} />
                        {/* <img className=' w-[100%] ' src={room} /> */}
                        <img className=' absolute top-[0px] mx-auto  left-0 right-[0px] w-[480px] ' src={fan} />


                    </div>

                </div>
            </div>


        </>
    )
}
