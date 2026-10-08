"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Flag, TrendingUp, Target, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Icons are placeholders per the request — swap for real ones anytime.
const milestones = [
  {
    year: "2012",
    title: "The Spark",
    description: "Started with a vision to make clean energy accessible and affordable, not just for large corporations, but for everyday Indian families and small businesses who needed it most.",
    icon: Sparkles,
  },
  {
    year: "2016",
    title: "Expanding Our Reach",
    description: "Grew from a local solar installation team to a multi-service renewable energy company, completing impactful projects across Tamil Nadu and establishing partnerships with leading solar technology manufacturers.",
    icon: TrendingUp,
  },
  {
    year: "2020",
    title: "Scaling with Purpose",
    description: "Crossed 100+ completed solar installations and entered the EV charging infrastructure space recognising early that India's electric mobility revolution needed dependable charging solutions on the ground.",
    icon: Target,
  },
  {
    year: "2024",
    title: "Shaping the Future",
    description: "Incorporated as Nilaithal Private Limited, now operating as a government-registered DISCOM solar vendor under PM Surya Ghar: Muft Bijli Yojana bringing subsidised rooftop solar to residential customers across India with full end-to-end support.",
    icon: Flag,
  }
];

export default function OurStory() {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);
  lineRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = lineRefs.current.filter(Boolean);
      gsap.set(lines, { scaleY: 0, transformOrigin: "top center" });

      // One scrubbed timeline: each connector grows in sequence as the
      // section scrolls through view — segment 1 fills first, then
      // segment 2, then segment 3, tied directly to scroll position.
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 55%",
          scrub: 0.6,
        },
      }).to(lines, {
        scaleY: 1,
        ease: "none",
        stagger: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-5 md:py-10 sm:px-8 lg:px-10 overflow-x-hidden"
    >
      <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 place-items-center">
        {/* Left: copy */}
        <div className="lg:max-w-md">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
            Our Story
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            A Commitment
            <br />
            That <span className="text-(--primary-light)">Drives</span> Us
          </h2>

          <span className="mt-5 block h-1 w-14 rounded-full bg-(--primary-light)" />

          <p className="mt-6 text-[15px] leading-relaxed text-gray-500">
            Nilaithal was born out of a frustration shared by many clean energy
            in India was either too complicated, too expensive, or too poorly
            executed to trust. We set out to change that.
            <br />
            <br />
            Based in Chennai and working across Tamil Nadu and beyond, we
            started with a simple belief: every home, every business, and every
            community deserves access to energy that doesn't cost the earth
            financially or environmentally. We are not just a solar company. We
            are a long-term energy partner that shows up after the installation,
            answers your calls, and makes sure your system performs the way it
            was promised.
            <br />
            <br />
            Today, Nilaithal designs, installs, and maintains rooftop solar
            systems, EV charging infrastructure, and battery storage solutions
            backed by a team that takes ownership of every project from first
            consultation to final commissioning.
          </p>

          {/* <button
            type="button"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-(--primary-dark) px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Our Journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button> */}
        </div>

        {/* Right: timeline card */}
        <div className="rounded-2xl bg-gray-50 p-8 sm:p-10 lg:h-fit">
          {milestones.map(({ year, title, description, icon: Icon }, i) => (
            <div key={year} className="flex gap-4 sm:gap-6">
              {/* Dot + connector column */}
              <div className="flex flex-col items-center">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-(--primary-light) ring-4 ring-(--primary-light)" />
                {i < milestones.length - 1 && (
                  <span
                    ref={(el) => (lineRefs.current[i] = el)}
                    className="mt-1 w-0.5 flex-1 bg-(--primary-light)"
                  />
                )}
              </div>

              {/* Content + icon */}
              <div
                className={`flex flex-1 items-start justify-between gap-4 ${
                  i < milestones.length - 1 ? "pb-10" : "pb-0"
                }`}
              >
                <div>
                  <span className="block text-sm font-bold text-gray-900">
                    {year}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-(--primary-light)">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
