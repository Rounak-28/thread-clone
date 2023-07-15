import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Post from "@/components/Post";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export const revalidate = 0;

export default async function Page() {
  // const { error } = await supabase
  // .from('posts')
  // .delete()
  // .eq("user_name", "rounak_28");

  // const dp = "https://avatars.githubusercontent.com/u/95576871";

  // const { error } = await supabase.from("posts").insert([
  //   { content_text: "feed post 1", user_name: "rounak_28", poster_dp: dp },
  //   { content_text: "feed post 2", user_name: "rounak_28", poster_dp: dp },
  //   { content_text: "feed post 3", user_name: "rounak_28", poster_dp: dp },
  // ]);

  // const { error } = await supabase.from("posts").insert([
  //   {
  //     content_text: "comment 1 to post 1",
  //     reply_to: "3d3875b2-6874-4203-885f-b84961206c24",
  //     user_name: "rounak_28",
  //     poster_dp: dp,
  //   },
  //   {
  //     content_text: "comment 2 to post 1",
  //     reply_to: "3d3875b2-6874-4203-885f-b84961206c24",
  //     user_name: "rounak_28",
  //     poster_dp: dp,
  //   },
  //   {
  //     content_text: "comment 3 to post 1",
  //     reply_to: "3d3875b2-6874-4203-885f-b84961206c24",
  //     user_name: "rounak_28",
  //     poster_dp: dp,
  //   },
  //   {
  //     content_text: "comment 1 to post 2",
  //     reply_to: "ce7ce3df-ccfd-4b93-93bc-e171a401f045",
  //     user_name: "rounak_28",
  //     poster_dp: dp,
  //   },
  //   {
  //     content_text: "comment 2 to post 2",
  //     reply_to: "ce7ce3df-ccfd-4b93-93bc-e171a401f045",
  //     user_name: "rounak_28",
  //     poster_dp: dp,
  //   },
  // ]);

  const { data: posts, error } = await supabase
    .from("posts")
    .select()
    .is("reply_to", null);

  // console.log(posts);
  // if (error) {
  //   console.log(error);
  // }

  return (
    <main className="min-h-screen w-screen">
      <div className="header sticky top-0 w-14">
        <Header />
      </div>
      <div className="posts">
        {posts?.map((post) => (
          // <Post id={post.id} text={post.text_content} key={post.id} />
          <Post {...post} key={post.id} />
        ))}
        {/* <Post id="0" />
        <Post id="1" />
        <Post id="2" />
        <Post id="3" />
        <Post id="4" />
        <Post id="5" />
        <Post id="6" />
        <Post id="7" />
        <Post id="8" />
        <Post id="9" />
        <Post id="10" /> */}
      </div>
      <div className="footer fixed bottom-0">
        <Footer />
      </div>
    </main>
  );
}
