"use client"

import { formatDistanceToNow } from "date-fns";
import { BsThreeDots } from "react-icons/bs"

const NameAndEdit = (props: any) => {

    const relativeTime = formatDistanceToNow(new Date(props?.created_at), {
        addSuffix: true,
      }).replace("about", "");


  return (
    <div className="w-full h-11 flex items-center justify-between relative">
        <div className="left flex items-center">
          <img src={props?.poster_dp} className="h-8 w-8 rounded-full mr-2" />
          <span className="text-sm font-semibold">{props?.user_name}</span>
        </div>
        <div className="left flex items-center space-x-4">
          <span className="text-sm">{relativeTime}</span>
          <BsThreeDots
            className="text-2xl cursor-pointer"
            // onClick={() => setIsEditModalOpen(true)}
          />
        </div>
      </div>
  )
}

export default NameAndEdit