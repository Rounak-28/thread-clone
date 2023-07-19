"use client";

import React, { useEffect, useState } from "react";
import Login_btn from "./Login_btn";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // const newScrollHeight = Math.ceil(window.pageYOffset / 5) *5;
      // if(newScrollHeight != window.pageYOffset){
      if (window.pageYOffset < 10) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-14 w-screen flex items-center relative">
      <div
        className={`bg-white w-9 h-6 mx-auto rounded-full transition-transform
        ${isHeaderVisible ? "header" : "header--hidden"}`}
      ></div>
      <div className="bg-blue-600 w-24 h-10 absolute right-2 rounded-md">
        <Login_btn />
      </div>
    </div>
  );
};

export default Header;
