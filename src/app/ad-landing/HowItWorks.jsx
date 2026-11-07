"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const START = 80; // when the line starts growing (ms)
const STEP = 400; // time between steps (ms)
// moment for step i; k: 0 circle, 1 icon, 2 title, 3 text, 4 arrow
const t = (i, k = 0) => START + i * STEP + (k - 1) * 20;

const InView = createContext(false);

const circle =
  "relative row-span-2 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#0B5A2C] text-[15px] font-bold text-white lg:row-span-1 lg:h-10 lg:w-10";
const icon = "row-span-2 h-10 w-10 text-[#0B5A2C] lg:row-span-1 lg:mt-4 lg:h-12 lg:w-12";
const title = "text-base font-bold leading-tight tracking-tight text-[#0B1220] lg:mt-3 lg:text-[17px]";
const text =
  "mt-1 text-[13px] leading-[1.45] text-[#4B5563] [text-wrap:balance] lg:mt-1.5 lg:max-w-[15rem] lg:text-sm xl:text-[15px]";
const arrowBox =
  "absolute left-[19px] top-[calc(50%+19px)] -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-0 lg:top-[80px] lg:translate-x-1/2";

/** Rises from the bottom after `at` ms. */
function Item({ as: Tag = "div", at = 0, className = "", children }) {
  const inView = useContext(InView);
  return (
    <Tag
      style={{ transitionDelay: `${inView ? at : 0}ms` }}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${
        inView ? "opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/** A line that grows to fill its parent (y = downwards, otherwise left → right). */
function Grow({ y, at, ms }) {
  const inView = useContext(InView);
  return (
    <span
      aria-hidden="true"
      style={{
        transform: inView ? "none" : y ? "scaleY(0)" : "scaleX(0)",
        transitionDuration: `${ms}ms`,
        transitionDelay: `${at}ms`,
      }}
      className={`block h-full w-full bg-[#7FB08F] transition-transform ease-linear motion-reduce:transition-none ${
        y ? "origin-top" : "origin-left"
      }`}
    />
  );
}

const Icon = ({ children, w = 2.6 }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-full w-full">
    {children}
  </svg>
);

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 rotate-90 lg:rotate-0">
    <path d="M5 12h14m-5-5 5 5-5 5" />
  </svg>
);

/** Vertical line (mobile only) from this step's circle to the next one. */
const Connector = ({ i }) => (
  <span aria-hidden="true" className="absolute bottom-0 left-[18px] top-[38px] w-[2px] bg-[#E5E7EB] lg:hidden">
    <Grow y at={t(i, 3)} ms={STEP - 250} />
  </span>
);

/** Small arrow after the step: mid-way down the line (mobile) / between columns (desktop). */
const StepArrow = ({ i }) => (
  <span aria-hidden="true" className={arrowBox}>
    <Item as="span" at={t(i, 4)} className="block bg-[#F5F9F7] py-0.5 text-[#0B5A2C] lg:bg-transparent">
      <Arrow />
    </Item>
  </span>
);

export default function HowItWorks() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setInView(true), io.disconnect()),
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const step = "relative grid grid-cols-[38px_40px_1fr] items-start gap-x-3.5 pb-9 lg:grid-cols-1 lg:justify-items-center lg:pb-0 lg:text-center";

  return (
    <InView.Provider value={inView}>
      <section ref={ref} className="px-5 py-8 sm:px-8 lg:py-12">
        <div className="mx-auto bg-[#F5F9F7] py-4 px-4 rounded-2xl max-w-[560px] lg:max-w-[1500px]">
          <Item as="h2" at={0} className="text-2xl font-bold tracking-tight text-[#0B1220] sm:text-3xl lg:text-center lg:text-[32px]">
            How It Works
          </Item>
          <Item as="p" at={120} className="mt-2 max-w-[20rem] text-[13.5px] leading-[1.45] text-[#4B5563] [text-wrap:balance] sm:text-base lg:mx-auto lg:max-w-none lg:text-center">
            From free quote to lower bills in 4 simple steps. We handle the paperwork.
          </Item>

          <ol className="relative mt-7 lg:mt-9 lg:grid lg:grid-cols-4">
            {/* Desktop: horizontal line through the circles */}
            <span aria-hidden="true" className="absolute inset-x-[12.5%] top-[19px] hidden h-[2px] bg-[#E5E7EB] lg:block">
              <Grow at={START} ms={STEP * 3} />
            </span>

            <li className={step}>
              <Connector i={0} />
              <Item at={t(0)} className={circle}>1</Item>
              <Item at={t(0, 1)} className={icon}>
                <Icon>
                  <path d="M10 6h28a6 6 0 0 1 6 6v16a6 6 0 0 1-6 6H27l-9 8v-8h-8a6 6 0 0 1-6-6V12a6 6 0 0 1 6-6z" />
                  <path d="M16 20h.01M24 20h.01M32 20h.01" strokeWidth="4" />
                </Icon>
              </Item>
              <Item as="h3" at={t(0, 2)} className={title}>Free Consultation</Item>
              <Item as="p" at={t(0, 3)} className={text}>Share your EB bill. We suggest the right system size.</Item>
              <StepArrow i={0} />
            </li>

            <li className={step}>
              <Connector i={1} />
              <Item at={t(1)} className={circle}>2</Item>
              <Item at={t(1, 1)} className={icon}>
                <Icon>
                  <path d="M11 5h19l9 9v29H11zM30 5v9h9M17 24h16M17 30h16M17 36h10" />
                </Icon>
              </Item>
              <Item as="h3" at={t(1, 2)} className={title}>Site Assessment</Item>
              <Item as="p" at={t(1, 3)} className={text}>We visit, check your roof and shading, and design your system.</Item>
              <StepArrow i={1} />
            </li>

            <li className={step}>
              <Connector i={2} />
              <Item at={t(2)} className={circle}>3</Item>
              <Item at={t(2, 1)} className={icon}>
                <Icon w={3.4}>
                  <path d="M14 8h22M14 18h22M14 8c13 0 18 4 18 10s-5 10-18 10l18 14" />
                </Icon>
              </Item>
              <Item as="h3" at={t(2, 2)} className={title}>Subsidy & Approvals</Item>
              <Item as="p" at={t(2, 3)} className={text}>We complete PM Surya Ghar registration and DISCOM approvals.</Item>
              <StepArrow i={2} />
            </li>

            <li className={step.replace("pb-9", "pb-0")}>
              <Item at={t(3)} className={circle}>4</Item>
              <Item at={t(3, 1)} className={icon}>
                <Icon>
                  <path d="M6 8h36l-3.5 22h-29zM18 8l-1.2 22M30 8l1.2 22M7.4 19h33.2M24 30v10M15 40h18" />
                </Icon>
              </Item>
              <Item as="h3" at={t(3, 2)} className={title}>Installation & Support</Item>
              <Item as="p" at={t(3, 3)} className={text}>Expert installation, net meter and ongoing service.</Item>
            </li>
          </ol>
        </div>
      </section>
    </InView.Provider>
  );
}
