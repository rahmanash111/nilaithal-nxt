"use client";

import embelem from '../../assets/embelem.webp'
import modi from '../../assets/modi.webp'
import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const SHOW_EMBLEM = false;
const SHOW_ENDORSEMENT = false;

const On = createContext(false);

/** Rises from the bottom after `at` ms. */
function Item({ as: Tag = "div", at = 0, className = "", children, ...rest }) {
  const on = useContext(On);
  return (
    <Tag
      {...rest}
      style={{ transitionDelay: `${on ? at : 0}ms` }}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${on ? "opacity-100" : "translate-y-8 opacity-0"} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Section that switches on once it is scrolled into view (one observer). */
function Reveal({ children, ...props }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <On.Provider value={on}>
      <section ref={ref} {...props}>{children}</section>
    </On.Provider>
  );
}

const Feature = ({ at, d, children }) => (
  <Item as="li" at={at} className="flex flex-col items-center text-center">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[clamp(32px,2.4vw,46px)] w-[clamp(32px,2.4vw,46px)] text-[#F26A1B]">
      <path d={d} />
    </svg>
    <span className="mt-[0.6vw] text-[clamp(11.5px,0.86vw,16px)] font-semibold leading-tight text-[#111827]">{children}</span>
  </Item>
);

function toForm(e) {
  e.preventDefault();
  document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => document.getElementById("solar-name")?.focus({ preventScroll: true }), 700);
}

export default function SubsidyBanner() {
  return (
    <Reveal aria-label="PM Surya Ghar Yojana" className="overflow-hidden px-4 py-5 sm:px-6 lg:py-8">
      <div className="relative mx-auto max-w-[520px] bg-[#F5F9F7] overflow-hidden rounded-2xl h-[320px] lg:flex lg:h-[250px] lg:max-w-[1500px] lg:items-center lg:justify-between lg:rounded-2xl lg:px-[5.5vw]">
        {/* Emblem + copy (+ button on mobile) */}
        <div className="relative z-10 w-[54%] pb-3 pl-3 pt-3 lg:flex lg:w-[31vw] lg:max-w-[570px] lg:p-0">
          <div className="flex items-start gap-1.5 lg:items-center lg:gap-[1.4vw]">
            {SHOW_EMBLEM && (
              <Item className="relative h-[56px] w-[38px] shrink-0 lg:h-[clamp(84px,5.9vw,110px)] lg:w-[clamp(52px,3.9vw,72px)]">
                <Image src={embelem} alt="Emblem" fill sizes="72px" className="object-contain" />
              </Item>
            )}
            <div className="min-w-0">
              <Item as="h2" at={100} className="whitespace-nowrap text-[18px] font-bold leading-tight tracking-tight text-[#111827] lg:text-[clamp(18px,1.62vw,30px)] lg:leading-[1.15]">
                PM Surya Ghar: Muft Bijli Yojana
              </Item>
              <Item as="p" at={200} className="mt-3 whitespace-nowrap text-[16px] font-bold leading-tight tracking-tight text-[#F26A1B] lg:mt-3 lg:text-[clamp(20px,1.83vw,34px)] lg:leading-[1.15]">
                Get Up to ₹78,000 Subsidy
              </Item>
              <Item as="p" at={300} className="mt-3 text-[14px] leading-[1.4] text-[#374151] lg:mt-[0.7vw] lg:max-w-[28vw] lg:text-[clamp(13px,0.97vw,18px)] xl:max-w-[400px] 2xl:max-w-[460px]">
                <span>We check your eligibility, apply on the portal, get DISCOM approval and submit all documents for you.</span>
              </Item>
            </div>
          </div>

          {/* Mobile only. Wider than the column, so it runs over the portrait's shoulder like the design. */}
          {/* <Item at={400} className="relative z-20 mt-3 lg:hidden">
            <a href="#consultation" onClick={toForm} className={`flex h-9 items-center justify-center gap-2 rounded-lg bg-[#F26A1B] px-3 text-[12px] font-semibold text-white transition hover:bg-[#DB5A0E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A1B] focus-visible:ring-offset-2 ${SHOW_ENDORSEMENT ? "w-[112%]" : "w-full"}`}>
              Check Subsidy Eligibility
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </Item> */}
        </div>

        {/* Desktop only: divider + 3 icons */}
        <Item at={400} aria-hidden="true" className="hidden h-[clamp(80px,5.4vw,100px)] w-px bg-[#E7D2B3] lg:block" />
        <ul className="hidden w-[26vw] max-w-[480px] items-start justify-between lg:flex ml-3">
          <Feature at={500} d="M6 3h8l5 5v13H6zM14 3v5h5M9.5 12.5h6M9.5 15.5h6M9.5 18.5h4">Check<br />Eligibility</Feature>
          <Feature at={600} d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5zM17 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM16.5 14.5c2.8 0 4.5 1.8 4.5 4.5h-4">Application<br />Support</Feature>
          <Feature at={700} d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3zM9 12l2.2 2.2L15.5 10">DISCOM<br />Approvals</Feature>
        </ul>

        {SHOW_ENDORSEMENT && (
          <>
            <Item at={800} className="absolute bottom-0 left-[52%] h-[76%] w-[40%] lg:relative lg:left-auto lg:h-full lg:w-[16.8vw] lg:max-w-[220px] lg:self-end">
              <Image src={modi} alt="Narendra Modi" fill sizes="(min-width: 1024px) 12vw, 100px" className="object-contain object-bottom" />
            </Item>

            <Item at={900} className="absolute left-[70%] right-3 top-3 lg:static lg:flex lg:w-[13vw] lg:max-w-[240px] lg:items-start lg:gap-[0.7vw]">
              <svg viewBox="0 0 64 48" fill="currentColor" aria-hidden="true" className="absolute -left-4 top-0.5 h-3 w-3.5 text-[#F1D6AB] lg:static lg:mt-[0.2vw] lg:h-[clamp(20px,2.2vw,40px)] lg:w-[clamp(26px,2.9vw,54px)] lg:shrink-0">
                <path d="M0 28C0 12 10 2 24 0l2 7C18 9 14 14 14 20h10v28H0V28zm36 0C36 12 46 2 60 0l2 7c-8 2-12 7-12 13h10v28H36V28z" />
              </svg>
              <div>
                <blockquote className="text-[14px] italic leading-[1.35] text-[#111827] lg:text-[clamp(12.5px,0.97vw,18px)]">
                  &ldquo;Solar energy is people&rsquo;s energy, it will power a brighter India.&rdquo;
                </blockquote>
                <p className="mt-2 text-[12px] leading-tight text-[#6B7280] lg:mt-[0.5vw] lg:text-[clamp(10.5px,0.75vw,14px)]">
                  <b className="block font-semibold text-[#111827]">— Narendra Modi</b>
                  Prime Minister of India
                </p>
              </div>
            </Item>
          </>
        )}
      </div>
    </Reveal>
  );
}
