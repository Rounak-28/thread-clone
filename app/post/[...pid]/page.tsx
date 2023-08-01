import Replies from "@/components/Replies";
import { supabase } from "@/lib/supabase";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { formatDistanceToNow } from "date-fns";
import ReplyBox from "@/components/ReplyBox";
import LikesAndCommentsCounts from "@/components/LikesAndCommentsCounts";
import Loading3Dots from "@/components/Loading3Dots";

export const revalidate = 0;

export default async function Page({ params }: { params: { pid: string } }) {
  const pid = params.pid;

  const { data: post, error } = await supabase
    .from("posts")
    .select()
    .eq("id", pid)
    .single();

  const relativeTime = formatDistanceToNow(new Date(post?.created_at), {
    addSuffix: true,
  }).replace("about", "");

  return (
    <div className="min-h-screen w-screen">
      <Navbar text="Thread" />
      <div className="px-3 py-2">
        <div className="profile flex items-center space-x-3 py-2">
          <img
            src={post?.poster_dp}
            className="img h-8 w-8 rounded-full"
            alt=""
          />
          <div className="w-screen flex justify-between">
            <p className="text-sm font-semibold">{post?.user_name}</p>
            <p className="text-sm">{relativeTime}</p>
          </div>
        </div>
        <div className="pt-2 text-sm">{post?.content_text}</div>
        <LikesAndCommentsCounts {...post} />
      </div>
      <Suspense fallback={<Loading3Dots />}>
        {/* @ts-ignore */}
        <Replies id={pid} />
      </Suspense>
      <ReplyBox id={pid} />
    </div>
  );
}
