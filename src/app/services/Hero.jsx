"use client";

import { useState } from "react";
import { Leaf, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Leaf,
    title: "Clean & Renewable",
    subtitle: "100% Sustainable Solutions",
  },
  {
    icon: Zap,
    title: "Smart & Efficient",
    subtitle: "Advanced Technology",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    subtitle: "Built for Long-term Performance",
  },
];

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex items-center justify-center overflow-hidden bg-brand-darker">
      {/* Background video */}
      {/* <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 `}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // onCanPlay={() => setVideoReady(true)}
      >
        <source src="https://www.venusinterior.in/uploads/videos/livingroom.mp4" type="video/mp4" />
      </video> */}

      <Image
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 `}
        width={100}
        height={100}
        src={"https://www.venusinterior.in/uploads/Nilaithal/Golden-Hour.webp"}
        alt="hero-image"
      />

      {/* Dark overlay for text legibility, matching the reference */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full max-w-7xl flex-col ml-12 lg:ml-0">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left: heading + copy + features */}
          <div>
            <h1 className="animate-fadeUp text-[3rem] font-semibold leading-[1.1] text-white sm:text-6xl lg:text-[4.4rem]">
              Our Services
            </h1>

            <p
              className="w-full md:w-[80%] mt-5 max-w-md text-[15px] leading-relaxed text-white/70 sm:text-base animate-fadeUp"
              style={{
                animationDelay: "0.15s",
                animationFillMode: "backwards",
              }}
            >
              End-to-end renewable energy solutions designed around your needs,
              built for long-term performance.
            </p>

            <div
              className="mt-10 flex flex-col gap-x-8 gap-y-6 animate-fadeUp"
              style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
            >
              {features.map(({ icon: Icon, title, subtitle }) => (
                <div key={title} className="flex items-center gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dfe2d7] text-(--primary-light)">
                    <Icon
                      className="h-[18px] w-[18px] text-[#70c05b]"
                      strokeWidth={2}
                    />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-medium text-white">
                      {title}
                    </span>
                    <span className="block text-xs text-white/55">
                      {subtitle}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: watch our story */}
          {/* <div
            className="flex items-center gap-4 animate-fadeUp lg:justify-end"
            style={{ animationDelay: "0.45s", animationFillMode: "backwards" }}
          >
            <button
              type="button"
              aria-label="Watch our story"
              className="group relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/40 transition hover:bg-(--primary-light) hover:ring-(--primary-light)"
            >
              <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-40 group-hover:opacity-0" />
              <Play
                className="relative ml-1 h-5 w-5 fill-white text-white"
                strokeWidth={0}
              />
            </button>
            <div className="leading-tight">
              <span className="block text-sm font-medium text-white">
                Watch Our Story
              </span>
              <span className="block text-xs text-white/55">2:43 min</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
