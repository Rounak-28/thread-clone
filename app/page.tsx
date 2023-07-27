import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Post from "@/components/Post";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function Page() {
  // const { error } = await supabase
  // .from('posts')
  // .delete()
  // .eq("id", "01f4adf9-f0ae-4c75-a199-f463bd32ece2");


  const { data: posts, error } = await supabase
    .from("posts")
    .select()
    .is("reply_to", null)
    .order("created_at", { ascending: false });

  // console.log(posts);
  // if (error) {
  //   console.log(error);
  // }

  // const { error: err } = await supabase
  // .from('posts')
  // .update({ like_usernames: [] })
  // .eq("user_name", "Rounak Kumbhakar");

  // if(err){
  //   console.log(err)
  // }

  return (
    <main className="min-h-screen w-screen">
      <div className="header sticky top-0 bg-dark">
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
