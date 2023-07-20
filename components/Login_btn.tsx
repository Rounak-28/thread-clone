"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login_btn() {
  const { data: session } = useSession();

  // console.log(session)

  return (
    <div className="flex justify-center items-center bg-blue-600 w-24 h-10 absolute right-2 top-2 rounded-md">
      {session ? (
        <>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}
