import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar text="New Thread" />
      <div className="h-28 flex pt-3 px-1">
        <div className="left w-[12%] flex justify-center pt-4">
          <div className="dp w-9 h-9 bg-white rounded-full"></div>
        </div>
        <div className="right w-[88%] px-1 pt-2">
          <p className="text-sm font-semibold">rounak_28</p>
          <textarea
            name=""
            id=""
            placeholder="write a post..."
            className="w-full h-16 bg-inherit pt-1 mt-1 outline-blue-400"
          ></textarea>
        </div>
      </div>
      <button className="f w-24 h-11 fixed top-0 right-0 flex justify-center items-center text-blue-400 text-xl font-semibold">
        Post
      </button>
    </>
  );
};

export default page;
