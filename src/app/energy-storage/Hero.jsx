"use client";
import "./Hero.css";
import React from "react";
import hero_icon1 from "../../assets/hero icon image.webp";
import hero_icon2 from "../../assets/hero (5).webp";
import hero_icon3 from "../../assets/hero (4).webp";
import hero_icon4 from "../../assets/hero (3).webp";
import hero from "../../assets/enargey solution - hero.webp";
import Image from "next/image";
import { useContactStore } from "../store/contactStore";
import useModal from "../store/modal";

const features = [
  {
    title: "High Efficiency",
    description: "Maximum energy utilisation",
    icon: hero_icon2,
  },
  {
    title: "Long Life",
    description: "10+ years of reliable storage",
    icon: hero_icon3,
  },
  {
    title: "Cost Savings",
    description: "Lower bills, zero waste energy",
    icon: hero_icon4,
  },
];
 
export default function SolarHero() {

  const setScrollToForm = useContactStore((state) => state.setScrollToForm);
  const openModal = useModal((state) => state.openModal);
  
  return (
    <section className="relative mx-auto min-h-[800px] w-full overflow-hidden bg-transparent font-[Inter,sans-serif] text-[#101a28] lg:min-h-[750px]">
      <div className="absolute -right-30 -top-40 z-1 hidden h-full md:w-[73.5%] 2xl:w-[63.5%] lg:block">
        <Image
          className="h-[1200px] w-[1300px]"
          src={hero}
          alt={"hero-image"}
        />

        <div className=" absolute bottom-[62px] right-[35%] z-30 h-[242px] w-[195px] rounded-[15px] bg-white/95 p-[28px] shadow-[0_12px_35px_rgba(0,0,0,0.15)] ">
          <div className="flex h-[50px] w-[100px] items-center justify-center text-[#619364]">
            <Image src={hero_icon1} alt="image" className="w-full -ml-16" />
          </div>
          <h3 className="mt-[2] text-[19px] font-bold leading-[1.25] tracking-[-0.4px] text-[#161e28]">
            CLEAN ENERGY
          </h3>
          <p className="mt-[13px] text-[12px] leading-[1.65] text-[#737b82] ">
            STORED TODAY FOR A STONGER TOMORROW.
          </p>
          <span className="mt-[14px] block h-[2px] w-[29px] bg-[#d8c38a]" />
        </div>
      </div>

      <div className="relative z-20 px-5 pb-[50px] pt-[38px] sm:px-8 md:px-12 lg:absolute lg:left-[4.7%] lg:top-[48px] lg:w-[43%] lg:px-0 lg:pb-0 ">
        <div className=" mb-[14px] text-[12px] font-bold tracking-[0.2px] text-[#398344] lg:text-[14px] ">
          ENERGY STORAGE SOLUTIONS
        </div>

        <h1 className=" m-0 text-[39px] font-bold leading-[1.06] tracking-[-1.7px] text-[#101a28] sm:text-[45px] lg:text-[clamp(42px,3.65vw,58px)] lg:leading-[1.04] lg:tracking-[-2px] ">
          Store Clean Energy for a
          <br />
          <span className="text-[#398344]">Brighter Tomorrow.</span>
        </h1>

        <p className=" mt-[22px] max-w-[410px] text-[14px] leading-[1.7] text-[#3d4650] lg:mt-[29px] lg:text-[15px] lg:leading-[1.8] ">
          Advanced lithium-ion battery storage systems that give you energy
          independence, protect against grid outages, and maximise every unit of
          solar power your panels generate.
          {/* Advanced battery storage solutions that give you energy
          <br className="hidden lg:block" />
          independence, greater efficiency, and a more resilient future. */}
        </p>

        <div className=" mt-[32px] flex flex-col gap-[10px] sm:flex-row sm:gap-[18px] lg:mt-[42px] lg:gap-[22px] ">
          <button
            onClick={() => openModal()}
            className="flex h-[46px] w-full items-center justify-between rounded-[8px] border border-[#398344] bg-[#398344] px-[17px] text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30753a] sm:w-[205px] lg:h-[48px] lg:w-[216px] lg:text-[14px] "
          >
            <span>Request a Free Quote</span>
            <span className="text-[17px]">→</span>
          </button>
          <button
            onClick={() => setScrollToForm(true)}
            className=" flex h-[46px] w-full items-center justify-between rounded-[8px] border-[1.5px] border-[#83a887] bg-white px-[17px] text-[14px] font-semibold text-[#26322a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7faf7] sm:w-[225px] lg:h-[48px] lg:w-[244px] lg:text-[14px] "
          >
            <span>Explore Storage Solutions</span>
            <span className="text-[17px] text-[#398344]">→</span>
          </button>
        </div>

        <div className=" mt-[30px] grid grid-cols-3 gap-y-[28px] sm:grid-cols-4 sm:gap-y-0 lg:mt-[37px] ">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={` relative min-w-0 pr-[14px] sm:pr-[17px] ${index !== 0 ? "sm:pl-[17px]" : ""} `}
            >
              <div className="mb-[12px] flex h-[54px] w-[54px] items-center justify-center rounded-[14px] bg-[#f3f5f2] text-[#43864a] lg:h-[59px] lg:w-[59px] ">
                <Image
                  src={feature.icon}
                  alt="image"
                  className="h-auto object-cover"
                />
              </div>

              <h3 className="                  m-0                  text-[14px]                  font-bold                  leading-[1.3]                  text-[#202832]                  lg:text-[14px]                ">
                {feature.title}
              </h3>

              <p className="                  mt-[8px]                  max-w-[115px]                  text-[12px]                  leading-[1.65]                  text-[#727b83]                  lg:mt-[10px]                  lg:text-[12px]                ">
                {feature.description}
              </p>

              {/* {index !== features.length - 1 && (
                <span className="                    absolute                    right-0                    top-[53px]                    hidden                    h-[75px]                    w-px                    bg-[#dfe3e2]                    sm:block                    lg:top-[59px]                  " />
              )} */}
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          MOBILE / TABLET IMAGE

          Desktop uses the SVG geometry above.
          Mobile uses normal flow.
      ====================================================== */}

      <div className="relative z-[1] h-full sm:mx-8 sm:h-full lg:hidden">
        <Image
          src={hero}
          alt="Solar panels on a modern home"
          className="h-full w-full rounded-[18px] object-cover"
        />
        <div className=" absolute bottom-[18px] right-[15px] z-10 w-[175px] rounded-[14px] bg-white/95 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
          <div className="h-[30px] w-[80px] text-[#609463]">
            <Image src={hero_icon1} alt="image" className="w-full -ml-6" />
          </div>

          <h3 className="mt-3 text-[16px] font-bold leading-[1.25] mt-8">
            CLEAN ENERGY
          </h3>

          <p className="mt-2 text-[12px] leading-[1.6] text-[#737b82]">
            STORED TODAY FOR A STONGER TOMORROW.
          </p>
        </div>
      </div>
    </section>
  );
}
