"use client";

import { ArrowRight, Leaf } from "lucide-react";

export default function EnergyCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#063d2f]">
      {/* Background Image + Green Gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
                90deg,
                #063d2f 0%,
                #063d2f 30%,
                rgba(6, 61, 47, 0.98) 42%,
                rgba(6, 61, 47, 0.85) 52%,
                rgba(6, 61, 47, 0.55) 65%,
                rgba(6, 61, 47, 0.20) 82%,
                rgba(6, 61, 47, 0) 100%
            ),
            url("https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85")
        `,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* =========================================================
                CONTENT
            ========================================================= */}
      <div className="                    relative z-10                    mx-auto                    flex                    min-h-[197px]                    w-full                    max-w-[1434px]                    items-center                    px-[40px]                    py-[30px]                    lg:px-[78px]                    lg:py-0                ">
        {" "}
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
        <div className="                        hidden                        lg:block                        lg:w-[37%]                        lg:pl-[10px]                    ">
          <p className="                            mb-[18px]                            max-w-[330px]                            text-[17px]                            font-normal                            leading-[1.45]                            text-[#e1eee8]                        ">
            Partner with us for innovative energy storage solutions tailored to
            your goals.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="                            group                            flex                            h-[54px]                            w-[228px]                            items-center                            justify-center                            gap-[12px]                            rounded-[6px]                            border                            border-[#d9e5df]                            bg-white                            px-[20px]                            text-[15px]                            font-semibold                            text-[#3b896d]                            shadow-[0_2px_8px_rgba(0,0,0,0.12)]                            transition-all                            duration-300                            hover:-translate-y-[2px]                            hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)]                        "
          >
            Talk to Our Experts
            <ArrowRight
              size={19}
              strokeWidth={2.2}
              className="                                transition-transform                                duration-300                                group-hover:translate-x-[4px]                            "
            />
          </button>
        </div>
        {/* =====================================================
                    RIGHT ICON / BADGE
                ===================================================== */}
        <div className="                        hidden                        lg:flex                        lg:w-[15%]                        lg:items-center                        lg:justify-end                    ">
          <div className="flex items-center gap-[13px]">
            {/* Circular icon */}
            <div className="                                flex                                h-[58px]                                w-[58px]                                shrink-0                                items-center                                justify-center                                rounded-full                                border                                border-[#c9ded4]                                bg-[#f4faf7]                                shadow-[0_2px_8px_rgba(0,0,0,0.12)]                            ">
              <Leaf size={30} strokeWidth={1.7} className="text-[#418f6d]" />
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
