import React from "react";
import useCountryStore from "../store/CountryStore";
import CountryItem from "./CountryItem";
import { Link } from "react-router-dom";

const Countries: React.FC = () => {
  const countries = useCountryStore((state) => state.countries);
  const getCountriesData = useCountryStore((state) => state.getCountriesData);

  React.useEffect(() => {
    getCountriesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {countries.map((country) => {
        return (
          <React.Fragment key={country.cca3}>
            <Link to={`/${country.name?.common}`}>
              <CountryItem
                imgSrc={country.flags.svg}
                title={country.name?.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default Countries;
