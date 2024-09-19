"use client";

import Booking from "@/components/Booking";
import Description from "@/components/Description";
import Destination from "@/components/Destination";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import useOpenStore from "@/lib/useOpenStore";
import { useEffect } from "react";

export default function Home() {
  const { isOpen, setOpen } = useOpenStore();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div className="w-10/12 h-full mx-auto pt-20  scrollbar-hide"
    >
        <Description />
        <Services />
        <Destination />
        <Booking />
    </div>
  );
}
