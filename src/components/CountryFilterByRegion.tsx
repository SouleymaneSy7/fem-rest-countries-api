import React from "react";
import useCountryStore from "../store/CountryStore";

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
      >
        <option value="">Filter by Region</option>
        {Regions.map((region, index) => (
          <option key={index} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default CountryFilterByRegion;
