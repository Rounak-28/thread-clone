import { supabase } from "@/lib/supabase";
import Post from "./Post";

const Replies = async ({ id }: {id: string}) => {
  const { data: comments, error } = await supabase
    .from("posts")
    .select()
    .eq("reply_to", id);

  // console.log(comments);

  return (
    <>
      {comments?.map((comment) => (
        <Post {...comment} key={comment.id} />
      ))}
    </>
  );
};

export default Replies;
