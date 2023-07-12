import { supabase } from "@/lib/supabase";
import Post from "./Post";

const Replies = async ({ id }: any) => {
  const { data: single_somment } = await supabase
    .from("posts")
    .select()
    .eq("id", id);

//   console.log(single_somment);

  if (!single_somment) {
    return <></>;
  }

  return <Post id={id} text={single_somment[0].text_content} />;
};

export default Replies;
