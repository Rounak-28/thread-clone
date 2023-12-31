"use client";

import { supabase } from "@/lib/supabase";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const post_reply = async (
  text: string,
  id: string,
  session: any,
  setFlag: any
) => {
  const { error } = await supabase.from("posts").insert([
    {
      content_text: text,
      reply_to: id,
      user_name: session?.user?.name,
      poster_dp: session?.user?.image,
      like_usernames: [],
    },
  ]);
  const { data: d_, error: e_ } = await supabase.rpc(
    "increment_comment_count",
    { x: 1, post_id: id }
  );
  // +1 when comment added, -1 when a comment deleted(delete feature not added yet)

  // ---------------sql query--------------
  //   create function increment_comment_count (x int, post_id uuid)
  // returns void as
  // $$
  //   update posts
  //   set comment_count = comment_count + x
  //   where id = post_id
  // $$
  // language sql volatile;
  // -----------------------------------------

  if (error) {
    console.log(error);
  } else {
    setFlag(true);
  }
};

const ReplyBox = ({ id }: { id: string }) => {
  const router = useRouter();

  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState("");
  const { data: session } = useSession();

  const handleChange = (e: any) => {
    setMessage(e.target.value);
    // console.log('value is:', event.target.value);
  };

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      post_reply(message, id[0], session, setFlag);
    }
  };

  useEffect(() => {
    router.refresh();
    setFlag(false);
    setMessage("");
  }, [flag]);

  return (
    <div className="fixed bottom-0 flex justify-center items-center w-screen h-20 space-x-2">
      {session ? (
        <>
          <input
            type="text"
            placeholder="Reply to ..."
            className="w-[80%] px-4 text-sm placeholder-gray-600 dark:placeholder-gray-300 rounded-full h-12 bg-gray-300 dark:bg-[#2c2c2d] outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-100"
            onChange={handleChange}
            onKeyDown={handleKeypress}
            value={message}
          />
          <button
            className="bg-blue-400 hover:bg-blue-500 rounded dark:bg-blue-500 dark:hover:bg-blue-600 w-16 h-10 flex justify-center items-center"
            onClick={() => post_reply(message, id[0], session, setFlag)}
          >
            post
          </button>
        </>
      ) : (
        <button
          className="flex justify-center items-center bg-blue-500 dark:bg-blue-600 w-48 h-10 rounded-md"
          onClick={() => signIn()}
        >
          Log In to comment
        </button>
      )}
    </div>
  );
};

export default ReplyBox;
