import EnergySolutions from "./components/landingpage/EnergySolutions";
import Hero from "./components/landingpage/Hero";
import FAQ from "./components/landingpage/FAQ";
import ProcessSteps from "./services/ProcessSteps";
import { CTA } from "./components/landingpage/CTA";
import OurStoryTimeline from "./components/landingpage/OurStoryTimeline";

export const metadata = {
  title: "Nilaithal – Solar, EV Charging & Energy Storage Solutions",
  description: 'Nilaithal designs and installs solar power, EV charging & energy storage systems across India. Get a free consultation for your home or business.',
  keywords: ['solar energy company India', 'EV charging solutions', 'renewable energy solutions', 'energy storage systems', 'rooftop solar installation', 'solar panel company', 'EV charger installation', 'battery storage solutions', 'clean energy company', 'sustainable energy solutions', 'carbon footprint reduction', 'green energy provider', 'net metering', 'solar for business', 'solar for home'],
  alternates: {
    canonical: 'https://nilaithal.com',
  },
};

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <EnergySolutions />
      <OurStoryTimeline />
      <ProcessSteps />
      <FAQ />
      <CTA />
    </div>
  );
}
