"use client";
import React from 'react';
import Link from 'next/link';

const FloatBtn = () => {
    return (
        <div className=' fixed bottom-4 lg:bottom-12 lg:right-10 right-4 z-50'>
            <select className="cursor-pointer text-2xl lg:text-4xl appearance-none rounded-full bg-main/60 backdrop-blur-lg shadow-lg text-center focus:outline-none text-white lg:w-16 lg:h-16 w-12 h-12 relative">
                <option value="en">🇺🇸</option>
                <option value="jpn">🇯🇵</option>
            </select>
        </div>
    )
}

export default FloatBtn
