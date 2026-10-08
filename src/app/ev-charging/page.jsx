import BuildFutureCTA from "./CTA";
import EVChargingHero from "./Hero";
import Impact from "./Impact";
import HowWeWork from "./Process";
import WhyChooseNilaithalDark from "./WhyChoose";
// import OurSolutions from "./OurSolutions";
// import Stat from "./Stats";
// import Sustainable from "./Sustainable";

export const metadata = {
  title: "EV Charging Solutions in India – Nilaithal",

  description:
    "Nilaithal provides reliable EV charging solutions and charger installation for homes, businesses, workplaces, and commercial locations across India.",

  keywords: [
    "EV charging solutions India",
    "EV charger installation",
    "EV charging stations India",
    "EV charging infrastructure",
    "electric vehicle charging",
    "EV charging station installation",
    "home EV charger",
    "commercial EV charging",
    "AC charging stations",
    "DC fast charging stations",
    "EV charging solutions Chennai",
    "EV charger installation Chennai",
    "electric vehicle charging station",
  ],

  alternates: {
    canonical: "https://nilaithal.com/ev-charging",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EV() {
  return (
    <div className="w-full">
      {/* <OurSolutions /> */}
      {/* <Sustainable /> */}
      <EVChargingHero />
      <HowWeWork />
      <WhyChooseNilaithalDark />
      <Impact />
      <BuildFutureCTA />
    </div>
  );
}
