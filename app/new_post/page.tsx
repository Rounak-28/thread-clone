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
            className="w-full h-16 bg-inherit pt-1 mt-1"
          ></textarea>
        </div>
      </div>
      <div className="f bg-red-400 h-16 w-screen absolute left-0 bottom-0"></div>
    </>
  );
};

export default page;
