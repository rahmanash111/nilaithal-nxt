import CTA from "./CTA";
import Eligibility from "./Eligibility";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Process from "./Process";

export const metadata = {
  title: "PM Surya Ghar Subsidy – Solar Installation by Nilaithal",

  description:
    "Apply for PM Surya Ghar: Muft Bijli Yojana solar subsidy with Nilaithal — a government-registered DISCOM vendor. Get up to ₹78,000 subsidy & 300 free units monthly.",

  keywords: [
    "PM Surya Ghar subsidy",
    "PM Surya Ghar Muft Bijli Yojana",
    "solar subsidy India",
    "rooftop solar subsidy",
    "solar subsidy Tamil Nadu",
    "solar subsidy Chennai",
    "PM Surya Ghar solar installation",
    "rooftop solar installation",
    "solar panel installation Chennai",
    "government solar subsidy",
    "residential solar subsidy",
    "solar for home",
  ],

  alternates: {
    canonical: "https://nilaithal.com/solar-scheme",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function SolarScheme() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Process />
      <Eligibility />
      <CTA />
      <FAQ />
    </div>
  );
}
