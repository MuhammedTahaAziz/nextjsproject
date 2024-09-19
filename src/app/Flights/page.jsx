import Link from "next/link";

export default function page(params) {
  return (
    <div className="w-full h-screen flex justify-center items-center">      <Link
        href="/"
        className="px-[2rem] py-[0.75rem] flex justify-center items-center border-2 border-black rounded hover:bg-black hover:text-white duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
