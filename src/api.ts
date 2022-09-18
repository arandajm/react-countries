import { Country } from "./types";

export default {
  search: async (): Promise<Country[]> => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
    );
    const data = response.json();

    return data;
  },
  detail: () => {},
};
