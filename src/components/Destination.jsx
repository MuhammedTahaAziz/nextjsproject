import Image from "next/image";
import { Destinations } from "./data";
import Location from "../images/Location.svg";
import SpringDecore from "../images/SpringDecore.svg";

export default function Destination(params) {
  return (
    <section class="py-16 px-8">
      <div class="text-center mb-12">
        <h2 class="text-sm font-bold text-[#5E6282] tracking-widest uppercase">
          Top Selling
        </h2>
        <h1 class="text-4xl font-bold text-[#14183E] font-serif mt-2">
          Top Destinations
        </h1>
      </div>

      {/* <Image src="../images/RomaItaly.jpg" alt="" width={500} height={500} /> */}

      <div class="flex justify-around relative">
        <Image
          src={SpringDecore}
          alt=""
          class="w-24 h-64 object-cover absolute top-44 -right-6 -z-10"
        />
        {Destinations.map((destination, index) => (
          <div
            key={index}
            class="w-[20.75rem] bg-white shadow-2xl shadow-stone-200 rounded-3xl overflow-hidden hover:scale-105 duration-150 cursor-pointer"
          >
            <Image
              src={destination.src}
              alt={destination.tripName}
              class="w-full h-[22rem] object-cover"
            />
            <div class="px-5 py-8">
              <span className="flex justify-between gap-14 mb-2 font-semibold">
                <h3 class="text-lg text-[#5E6282]">{destination.tripName}</h3>
                <p class="text-[#5E6282]">{destination.price}</p>
              </span>
              <div class="flex justify-start text-[#5E6282]">
                <Image
                  src={Location}
                  alt={destination.tripName}
                  class=" object-cover"
                />
                <span className="ml-3">{destination.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
