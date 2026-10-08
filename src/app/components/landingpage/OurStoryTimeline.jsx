"use client";

import Leaf from "../../../assets/leaf.webp"
import surya from "../../../assets/surya-ghar.webp"
import register from "../../../assets/register online.webp";
import meter from "../../../assets/meter and certificate.webp";
import feisability from "../../../assets/feisability approvel.webp";
import install from "../../../assets/install.webp";

import governmentIcon from "../../../assets/government.webp"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import useModal from "@/app/store/modal";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Icons are placeholders — swap for your own anytime.
const milestones = [
  {
    number: "01",
    year: "Step 1",
    title: "Register Online",
    description:
      "Visit pmsuryaghar.gov.in and register with your state, mobile number, electricity consumer number, and DISCOM details.",
    icon: register,
  },
  {
    number: "02",
    year: "Step 2",
    title: "Feasibility Approval",
    description:
      "Your DISCOM inspects the technical feasibility of your rooftop, typically approved within a few working days.",
    icon: feisability,
  },
  {
    number: "03",
    year: "Step 3",
    title: "Nilaithal Installs",
    description:
      "As a government-registered vendor, Nilaithal handles end-to-end installation, permits, mounting, wiring, and commissioning.",
    icon: install,
  },
  {
    number: "04",
    year: "Step 4",
    title: "Net Meter & Certificate",
    description:
      "After installation, DISCOM installs a net meter. Nilaithal generates your commissioning certificate from the portal.",
    icon: meter,
  },
];

// Ring accent arc — same technique as the process-steps ring: a pale
// track circle plus a shorter, darker green arc traced over the top.
const RING_RADIUS = 46;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const ARC_LENGTH = RING_CIRCUMFERENCE * 0.32;

function MilestoneIcon({ icon }) {
  return (
    <div className="relative h-[110px] w-[110px] shrink-0 sm:h-[120px] sm:w-[120px]">
      <div className="absolute inset-0 rounded-full bg-green-50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] ring-8 ring-white" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle
          cx="50"
          cy="50"
          r={RING_RADIUS}
          fill="none"
          stroke="#DCEFD1"
          strokeWidth="4"
        />
        <circle
          cx="50"
          cy="50"
          r={RING_RADIUS}
          fill="none"
          stroke="#4CAF3C"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${ARC_LENGTH} ${RING_CIRCUMFERENCE}`}
          transform="rotate(-100 50 50)"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <Image className="h-12 w-12 md:h-12 md:w-12" alt="" src={icon} />
        {/* <Icon className="h-9 w-9 text-(--primary-light) sm:h-10 sm:w-10" strokeWidth={1.75} /> */}
      </div>

      {/* Connector node the vine attaches to */}
      <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-(--primary-light) ring-4 ring-white" />
    </div>
  );
}

// A gentle S-curve that stretches to fill whatever height the flex
// column between two circles ends up being (preserveAspectRatio="none"
// maps the viewBox straight onto the element's real box), so it still
// looks right regardless of how tall a card's description wraps to.
function Vine({ pathRef, showLeaf }) {
  return (
    <div className="relative flex flex-1 justify-center">
      <svg
        viewBox="0 0 40 200"
        preserveAspectRatio="none"
        className="h-full w-10 text-(--primary-light)"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M20,0 C1.1,46.6 6,71.9 20.1,101.2 C39.1,148.2 31.4,173.9 20.5,200"
          stroke="green"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {showLeaf && (
        // <Leaf
        //   className="vine-leaf absolute left-0 top-1/3 h-5 w-5 -translate-x-1/2 text-(--primary-light) opacity-0"
        //   strokeWidth={1.75}
        // />
        <>
          <Image
            width={"50px"}
            height={"50px"}
            className="vine-leaf absolute left-3 top-[60%] translate-x-[30%] text-(--primary-light) opacity-0"
            src={Leaf}
            alt="leaf-img"
          />
          <Image
            width={"50px"}
            height={"50px"}
            className="scale-x-[-1] vine-leaf absolute -left-10 top-[20%] translate-x-[30%] text-(--primary-light) opacity-0"
            src={Leaf}
            alt="leaf-img"
          />
        </>
      )}
    </div>
  );
}

export default function OurStoryTimeline() {
  const openModal = useModal((state) => state.openModal);

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const pathRefs = useRef([]);
  cardRefs.current = [];
  pathRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paths = pathRefs.current.filter(Boolean);
      const leaves = gsap.utils.toArray(".vine-leaf");

      // Prep the vine paths for a draw-on reveal: dash the full stroke
      // out to its own length so nothing is visible until animated.
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      });
      gsap.set(leaves, { opacity: 0, scale: 0.5 });
      gsap.set(cardRefs.current, { opacity: 0, x: -60 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // 1) Cards settle in from left to right, one after another.
      tl.to(cardRefs.current, {
        opacity: 1,
        x: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.22,
      });

      // 2) Only once every card has landed does the vine draw itself in,
      //    followed by the leaves popping into place.
      tl.to(
        paths,
        {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: "power2.inOut",
          stagger: 0.25,
        },
        ">-0.1",
      );
      tl.to(
        leaves,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.25,
          ease: "back.out(2)",
        },
        "<+0.2",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl rounded-3xl my-5 bg-gray-50 p-6 py-14 sm:p-10 sm:py-16 lg:p-14"
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div className="lg:max-w-md">
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 28,
                height: 2,
                background: "#1a7a3c",
                display: "inline-block",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#1a7a3c",
                textTransform: "uppercase",
              }}
            >
              GOVERNMENT SCHEME
            </span>
          </div>

          {/* Government logo badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "#fff",
              border: "1.5px solid #d4edda",
              borderRadius: 12,
              padding: "10px 16px",
              marginBottom: 28,
              boxShadow: "0 2px 12px rgba(26,122,60,0.07)",
            }}
          >
            {/* Ashoka Chakra SVG as logo stand-in */}
            <div
              style={{
                width: 36,
                height: 36,
                // borderRadius: "50%",
                // background: "linear-gradient(135deg, #FF9933 33%, #fff 33%, #fff 66%, #138808 66%)",
                // display: "flex", alignItems: "center", justifyContent: "center",
                // flexShrink: 0,
                // border: "2px solid #eee",
              }}
            >
              <Image src={surya} width="36" height="36" alt="india" />
              {/* <svg viewBox="0 0 24 24" width="16" height="16">
                <circle cx="12" cy="12" r="4" fill="#000080" />
              </svg> */}
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#888", fontWeight: 500 }}>
                Government of India
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                }}
              >
                PM Surya Ghar: Muft Bijli Yojana
              </div>
            </div>
            <div>
              <Image
                height={"35"}
                width={"120"}
                src={governmentIcon}
                alt="icon"
              />
            </div>
          </div>

          {/* Main heading */}
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#0d1f0d",
              margin: "0 0 20px",
            }}
          >
            Install Solar.
            <br />
            <span style={{ color: "#1a7a3c" }}>Get Upto ₹78,000</span>
            <br />
            Government Subsidy.
          </h2>

          <p
            style={{
              fontSize: 15.5,
              color: "#4a5a4a",
              lineHeight: 1.75,
              margin: "0 0 28px",
              maxWidth: 420,
            }}
          >
            The Central Government is funding up to <strong>60% subsidy</strong>{" "}
            on rooftop solar installation for Indian homeowners, meaning{" "}
            <strong>300 units of free electricity every month</strong>. As a
            registered vendor, Nilaithal manages your entire application, from
            registration to subsidy credit.
          </p>

          {/* Subsidy Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 32,
            }}
          >
            {[
              { label: "Up to", value: "₹78,000", sub: "Direct bank subsidy" },
              { label: "Free", value: "300 units", sub: "Every month" },
              { label: "Subsidy on", value: "2 kW", sub: "60% of cost" },
              {
                label: "Total homes",
                value: "1 Crore+",
                sub: "Target by 2027",
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "14px 16px",
                  border: "1.5px solid #e2f0e8",
                  boxShadow: "0 2px 8px rgba(26,122,60,0.05)",
                }}
              >
                <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>
                  {card.label}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#1a7a3c",
                    lineHeight: 1,
                  }}
                >
                  {card.value}
                </div>
                <div style={{ fontSize: 11.5, color: "#666", marginTop: 3 }}>
                  {card.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Eligibility chips */}
          <div style={{ marginBottom: 32 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#888",
                marginBottom: 10,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Who is eligible?
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                "Indian Citizen",
                "Residential Owner",
                "Valid EB Connection",
                "Rooftop Available",
                "No Prior Solar Subsidy",
              ].map((chip) => (
                <span
                  key={chip}
                  style={{
                    fontSize: 12.5,
                    padding: "5px 12px",
                    background: "#e8f5ee",
                    color: "#1a7a3c",
                    borderRadius: 20,
                    fontWeight: 500,
                    border: "1px solid #c2e0cc",
                  }}
                >
                  ✓ {chip}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/solar-scheme"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#1a7a3c",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="16"
                height="16"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              Check Your Eligibility →
            </Link>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#1a7a3c",
                padding: "14px 24px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                border: "1.5px solid #1a7a3c",
                cursor: "pointer",
              }}
              onClick={() => openModal()}
            >
              Get Free Consultation
            </button>
          </div>

          {/* Trust note */}
          <div
            style={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              color: "#888",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a7a3c"
              strokeWidth="2"
              width="14"
              height="14"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Nilaithal is a Government-registered DISCOM vendor · Subsidy
            credited within 30 days
          </div>
        </div>

        {/* Right: timeline */}
        <div>
          {milestones.map(({ number, year, title, description, icon }, i) => (
            <div key={year} className="flex items-stretch">
              {/* Circle + vine column */}
              <div className="flex flex-col items-center z-1">
                <MilestoneIcon icon={icon} />
                {i < milestones.length - 1 && (
                  <Vine
                    pathRef={(el) => (pathRefs.current[i] = el)}
                    showLeaf={i === 0 || i === 2}
                  />
                )}
              </div>

              {/* Card */}
              <div
                ref={(el) => (cardRefs.current[i] = el)}
                className={`z-0 ${i < milestones.length - 1 ? "mb-4" : ""} h-fit min-h-[180px] mt-[-2rem] ml-[-2.5rem] flex flex-1 items-center justify-between rounded-2xl bg-white/70 py-4 pl-16 pr-5 opacity-0 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.1)] ring-1 ring-black/5 sm:pl-20 sm:pr-8`}
              >
                <div>
                  <span className="block text-base font-bold text-(--primary-light)">
                    {year}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>

                <div className="hidden self-start shrink-0 text-right sm:block">
                  <span className="text-5xl font-extrabold text-(--primary-light) sm:text-6xl">
                    {number}
                  </span>
                  <div className="mt-1 flex items-center justify-end gap-1">
                    <span className="h-0.5 w-4 rounded-full bg-(--primary-light)" />
                    <span className="h-1 w-1 rounded-full bg-(--primary-light)/50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
