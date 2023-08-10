import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
const NameAndDP = (props: any) => {
  const relativeTime = formatDistanceToNow(new Date(props?.created_at), {
    addSuffix: true,
  }).replace("about", "");

  return (
    <Link href={`/user/${props.user_name}`}>
      <div className="w-full h-11 flex items-center justify-between relative">
        <div className="left flex items-center">
          <img src={props?.poster_dp} className="h-8 w-8 rounded-full mr-2" />
          <span className="text-sm font-semibold">{props?.user_name}</span>
        </div>
        <div className="right flex items-center space-x-4">
          <span className="text-sm">{relativeTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default NameAndDP;
