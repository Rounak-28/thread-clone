"use client";

import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <div className=" border-t-[1px] border-t-gray-700 bg-dark text-white text-2xl w-screen h-14 flex justify-evenly items-center">
      <NavLink href="/" className="text-gray-400">
        <AiOutlineHome className="cursor-pointer" />
      </NavLink>
      <NavLink href="/search" className="text-gray-400">
        <AiOutlineSearch className="cursor-pointer" />
      </NavLink>
      <NavLink href="/new_post" className="text-gray-400">
        <BsPen className="cursor-pointer" />
      </NavLink>
      <NavLink href="/likes" className="text-gray-400">
        <AiOutlineHeart className="cursor-pointer" />
      </NavLink>
      <NavLink href="/user" className="text-gray-400">
        <AiOutlineUser className="cursor-pointer" />
      </NavLink>
    </div>
  );
};

export default Footer;
