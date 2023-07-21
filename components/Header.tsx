"use client";

import React, { useEffect, useState } from "react";
import Login_btn from "./Login_btn";
import Profile from "./Profile";
import { useSession } from "next-auth/react";
import ProfileModal from "./ProfileModal";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isProfileModelOpen, setIsProfileModelOpen] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 10) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
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
      <div onClick={() => setIsProfileModelOpen(true)}>
        {session && <Profile session={session} />}
      </div>
      <Login_btn />
      {isProfileModelOpen && (
        <ProfileModal setIsProfileModelOpen={setIsProfileModelOpen} />
      )}
    </div>
  );
};

export default Header;
