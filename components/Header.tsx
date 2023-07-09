"use client"

import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
        // const newScrollHeight = Math.ceil(window.pageYOffset / 5) *5;
        // if(newScrollHeight != window.pageYOffset){    
            if(window.pageYOffset < 10){
                setIsHeaderVisible(true)
            }
            else{
                setIsHeaderVisible(false)
            }
        // }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`${isHeaderVisible ? "header" : "header--hidden"}  h-14 w-screen flex justify-center items-center transition-transform`}>
        <div className="bg-white w-9 h-6 rounded-full"></div>
    </div>
  )
}

export default Header