"use client";

import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [text, setText] = useState("");

  const [isPosting, setIsPosting] = useState(false);

  const handleCommentChange = (e: any) => {
    setText(e.target.value);
  };

  const post = async () => {
    setIsPosting(true);
    const { error } = await supabase.from("posts").insert({
      content_text: text,
      user_name: "rounak_28",
      poster_dp: "https://avatars.githubusercontent.com/u/95576871",
    });
    if (error) {
      console.log(error);
    } else {
      console.log("post success!");
      router.push("/");
      router.refresh();
    }
  };

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
            value={text}
            onChange={handleCommentChange}
            placeholder="write a post..."
            className="w-full h-16 bg-inherit pt-1 mt-1 outline-blue-400"
          ></textarea>
        </div>
      </div>
      <button
        className={`f w-24 h-11 fixed top-0 right-0 flex justify-center items-center  text-xl font-semibold ${
          isPosting ? "text-blue-300" : "text-blue-400"
        }`}
        onClick={post}
        disabled={isPosting}
      >
        {isPosting ? "Posting..." : "Post"}
      </button>
    </>
  );
};

export default Page;
