import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

const Post = (props: any) => {
  // console.log(props);

  const relativeTime = formatDistanceToNow(new Date(props?.created_at), {
    addSuffix: true,
  }).replace("about", "");

  return (
    <Link href={`/post/${props.id}`}>
      <div className="min-h-[80px] border-b-[1px] border-[#3b3b3b] pb-2">
        <div className="top flex w-full p-2">
          <div className="left w-[10%] pt-2">
            <img src={props?.poster_dp} className="h-8 w-8 rounded-full" />
          </div>
          <div className="right w-[90%] pr-2">
            <div className="flex pb-1 justify-between">
              <p className="text-sm font-semibold">{props?.user_name}</p>
              <p className="text-sm">{relativeTime}</p>
            </div>
            <p className="text-sm ">{props?.content_text}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
