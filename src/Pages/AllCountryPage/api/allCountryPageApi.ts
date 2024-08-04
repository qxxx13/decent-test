import { instance } from '../../../config/axiosConfig';
import { CountryType } from '../../../types/CountryType';

export const getAllCountry = (searchValue: string): Promise<CountryType[]> => {
    const allCountry: Promise<CountryType[]> =
        searchValue === '' ? instance.get('/all').then((res) => res.data) : instance.get(`/name/${searchValue}`).then((res) => res.data);

    return allCountry;
};
