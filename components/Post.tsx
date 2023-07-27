"use client";

import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { BsChat, BsHeart, BsHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useSession } from "next-auth/react";

const Post = (props: any) => {
  // console.log(props)
  const { data: session } = useSession();

  const [isLiked, setIsLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(0);

  const relativeTime = formatDistanceToNow(new Date(props?.created_at), {
    addSuffix: true,
  }).replace("about", "");

  const handleLike = async () => {
    setIsLiked(!isLiked);

    if (isLiked) {
      setNumLikes(numLikes - 1);
      const { error } = await supabase
        .from("posts")
        .update({
          like_usernames: props?.like_usernames.filter(
            (u_name: any) => u_name != session?.user?.name
          ),
        })
        .eq("id", props.id);
    } else {
      setNumLikes(numLikes + 1);
      const { error } = await supabase
        .from("posts")
        .update({
          like_usernames: [...props?.like_usernames, session?.user?.name],
        })
        .eq("id", props.id);
    }
  };
  
  useEffect(() => {
    setNumLikes(props?.like_usernames?.length);
    setIsLiked(props?.like_usernames.includes(session?.user?.name));
  }, [session]);

  return (
    <>
      <div className="w-full h-11 flex items-center relative px-2">
        <img src={props?.poster_dp} className="h-8 w-8 rounded-full mr-2" />
        <span className="text-sm font-semibold">{props?.user_name}</span>
        <span className="absolute right-2 text-sm">{relativeTime}</span>
      </div>
      <Link href={`/post/${props.id}`}>
        <div className="w-full min-h-[50px] px-4 flex items-center">
          <p className="text-sm ">{props?.content_text}</p>
        </div>
      </Link>
      <div className="w-full h-9 px-4 flex items-center space-x-4 text-xl">
        <div onClick={handleLike}>
          {isLiked ? <BsHeartFill className="fill-red-500" /> : <BsHeart />}
        </div>

        <BsChat />
      </div>
      <div className="top w-full h-9">
        <p className="px-4 py-1 text-sm text-gray-400 font-light border-b-[1px] border-[#3b3b3b]">
          {numLikes} likes • 42 replies
        </p>
      </div>
    </>
  );
};

export default Post;
