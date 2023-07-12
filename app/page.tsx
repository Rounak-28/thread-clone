import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Post from "@/components/Post";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default async function Page() {
  
  const { data: posts } = await supabase
    .from("posts")
    .select()
    .eq("is_post", true);
  // console.log(posts);

  // const { error } = await supabase
  //   .from("posts")
  //   .update({
  //     is_post: true
  //   })
  //   .eq("id", '68a55c4a-73c6-4189-b91e-e9e7abe1d8fe');

  // const { error } = await supabase
  //   .from("posts")
  //   .update({
  //     reply_ids: [
  //       "8b55e783-ab73-4369-ad5f-69cc0b2665dc",
  //       "4c0ad783-7a39-448b-bd76-e71f16e264c6",
  //       "87c9fab1-267e-4dd8-b491-a4709ea0aef1",
  //       "08c4a6fc-d2b7-4b56-9a55-d93d38dcf8b5",
  //       "384bfb4c-a059-4b6d-84cf-9dd76dcad278",
  //       "98ea2ec5-dfd9-4da2-9edb-ae5a9df2afb6",
  //       "19d3d95a-fd1f-4995-9e81-280130b998c5",
  //       "41e1ac3f-4c75-4077-bb30-a1c36111f581",
  //       "da375a72-82cc-423f-bbac-8f734e50aa47",
  //     ],
  //   })
  //   .eq("id", "5806814d-108e-4e41-b81d-3541a4d62597");

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
  //     text_content: "reply 1 to id: f96dbeac",
  //     // like_ids: liked_id,
  //     // reply_ids:reply_id
  //   },
  //   {
  //     text_content: "reply 2 to id: f96dbeac",
  //   },
  //   {
  //     text_content: "reply 1 to id: 5806814d",
  //   },
  //   {
  //     text_content: "reply 2 to id: 5806814d",
  //   },
  //   {
  //     text_content: "reply 3 to id: 5806814d",
  //   }
  // ])

  // f96dbeac:
  // 'ca83a3f4-4793-4251-9f51-6efe56b54c7b'
  // '7ea45f39-7e62-4eeb-bb12-b8c40971d108'
  // '4afa31a7-e66d-46e9-97ef-61cd343a7963'
  // '9ee0cdec-a09c-40bc-ad71-932d5bc12a33'
  // 'c4fa3f97-d11f-4514-b91a-e540bdac27d9'
  // '2d687a8b-8ea2-48c8-84a6-8f385ccbcf9c'

  // 5806814d:
  // '8b55e783-ab73-4369-ad5f-69cc0b2665dc'
  // '4c0ad783-7a39-448b-bd76-e71f16e264c6'
  // '87c9fab1-267e-4dd8-b491-a4709ea0aef1'
  // '08c4a6fc-d2b7-4b56-9a55-d93d38dcf8b5'
  // '384bfb4c-a059-4b6d-84cf-9dd76dcad278'
  // '98ea2ec5-dfd9-4da2-9edb-ae5a9df2afb6'
  // '19d3d95a-fd1f-4995-9e81-280130b998c5'
  // '41e1ac3f-4c75-4077-bb30-a1c36111f581'
  // 'da375a72-82cc-423f-bbac-8f734e50aa47'

  return (
    <main className="min-h-screen w-screen bg-[#101010] text-white">
      <div className="header sticky top-0 w-14">
        <Header />
      </div>
      <div className="posts">
        {posts?.map((post) => (
          <Post id={post.id} text={post.text_content} key={post.id} />
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
