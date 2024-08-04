import { combine, createEffect, createEvent, createStore, restore } from 'effector';

import { CountryType } from '../../../types/CountryType';
import { getCountryByName } from '../api/countryPageApi';

export const $countryStore = createStore<CountryType | Record<string, unknown>>({});

export const fetchCountryByNameFx = createEffect<{ countryName: string }, CountryType>();

fetchCountryByNameFx.use((params) => getCountryByName(params.countryName));

$countryStore.on(fetchCountryByNameFx.doneData, (_, country) => country);

export const $fetchError = restore<Error>(fetchCountryByNameFx.failData, null);

export const clearCountryStore = createEvent();

$countryStore.on(clearCountryStore, (store) => (store = {}));
$fetchError.on(clearCountryStore, (errorStore) => (errorStore = null));

export const $countryStoreGetStatus = combine({
    isLoading: fetchCountryByNameFx.pending,
    error: $fetchError,
    data: $countryStore,
});
