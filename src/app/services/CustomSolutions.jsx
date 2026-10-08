"use client";
import {
  SlidersHorizontal,
  Users,
  ShieldCheck,
  Headset,
  ArrowRight,
} from "lucide-react";
import image from "../../assets/Professional.webp";
import Image from "next/image";
import Link from "next/link";
import { useContactStore } from "../store/contactStore";

const perks = [
  {
    icon: SlidersHorizontal,
    title: "Tailored Solutions",
    description:
      "Custom solar, EV, and storage systems engineered for your unique site, load profile, and budget, not adapted from a catalogue.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "50+ highly skilled engineers, technicians, and energy consultants with 12+ years of combined field experience across residential, commercial, and industrial projects.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every installation passes multi-point quality checks from structural load assessment and cable sizing to inverter configuration and commissioning sign-off.",
  },
  {
    icon: Headset,
    title: "End-to-End Support",
    description:
      "We stay with you long after installation day, system monitoring, preventive maintenance, warranty claims, and DISCOM coordination handled by us.",
  },
];

export default function CustomSolutions() {
  const setScrollToForm = useContactStore((state) => state.setScrollToForm);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-0 md:pb-24 sm:px-8">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#274d3d] via-[#0d2a1f] to-[#143323]">
        <div className="grid grid-cols-1 items-center gap-10 p-8 sm:p-10 lg:grid-cols-[.8fr_.8fr_1.5fr] lg:gap-8 lg:p-12">
          {/* Image */}
          <div className="h-80 w-full rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-600 bg-cover bg-center lg:h-72 overflow-hidden">
            <Image src={image} alt="person-image" className="w-full h-full" />
          </div>

          {/* Text + CTA */}
          <div className="lg:border-r-1 lg:border-amber-50">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#52d416]">
              Custom Solutions
            </span>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Need a Customized
              <br />
              Energy Solution?
            </h2>
            <p className="mt-3 md:mr-6 space text-justify max-w-sm text-sm leading-relaxed text-white/60">
              Not every energy challenge fits a standard service category. If
              you're an industrial facility with complex load requirements, a
              real estate developer planning an energy-efficient township, or a
              business exploring off-grid solutions, our engineering team is
              ready to design something specifically for you.
            </p>
            <Link
              href="/contact"
              onClick={() => setScrollToForm(true)}
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#52d416] text-white px-6 py-3 text-sm font-semibold text-brand-darker transition hover:brightness-110"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Perks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
            {perks.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-(--primary-light)">
                  <Icon className="h-6 w-6 text-[#52d416]" strokeWidth={2} />
                </span>
                <span className="leading-snug">
                  <span className="block mb-3 text-sm font-semibold text-white">
                    {title}
                  </span>
                  <span className="block text-xs text-white/50">
                    {description}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
