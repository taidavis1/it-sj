"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveLang } from '@/redux/ActiveLangSlice';
import { useState } from 'react';

const FloatBtn = () => {

    const dispatch = useDispatch();
    const activeLang = useSelector((state) => state.activeLang.value);
    const [selectedValue, setSelectedValue] = useState(activeLang);
    const LangSwitch = (e) => {
        setSelectedValue(e.target.value);
        dispatch(setActiveLang(e.target.value));
    };

    return (
        <div className=' fixed bottom-4 lg:bottom-12 lg:right-10 right-4 z-50'>
            <select onChange={LangSwitch} value={selectedValue} className="cursor-pointer text-base lg:text-lg appearance-none rounded-full bg-main/60 backdrop-blur-lg shadow-lg text-center focus:outline-none text-white lg:w-12 lg:h-12 w-10 h-10 relative">
                <option value="en">EN</option>
                <option value="jpn">JP</option>
            </select>
        </div>
    )
}

export default FloatBtn
