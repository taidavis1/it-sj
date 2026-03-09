"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from "@/public/Logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { setActiveTab } from '@/redux/ActiveTabSlice';

import { GrFormNext} from 'react-icons/gr';
import { AnimateBtn } from './AnimateBtn';

import { HiBars3BottomLeft, HiMiniXMark } from "react-icons/hi2";


export const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const [subMenu, setSubMenu] = React.useState(false);

    const activeTab = useSelector((state) => state.activeTab.value);

    const dispatch = useDispatch();

    const pathNames = usePathname();

    const isActive = React.useCallback(
        (tabNames) => activeTab === tabNames ? "border-b border-white" : " t-underline hover:opacity-50",
        [activeTab]
    );

    React.useEffect(() => {
        dispatch(setActiveTab(pathNames));
    }, [pathNames, dispatch]);

    const handleHover = (id) => {
		setSubMenu((prevSub) => ({
			[id]: !prevSub[id],
		}));
	};

    const NavData = [
        {tabName: "Home", link: "/"},
        {tabName: "Services", subMenu: [
            {name: "PCB Design"},
            {name: "PCB Fabrication"},
            {name: "PCB Assembly"},
            {name: "PCB Prototyping"},
            {name: "Turnkey PCB Services"},
            {name: "SMT Assembly"},
            {name: "Cable Assembly"},
        ]},
        {tabName: "Contact"},
        {tabName: "Resources"}
    ];

    return (
        <div className='fixed top-0 w-full z-60'>
            <nav className={``}>
                <div className=' grid grid-cols-2 lg:grid-cols-3 items-center'>
                    <Image className={`w-44 h-32 brightness-105 mx-4 lg:mx-16 my-4`} src={Logo} alt='It-sj group Logo' />
                    <div className='lg:bg-main/60 flex lg:justify-center justify-end lg:mx-0 mx-4 lg:backdrop-blur-lg lg:rounded-full'>
                        <div className={`lg:hidden w-12 h-12 ${isOpen? 'opacity-0' : 'opacity-100'} bg-main/60 backdrop-blur-lg flex items-center justify-center rounded-full`}>
                            <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen? 'pointer-events-none' : ''} cursor-pointer`}>
                                <HiBars3BottomLeft className={`text-white w-6 h-6 transition-all duration-500`} />
                            </div>
                        </div>
                        <div className=' hidden lg:flex justify-center items-center text-white font-headerFont font-[500px] tracking-[0.5px] space-x-12'>
                            {NavData.map((item, index) => (
                                item?.subMenu ?
                                    <div className='relative' key={index} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(index)}>
                                        <Link href={""} className={`uppercase ${isActive(item?.link)} group flex items-center space-x-4`}>
                                            {item?.tabName}
                                            <GrFormNext className=' group-hover:rotwate-90 text-lg transition-all duration-500 ease-in-out' />
                                        </Link>
                                        {
                                            <div className={`bg-main/80 border-t rounded-t-2xl backdrop-blur-2xl py-2 transition-all duration-500 ease-in-out w-[250px] ${subMenu[index] ? "translate-y-0 opacity-100" : "opacity-0 sr-only translate-y-4"} px-1 absolute flex flex-col top-6 -translate-x-2`}>
                                                {
                                                    item.subMenu?.map((sub) => (
                                                        <Link key={sub?.name} href={""} className=' text-white py-4 px-2 mt-2 border-l group border-l-transparent hover:border-l-white transition-all duration-500 ease-in-out'>
                                                            <span className=' group-hover:opacity-50'>{sub.name}</span>
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        }
                                    </div>
                                    :
                                    <Link className={`uppercase py-4 ${isActive(item?.link)}`} key={index} href={""}>
                                        {item?.tabName}
                                    </Link>
                            ))}
                        </div>
                    </div>
                    <div className=" hidden lg:flex justify-end mx-16">
                        <AnimateBtn hrefLink={""} text="Request A Quote" />
                    </div>
                </div>
            </nav>
            <div className={`fixed top-0 right-0 w-2/3 h-full text-white lg:hidden ${isOpen? "translate-x-0": " translate-x-full"} transition-all duration-1000 ease-in-out bg-main/60 backdrop-blur-lg`}>
                <div className=' relative'>
                    <HiMiniXMark onClick={() => setIsOpen(!open)} className={` ${isOpen? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} text-white text-3xl transition-all duration-500 ease-in-out absolute top-4 right-2 cursor-pointer`} />
                </div>
                <div className="flex flex-col mt-14 space-y-4 h-full text-white">
                    <div className='flex flex-col space-y-4'>
                        {NavData.map((data, index) => (
                            <React.Fragment key={index}>
                                {
                                    index !== 1 ?
                                        <Link 
                                            key={index}
                                            href={data?.link || ""}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg py-4 transition border-b px-6 duration-500 ease-in-out"
                                        >
                                            {data?.tabName}
                                        </Link>
                                    :
                                    <div key={index} className='text-lg py-4 transition border-b px-4 duration-500 ease-in-out flex items-center justify-between'>
                                        <span className="">
                                            {data?.tabName}
                                        </span>
                                        <GrFormNext onClick={() => handleHover(index)} className={ `w-6 ${subMenu[index] ? 'rotate-0' : 'rotate-90'} ${data?.subMenu?.length > 0 ? 'block': 'hidden'} h-6 transition-all duration-500 ease-in-out`} />
                                    </div>
                                }
                                <div className={` ${!subMenu[index] ? "sr-only" : "text-base duration-800 space-y-2 ease-in-out transition flex flex-col"} px-4`}>
                                    {data.subMenu?.map((sub) => (
                                        <Link 
                                            key={sub?.name} 
                                            href={{pathname: data?.link}} 
                                            onClick={() => setIsOpen(false)}
                                            className=' items-center flex justify-between text-white py-1 space-x-2 transition-all duration-500 ease-in-out'
                                        >
                                            <span>{sub.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};
