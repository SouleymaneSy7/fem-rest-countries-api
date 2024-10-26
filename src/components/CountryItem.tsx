import React from "react";
import Title from "./Title";

type CountryItemPropsType = {
  imgSrc: string;
  alt: string;
  title: string | undefined;
  population: number;
  region: string;
  capital: string[];
};

const CountryItem: React.FC<CountryItemPropsType> = ({
  imgSrc,
  title,
  alt,
  population,
  region,
  capital,
}) => {
  return (
    <article className="overflow-hidden rounded-md bg-color-elements shadow-md">
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-[220px] object-cover aspect-video"
      />

      <div className="px-6 py-7">
        <Title level="h2" className="text-fs-card-title font-fw-bold mb-4">
          {title}
        </Title>

        <ul>
          <li>
            <strong className="font-fw-semi-bold">Population:</strong>{" "}
            {population.toLocaleString("en-GB")}
          </li>
          <li>
            <strong className="font-fw-semi-bold">Region:</strong> {region}
          </li>
          <li>
            <strong className="font-fw-semi-bold">Capital:</strong> {capital}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CountryItem;
