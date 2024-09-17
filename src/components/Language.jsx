import Link from "next/link";
import { useState } from "react";

export default function Language(params) {
  const [settingOpen, setSettingOpen] = useState(false);
  console.log(settingOpen);

  return (
    <div
      className={`cursor-pointer flex justify-center items-end flex-col absolute right-0 top-1/2 -translate-y-1/2`}
    >
      <div
        className="h-auto flex justify-center items-center flex-col gap-1 text-sm"
        name="setting-container"
        onClick={() => {
          setSettingOpen(!settingOpen);
        }}
      >
        EN
        
      </div>
      <div
        className={` rounded overflow-hidden ${
          settingOpen
            ? "h-[7.5rem] duration-150 border-[1px] border-slate-300"
            : "w-0 h-0 duration-150 border-0"
        }`}
      >
        <div className="w-full h-10 bg-slate-50 hover:bg-slate-200">
          <Link
            href={"/"}
            className="size-full  flex justify-center items-center"
          >
            Edit Profile
          </Link>
        </div>
        <div className="w-full h-10 bg-slate-50 hover:bg-slate-200">
          <Link
            href={"/"}
            className="size-full flex justify-center items-center"
          >
            Change Password
          </Link>
        </div>
        <div className="w-full h-10 bg-slate-50 hover:bg-slate-200">
          <Link
            href={"/"}
            className="size-full flex justify-center items-center"
            onClick={``}
          >
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}
