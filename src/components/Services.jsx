"use client";

import Image from "next/image";
import { services } from "../lib/data";
import PlusGroup from "../images/PlusGroup.png";
import { useState } from "react";
import { Inter } from 'next/font/google'

export default function Services() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverdPostId, setHoverdPostId] = useState(null);

  return (
    <section class="py-16 px-4 relative">
      <Image
        src={PlusGroup}
        alt=""
        className="w-16 h-20 xl:w-[153px] xl:h-[166px] absolute top-8 2xl:top-6 -right-4 2xl:-right-[60px]"
      />
      <div class="text-center mb-10 md:mb-24">
        <h2 class="text-sm font-bold text-[#5E6282] tracking-widest uppercase">
          Category
        </h2>
        <h1 class="text-lg md:text-4xl font-bold text-[#14183E] font-serif mt-2 scale-y-110">
          We Offer Best Services
        </h1>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-7 md:gap-10">
        {services.map((service, index) => (
          <div className="relative" key={index}>
            {isHovered && hoverdPostId === index ? (
              <span className="size-12 md:w-[100px] md:h-[100px]  duration-150 bg-[#DF6951] absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 rounded-tl-xl md:rounded-tl-[30px] rounded-br-md md:rounded-br-[10px]"></span>
            ) : (
              <></>
            )}

            <div
              className={`bg-white flex flex-col items-center gap-6 rounded-2xl md:rounded-[40px] py-4 md:py-10 text-center ${
                isHovered && hoverdPostId === index
                  ? "hover:scale-105 drop-shadow-[0_60px_30px_rgba(0,0,0,0.07)] duration-150"
                  : ""
              }`}
              onMouseEnter={() => {
                setIsHovered(true), setHoverdPostId(index);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={service.src}
                alt=""
                className="w-[50px] h-[42px] md:w-[92px] md:h-[78px] mx-auto"
              />
              <h3 className=" text-sm md:text-xl font-bold text-gray-800 mt-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[9px] md:text-base w-24 md:w-40 -translate-y-2">
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
