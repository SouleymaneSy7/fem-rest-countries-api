import { create } from "zustand";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type ViewStateTypes =
  | { status: "loading" }
  | { status: "done" }
  | { status: "errors" };

type CountriesDataType = {
  name?: {
    common: string;
    official: string;
    nativeName?: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  currencies?: object;
  capital: string[];
  region: string;
  languages?: object;
  latlng: number[];
  area: number;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
};

type StateType = {
  viewState: ViewStateTypes;
  country: CountriesDataType | null;
  countries: CountriesDataType[];
};

type ActionsType = {
  getCountriesData: () => void;
  getCountriesByName: (countryName: string) => void;
  getCountriesByRegion: (regionName: string) => void;
  getSingleCountry: (name: string) => void;
};

const useCountryStore = create<StateType & ActionsType>()((set) => ({
  viewState: { status: "loading" },
  country: null,
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

      const response: AxiosResponse<CountriesDataType> = await axios({
        method: "GET",
        url: `https://restcountries.com/v3.1/name/${name}`,
        responseType: "json",
      } as AxiosRequestConfig);

      set(() => ({ country: response.data }));

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
