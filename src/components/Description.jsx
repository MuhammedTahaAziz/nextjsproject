import Image from "next/image";
import Travel from "../images/Travel.svg";
import RedDecore from "../images/RedDecore.svg";

export default function Description(params) {
  return (
    <section class="flex justify-between items-center">
      <div class="max-w-xl space-y-4 relative">
        <h4 className="uppercase text-2xl font-bold text-[#DF6951]">best destinations around the world</h4>
        <Image
          src={RedDecore}
          alt=""
          class="w-96 h-3 object-cover absolute top-28 -right-24 -z-10"
        />
        <h1 class="text-[5rem] leading-snug font-bold text-[#181E4B] font-serif w-[37rem]">
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
          className="w-[1400px] h-[850px] translate-x-7 -translate-y-6"
        />
      </div>
    </section>
  );
}
