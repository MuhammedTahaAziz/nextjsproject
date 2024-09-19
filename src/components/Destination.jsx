import Image from "next/image";
import { Destinations } from "../lib/data";
import Location from "../images/Location.svg";
import SpringDecore from "../images/SpringDecore.png";

export default function Destination() {
  return (
    <section className="py-4 3xs:py-6 xs:py-8 px-2 3xs:px-3 2xs:px-4 xs:px-5 sm:px-6 lg:px-8">
      <div className="text-center mb-6 xs:mb-8 sm:mb-12">
        <h2 className="text-[10px] 3xs:text-xs sm:text-sm font-bold text-[#5E6282] tracking-widest uppercase">
          Top Selling
        </h2>
        <h1 className="text-xl 3xs:text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14183E] font-serif mt-1 xs:mt-2">
          Top Destinations
        </h1>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 3xs:gap-5 xs:gap-6 justify-items-center relative">
        <Image
          src={SpringDecore}
          alt=""
          className="w-12 3xs:w-14 2xs:w-16 xs:w-18 sm:w-20 lg:w-24 absolute top-32 xs:top-36 sm:top-40 right-1 3xs:right-0 2xs:-right-2 xs:-right-10 sm:-right-10 lg:-right-12 xl:-right-14"
        />
        {Destinations.map((destination, index) => (
          <div
            key={index}
            className="w-full max-w-[280px] 3xs:max-w-[300px] 2xs:max-w-[320px] xs:max-w-[340px] sm:max-w-sm bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] 3xs:drop-shadow-xl rounded-3xl 3xs:rounded-3xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer z-20"
          >
            <Image
              src={destination.src}
              alt={destination.tripName}
              className="w-full h-48 3xs:h-56 2xs:h-64 xs:h-72 sm:h-80 lg:h-96 object-cover"
            />
            <div className="p-3 3xs:p-4 2xs:p-6 sm:p-8">
              <div className="flex justify-between items-center mb-1 3xs:mb-2">
                <h3 className="text-sm 3xs:text-base sm:text-lg font-semibold text-[#5E6282]">{destination.tripName}</h3>
                <p className="text-sm 3xs:text-base text-[#5E6282] font-semibold">{destination.price}</p>
              </div>
              <div className="flex items-center text-[#5E6282]">
                <Image
                  src={Location}
                  alt={destination.tripName}
                  className="w-3 h-3 3xs:w-4 3xs:h-4"
                />
                <span className="ml-1 3xs:ml-2 text-xs 3xs:text-sm">{destination.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}