import { instance } from '../../../config/axiosConfig';
import { CountryType } from '../../../types/CountryType';

export const getCountryByName = (countryName: string): Promise<CountryType> => {
    const country: Promise<CountryType> = instance
        .get(`/name/${countryName}?fullText=true`)
        .then((res) => res.data)
        .then((res) => res[0]);

    return country;
};
