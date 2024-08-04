import { CircularProgress, Skeleton, Stack } from '@mui/material';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorHandler } from '../../components/ErrorHandler/ErrorHandler';
import { CountryType } from '../../types/CountryType';
import { CountryDescCard } from './CountryDescCard/CountryDescCard';
import { $countryStoreGetStatus, clearCountryStore, fetchCountryByNameFx } from './model/countryStore';

export const CountryPage = () => {
    const countryName = (useParams().country as string).replaceAll('_', ' ');

    const { data, error, isLoading } = useUnit($countryStoreGetStatus);

    useEffect(() => {
        clearCountryStore();
        fetchCountryByNameFx({ countryName: countryName });
    }, []);

    return (
        <Stack flexDirection="row" justifyContent="center" sx={{ p: 2 }}>
            {!isLoading && Object.keys(data).length !== 0 ? (
                <CountryDescCard country={data as CountryType} />
            ) : (
                <Skeleton variant="rectangular" width={800} height={500} />
            )}
            {error?.message && <ErrorHandler errorMessage={error.message} />}
        </Stack>
    );
};
