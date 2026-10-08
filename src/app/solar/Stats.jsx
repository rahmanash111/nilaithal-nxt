import { FileCheck2, Gauge, Trophy, Users } from "lucide-react";
import AnimatedCounter from "../services/AnimatedCounter";

export const stats = [
  {
    icon: FileCheck2,
    value: 250,
    suffix: "+",
    label: "Projects Completed",
    color: "white",
    bg: "bg-blue-50",
  },
  {
    icon: Gauge,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    color: "white",
    bg: "bg-lime-50",
  },
  {
    icon: Trophy,
    value: 12,
    suffix: "+",
    label: "Years of Experience",
    color: "white",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Expert Professionals",
    color: "white",
    bg: "bg-violet-50",
  },
];

export default function Stats() {
  return (
      <div className="relative z-20 w-full -mt-6 px-6 sm:-mt-20 sm:px-8 lg:-mt-16 lg:px-10">
      <div className="mx-auto max-w-[1500px]  rounded-2xl bg-black px-6 py-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] sm:px-10">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0 sm:divide-y-0">
          {stats.map(({ icon: Icon, value, suffix, label, color, bg }, i) => (
            <div
              key={label}
              className={`flex items-center mr-4 gap-4 pt-4 sm:pt-0 sm:px-6 ${
                i !== 0 ? "sm:border-l sm:border-gray-100" : ""
              }`}
            >
              <span 
                className={`flex h-18 w-18 shrink-0 items-center justify-center rounded-3xl bg-[#021b0e] text-(--primary-light)`}
              >
                <Icon className="h-12 w-12" strokeWidth={2} />
              </span>
              <span className="leading-tight">
                <span className="block text-2xl font-semibold text-white sm:text-3xl">
                  <AnimatedCounter color={"white"} value={value} suffix={suffix} />
                </span>

                <span className="block text-xs text-gray-500 sm:text-sm">
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
