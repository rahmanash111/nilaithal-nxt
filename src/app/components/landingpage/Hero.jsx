"use client";
import Image from "next/image";

import Link from "next/link";
import { ArrowRight, LeafIcon } from "lucide-react";

import cleanEnergy from "../../../assets/clean_energy.webp";
import sustainable from "../../../assets/sustainable.webp";
import cost from "../../../assets/cost.webp";
import environment from "../../../assets/environment.webp";
import HeroStats from "./HeroStats";
import AnimatedDotsBackground from "./AnimatedDotsBackground";
import useModal from "@/app/store/modal";

// The wavy curve itself (no closing lines) — reuse this for both the clip and the border
export const CURVE =
  "M0.172,0.000 " +
  "C0.056,0.144 0.088,0.251 0.116,0.300 " +
  "C0.172,0.398 0.216,0.474 0.165,0.547 " +
  "C0.131,0.606 0.102,0.657 0.085,0.771 " +
  "C0.079,0.856 0.102,0.924 0.171,1.000";

export default function Hero() {
  const openModal = useModal((state) => state.openModal);

  return (
    <section className="relative bg-[#fafafa] w-full">
      <AnimatedDotsBackground />
      <div className="mx-auto md:w-full">
        <div className="grid items-center gap-6 md:gap-0 lg:grid-cols-[40%_60%]">
          {/* LEFT */}
          <div
            style={{ fontFamily: "var(--font-title)" }}
            className="flex flex-col gap-8 z-10 ml-0 md:ml-[20%] max-h-[1080px] max-w-[100vw] py-10 px-5 md:p-0"
          >
            <span className="inline-flex items-center rounded-full bg-gray-200 px-4 py-2 text-xs font-semibold uppercase w-fit tracking-wide text-green-700">
              <LeafIcon size={16} className="mr-2" />
              Clean Energy. Brighter Future.
            </span>
            <h1 className="font-black leading-tight text-gray-900 text-[clamp(2.25rem,4vw,4.5rem)]">
              {/* text-[40px] lg:text-7xl mt - 4 lg:mt-8*/}
              Powering Today,
              <span className="block text-green-700">Sustaining</span>
              Tomorrow.
            </h1>
            {/*mt-4 lg:mt-8*/}
            <p className="max-w-lg text-[clamp(1rem,1vw,2.5rem)] leading-6 lg:leading-7 text-gray-600">
              We design, install, and maintain solar, EV charging, and energy
              storage systems that cut costs today and carbon tomorrow for
              homes, businesses, and communities across India.
            </p>
            {/*mt-10*/}
            <div className="flex flex-wrap gap-5">
              <button
                onClick={() => openModal()}
                className="flex items-center rounded-md lg:rounded-xl lg:py-4 px-4 lg:px-3 py-3 w-full lg:w-fit font-semibold bg-green-700 text-white transition hover:bg-green-800"
              >
                Explore Solutions
                <ArrowRight className="ml-3" size={18} />
              </button>
              <Link
                href="services"
                className="flex items-center rounded-md lg:rounded-xl lg:py-4 px-4 lg:px-3 py-3 w-full lg:w-fit font-semibold border border-green-700 text-green-700 transition hover:bg-green-700 hover:text-white"
              >
                Our Services
                <ArrowRight className="ml-3" size={18} />
              </Link>
            </div>

            {/*mt-12*/}
            <div className="flex items-center justify-start flex-wrap gap-4">
              <Feature
                icon={cleanEnergy}
                title="Clean Energy"
                sub="Solutions"
              />

              <Feature icon={sustainable} title="Sustainable" sub="Future" />

              <Feature icon={cost} title="Cost" sub="Effective" />

              <Feature icon={environment} title="Environment" sub="Friendly" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative max-w-full h-[50vh] md:h-screen md:aspect-[5/4]">
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
              <HeroVideo />
            </div>

            {/* Green border traced along the same curve, drawn on top */}
            <svg
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
            </svg>
          </div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}

export function Feature({ icon, title, sub, color1, color2 }) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-full bg-green-100 p-2 text-green-700">
        <Image className="h-[25px] w-[25px]" alt="img" src={icon} />
      </div>
      <div>
        <p className={`font-semibold ${color1 ? `text-${color1}` : "text-black"}`}>{title}</p>
        <p className={`${color2 ? `text-${color2}` : "text-gray-500"}`}>
          {sub}
        </p>
      </div>
    </div>
  );
}

export const HeroVideo = () => {
  return (
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
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source
          src="https://www.venusinterior.in/uploads/Nilaithal/videos/hero.mp4"
          type="video/mp4"
        />
        {/* <source src="https://www.venusinterior.in/uploads/videos/banner-video.webm" type="video/webm" /> */}
      </video>
    </div>
  );
};
