"use client";

import ev from "../../assets/ev-charging.webp";
import solar from "../../assets/solar.webp";
import storage from "../../assets/energy-storage.webp";
import solarIcon from "../../assets/solar_energy.webp";
import evIcon from "../../assets/ev_charging.webp";
import storageIcon from "../../assets/energy_storage.webp";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SolarPanel,
  BatteryCharging,
  Database,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
}

const services = [
  {
    icon: solarIcon,
    image: solar,
    title: "Solar Energy",
    href: "/solar",
    description:
      "High-efficiency solar panel systems for homes, businesses, and industries designed to maximise output, minimise bills, and pay for themselves faster.",
    points: [
      "Rooftop Solar Solutions",
      "Ground Mounted Systems",
      "Solar Plant Installation",
      "Operation & Maintenance",
    ],
  },
  {
    icon: evIcon,
    image: ev,
    title: "EV Charging Solutions",
    href: "/ev-charging",
    description:
      "Smart, fast EV charging infrastructure for homes, workplaces, and public locations, built on the India1 Charger network.",
    points: [
      "AC & DC Charging Stations",
      "Workplace Charging",
      "Home Charging Solutions",
      "Charging Station Management",
    ],
  },
  {
    icon: storageIcon,
    image: storage,
    title: "Energy Storage Solutions",
    href: "/energy-storage",
    description:
      "Advanced battery storage systems that store your solar power when it's abundant and deliver it when the grid can't.",
    points: [
      "Battery Energy Storage",
      "Hybrid Energy Systems",
      "Backup Power Solutions",
      "Storage System Integration",
    ],
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".service-card", { y: 60, opacity: 0 });

      gsap.to(".service-card", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: ".service-cards-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
    >
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
          What We Offer
        </span>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-[2.3rem]">
          Comprehensive Energy
          <br />
          Solutions for{" "}
          <span className="text-(--primary-light)">Every Need</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-[15px]">
          From the first site visit to long-term maintenance, Nilaithal delivers
          complete renewable energy solutions, not off-the-shelf packages, but
          systems genuinely engineered for your space, your usage, and your
          goals.
        </p>
      </div>

      {/* Cards */}
      <div className="service-cards-grid mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon, image, title, description, points, href }) => (
          <div
            key={title}
            className="service-card flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] ring-1 ring-gray-100"
          >
            {/* Image + icon badge */}
            <div className="relative">
              <div
                className="h-70 w-full bg-gradient-to-br from-emerald-800 to-emerald-600 bg-cover bg-center"
                // style={{ backgroundImage: `url(${image})` }}
              />
              <Image
                src={image}
                alt="Background"
                fill
                style={{ objectFit: "cover" }}
              />
              <span className="absolute -bottom-6 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark bg-gray-100">
                <Image
                  className="h-8 w-8"
                  src={icon}
                  alt="Background"
                  color="white"
                />
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col justify-between px-5 pb-6 pt-10">
              <h3 className="text-[18px] font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                {description}
              </p>

              <ul className="mt-4 space-y-2">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-[13px] text-gray-600"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-[#1fce0f]"
                      strokeWidth={2}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={href}
                className="group mt-5 flex w-fit items-center gap-1.5 text-[13px] font-semibold text-(--primary-light)"
              >
                Explore More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
