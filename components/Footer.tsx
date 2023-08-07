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
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const { data: session } = useSession();
  // console.log(session)

  // TODO: "redirect to user page after signin from footer btn"

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
      {session ? (
        <NavLink href="/user" className="text-gray-400">
          <AiOutlineUser className="cursor-pointer" />
        </NavLink>
      ) : (
        <button className="text-gray-400" onClick={() => signIn()}>
          <AiOutlineUser className="cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default Footer;
