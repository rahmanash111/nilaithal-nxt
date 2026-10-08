import hero_icon2 from "../../assets/hero (5).webp";
import hero_icon3 from "../../assets/hero (4).webp";
import hero_icon4 from "../../assets/hero (3).webp";
import hero_icon18 from "../../assets/hero (1).webp";
import Image from "next/image";
import { Heart, RotateCwFadingClock, ScrollText, ShieldUser } from "lucide-react";

const features = [
  {
    title: "Free Assessment",
    description: "For your home or business",
    icon: Heart,
  },
  {
    title: "Custom Quote",
    description: "Transparent pricing, no surprises",
    icon:  ScrollText,
  },
  {
    title: "Expert Advice",
    description: "From certified energy consultants",
    icon: ShieldUser,
  },
  {
    title: "Fast Response",
    description: "Reply within 24 hours",
    icon: RotateCwFadingClock,
  },
];

export default function WhyChoose() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row px-[5%] pb-[5%] gap-6">
        <div className="w-full md:w-[35%]">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
            Let's Talk
            <br />
            <span className="text-(--primary-light)">Clean Energy.</span>
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600">
            At Nilaithal, we are driven by a single, clear purpose to make clean
            energy simple, affordable, and genuinely worth it for every Indian
            household and business. No jargon. No shortcuts. Just reliable
            solar, EV charging, and energy storage systems built around how you
            actually live and work.
          </p>
        </div>

        <div className="mt-[30px] grid grid-cols-2 gap-y-[28px] sm:grid-cols-4 sm:gap-y-0 lg:mt-[37px] md:w-[65%] place-items-center">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className={`relative min-w-0 shadow-[0px_0px_10px_rgba(0,0,0,0.1)] md:min-h-[240px] rounded-xl flex flex-col items-center gap-2 w-fit px-6 py-4 md:px-6 md:py-6`}
            >
              <div className="mb-[12px] flex h-[54px] w-[54px] items-center justify-center rounded-3xl bg-[#f3f5f2] text-[#43864a] lg:h-[59px] lg:w-[59px] ">
                {/* <Image
                  src={feature.icon}
                  alt="image"
                  className="h-auto object-cover"
                /> */}
                <Icon />
              </div>

              <h3 className="m-0 text-[14px] font-bold leading-[1.3] text-[#202832] lg:text-[18px] text-center">
                {title}
              </h3>

              <p className=" mt-[8px] max-w-[115px] text-[12px] leading-[1.65] text-[#727b83] lg:mt-[10px] lg:text-[14px] text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
