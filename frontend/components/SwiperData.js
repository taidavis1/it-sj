"use client";

import React from 'react';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Grid} from 'swiper/modules';
import { MdKeyboardArrowRight , MdKeyboardArrowLeft} from "react-icons/md";



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const SwiperData = ({data, name}) => {

    const swiperRef = React.useRef(null);

    // const PrevArrow = () => (
    //     <div onClick={() => swiperRef.current?.slidePrev()} className={`custom-swiper-button-prev transition duration-300 ease-in-out absolute bg-main/60 backdrop-blur-lg top-1/3 left-2 lg:left-4 z-10 rounded-full cursor-pointer`}>
    //         <MdKeyboardArrowLeft className={`lg:w-12 lg:h-12 p-1 w-10 h-10 text-white`} />
    //     </div>
    // );

    // const NextArrow = () => (
    //     <div onClick={() => swiperRef.current?.slideNext()} className={`custom-swiper-button-next transition duration-300 ease-in-out absolute top-1/3 right-2 lg:right-4 bg-main/60 backdrop-blur-lg z-10 rounded-full cursor-pointer`}>
    //         <MdKeyboardArrowRight className={`lg:w-12 lg:h-12 p-1 w-10 h-10 text-white`} />
    //     </div>
    // );

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            grid={{
                rows: 4,
            }}
            speed={3000}
            modules={[Grid]}
            className='h-[1200px] w-full'
        >
            {data.map((item, index) => (
                <SwiperSlide key={index} className=' shadow-lg lg:mb-6 hover:opacity-55 transition-all ease-in-out duration-500 rounded-2xl'>
                    <div className="rounded-2xl cursor-pointer">
                        <Image src={item.img} alt={item?.name} className=" w-full h-full rounded-t-2xl object-cover" />
                        <div className=" space-y-4 px-4 py-6">
                            <h3 className=" text-main text-2xl font-headerFont font-bold">
                                {item?.name}
                            </h3>
                            <p className="">
                                {item?.desc}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

export default SwiperData
