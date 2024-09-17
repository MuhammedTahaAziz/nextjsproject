import Image from "next/image";
import { bookingSteps } from "./data";

import TripToGreece from "../images/TripToGreece.jpg";
import TripBtn1 from "../images/TripBtn1.png";
import TripBtn2 from "../images/TripBtn2.png";
import TripBtn3 from "../images/TripBtn3.png";
import House from "../images/House.jpg";
import Favourite from "../images/Favourite.png";
import Mosque from "../images/Mosque.png";
import BlueCircle from "../images/BlueCircle.png";

export default function Booking(params) {
  let bottuns = [TripBtn1, TripBtn2, TripBtn3];
  return (
    <section className="flex" name="Booking">
      <div className="w-1/2 h-[40rem] flex flex-col pl-16 gap-y-4">
        <span className="text-[27px] text-[#5E6282] font-sans font-semibold">
          Easy and Fast
        </span>
        <span className="capitalize text-[50px] text-[#14183E] w-[34rem] font-serif font-bold leading-snug mb-4">
          book your next trip in 3 easy steps
        </span>
        {bookingSteps.map((bookingStep, index) => (
          <div key={index} className="flex items-center gap-4 mb-8">
            <Image src={bookingStep.src} alt="" className="size-12" />
            <span className="w-[22rem]">
              <p className="font-bold font-sans text-[#5E6282] mb-1">
                {bookingStep.title}
              </p>
              <p className="text-[#5E6282] leading-5">{bookingStep.text}</p>
            </span>
          </div>
        ))}
      </div>
      <div className="w-1/2 h-[40rem] relative flex justify-center items-center">
        <Image
          src={BlueCircle}
          alt=""
          className="w-[550px] h-[520px] absolute -top-14 left-32 -z-10"
        />
        <div className="w-[370px] h-[400px] bg-white text-[#84829A] shadow-2xl shadow-gray-200 rounded-3xl flex justify-center items-center z-10">
          <div className="flex justify-center flex-col gap-[1.475rem] text-[16px]">
            <Image
              src={TripToGreece}
              alt=""
              className="w-[321px] h-[161px] rounded-3xl"
            />
            <span className="capitalize text-black font-semibold text-[18px]">
              trip to greece
            </span>
            <span className="flex">
              <p className="border-r-2 h-5 mr-4">14-29 June</p>
              <p className="">by Robbin joseph</p>
            </span>
            <div className="flex gap-4">
              {bottuns.map((button, index) => (
                <span
                  key={index}
                  className="size-9 bg-[#F5F5F5] rounded-full flex justify-center items-center"
                >
                  <Image src={button} alt="" className="size-3 " />
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center -translate-y-1">
              <span className="flex items-center">
                <Image src={House} alt="" className="size-4" />
                <span>24 people going</span>
              </span>
              <Image src={Favourite} alt="" className="size-5 z-30" />
            </div>
          </div>
        </div>
        <div className="w-[263px] h-[129px] bg-white z-10 rounded-[18px] shadow-2xl shadow-gray-200 absolute left-[53.5%] top-[54.2%] flex justify-center gap-4 px-5 py-4">
          <Image src={Mosque} alt="" className="size-[50px]" />
          <span className="w-full">
            <span className="space-y-1">
              <p className="text-[#84829A]">Ongoing</p>
              <p>Trip to rome</p>
            </span>
            <span className="space-y-1">
              <span className="font-semibold">
                <span className="text-[#8A79DF]">40%</span> completed
              </span>
              <div className="w-full h-[6px] bg-[#F5F5F5] rounded-full overflow-hidden">
                <div className="w-[40%] h-full bg-[#8A79DF] rounded-full"></div>
              </div>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
