"use client";

import img from "../../assets/Build for.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sun,
  Moon,
  BatteryCharging,
  Zap,
  ShieldCheck,
  Coins,
  Leaf,
  ArrowRight,
  Sparkles,
  Boxes,
} from "lucide-react";
import Image from "next/image";
import { useContactStore } from "../store/contactStore";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Icons are placeholders — swap for your own anytime.
const points = [
  { icon: BatteryCharging, label: "Advanced Lithium-Ion Battery Technology" },
  { icon: Zap, label: "Intelligent Energy Management System" },
  { icon: ShieldCheck, label: "Safe & Reliable Operation" },
  { icon: Boxes, label: "Modular & Scalable Design" },
  { icon: Coins, label: "Long-Term Warranted Performance" },
];

export default function StoreTodayPowerAlways() {
  const setScrollToForm = useContactStore((state) => state.setScrollToForm);

  const sectionRef = useRef(null);
  const pointRefs = useRef([]);
  pointRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(pointRefs.current, { opacity: 0, x: -40 });

      gsap.to(pointRefs.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          // Plays forward on the way in from either direction, and
          // reverses (slides back left) on the way out from either
          // direction — not just a one-time entrance.
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-10">
        {/* Left: copy */}
        <div>
          <span className="block text-xs font-semibold uppercase leading-relaxed tracking-[0.1em] text-(--primary-light)">
            BUILT FOR
            <br />
            REAL-WORLD IMPACT
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Reliable Storage for a <br />
            Cleaner, Stronger World.
            {/* More Than Storage.
            <br />A Smarter Energy Future. */}
          </h2>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-500">
            Nilaithal's battery energy storage systems are engineered to work
            seamlessly alongside rooftop solar, grid connections, and existing
            energy infrastructure. capturing every unit of clean power generated
            and delivering it exactly when you need it. Built for Indian
            conditions. Designed for decades.
          </p>

          <button
            onClick={() => setScrollToForm(true)}
            type="button"
            className="group mt-7 inline-flex items-center gap-2 rounded-lg  px-6 py-3.5 text-sm font-semibold transition hover:brightness-110 text-(--primary-light) border border-(--primary-light)"
          >
            Our Technology
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right: split circle image + curved point list */}
        <div className="flex items-center justify-start lg:justify-center gap-0 lg:gap-2">
          <div className="relative -ml-15 h-[280px] w-[280px] shrink-0 overflow-hidden sm:ml-0 sm:h-[280px] sm:w-[280px] lg:h-[400px] lg:w-[400px] xl:h-[550px] xl:w-[550px]">
            <Image className="h-full w-full" src={img} alt="image" />
          </div>

          {/* Curved point list */}
          <div className="relative flex flex-col justify-between gap-6 py-2 sm:gap-8 xl:ml-6">
            {points.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                ref={(el) => (pointRefs.current[i] = el)}
                className={`flex items-center gap-3 opacity-0`}
              >
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                  <Icon
                    className="h-5 w-5 shrink-0 text-(--primary-light)"
                    strokeWidth={1.75}
                  />
                </div>
                <span
                  className={`max-w-[140px] 2xl:max-w-[150px] text-xs font-semibold leading-snug text-gray-500 sm:text-sm`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative wave at the bottom of the section */}
      {/* <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full text-green-50"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,30 C240,60 480,0 720,20 C960,40 1200,10 1440,30 L1440,60 L0,60 Z" />
      </svg> */}
    </section>
  );
}
