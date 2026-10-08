"use client";

import { TreePine, Home, Wind, ArrowRight } from "lucide-react";
import img from "../../assets/page.webp";
import Image from "next/image";
import Link from "next/link";
import { useContactStore } from "../store/contactStore";

// Icons are placeholders — swap for your own anytime.
// const stats = [
//   {
//     icon: TreePine,
//     value: "1,20,000+",
//     label: (
//       <>
//         Trees Planted
//         <br />
//         Equivalent
//       </>
//     ),
//   },
//   {
//     icon: Home,
//     value: "1,50,000+",
//     label: (
//       <>
//         Happy Homes
//         <br />
//         Powered
//       </>
//     ),
//   },
//   {
//     icon: Wind,
//     value: "2,50,000+",
//     label: (
//       <>
//         Tonnes of CO<sub>2</sub>
//         <br />
//         Offset
//       </>
//     ),
//   },
// ];
// 37 th week
// september 6
export default function GreenerPlanetBar() {
  const setScrollToForm = useContactStore((state) => state.setScrollToForm);

  return (
    <section className="w-full bg-[#F3F1EA] px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-12 lg:flex-row justify-between lg:items-center lg:gap-10">
        {/* Image + heading */}

        <div className="h-auto w-full sm:h-[180px] sm:w-[250px]">
          <Image
            className={"h-full w-full object-contain"}
            src={img}
            alt="image"
          />
        </div>

        {/* <div className="flex flex-1 flex-col gap-5 justify-evenly sm:flex-row sm:items-center sm:gap-6"> */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-extrabold text-gray-900 sm:text-2xl text-center">
            Powering a Greener Planet
          </h3>
          <p className="mt-2 text-center w-full  text-sm leading-relaxed text-gray-500">
            Every solar installation we do today creates a sustainable tomorrow.
          </p>
          <p className="mt-2 text-center w-full md:max-w-[230px] text-sm leading-relaxed text-gray-500">
            Join thousands who have already made the switch.
          </p>
        </div>
        {/* </div> */}

        {/* Stats */}
        {/* <div className="grid flex-1 grid-cols-3 gap-4 sm:gap-8">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="text-center sm:text-left flex flex-col items-center justify-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-(--primary-light)/10 text-(--primary-light) sm:mx-0">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="mt-3 block text-base font-bold text-gray-900 sm:text-xl">
                {value}
              </span>
              <span className="mt-1 block text-xs leading-snug text-gray-500 text-center">
                {label}
              </span>
            </div>
          ))}
        </div> */}

        {/* CTA panel */}
        <div className="relative -mb-8 shrink-0 overflow-hidden rounded-t-2xl bg-(--primary-dark) px-6 py-7 sm:px-8 lg:w-[290px]">
          {/* <Leaf className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rotate-[20deg] text-white/10" strokeWidth={1} /> */}
          <h3 className="relative text-lg font-bold leading-snug text-white sm:text-xl">
            Ready to switch
            <br />
            to solar?
          </h3>
          <p className="relative mt-2 max-w-[220px] text-sm leading-relaxed text-white/70">
            Get a personalized quote and start saving today!
          </p>
          <Link
            href="/contact"
            onClick={() => setScrollToForm(true)}
            className="group relative mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-dark transition hover:brightness-95"
          >
            Get a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
