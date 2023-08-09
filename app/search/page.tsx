"use client";

import Footer from "@/components/Footer";
import Loading3Dots from "@/components/Loading3Dots";
import Post from "@/components/Post";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [matched_data, setMatched_data]: any = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // searchQuery changes when input changes, but searchTerm changes when btnClick is called

  const handleChange = (e: any) => {
    setSearchQuery(e.target.value);
    // console.log('value is:', e.target.value);
  };
  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      btnClick();
    }
  };

  const btnClick = async () => {
    try {
      setIsLoading(true);
      const { data: match_posts, error } = await supabase
        .from("posts")
        .select()
        .textSearch("content_text", searchQuery);
      if (error) throw error;
      setMatched_data(match_posts);
      setSearchTerm(searchQuery);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="sticky top-0 left-0 w-full bg-dark z-50">
        <p className="text-2xl px-2">Search posts</p>
        <div className="w-full h-20 flex justify-evenly items-center py-5">
          <input
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeypress}
            placeholder="search something..."
            className="w-[75%] h-full bg-[#302d2d] focus:bg-[#403c3c] px-2 rounded outline-none"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 w-20 h-10 rounded"
            onClick={btnClick}
          >
            Search
          </button>
        </div>
      </div>
      {matched_data && (
        <p className="px-3 pb-3 text-2xl">
          posts with the search term &quot;
          <span className="font-bold">{searchTerm}</span>&quot;
        </p>
      )}

      {isLoading && <Loading3Dots />}
      <div className="mb-14">
        {matched_data?.map((post: any) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
      <div className="footer fixed bottom-0 left-0">
        <Footer />
      </div>
    </>
  );
};

export default Page;
