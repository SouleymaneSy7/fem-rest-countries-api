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

  console.log(searchTerm);

  return (
    <form
      className="flex items-center gap-3 p-4 max-w-[380px] rounded-md shadow-lg"
      onSubmit={onSearchSubmit}
    >
      <label htmlFor={inputID}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>

      <Inputs
        type={"text"}
        id={inputID}
        placeholder="Search for a country..."
        className="h-full w-full outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default CountrySearchInput;
