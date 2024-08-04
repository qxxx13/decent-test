import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

import { themeOptions } from './common/Theme/themeOptions';
import { ThemeProvider } from '@mui/material';

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
