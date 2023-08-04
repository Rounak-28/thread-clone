import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Post from "@/components/Post";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function Page() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select()
    .is("reply_to", null)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen w-screen">
      <div className="header sticky top-0 bg-dark z-50">
        <Header />
      </div>
      <div className="posts mb-14">
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
