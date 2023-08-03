"use client";

import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import LikesAndCommentsCounts from "./LikesAndCommentsCounts";

const Post = (props: any) => {
  const relativeTime = formatDistanceToNow(new Date(props?.created_at), {
    addSuffix: true,
  }).replace("about", "");

  const openDeleteEditModal = () => {
    console.log("haha");
  };

  return (
    <div className="px-3">
      <div className="w-full h-11 flex items-center relative">
        <img src={props?.poster_dp} className="h-8 w-8 rounded-full mr-2" />
        <span className="text-sm font-semibold">{props?.user_name}</span>
        <span className="absolute right-10 text-sm">{relativeTime}</span>
        <div
          className="absolute right-2 top-0 text-2xl font-semibold"
          onClick={openDeleteEditModal}
        >
          ...
        </div>
      </div>
      <Link
        href={{
          pathname: `/post/${props.id}`,
          query: {
            created_at: props?.created_at,
            user_name: props?.user_name,
            content_text: props?.content_text,
          },
        }}
      >
        <div className="w-full min-h-[50px] flex items-center">
          <p className="text-sm ">{props?.content_text}</p>
        </div>
      </Link>
      <LikesAndCommentsCounts {...props} />
    </div>
  );
};

export default Post;
