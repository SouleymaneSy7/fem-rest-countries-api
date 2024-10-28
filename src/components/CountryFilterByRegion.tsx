// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck

import React from "react";
import useCountryStore from "../store/CountryStore";
import VisuallyHidden from "./visuallyHidden";

const Regions = [
  { name: "Africa" },
  { name: "America" },
  { name: "Asia" },
  { name: "Europe" },
  { name: "Oceania" },
];

const CountryFilterByRegion: React.FC = () => {
  const getCountriesByRegion = useCountryStore(
    (state) => state.getCountriesByRegion
  );

  return (
    <form className="px-4 w-[187px] h-[52px] bg-color-elements rounded-md shadow-lg cursor-pointer">
      <select
        id="select"
        value={Regions.name}
        onChange={(e) => getCountriesByRegion(e.target.value)}
        className="w-full h-full bg-color-elements outline-none cursor-pointer"
        aria-label="Filter countries based on region"
      >
        <option value="">Filter by Region</option>
        {Regions.map((region, index) => (
          <option key={index} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>
      <VisuallyHidden>Filter countries based on region.</VisuallyHidden>
    </form>
  );
};

export default CountryFilterByRegion;
