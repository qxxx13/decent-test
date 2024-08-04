import { useEffect, useMemo, useState } from 'react';
import { $allCountryStoreGetStatus, clearCountryStore, fetchAllCountryFx } from './model/allCountryStore';
import { useUnit } from 'effector-react';
import { AllCountryList } from '../../components/AllCountryList/AllCountryList';
import { CountryType } from '../../types/CountryType';
import { Box, CircularProgress, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import { debounce } from 'lodash';
import { ErrorHandler } from '../../components/ErrorHandler/ErrorHandler';

export const AllCountryPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const { data, error, isLoading } = useUnit($allCountryStoreGetStatus);
    const isDesktop = useMediaQuery('(min-width:600px)');

    const debounceSearch = useMemo(() => debounce((value: string) => setSearchValue(value), 1000), []);

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        debounceSearch(event.target.value);
    };

    useEffect(() => {
        fetchAllCountryFx({ searchValue: searchValue });

        return () => {
            clearCountryStore();
            debounceSearch.cancel();
        };
    }, [searchValue]);

    return (
        <Box sx={{ p: 2 }}>
            <Stack flexDirection={isDesktop ? 'row' : 'column'} justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="h3">Restcountries API</Typography>
                <TextField label="search by name" onChange={handleSearchInput} />
            </Stack>
            {!isLoading ? <AllCountryList allCountry={data as CountryType[]} /> : <CircularProgress />}
            {error?.message && <ErrorHandler errorMessage={error.message} />}
        </Box>
    );
};
