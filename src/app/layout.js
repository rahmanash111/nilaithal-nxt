import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApolloWrapper from "@/component/ApolloProvider";
import Providers from "./components/Providers";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-title",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-text",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nilaithal – Solar, EV Charging & Energy Storage Solutions",

  description:
    "Nilaithal designs and installs solar power, EV charging & energy storage systems across India. Get a free consultation for your home or business.",

  keywords: [
    "solar energy company India",
    "EV charging solutions",
    "renewable energy solutions",
    "energy storage systems",
    "rooftop solar installation",
    "solar panel company",
    "EV charger installation",
    "battery storage solutions",
    "clean energy company",
    "sustainable energy solutions",
    "carbon footprint reduction",
    "green energy provider",
    "net metering",
    "solar for business",
    "solar for home",
  ],

  alternates: {
    canonical: "https://nilaithal.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${jost.variable} h-full antialiased`} >
      {/* <html lang="en" className={`h-full antialiased`} > */}
      <body className="min-h-full flex flex-col">
        <Providers>
          <ApolloWrapper>
            <Header />
            {children}
            <Footer />
          </ApolloWrapper>
        </Providers>
      </body>
    </html>
  );
}
