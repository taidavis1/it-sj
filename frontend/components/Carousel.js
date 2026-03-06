"use client";

import React from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade} from 'swiper/modules';

import Image from 'next/image';

import Carousel1 from "@/public/Carousel/1.png";
import Carousel2 from "@/public/Carousel/2.png";
import Carousel3 from "@/public/Carousel/3.png";

import Icon1 from "@/public/Icon/1.png";
import Icon2 from "@/public/Icon/2.png";
import Icon3 from "@/public/Icon/3.png";
import Icon4 from "@/public/Icon/4.png";

import CircuitL from "@/public/Icon/alt/circuitL.png";

import {motion} from "motion/react";

import 'swiper/css';
import 'swiper/css/bundle';

import Link from 'next/link';
import { GrFormNext } from 'react-icons/gr';
import { AnimateBtn } from './AnimateBtn';

export const Carousel = () => {

    const carouselData = [
        {
            id: 1,
            title: "Engineering-Driven PCB Manufacturing in San Jose",
            img: Carousel1,
            desc: "High-precision PCB fabrication and assembly services for Silicon Valley startups, aerospace, medical, and robotics companies. Fast turnaround, IPC-compliant production, and scalable solutions from prototype to full production."
        },
        {
            id: 2,
            title: "Where Silicon Valley Prototypes Become Production-Ready",
            img: Carousel2,
            desc: "Rapid PCB prototyping and low-volume production in San Jose with reliable lead times, precision quality control, and turnkey component sourcing to accelerate product development cycles."
        },
        {
            id: 3,
            title: "Precision PCB Assembly for Mission-Critical Applications",
            img: Carousel3,
            desc: "Complete PCB assembly solutions including SMT, through-hole, inspection, and testing. Serving aerospace, medical, semiconductor, and EV industries across San Jose and the Bay Area."
        },
    ];

    const industryData = [
        Icon1,
        Icon2,
        Icon3,
        Icon4
    ]

    return (
        
        <div className={`w-screen h-[750px] relative`}>
            <Swiper
                loop={true}
                initialSlide={0}
                effect="fade"
                autoplay={{
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                lazyPreloadPrevNext={1}
                lazyPreloaderClass='swiper-lazy-preloader'
                speed={6500}
                fadeEffect={{crossFade: false}}
                modules={[Autoplay, EffectFade]}
                
                className="w-full h-full"
            >
                {carouselData.map((item) => (
                    <SwiperSlide className=' relative' key={item.id}>
                        {({ isActive }) => (
                            <div>
                                <Image loading='lazy' src={item.img} alt={item.title} className={`animate-zoom object-center object-cover w-full h-full`} />
                                <div className='img-test w-full h-full absolute top-0'>
                                    <div className=' mt-8 mx-auto flex flex-col justify-center max-w-7xl h-full'>
                                        <motion.div 
                                            animate={{y: isActive ? 0 : 100, opacity: isActive ? 1 : 0}}
                                            transition={{duration: 1, ease: "easeInOut" , type: "spring", stiffness: 100}}
                                            className='w-3/4'
                                        >
                                            <h1 className=' text-white font-bold font-headerFont text-5xl uppercase'>
                                                {item?.title}
                                            </h1>
                                            <p className=' mt-10 text-white text-2xl'>
                                                {item?.desc}
                                            </p>
                                        </motion.div>
                                        <div className='mt-16 flex items-center space-x-8'>
                                            <AnimateBtn hrefLink={""} text={"Request Quote"} />
                                            <Link href={""} className=' py-4 text-white text-lg text-center w-[120px] border-white border-b'>
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='w-full z-50 absolute -bottom-28'>
                <div className=' mx-auto max-w-4xl'>
                    <div className=' lg:translate-x-4 place-items-center rounded-4xl grid grid-cols-4 gap-8'>
                        {industryData.map((item, index) => (
                            <div className={`rounded-full ${index === 2 && "-translate-y-2"} ${index === 3 && "-translate-y-8"} hover:backdrop-blur-md hover:bg-white/50 transition-all duration-300 cursor-pointer shadow-lg bg-white`} key={index}>
                                <Image alt='It-sj group Industry Icons' src={item} className=' lg:p-2 lg:w-28 lg:h-28' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <svg 
                className='absolute text-main -mt-14 lg:-mt-32 bottom w-full h-24 sm:h-52'
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320"
            >
                <path 
                    fill="currentColor" 
                    d="M0,192L60,208C120,224,240,256,360,272C480,288,600,288,720,272C840,256,960,224,1080,208C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                >
                </path>
            </svg>
            <Image alt='ItSJ-G Circuit Icon Image' src={CircuitL} className=' absolute w-[400px] translate-y-4 translate-x-8 -left-24' />
        </div>
    )
}
