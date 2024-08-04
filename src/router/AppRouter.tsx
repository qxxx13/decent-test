import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { AllCountryPage } from '../Pages/AllCountryPage/AllCountryPage';
import { CountryPage } from '../Pages/CountryPage/CountryPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.root} element={<AllCountryPage />} />
            <Route path={routes.country} element={<CountryPage />} />
            <Route path={routes.error} element={<h1>Error</h1>} />
        </Routes>
    );
};
