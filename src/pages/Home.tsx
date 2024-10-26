import React from "react";
import Countries from "../components/Countries";
import CountrySearchInput from "../components/CountrySearchInput";
import CountryFilterByRegion from "../components/CountryFilterByRegion";

const Home: React.FC = () => {
  return (
    <main className="container py-4">
      <section className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-5">
        <CountrySearchInput />
        <CountryFilterByRegion />
      </section>

      <Countries />
    </main>
  );
};

export default Home;
