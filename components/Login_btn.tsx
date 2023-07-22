"use client";

import { signIn } from "next-auth/react";

export default function Login_btn() {
  return (
    <div className="flex justify-center items-center bg-blue-600 w-24 h-10 absolute right-2 top-2 rounded-md">
      <>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    </div>
  );
}
