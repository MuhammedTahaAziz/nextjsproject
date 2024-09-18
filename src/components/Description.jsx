import Image from "next/image";
import Travel from "../images/Travel.svg";
import RedDecore from "../images/RedDecore.svg";

export default function Description(params) {
  return (
    <section class="flex justify-between items-center">
      <div class="space-x-1 relative">
        <h4 className="uppercase text-[12px] leading-3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-[#DF6951]">best destinations around the world</h4>
        <Image
          src={RedDecore}
          alt=""
          class="w-96 h-3 object-cover absolute top-28 -right-24 -z-10"
        />
        <h1 class="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[5rem] w-[20rem] 2xl:w-[37rem] leading-snug font-bold text-[#181E4B] font-serif">
          Travel, enjoy and live a new and full life
        </h1>
        <p class="text-[#5E6282] text-lg w-[477px] leading-[2.375rem]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div class="flex items-center space-x-4">
          <button class="bg-[#F1A501] px-6 py-3 text-white rounded-lg drop-shadow-[0_15px_12px_rgba(241,185,50,0.30)] hover:scale-105 duration-150">
            Find out more
          </button>
          <button class="flex items-center space-x-2 drop-shadow-[0_12px_12px_rgba(150,0,0,0.30)] hover:scale-110 duration-150">
            <span class="text-white bg-[#DF6951] rounded-full px-4 py-3">
              ▶
            </span>
          </button>
            <span class="text-gray-800 font-semibold">Play Demo</span>
        </div>
      </div>
      <div>
        <Image
          src={Travel}
          alt=""
          className=" 2xl:w-[1400px] 2xl:h-[850px] 2xl:translate-x-7 2xl:-translate-y-6"
        />
      </div>
    </section>
  );
}
