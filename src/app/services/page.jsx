import CustomSolutions from "./CustomSolutions";
import Hero from "./Hero";
import ProcessSteps from "./ProcessSteps";
import ServicesGrid from "./ServicesGrid";
import Stats from "./Stats";
import WhyChooseUs from "./WhyChooseUs";

export const metadata = {
  title: "Solar, EV Charging & Energy Storage Services – Nilaithal",

  description:
    "Nilaithal offers rooftop solar installation, EV charging infrastructure & battery storage solutions for homes, businesses & industries across India. Get a free quote.",

  keywords: [
    "rooftop solar installation",
    "EV charging solutions India",
    "energy storage systems",
    "solar panel installation Chennai",
    "EV charger installation",
    "battery storage solutions",
    "solar for home",
    "solar for business",
    "ground mounted solar",
    "AC DC charging stations",
    "hybrid energy systems",
    "net metering",
    "solar plant installation",
  ],

  alternates: {
    canonical: "https://nilaithal.com/services",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Services() {
    return (
        <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Hero />
            <Stats />
            <ServicesGrid />
            <CustomSolutions />
            <ProcessSteps />
            <WhyChooseUs />
        </main>
    )
} 