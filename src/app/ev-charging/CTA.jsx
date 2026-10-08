"use client"

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import img from "../../assets/charging-dock.webp";
import Link from "next/link";
import { useContactStore } from "../store/contactStore";

export default function BuildFutureCTA() {

 const setScrollToForm = useContactStore((state) => state.setScrollToForm);  

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative flex w-full flex-col lg:min-h-[300px] lg:flex-row lg:items-stretch">
        {/* Left: photo, fading into the dark background */}
        <div className="relative h-44 w-full shrink-0 sm:block lg:h-auto lg:w-[42%] rounded-r-full overflow-hidden">
          <div
            className="absolute inset-0"
            // bg-gradient-to-br from-emerald-900 to-emerald-700 bg-cover bg-center
            // style={{ backgroundImage: "url(/images/ev-connector-glow.jpg)" }}
          >
            <Image src={img} alt={"cta-image"} className="h-full w-full" />
          </div>
          {/* Fades the photo out to the right, into the section's own
              dark background, and softly on top too so there's no hard
              seam wherever the photo ends. */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B1F17]" /> */}
        </div>

        {/* Decorative dot grid — right edge, desktop only */}
        <div
          className="pointer-events-none absolute right-32 top-1/2 hidden h-60 w-60 -translate-y-1/2 opacity-70 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, #8BC53F 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        {/* Right: copy */}
        <div className="ml-18 relative z-10 flex flex-1 flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-0">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
            Let&apos;s Build the Future
          </span>

          <h2 className="mt-3 max-w-xl text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-[2.1rem]">
            Let&apos;s Build a{" "}
            <span className="text-(--primary-light)">Greener</span>
            <br />
            Mobility <span className="text-(--primary-light)">Ecosystem.</span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-black sm:text-[15px]">
            Partner with Nilaithal for intelligent EV charging infrastructure.
            designed for your site, backed by our India1 Charger network, and
            supported for the long term.
          </p>

          <Link
            href="/contact"
            onClick={() => setScrollToForm(true)}
            className="group mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-(--primary-light) px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Talk to Our Experts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
