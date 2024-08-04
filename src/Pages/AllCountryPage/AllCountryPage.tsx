import { Box, CircularProgress, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import { useUnit } from 'effector-react';
import { debounce } from 'lodash';
import { useEffect, useMemo, useState } from 'react';

import { AllCountryList } from '../../components/AllCountryList/AllCountryList';
import { ErrorHandler } from '../../components/ErrorHandler/ErrorHandler';
import { CountryType } from '../../types/CountryType';
import { $allCountryStoreGetStatus, clearAllCountryStore, fetchAllCountryFx } from './model/allCountryStore';

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
            clearAllCountryStore();
            debounceSearch.cancel();
        };
    }, [searchValue]);

    return (
        <Box sx={{ p: 2 }}>
            <Stack flexDirection={isDesktop ? 'row' : 'column'} justifyContent="space-between" sx={{ mb: 2, p: '0 16px 0 16px' }}>
                <Typography variant="h3">Restcountries API</Typography>
                <TextField label="search by name" onChange={handleSearchInput} />
            </Stack>
            {!isLoading ? <AllCountryList allCountry={data as CountryType[]} /> : <CircularProgress />}
            {error?.message && <ErrorHandler errorMessage={error.message} />}
        </Box>
    );
};
