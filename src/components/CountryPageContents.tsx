import React from "react";
import useCountryStore from "../store/CountryStore";
import { Link, useParams } from "react-router-dom";
import Title from "./Title";

const CountryPageContents: React.FC = () => {
  const { countryName } = useParams();

  const countryData = useCountryStore((state) => state.countryData);
  const viewState = useCountryStore((state) => state.viewState);
  const getSingleCountry = useCountryStore((state) => state.getSingleCountry);

  React.useEffect(() => {
    getSingleCountry(countryName);
  }, [countryName, getSingleCountry]);

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
    <main className="container py-10 md:py-14">
      <Link
        to={"/"}
        className="flex items-center w-fit gap-4 py-2 px-8 bg-color-elements rounded-md shadow-lg mb-10 md:mb-20"
      >
        <i className="fa-solid fa-arrow-left | text-color-text"></i>
        <span>Back</span>
      </Link>

      <section className="flex flex-col gap-9 lg:flex-row lg:justify-between lg:items-center">
        {countryData.map((country) => {
          return (
            <React.Fragment key={country.cca3}>
              <div className="w-full lg:max-w-[500px] lg:h-[340px] ">
                <img
                  src={country.flags.svg}
                  alt={country.flags.alt}
                  className="w-full h-full object-cover aspect-video"
                />
              </div>

              <div>
                <Title
                  level="h2"
                  className="text-fs-detail-page-title font-fw-bold mb-3"
                >
                  {country.name?.common}
                </Title>

                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-[7rem] ">
                  <ul>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">
                        Native Name:
                      </strong>{" "}
                      {country.name?.nativeName?.eng ? (
                        <span>{country.name?.nativeName?.eng.common}</span>
                      ) : (
                        <span>{country.name?.official}</span>
                      )}
                    </li>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">Population:</strong>{" "}
                      {country.population.toLocaleString("en-GB")}
                    </li>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">Region:</strong>{" "}
                      {country.region}
                    </li>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">Sub Region:</strong>{" "}
                      {country.subregion}
                    </li>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">Capital:</strong>{" "}
                      {country.capital}
                    </li>
                  </ul>

                  <ul>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">
                        Top Level Domain:
                      </strong>{" "}
                      {country.tld}
                    </li>
                    <li>
                      {/* <strong className="font-fw-semi-bold">Currencies: {country.currencies.} </strong> */}
                    </li>
                    <li>
                      {/* <strong className="font-fw-semi-bold">Languages: {country.languages} </strong> */}
                    </li>
                  </ul>
                </div>

                {country.borders ? (
                  <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center">
                    <p>
                      <strong className="font-fw-semi-bold">
                        Border Countries:
                      </strong>
                    </p>

                    <ul className="flex items-center gap-2 flex-wrap">
                      {country.borders?.map((border, index) => {
                        return (
                          <li
                            key={index}
                            className="py-[2px] px-5 bg-color-elements rounded-sm shadow-md"
                          >
                            {border.toLowerCase()}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </main>
  );
};

export default CountryPageContents;
