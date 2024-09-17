"use client";
import Image from "next/image";
import logo from "../images/logo.svg";
import Expand from "../images/Expand.png";
import Link from "next/link";
import Language from "../components/Language.jsx";
import { navigationPages } from "./data";

export default function Navbar() {
  return (
    <header className="h-14 flex justify-between items-center font-semibold text-md">
      <Link href={`/`}>
        <Image src={logo} alt="" className="" />
      </Link>

      <div className="relative">
        <span className="flex justify-center items-center space-x-3 -translate-x-14">
          <nav className="space-x-16 -translate-x-16">
            {navigationPages.map((page, index) => (
              <Link
                key={index}
                href={page.path}
                className="text-black hover:text-[#DF6951] duration-150"
              >
                <button className="h-10">{page.title}</button>
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            className="px-[2rem] py-[0.75rem] flex justify-center items-center border-2 border-transparent rounded hover:bg-black hover:text-white hover:border-2 hover:border-black duration-100 "
          >
            Login
          </Link>
          <Link
            href="/"
            className="px-[2rem] py-[0.75rem] flex justify-center items-center border-2 border-black rounded hover:bg-black hover:text-white duration-200"
          >
            Signup
          </Link>
          <button className="flex items-center gap-2 border-2 translate-x-4 border-transparent hover:border-black duration-150 p-3 rounded">
            EN
            <Image src={Expand} alt="" className="w-3 h-2" />
          </button>
        </span>
      </div>
    </header>
  );
}
