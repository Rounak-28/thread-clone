"use client"

// {
//   "user": {
//     "name": "Rounak Kumbhakar",
//     "email": "rounakkumbhakar2004@gmail.com",
//     "image": "https://avatars.githubusercontent.com/u/95576871?v=4"
//   },
//   "expires": "2023-08-18T15:42:32.051Z"
// }


import { useSession, signIn, signOut } from "next-auth/react"

export default function Login_btn() {
  const { data: session } = useSession()

  // console.log(session)

  if (!session) {
    return (
    <div className="h-full flex justify-center items-center">
        <button onClick={() => signIn()}>Sign in</button>
    </div>
    )
  }
  return (
      <div className="h-full flex justify-center items-center">
        <button onClick={() => signOut()}>Sign out</button>
      </div>
  )
}