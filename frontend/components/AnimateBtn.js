import React from 'react';
import Link from 'next/link';
import { GrFormNext } from 'react-icons/gr';



export const AnimateBtn = ({hrefLink, text, name}) => {
    return (
        <Link href={hrefLink} className={` w-[185px] rounded-full text-center ${text === "Request A Quote" || name === "jpn"? "bg-linear-to-r to-[#007ec7] from-[#000d68]" : "border border-white"}`}>
            <div className={`relative rounded-full w-full ${text === "Request A Quote" ? "h-[60px]" : "h-[56px]"} overflow-hidden group text-white flex justify-center items-center`}>
                <span className={`w-56 h-56 rounded-full ${(text === "Request A Quote" || name === "jpn") && "bg-linear-to-r to-[#007ec7] from-[#000d68]"} bg-white rotate-[-40deg] absolute bottom-0 left-0 -translate-x-full ease-in-out duration-800 transition-all translate-y-full group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0`}></span>
                <span className="group-hover:opacity-0 group-hover:-translate-x-full text-lg absolute translate-x-0 transition-all duration-500">
                    {text}
                </span>
                <GrFormNext className={`group-hover:translate-x-0 group-hover:opacity-100 absolute translate-x-full opacity-0 w-8 h-8 ${text === "Request A Quote" || name === "jpn"? "text-white" : "text-main"} transition-all duration-500`} />
            </div>
        </Link>
    )
}
