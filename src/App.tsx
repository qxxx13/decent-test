import React from 'react';
import { Background } from './common/Background/Background';
import { AppRouter } from './router/AppRouter';

export const App = () => {
    return (
        <>
            <Background />
            <AppRouter />
        </>
    );
};

export default App;
