"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from "@/public/Logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { setActiveTab } from '@/redux/ActiveTabSlice';

import { GrFormNext} from 'react-icons/gr';


export const Navbar = () => {

    const [Scroll, SetScroll] = React.useState(false);

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

    React.useEffect(() => {
        const Change_color = () => {
            if (window.scrollY >= 10) {
                SetScroll(true);
            }
            else { SetScroll(false); }
        };
        window.addEventListener("scroll", Change_color);
    }, []);

    React.useEffect(() => {
        const Change_color = () => {
            if (window.scrollY >= 10) {
                SetScroll(true);
            }
            else { SetScroll(false); }
        };
        window.addEventListener("scroll", Change_color);
    }, []);

    const handleHover = (id) => {
		setSubMenu((prevSub) => ({
			[id]: !prevSub[id],
		}));
	};

    const NavData = [
        {tabName: "Home", link: "/"},
        {tabName: "Services", subMenu: [
            {name: "PCB Fabrication"},
            {name: "PCB Assembly"},
            {name: "PCB Prototyping"},
            {name: "Turnkey PCB Services"},
            {name: "SMT Assembly"},
        ]},
        {tabName: "Capabilities"},
        {tabName: "Resources"}
    ];

    return (
        <div className=''>
            <nav className={`fixed top-0 w-full z-60`}>
                <div className=' grid grid-cols-2 lg:grid-cols-3 items-center'>
                    <Image className={`w-24 h-24 mx-16 my-4`} src={Logo} alt='It-sj group Logo' />
                    <div className='bg-main/60 backdrop-blur-lg rounded-full'>
                        <div className=' flex justify-center items-center text-white font-headerFont font-[500px] tracking-[0.5px] space-x-12'>
                            {NavData.map((item, index) => (
                                item?.subMenu ?
                                    <div className='relative' key={index} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(index)}>
                                        <Link href={""} className={`uppercase ${isActive(item?.link)} group flex items-center space-x-4`}>
                                            {item?.tabName}
                                            <GrFormNext className=' group-hover:rotate-90 text-lg transition-all duration-500 ease-in-out' />
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
                </div>
            </nav>
        </div>
    )
};
