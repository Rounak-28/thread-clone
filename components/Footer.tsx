"use client";

import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import NavLink from "./NavLink";
import { signIn, useSession } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession();
  // console.log(session)
  // TODO: "redirect to profile page after signin from footer btn"

  return (
    <div className="border-t-[1px] border-t-gray-400 dark:border-t-gray-700 text-gray-600 dark:text-gray-400 text-2xl w-screen h-14 flex justify-evenly items-center">
      <NavLink href="/">
        <AiOutlineHome className="cursor-pointer" />
      </NavLink>
      <NavLink href="/search">
        <AiOutlineSearch className="cursor-pointer" />
      </NavLink>
      {session ? (
        <NavLink href="/new_post">
          <BsPen className="cursor-pointer" />
        </NavLink>
      ) : (
        <button onClick={() => signIn()}>
          <BsPen className="cursor-pointer" />
        </button>
      )}
      <NavLink href="/likes">
        <AiOutlineHeart className="cursor-pointer" />
      </NavLink>
      {session ? (
        <NavLink href="/profile">
          <AiOutlineUser className="cursor-pointer" />
        </NavLink>
      ) : (
        <button onClick={() => signIn()}>
          <AiOutlineUser className="cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default Footer;
