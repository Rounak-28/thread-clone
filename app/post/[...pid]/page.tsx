import Post from "@/components/Post";
import Replies from "@/components/Replies";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsChat, BsHeart } from "react-icons/bs";

export const revalidate = 0;

export default async function Page({ params }: { params: { pid: string } }) {
  const pid = params.pid;

  const { data: post, error } = await supabase
    .from("posts")
    .select()
    .eq("id", pid)
    .single();

  return (
    <div className="min-h-screen w-screen bg-[#101010] text-white">
      <Link href="/" className="sticky top-0 w-screen backdrop-blur-sm">
        <div className="back flex h-11 items-center space-x-3 border-b-[1px] border-[#3b3b3b] px-3">
          <BiArrowBack className="text-3xl" />
          <p className="text-xl font-bold">Thread</p>
        </div>
      </Link>
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
      <div>
        {/* @ts-ignore */}
        <Replies id={pid} />
      </div>
    </div>
  );
}
