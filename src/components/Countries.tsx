import React from "react";
import useCountryStore from "../store/CountryStore";
import CountryItem from "./CountryItem";
import { Link } from "react-router-dom";

const Countries: React.FC = () => {
  const countries = useCountryStore((state) => state.countries);
  const viewState = useCountryStore((state) => state.viewState);
  const getCountriesData = useCountryStore((state) => state.getCountriesData);

  React.useEffect(() => {
    getCountriesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (viewState.status === "loading") {
    return (
      <div className="h-full w-full flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (viewState.status === "errors") {
    return (
      <div className="h-full w-full flex justify-center items-center">
        Errors
      </div>
    );
  }

  return (
    <section className="grid-customs | gap-8">
      {countries.map((country) => {
        return (
          <React.Fragment key={country.cca3}>
            <Link to={`/${country.name?.common}`}>
              <CountryItem
                imgSrc={country.flags.svg}
                alt={country.flags.alt}
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
