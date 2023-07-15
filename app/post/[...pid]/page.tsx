import Replies from "@/components/Replies";
import { supabase } from "@/lib/supabase";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsHeart } from "react-icons/bs";
import { Suspense } from "react";
import CommentLoading from "@/components/CommentLoading";
import Navbar from "@/components/Navbar";

export const revalidate = 0;

export default async function Page({ params }: { params: { pid: string } }) {
  const pid = params.pid;

  const { data: post, error } = await supabase
    .from("posts")
    .select()
    .eq("id", pid)
    .single();

  // console.log(post)

  return (
    <div className="min-h-screen w-screen">
      <Navbar text="Thread"/>
      <div className="border-b-[1px] border-[#3b3b3b] px-2 py-2">
        <div className="profile flex items-center space-x-3 py-2">
          <img src={post?.poster_dp} className="img h-8 w-8 rounded-full" />
          <span className="text-sm font-semibold">{post?.user_name}</span>
        </div>
        <div className="pt-2 text-sm">{post?.content_text}</div>
        <div className="likeanscomms text-xl flex items-center justify-center h-10 space-x-6">
          <BsHeart />
          <BsChat />
        </div>
      </div>
      <Suspense fallback={<CommentLoading />}>
        {/* @ts-ignore */}
        <Replies id={pid} />
      </Suspense>
    </div>
  );
}
