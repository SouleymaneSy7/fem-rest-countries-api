import React from "react";
import Title from "./Title";

type CountryItemPropsType = {
  imgSrc: string;
  title: string | undefined;
  population: number;
  region: string;
  capital: string[];
};

const CountryItem: React.FC<CountryItemPropsType> = ({
  imgSrc,
  title,
  population,
  region,
  capital,
}) => {
  return (
    <article>
      <img src={imgSrc} alt={`${title} flags picture`} />

      <div>
        <Title level="h2">{title}</Title>

        <ul>
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
    </article>
  );
};

export default CountryItem;
