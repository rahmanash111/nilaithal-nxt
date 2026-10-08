"use client";

import solar from "../../assets/solar_energy.webp";
import ev from "../../assets/commercial (1).webp";
import storage from "../../assets/solar copy.webp";
import hero_icon15 from "../../assets/aration.webp";
import innovative from "../../assets/innovative.webp";
import tailored from "../../assets/tailored.webp";
import green_planet from "../../assets/green_planet.webp";
import img from "../../assets/roftop solar.webp";
import powerPlant from "../../assets/solar power plant.webp";
import commercialSolar from "../../assets/commercal solar.webp";
import solarMan from "../../assets/solar-man.webp";
import solarPanel from "../../assets/why choose solar.webp";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useContactStore } from "../store/contactStore";
import { useEffect } from "react";

const solutions = [
  {
    type: "card",
    icon: solar,
    title: "Rooftop Solar",
    description:
      "Ideal for homes and small businesses to cut power bills and gain energy independence.",
    image: img,
  },
  {
    type: "card",
    icon: ev,
    title: "Commercial Solar",
    description:
      "Scalable solar solutions for industries and commercial buildings to reduce operating costs.",
    image: commercialSolar,
  },
  {
    type: "card",
    icon: storage,
    title: "Solar Power Plants",
    description:
      "Large-scale solar plants delivering clean, reliable power to communities and industries.",
    image: powerPlant,
  },
  {
    type: "card",
    icon: hero_icon15,
    title: "Operation & Maintenance",
    description:
      "Comprehensive O&M services to ensure optimal performance and maximum energy generation.",
    image: solarMan,
  },
  {
    title: "Why Choose Nilaithal Solar?",
    points: [
      "Abundant & Renewable - Tamil Nadu sunshine, 300+ days/year",
      "Low Operating Cost - Solar has no fuel cost, minimal maintenance",
      "Energy Independence - Freedom from grid tariff hikes",
      "Reliable & Durable - 25 year panel warranty, 10 year inverter warranty",
      "Environment Friendly - Zero emissions, carbon credit eligible",
    ],
    image: solarPanel,
  },
];

const aboutPoints = [
  { text: "Innovative & Reliable Technologies", icon: innovative },
  { text: "Tailored Energy Solutions", icon: tailored },
  { text: "Commitment to a Greener Planet", icon: green_planet },
];

const featureCard = solutions.map(
  ({ icon: Icon, title, description, type, points, image }, i) => {
    return type === "card" ? (
      <div
        key={i}
        className="w-full flex flex-col justify-between items-center gap-3 group rounded-2xl bg-white overflow-hidden shadow-[0_2px_20px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-shadow hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
      >
        {/* <div className="flex flex-col justify-between"> */}
        {/* </div> */}
        <div className="w-full flex flex-wrap items-center justify-between px-3 pt-3">
          <div className="flex shrink h-18 w-[30%] items-center justify-center rounded-full bg-gray-50">
            <Image
              alt="img"
              src={Icon}
              className={`${i == 0 ? "h-12 w-12" : "h-18 w-18"}`}
            />
          </div>
          <h3
            style={{ fontFamily: "var(--font-text)" }}
            className="w-[60%] text-[20px] lg:text-[18px] font-semibold text-slate-900"
          >
            {title}
          </h3>
        </div>
        <p className="text-center md:text-left mt-2 text-sm 2xl:text-base leading-relaxed text-slate-500 px-3">
          {description}
        </p>
        <div className="relative w-full">
          <Image
            className={"w-full h-[250px] object-cover -z-1 object-bottom"}
            src={image}
            alt="image"
          />
          {/* <a
            href="#"
            className="absolute z-1 bottom-4 right-4 mt-4 backdrop-blur-3xl p-2 rounded-full inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-green-600"
          >
            <ArrowRight className="h-4 w-4 transition-transform text-(--primary-light) group-hover:translate-x-0.5" />
          </a> */}
        </div>
      </div>
    ) : (
      <div
        key={i}
        className="min-h-[400px] relative flex flex-col justify-start items-center p-4 gap-3 group rounded-2xl bg-(--primary-dark) overflow-hidden shadow-[0_2px_20px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-shadow hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
      >
        <p className="mt-2 max-w-lg text-[20px] font-semibold leading-6 lg:leading-7 text-white">
          {title}
        </p>
        <ul className="mt-2 space-y-2">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-[14px] md:text-[12px] xl:text-[14px] text-white"
            >
              <CheckCircle2
                className="h-4 w-4 shrink-0 bg-green-800 rounded-full text-white"
                strokeWidth={2}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="sm:hidden 2xl:block absolute w-full -bottom-20 2xl:-bottom-20">
          <Image
            className={"w-full h-[200px] object-cover -z-1 object-bottom"}
            src={image}
            alt="image"
          />
        </div>
      </div>
    );
  },
);

export default function Solutions() {
  const scrollToForm = useContactStore((state) => state.scrollToForm);
  const setScrollToForm = useContactStore((state) => state.setScrollToForm);

  useEffect(() => {
    if (scrollToForm) {
      const timer = setTimeout(() => {
        const el = document.getElementById("contact-form");

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        // Reset so normal visits to /contact don't scroll
        setScrollToForm(false);
      }, 200);

      const timer1 = setTimeout(() => {
        window.scrollBy({
          top: -80,
          behavior: "smooth",
        });
      }, 1200);

      return () => clearTimeout(timer, timer1);
    }
  }, [scrollToForm, setScrollToForm]);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 w-full px-[5%]">
      {/* decorative dot grids */}
      <div
        className="pointer-events-none absolute left-0 top-10 hidden h-40 w-40 opacity-60 sm:block"
        // style={{ backgroundImage: "radial-gradient(circle, #d9dee6 1.5px, transparent 1.5px)",backgroundSize: "14px 14px", }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-56 w-56 opacity-60 sm:block"
        // style={{ backgroundImage: "radial-gradient(circle, #d9dee6 1.5px, transparent 1.5px)", backgroundSize: "14px 14px", }}
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 hidden h-32 w-32 opacity-50 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d9dee6 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-4 md:px-0">
        {/* ---------------- Heading ---------------- */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            id="contact-form"
            className="text-xs font-bold tracking-[0.2em] text-green-600"
          >
            OUR SOLAR SOLUTIONS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Tailored Solar Solutions for Every Need
          </h2>
          <p className="mt-4">
            No two rooftops are the same, and no two energy needs are either.
            Nilaithal's solar solutions span residential, commercial, and
            utility-scale installations, all designed with the same principle:
            maximum output for your specific site, budget, and goals.
          </p>
        </div>

        {/* ---------------- Solution cards ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {featureCard}
        </div>
      </div>
    </section>
  );
}
