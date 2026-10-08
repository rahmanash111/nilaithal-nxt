"use client";

import solar from "../../../assets/solar_energy.webp"
import ev from "../../../assets/ev_charging.webp"
import storage from "../../../assets/energy_storage.webp"
import innovative from "../../../assets/innovative.webp"
import tailored from "../../../assets/tailored.webp"
import green_planet from "../../../assets/green_planet.webp"



import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    icon: solar,
    title: "Solar Energy",
    href: "/solar",
    description:
      "High-efficiency solar panel systems for homes, businesses, and industries. Our solar installations are designed to maximize energy yield, reduce electricity bills, and pay for themselves faster, backed by proper site assessment, not guesswork.",
  },
  {
    icon: ev,
    title: "EV Charging Solutions",
    href: "/ev-charging",
    description:
      "Smart, fast EV charging solutions built for a greener tomorrow. Whether it's a home charger, a workplace charging point, or a public charging station through our India1 Charger network, we make EV charging simple and dependable.",
  },
  {
    icon: storage,
    title: "Energy Storage Solutions",
    href: "/energy-storage",
    description:
      "Advanced battery storage systems for energy independence and efficiency. Store solar power when it's abundant, use it when you need it. and keep your home or business running through grid outages.",
  },
];

const aboutPoints = [
  { text: "Innovative & Reliable Technologies", icon: innovative, },
  { text: "Tailored Energy Solutions", icon: tailored, },
  { text: "Commitment to a Greener Planet", icon: green_planet, }
];

export default function EnergySolutions() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gray-50">
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

      <div className="relative mx-auto max-w-6xl px-4 md:px-0">
        {/* ---------------- Heading ---------------- */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-green-600">
            OUR SOLUTIONS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Smart Energy Solutions
            <br />
            for a <span className="text-green-600">Sustainable</span> World
          </h2>
          <p className="text-center text-gray-600 mt-8">
            From rooftop solar panels to EV charging infrastructure and battery
            storage, Nilaithal builds renewable energy systems that work as hard
            as you do. Every solution is engineered for Indian climate
            conditions, grid requirements, and long-term reliability.
          </p>
        </div>

        {/* ---------------- Solution cards ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, title, description, href }) => (
            <div
              key={title}
              className="flex flex-col justify-center items-center gap-3 group rounded-2xl bg-white p-6 shadow-[0_2px_20px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-shadow hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
            >
              <div className="flex h-22 w-22 mb-5 items-center justify-center rounded-full bg-green-50">
                <Image alt="img" src={Icon} className="h-14 w-14" />
              </div>
              <h3 className="text-[16px] lg:text-[20px] font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 text-center">
                {description}
              </p>
              <Link
                href={href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-green-600"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* ---------------- CTA button ---------------- */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition-colors hover:bg-green-700"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ---------------- About / Sustainability section ---------------- */}
        <div className="mt-22 grid grid-cols-1 items-center gap-10 lg:mt-28 lg:grid-cols-2 lg:gap-16">
          {/* Left: text column */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-green-600">
              ABOUT NILAITHAL
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Committed to{" "}
              <span className="text-green-600">Sustainability.</span>
              <br />
              Driven by <span className="text-green-600">Innovation.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500">
              At Nilaithal, we believe clean energy shouldn't be complicated.
              We're a Chennai-based renewable energy company built around one
              goal: making solar power, EV charging, and energy storage
              accessible, reliable, and genuinely worth the investment for
              homeowners, businesses, and communities across India.
              <br />
              <br />
              We don't believe in one-size-fits-all installations. Every project
              starts with understanding how you actually use energy, then
              designing a system around that not the other way around.
            </p>

            <ul className="mt-6 space-y-3">
              {aboutPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  {/* <CheckSquare className="h-4 w-4 flex-shrink-0 text-green-600" /> */}
                  <div className="flex items-center justify-center bg-gray-200 rounded-full p-1">
                    <Image
                      className="h-[25px] w-[25px]"
                      src={point.icon}
                      alt={point.text}
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition-colors hover:bg-green-700"
            >
              More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: image with overlapping card */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
                alt="Aerial view of a solar farm surrounded by greenery"
                className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[420px]"
              />
            </div>

            {/* overlapping info card */}
            <div className="absolute -bottom-10 md:-bottom-8 left-8 md:left-4 w-[calc(100%-2rem)] max-w-xs rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:-left-10 sm:bottom-35">
              <p className="mt-3 text-lg font-bold leading-snug text-slate-900">
                Redefining Energy
                <br />
                for Generations to Come.
              </p>
              <span className="mt-3 block h-0.5 w-10 bg-green-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

