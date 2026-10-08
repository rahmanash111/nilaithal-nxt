import Image from "next/image";
import image from "../../assets/scheme-img.webp";
import leaf from "../../assets/leaf.webp";

import { User, Home, ShieldCheck, Sun, FileText, Leaf } from "lucide-react";

// Icons are placeholders — swap for your own anytime.
const criteria = [
  { icon: User, label: "Indian Citizen" },
  { icon: Home, label: "Residential Owner" },
  { icon: ShieldCheck, label: "Valid EB Connection" },
  { icon: Sun, label: "Rooftop Available" },
  { icon: FileText, label: "No Prior Solar Subsidy" },
];

export default function Eligibility() {
  return (
    <section className="relative w-full mb-[5%] bg-gradient-to-r from-green-50/100 via-green-50/70 to-green-50/60 py-12">
      <div className="mx-auto flex flex-col items-center gap-10 pt-[220px] lg:pt-0 pl-[5%] lg:pl-[38%] pr-[5%] lg:flex-row lg:gap-12">
        {/* Right-side content — first in the DOM so it lands on top on
            mobile; `lg:order-2` moves it back to the right on desktop. */}
        <div className="order-1 w-full lg:order-2 lg:flex-1">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
            {/* Heading + criteria */}
            <div className="flex-1">
              <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-(--primary-light)">
                <span className="h-0.5 w-8 bg-(--primary-light)" />
                Who Is Eligible?
              </span>

              <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                Check If You Qualify
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {criteria.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.12)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-(--primary-light)">
                      <Icon className="h-8 w-8" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tagline — divider sits on its left edge on desktop */}
            <div className="flex flex-row-reverse lg:flex-col gap-3 shrink-0 border-t border-green-200 pt-6 lg:w-[190px] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <Image className="w-20" src={leaf} alt="leaf-Image" />
              {/* <Leaf
                className="h-8 w-8 text-(--primary-light)"
                strokeWidth={1.5}
              /> */}
              <div>
                <p className="mt-4 text-xl font-semibold leading-normal text-(--primary-light)">
                  Sustainable Homes. Stronger Communities.
                </p>
                <span className="mt-4 block h-0.5 w-8 bg-(--primary-light)" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-2 absolute left-0 top-0 h-[200px] lg:h-full w-full lg:w-[35%]">
        <Image
          src={image}
          alt="Family in front of a home with rooftop solar"
          fill
          // sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover object-left h-full w-full rounded-tr-[250px] border-r-8 border-white"
        />
        {/* <div className="h-full w-full sm:h-[340px] lg:h-full "> */}

        {/* Script-style overlay text */}
        {/* <span className="absolute right-5 top-8 max-w-[160px] text-right text-lg font-medium italic leading-snug text-gray-800 sm:right-8 sm:text-xl">
              Bringing Sunshine to Every Home
            </span> */}
        {/* </div> */}
      </div>
    </section>
  );
}
