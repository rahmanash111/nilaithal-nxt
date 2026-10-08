"use client";
import Image from "next/image";
import {
  ArrowRight,
  Eye,
  Gem,
  Goal,
  SolarPanelIcon,
  Coins,
  Cpu,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import img from "../../assets/sustainable future.webp";
import { stats } from "../services/Stats";
import AnimatedCounter from "../services/AnimatedCounter";
import background from "../../assets/our impact in numbers.webp";
import { useContactStore } from "../store/contactStore";
import Link from "next/link";

export const AboutCTA = () => {
  const setScrollToForm = useContactStore((state) => state.setScrollToForm);

  return (
    <section className="max-h-[600px] md:max-h-[300px] w-full max-w-[1500px] px-[5%] my-16 flex flex-col md:flex-row relative overflow-x-hidden">
      {/* Left: heading + feature grid */}
      <div className="w-full md:w-1/2 p-8 text-white bg-green-950 rounded-2xl flex flex-col justify-center items-start">
        <h2 className="w-full md:w-3/4 mt-3 text-3xl font-bold leading-tight sm:text-[2.1rem] pb-3">
          Let's Build a Sustainable Future Together
        </h2>
        <p className="w-full">
          Whether you're a homeowner exploring rooftop solar for the first time,
          a business looking to cut energy costs, or a developer planning EV
          charging infrastructure, Nilaithal is ready to make it simple. Get a
          free consultation and find out exactly what clean energy can do for
          you.
        </p>
        <Link
          href="/contact"
          onClick={() => setScrollToForm(true)}
          className="w-fit group mt-6 inline-flex items-center gap-2 rounded-xl bg-transparent text-white border border-gray-200 px-6 py-3 text-sm font-semibold text-brand-darker transition hover:brightness-110"
        >
          Get In Touch
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Right: image + overlapping card */}
      <div className="z-[-1] relative w-full md:w-[60%] -mt-[10%] md:mt-[0] md:-ml-[10%] h-[500px] md:h-[300px] rounded-4xl overflow-hidden">
        <Image
          src={img}
          alt="image"
          width={100}
          height={100}
          className="w-full h-full rounded-2xl lg:h-full object-center object-cover"
          // style={{ backgroundImage: `url(${img})` }}
        />
      </div>
    </section>
  );
};

export function Stats() {
  return (
    <div className="relative w-full z-20 mt-24 px-6 sm:mt-20 sm:px-8 lg:mt-16 lg:px-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] overflow-x-hidden">
      <div className="absolute inset-0 z-[-1] bg-[rgba(0,0,0,.3)]" />
      <Image
        src={background}
        alt="Background"
        fill
        priority // Speeds up loading if it's above the fold
        className="object-cover -z-10" // Pushes the image behind the text
      />
      <div className="text-white mx-auto max-w-6xl rounded-2xlpx-6 py-8 sm:px-10">
        <p className="text-center text-3xl font-semibold leading-tight sm:text-[2.1rem] mb-8">
          Our Impact in Numbers
        </p>
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0 sm:divide-y-0">
          {stats.map(({ icon: Icon, value, suffix, label, color, bg }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center mr-4 gap-4 pt-4 sm:pt-0 sm:px-6 ${
                i !== 0 ? "sm:border-l sm:border-gray-100" : ""
              }`}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-(--primary-light) to-transparent ${color}`}
              >
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <span className="leading-tight">
                <span className="block text-2xl font-semibold text-gray-900 sm:text-3xl text-center">
                  <AnimatedCounter
                    color={"white"}
                    value={value}
                    suffix={suffix}
                  />
                </span>

                <span className="block text-xs text-white sm:text-sm">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const missionData = [
  {
    icon: Goal,
    title: "Our Mission",
    points: [
      "To accelerate India's transition to clean, affordable energy by designing and delivering solar power systems, EV charging infrastructure, and battery storage solutions that are built to last and backed by service that actually shows up.",
    ],
  },
  {
    icon: Eye,
    title: "Our Vision",
    points: [
      "To be Tamil Nadu's most trusted renewable energy company one that homeowners, businesses, and communities choose not just for the technology, but for the people and the promise behind it.",
    ],
  },
  {
    icon: Gem,
    title: "Our Values",
    points: [
      "Integrity in everything we do",
      "Innovation that drives real-world impact",
      "Sustainability in every solution we design",
      "Customer success as our true measure of growth",
    ],
  },
];

export function Misson() {
  return (
    <div className="w-full px-[5%] overflow-x-hidden">
      <div className="box-border relative max-w-[1500px] rounded-2xl overflow-hidden w-full z-20 mt-24 px-6 mx-auto sm:mt-20 sm:px-8 lg:mt-16 lg:px-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ">
        <div className="absolute inset-0 z-[-1] bg-[rgba(0,0,0,.3)]" />
        <Image
          src={background}
          alt="Background"
          fill
          priority // Speeds up loading if it's above the fold
          className="object-cover -z-10" // Pushes the image behind the text
        />
        <div className="text-white mx-auto max-w-6xl rounded-2xlpx-6 py-8 sm:px-10">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-y-0 sm:divide-y-0">
            {missionData.map(
              (
                { icon: Icon, title, points, bg = "#469d2c", color = "white" },
                i,
              ) => (
                <div
                  key={i}
                  className={`flex flex-col items-center mr-4 gap-4 pt-4 sm:pt-0 sm:px-6  ${i !== 0 ? "border-t-1 border-gray-100 sm:border-0" : ""} ${i !== 0 ? "sm:border-l sm:border-gray-100" : ""}`}
                >
                  <span className="flex items-center self-start gap-4 mb-4 text-gray-900 sm:text-3xl text-center">
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#469d2c] text-white ${bg} ${color}`}
                    >
                      <Icon className="h-8 w-8" strokeWidth={2} />
                    </span>
                    <p className="text-white">{title}</p>
                  </span>
                  <ul className="leading-loose">
                    {points.map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        {points.length > 1 && (
                          <CheckCircle2
                            className="h-4 w-4 shrink-0 text-[#1fce0f]"
                            strokeWidth={2}
                          />
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: SolarPanelIcon,
    title: "Tailored Solar Solutions",
    description:
      "We don't do cookie-cutter installations. Every rooftop solar system we design is site-assessed, load-calculated, and custom-built to maximise your energy yield and reduce your electricity bill as fast as possible.",
  },
  {
    icon: Coins,
    title: "Cost-Effective from Day One",
    description:
      "With access to PM Surya Ghar subsidies of up to ₹78,000 and net metering benefits, your solar investment pays for itself faster than you think. We help you calculate the real numbers before you commit.",
  },
  {
    icon: Cpu,
    title: "Advanced, Reliable Technology",
    description:
      " We work with leading solar panel manufacturers and battery storage brands, selecting components based on performance data, not margins. Long-term reliability is non-negotiable for us.",
  },
  {
    icon: ShieldCheck,
    title: "After-Installation Support",
    description:
      "Our relationship doesn't end at commissioning. We provide ongoing system monitoring, annual maintenance, and warranty support, because a solar system is a 25-year asset, and we treat it like one.",
  },
];

export const WhyChoose = () => {
  const setScrollToForm = useContactStore((state) => state.setScrollToForm);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-20 px-[5%] w-full max-w-[1500px] overflow-x-hidden">
      <div className="lg:max-w-md w-[100%] md:w-[40%]">
        <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          Why Choose <span className="text-[#469d2c]">Nilaithal?</span>
        </h2>

        <span className="mt-5 block h-1 w-14 rounded-full bg-(--primary-light)" />

        <p className="w-full md:w-[80%] mt-2 text-[15px] leading-relaxed text-gray-500">
          There are many solar companies in India. What sets Nilaithal apart is
          not just what we install, it's how we think about your energy. Every
          project begins with understanding your actual consumption patterns,
          your roof, your budget, and your goals. We design around you, not
          around a catalogue.
        </p>

        <Link
          href="/contact"
          onClick={() => setScrollToForm(true)}
          className="bg-[#469d2c] group mt-8 inline-flex items-center gap-2 rounded-md bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Connect With Us
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="w-[100%] md:w-[60%] mt-10 pb-15 grid grid-cols-1 justify-center place-items-center gap-x-6 gap-y-8 sm:grid-cols-2">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            className="flex flex-col items-center justify-center text-center p-6 lg:w-[250px] xl:w-[350px] h-auto rounded-2xl shadow-2xl"
            key={title}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf3e7] text-(--primary-light)">
              <Icon className="h-8 w-8 text-[#52d416]" strokeWidth={2} />
            </span>
            <h3 className="mt-3 text-[16px] font-bold leading-snug text-gray-900">
              {title}
            </h3>
            <p className="mt-2 text-[12.5px] leading-relaxed text-gray-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
