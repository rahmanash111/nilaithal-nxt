import { Leaf, Coins, Cpu, ShieldCheck, HandCoins } from "lucide-react";
import img from "../../assets/why choose.webp";
import icon from "../../assets/why choose icon.webp";
import sustainable from "../../assets/sustainable solution.webp";
import advanced from "../../assets/advanced technology.webp";
import reliable from "../../assets/reliable perfomance.webp";

import Image from "next/image";
// import { projectCompilationEventsSubscribe } from "next/dist/build/swc/generated-native";

const features = [
  {
    icon: sustainable,
    image: false,
    title: "Sustainable Solutions",
    description:
      "Every system we design reduces your carbon footprint, not just your electricity bill. We select components based on long-term environmental performance, not just upfront cost.",
  },
  {
    icon: HandCoins,
    image: true,
    title: "Cost Effective",
    description:
      "Between PM Surya Ghar subsidies, net metering credits, and reduced electricity bills, most of our residential clients see full ROI in 3–5 years. We show you the real numbers before you decide.",
  },
  {
    icon: advanced,
    image: false,
    title: "Advanced Technology",
    description:
      "We work with Tier-1 solar panel manufacturers and leading battery brands, choosing technology based on performance data, warranty reliability, and local climate compatibility.",
  },
  {
    icon: reliable,
    image: false,
    title: "Reliable Performance",
    description:
      "Our systems are built for Tamil Nadu conditions high temperatures, monsoon loads, and grid fluctuations. Built to perform, not just to install.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden px-6 bt-0 pb-20 md:bt-20 md:pb-20 sm:px-8 lg:px-10">
      {/* Decorative leaves */}
      {/* <Leaf
        className="pointer-events-none absolute left-6 top-6 h-6 w-6 -rotate-[15deg] text-(--primary-light) sm:left-10"
        strokeWidth={2}
      />
      <Leaf
        className="pointer-events-none absolute left-[44%] top-20 hidden h-5 w-5 rotate-45 text-(--primary-light)/60 lg:block"
        strokeWidth={2}
      /> */}

      {/* Decorative dot grid, bottom right */}
      {/* <div
        className="pointer-events-none absolute bottom-0 right-0 hidden h-56 w-56 opacity-60 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      /> */}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: heading + feature grid */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#52d416]">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-[2.1rem] mb-6">
            Why Businesses &amp; Homes
            <br />
            Trust <span className="text-[#52d416]">Nilaithal</span>
          </h2>
          <p className="text-[13px]">
            Hundreds of homeowners, business owners, and industrial clients
            across Tamil Nadu have chosen Nilaithal for one reason: we do what
            we say. From the accuracy of our energy assessments to the quality
            of our installations and the responsiveness of our after-service, we
            hold ourselves to a standard most companies in this industry simply
            don't.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            {features.map(({ icon: Icon, icon, title, description, image }) => (
              <div key={title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5faf3] text-(--primary-light)">
                  {image ? (
                    <Icon className="h-9 w-9 text-[#52d416]" strokeWidth={1} />
                  ) : (
                    <Image src={icon} alt="icons" className="" />
                  )}
                </span>
                <h3 className="mt-3 text-[14px] font-semibold leading-snug text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image + overlapping card */}
        <div className="relative">
          <Image
            src={img}
            alt="image"
            // {projectCompilationEventsSubscribe}
            // {satisfies}
            className="h-[320px] w-full rounded-2xl sm:h-[400px] lg:h-[400px]"
            // style={{ backgroundImage: `url(${img})` }}
          />

          <div className="absolute bottom-4 right-4 flex max-w-[230px] items-center gap-3 rounded-xl bg-white p-4 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.25)] sm:-bottom-6 sm:-right-6 sm:p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e1f3d9] text-(--primary-light) p-1">
              <Image src={icon} alt="icon" className="" />
            </span>
            <p className="text-[13px] font-semibold leading-snug text-gray-900">
              Green Energy for a Better Tomorrow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
