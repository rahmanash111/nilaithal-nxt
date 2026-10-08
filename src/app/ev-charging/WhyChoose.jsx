import { Check, Leaf } from "lucide-react";
import Image from "next/image";

// Icons are placeholders — swap for your own anytime.
const points = [
  "Advanced AC & DC charging technology for all EV models",
  "Custom EV charging solutions for homes, offices, and highways",
  "PAN India installation, commissioning, and support network",
  "Seamless integration with rooftop solar and battery storage",
  "Future-ready, scalable infrastructure built for India's EV growth",
];

import img from "../../assets/charging-station.webp";
import img_bg from "../../assets/background.webp";
import icon from "../../assets/maximum Renewable energy.webp";

export default function WhyChooseNilaithalDark() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0B1F17] via-[#0F2A1E] to-[#081410] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      {/* Painterly background texture — soft blurred color blobs plus a
          faint diagonal streak pattern, standing in for the brushed
          abstract art in the reference. All CSS, no image asset. */}
      <div className="pointer-events-none absolute -top-32 right-[-80px] h-[420px] w-[420px] rounded-full bg-emerald-400/20 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-1/4 h-[340px] w-[340px] rounded-full bg-emerald-600/25 blur-[110px]" />
      <div className="pointer-events-none absolute right-1/3 top-1/3 h-[260px] w-[260px] rounded-full bg-teal-400/10 blur-[100px]" />
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, white 0px, white 1px, transparent 1px, transparent 90px)",
        }}
      /> */}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left: copy */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
            Why Choose Nilaithal?
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.6rem]">
            Engineering Today.
            <br />
            Empowering <span className="text-(--primary-light)">Tomorrow.</span>
          </h2>

          <ul className="mt-8 space-y-4">
            {points.map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-(--primary-light) ring-1 ring-(--primary-light)">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-white/85 sm:text-[15px]">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: arch-shaped photo + floating card */}
        <div className="relative mx-auto flex w-full justify-center lg:mx-0 ">
          {/* Decorative platform the arch photo "stands" on */}
          <div className="absolute bottom-4 left-1/2 h-10 w-[85%] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/15 to-transparent blur-sm" />

          {/* Arch-shaped image — top corners rounded to half the width so it reads as a true arch, matching the reference. */}
          {/* <div className="relative overflow-hidden h-full w-[260px]  bg-gradient-to-br from-emerald-800 to-emerald-600 bg-cover bg-center shadow-2xl sm:h-[360px] sm:w-[300px] sm:rounded-t-[150px] lg:h-[420px] lg:w-[340px] lg:rounded-t-[170px]"> */}
          <Image src={img_bg} alt="" className="w-full h-full object-cover" />
          <Image
            src={img}
            alt=""
            className="absolute w-[80%] h-full top-10 -left-5"
          />
          {/* </div> */}

          {/* Floating card */}
          <div className="absolute -bottom-6 right-0 flex max-w-[210px] items-center gap-3 rounded-xl bg-white p-4 shadow-2xl sm:right-[-16px]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-(--primary-light)/10 text-(--primary-light)">
              {/* <Leaf className="h-5 w-5" strokeWidth={2} /> */}
              <Image src={icon} alt="image" className="" />
            </span>
            <p className="text-[13px] font-semibold leading-snug text-gray-900">
              Sustainable Today. Empowered Tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
