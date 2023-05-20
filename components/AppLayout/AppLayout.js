import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { Logo } from "../Logo/index";

export const AppLayout = ({ children }) => {
  const { user, error, isLoading } = useUser();
  // console.log("user: ", user);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="flex flex-col text-white overflow-hidden bg-gradient-to-b from-slate-800">
        <div className="px-2">
          <Logo />
          <Link href="/post/new" className="btn">
            New Post
          </Link>
          <Link
            href="/token-topup"
            className="block mt-2 text-center underline"
          >
            0 tokens available
          </Link>
        </div>
        <div className="flex-1 overflow-auto  ">List of Post</div>
        <div className="">
          {user ? (
            <div className="flex items-center gap-2 border-t border-black/50 h-20 px-4">
              <Image
                src="https://lh3.googleusercontent.com/a/AGNmyxaCTLHkkRKrIGoR2XfUD6xQru-1mkBjlC3FtRQgAg=s96-c"
                alt="userImage"
                width="50"
                height="50"
                className="rounded-full min-w-[50px]"
              />
              <div>
                <div className="text-black font-semibold block">
                  {user.name}
                </div>
                <Link
                  href="/api/auth/logout"
                  className="text-black hover:underline"
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="bg-red-200">{children}</div>
    </div>
  );
};
