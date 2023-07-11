import Link from "next/link";
import React from "react";

const Post = ({ id, text }: { id: string, text: string }) => {
  return (
    <Link href={`post/${id}`}>
      <div className="min-h-[80px] border-b-[1px] border-[#3b3b3b] pb-2">
        <div className="top flex w-full p-2">
          <div className="left w-[10%] pt-2">
            <div className="img h-8 w-8 rounded-full bg-white"></div>
          </div>
          <div className="right w-[90%] pr-2">
            <p className="pb-1 text-sm font-semibold">rounak_28</p>
            <p className="text-sm ">
              {
              text
              }
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
