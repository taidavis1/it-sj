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
import { AnimateBtn } from './AnimateBtn';

import {useSelector } from 'react-redux';

import LangSwitchData from './langSwitch';
export const Carousel = () => {

    const industryData = [
        Icon1,
        Icon2,
        Icon3,
        Icon4
    ];

    const activeLang = useSelector((state) => state.activeLang.value);

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
                {LangSwitchData[activeLang]?.carouselData.map((item) => (
                    <SwiperSlide className=' relative' key={item.id}>
                        {({ isActive }) => (
                            <div className="w-full h-full">
                                <Image loading='lazy' src={item.img} alt={item.title} className={`animate-zoom w-full object-center object-cover h-full`} />
                                <div className='img-test w-full h-full absolute top-0'>
                                    <div className=' lg:px-0 px-2 mt-12 lg:mt-8 mx-auto flex flex-col items-start justify-center max-w-7xl h-full'>
                                        <motion.div 
                                            animate={{y: isActive ? 0 : 100, opacity: isActive ? 1 : 0}}
                                            transition={{duration: 1, ease: "easeInOut" , type: "spring", stiffness: 100}}
                                            className='lg:w-3/4'
                                        >
                                            <h1 className=' text-white font-bold font-headerFont text-2xl lg:text-5xl uppercase'>
                                                {item?.title}
                                            </h1>
                                            <p className=' mt-4 lg:mt-10 text-white text-lg lg:text-2xl'>
                                                {item?.desc}
                                            </p>
                                        </motion.div>
                                        <div className='mt-16 flex items-center space-x-8'>
                                            <AnimateBtn hrefLink={""} text={activeLang === "en"? "Request Quote" : "見積もりを依頼"} />
                                            <Link href={""} className=' py-4 text-white text-lg text-center w-[120px] border-white border-b'>
                                                {activeLang === "en"? "Learn More" : "詳細を見る"}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='w-full z-50 absolute -bottom-12 lg:-bottom-28'>
                <div className=' mx-auto px-4 lg:px-0 lg:max-w-4xl'>
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
            <Image alt='SSC PCB Engineering Services & Manufacturing Circuit Icon Image' src={CircuitL} className=' absolute w-64 lg:w-[400px] -translate-y-5 lg:translate-y-4 translate-x-8 -scale-x-100 lg:scale-x-100 -right-12 lg:-left-24' />
        </div>
    )
}
