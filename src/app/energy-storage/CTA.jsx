"use client";

import { ArrowRight, BatteryCharging, Leaf, Quote } from "lucide-react";
import logo from "../../assets/full-logo.webp";

import energy from "../../assets/energy indipendance.webp";
import cost from "../../assets/cost efficiency.webp";
import solar from "../../assets/solar optimization.webp";
import grid from "../../assets/Grid Resilience.webp";


import Image from "next/image";
import { useContactStore } from "../store/contactStore";
import Link from "next/link";
// energy indipendance.png,cost efficiency.png,solar optimization.png,Grid Resilience.png
export default function PeaceOfMind() {
  const points = [
    { icon: energy, label: "Energy Independence" },
    { icon: grid, label: "Grid Backup Power" },
    { icon: solar, label: "Solar Optimisation" },
    { icon: cost, label: "Cost Reduction" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#e6f5d8]">
      {/* Background Image + Green Gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            url("/images/mountain.webp")
        `,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="                    relative z-10                    mx-auto                    flex        flex-col md:flex-row            min-h-[197px]                    w-full                    max-w-[1434px]                    items-center                    px-[40px]                    py-[30px]                    lg:px-[78px]                    lg:py-0                ">
        <div className="w-full lg:w-[35%] py-12">
          {/* Main heading */}
          <h2 className=" font-semibold                           max-w-[560px]                            text-[30px]                            font-medium                            leading-[1.12]                            tracking-[-0.8px]                            text-black                            sm:text-[34px]                            lg:text-[40px]                            lg:leading-[1.15]                        ">
            <Quote />
            Energy Storage
            <br className="hidden sm:block" /> isn't just a Technology.
            <br className="hidden sm:block" /> is't a Peace of Mind.
          </h2>
          <Image src={logo} alt={"image-logo"} className="w-20 mt-3" />
        </div>
        <div className="lg:w-[65%] lg:pl-[10px] grid grid-cols-2 md:grid-cols-4 gap-6">
          {points.map(({ icon, label }, i) => (
            <div key={i} className={`flex flex-col items-center gap-3`}>
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                <Image src={icon} alt={icon} className="h-15 w-15" />
                {/* <Icon
                  className="h-8 w-8 shrink-0 text-(--primary-light)"
                  strokeWidth={1.75}
                /> */}
              </div>
              <span
                className={`max-w-[130px] bg-white md:bg-transparent p-1 rounded-xl text-xs font-semibold leading-snug text-black sm:text-xl text-center`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import icon from "../../assets/maximum Renewable energy.webp";
export function CTA() {
  const setScrollToForm = useContactStore((state) => state.setScrollToForm);

  return (
    <section className="relative w-full overflow-hidden bg-[#063d2f] ">
      {/* Background Image + Green Gradient */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              #033d30 0%,
              #033d30 35%,
              rgba(3, 61, 48, 0.98) 47%,
              rgba(3, 61, 48, 0.82) 60%,
              rgba(3, 61, 48, 0.42) 75%,
              rgba(3, 61, 48, 0.08) 90%,
              transparent 100%
          ),
          url("/images/cta-bg.webp")
        `,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* =========================================================
                CONTENT
            ========================================================= */}
      <div className="                    relative z-10                    mx-auto                    flex                    flex-col                    md:flex-row                    gap-12                    min-h-[197px]                    w-full                    max-w-[1434px]                    items-center                    px-[40px]                    py-[30px]                    lg:px-[78px]                    lg:py-0                ">
        {/* =====================================================
                    LEFT CONTENT
                ===================================================== */}
        <div className="w-full lg:w-[48%]">
          {/* Small heading */}
          <div className="                            mb-[14px]                            flex                            items-center                            gap-[8px]                            text-[13px]                            font-semibold                            uppercase                            tracking-[0.7px]                            text-[#d9eee5]                            sm:text-[14px]                            lg:text-[14px]                        ">
            <span className="text-[15px] text-[#55a985]">──</span>

            <span>A Cleaner, More Resilient Tomorrow</span>
          </div>

          {/* Main heading */}
          <h2 className="                            max-w-[560px]                            text-[30px]                            font-medium                            leading-[1.12]                            tracking-[-0.8px]                            text-white                            sm:text-[34px]                            lg:text-[40px]                            lg:leading-[1.15]                        ">
            Let’s Build a Smarter
            <br className="hidden sm:block" /> Energy Future Together.
          </h2>
        </div>

        {/* =====================================================
                    MIDDLE CONTENT
                ===================================================== */}
        <div className="lg:w-[37%]">
          <p className=" mb-[18px]                            max-w-[330px]                            text-[17px]                            font-normal                            leading-[1.45]                            text-[#e1eee8]                        ">
            Partner with Nilaithal for advanced battery storage solutions
            tailored to your home, business, or industrial energy goals.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            onClick={() => setScrollToForm(true)}
            className="                            group                            flex                            h-[54px]                            w-[228px]                            items-center                            justify-center                            gap-[12px]                            rounded-[6px]                            border                            border-[#d9e5df]                            bg-white                            px-[20px]                            text-[15px]                            font-semibold                            text-[#3b896d]                            shadow-[0_2px_8px_rgba(0,0,0,0.12)]                            transition-all                            duration-300                            hover:-translate-y-[2px]                            hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)]                        "
          >
            Talk to Our Experts
            <ArrowRight
              size={19}
              strokeWidth={2.2}
              className="                                transition-transform                                duration-300                                group-hover:translate-x-[4px]                            "
            />
          </Link>
        </div>

        {/* =====================================================
                    RIGHT ICON / BADGE
                ===================================================== */}
        <div className="                        hidden                        lg:flex                        lg:w-[15%]                        lg:items-center                        lg:justify-end                    ">
          <div className="flex items-center gap-[13px]">
            {/* Circular icon */}
            <div className="                                flex                                h-[58px]                                w-[58px]                                shrink-0                                items-center                                justify-center                                rounded-full                                border                                border-[#c9ded4]                                bg-[#f4faf7]                                shadow-[0_2px_8px_rgba(0,0,0,0.12)]                            ">
              {/* <Leaf size={30} strokeWidth={1.7} className="text-[#418f6d]" /> */}
              <Image src={icon} alt="image" className="w-10" />
            </div>

            {/* Badge text */}
            <div className="                                text-[12px]                                font-semibold                                uppercase                                leading-[1.45]                                tracking-[0.8px]                                text-[#e4eee9]                            ">
              <div>Sustainable</div>
              <div>Reliable</div>
              <div>Resilient</div>
            </div>
          </div>
        </div>

        {/* =====================================================
                    MOBILE CTA
                ===================================================== */}
        <div className="                        absolute                        bottom-[25px]                        left-[40px]                        hidden                        sm:block                        lg:hidden                    ">
          <button
            type="button"
            className="                            group                            flex                            h-[48px]                            items-center                            justify-center                            gap-[10px]                            rounded-[6px]                            bg-white                            px-[18px]                            text-[14px]                            font-semibold                            text-[#3b896d]                            shadow-md                        "
          >
            Talk to Our Experts
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
