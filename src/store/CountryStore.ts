import { create } from "zustand";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type ViewStateTypes =
  | { status: "loading" }
  | { status: "done" }
  | { status: "errors" };

type CountriesDataType = {
  cca3: string;
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    nativeName: {
      eng?: {
        common: string;
      };
    };
    official: string;
  };
  population: number;
  region: string;
  subregion?: string;
  capital: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders?: string[];
};

type StateType = {
  viewState: ViewStateTypes;
  countryData: CountriesDataType[];
  countries: CountriesDataType[];
};

type ActionsType = {
  getCountriesData: () => void;
  getCountriesByName: (countryName: string) => void;
  getCountriesByRegion: (regionName: string) => void;
  getSingleCountry: (name: string | undefined) => void;
};

const useCountryStore = create<StateType & ActionsType>()((set) => ({
  viewState: { status: "loading" },
  countryData: [],
  countries: [],
  getCountriesData: async () => {
    try {
      set(() => ({ viewState: { status: "loading" } }));

      const response: AxiosResponse<CountriesDataType[]> = await axios({
        method: "GET",
        url: "https://restcountries.com/v3.1/all",
        responseType: "json",
      } as AxiosRequestConfig);

      set(() => ({ countries: response.data }));

      set(() => ({ viewState: { status: "done" } }));
    } catch (error) {
      if (error instanceof Error) {
        set(() => ({ viewState: { status: "errors" } }));
        console.error(error);
      }
    }
  },
  getCountriesByName: async (countryName) => {
    try {
      set(() => ({ viewState: { status: "loading" } }));

      const response: AxiosResponse<CountriesDataType[]> = await axios({
        method: "GET",
        url: `https://restcountries.com/v3.1/name/${countryName}`,
        responseType: "json",
      } as AxiosRequestConfig);

      set(() => ({ countries: response.data }));

      set(() => ({ viewState: { status: "done" } }));
    } catch (error) {
      if (error instanceof Error) {
        set(() => ({ viewState: { status: "errors" } }));
        console.error(error);
      }
    }
  },
  getCountriesByRegion: async (regionName) => {
    try {
      set(() => ({ viewState: { status: "loading" } }));

      const response: AxiosResponse<CountriesDataType[]> = await axios({
        method: "GET",
        url: `https://restcountries.com/v3.1/region/${regionName}`,
        responseType: "json",
      } as AxiosRequestConfig);

      set(() => ({ countries: response.data }));

      set(() => ({ viewState: { status: "done" } }));
    } catch (error) {
      if (error instanceof Error) {
        set(() => ({ viewState: { status: "errors" } }));
        console.error(error);
      }
    }
  },
  getSingleCountry: async (name) => {
    try {
      set(() => ({ viewState: { status: "loading" } }));

      const response: AxiosResponse<CountriesDataType[]> = await axios({
        method: "GET",
        url: `https://restcountries.com/v3.1/name/${name}?fullText=true`,
        responseType: "json",
      } as AxiosRequestConfig);

      set(() => ({ countryData: response.data }));

      set(() => ({ viewState: { status: "done" } }));
    } catch (error) {
      if (error instanceof Error) {
        set(() => ({ viewState: { status: "errors" } }));
        console.error(error);
      }
    }
  },
}));

export default useCountryStore;
