import Image from "next/image";
import Travel from "../images/Travel.png";
import RedDecore from "../images/RedDecore.svg";

export default function Description(params) {
  return (
    <section class="flex flex-col-reverse xs:flex-row justify-center sm:justify-between items-center mt-20 md:mt-10 xl:mt-16">
      <div class="space-x-1 relative">
        <h4 className="uppercase text-[12px] leading-3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-[#DF6951]">best destinations around the world</h4>
        {/* <Image
          src={RedDecore}
          alt=""
          class="w-96 h-3 object-cover absolute top-28 -right-24 -z-10 hidden md:block"
        /> */}
        <h1 class="text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4.5rem] w-60 sm:w-64  md:w-80 lg:w-[25rem] xl:w-[30rem] 2xl:w-[37rem] leading-snug font-bold text-[#181E4B] font-serif">
          Travel, enjoy and live a new and full life
        </h1>
        <p class="text-[#5E6282] leading-6 text-sm md:text-md 2xl:text-lg w-[227px] sm:w-[277px] md:w-[327px] lg:w-[377px] xl:w-[427px] 2xl:w-[477px] 2xl:leading-[2.375rem]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div class="flex justify-start md:justify-normal items-start flex-col md:flex-row gap-3 md:space-x-4 mt-6">
          <button class="bg-[#F1A501] px-6 py-3 text-white rounded-lg drop-shadow-[0_15px_12px_rgba(241,185,50,0.30)] hover:scale-105 duration-150">
            Find out more
          </button>
          <button class="flex items-center space-x-2 hover:scale-110 duration-150">
            <span class="text-white bg-[#DF6951] rounded-full px-4 py-3 drop-shadow-[0_12px_12px_rgba(150,0,0,0.30)] ">
              ▶
            </span>
            <span class="text-gray-800 font-semibold">Play Demo</span>
          </button>
        </div>
      </div>
      <div className="">
        <Image
          src={Travel}
          alt=""
          className="w-[522px] -translate-x-[35px] xs:w-[550px] sm:w-[600px] md:w-[650px] lg:w-[700px]  xl:w-[765.5px] sm:translate-x-0 translate-y-0 2xl:-translate-x-10 2xl:translate-y-12 hidden 2xs:inline-block"
        />
      </div>
    </section>
  );
}
