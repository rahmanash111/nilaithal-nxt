"use client";

import Image from "next/image";
import background from "../../assets/Modern Solar-Powered Home in Lush Garden.webp"
import background1 from "../../assets/Ad-Hero-Mobile.webp"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { gql } from '@apollo/client'
import { useMutation } from "@apollo/client/react";
import { LoaderCircle, Check } from "lucide-react";

/* --------------------------------- helpers ---------------------------------- */
const InView = createContext(false);
const gutter = "px-4 sm:px-6 lg:px-10 xl:pl-[97px] xl:pr-[58px]"; // same side margins for header + content



/** Rises from the bottom after `at` ms. */
function Item({ as: Tag = "div", at = 0, className = "", children }) {
  const inView = useContext(InView);
  return (
    <Tag
      style={{ transitionDelay: `${inView ? at : 0}ms` }}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${inView ? "opacity-100" : "translate-y-10 opacity-0"} ${className}`}
    >
      {children}
    </Tag>
  );
}

const I = ({ d, ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d={d} />
  </svg>
);

const Tick = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-[#0E7C3A]">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path d="m7.5 12.3 3 3L16.5 9" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Feature = ({ d, children }) => (
  <li className="flex flex-col items-center text-center">
    <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-green-100 text-green-700 sm:h-[60px] sm:w-[60px]">
      <I d={d} className="h-12 w-12 sm:h-12 sm:w-12" />
    </span>
    <span className="mt-2 max-w-[90px] text-[10px] font-semibold leading-tight text-[#0B1220] lg:max-w-[110px] lg:text-[13px]">{children}</span>
  </li>
);

const field = "h-[44px] w-full rounded-lg border border-gray-200 bg-white pl-11 pr-4 text-[14px] text-[#1F2937] outline-none transition placeholder:text-[#6B7280] focus:border-[#0E7C3A] focus:ring-2 focus:ring-[#0E7C3A]/20 lg:h-[38px] lg:pl-[46px]";
const icon = "pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#6B7280]";

export default function Hero() {
  const ref = useRef(null);
  const router = useRouter();
  const [inView, setInView] = useState(false);
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState(null); // { ok, text }

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setInView(true), io.disconnect()), { threshold: 0.1 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const onLogo = (e) => {
    e.preventDefault();
    const from = new URLSearchParams(location.search).get("from");
    if (from?.startsWith("/") && !from.startsWith("//")) router.push(from);
    else scrollTo({ top: 0, behavior: "smooth" });
  };

  const CREATE_LEAD = gql`
  mutation createNilaithalLead(
    $name: String!
    $email: String!
    $phone: String!
    $subject: String!
    $location: String!
    $message: String!
    $leadType: String!
    $entryDateAndTime: String!
  ) {
    createNilaithalLead(
      data: {
        name: $name
        email: $email
        phone: $phone
        subject: $subject
        location: $location
        message: $message
        leadType: $leadType
        entryDateAndTime: $entryDateAndTime
      }
    ) {
      name
      email
      phone
    }
  }
`;

const [createContactLead, { loading }] = useMutation(CREATE_LEAD, {
  onCompleted: () => {
    setNote({
      ok: true,
      text: "Thank you! Our solar expert will call you shortly.",
    });
  },
  onError: (error) => {
    console.error("Email submission failed:", error);
    setNote({
      ok: false,
      text: "Something went wrong. Please try again.",
    });
  },
});


    async function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const values = Object.fromEntries(new FormData(form));

  setSending(true);
  setNote(null);

  try {
    await createContactLead({
      variables: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        subject: "Solar Consultation",
        location: values.location,
        message: `Monthly Electricity Bill: ${values.bill}`,
        leadType: "Solar Consultation Form",
        entryDateAndTime: new Date().toString().slice(0, 24),
      },
    });

    form.reset();
  } catch (error) {
    console.error("Submission error:", error);
    setNote({ok: false,text: "Submission failed. Please try Again."})
  } finally {
    setSending(false);
  }
}

  return (
    <InView.Provider value={inView}>
      <section ref={ref} className="relative isolate overflow-clip bg-white lg:min-h-[850px]">
        {/* Desktop background image (full section) with a light white fade on the left for the text */}
        <div className="absolute inset-0 -z-10 hidden lg:block">
          <Image src={background} alt="" fill sizes="100vw" className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 via-20% to-transparent to-42%" />
        </div>

        {/* Content */}
        <div className={`grid w-full lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-10 lg:pb-4 xl:grid-cols-[minmax(0,1fr)_400px] ${gutter}`}>
          {/* Left: copy + features */}
          <div className="relative isolate pb-6 pt-5 lg:pb-0 lg:pt-[100px] [text-shadow:0_0_14px_rgba(255,255,255,0.85)]">
            {/* Mobile background image: fills the copy area edge to edge. Change object-right-top to
                object-center / object-bottom etc. to choose which part of the image shows. */}
            <div className="absolute -inset-x-4 inset-y-0 -z-10 sm:-inset-x-6 lg:hidden">
              <Image src={background1} alt="" fill sizes="100vw" className="object-cover object-right-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white via-white/70 to-transparent" />
            </div>

            <Item as="p" className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1F2937] lg:text-[16px] lg:tracking-[0.18em]">
              <span >CHENNAI ROOFTOP SOLAR · FREE SITE VISIT</span>
            </Item>

            <Item as="h1" at={100} className="mt-2 text-[38px] font-extrabold leading-[1.3] tracking-tight text-gray-950 sm:text-5xl lg:mt-3 lg:text-[56px] xl:text-[60px]">
              <span className="lg:hidden">
                Rooftop Solar<br />in Chennai<br />
                <span className="text-[#0E7C3A]">Get Up to ₹78,000<br />Subsidy</span>
              </span>
              <span className="hidden lg:inline">
                Rooftop Solar in Chennai <br /><span className="text-[#0E7C3A]">Get Up to ₹78,000 Subsidy</span>
              </span>
            </Item>

            <Item as="p" at={200} className="mt-5 max-w-[300px] font-semibold text-[18px] leading-snug text-gray-800 sm:max-w-md lg:mt-4 lg:max-w-[430px] lg:text-[19px] lg:leading-[1.45]">
              <span className="lg:hidden">
                Cut your electricity bill by <b className="text-[#0E7C3A]">up to 70% and claim up to ₹78,000 </b>PM Surya Ghar subsidy. We handle approvals and installation.
              </span>
              <span className="hidden lg:inline">
                Cut your electricity bill by <b className="text-[#0E7C3A]">up to 70% and claim up to ₹78,000</b> PM Surya Ghar subsidy. We handle approvals and installation.
              </span>
            </Item>

            <Item as="ul" at={300} className="mt-6 grid grid-cols-4 gap-1 lg:-ml-5 lg:mt-7 lg:grid-cols-[repeat(4,125px)] lg:gap-0">
              <Feature d="M7 5h10M7 9h10M7 5c5 0 7 2 7 4s-2 4-7 4l7 6">Lower Electricity Bills</Feature>
              <Feature d="M3 9.5 12 4l9 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18">Government Subsidy Support</Feature>
              <Feature d="m14.5 6.5 3-3 3 3-3 3M3.5 20.5l8-8M9.5 4.5l-5 5 3 3 5-5zM13 13l7 7">
                <span className="lg:hidden">Expert Installation</span>
                <span className="hidden lg:inline">Professional Installation</span>
              </Feature>
              <Feature d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3zM9 12l2.2 2.2L15.5 10">
                <span className="lg:hidden">Long-Term Maintenance</span>
                <span className="hidden lg:inline">Reliable After-Sales Care</span>
              </Feature>
            </Item>
          </div>

          {/* Right: form card */}
          <Item at={250} className="pb-8 lg:pb-0 lg:pt-[66px]">
            <div id="consultation" className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.12)] lg:p-[26px]">
              <h2 className="text-[26px] font-bold text-gray-950 lg:text-[22px]">Get Your Free Solar Quote</h2>
              <p className="mb-4 mt-3 text-[16px] leading-snug text-gray-700 lg:text-[14.5px]">
                <span>Tell us your EB bill. We'll check your subsidy eligibility and suggest the right system size, free.</span>
              </p>

              <form onSubmit={onSubmit} className="space-y-2 lg:space-y-[7px]">
                <label className="relative block">
                  <span className="sr-only">Full Name</span>
                  <I d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 20c0-3.5 3-6 7-6s7 2.5 7 6" className={icon} />
                  <input id="solar-name" name="name" required minLength={2} autoComplete="name" placeholder="Full Name*" className={field} />
                </label>
                <label className="relative block">
  <span className="sr-only">Email Address</span>

  <input
    type="email"
    name="email"
    required
    autoComplete="email"
    placeholder="Email Address*"
    className={field}
  />
</label>
                <label className="relative block">
                  <span className="sr-only">Phone Number</span>
                  <I d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1L6.6 10.8z" fill="currentColor" stroke="none" className={`${icon} !h-4 !w-4`} />
                  <input name="phone" type="tel" required inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}" title="Enter a valid 10-digit mobile number" autoComplete="tel-national" placeholder="Phone Number*" className={field} />
                </label>
                <label className="relative block">
                  <span className="sr-only">Your Location</span>
                  <I d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" className={icon} />
                  <input name="location" required minLength={3} autoComplete="address-level2" placeholder="Your Location (City/PIN Code)*" className={field} />
                </label>
                <label className="relative block">
                  <span className="sr-only">Monthly Electricity Bill</span>
                  <span className={`${icon} text-[17px] leading-none`}>₹</span>
                  <select name="bill" required defaultValue="" className={`${field} appearance-none pr-10 invalid:text-[#6B7280]`}>
                    <option value="" disabled>Monthly Electricity Bill (₹)</option>
                    <option>Below ₹1,000</option>
                    <option>₹1,000 – ₹2,500</option>
                    <option>₹2,500 – ₹5,000</option>
                    <option>₹5,000 – ₹10,000</option>
                    <option>Above ₹10,000</option>
                  </select>
                  <I d="m6 9 6 6 6-6" strokeWidth="2.4" className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1F2937]" />
                </label>

                <button
  type="submit"
  disabled={sending || loading}
  className="flex h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#0A6B2F] text-[15px] font-semibold text-white transition hover:bg-[#085826] disabled:opacity-70"
>
  {sending || loading ? "Submitting..." : "Get Free Consultation"}
</button>

                {note && (
                  <p role="status" className={`text-center text-sm ${note.ok ? "font-medium text-[#0E7C3A]" : "text-red-600"}`}>{note.text}</p>
                )}

                <ul className="flex items-center justify-center gap-5 pt-1 text-[12px] font-medium text-[#1F2937] lg:gap-6 lg:pt-1.5">
                  <li className="flex items-center gap-1.5"><Tick />Free Site Visit</li>
                  <li className="flex items-center gap-1.5"><Tick />No Obligation</li>
                </ul>
                <p className="text-center text-[14px] leading-[1.4] text-[#6B7280]">
                  We’ll call you back Mon–Sat, 9 AM–6 PM. <br />Your details are never shared.
                </p>
              </form>
            </div>
          </Item>
        </div>
      </section>
    </InView.Provider>
  );
}
