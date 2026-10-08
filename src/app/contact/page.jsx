import React from "react";
import ContactForm from "./ContactForm";
import { CTA } from "./CTA";
import Hero from "./Hero";
import AddressCard from "./AddressCard";
import Map from "./Map";
import WhyChoose from "./WhyChoose";

export const metadata = {
  title: "Contact Nilaithal – Solar & EV Charging Experts Chennai",

  description:
    "Get in touch with Nilaithal for solar installation, EV charging, or energy storage solutions in Chennai. Call, email, or fill our form — we respond within 24 hours.",

  keywords: [
    "solar energy company Chennai",
    "solar panel installation Chennai",
    "rooftop solar installation Chennai",
    "EV charging solutions Chennai",
    "EV charger installation Chennai",
    "energy storage solutions Chennai",
    "battery storage solutions",
    "solar installation company",
    "solar for home",
    "solar for business",
    "EV charging infrastructure",
    "renewable energy solutions",
  ],

  alternates: {
    canonical: "https://nilaithal.com/contact",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
  return (
    <div>
      <Hero />
      <AddressCard />
      <ContactForm />
      <Map />
      <WhyChoose />
      <CTA />
    </div>
  );
}
