"use client";
import React from 'react';
import Link from 'next/link';

const FloatBtn = () => {
    return (
        <div className=' fixed bottom-4 lg:bottom-12 lg:right-10 right-4 z-50'>
            <select className="cursor-pointer appearance-none rounded-full bg-main/60 backdrop-blur-lg shadow-lg focus:outline-none text-white p-4 relative">
                <option data-content='<span class="fi fis fi-jp"></span>' value="en"></option>
                <option value="jpn"></option>
            </select>
        </div>
    )
}

export default FloatBtn
