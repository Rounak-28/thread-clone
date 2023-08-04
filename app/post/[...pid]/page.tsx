import Replies from "@/components/Replies";
import { supabase } from "@/lib/supabase";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ReplyBox from "@/components/ReplyBox";
import LikesAndCommentsCounts from "@/components/LikesAndCommentsCounts";
import Loading3Dots from "@/components/Loading3Dots";
import NameAndDP from "@/components/NameAndDP";

export const revalidate = 0;

export default async function Page({
  params,
  searchParams,
}: {
  params: { pid: string };
  searchParams: any;
}) {
  const pid = params.pid;
  // console.log(searchParams)

  const { data: post, error } = await supabase
    .from("posts")
    .select()
    .eq("id", pid)
    .single();

  return (
    <div className="h-screen w-screen">
      <Navbar text="Thread" />
      <div className="px-3 py-2">
        <NameAndDP {...searchParams} />
        <div className="pt-2 text-sm">{searchParams?.content_text}</div>
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
