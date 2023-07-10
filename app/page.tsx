import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Post from '@/components/Post'
import Image from 'next/image'
// import { createClient } from '@supabase/supabase-js'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export default async function Page() {

  const supabase_url: any = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabase_api: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from("posts").select();
  // console.log(posts)
    
    // const { error } = await supabase
    // .from('posts')
    // .delete()
    // .eq('text_content', "jshghjg")

    // let liked_id = { "ids": ["123", "345", "567"] }
    // let reply_id = { "ids": ["12", "34", "56"] }
    // const { data, error } = await supabase
    // .from('posts')
    // .insert([
    //   { 
    //     text_content: "jshghjg",
    //     like_ids: liked_id, 
    //     reply_ids:reply_id 
    //   },
    // ])

    
  return (
    <main className="min-h-screen w-screen bg-[#101010] text-white">
        <div className="header sticky top-0 w-14">
          <Header />
        </div>
        <div className="posts">
        {posts?.map((post) => (
          <Post id={post.id} />
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
        <div className="footer sticky bottom-0">
          <Footer />
        </div>
      </main>
  )
}
