"use client";

import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import { AiOutlinePaperClip } from "react-icons/ai";

const Page = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [text, setText] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleCommentChange = (e: any) => {
    setText(e.target.value);
  };

  const post = async () => {
    setIsPosting(true);

    // const fileInput: any = document.getElementById("fileInput");
    // const file = fileInput.files[0];

    const { error } = await supabase.from("posts").insert({
      content_text: text,
      user_name: session?.user?.name,
      poster_dp: session?.user?.image,
      like_usernames: [],
    });
    if (error) {
      console.log(error);
    } else {
      // console.log("post success!");
      router.push("/");
      router.refresh();
    }
  };

  return (
    <>
      <Navbar text="New Thread" />
      <div className="h-28 flex pt-3 px-1">
        <div className="left w-[12%] flex justify-center pt-4">
          <div className="dp w-10 h-10 bg-white rounded-full overflow-hidden">
            <img src={session?.user?.image!} alt="" />
          </div>
        </div>
        <div className="right w-[88%] px-2 pt-3">
          <p className="text-sm font-semibold">{session?.user?.name}</p>
          <textarea
            name=""
            id=""
            value={text}
            onChange={handleCommentChange}
            placeholder="write a post..."
            className="w-full h-12 bg-inherit pt-1 mt-1 outline-blue-400"
          ></textarea>
          {/* <AiOutlinePaperClip  className="text-2xl text-gray-500"/> */}
          {/* <input type="file" name="" id="fileInput" /> */}
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
