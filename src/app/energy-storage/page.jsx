import PeaceOfMind from "./CTA";
import { CTA } from "./CTA";
import Hero from "./Hero";
import Industries from "./Industries";
import InsightToImpact from "./InsightToImpact";
import OurTechnology from "./OurTechnology";
import Stats from "./Stats";
import StoreTodayPowerAlways from "./StoreToday";

export const metadata = {
  title: "Battery Energy Storage Solutions in India – Nilaithal",

  description:
    "Nilaithal designs and installs advanced battery energy storage systems for homes, businesses & industries across India. Store solar power. Stay powered 24/7.",

  keywords: [
    "battery energy storage solutions India",
    "energy storage systems",
    "battery storage solutions",
    "solar battery storage",
    "commercial battery storage",
    "industrial energy storage systems",
    "home battery storage",
    "solar energy storage",
    "renewable energy storage",
    "lithium ion battery storage",
    "hybrid energy systems",
    "backup power solutions",
    "solar power storage systems",
  ],

  alternates: {
    canonical: "https://nilaithal.com/energy-storage/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EnergyStorage() {
  return (
    <div>
      <Hero />
      <Stats />
      <StoreTodayPowerAlways />
      <PeaceOfMind />
      <OurTechnology />
      <Industries />
      <CTA />
      <InsightToImpact />
    </div>
  );
}
