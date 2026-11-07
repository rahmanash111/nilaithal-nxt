"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const InView = createContext(false);

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

/** One question. The answer sits in a grid row that animates between 0fr and 1fr. */
function Row({ i, open, setOpen, q, children }) {
  const isOpen = open === i;
  return (
    <Item as="li" at={150 + i * 120} className="rounded-lg border border-[#EEF2F0] bg-white shadow-[0_2px_10px_rgba(11,18,32,0.05)]">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setOpen(isOpen ? -1 : i)}
        className="flex cursor-pointer w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] text-[#1F2937]"
      >
        {q}
        <span aria-hidden="true" className={`text-2xl leading-none text-[#0B1220] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows,visibility] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden px-5 text-sm leading-relaxed text-[#4B5563]">
          <span className="block pb-4">{children}</span>
        </p>
      </div>
    </Item>
  );
}

export default function Faq({ className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [open, setOpen] = useState(-1); // index of the open question (-1 = all closed)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setInView(true), io.disconnect()), {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px",
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <InView.Provider value={inView}>
      <section ref={ref} className={`w-full sm:px-6 xl:py-10 xl:pl-4 xl:pr-10 ${className}`}>
        <div className="max-w-[1500px] mx-auto bg-[#F5F9F7] rounded-2xl px-4 py-8">
        <Item as="h2" className="text-2xl font-bold tracking-tight text-[#0B1220] lg:text-[28px]">
          Frequently Asked Questions
        </Item>

        {/* TODO: these answers are drafts – replace them with your real details */}
        <ul className="mt-5 space-y-3 lg:mt-6">
          <Row i={0} open={open} setOpen={setOpen} q="How much does a rooftop solar system cost?">
            The cost depends on system size, roof type and equipment. After a free site visit we send a clear, 
            itemised quote and show your subsidy amount, so you know your final cost before you decide.
          </Row>
          <Row i={1} open={open} setOpen={setOpen} q="Am I eligible for the PM Surya Ghar subsidy?">
            If you own your home, have a valid electricity connection and a usable rooftop, and have not taken a solar subsidy before, 
            you are likely eligible. The subsidy is up to ₹78,000. We confirm your eligibility in the free consultation.
          </Row>
          <Row i={2} open={open} setOpen={setOpen} q="How long does the installation take?">
            Installing a home system usually takes 1 to 3 days. DISCOM approval and net meter activation take a few more weeks, and we follow them up for you.
          </Row>
          <Row i={3} open={open} setOpen={setOpen} q="What kind of maintenance is required?">
            Very little. Solar panels have no moving parts, so they need regular cleaning and one yearly system check. Nilaithal provides maintenance support after installation.
          </Row>
          <Row i={4} open={open} setOpen={setOpen} q="Do I have to pay the full amount upfront?">
            You pay the system cost, and the government subsidy is credited to your bank account after commissioning. We explain the exact amounts in your quote.
          </Row>
          <Row i={5} open={open} setOpen={setOpen} q="What documents do I need?">
            Your latest electricity bill, Aadhaar card, property ownership proof and a bank account linked to Aadhaar. We guide you through each step.
          </Row>
        </ul>
        </div>
      </section>
    </InView.Provider>
  );
}
