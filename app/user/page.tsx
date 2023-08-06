"use client";

import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Page = () => {
  const { data: session } = useSession();
  const [isPost, setIsPost] = useState(true); // true => show posts, false => replies
  // console.log(session)

  return (
    <div className="p-3 pt-5">
      <div className="user w-full h-28 p-1 relative space-y-2">
        <p className="text-2xl font-semibold">{session?.user?.name}</p>
        <p className="">some bio</p>
        <p className="text-sm font-light">42 followers</p>
        <img
          className="absolute top-2 right-2 rounded-full w-14 h-14"
          src={session?.user?.image!}
          alt=""
        />
        <div className="idk w-full h-14 mt-6 flex justify-around items-center">
          <button className="border-[1px] border-[#3d3c3c] flex justify-center items-center w-56 h-9 rounded-md hover:bg-[#222222]">
            Edit profile
          </button>
          <button className="border-[1px] border-[#3d3c3c] flex justify-center items-center w-56 h-9 rounded-md hover:bg-[#222222]">
            Share profile
          </button>
        </div>
        <div className="main w-full">
          <div className="choice w-full h-12 flex justify-around items-center">
            <button
              className={`${
                !isPost ? "text-gray-400" : "border-b-[1px]"
              } font-semibold w-1/2 h-full`}
              onClick={() => {
                !isPost && setIsPost(true);
              }}
            >
              posts
            </button>
            <button
              className={`${
                isPost ? "text-gray-400" : "border-b-[1px]"
              } font-semibold w-1/2 h-full`}
              onClick={() => {
                isPost && setIsPost(false);
              }}
            >
              Replies
            </button>
          </div>
        </div>
      </div>
      <div className="footer fixed bottom-0 left-0">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
