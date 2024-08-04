import { createTheme, ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00eeff',
        },
        secondary: {
            main: '#00ffbd',
        },
        background: {
            default: '#04897e',
            paper: '#056e5d',
        },
    },
});
