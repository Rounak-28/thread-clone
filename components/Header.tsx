"use client";

import React, { useState } from "react";
import Login_btn from "./Login_btn";
import Profile from "./Profile";
import { useSession } from "next-auth/react";
import ProfileModal from "./ProfileModal";
import { PiGraphLight } from "react-icons/pi";

const Header = () => {
  const [isProfileModelOpen, setIsProfileModelOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="h-14 w-screen flex items-center relative">
      <PiGraphLight className="w-9 h-9 mx-auto rounded-full" />
      {session ? (
        <Profile
          session={session}
          setIsProfileModelOpen={setIsProfileModelOpen}
        />
      ) : (
        <Login_btn />
      )}
      {isProfileModelOpen && (
        <ProfileModal setIsProfileModelOpen={setIsProfileModelOpen} />
      )}
    </div>
  );
};

export default Header;
