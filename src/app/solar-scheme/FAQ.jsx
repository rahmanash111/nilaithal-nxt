"use client";

import { useState } from "react";
import { Percent, ShieldCheck, FileText, Plus, HandCoins, Clock9, FileCheck, Wallpaper, Newspaper, } from "lucide-react";
// Icons are placeholders — swap for your own anytime. Questions and
// answers are data-driven, so add/remove/edit entries freely.
const faqs = [
  {
    icon: Percent,
    question: "How much subsidy can I get?",
    answer:
      "Under PM Surya Ghar: Muft Bijli Yojana, you can receive up to ₹78,000 as a direct bank subsidy. The scheme provides 60% subsidy on systems up to 2 kW, and 40% on the additional cost for systems between 2 kW and 3 kW. The subsidy is credited directly to your bank account within 30 days of commissioning.",
  },
  {
    icon: Clock9,
    question: "How long does the approval take?",
    answer:
      "DISCOM feasibility approval typically takes 7 to 15 working days. Once installation is complete and the net meter is activated, the subsidy is credited to your bank within 30 days. Nilaithal tracks your application at every stage and follows up with the DISCOM and portal on your behalf.",
  },
  {
    icon: HandCoins,
    question: "Do I need to pay anything upfront?",
    answer:
      "You pay the installation cost minus the subsidy amount. Nilaithal provides a transparent, itemised quote before you commit, no hidden charges. Once your system is commissioned and the completion certificate is submitted, the government subsidy is credited directly to your bank account.",
  },
  {
    icon: FileCheck,
    question: "Does Nilaithal handle all the paperwork?",
    answer:
      "Yes, completely. As a government-registered DISCOM vendor, Nilaithal manages your PM Surya Ghar portal registration, DISCOM inspection coordination, net meter application, commissioning certificate, and subsidy submission. You just need to provide basic documents. we handle the rest.",
  },
  {
    icon: Newspaper,
    question: "What documents do I need?",
    answer:
      "You need your Aadhaar card, electricity bill (EB consumer number), property ownership proof, and a bank account linked to your Aadhaar. Nilaithal's team will guide you through exactly what's required at each step of the application process.",
  },
];
// 2626 - 63098
// 5869 - 840
function FaqCard({ icon: Icon, question, answer, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/3">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-(--primary-light) ring-1 ring-(--primary-light)/30">
            <Icon className="h-4 w-4" strokeWidth={2} />
          </span>
          <span className="text-sm font-semibold text-brand-dark sm:text-[15px]">
            {question}
          </span>
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </button>

      {/* Smooth expand/collapse via the CSS grid-rows 0fr → 1fr trick —
          animates height without ever measuring it in JS. */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pl-12 pr-2 text-sm leading-relaxed text-gray-500">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white px-[5%] py-14 sm:py-16">
      <div className="mx-auto flex max-w-[1550px] flex-col">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-(--primary-light)">
              <span className="h-0.5 w-7 bg-(--primary-light)" />
              Frequently Asked Questions
            </span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Common Questions
            </h2>
          </div>
          {/* 
          <a
            href="#"
            className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-brand-dark sm:flex"
          >
            View All FAQs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a> */}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, i) => (
            <FaqCard
              key={faq.question}
              {...faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* <a
          href="#"
          className="group mt-8 flex w-fit items-center gap-2 text-sm font-semibold text-brand-dark sm:hidden"
        >
          View All FAQs
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a> */}
      </div>
    </section>
  );
}
