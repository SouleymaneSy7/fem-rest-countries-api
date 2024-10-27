import React from "react";
import useCountryStore from "../store/CountryStore";
import CountryItem from "./CountryItem";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import CountryErrors from "./CountryErrors";

const Countries: React.FC = () => {
  const countries = useCountryStore((state) => state.countries);
  const viewState = useCountryStore((state) => state.viewState);
  const getCountriesData = useCountryStore((state) => state.getCountriesData);

  React.useEffect(() => {
    getCountriesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (viewState.status === "loading") {
    return <Loader />;
  }

  if (viewState.status === "errors") {
    return <CountryErrors />;
  }

  return (
    <section className="grid-customs | gap-8">
      {countries.map((country) => {
        return (
          <React.Fragment key={country.cca3}>
            <Link to={`/${country.name?.official}`}>
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
