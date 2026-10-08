"use client";

import {
  Zap,
  ArrowRight,
  Download,
  ShieldCheck,
  Expand,
  Leaf,
  Headphones,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import img from "../../assets/ev-charging-hero.webp";
import { useEffect, useState } from "react";
import useModal from "../store/modal";

// Icons are placeholders — swap for your own anytime.
const features = [
  { icon: Zap, label: "Smart & Fast Charging" },
  { icon: ShieldCheck, label: "Safe & Reliable Infrastructure" },
  { icon: Expand, label: "Scalable & Future Ready" },
  { icon: Leaf, label: "Energy Efficient Solutions" },
  { icon: Headphones, label: "End-to-End Support" },
];

export default function EVChargingHero() {
  const [windowWidth, setWindowWidth] = useState(0);

  const openModal = useModal((state) => state.openModal);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Below `lg`: normal stacked flow — text first, then a plain
          full-width image, nothing absolute and nothing clipped.
          At `lg` and up: switch to the original layered hero, image
          absolute + diagonally clipped behind the text. */}
      <div className="relative flex flex-col-reverse lg:block lg:min-h-[640px]">
        {/* Image */}
        <div className="relative order-1 h-64 w-full sm:h-80 lg:absolute lg:right-0 lg:top-0 lg:w-[55%] lg:order-none lg:h-[700px]">
          <div className="rounded-l-none relative h-full w-full overflow-hidden lg:rounded-l-full">
            <Image
              src={img}
              alt="hero-image"
              fill
              priority
              // sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-full w-full object-cover object-left"
            />
          </div>

          {/* Soft white-to-transparent blend along the diagonal — only
              relevant once the clip-path above is active, at `lg`. */}
          {/* <div
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(103deg, white 0%, white 38%, rgba(255,255,255,0.55) 46%, transparent 58%)",
            }}
          /> */}
        </div>

        {/* Text content */}
        <div className="relative z-10 order-2 mx-auto w-full max-w-7xl px-6 pb-10 pt-8 sm:px-8 sm:pb-12 lg:order-none lg:flex lg:h-full lg:items-center lg:px-10 lg:pb-28 lg:pt-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-(--primary-light)">
              <Zap className="h-4 w-4" strokeWidth={2.5} />
              EV Charging Solutions
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.25] md:leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Powering {windowWidth > 600 && <br />}
              Mobility.
              <br />
              <span className="text-(--primary-light)">Sustainably.</span>
            </h1>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-gray-500">
              Smart AC and DC EV charging infrastructure for homes, businesses,
              and public spaces across India. installed, managed, and supported
              end-to-end by Nilaithal.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openModal()}
                className="group inline-flex items-center gap-2 rounded-lg bg-(--primary-light) px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Get a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="/sample.png"
                download="/sample.png"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Download Brochure
                <Download className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative vertical label + scroll button — desktop only */}
        <div className="pointer-events-none absolute bottom-24 right-6 z-10 hidden flex-col items-center gap-4 lg:flex">
          <span className="h-16 w-px bg-white/30" />
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60"
            style={{ writingMode: "vertical-rl" }}
          >
            Energy Charging
          </span>
        </div>
        <span className="pointer-events-auto absolute bottom-6 right-6 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white/70 lg:flex">
          <ChevronDown className="h-4 w-4" strokeWidth={2} />
        </span>
      </div>

      {/* Feature bar — sits with normal spacing below the stack on
          mobile, and overlaps the bottom of the hero (negative margin)
          once the layered desktop layout is active at `lg`. */}
      <div
        // style={{
        //   background:
        //     "linear-gradient(to right, rgb(19, 53, 35) 0%, rgba(19, 53, 35, .9) 38%, rgba(19, 53, 35, .8) 95%)",
        // }}
        className="relative bg-gradient-to-br from-[#0B1F17] via-[#0F2A1E] to-[#081410] z-10 mx-4 mt-10 rounded-2xl px-6 py-10 sm:mx-8 sm:px-10 lg:mx-10 lg:-mt-14 overflow-hidden"
      >
        <div className="pointer-events-none absolute -top-32 right-[-80px] h-[420px] w-[420px] rounded-full bg-emerald-400/20 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-[-120px] left-1/4 h-[340px] w-[340px] rounded-full bg-emerald-600/25 blur-[110px]" />
        <div className="pointer-events-none absolute right-1/3 top-1/3 h-[260px] w-[260px] rounded-full bg-teal-400/10 blur-[100px]" />

        <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {features.map(({ icon: Icon, label }, i) => {
            return i == features.length - 1 ? (
              <div
                key={label}
                className="col-span-2 sm:col-span-1 flex items-center gap-4"
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-green-500/30 bg-[#0c302e] shadow-[0_0_12px_rgba(0,255,80,0.15)]">
                  {/* <div className="absolute inset-0 rounded-xl bg-green-500/5" /> */}
                  <Icon
                    className="z-2 h-5 w-5 md:h-8 md:w-8 text-green-400"
                    strokeWidth={2}
                  />
                </div>
                {/* <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-(--primary-light)">
                  <Icon className="h-5 w-5 md:h-10 md:w-10" strokeWidth={2} />
                </span> */}
                <span className="text-sm font-semibold leading-tight text-white md:text-lg">
                  {label}
                </span>
              </div>
            ) : (
              <div key={label} className="flex items-center gap-4">
                <div className="box-border relative flex h-12 w-12 p-2 items-center justify-center rounded-xl border border-green-500/30 bg-[#0c302e] shadow-[0_0_12px_rgba(0,255,80,0.15)]">
                  {/* <div className="absolute inset-0 rounded-xl bg-green-500/5" /> */}
                  <Icon
                    className="z-2 h-5 w-5 md:h-8 md:w-8 text-green-400"
                    strokeWidth={2}
                  />
                </div>
                {/* <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-(--primary-light)">
                  <Icon className="h-5 w-5 md:h-10 md:w-10" strokeWidth={2} />
                </span> */}
                <span className="text-sm font-semibold leading-tight text-white md:text-lg">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pb-4 sm:pb-6 lg:pb-8" />
    </section>
  );
}
