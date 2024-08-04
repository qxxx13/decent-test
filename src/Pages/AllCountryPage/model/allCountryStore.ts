import { combine, createEffect, createEvent, createStore, restore } from 'effector';

import { CountryType } from '../../../types/CountryType';
import { getAllCountry } from '../api/allCountryPageApi';

export const $allCountryStore = createStore<CountryType[]>([]);

export const fetchAllCountryFx = createEffect<{ searchValue: string }, CountryType[]>();

fetchAllCountryFx.use((params) => getAllCountry(params.searchValue));

$allCountryStore.on(fetchAllCountryFx.doneData, (_, allCountry) => allCountry);

export const $fetchError = restore<Error>(fetchAllCountryFx.failData, null);

export const clearAllCountryStore = createEvent();

$allCountryStore.on(clearAllCountryStore, (store) => (store = []));
$fetchError.on(clearAllCountryStore, (errorStore) => (errorStore = null));

export const $allCountryStoreGetStatus = combine({
    isLoading: fetchAllCountryFx.pending,
    error: $fetchError,
    data: $allCountryStore,
});
