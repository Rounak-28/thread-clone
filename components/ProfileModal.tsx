"use client";

import { signOut } from "next-auth/react";

const ProfileModal = ({ setIsProfileModelOpen }: any) => {

  return (
    <div className="w-screen h-screen absolute top-0">
      <div className="flex justify-center items-center w-full h-full backdrop-blur-sm">
        <div className="w-80 border-[1px] bg-[#282727] flex flex-col justify-center rounded-xl overflow-hidden">
          <button
            className="text-red-700 font-semibold hover:bg-[#393838] w-full h-16"
            onClick={() => signOut()}
          >
            Log out
          </button>
          <hr />
          <button className=" font-semibold hover:bg-[#393838] w-full h-16"
          onClick={() => setIsProfileModelOpen(false)}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
