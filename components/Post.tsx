import Link from "next/link";

const Post = (props: any) => {
  // console.log(props);

  return (
    <Link href={`post/${props.id}`}>
      <div className="min-h-[80px] border-b-[1px] border-[#3b3b3b] pb-2">
        <div className="top flex w-full p-2">
          <div className="left w-[10%] pt-2">
            <img src={props?.poster_dp} className="h-8 w-8 rounded-full" />
          </div>
          <div className="right w-[90%] pr-2">
            <p className="pb-1 text-sm font-semibold">{props?.user_name}</p>
            <p className="text-sm ">{props?.content_text}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
