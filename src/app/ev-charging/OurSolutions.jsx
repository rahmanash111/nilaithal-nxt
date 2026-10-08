import { ArrowRight, CheckCircle2 } from "lucide-react";
import solarIcon from "../../assets/solar_energy.webp";
import evIcon from "../../assets/ev_charging.webp";
import storageIcon from "../../assets/energy_storage.webp";

import ev from "../../assets/ev-charging.webp";
import solar from "../../assets/solar.webp";
import storage from "../../assets/energy-storage.webp";
import Image from "next/image";

const services = [
  {
    icon: solarIcon,
    image: solar,
    title: "Solar Energy",
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

export default function OurSolutions() {
  return (
    <div className="w-full flex flex-row py-12 pr-18">
      <div className="w-[30%]">
        <p>OUR SOLUTIONS</p>
        <p>
          Solutions for <br />
          Every Need
        </p>
        <Image src={storageIcon} className="" alt="" />
      </div>
      <div className=" w-[70%] service-cards-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon, image, title, description, points }) => (
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
            <div className="h-[50%] flex flex-1 flex-col justify-between px-5 pb-6 pt-10">
              <h3 className="text-[18px] font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                {description}
              </p>

              <button
                type="button"
                className="group mt-5 flex w-fit items-center gap-1.5 text-[13px] font-semibold text-(--primary-light)"
              >
                Explore More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
