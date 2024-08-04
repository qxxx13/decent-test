import { combine, createEffect, createStore, restore } from 'effector';

import { CountryType } from '../../../types/CountryType';
import { getCountryByName } from '../api/countryPageApi';

export const $countryStore = createStore<CountryType | Record<string, unknown>>({});

export const fetchCountryByNameFx = createEffect<{ countryName: string }, CountryType>();

fetchCountryByNameFx.use((params) => getCountryByName(params.countryName));

$countryStore.on(fetchCountryByNameFx.doneData, (_, country) => country);

export const $fetchError = restore<Error>(fetchCountryByNameFx.failData, null);

export const $countryStoreGetStatus = combine({
    isLoading: fetchCountryByNameFx.pending,
    error: $fetchError,
    data: $countryStore,
});
