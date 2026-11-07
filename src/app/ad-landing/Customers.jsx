"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const InView = createContext(false);

/** Rises from the bottom after `at` ms. */
function Item({ as: Tag = "div", at = 0, className = "", children }) {
  const inView = useContext(InView);
  return (
    <Tag
      style={{ transitionDelay: `${inView ? at : 0}ms` }}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${
        inView ? "opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/** One review. Mobile: avatar left, text right. Desktop: quote on top, avatar + name below. */
const Card = ({ i, src, name, place, children }) => (
  <Item as="li" at={200 + i * 120} className="w-full shrink-0 snap-center px-2 lg:w-1/5 lg:snap-start lg:px-1.5">
    <figure className="grid h-full grid-cols-[60px_1fr] content-start gap-x-4 rounded-xl border border-[#EEF2F0] bg-white p-5 shadow-[0_2px_12px_rgba(11,18,32,0.06)] lg:grid-cols-[auto_1fr] lg:gap-x-2.5 lg:p-4">
      <div className="relative row-span-3 h-[60px] w-[60px] overflow-hidden rounded-full lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:h-11 lg:w-11">
        <Image src={src} alt={name} fill sizes="60px" className="object-cover" />
      </div>
      <span role="img" aria-label="5 out of 5 stars" className="text-[13px] leading-none tracking-tight text-[#F5A31A] lg:col-start-2 lg:row-start-2">
        ★★★★★
      </span>
      <blockquote className="mt-2 text-[13.5px] leading-[1.5] text-[#374151] lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mb-3 lg:mt-0 lg:text-[12.5px]">
        {children}
      </blockquote>
      <figcaption className="mt-2 lg:col-start-2 lg:row-start-3 lg:mt-1">
        <strong className="block text-[15px] text-[#0B1220] lg:text-[13px]">{name}</strong>
        <span className="text-[13px] text-[#4B5563] lg:text-[11.5px]">{place}</span>
      </figcaption>
    </figure>
  </Item>
);

export default function Customers({ className = "" }) {
  const ref = useRef(null);
  const track = useRef(null);
  const hold = useRef(0); // auto-slide is paused until this time (ms)
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);

  const step = () => track.current.children[0].offsetWidth; // width of one card
  const pause = () => (hold.current = Date.now() + 5000);
  const go = (dir) => {
    const t = track.current;
    const atEnd = t.scrollLeft >= t.scrollWidth - t.clientWidth - 4;
    const left = dir > 0 && atEnd ? 0 : dir < 0 && t.scrollLeft <= 4 ? t.scrollWidth : t.scrollLeft + dir * step();
    t.scrollTo({ left, behavior: "smooth" });
  };

  useEffect(() => {
    setCount(track.current.children.length);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setInView(true), io.disconnect()), {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px",
    });
    io.observe(ref.current);

    // Auto-slide on mobile / tablet only.
    // FUTURE desktop auto-scroll: replace the next line with  const auto = true;
    const auto = matchMedia("(max-width: 1023px)").matches;
    const id = auto && setInterval(() => Date.now() > hold.current && go(1), 3000);
    return () => (io.disconnect(), clearInterval(id));
  }, []);

  return (
    <InView.Provider value={inView}>
      <section ref={ref} className={`w-full sm:px-6 xl:py-10 xl:pl-10 xl:pr-4 ${className}`}>
        <div className="max-w-[1500px] mx-auto bg-[#F5F9F7] rounded-2xl px-4 py-8">
        <Item as="h2" className="text-2xl font-bold tracking-tight text-[#0B1220] lg:text-[28px]">
          What Our Customers Say
        </Item>
        <Item as="p" at={100} className="mt-1.5 max-w-[22rem] text-sm text-[#4B5563] lg:max-w-none">
          Real homeowners in Chennai are already benefiting from solar.
        </Item>

        <div className="mt-5 flex items-center gap-1 lg:mt-6 lg:block">
          <button type="button" aria-label="Previous customer" onClick={() => go(-1)} className="p-1 text-xl text-[#0B1220] lg:hidden">
            ←
          </button>

          <ul
            ref={track}
            onScroll={(e) => setActive(Math.round(e.currentTarget.scrollLeft / step()))}
            onTouchStart={pause}
            onTouchMove={pause}
            onMouseEnter={() => (hold.current = Infinity)}
            onMouseLeave={() => (hold.current = 0)}
            className="-my-3 flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <Card i={0} src="/images/solar/customers/ravi.webp" name="Selvam" place="Amjikarai, Chennai">
              “The team explained everything clearly and handled the subsidy paperwork for us. Installation was neat and finished on time.”
            </Card>
            <Card i={1} src="/images/solar/customers/priya.webp" name="Sekar" place="Perambur, Chennai">
              “Our electricity bill has come down a lot since installing solar. Happy with the service and the follow-up.”
            </Card>
            <Card i={2} src="/images/solar/customers/mahesh.webp" name="Kamalesh" place="Kolathur, Chennai">
              “From site visit to net meter, Nilaithal took care of everything. No running around for approvals.” 
            </Card>
            {/* TODO: replace cards 4 and 5 with real customer reviews (name, area, photo, quote) */}
            <Card i={3} src="/images/solar/customers/customer-4.webp" name="Anjalena" place="Neelangarai, Chennai">
              “Professional engineers and a transparent quote. We knew the exact cost before we started.”
            </Card>
            <Card i={4} src="/images/solar/customers/customer-5.webp" name="Usha" place="Egmore, Chennai">
              “Quick response whenever we called. The system is working well and the after-sales support is reliable.”
            </Card>
          </ul>

          <button type="button" aria-label="Next customer" onClick={() => go(1)} className="p-1 text-xl text-[#0B1220] lg:hidden">
            →
          </button>
        </div>

        {/* Dots (mobile / tablet) */}
        <div className="mt-4 flex justify-center gap-1.5 lg:hidden">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show customer ${i + 1}`}
              onClick={() => track.current.scrollTo({ left: i * step(), behavior: "smooth" })}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-[#0B5A2C]" : "w-2 bg-[#D1D5DB]"}`}
            />
          ))}
        </div>
        </div>
      </section>
    </InView.Provider>
  );
}
