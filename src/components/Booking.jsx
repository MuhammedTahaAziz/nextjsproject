import Image from "next/image";
import { bookingSteps } from "../lib/data";

import TripToGreece from "../images/TripToGreece.jpg";
import TripBtn1 from "../images/TripBtn1.png";
import TripBtn2 from "../images/TripBtn2.png";
import TripBtn3 from "../images/TripBtn3.png";
import House from "../images/House.jpg";
import Favourite from "../images/Favourite.png";
import Mosque from "../images/Mosque.png";
import BlueCircle from "../images/BlueCircle.png";

export default function Booking() {
  const buttons = [TripBtn1, TripBtn2, TripBtn3];

  return (
    <section className="flex flex-col lg:flex-row py-4 3xs:py-6 xs:py-8 px-2 3xs:px-3 2xs:px-4 xs:px-5 sm:px-6 lg:px-8" name="Booking">
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-8 mb-8 lg:mb-0">
        <span className="text-base 3xs:text-lg sm:text-xl lg:text-2xl text-[#5E6282] font-semibold mb-2">
          Easy and Fast
        </span>
        <h2 className="text-2xl 3xs:text-3xl sm:text-4xl lg:text-5xl text-[#14183E] font-serif font-bold leading-tight mb-4 3xs:mb-6">
          Book your next trip in 3 easy steps
        </h2>
        {bookingSteps.map((bookingStep, index) => (
          <div key={index} className="flex items-start space-x-3 3xs:space-x-4 mb-4 3xs:mb-6">
            <Image src={bookingStep.src} alt="" className="w-10 h-10 3xs:w-12 3xs:h-12 flex-shrink-0" />
            <div>
              <p className="font-bold text-[#5E6282] mb-1">{bookingStep.title}</p>
              <p className="text-[#5E6282] text-xs 3xs:text-sm sm:text-base">{bookingStep.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/2 relative flex flex-col sm:flex-row justify-center items-center lg:translate-x-4 lg:translate-y-16">
        <Image
          src={BlueCircle}
          alt=""
          className="w-[80%] h-auto max-w-[550px] absolute -top-10 left-1/2 -translate-x-1/2 -z-10"
        />
        <div className="w-full max-w-[320px] 3xs:max-w-[340px] xs:max-w-[370px] bg-white text-[#84829A] shadow-xl 3xs:shadow-2xl shadow-gray-200 rounded-2xl 3xs:rounded-3xl p-4 3xs:p-5 xs:p-6 z-10 mb-6 sm:mb-0">
          <Image
            src={TripToGreece}
            alt="Trip to Greece"
            className="w-full h-auto rounded-xl 3xs:rounded-2xl mb-3 3xs:mb-4"
          />
          <h3 className="text-black font-semibold text-base 3xs:text-lg mb-2">Trip to Greece</h3>
          <div className="flex justify-between text-xs 3xs:text-sm mb-3 3xs:mb-4">
            <span>14-29 June</span>
            <span>by Robbin joseph</span>
          </div>
          <div className="flex gap-3 3xs:gap-4 mb-3 3xs:mb-4">
            {buttons.map((button, index) => (
              <span
                key={index}
                className="w-8 h-8 3xs:w-9 3xs:h-9 bg-[#F5F5F5] rounded-full flex justify-center items-center"
              >
                <Image src={button} alt="" className="w-2.5 h-2.5 3xs:w-3 3xs:h-3" />
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center space-x-1 3xs:space-x-2">
              <Image src={House} alt="" className="w-3 h-3 3xs:w-4 3xs:h-4" />
              <span className="text-xs 3xs:text-sm">24 people going</span>
            </span>
            <Image src={Favourite} alt="" className="w-4 h-4 3xs:w-5 3xs:h-5" />
          </div>
        </div>

        <div className="w-[80%] sm:w-[70%] lg:w-[90%] max-w-[263px] bg-white z-20 rounded-2xl shadow-xl 3xs:shadow-2xl shadow-gray-200 p-3 3xs:p-4 sm:absolute sm:left-1/2 sm:bottom-0 lg:left-[60%] lg:bottom-[10%] sm:-translate-x-1/2 lg:translate-x-0 sm:-translate-y-1/2 lg:-translate-y-0">
          <div className="flex items-center space-x-3 3xs:space-x-4">
            <Image src={Mosque} alt="" className="w-10 h-10 3xs:w-12 3xs:h-12 flex-shrink-0" />
            <div className="flex-grow">
              <p className="text-[#84829A] text-xs 3xs:text-sm">Ongoing</p>
              <p className="font-semibold text-sm 3xs:text-base">Trip to Rome</p>
              <p className="text-xs 3xs:text-sm mt-1 3xs:mt-2">
                <span className="text-[#8A79DF] font-semibold">40%</span> completed
              </p>
              <div className="w-full h-1 bg-[#F5F5F5] rounded-full mt-1">
                <div className="w-[40%] h-full bg-[#8A79DF] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}