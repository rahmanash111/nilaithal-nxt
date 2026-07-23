"use client"

import { useQuery } from "@apollo/client/react";
import EnergySolutions from "./components/landingpage/EnergySolutions";
import Hero from "./components/landingpage/Hero";
import HowWeWork from "./components/landingpage/HowWeWork";
import { gql } from "@apollo/client";
import FAQ from "./components/landingpage/FAQ";

export default function Home() {

  const { data, loading } = useQuery(gql`
query JobPosts {
    jobPosts {
        jobTitle
        jobDescription
        noOfOpenings
        experience
        salary
        location
        contact
        skills
        poster {
            url
        }
    }
}
`);

  console.log(data);


  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <EnergySolutions />
      <HowWeWork />
      <FAQ />
    </div>
  );
}
