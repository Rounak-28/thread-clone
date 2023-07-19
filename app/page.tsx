import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Login_btn from "@/components/Login_btn";
import Post from "@/components/Post";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function Page() {
  // const { error } = await supabase
  // .from('posts')
  // .delete()
  // .eq("user_name", "rounak_28");

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
