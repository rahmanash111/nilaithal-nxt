"use client";

import {
  ClipboardList,
  Compass,
  Wrench,
  Headset,
  Quote,
  ArrowRight,
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

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Consultation",
    description: "Understanding your energy needs.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Design & Plan",
    description: "Customised solution tailored for you.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Implementation",
    description: "Expert installation with quality assurance.",
  },
  {
    number: "04",
    icon: Headset,
    title: "Support & Maintain",
    description: "Ongoing support for long-term performance.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ---------------- Heading ---------------- */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-green-600">
            HOW WE WORK
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Our Simple <span className="text-green-600"><span className="font-medium" style={{ fontFamily: "var(--font-text)"}}>4-</span>Step</span> Process
          </h2>
        </div>

        {/* ---------------- Steps ---------------- */}
        <div className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {steps.map(({ number, icon: Icon, title, description }, i) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              {/* connector line to next step (desktop only) */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute left-1/2 top-8 hidden h-px w-full border-t-2 border-dashed border-green-200 lg:block" />
              )}

              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-green-500 bg-white">
                <Icon className="h-6 w-6 text-green-600" strokeWidth={1.75} />
              </div>

              <p className="mt-4 text-sm font-bold tracking-wide text-green-600">
                {number}
              </p>
              <h3 className="mt-1 text-base font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 max-w-[180px] text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* ---------------- Testimonial + CTA ---------------- */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-2">
          {/* Testimonial card */}
          <div className="flex flex-col justify-center rounded-3xl bg-[#0d2b1a] p-8 sm:p-10">
            <Quote className="h-8 w-8 text-green-400" strokeWidth={1.5} />
            <p className="mt-5 text-lg font-medium leading-relaxed text-white sm:text-xl">
              Nilaithal&apos;s solar solution has significantly reduced our
              energy costs and helped us move towards a sustainable future.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                alt="Portrait of Ramesh Kumar"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-green-700"
              />
              <div>
                <p className="text-sm font-bold text-white">Ramesh Kumar</p>
                <p className="text-xs text-green-200/80">
                  Managing Director, GreenTech Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>

          {/* CTA card */}
          <div className="relative overflow-hidden rounded-3xl bg-green-50 p-8 sm:p-10">
            <div className="relative z-10 max-w-[50%]">
              <h3 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                Ready to Make the Switch to{" "}
                <span className="text-green-600">Clean Energy?</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Let&apos;s build a sustainable future together. Get a free
                consultation today!
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition-colors hover:bg-green-700"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* bulb + plant illustration */}
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop"
              alt="Light bulb with a growing plant inside, symbolizing clean energy"
              className="pointer-events-none absolute -right-4 bottom-0 h-40 w-40 object-contain sm:h-48 sm:w-48 lg:h-56 lg:w-56"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
