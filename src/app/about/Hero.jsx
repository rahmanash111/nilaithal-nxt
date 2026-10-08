"use client";

import { Leaf, Users } from "lucide-react";

import background from "../../assets/about us hero image.webp"
// import { HeroVideo } from "../components/landingpage/Hero";
import Image from "next/image";

export const CURVE = "M0.999,0.020 C0.433,0.099 0.278,0.108 0.197,0.121 C0.144,0.131 0.108,0.166 0.080,0.227 C0.038,0.331 0.026,0.393 0.022,0.469 C0.019,0.550 0.020,0.581 0.027,0.721 C0.035,0.873 0.038,0.972 0.140,0.969 C0.201,0.971 0.696,0.972 1.004,0.968";

// Icons are placeholders per the request — swap for your own anytime.
const highlights = [
    {
        icon: Leaf,
        title: "Clean Energy",
        subtitle: "for a Better Planet",
    },
    {
        icon: Users,
        title: "Sustainable",
        subtitle: "for Future Generations",
    },
];

export default function Hero() {
    return (
      <section className="relative w-full overflow-x-hidden bg-white py-10 lg:py-0">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-0">
          {/* Left: copy */}
          <div className="shrink-0 px-6 sm:px-8 lg:w-[42%] lg:pl-16 lg:pr-10 xl:pl-24">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
              About Us
            </span>

            <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
              Powering Change.
              <br />
              <span className="text-(--primary-light)">Building Tomorrow.</span>
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600">
              At Nilaithal, we are driven by a single, clear purpose to make
              clean energy simple, affordable, and genuinely worth it for every
              Indian household and business. No jargon. No shortcuts. Just
              reliable solar, EV charging, and energy storage systems built
              around how you actually live and work.
            </p>

            <div className="mt-8 flex items-center gap-6 sm:gap-8">
              {highlights.map(({ icon: Icon, title, subtitle }, i) => (
                <div key={title} className="flex items-center gap-4">
                  {i !== 0 && (
                    <span className="hidden h-10 w-px shrink-0 bg-gray-200 sm:block" />
                  )}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-(--primary-light)">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-bold text-gray-900">
                      {title}
                    </span>
                    <span className="block text-xs text-gray-500">
                      {subtitle}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative max-w-full h-[400px] md:h-[600px] w-full md:w-[65%]">
            {/* Clip path — curve + closing lines to seal the shape */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="curvyEdge" clipPathUnits="objectBoundingBox">
                  <path d={`${CURVE} L1.000,1.000 L1.000,0.000 Z`} />
                </clipPath>
              </defs>
            </svg>

            {/* Image clipped to that shape */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: "url(#curvyEdge)" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1.2)",
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none", // prevents pause on click
                }}
              >
                <Image
                  src={background}
                  alt="image"
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </div>

            {/* Green border traced along the same curve, drawn on top */}
            {/* <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 1 1"
                        preserveAspectRatio="none"
                    >
                        <path
                            d={CURVE}
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth={3}
                            vectorEffect="non-scaling-stroke"
                            strokeLinecap="round"
                        />
                    </svg> */}
          </div>
        </div>
      </section>
    );
}