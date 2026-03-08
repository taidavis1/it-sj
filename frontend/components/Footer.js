import React from 'react';
import ServicesData from './ServicesData';
import Link from 'next/link';
import { GrFormNext} from 'react-icons/gr';
import {IoPhonePortraitOutline, IoLocationOutline, IoMailOutline} from "react-icons/io5";

const Footer = () => {

    const NavData = [
        {tabName: "Home", link: "/"},
        {tabName: "Services"},
        {tabName: "Contact"},
        {tabName: "Resources"}
    ];

    return (
        <div className='pb-8 bg-main text-white'>
            <div className=' grid lg:grid-cols-2'>
                <div className='lg:border-r lg:pt-12 border-b border-white pb-12'>
                    <div className='grid lg:px-14 px-8 items-center pt-12 lg:grid-cols-2 gap-12'>
                        <div className="">
                            <h1 className=" text-white font-bold font-headerFont text-xl lg:text-2xl">
                                Advanced PCB Manufacturing Experts
                            </h1>
                            <p className=" mt-4 text-sm">
                                Delivering reliable PCB design, fabrication, and assembly in San Jose, supporting Silicon Valley engineers from prototype to scalable production.                            
                            </p>
                            <div className=' mt-8'>
                                <Link className=' hover:opacity-50 flex items-center space-x-1' href={"tel:4087057113"} target='__blank'>
                                    <IoPhonePortraitOutline className='w-6 h-6 text-white' />
                                    <span className=''>
                                        (408) 705-7113
                                    </span>
                                </Link>
                            </div>
                            <div className=' mt-6'>
                                <Link className=' flex hover:opacity-50 items-center space-x-1' href={"mailto:chau.tran@itsj-group.com"} target='__blank'>
                                    <IoMailOutline className='w-6 h-6 text-white' />
                                    <span className=''>
                                        chau.tran@itsj-group.com
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className=" flex flex-col">
                            <div className='space-y-2'>
                                <h3 className="font-headerFont font-bold">
                                    U.S. Headquater
                                </h3>
                                <Link href={""} className="hover:opacity-50 transition-all duration-300">
                                    <span className=' text-lg'>
                                        148 E. Brokaw Rd. San Jose, CA 95112
                                    </span>
                                </Link>
                            </div>
                            <div className='space-y-2 mt-8'>
                                <h3 className=" font-headerFont font-bold">
                                    VietNam Office #1
                                </h3>
                                <Link href={""} className="hover:opacity-50 transition-all duration-300">
                                    <span className=' text-base'>
                                        4th & 5th Floor, Kico Building, 46 Bach Dang Street, Ward 02, Tan Binh District, HCMC, Vietnam
                                    </span>
                                </Link>
                            </div>
                            <div className='space-y-2 mt-8'>
                                <h3 className="font-headerFont font-bold">
                                    VietNam Office #2
                                </h3>
                                <Link href={""} className="hover:opacity-50 transition-all duration-300">
                                    <span className=' text-base'>
                                        3rd Floor, Sacom Chip Sang Building, Hi- Tech Park, Thu Duc city, HCMC, Vietnam
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:grid-cols-3 place-content-center lg:pt-0 pt-8 px-8 lg:px-28 grid-cols-2 grid border-b border-white'>
                    <div className=''>
                        {NavData.map((item, index) => (
                            <div key={index} className='text-white group lg:text-base mb-5'>
                                <Link href={item.link || ""} className='flex items-center gap-x-[1px]'>
                                    <span className=' group-hover:opacity-50 lg:text-base text-sm transition-all duration-300'>
                                        {item?.tabName}    
                                    </span> 
                                    <GrFormNext className='group-hover:translate-x-1 -translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className=''>
                        {ServicesData.map((item, index) => (
                            <div key={index} className='text-white group lg:text-base mb-5'>
                                <Link href={""} className='flex items-center gap-x-[1px]'>
                                    <span className='lg:text-base text-sm group-hover:opacity-50 transition-all duration-300'>
                                        {item?.name}    
                                    </span> 
                                    <GrFormNext className='group-hover:translate-x-1 -translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className=' lg:mx-12'>
                        <div className='text-white group lg:text-base mb-5'>
                            <Link href={""} className='flex items-center gap-x-[1px]'>
                                <span className=' text-sm group-hover:opacity-50 transition-all duration-300'>
                                    Career  
                                </span> 
                                <GrFormNext className='group-hover:translate-x-1 -translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                            </Link>
                        </div>
                        <div className='text-white group lg:text-base mb-5'>
                            <Link href={""} className='flex items-center gap-x-[1px]'>
                                <span className=' text-sm group-hover:opacity-50 transition-all duration-300'>
                                    Site Map  
                                </span> 
                                <GrFormNext className='group-hover:translate-x-1 -translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                            </Link>
                        </div>
                        <div className='text-white group lg:text-base mb-5'>
                            <Link href={""} className='flex items-center gap-x-[1px]'>
                                <span className=' text-sm group-hover:opacity-50 transition-all duration-300'>
                                    Follow Us
                                </span> 
                                <GrFormNext className='group-hover:translate-x-1 -translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' lg:mx-20 mt-8 text-white'>
                <div className=' flex lg:flex-row flex-col lg:items-center lg:justify-between'>
                    <div className='inline-flex justify-center lg:justify-start lg:order-1 order-2 text-sm lg:text-base text-white space-x-1'>
                        <span>
                            © {new Date().getFullYear()}
                        </span>
                        <Link className='hover:underline font-bold ' href='/'>SCS </Link>
                        <span>All rights reserved.</span>
                    </div>
                    <div className='lg:text-base lg:order-2 order-1 text-sm lg:justify-start justify-center inline-flex lg:items-start text-white space-x-4'>
                        <span>
                            CEO & President: Mr. Chau Tran
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
