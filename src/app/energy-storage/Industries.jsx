"use client";

import icon1 from "../../assets/commercial.webp";
import icon2 from "../../assets/Industrial.webp";
import icon3 from "../../assets/utilities & Communitie.webp";
import icon4 from "../../assets/residential.webp";
import comm from "../../assets/enargey storage - Commercial.webp";
import indus from "../../assets/enargey storage - industrial.webp";
import res from "../../assets/enargey storage - residentials.webp";
import util from "../../assets/enargey storage - Utilites and communities.webp";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useContactStore } from "../store/contactStore";

if (typeof window !== "undefined") {
}

const services = [
  {
    icon: icon4,
    image: res,
    title: "Residential",
    description:
      "Store your solar energy and stay powered through grid outages. day or night, rain or shine.",
  },
  {
    icon: icon1,
    image: comm,
    title: "Commercial",
    description:
      "Cut peak demand charges and keep operations running with intelligent battery storage built for business.",
  },
  {
    icon: icon2,
    image: indus,
    title: "Industrial",
    description:
      "Protect critical machinery and production lines from costly power interruptions with scalable storage systems.",
  },
  {
    icon: icon3,
    image: util,
    title: "Utilities & Communities",
    description:
      "Balance grid load, reduce transmission losses, and accelerate renewable energy adoption at community scale.",
  },
];

export default function Industries() {

    const scrollToForm = useContactStore((state) => state.scrollToForm);
    const setScrollToForm = useContactStore((state) => state.setScrollToForm);
  
    useEffect(() => {
      if (scrollToForm) {
        const timer = setTimeout(() => {
          const el = document.getElementById("contact-form");
  
          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
          // Reset so normal visits to /contact don't scroll
          setScrollToForm(false);
        }, 200);
  
        const timer1 = setTimeout(() => {
          window.scrollBy({
            top: -80,
            behavior: "smooth",
          });
        }, 1200);
  
        return () => clearTimeout(timer, timer1);
      }
    }, [scrollToForm, setScrollToForm]);
  
  
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

      <div
        id="contact-form"
        className="flex flex-col md:flex-row items-end justify-between"
      >
        <div className="max-w-2xl text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
            ENERGY STORAGE FOR A WIDE RANGE OF NEEDS
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-[2.3rem]">
            Powering Progess Across Industries
          </h2>
        </div>

        {/* <button
          type="button"
          className="group mt-5 flex w-fit items-center gap-1.5 text-[13px] font-semibold text-(--primary-light)"
        >
          See All Applications
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button> */}
      </div>
      {/* Cards */}
      <div className="service-cards-grid mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon, image, title, description }) => (
          <div
            key={title}
            className="service-card flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] ring-1 ring-gray-100"
          >
            {/* Image + icon badge */}
            <div className="relative">
              <div
                className="h-40 w-full bg-gradient-to-br from-emerald-800 to-emerald-600 bg-cover bg-center"
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
