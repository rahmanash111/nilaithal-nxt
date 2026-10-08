import { AboutCTA, Misson, Stats, WhyChoose } from "./Components";
import Hero from "./Hero";
import OurStory from "./OurStory";

export const metadata = {
  title: "About Nilaithal – Chennai's Trusted Clean Energy Company",

  description:
    "Learn about Nilaithal — a Chennai-based solar, EV charging & energy storage company committed to making clean energy accessible for every Indian home and business.",

  keywords: [
    "solar energy company Chennai",
    "renewable energy company India",
    "clean energy experts",
    "rooftop solar installation",
    "EV charger installation",
    "sustainable energy solutions",
  ],

  alternates: {
    canonical: "https://nilaithal.com/about",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function about() {
  return (
    <div className="w-screen flex flex-col items-center overflow-hidden box-border">
      <Hero />
      <OurStory />
      <Misson />
      <WhyChoose />
      <Stats />
      <AboutCTA />
    </div>
  );
}
