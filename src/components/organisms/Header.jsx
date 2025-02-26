"use client";

import React from "react";
import { Button } from "../ui/button";
import Auth from "../molecules/Auth";
import { useAuthContext } from "@/providers/provider";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user } = useAuthContext();
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex w-full gap-4">
        <h1 className="font-bold text-2xl text-amber-500">RS</h1>
        <p className="text-sm py-2 text-blue-400">AI Video Generator</p>
      </div>
      {!user ? (
        <Auth>
          <Button>Get Started</Button>
        </Auth>
      ) : (
        <div className="flex gap-3 mr-4">
          <Link
            href="/dashboard"
            className="text-black dark:text-white px-4 py-2 rounded-md border border-black dark:border-white"
          >
            Dashboard
          </Link>
          <Image
            src={user?.photoURL}
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
