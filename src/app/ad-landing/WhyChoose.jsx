"use client";

import Image from "next/image";
import background from '../../assets/Please provide the image prompt.webp'
import Link from "next/link";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const RevealContext = createContext({ inView: false, reduced: false, offset: 0 });

/**
 * A group of items revealed together.
 * `base` = how many steps to wait before this group starts, applied only on desktop
 * (≥ 1280px) where all groups are on screen at once.
 */
function RevealGroup({ as: Tag = "div", base = 0, className = "", children }) {
  const ref = useRef(null);
  const [state, setState] = useState({ inView: false, reduced: false, offset: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // "Reduce motion": show everything straight away.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState({ inView: true, reduced: true, offset: 0 });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const isDesktop = window.matchMedia("(min-width: 1280px)").matches;
        setState({ inView: true, reduced: false, offset: isDesktop ? base : 0 });
        observer.disconnect(); // animate only once
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [base]);

  return (
    <RevealContext.Provider value={state}>
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    </RevealContext.Provider>
  );
}

/** Rises from the bottom; `order` = its position inside the group. */
function Item({ as: Tag = "div", order = 0, className = "", children }) {
  const { inView, reduced, offset } = useContext(RevealContext);

  return (
    <Tag
      style={reduced ? undefined : { transitionDelay: inView ? `${(offset + order) * 80}ms` : "0ms" }}
      className={[
        reduced ? "" : "transition-[opacity,transform] duration-700 ease-out will-change-transform",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const RupeeIcon = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M6 4h12M6 9h12M6 4c7 0 9 2.2 9 5s-2 5-9 5l8 6" />
  </svg>
);

const WrenchIcon = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3 17.7 6.3 21l6.3-6.3a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.5-.7-.7-2.5z" />
  </svg>
);

const ShieldCheckIcon = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LeafIcon = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const ArrowRightIcon = (p) => (
  <svg {...iconProps} strokeWidth={2.2} {...p}>
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

function FeatureCard({ order, icon, title, children }) {
  return (
    <Item
      as="li"
      order={order}
      className="flex items-start gap-[clamp(10px,1.4vw,22px)] rounded-[clamp(10px,0.9vw,14px)] border border-[#EEF2F0] bg-white p-[clamp(14px,1.2vw,18px)] shadow-[0_2px_14px_rgba(11,18,32,0.06)]"
    >
      <span className="flex h-[clamp(40px,3.4vw,52px)] w-[clamp(40px,3.4vw,52px)] shrink-0 items-center justify-center rounded-full bg-[#0B6B34] text-white">
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="text-[clamp(14.5px,1vw,15.5px)] font-bold leading-tight tracking-tight text-[#0B1220]">
          {title}
        </h3>
        <p className="mt-[0.5em] text-[clamp(11px,0.89vw,13.8px)] leading-[1.5] text-[#4B5563]">{children}</p>
      </div>
    </Item>
  );
}

export default function WhyChoose() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-white px-4 py-8 sm:px-6 xl:px-[4vw] xl:py-[3vw]"
    >
      <div className="mx-auto bg-[#F5F9F7] p-4 rounded-2xl grid max-w-[1500px] gap-5 xl:grid-cols-[598fr_702fr_454fr] xl:gap-[1.45vw]">
        <RevealGroup className="flex flex-col justify-between xl:pr-[2.4vw] xl:pt-[1vw]">
          <div>
            <Item order={0}>
              <p className="text-[clamp(11px,0.78vw,12.5px)] font-medium uppercase tracking-[0.16em] text-[#374151]">
                Why Choose Nilaithal
              </p>
            </Item>
            <Item order={1}>
              <h1
                id="why-choose-heading"
                className="mt-[0.7em] text-[clamp(28px,2.4vw,37px)] font-bold leading-[1.12] tracking-tight text-[#0B1220]"
              >
                Your Trusted Solar
                <br />
                Partner in Chennai
              </h1>
            </Item>
            <Item order={2}>
              <p className="mt-[1.2em] max-w-[560px] text-[clamp(14px,1.1vw,17px)] leading-[1.5] text-[#1F2937]">
                From free site visit to net meter, we handle everything for Chennai homes: 
                subsidy paperwork, approvals, installation and after-sales service.
              </p>
            </Item>
          </div>

          {/* Desktop only (not in the mobile design) */}
          {/* <Item order={3} className="mt-6 hidden xl:block">
            <Link
              href="/about" // TODO: set the real "About us" URL
              className="flex h-[clamp(46px,3.45vw,52px)] w-[clamp(220px,17.7vw,266px)] items-center justify-center gap-2.5 rounded-lg bg-[#0B5A2C] text-[clamp(15px,1.1vw,17px)] font-semibold text-white transition hover:bg-[#084723] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5A2C] focus-visible:ring-offset-2"
            >
              Know More About Us
              <ArrowRightIcon className="h-[1.1em] w-[1.1em]" />
            </Link>
          </Item> */}
        </RevealGroup>

        {/* ------------------------------ Cards ----------------------------- */}
        <RevealGroup
          as="ul"
          base={3}
          className="grid grid-cols-2 gap-[clamp(9px,1.3vw,20px)]"
        >
          <FeatureCard order={0} icon={<RupeeIcon className="h-1/2 w-1/2" />} title="Subsidy Assistance">
            We handle your PM Surya Ghar application and subsidy paperwork.
          </FeatureCard>

          <FeatureCard order={1} icon={<WrenchIcon className="h-1/2 w-1/2" />} title="Expert Installation">
            Safe installation by experienced solar engineers, with quality checks.
          </FeatureCard>

          <FeatureCard order={2} icon={<ShieldCheckIcon className="h-1/2 w-1/2" />} title="Reliable Performance">
            Quality panels and inverters with long-term performance warranty.
          </FeatureCard>

          <FeatureCard order={3} icon={<LeafIcon className="h-1/2 w-1/2" />} title="Cleaner Environment">
            Power your home with clean energy and cut your carbon footprint.
          </FeatureCard>
        </RevealGroup>

        {/* ------------------------------ Image ----------------------------- */}
        {/* Mobile/tablet: wide image (no video). Desktop: tall worker photo. */}
        <RevealGroup base={7} className="xl:mt-[1.4vw] xl:flex xl:self-stretch">
          <Item
            order={0}
            className="relative h-[150px] overflow-hidden rounded-2xl sm:h-[260px] xl:h-auto xl:min-h-[300px] xl:w-full xl:rounded-[clamp(10px,0.8vw,14px)]"
          >
            <Image
              src={background}
              alt="Rooftop solar panels installed on a home"
              fill
              sizes="(min-width: 640px) 700px, 100vw xl:(min-width: 1500px) 360px, 25vw"
              className="object-cover"
            />
            {/* <Image
              src={background}
              alt="Nilaithal engineer installing rooftop solar panels"
              fill
              sizes="(min-width: 1500px) 360px, 25vw"
              className="hidden object-cover xl:block"
            /> */}
          </Item>
        </RevealGroup>
      </div>
    </section>
  );
}
