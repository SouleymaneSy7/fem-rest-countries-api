import React from "react";
import Countries from "../components/Countries";
import CountrySearchInput from "../components/CountrySearchInput";
import CountryFilterByRegion from "../components/CountryFilterByRegion";

const Home: React.FC = () => {
  return (
    <main className="container py-4 mt-5 md:mt-6">
      <section className="flex flex-col gap-10 md:flex-row md:justify-between md:items-center mb-9 md:mb-11">
        <CountrySearchInput />
        <CountryFilterByRegion />
      </section>

      <Countries />
    </main>
  );
};

export default Home;
