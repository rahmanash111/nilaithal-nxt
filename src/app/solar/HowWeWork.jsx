"use client";

import {
  Sparkle,
} from "lucide-react";

import img1 from "../../assets/our process.webp";
import img2 from "../../assets/our process 2.webp";
import img3 from "../../assets/our process 3.webp";
import img4 from "../../assets/our process 4.webp";
import img5 from "../../assets/our process 5.webp";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: img1,
    title: "Consultation",
    description: "Understanding your energy needs and roof conditions.",
  },
  {
    number: "02",
    icon: img2,
    title: "Design & Plan",
    description: "Custom solar system sized for your site and budget.",
  },
  {
    number: "03",
    icon: img3,
    title: "Implementation",
    description: "Expert installation with full quality assurance.",
  },
  {
    number: "04",
    icon: img4,
    title: "Support & Maintain",
    description: "Ongoing monitoring and maintenance for peak output.",
  }
];

export default function HowWeWork() {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-12 w-full ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ---------------- Heading ---------------- */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-green-600">
            HOW WE WORK
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl ">
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
          {steps.map(({ number, icon, title, description }, i) => (
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

              <div className="relative z-10 flex h-22 w-22 items-center justify-center rounded-full border-2 bg-white">
                {/* <Icon className="h-10 w-10 text-green-600" strokeWidth={1.75} /> */}
                <Image src={icon} alt="image" />
              </div>

              <p className="mt-4 text-base font-bold tracking-wide text-green-600">
                {number}
              </p>
              <h3 className="mt-1 text-base font-bold text-white">{title}</h3>
              <p className="mt-2 max-w-[180px] text-sm leading-relaxed text-slate-200">
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
