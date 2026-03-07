import React from 'react';
import ServicesData from './ServicesData';
import Link from 'next/link';
import { GrFormNext } from 'react-icons/gr';

const Footer = () => {

    const NavData = [
        {tabName: "Home", link: "/"},
        {tabName: "Services"},
        {tabName: "Contact"},
        {tabName: "Resources"}
    ];

    return (
        <div className='pb-8 bg-main'>
            <div className=' grid lg:grid-cols-2 lg:h-[400px]'>
                <div className='border-r border-b border-white'>
                    <div className='mx-20'></div>
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
                        <Link className='hover:underline font-bold ' href='/'>ITSJ-G </Link>
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
