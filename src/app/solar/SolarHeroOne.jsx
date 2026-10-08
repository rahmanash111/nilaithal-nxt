"use client";
import "./Solar.css";
import React, { useEffect, useState } from "react";
import hero_icon1 from "../../assets/hero icon image.webp";
import hero_icon2 from "../../assets/hero (5).webp";
import hero_icon3 from "../../assets/hero (4).webp";
import hero_icon4 from "../../assets/hero (3).webp";
import hero_icon18 from "../../assets/hero (1).webp";
import hero_icon6 from "../../assets/hero truct icon.webp";
import hero_icon7 from "../../assets/hero trust icon.webp";
import hero_icon8 from "../../assets/hero trust icons.webp";
import Image from "next/image";
import useModal from "../store/modal";
import { useContactStore } from "../store/contactStore";

const features = [
  {
    title: "High Efficiency",
    description: "Maximum power output per square foot",
    icon: hero_icon2,
  },
  {
    title: "Long Life",
    description: "25+ years of reliable, warranted performance",
    icon: hero_icon3,
  },
  {
    title: "Cost Savings",
    description: "Lower bills, higher savings every single month",
    icon: hero_icon4,
  },
  {
    title: "Eco Friendly",
    description: "Clean energy that reduces your carbon footprint",
    icon: hero_icon18,
  },
];

const stats = [
  {
    value: "250+",
    text: (
      <>
        Solar Projects
        <br />
        Delivered
      </>
    ),
    type: "solar",
    icon: hero_icon8,
  },
  {
    value: null,
    text: null,
    type: null,
    icon: null,
  },
  {
    value: "80MW+",
    text: (
      <>
        Total Capacity
        <br />
        Installed
      </>
    ),
    type: "energy",
    icon: hero_icon6,
  },
  {
    value: null,
    text: null,
    type: null,
    icon: null,
  },
  {
    value: "98%",
    text: (
      <>
        Customer
        <br />
        Satisfaction
      </>
    ),
    type: "people",
    icon: hero_icon7,
  },
];

export default function SolarHero() {
  const [windowWidth, setWindowWidth] = useState(0);
  const openModal = useModal((state) => state.openModal);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const setScrollToForm = useContactStore(
          (state) => state.setScrollToForm
        );

  return (
    <section className="relative isolate mx-auto min-h-[800px] w-full overflow-hidden bg-transparent font-[Inter,sans-serif] text-[#101a28] lg:min-h-[850px]">
      <div className="absolute right-0 top-[58px] z-[1] hidden h-[690px] w-[53.5%] lg:block">
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 875 700"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="solarHeroClip">
              <path d=" M220 0 H875 V700 H0 L145 585 C153 579 158 571 153 562 L25 402 C12 385 8 370 18 350L170 54 C180 33 194 17 220 0 Z " />
            </clipPath>
          </defs>

          <image
            href="/images/hero image.webp"
            x="0"
            y="0"
            width="875"
            height="700"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#solarHeroClip)"
          />

          <path
            d=" M220 0 H875 V700 H0 L145 585 C153 579 158 571 153 562 L25 402 C12 385 8 370 18 350 L170 54 C180 33 194 17 220 0 "
            fill="none"
            stroke="#d8dddf"
            strokeWidth="1.5"
          />

          <path
            d=" M0 700 L145 585 C153 579 158 571 153 562 "
            fill="none"
            stroke="#4d913f"
            strokeWidth="2"
          />
        </svg>

        <div className=" absolute right-0 top-[-39px] z-20 h-[39px] w-[76px] bg-[#7eb7d1] [clip-path:polygon(43%_0,100%_0,100%_100%,0_100%)] " />

        <div className=" absolute bottom-[62px] right-[17%] z-30 h-[242px] w-[265px] rounded-[15px] bg-white/95 p-[28px] shadow-[0_12px_35px_rgba(0,0,0,0.15)] ">
          <div className="flex h-[50px] w-[100px] items-center justify-center text-[#619364]">
            <Image src={hero_icon1} alt="image" className="w-full -ml-16" />
          </div>

          <h3 className="mt-[2] text-[19px] font-bold leading-[1.25] tracking-[-0.4px] text-[#161e28]">
            Clean Energy
            <br />
            Bright Future
          </h3>

          <p className="mt-[13px] text-[12px] leading-[1.65] text-[#737b82] ">
            {/* Every ray of sun
            <br />
            brings us closer to
            <br />a cleaner world. */}
            Every ray of sunlight brings us one step closer to a cleaner,
            self-sufficient India.
          </p>

          <span className="mt-[14px] block h-[2px] w-[29px] bg-[#d8c38a]" />
        </div>
      </div>

      {/* =====================================================
          DOT PATTERN
      ====================================================== */}

      <div className="absolute left-[49.1%] top-[132px] z-10 hidden w-[100px] grid-cols-5 gap-x-[11px] gap-y-[9px] lg:grid">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#c9dfa9]" />
        ))}
      </div>

      <div className="relative z-20 px-5 pb-[50px] pt-[38px] sm:px-8 md:px-12 lg:absolute lg:left-[4.7%] lg:top-[48px] lg:w-[43%] lg:px-0 lg:pb-0 ">
        <div className=" mb-[14px] text-[12px] font-bold tracking-[0.2px] text-[#398344] lg:text-[14px] ">
          SOLAR ENERGY
        </div>

        <h1 className=" m-0 text-[39px] font-bold leading-[1.06] tracking-[-1.7px] text-[#101a28] sm:text-[45px] lg:text-[clamp(42px,3.65vw,58px)] lg:leading-[1.04] lg:tracking-[-2px] ">
          Smarter Energy.
          <br />
          Stronger <span className="text-[#398344]">Tomorrow.</span>
        </h1>

        <p className=" mt-[22px] max-w-[410px] text-[14px] leading-[1.7] text-[#3d4650] lg:mt-[29px] lg:text-[15px] lg:leading-[1.8] ">
          {/* High-performance solar solutions that reduce
          <br className="hidden lg:block" />
          costs, increase energy independence and
          <br className="hidden lg:block" />
          create a sustainable future. */}
          High-performance solar panel systems that cut your electricity bill,
          increase your energy independence, and pay for themselves. faster than
          you think.
        </p>

        <div className=" mt-[30px] grid grid-cols-2 gap-y-[28px] sm:grid-cols-4 sm:gap-y-0 lg:mt-[37px] lg:w-[500px] xl:w-[610px] ">
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

              {index !== features.length - 1 && (
                <span className="                    absolute                    right-0                    top-[53px]                    hidden                    h-[75px]                    w-px                    bg-[#dfe3e2]                    sm:block                    lg:top-[59px]                  " />
              )}
            </div>
          ))}
        </div>

        <div className=" mt-[32px] flex flex-col gap-[10px] sm:flex-row sm:gap-[18px] lg:mt-[42px] lg:gap-[22px] ">
          <button
            onClick={() => openModal()}
            className="flex h-[46px] w-full items-center justify-between rounded-[8px] border border-[#398344] bg-[#398344] px-[17px] text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30753a] sm:w-[205px] lg:h-[48px] lg:w-[216px] lg:text-[14px] "
          >
            <span>Request a Free Quote</span>
            <span className="text-[17px]">→</span>
          </button>

          <button onClick={()=>setScrollToForm(true)} className=" flex h-[46px] w-full items-center justify-between rounded-[8px] border-[1.5px] border-[#83a887] bg-white px-[17px] text-[14px] font-semibold text-[#26322a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7faf7] sm:w-[225px] lg:h-[48px] lg:w-[244px] lg:text-[14px] ">
            <span>Explore Solar Solutions</span>
            <span className="text-[17px] text-[#398344]">→</span>
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE / TABLET IMAGE

          Desktop uses the SVG geometry above.
          Mobile uses normal flow.
      ====================================================== */}

      <div className="relative z-[1] mx-5 h-[340px] sm:mx-8 sm:h-[430px] lg:hidden ">
        <img
          src="/images/hero image.webp"
          alt="Solar panels on a modern home"
          className="h-full w-full rounded-[18px] object-cover"
        />
        <div className=" absolute bottom-[18px] right-[15px] z-10 w-[175px] rounded-[14px] bg-white/95 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
          <div className="relative">
            <h3 className="text-[16px] font-bold leading-[1.25]">
              Clean Energy
              <br />
              Bright Future
            </h3>
            <Image
              src={hero_icon1}
              alt="image"
              className="absolute top-0 -right-4 h-[50px] w-[70px]"
            />
          </div>

          <p className="mt-2 text-[12px] leading-[1.6] text-[#737b82]">
            Every ray of sun brings us closer to a cleaner world.
          </p>
        </div>
      </div>

      {/* =====================================================
          STATISTICS

          DESKTOP:
          absolute bottom

          MOBILE:
          normal flow

          This completely eliminates the overlap problem.
      ====================================================== */}

      <div
        className={`${windowWidth < 600 && "w-[100%] text-center justify-self-center"}  relative z-30 mx-5 mb-5 mt-6 flex overflow-hidden rounded-[15px] border-2 border-[#4d704f]/50 bg-[#07151c] sm:mx-8 lg:absolute lg:bottom-[0px] lg:left-[4.6%] lg:right-[6.3%] lg:mx-0 lg:mb-0 lg:mt-10 lg:h-[140px] lg:rounded-[18px] lg:flex-row justify-center items-center gap-8 md:gap-24`}
      >
        {stats.map((stat, index) =>
          stat.value ? (
            <div
              key={index}
              className="relative flex flex-col md:flex-row min-h-[76px] items-center gap-[9px] px-[12px] py-[12px] sm:px-[20px] lg:min-h-0 lg:gap-[20px] lg:px-[30px] lg:py-[20px]"
            >
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full sm:h-[45px] sm:w-[45px] lg:h-[70px] lg:w-[70px]">
                <Image src={stat.icon} alt="" className="w-full h-full" />
              </div>

              <div className="flex min-w-0 flex-col gap-[5px]">
                <strong className="                  text-[18px]                  font-bold                  leading-none                  text-white                  sm:text-[21px]                  lg:text-[28px]                ">
                  {stat.value}
                </strong>

                <span className="                  text-[11px]                  leading-[1.35]                  text-[#e0e4e5]                  lg:text-[12px]                ">
                  {stat.text}
                </span>
              </div>
            </div>
          ) : windowWidth < 600 ? (
            <span
              key={index}
              className="h-[45px] w-[1px] bg-white/25 lg:h-[66px] lg:w-[2px]"
            />
          ) : (
            <span
              key={index}
              className="h-[45px] w-[1px] bg-white/25 lg:h-[66px] lg:w-[2px]"
            />
          ),
        )}
      </div>
    </section>
  );
}
