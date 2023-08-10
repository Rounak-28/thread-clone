import Post from "@/components/Post";
import { supabase } from "@/lib/supabase";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const fixed_username = decodeURIComponent(params.username);

  const { data: posts, error } = await supabase
    .from("posts")
    .select()
    .eq("user_name", fixed_username)
    .is("reply_to", null)
    .order("created_at", { ascending: false });

    // console.log(posts)

  return (
    <div>
        <div className="posts mb-14">
        {posts?.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </div>
    // <div className="p-3 pt-5">
    //   <div className="user w-full h-28 p-1 relative space-y-2">
    //     <p className="text-2xl font-semibold">{fixed_username}</p>
    //     <p className="">some bio</p>
    //     <p className="text-sm font-light">42 followers</p>
    //     <img
    //       className="absolute top-2 right-2 rounded-full w-14 h-14"
    //       src={session?.user?.image!}
    //       alt=""
    //     />
    //     <div className="w-full h-14 mt-6 flex justify-around items-center">
    //       <button className="border-[1px] border-[#3d3c3c] flex justify-center items-center w-56 h-9 rounded-md hover:bg-[#222222]">
    //         Edit profile
    //       </button>
    //       <button className="border-[1px] border-[#3d3c3c] flex justify-center items-center w-56 h-9 rounded-md hover:bg-[#222222]">
    //         Share profile
    //       </button>
    //     </div>
    //     <div className="main w-full">
    //       <div className="choice w-full h-12 flex justify-around items-center">
    //         <button
    //           className={`${
    //             !isPost ? "text-gray-400" : "border-b-[1px]"
    //           } font-semibold w-1/2 h-full`}
    //           onClick={() => {
    //             !isPost && setIsPost(true);
    //           }}
    //         >
    //           posts
    //         </button>
    //         <button
    //           className={`${
    //             isPost ? "text-gray-400" : "border-b-[1px]"
    //           } font-semibold w-1/2 h-full`}
    //           onClick={() => {
    //             isPost && setIsPost(false);
    //           }}
    //         >
    //           Replies
    //         </button>
    //       </div>
    //       <div className="posts mb-14">
    //         {data?.map((post: any) => (
    //           <Post {...post} key={post.id} />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="footer fixed bottom-0 left-0">
    //     <Footer />
    //   </div>
    // </div>
  )
}
