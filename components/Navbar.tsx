"use client";

import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Navbar = ({ text }: { text: string }) => {
  const router = useRouter();

  const prev_url = (e: any) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="back flex h-11 items-center space-x-3 border-b-[1px] border-[#3b3b3b] px-3">
      <BiArrowBack className="text-3xl" onClick={prev_url} />
      <p className="text-xl font-bold">{text}</p>
    </div>
  );
};

export default Navbar;
