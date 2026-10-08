"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessagesSquare,
  Map,
  Settings,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
  Leaf,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    icon: MessagesSquare,
    title: "Consultation",
    description: "We understand your energy needs and assess feasibility.",
  },
  {
    number: "02",
    icon: Map,
    title: "Design & Plan",
    description: "We create a customized solution tailored to you.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Implementation",
    description: "Our team installs and sets up the system with precision.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Support & Maintain",
    description: "We provide ongoing support for optimal performance.",
  },
];

// Circumference of the r=46 ring, and a quarter (90°) arc length of it.
const RING_RADIUS = 46;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const ARC_LENGTH = RING_CIRCUMFERENCE / 4;

function StepIcon({ icon: Icon, number }) {
  return (
    <div className="relative h-28 w-28 shrink-0">
      {/* Pale track ring + short green accent arc (top-left quarter) */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle
          cx="50"
          cy="50"
          r={RING_RADIUS}
          fill="none"
          stroke="#E3F2D9"
          strokeWidth="6"
        />
        <circle
          cx="50"
          cy="50"
          r={RING_RADIUS}
          fill="none"
          stroke="#8BC53F"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${ARC_LENGTH} ${RING_CIRCUMFERENCE}`}
          transform="rotate(180 50 50)"
        />
      </svg>

      {/* Solid icon circle */}
      <div className="absolute inset-[18px] flex items-center justify-center rounded-full bg-(--primary-light) shadow-md shadow-(--primary-light)/30">
        <Icon className="h-7 w-7 text-white" strokeWidth={2} />
      </div>

      {/* Number badge */}
      <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-bold text-(--primary-light) shadow ring-1 ring-(--primary-light) 
    </div>
  );
}

export default function ProcessSteps() {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const hLineRefs = useRef([]);
  const vLineRefs = useRef([]);
  const hArrowRefs = useRef([]);
  const vArrowRefs = useRef([]);

  // Reset ref buckets on every render before they're re-populated below.
  stepRefs.current = [];
  hLineRefs.current = [];
  vLineRefs.current = [];
  hArrowRefs.current = [];
  vArrowRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(stepRefs.current, { opacity: 0, y: 50 });
      gsap.set(hLineRefs.current, { scaleX: 0 });
      gsap.set(vLineRefs.current, { scaleY: 0 });
      gsap.set([...hArrowRefs.current, ...vArrowRefs.current], {
        opacity: 0,
        scale: 0.4,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      steps.forEach((_, i) => {
        // Step i fades/slides up into place.
        tl.to(
          stepRefs.current[i],
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
          i === 0 ? 0 : ">-0.1",
        );

        if (i < steps.length - 1) {
          // Then the dotted connector draws in right after it.
          tl.to(
            hLineRefs.current[i],
            {
              scaleX: 1,
              duration: 0.45,
              ease: "power2.out",
              transformOrigin: "left center",
            },
            ">-0.1",
          );
          tl.to(
            vLineRefs.current[i],
            {
              scaleY: 1,
              duration: 0.45,
              ease: "power2.out",
              transformOrigin: "top center",
            },
            "<",
          );
          // ...and the arrow pops in once the line reaches the next step.
          tl.to(
            [hArrowRefs.current[i], vArrowRefs.current[i]],
            { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(2)" },
            ">-0.1",
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-20 sm:px-8 lg:px-10"
    >
      {/* Decorative dot grid, top right */}
      <div
        className="pointer-events-none absolute right-0 top-6 hidden h-64 w-72 opacity-70 sm:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />
      {/* Decorative leaf, bottom left */}
      <Leaf
        className="pointer-events-none absolute -left-3 bottom-2 h-16 w-16 -rotate-[20deg] text-(--primary-light)/25"
        strokeWidth={1.5}
      />

      {/* Heading */}
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
          Our Process
        </span>
        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-[2.3rem]">
          Our <span className="text-(--primary-light)">4-Step</span> Service
          Process
        </h2>
      </div>

      {/* Steps */}
      <div className="relative mx-auto mt-16 max-w-6xl">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <div
                ref={(el) => (stepRefs.current[i] = el)}
                className="mx-auto flex w-full max-w-[200px] shrink-0 flex-col items-center text-center opacity-0 lg:w-[190px]"
              >
                <StepIcon icon={step.icon} number={step.number} />
                <div className="mt-5">
                  <span className="block text-sm font-bold text-(--primary-light)">
                    {step.number}
                  </span>
                  <h3 className="mt-1 text-[15px] font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[190px] text-[13px] leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <>
                  {/* Horizontal dotted connector — desktop only */}
                  <div className="hidden h-28 flex-1 items-center lg:flex">
                    <div className="relative w-full">
                      <div
                        ref={(el) => (hLineRefs.current[i] = el)}
                        className="h-0 w-full border-t-2 border-dashed border-gray-300"
                      />
                      <span
                        ref={(el) => (hArrowRefs.current[i] = el)}
                        className="absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-(--primary-light) shadow"
                      >
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>

                  {/* Vertical dotted connector — mobile/tablet only */}
                  <div className="flex h-14 items-center lg:hidden">
                    <div className="relative h-full">
                      <div
                        ref={(el) => (vLineRefs.current[i] = el)}
                        className="mx-auto h-full w-0 border-l-2 border-dashed border-gray-300"
                      />
                      <span
                        ref={(el) => (vArrowRefs.current[i] = el)}
                        className="absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-(--primary-light) shadow"
                      >
                        <ArrowDown className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
