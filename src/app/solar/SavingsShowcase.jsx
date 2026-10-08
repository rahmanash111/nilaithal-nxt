"use client";

import { useMemo, useState } from "react";
import { TrendingUp } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import img from "../../assets/calculate your savings.webp"

// Bar heights (in px) for the little ascending savings-growth chart.
const bars = [10, 16, 22, 30];

export default function SavingsShowcase() {
  return (
    <section className="relative mx-auto w-full overflow-hidden px-6 py-8 sm:px-8 sm:pt-24 lg:px-[8%] grid md:grid-cols-[40%_60%] grid-cols-1">
      <div
        style={{ fontFamily: "var(--font-title)" }}
        className="flex flex-col gap-8 z-10 ml-0 max-h-[1080px] max-w-[100vw] py-10 px-5 md:p-0 md:pr-6"
      >
        <span
          style={{ fontFamily: "var(--font-text)" }}
          className="text-sm font-semibold uppercase w-fit tracking-wide text-green-700"
        >
          WHY SOLAR?
        </span>
        <h1 className="font-black leading-tight text-black text-[clamp(2.25rem,1vw,4.5rem)]">
          {/* text-[40px] lg:text-7xl mt - 4 lg:mt-8*/}
          The Smarter Way <br /> to{" "}
          <span className=" text-green-700"> Generate Power</span>
        </h1>
        <p className="max-w-lg text-[16px] leading-6 lg:leading-7 text-gray-600">
          Solar energy doesn't just reduce your electricity bill. It gives you
          control over rising EB tariffs, protects you from grid outages, and
          contributes to a cleaner environment for the next generation.At
          Nilaithal, we make the switch straightforward. We assess your actual
          energy consumption, design a system around your specific roof and
          load, and install it with the quality assurance that ensures it
          performs for the full 25+ year panel life, not just on commissioning
          day.
        </p>
        <ul className="grid grid-cols-1 gap-4  mt-1 space-y-2">
          {[
            "Reduce electricity bills by up to 80% with the right system size",
            "Low maintenance costs and long-term reliability, solar has no moving parts",
            "Energy independence from unpredictable grid tariff hikes",
            "An environmentally responsible choice that reduces household CO₂ by 1–2 tonnes per year",
          ].map((point) => (
            <li
              key={point}
              className="flex items-top gap-2 text-[16px] text-gray-600"
            >
              <CheckCircle2
                className="mt-1 h-4 w-4 shrink-0 bg-green-800 rounded-full text-white"
                strokeWidth={2}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <SavingsCalculator />
      </div>
    </section>
  );
}



const MIN_BILL = 0;
const MAX_BILL = 50000;
const STEP = 500;
const SAVINGS_RATE = 0.8; // 80% average savings, matches the banner below

function SavingsCalculator() {
  const [bill, setBill] = useState(8000);

  const savings = useMemo(() => Math.round(bill * SAVINGS_RATE), [bill]);
  const progress = useMemo(
    () => ((bill - MIN_BILL) / (MAX_BILL - MIN_BILL)) * 100,
    [bill]
  );

  return (
    <section className="w-full">
      <style>{`
        .savings-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(
            to right,
            #8bc53f 0%,
            #8bc53f var(--progress),
            #e5e7eb var(--progress),
            #e5e7eb 100%
          );
          outline: none;
          cursor: pointer;
        }
        .savings-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 9999px;
          background: #8bc53f;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          cursor: pointer;
        }
        .savings-slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 9999px;
          background: #8bc53f;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          cursor: pointer;
        }
        .savings-slider::-moz-range-track {
          height: 4px;
          border-radius: 9999px;
          background: transparent;
        }
      `}</style>
      <div className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-4xl bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] lg:flex-row">
        {/* Left: calculator */}
        <div className="flex w-full flex-col justify-between lg:w-[46%] ">
          <div className="lg:p-10 p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">
              Calculate Your Savings
            </h3>

            <div className="mt-7">
              <span className="block text-xs text-gray-500">
                Monthly Electricity Bill (₹)
              </span>
              <span className="mt-1 block text-3xl font-extrabold text-(--primary-light)">
                ₹ {bill.toLocaleString("en-IN")}
              </span>

              <input
                type="range"
                min={MIN_BILL}
                max={MAX_BILL}
                step={STEP}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                style={{ "--progress": `${progress}%` }}
                aria-label="Monthly electricity bill"
                className="savings-slider mt-5 w-full"
              />

              <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                <span>₹0</span>
                <span>₹50,000</span>
              </div>
            </div>

            <div className="mt-7">
              <span className="block text-xs text-gray-500">
                Estimated Monthly Savings
              </span>
              <span className="mt-1 block text-3xl font-extrabold text-(--primary-light)">
                ₹ {savings.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Savings banner */}
          <div className="relative overflow-hidden rounded-2xl rounded-br-none bg-gradient-to-br from-[#7dbd9c] to-[#07180f] px-6 py-5">
            <TrendingUp
              className="pointer-events-none absolute right-5 bottom-3 h-30 w-30 text-white/55"
              strokeWidth={1.5}
            />
            <span className="relative block text-sm text-white/75">
              You Can Save Up To
            </span>
            <span className="relative block text-4xl font-extrabold text-white sm:text-5xl">
              80%
            </span>
            <span className="relative block text-sm text-white/75">
              Every Month!
            </span>
          </div>
        </div>

        {/* Right: image */}
        <div className="h-[260px] w-full sm:h-[340px] lg:h-auto lg:w-[54%]" >
          <Image src={img} alt="image" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}