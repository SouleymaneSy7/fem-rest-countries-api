import React, { FormEvent } from "react";
import Inputs from "./Inputs";
import useCountryStore from "../store/CountryStore";

const CountrySearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const id = React.useId();
  const inputID = `input-${id}`;

  const getCountriesByName = useCountryStore(
    (state) => state.getCountriesByName
  );

  const onSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    getCountriesByName(searchTerm);
  };

  return (
    <form
      className="flex items-center gap-6 py-[14px] px-7 md:px-8 w-full md:max-w-[460px] bg-color-elements rounded-md shadow-lg"
      onSubmit={onSearchSubmit}
    >
      <label htmlFor={inputID}>
        <i className="fa-solid fa-magnifying-glass | text-color-input-text"></i>
      </label>

      <Inputs
        type={"text"}
        id={inputID}
        placeholder="Search for a country..."
        className="h-full w-full outline-none bg-color-elements placeholder:text-color-input-text placeholder:font-fw-regular text-color-text font-fw-semi-bold "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default CountrySearchInput;
