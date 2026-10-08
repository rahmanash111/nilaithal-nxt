"use client"

import Image from "next/image";
import hero_icon from "../../assets/get started.webp";
import icon from "../../assets/icon left.webp";
import quick from "../../assets/quick response.webp"
import { useContactStore } from "../store/contactStore";

export function CTA() {

       const setScrollToForm = useContactStore(
         (state) => state.setScrollToForm,
       );   

  return (
    <section className="relative w-full overflow-hidden py-[6%] md:py-[3%] px-[5%]">
      {/* Background Image + Green Gradient */}
      <div
        className="absolute inset-0 -z-1 bg-(--primary-dark)"
        style={
          {
            // backgroundImage: `
            //   linear-gradient(
            //     90deg,
            //     #033d30 0%,
            //     #033d30 35%,
            //     rgba(3, 61, 48, 0.98) 47%,
            //     rgba(3, 61, 48, 0.82) 60%,
            //     rgba(3, 61, 48, 0.42) 75%,
            //     rgba(3, 61, 48, 0.08) 90%,
            //     transparent 100%
            // )`,
          }
        }
      >
        <Image
          className="object-cover object-bottom md:object-bottom-right w-full h-full"
          alt="image"
          src={hero_icon}
        />
      </div>
      <div className="z-2 flex flex-col md:flex-row gap-12">
        <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-2xl bg-white">
          <Image alt="image" src={icon} />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
            Get Started Today
          </span>

          <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Ready to Switch to
            <br />
            <span className="text-(--primary-light)">Clean Energy?</span>
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white">
            Talk to our solar and energy experts today. completely free, with no
            pressure and no jargon. Whether you need a rooftop solar system for
            your home, a commercial solar installation for your business, EV
            charging infrastructure, or a battery storage system, Nilaithal's
            team is ready to assess your needs and design the right solution for
            you.
          </p>
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-2 md:gap-6 mt-6">
            <button
              onClick={() => setScrollToForm(true)}
              className="flex h-[46px] w-full items-center justify-start rounded-[8px] border border-[#398344] bg-[#398344] px-[17px] text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30753a] sm:w-[205px] lg:h-[48px] md:w-[260px] lg:text-[14px] gap-2"
            >
              <span>Request a Free Quote</span>
              <span className="text-[17px]">→</span>
            </button>
            <div className="h-full w-px border-r border-amber-50" />
            <div className="flex items-center">
              {/* <ClockFading className="text-(--primary-light) h-12 w-12 mr-3" /> */}
              <Image alt="image" src={quick} className="w-20 mr-4" />
              <p className="text-white max-w-[150px]">
                Quick Response Within 24 Hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
