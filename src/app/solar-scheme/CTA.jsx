"use client";

import {
  ShieldCheck,
  Settings,
  Users,
  UserCheck,
  HandHeart,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { useContactStore } from "../store/contactStore";
import Link from "next/link";

// Icons are placeholders — swap for your own anytime.
const highlights = [
  {
    icon: ShieldCheck,
    title: "Government-Registered DISCOM Vendor",
    description:
      " Hassle-free documentation, faster DISCOM approvals, and direct portal submission handled entirely by our registered team.",
  },
  {
    icon: Settings,
    title: "End-to-End Support",
    description:
      "We manage everything from PM Surya Ghar registration and installation to net meter setup and subsidy bank credit.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Certified solar engineers ensuring safe, high-quality rooftop installations backed by 12+ years of field experience.",
  },
];

const services = [
  { icon: UserCheck, label: "Free Site Assessment" },
  { icon: HandHeart, label: "Expert Guidance" },
  { icon: FileCheck, label: "Complete Documentation" },
];

export default function CTA() {
  const setScrollToForm = useContactStore((state) => state.setScrollToForm);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1550px] px-[5%] py-12">
        {/* Top row: heading + three highlights */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="shrink-0 lg:w-[300px]">
            <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-(--primary-light)">
              <span className="h-0.5 w-7 bg-(--primary-light)" />
              Why Choose Nilaithal?
            </span>
            <h2 className="mt-3 text-2xl font-bold leading-snug text-brand-dark sm:text-3xl">
              Your Trusted Partner
              <br />
              <span className="text-(--primary-light)">
                for a Brighter Tomorrow
              </span>
            </h2>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-start gap-3">
                <div className="flex gap-6 items-center">
                  <span className="flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-(--primary-light)">
                    <Icon
                      className="h-6 w-6 sm:h-6 sm:w-6"
                      strokeWidth={1.75}
                    />
                  </span>
                  <h3 className="text-[18px] font-bold leading-snug text-gray-900">
                    {title}
                  </h3>
                </div>
                <p className="mt-1 text-[14px] leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dark CTA banner */}
        <div
          style={{ backgroundImage: `url("/images/solar-scheme-bg.webp")` }}
          className="relative mt-10 overflow-hidden rounded-2xl bg-no-repeat bg-cover bg-left lg:bg-right"
        >
          <div className="relative z-10 flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-12">
            {/* Left: copy + CTA */}
            <div className="shrink-0 lg:w-[320px] text-center sm:text-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-(--primary-light)">
                Let&apos;s Make Solar Simple
              </span>
              <h3 className="mt-2 text-3xl font-bold leading-snug text-white sm:text-3xl">
                Ready to Claim Your
                <br />
                Government Subsidy?
              </h3>
              <Link
                href="/contact"
                onClick={() => setScrollToForm(true)}
                className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-[13px] font-semibold transition bg-white text-(--primary-light) lg:bg-white/10 lg:hover:bg-white"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Middle: three services, divider on the left at lg */}
            <div className="lg:max-w-[350px] xl:max-w-[500px] grid flex-1 grid-cols-1 gap-8 border-t border-(--primary-light) pt-8 sm:grid-cols-3 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {services.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <Icon
                    className="h-16 w-16 lg:h-12 lg:w-12 text-(--primary-light) p-4 bg-white rounded-full lg:p-0 lg:bg-transparent lg:rounded-none"
                    strokeWidth={1.5}
                  />
                  <span className="max-w-[110px] text-[14px] sm:text-[16px] font-medium leading-snug text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Spacer reserving room for the image at lg */}
            <div className="hidden lg:block lg:w-[170px]" />
          </div>

          {/* Right image — full-bleed to the banner's right edge on lg,
              a normal strip at the bottom on smaller screens. */}
          {/* <div className="relative h-36 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[190px]">
            <Image
              src="/images/solar-panel-sun.jpg"
              alt="Rooftop solar panels at sunrise"
              fill
              sizes="(min-width: 1024px) 190px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A18] via-[#0B2A18]/40 to-transparent lg:via-[#0B2A18]/30" />

            <span className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center text-base font-medium italic leading-snug text-white sm:text-lg">
              A Cleaner Brighter, Brighter India
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
