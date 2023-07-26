import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { BsChat, BsHeart } from "react-icons/bs";

const Post = (props: any) => {
  // console.log(props);

  const relativeTime = formatDistanceToNow(new Date(props?.created_at), {
    addSuffix: true,
  }).replace("about", "");

  return (
    <>
      <div className="w-full h-11 flex items-center relative px-2">
        <img src={props?.poster_dp} className="h-8 w-8 rounded-full mr-2" />
        <span className="text-sm font-semibold">{props?.user_name}</span>
        <span className="absolute right-2 text-sm">{relativeTime}</span>
      </div>
      <Link href={`/post/${props.id}`}>
        <div className="w-full min-h-[50px] px-4 flex items-center">
          <p className="text-sm ">{props?.content_text}</p>
        </div>
      </Link>
      <div className="w-full h-9 px-4 flex items-center space-x-4 text-xl">
        <BsHeart />
        <BsChat />
      </div>
      <div className="top w-full h-9">
        <p className="px-4 py-1 text-sm text-gray-400 font-light border-b-[1px] border-[#3b3b3b]">
          42 likes • 42 replies
        </p>
      </div>
    </>
  );
};

export default Post;
