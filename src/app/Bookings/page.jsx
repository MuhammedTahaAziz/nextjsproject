"use client";

import useOpenStore from "@/lib/useOpenStore";
import Link from "next/link";
import { useEffect } from "react";

export default function page(params) {
  const { isOpen, setOpen } = useOpenStore();

  useEffect(() => {
    setOpen(false);
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {" "}
      <Link
        href="/"
        className="px-[2rem] py-[0.75rem] flex justify-center items-center border-2 border-black rounded hover:bg-black hover:text-white duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
