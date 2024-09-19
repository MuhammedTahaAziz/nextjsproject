"use client";
import Image from "next/image";
import logo from "../images/logo.svg";
import Expand from "../images/Expand.png";
import Link from "next/link";
import Language from "../components/Language.jsx";
import { navigationPages } from "../lib/data";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header
      className={`w-full pt-10 z-50 absolute ${
        isOpen
          ? "h-auto duration-150 backdrop-blur-lg"
          : "w-full h-auto duration-150"
      }`}
    >
      <nav className="w-10/12 mx-auto flex justify-between items-center font-semibold text-md ">
        <Link href={`/`}>
          <Image src={logo} alt="" className="w-20 xl:w-40 h-8 xl:h-10" />
        </Link>

        <div className="">
          <span className="flex justify-center items-center xl:space-x-3 xl:-translate-x-14">
            <div className="space-x-16 -translate-x-16 hidden xl:block">
              {navigationPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.path}
                  className="text-black hover:text-[#DF6951] duration-150"
                  onClick={() => (setOpen(false))}
                >
                  <button className="h-10">{page.title}</button>
                </Link>
              ))}
            </div>
            <div className="items-center hidden xl:flex">
              <Link
                href="/"
                className="px-[2rem] py-[0.75rem] flex justify-center items-center border-2 border-transparent rounded hover:bg-black hover:text-white hover:border-2 hover:border-black duration-100 "
              >
                Login
              </Link>
              <Link
                href="/"
                className="px-[2rem] py-[0.75rem] flex justify-center items-center ml-4 border-2 border-black rounded hover:bg-black hover:text-white duration-200"
              >
                Signup
              </Link>
              <button className="flex items-center gap-2 border-2 translate-x-4 border-transparent hover:border-black duration-150 p-3 rounded">
                EN
                <Image src={Expand} alt="" className="w-3 h-2" />
              </button>
            </div>
            <span
              className="size-10 border-3 border-black rounded xl:hidden flex flex-col justify-center items-center gap-2 cursor-pointer"
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              <span
                className={`w-6 h-1 bg-black ${
                  isOpen === true
                    ? "rotate-45 translate-y-1.5 duration-150"
                    : " duration-150"
                } rounded`}
              ></span>
              <span
                className={`w-6 h-1 bg-black ${
                  isOpen === true
                    ? "-rotate-45 -translate-y-1.5 duration-150"
                    : " duration-150"
                } rounded`}
              ></span>

              <div className="space-x-16 -translate-x-16 hidden xl:hidden">
                {navigationPages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.path}
                    className="text-black hover:text-[#DF6951] duration-150"
                  >
                    <button className="h-10">{page.title}</button>
                  </Link>
                ))}
              </div>
            </span>
          </span>
        </div>
      </nav>
      {isOpen ? (
        <nav className="w-10/12 mx-auto my-10 flex flex-col gap-2">
          {navigationPages.map((page, index) => (
            <Link
              key={index}
              href={page.path}
              className="w-40 px-4 text-black rounded hover:bg-[#DF6951] hover:text-white duration-200"
            >
              <button className="h-10">{page.title}</button>
            </Link>
          ))}
        </nav>
      ) : (
        ""
      )}
    </header>
  );
}
