"use client";

import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <div className=" border-t-[1px] border-t-gray-700 bg-dark text-white text-2xl w-screen h-14 flex justify-evenly items-center">
      <NavLink href="/">
        <AiFillHome className="cursor-pointer" />
      </NavLink>
      <NavLink href="/search">
        <AiOutlineSearch className="cursor-pointer" />
      </NavLink>
      <NavLink href="/new_post">
        <BsPen className="cursor-pointer" />
      </NavLink>
      <NavLink href="/likes">
        <AiOutlineHeart className="cursor-pointer" />
      </NavLink>
      <NavLink href="/user">
        <AiOutlineUser className="cursor-pointer" />
      </NavLink>
    </div>
  );
};

export default Footer;
