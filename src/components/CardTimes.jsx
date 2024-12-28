'use client'
import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { ReplaceAll } from "lucide-react";
import ScrollAnimation from 'react-animate-on-scroll';

export default function CardPricing({ img, card }) {
    const options = ["Option 1", "Option 2", "Option 3"];
    const [selected, setSelected] = useState(null);
    const { cardPricingOne, setCardPricingOne, cardPricingTwo, setCardPricingTwo } = useAppContext()


    const clases = {

        "individual": {
            "60min": {
                "1_clase": {
                    "precio_regular": 2750,
                    "precio_descuento": 2500
                },
                "4_clases": {
                    "precio_regular": 11000,
                    "precio_descuento": 10000
                },
                "8_clases": {
                    "precio_regular": 22000,
                    "precio_descuento": 20000
                }
            },
            "90min": {
                "1_clase": {
                    "precio_regular": 3850,
                    "precio_descuento": 3500
                },
                "4_clases": {
                    "precio_regular": 15400,
                    "precio_descuento": 14000
                },
                "8_clases": {
                    "precio_regular": 30800,
                    "precio_descuento": 28000
                }
            },
            "ofertas": {
                "1_mes": {
                    "precio_regular": 3850,
                    "precio_descuento": 3500
                },
                "2_meses": {
                    "precio_regular": 15400,
                    "precio_descuento": 14000
                },
                "3_meses": {
                    "precio_regular": 30800,
                    "precio_descuento": 28000
                }
            }
        },
        "pareja": {
            "60min": {
                "4_clases": {
                    "precio_regular": 6160,
                    "precio_descuento": 5600
                },
                "8_clases": {
                    "precio_regular": 12320,
                    "precio_descuento": 11200
                },
                "16_clases": {
                    "precio_regular": 22440,
                    "precio_descuento": 20400
                }
            },
            "90min": {
                "4_clases": {
                    "precio_regular": 9240,
                    "precio_descuento": 8400
                },
                "8_clases": {
                    "precio_regular": 18480,
                    "precio_descuento": 16800
                },
                "16_clases": {
                    "precio_regular": 34760,
                    "precio_descuento": 31600
                }
            },
            "ofertas": {
                "1_mes": {
                    "precio_regular": 17240,
                    "precio_descuento": 16000
                },
                "2_meses": {
                    "precio_regular": 30480,
                    "precio_descuento": 28000
                },
                "3_meses": {
                    "precio_regular": 44760,
                    "precio_descuento": 41600
                }
            }
        },
        "grupo": {
            "60min": {
                "4_clases": {
                    "precio_regular": 6160,
                    "precio_descuento": 5600
                },
                "8_clases": {
                    "precio_regular": 12320,
                    "precio_descuento": 11200
                },
                "16_clases": {
                    "precio_regular": 22440,
                    "precio_descuento": 20400
                }
            },
            "90min": {
                "4_clases": {
                    "precio_regular": 5500,
                    "precio_descuento": 5000
                },
                "8_clases": {
                    "precio_regular": 11000,
                    "precio_descuento": 10000
                },
                "16_clases": {
                    "precio_regular": 19800,
                    "precio_descuento": 18000
                }
            },
            "ofertas": {
                "1_mes": {
                    "precio_regular": 10500,
                    "precio_descuento": 9000
                },
                "2_meses": {
                    "precio_regular": 19000,
                    "precio_descuento": 17000
                },
                "3_meses": {
                    "precio_regular": 27800,
                    "precio_descuento": 24000
                }
            }
        }

    }

    console.log(clases?.[cardPricingOne])
    console.log(clases?.[cardPricingOne]?.[cardPricingTwo] && Object.entries(clases?.[cardPricingOne]?.[cardPricingTwo]))


    return (
        < div className="" >
      <ScrollAnimation
                   animateIn='bounceInLeft'
                   animateOut='bounceOutLeft'
                   initiallyVisible={true} offset={0}
               >

                <div className="w-full grid grid-cols-3 gap-4 bg-white rounded-[50px] shadow-lg">

                    <div className="text-black col-span-2 bg-white p-10  rounded-l-[50px] ">
                        <h2 className="text-2xl mb-4 text-black">Tipo de clase: {cardPricingOne?.toUpperCase()}</h2>
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Escoge tus clases:</h2>
                        {clases?.[cardPricingOne]?.[cardPricingTwo] && Object.entries(clases?.[cardPricingOne]?.[cardPricingTwo]).map((option, index) => (
                            <label
                                key={index}
                                className={`relative w-full  flex justify-between items-center space-x-3 p-3 rounded-md cursor-pointer ${selected === index ? "bg-white" : "bg-gray-100"
                                    } transition-colors duration-200 ease-in-out mb-5`}
                            >   <span className="flex">

                                    <input
                                        type="checkbox"
                                        checked={selected === index}
                                        onChange={() => setSelected(index)}
                                        className="form-checkbox h-5 w-5 text-green-500 mr-5"
                                    />
                                    <span className="text-gray-700 text-[14px]">{option[0]?.replaceAll('_', ' ')} {option[0]?.replaceAll('_', ' ').includes('clase') && 'a la semana'}</span>

                                </span>
                                <span className="inline-block text-right text-gray-700 text-[14px] w-[180px] bg-[#ffb06f] p-2 rounded-[10px]">
                                    <span className="relative inline-block text-gray-800 text-[14px]  mr-[5px]">
                                        <span className="line-through decoration-gray-800 decoration-[1.3px]">${option[1]?.precio_regular}</span>
                                    </span>
                                    <span className="text-gray-800 text-[20px] font-bold ">${option[1]?.precio_descuento}</span>
                                </span>

                            </label>
                        ))}
                    </div>



                    <div className="relative bg-[#ffb06f] rounded-r-[50px] overflow-hidden  h-full ">

                        {/* 
                <div className="relative right-0  flex items-center justify-center inset-y-0 z-20 bg-opacity-50">
                    <div className="   bg-[#ffffff]  p-8 ring-1 shadow-2xl ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0">
                        <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600">
                            Hobby
                        </h3>
                        <span className="mt-4 flex items-baseline gap-x-2">
                            <span className="text-5xl font-semibold tracking-tight text-gray-900">
                                $29
                            </span>
                            <span className="text-base text-gray-500">/month</span>
                        </span>
                        <span className="mt-6 text-base/7 text-gray-600">
                            The perfect plan if you&apos;re just getting started with our product.
                        </span>
                        <ul
                            role="list"
                            className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10"
                        >
                            {[
                                "25 products",
                                "Up to 10,000 subscribers",
                                "Advanced analytics",
                                "24-hour support response time",
                            ].map((item) => (
                                <li key={item} className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-indigo-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <spanath
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#"
                            aria-describedby="tier-hobby"
                            className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
                        >
                            Get started today
                        </a>
                    </div>
                </div> */}

                        <img src={img} className="absolute w-full p-5 top-0 bottom-0 my-auto  transition-all hover:scale-105" alt="" />
                    </div>


                </div>
            </ ScrollAnimation >
        </div  >
    );
}