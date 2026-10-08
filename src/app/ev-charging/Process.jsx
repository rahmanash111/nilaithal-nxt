"use client";

import {
  ClipboardList,
  Compass,
  Wrench,
  Headset,
  Quote,
  ArrowRight,
  Sparkle,
  Handshake,
  Drill,
  NotebookPen,
} from "lucide-react";

/**
 * HowWeWork
 * -----------------------------------------------------------------------
 * "Our Simple 4-Step Process" + Testimonial / CTA section.
 * Static, mobile-responsive Next.js component — Tailwind CSS only.
 *
 * Notes for Hostinger static export:
 * - Plain <img> tags (not next/image) so it works with `next export`.
 * - Icons from `lucide-react` (npm i lucide-react).
 * - Replace placeholder photo / bulb image URLs with your own assets.
 * ----------------------------------------------------------------------- */

import img4 from "../../assets/end support.png";
import Image from "next/image";

const steps = [
  {
    image: false,
    number: "01",
    icon: Handshake,
    title: "Consultation",
    description:
      "We assess your site, EV load requirements, power supply capacity, and usage pattern to design the right charging setup.",
  },
  {
    image: false,
    number: "02",
    icon: NotebookPen,
    title: "Design & Plan",
    description:
      "Our engineers design a custom AC or DC charging layout. covering charger placement, cable routing, load balancing, and grid connection.",
  },
  {
    image: false,
    number: "03",
    icon: Drill,
    title: "Implementation",
    description:
      "Certified technicians install your EV chargers with full safety checks, electrical commissioning, and network configuration.",
  },
  {
    image: true,
    number: "04",
    icon: img4,
    title: "Support & Maintain",
    description:
      "Remote monitoring, preventive maintenance, and rapid response support to keep your charging infrastructure running at peak reliability.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-12 w-full ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ---------------- Heading ---------------- */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-green-600">
            HOW WE WORK
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-black sm:text-4xl ">
            Our Simple{" "}
            <span className="text-green-600">
              <span
                className="font-medium"
                style={{ fontFamily: "var(--font-text)" }}
              >
                4-
              </span>
              Step
            </span>{" "}
            Process
          </h2>
        </div>

        {/* ---------------- Steps ---------------- */}
        <div className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {steps.map(({ number, icon:Icon, icon, title, description, image }, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center"
            >
              {/* connector line to next step (desktop only) */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute left-1/2 top-10 hidden h-px w-full border-t-2 border-dashed border-green-200 lg:flex items-center justify-center">
                  <div className="text-green-600 mb-[2px] fill-green-600">
                    <Sparkle className="w-5 fill-green-600" />
                  </div>
                </div>
              )}

              <div className="relative z-10 flex h-22 w-22 items-center justify-center rounded-full border-2  border-green-200 bg-white">
                { image?<Image src={icon} alt="image" className="h-13 w-13"/>: <Icon className="h-10 w-10 text-green-500" strokeWidth={1} /> }
                
              </div>

              <p className="mt-4 text-base font-bold tracking-wide text-green-600">
                {number}
              </p>
              <h3 className="mt-1 text-base font-bold text-black">{title}</h3>
              <p className="mt-2 max-w-[180px] text-sm leading-relaxed text-gray-700">
                {description}
              </p>
              {/* {i < steps.length - 1 && } */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
