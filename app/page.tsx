import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Post from "@/components/Post";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function Page() {
  // const { error } = await supabase
  // .from('posts')
  // .delete()
  // .eq("user_name", "rounak_28");

  // const dp = "https://avatars.githubusercontent.com/u/95576871";

  // const { error } = await supabase.from("posts").insert([
  //   {
  //     content_text: "comment 1 to post 1",
  //     reply_to: "3d3875b2-6874-4203-885f-b84961206c24",
  //     user_name: "rounak_28",
  //     poster_dp: dp,
  //   }
  // ]);

  const { data: posts, error } = await supabase
    .from("posts")
    .select()
    .is("reply_to", null)
    .order("created_at", { ascending: false });

  // console.log(posts);
  // if (error) {
  //   console.log(error);
  // }

  return (
    <main className="min-h-screen w-screen">
      <div className="header sticky top-0 w-14">
        <Header />
      </div>
      <div className="posts mb-8">
        {posts?.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
      <div className="footer fixed bottom-0">
        <Footer />
      </div>
    </main>
  );
}
