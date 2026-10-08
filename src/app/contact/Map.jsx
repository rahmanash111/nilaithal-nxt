"use client"

import { Leaf, MapPin, Users } from "lucide-react";
import { useContactStore } from "../store/contactStore";

const highlights = [
    {
      icon: Leaf,
      title: "Clean Energy",
      subtitle: "for a Better Planet",
    },
    {
      icon: Users,
      title: "Sustainable",
      subtitle: "for Future Generations",
    },
    {
      icon: Users,
      title: "Sustainable",
      subtitle: "for Future Generations",
    },
  ];

export default function Map() {

       const setScrollToForm = useContactStore(
          (state) => state.setScrollToForm
        );   

  return (
    <div className="p-[5%] w-full">
      <div className="grid gap-8  grid-cols-1 md:grid-cols-[40%_55%] justify-between bg-(--primary-dark) p-8 rounded-3xl">
        <div className="shrink-0 md:px-6 sm:px-8 lg:w-full lg:pl-16 lg:pr-10 xl:pl-24">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
            OUR LOCATION
          </span>

          <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tigh text-white sm:text-5xl">
            Find Us in Chennai.
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white">
            Our office is located at Hameed Complex on Anna Salai — one of
            Chennai's most accessible addresses, well connected by bus, metro,
            and road. Walk in Mon to Saturday between 9 AM and 6 PM for a free
            consultation with our solar and EV energy experts. No appointment
            needed, just come in and we'll take it from there.
          </p>

          {/* <div className="my-10 flex flex-col items-start gap-6 sm:gap-8">
            {highlights.map(({ icon: Icon, title, subtitle }, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-(--primary-light)">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-white">
                    {title}
                  </span>
                  <span className="block text-xs text-white">{subtitle}</span>
                </span>
              </div>
            ))}
          </div> */}

          <button
            onClick={() => setScrollToForm(true)}
            className="mt-8 flex h-[46px] w-full items-center justify-start rounded-[8px] border border-[#398344] bg-[#398344] px-[17px] text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30753a] sm:w-[205px] lg:h-[48px] md:w-[260px] lg:text-[14px] gap-2"
          >
            <MapPin />
            <span>Request a Free Quote</span>
            <span className="text-[17px]">→</span>
          </button>
        </div>
        <div className="rounded-xl overflow-hidden">
          {/* <iframe
          title="Location Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={embedUrl}
          allowFullScreen
          loading="lazy"
        /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.153134974924!2d80.243273!3d12.978621999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6ec67f1f33%3A0x377fab47b4c0b903!2sVenus%20Interior!5e0!3m2!1sen!2sin!4v1789562462051!5m2!1sen!2sin"
            //   width="600"
            //   height="450"
            //   style="border:0;"
            //   allowfullscreen
            className="w-full h-full min-h-[400px]"
            loading="lazy"
            //   referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
