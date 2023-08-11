import Link from "next/link";
import LikesAndCommentsCounts from "./LikesAndCommentsCounts";
import NameAndDP from "./NameAndDP";

const Post = (props: any) => {
  return (
    <div className="px-3">
      <NameAndDP {...props} />
      <Link
        href={{
          pathname: `/post/${props.id}`,
          query: {
            created_at: props?.created_at,
            user_name: props?.user_name,
            content_text: props?.content_text,
            poster_dp: props?.poster_dp
          },
        }}
      >
        <div className="w-full min-h-[50px] flex items-center">
          <p className="text-sm">{props?.content_text}</p>
        </div>
      </Link>
      <LikesAndCommentsCounts {...props} />
    </div>
  );
};

export default Post;
