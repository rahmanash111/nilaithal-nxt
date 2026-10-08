"use client";

import { Leaf, Users, RotateCwFadingClock, Heart } from "lucide-react";

import background from "../../assets/contact hero.webp";

import Image from "next/image";

export const CURVE = `M 70 0

                C 52 0, 40 5, 31 18
                C 14 42, 9 78, 5 120
                C 0 165, 0 215, 5 260
                C 9 302, 19 332, 38 346
                C 48 353, 62 354, 80 354

                L 548 354
                L 548 0
                Z`;

// Icons are placeholders per the request — swap for your own anytime.
const highlights = [
  {
    icon: Heart,
    title: "Free Consultation",
    subtitle: "No pressure, No obligation",
  },
  {
    icon: RotateCwFadingClock,
    title: "Quick Response",
    subtitle: "Within 24 hours",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 lg:py-0">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-0">
        {/* Left: copy */}
        <div className="shrink-0 px-6 sm:px-8 lg:w-[42%] lg:pl-16 lg:pr-10 xl:pl-24">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
            CONTACT US
          </span>

          <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
            Let's Talk
            <br />
            <span className="text-(--primary-light)">Clean Energy.</span>
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600">
            Whether you're a homeowner exploring rooftop solar for the first
            time, a business looking to cut energy costs with commercial solar,
            or an organisation planning EV charging infrastructure, we're ready
            to help. Reach out to Nilaithal and our energy consultants will get
            back to you within 24 hours with honest advice, a free site
            assessment, and a transparent quote.
          </p>

          <div className="mt-8 flex items-center gap-6 sm:gap-8">
            {highlights.map(({ icon: Icon, title, subtitle }, i) => (
              <div key={title} className="flex items-center gap-4">
                {i !== 0 && (
                  <span className="hidden h-10 w-px shrink-0 bg-gray-200 sm:block" />
                )}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-(--primary-light)">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-gray-900">
                    {title}
                  </span>
                  <span className="block text-xs text-gray-500">
                    {subtitle}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: curved-mask image */}
        <div className="relative h-[400px] w-full max-w-full md:h-[600px] md:w-[100%]">
          <svg
            viewBox="0 0 548 354"
            // "none" is what makes this work: it stretches the 548x354
            // coordinate space — clip path AND image both — to exactly
            // match this div's real rendered size, whatever that is at
            // any breakpoint, instead of leaving the clip path pinned
            // to a literal 548x354px window regardless of container size.
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <clipPath id="curvedImageClip">
                <path d="M 78 0 C 52 0, 32 8, 20 28 C 7 50, 3 82, 1 120 C -1 165, -1 210, 2 250 C 4 292, 12 325, 30 342 C 43 353, 61 354, 88 354 L 548 354 L 548 0 Z" />
              </clipPath>
            </defs>

            {/* foreignObject embeds real HTML/React content — this is
                what lets next/image keep working (an <img> can't be a
                direct child of <svg>) while still living in the same
                scaled coordinate space as the clip path above it. */}
            <foreignObject
              width="548"
              height="354"
              clipPath="url(#curvedImageClip)"
            >
              <div
                // eslint-disable-next-line react/no-unknown-property
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  position: "relative",
                  width: "548px",
                  height: "354px",
                }}
              >
                <Image
                  src={background}
                  alt="Nilaithal contact hero"
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover object-bottom"
                />
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </section>
  );
}
