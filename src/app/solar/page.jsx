import HowWeWork from "./HowWeWork";
import GreenerPlanetBar from "./GreenerPlanetBar";
import SavingsShowcase from "./SavingsShowcase";
import SolarHeroOne from "./SolarHeroOne";
import Solutions from "./Solutions";
// import CTA from "./CTA";
// import ProcessSteps from "./Process";
// import Stats from "./Stats";

export const metadata = {
  title: "Solar Panel Installation in Chennai - Nilaithal Solar",

  description:
    "Nilaithal installs high-efficiency rooftop solar panels for homes, businesses & industries in Chennai & Tamil Nadu. Get a free site assessment and custom quote today.",

  keywords: [
      "solar panel installation Chennai",
      "rooftop solar installation",
      "solar energy company Chennai",
      "solar panel system",
      "solar for home India",
      "commercial solar installation",
      "solar power plant",
      "solar O&M",
      "net metering solar",
      "PM Surya Ghar subsidy",
      "solar electricity bill savings",
      "monocrystalline solar panels",
      "solar system cost India",
      "rooftop solar Tamil Nadu"
  ],

  alternates: {
    canonical: "https://nilaithal.com/solar",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Services() {
    return (
        <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            {/* <SolarHero /> */}
            {/* <Hero /> */}
            {/* <Stats /> */}
            {/* <ProcessSteps /> */}
            {/* <CTA /> */}
            <SolarHeroOne />
            <SavingsShowcase />
            <Solutions />
            <HowWeWork />
            <GreenerPlanetBar />
        </main>
    )
} 
