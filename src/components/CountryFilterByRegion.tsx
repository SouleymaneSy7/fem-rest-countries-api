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
    <form>
      <select
        id="select"
        value={Regions.name}
        onChange={(e) => getCountriesByRegion(e.target.value)}
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
