import Image from "next/image";
import img from "../../assets/ev-charging-img.webp";
import { MapPin, HeartHandshake, EvCharger } from "lucide-react";
import AnimatedCounter from "../services/AnimatedCounter";

// Icons/images are placeholders — swap for your own anytime.
const stats = [
  { icon: EvCharger, value: "20", suffix: "+", label: "Chargers Installed" },
  { icon: MapPin, value: "10", suffix: "", label: "Locations" },
  {
    icon: HeartHandshake,
    value: "100",
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function Impact() {
  return (
    <section className="w-full bg-gray-50 px-[5%] py-14 sm:py-16">
      <div className="mx-auto max-w-[1500px]">
        {/* Heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
            Our Impact
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-[#0F2A1E] sm:text-3xl lg:text-4xl">
            Driving <span className="text-emerald-700">Real Change</span> with
            Smart EV Solutions
          </h2>
        </div>

        {/* Case study card */}
        <div className="min-h-[400px] mt-10 flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] lg:flex-row">
          {/* Image */}
          <div className="relative h-64 w-full sm:h-80 lg:min-h-[400px] lg:h-full lg:w-[46%]">
            <Image
              src={img}
              alt="Commercial EV charging station for a retail chain"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:px-10 sm:py-10">
            <h3 className="font-serif text-2xl font-bold leading-snug text-[#0F2A1E] sm:text-4xl">
              Commercial EV Charging Station for Retail Chain
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-[15px]">
              Deployed 20+ AC and DC EV chargers across 10 retail locations
              through the India1 Charger network. delivering seamless,
              app-managed charging for customers and fleet vehicles.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4 gap-y-8 sm:flex sm:items-center sm:gap-10">
              {stats.map(({ icon: Icon, value, label, suffix }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <Icon className="h-8 w-8" strokeWidth={1.75} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-2xl font-semibold text-gray-900 sm:text-3xl">
                      <AnimatedCounter
                        color="green-600"
                        value={value}
                        suffix={suffix}
                      />
                    </span>
                    {/* <span className="block text-lg font-bold text-emerald-700 sm:text-2xl">
                      {value}
                    </span> */}
                    <span className="block text-xs text-gray-500 sm:text-[13px]">
                      {label}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
