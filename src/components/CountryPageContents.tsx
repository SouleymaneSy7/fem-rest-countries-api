import React from "react";
import useCountryStore from "../store/CountryStore";
import { Link, useParams } from "react-router-dom";
import Title from "./Title";
import Errors from "./Errors";
import Loader from "./Loader";
import formatter from "../helpers/formatList";

const CountryPageContents: React.FC = () => {
  const { countryName } = useParams<{ countryName: string }>();

  const countryData = useCountryStore((state) => state.countryData);
  const viewState = useCountryStore((state) => state.viewState);
  const getSingleCountry = useCountryStore((state) => state.getSingleCountry);

  React.useEffect(() => {
    getSingleCountry(countryName);
  }, [countryName, getSingleCountry]);

  if (viewState.status === "loading") {
    return <Loader />;
  }

  if (viewState.status === "errors") {
    return <Errors />;
  }

  return (
    <main className="container py-10 md:py-14">
      <Link
        to="/"
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
                      {formatter(
                        Object.values(country.name.nativeName).map(
                          (name) => name.common
                        ),
                        "disjunction"
                      ) || country.name?.official}
                    </li>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">Population:</strong>{" "}
                      {country.population.toLocaleString("en-GB")}
                    </li>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">Region:</strong>{" "}
                      {country.region}
                    </li>

                    {country.subregion ? (
                      <li className="lg:mb-2">
                        <strong className="font-fw-semi-bold">
                          Sub Region:
                        </strong>{" "}
                        {country.subregion}
                      </li>
                    ) : null}

                    {country.capital ? (
                      <li className="lg:mb-2">
                        <strong className="font-fw-semi-bold">Capital:</strong>{" "}
                        {country.capital}
                      </li>
                    ) : null}
                  </ul>

                  <ul>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">
                        Top Level Domain:
                      </strong>{" "}
                      {country.tld[0]}
                    </li>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">
                        Currencies:{" "}
                      </strong>
                      {formatter(
                        Object.values(country.currencies).map((c) => c.name),
                        "conjunction"
                      )}
                    </li>
                    <li className="lg:mb-2">
                      <strong className="font-fw-semi-bold">Languages: </strong>
                      {formatter(
                        Object.values(country.languages),
                        "conjunction"
                      )}
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
                      {country.borders?.map((border: string, index: number) => {
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
