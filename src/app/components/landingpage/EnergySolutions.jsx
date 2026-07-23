"use client";

import { Sun, Wind, Zap, BatteryCharging, ArrowRight, CheckSquare } from "lucide-react";

/**
 * EnergySolutions
 * -----------------------------------------------------------------------
 * Static, fully responsive Next.js (App/Pages router compatible) section
 * built with Tailwind CSS only — no external CSS files needed.
 *
 * Notes for Hostinger static export:
 * - Uses plain <img> tags (not next/image) so it works with `next export`
 *   / static hosting without image-optimization config.
 * - Icons come from `lucide-react` (npm i lucide-react).
 * - Replace the Unsplash image URL with your own asset in /public if you
 *   want to self-host it.
 * ----------------------------------------------------------------------- */

const solutions = [
  {
    icon: Sun,
    title: "Solar Energy",
    description:
      "High-efficiency solar solutions for homes, businesses & industries.",
  },
  {
    icon: Zap,
    title: "EV Charging Solutions",
    description:
      "Smart and fast EV charging solutions for a greener tomorrow.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Storage Solutions",
    description:
      "Advanced storage systems for energy independence and efficiency.",
  },
];

const aboutPoints = [
  "Innovative & Reliable Technologies",
  "Tailored Energy Solutions",
  "Commitment to a Greener Planet",
];

export default function EnergySolutions() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
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

      {/* small floating leaf accent */}
      <div className="pointer-events-none absolute left-4 top-40 hidden -rotate-12 text-green-600/70 sm:block lg:left-10">
        <LeafIcon className="h-10 w-10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
        </div>

        {/* ---------------- Solution cards ---------------- */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white p-6 shadow-[0_2px_20px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-shadow hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                <Icon className="h-7 w-7 text-green-600" strokeWidth={1.75} />
              </div>
              <h3 className="text-[16px] lg:text-[20px] font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-green-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>

        {/* ---------------- CTA button ---------------- */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition-colors hover:bg-green-700"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* ---------------- About / Sustainability section ---------------- */}
        <div className="mt-20 grid grid-cols-1 items-center gap-10 lg:mt-28 lg:grid-cols-2 lg:gap-16">
          {/* Left: text column */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-green-600">
              ABOUT NILAITHAL
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Committed to <span className="text-green-600">Sustainability.</span>
              <br />
              Driven by <span className="text-green-600">Innovation.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500">
              At Nilaithal, we believe in the power of nature to create a
              cleaner, smarter, and more sustainable world. Our solutions are
              designed to reduce carbon footprints and build a better
              tomorrow.
            </p>

            <ul className="mt-6 space-y-3">
              {aboutPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckSquare className="h-4 w-4 flex-shrink-0 text-green-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition-colors hover:bg-green-700"
            >
              More About Us
              <ArrowRight className="h-4 w-4" />
            </a>
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
              <LeafIcon className="h-6 w-6 text-green-600" />
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

/* Small hand-drawn style leaf icon to match the brand mark in the design */
function LeafIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 4C10 4 4 10 4 18c0 1 0 2 1 2s2-1 2-2c0-6 5-11 11-11 1 0 2-1 2-2s-1-1 0-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18C10 14 14 10 19 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
