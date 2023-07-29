"use client";

import { supabase } from "@/lib/supabase";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { BsChat, BsHeart, BsHeartFill } from "react-icons/bs";

const LikesAndCommentsCounts = (props: any) => {
  const [isLiked, setIsLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(0);

  const { data: session } = useSession();

  const handleLike = async () => {
    setIsLiked(!isLiked);

    isLiked ? setNumLikes(numLikes - 1) : setNumLikes(numLikes + 1);

    const new_like_usernames = isLiked
      ? props?.like_usernames.filter(
          (u_name: any) => u_name != session?.user?.name
        )
      : [...props?.like_usernames, session?.user?.name];

    const { error } = await supabase
      .from("posts")
      .update({
        like_usernames: new_like_usernames,
      })
      .eq("id", props.id);
  };

  useEffect(() => {
    setNumLikes(props?.like_usernames?.length);
    setIsLiked(props?.like_usernames.includes(session?.user?.name));
  }, [session]);

  return (
    <>
      <div className="w-full h-9 flex items-center space-x-4 text-xl">
        <div onClick={handleLike}>
          {isLiked ? <BsHeartFill className="fill-red-500" /> : <BsHeart />}
        </div>

        <BsChat />
      </div>
      <div className="top w-full h-9">
        <p className="py-1 text-sm text-gray-400 font-light border-b-[1px] border-[#3b3b3b]">
          {props?.comment_count} replies • {numLikes} likes
        </p>
      </div>
    </>
  );
};

export default LikesAndCommentsCounts;
