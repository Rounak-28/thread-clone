import Link from "next/link";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFillPenFill, BsFillPersonFill, BsPen } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" border-t-[1px] border-t-gray-700 bg-black text-white text-2xl w-screen h-12 flex justify-evenly items-center">
      {/* <AiFillHome className="cursor-pointer"/> */}
      <AiOutlineHome className="cursor-pointer" />
      <AiOutlineSearch className="cursor-pointer" />
      {/* <BsFillPenFill className="cursor-pointer"/> */}
      <Link href="/new_post">
        <BsPen className="cursor-pointer" />
      </Link>
      <AiOutlineHeart className="cursor-pointer" />
      <AiOutlineUser className="cursor-pointer" />
      {/* <BsFillPersonFill className="cursor-pointer"/> */}
    </div>
  );
};

export default Footer;
