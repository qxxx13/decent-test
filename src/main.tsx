import './index.css';

import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { themeOptions } from './common/Theme/themeOptions';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={themeOptions}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
