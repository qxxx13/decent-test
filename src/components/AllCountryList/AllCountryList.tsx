import { Stack } from '@mui/material';
import { CountryType } from '../../types/CountryType';
import { CountryCard } from './CountryCard/CountryCard';

type AllCountryListProps = {
    allCountry: CountryType[];
};

export const AllCountryList: React.FC<AllCountryListProps> = ({ allCountry }) => {
    const countryList = allCountry && allCountry.map((country, index) => <CountryCard country={country} key={index} />);

    return (
        <Stack flexDirection="row" flexWrap="wrap" gap={2} justifyContent="center">
            {countryList}
        </Stack>
    );
};
