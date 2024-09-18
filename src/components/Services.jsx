"use client";

import Image from "next/image";
import { services } from "./data";
import PlusGroup from "../images/PlusGroup.svg";
import { useState } from "react";

export default function Services() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverdPostId, setHoverdPostId] = useState(null);

  return (
    <section class="py-16 px-8 relative">
      <Image
        src={PlusGroup}
        alt=""
        className="w-[153px] h-[166px] absolute top-10 right-0"
      />
      <Image
        src={PlusGroup}
        alt=""
        className="w-[153px] h-[166px] absolute top-10 right-0"
      />
      <div class="text-center mb-12">
        <h2 class="text-sm font-bold text-[#5E6282] tracking-widest uppercase">
          Category
        </h2>
        <h1 class="text-4xl font-bold text-[#14183E] font-serif mt-2">
          We Offer Best Services
        </h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-16">
        {services.map((service, index) => (
          <div className="relative" key={index}>
            {isHovered && (hoverdPostId===index) ? (
              <span className="w-[100px] h-[100px]  duration-150 bg-[#DF6951] absolute -bottom-12 -left-12 rounded-tl-[30px] rounded-br-[10px]"></span>
            ) : (
              <></>
            )}

            <div
              className={`bg-white flex flex-col items-center gap-6 rounded-[40px] py-10 text-center ${
                service
                  ? "hover:scale-105 drop-shadow-[0_60px_30px_rgba(0,0,0,0.07)] duration-150"
                  : ""
              }`}
              onMouseEnter={() => {setIsHovered(true) , setHoverdPostId(index)}}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={service.src}
                alt=""
                className="w-[92px] h-[78px] mx-auto"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-md w-40 -translate-y-2">
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
