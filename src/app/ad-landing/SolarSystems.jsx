"use client";

import Image from "next/image";
import background from "../../assets/Modern Tropical Home with Solar Roof.webp"
import image1 from "../../assets/Ideal for small homes.webp"
import image2 from "../../assets/Perfect for medium homes.webp"
import image3 from "../../assets/Suitable for larger homes.webp"
import { createContext, useContext, useEffect, useRef, useState } from "react";

const On = createContext(false);

/** Rises from the bottom after `at` ms. */
function Item({ as: Tag = "div", at = 0, className = "", children }) {
  const on = useContext(On);
  return (
    <Tag
      style={{ transitionDelay: `${on ? at : 0}ms` }}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${on ? "opacity-100" : "translate-y-8 opacity-0"} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Block that switches on once it is scrolled into view (one observer per block). */
function Reveal({ className = "", children }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <On.Provider value={on}>
      <div ref={ref} className={className}>{children}</div>
    </On.Provider>
  );
}

const Tick = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 text-[#1F8A3B] xl:h-[clamp(16px,1.3vw,21px)] xl:w-[clamp(16px,1.3vw,21px)]">
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path d="m7.5 12.3 3 3L16.5 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** One system option: photo on mobile, house icon on desktop. */
const Card = ({ i, photo, title, sub, children }) => (
  <Item as="li" at={200 + i * 120} className="flex w-[150px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_4px_16px_rgba(10,77,39,0.08)] sm:w-auto xl:rounded-[clamp(8px,0.8vw,12px)] xl:border-0 xl:p-[1.5vw] xl:shadow-none">
    <div className="relative h-[88px] sm:h-[130px] xl:hidden">
      <Image src={photo} alt={`${title} installed on a home`} fill sizes="(min-width: 640px) 33vw, 150px" className="object-cover" />
    </div>
    <div className="flex flex-1 flex-col p-2.5 sm:p-4 xl:p-0">
      <svg viewBox="0 0 48 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mb-[1vw] hidden h-[clamp(30px,2.9vw,46px)] w-[clamp(32px,3.1vw,50px)] text-[#0B6B34] xl:block">
        <path d="M4 22 24 6l20 16M9 19v21h30V19M14 25h3M31 25h3" />
        <rect x="20" y="28" width="8" height="12" rx="1" />
        <path d="m16 15 6-5 8 6-6 5z" fill="currentColor" fillOpacity=".2" />
      </svg>
      <h3 className="text-[clamp(14px,1.1vw,17.5px)] font-bold text-[#0B1220]">{title}</h3>
      <p className="mt-0.5 text-[clamp(11px,0.88vw,14px)] leading-snug text-[#6B7280]">{sub}</p>
      <p className="mt-auto flex items-center gap-1.5 pt-3 text-[clamp(11px,0.88vw,14px)] font-semibold leading-snug text-[#0B1220] xl:gap-[0.6vw] xl:pt-[1.3vw]">
        <Tick />
        <span>{children}</span>
      </p>
    </div>
  </Item>
);

function toForm(e) {
  e.preventDefault();
  document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => document.getElementById("solar-name")?.focus({ preventScroll: true }), 700);
}

export default function SolarSystems() {
  return (
    <section className="mx-auto max-w-[640px] px-4 pt-5 xl:grid xl:max-w-[1500px] xl:grid-cols-2 xl:gap-3 xl:px-6 xl:py-8">
      {/* ----------------------------- Savings panel ----------------------------- */}
      <Reveal className="relative min-h-[228px] overflow-hidden rounded-2xl bg-[#E8F3F0] xl:flex xl:min-h-0 xl:rounded-[clamp(14px,1.2vw,20px)]">
        <div className="relative z-10 flex w-[62%] flex-col justify-between p-5 xl:w-[48%] xl:p-[2.2vw]">
          <div>
            <Item as="h1" className="text-[clamp(24px,2.52vw,39px)] font-bold leading-[1.1] tracking-tight text-[#0B1220]">
              Find Out How Much You'll Save
            </Item>
            <Item as="p" at={120} className="mt-2.5 text-[clamp(12px,1.23vw,19px)] leading-[1.5] text-[#4B5563] [text-wrap:balance] xl:mt-[1vw]">
              With the right system size, most homeowners cut their electricity bill by up to 70%.
            </Item>
          </div>
          <Item at={240} className="mt-4 xl:mt-[1.6vw]">
            <a href="#consultation" onClick={toForm} className="flex h-[43px] w-[min(100%,190px)] items-center justify-center gap-2.5 rounded-lg bg-[#0B5A2C] text-[13.5px] font-semibold text-white transition hover:bg-[#084723] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5A2C] focus-visible:ring-offset-2 xl:h-[clamp(46px,3.5vw,55px)] xl:w-[min(100%,18.5vw)] xl:min-w-[220px] xl:max-w-[320px] xl:text-[clamp(14px,1.12vw,17.5px)]">
              Get a Custom Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </Item>
        </div>

        {/* House photo, fading into the panel colour on its left edge */}
        <Item at={360} className="absolute bottom-0 right-0 h-[64%] w-[44%] xl:inset-y-0 xl:h-auto xl:w-[56%]">
          <Image src={background} alt="Home with rooftop solar panels" fill sizes="(min-width: 1280px) 28vw, 44vw" className="object-cover object-left-bottom" />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[#E8F3F0] to-transparent" />
        </Item>

        {/* "Up to 70% savings" badge */}
        <Item at={480} className="absolute right-3.5 top-3.5 z-10 flex w-[38%] items-center justify-center gap-2 rounded-xl bg-white px-2 py-2 shadow-[0_6px_20px_rgba(10,77,39,0.12)] xl:left-[58.7%] xl:right-auto xl:top-[6%] xl:w-[31.6%] xl:gap-[1.4vw] xl:rounded-[clamp(10px,1vw,16px)] xl:p-[1vw]">
          <svg viewBox="0 0 100 96" aria-hidden="true" className="h-8 w-8 shrink-0 text-[#0E7C3A] xl:h-[clamp(40px,4.6vw,72px)] xl:w-[clamp(42px,4.8vw,75px)]">
            <g fill="currentColor">
              <rect x="2" y="72" width="16" height="24" rx="3" />
              <rect x="28" y="56" width="16" height="40" rx="3" />
              <rect x="54" y="38" width="16" height="58" rx="3" />
              <rect x="80" y="20" width="16" height="76" rx="3" />
            </g>
            <path d="M6 52 40 30l18 12L90 10M72 8h20v20" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-medium leading-none text-[#0B1220]">
            <span className="block text-[10.5px] xl:text-[clamp(12px,1vw,16px)]">Up to</span>
            <span className="my-0.5 block text-[24px] font-extrabold tracking-tight xl:text-[clamp(26px,2.24vw,35px)]">70%</span>
            <span className="block text-[11px] xl:text-[clamp(12px,1vw,16px)] xl:capitalize">savings</span>
          </p>
        </Item>
      </Reveal>

      {/* ------------------------------ System options ------------------------------ */}
      <Reveal className="pb-8 pt-6 xl:flex xl:flex-col xl:rounded-[clamp(14px,1.2vw,20px)] xl:bg-[#0A4D27] xl:p-[2vw] xl:pb-[2vw] xl:pt-[2vw]">
        <Item as="h2" className="text-[22px] font-bold tracking-tight text-[#0B1220] xl:text-[clamp(20px,1.61vw,25px)] xl:leading-[1.2] xl:text-white">
          <span className="xl:hidden">Choose Your System. Subsidy up to ₹78,000</span>
          <span className="hidden xl:inline">Choose Your System<br />Subsidy up to ₹78,000</span>
        </Item>
        <Item as="p" at={100} className="mt-1.5 max-w-[340px] text-[12.5px] leading-[1.5] text-[#4B5563] xl:hidden">
          High-quality solar systems suitable for different home sizes and energy needs.
        </Item>

        <ul className="-mx-4 mt-4 flex snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-px-4 px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 xl:mt-[1.4vw] xl:flex-1 xl:gap-[0.75vw] xl:pb-0">
          <Card i={0} photo={image1} title="3 kW System" sub="Ideal for small homes">
            Covers about 350 units a month
          </Card>
          <Card i={1} photo={image2} title="5 kW System" sub="Perfect for medium homes">
            Covers about 350 units a month
          </Card>
          <Card i={2} photo={image3} title="10 kW System" sub="Suitable for larger homes">
            High savings and<br />future-ready
          </Card>
        </ul>
      </Reveal>
    </section>
  );
}
