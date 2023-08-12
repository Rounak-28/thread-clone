"use client";

import Footer from "@/components/Footer";
import Post from "@/components/Post";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { username: string } }) {
  const [data, setData]: any = useState();
  const [isPost, setIsPost] = useState(true); // true => show posts, false => replies

  const fixed_username = decodeURIComponent(params.username);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: posts, error } = await supabase
          .from("posts")
          .select()
          .eq("user_name", fixed_username)
          .is("reply_to", null)
          .order("created_at", { ascending: false });
        if (error) throw error;
        setData(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>loading...</div>;

  return (
    <div className="pt-3">
      <div className="user w-full h-28 p-1 px-2 relative space-y-2">
        <p className="text-2xl font-semibold">{fixed_username}</p>
        <p className="">some bio</p>
        <p className="text-sm font-light">42 followers</p>
        <img
          className="absolute top-2 right-2 rounded-full w-14 h-14"
          src={data![0]?.poster_dp}
          alt=""
        />
      </div>
      <div className="choice w-full h-12 flex justify-around items-center">
        <button
          className={`${
            !isPost ? "text-gray-500 dark:text-gray-400" : "border-b-[1px]"
          } font-semibold w-1/2 h-full`}
          onClick={() => {
            !isPost && setIsPost(true);
          }}
        >
          posts
        </button>
        <button
          className={`${
            isPost ? "text-gray-500 dark:text-gray-400" : "border-b-[1px]"
          } font-semibold w-1/2 h-full`}
          onClick={() => {
            isPost && setIsPost(false);
          }}
        >
          Replies
        </button>
      </div>
      <div className="posts mb-14">
        {data?.map((post: any) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
      <div className="footer fixed bottom-0 left-0 bg-white dark:bg-[#0a0a0a]">
        <Footer />
      </div>
    </div>
  );
}
