"use client";

import solar from "../../assets/solar_energy.webp";
import surya from "../../assets/surya-ghar.webp";
import governmentIcon from "../../assets/government.webp";
import useModal from "@/app/store/modal";

import Image from "next/image";

import { HousePlug, HandCoins, Zap, Shield, TrendingDown, Landmark, Atom, Sprout } from "lucide-react";

export default function Hero() {
  const openModal = useModal((state) => state.openModal);

  const points = [
    { img: TrendingDown, title: "Lower Electricity Bills" },
    { img: Landmark, title: "Government Subsidy" },
    { img: Atom, title: "Energy Independence" },
    { img: Sprout, title: "A Cleaner, Greener India" },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[40%_60%] lg:gap-16">
        {/* Left: copy */}
        <div className="px-[5%] lg:px-0 lg:pl-[15%] py-[5%]">
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 28,
                height: 2,
                background: "#1a7a3c",
                display: "inline-block",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#1a7a3c",
                textTransform: "uppercase",
              }}
            >
              GOVERNMENT SCHEME
            </span>
          </div>

          {/* Government logo badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "#fff",
              border: "1.5px solid #d4edda",
              borderRadius: 12,
              padding: "10px 16px",
              marginBottom: 28,
              boxShadow: "0 2px 12px rgba(26,122,60,0.07)",
            }}
          >
            {/* Ashoka Chakra SVG as logo stand-in */}
            <div
              style={{
                width: 36,
                height: 36,
                // borderRadius: "50%",
                // background: "linear-gradient(135deg, #FF9933 33%, #fff 33%, #fff 66%, #138808 66%)",
                // display: "flex", alignItems: "center", justifyContent: "center",
                // flexShrink: 0,
                // border: "2px solid #eee",
              }}
            >
              <Image src={surya} width="36" height="36" alt="india" />
              {/* <svg viewBox="0 0 24 24" width="16" height="16">
                        <circle cx="12" cy="12" r="4" fill="#000080" />
                      </svg> */}
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#888", fontWeight: 500 }}>
                Government of India
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                }}
              >
                PM Surya Ghar: Muft Bijli Yojana
              </div>
            </div>
            <div>
              <Image
                height={"35"}
                width={"120"}
                src={governmentIcon}
                alt="icon"
              />
            </div>
          </div>

          {/* Main heading */}
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#0d1f0d",
              margin: "0 0 20px",
            }}
          >
            Install Solar.
            <br />
            <span style={{ color: "#1a7a3c" }}>Get Upto ₹78,000</span>
            <br />
            Government Subsidy.
          </h2>

          <p
            style={{
              fontSize: 15.5,
              color: "#4a5a4a",
              lineHeight: 1.75,
              margin: "0 0 28px",
              maxWidth: 420,
            }}
          >
            The Central Government is funding up to <strong>60% subsidy</strong>{" "}
            on rooftop solar installation for Indian homeowners, meaning{" "}
            <strong>300 units of free electricity every month</strong>. As a
            registered vendor, Nilaithal manages your entire application, from
            registration to subsidy credit.
          </p>

          {/* Subsidy Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 32,
            }}
          >
            {[
              {
                label: "Up to",
                value: "₹78,000",
                sub: "Direct bank subsidy",
                logo: HandCoins,
                image: false,
              },
              {
                label: "Free",
                value: "300 units",
                sub: "Every month",
                logo: Zap,
                image: false,
              },
              {
                label: "Subsidy on",
                value: "2 kW",
                sub: "60% of cost",
                logo: solar,
                image: true,
              },
              {
                label: "Total homes",
                value: "1 Crore+",
                sub: "Target by 2027",
                logo: HousePlug,
                image: false,
              },
            ].map(({ logo: Logo, label, value, sub, image }, i) => (
              <div
                className="flex gap-2"
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "14px 16px",
                  border: "1.5px solid #e2f0e8",
                  boxShadow: "0 2px 8px rgba(26,122,60,0.05)",
                }}
              >
                <div className="flex items-center justify-center bg-green-100 rounded-xl w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
                  {image ? (
                    <Image
                      className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
                      src={Logo}
                      alt="india"
                    />
                  ) : (
                    <Logo
                      strokeWidth={1}
                      className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] text-green-600"
                    />
                  )}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#1a7a3c",
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: 11.5, color: "#666", marginTop: 3 }}>
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://pmsuryaghar.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#1a7a3c",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              Check Your Eligibility →
            </a>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#1a7a3c",
                padding: "14px 24px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                border: "1.5px solid #1a7a3c",
                cursor: "pointer",
              }}
              onClick={() => openModal()}
            >
              Get Free Consultation
            </button>
          </div>

          {/* Trust note */}
          <div
            style={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              color: "#888",
            }}
          >
            <div className="bg-green-100 rounded-full flex justify-center items-center w-10 h-10">
              <Shield className="text-green-400" />
            </div>
            {/* <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a7a3c"
              strokeWidth="2"
              width="14"
              height="14"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg> */}
            Nilaithal is a Government-registered DISCOM vendor <br /> Subsidy
            credited within 30 days
          </div>
        </div>

        {/* Right: timeline */}
        <div className="min-h-[450px] h-full w-[100%] relative">
          <div className="z-2 absolute top-10 right-15 lg:right-50 max-w-[80px] font-semibold text-sm lg:text-2xl">
            Today's Sunlight Tomorrow's Savings
          </div>
          <div className="absolute bottom-5 right-5 lg:bottom-20 lg:right-50 bg-white rounded-2xl z-2 p-6 flex flex-col gap-2">
            {points.map(({ img: Img, title }, i) => {
              return (
                <div key={i} className="flex gap-2 items-center">
                  <Img className="w-8 h-8 lg:w-12 lg:h-12 p-2 bg-green-50 rounded-full text-green-600" />
                  {/* <Image
                    className="w-8 h-8 lg:w-12 lg:h-12 bg-green-50 rounded-full"
                    alt="image"
                    src={item.img}
                  /> */}
                  <p className="font-semibold text-xs lg:text-sm">{title}</p>
                </div>
              );
            })}
          </div>
          <Image
            alt="hero-img"
            width={100}
            height={100}
            src={"https://www.venusinterior.in/uploads/Nilaithal/scheme-hero.webp"}
            className="absolute object-cover object-left top-0 left-0 h-full w-[150%]"
          />
        </div>
      </div>
    </div>
  );
}
