import type { PaletteMode } from '@mui/material';
import { amber, grey, deepOrange } from '@mui/material/colors';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // Light mode palette
                primary: {
                    main: amber[500],
                },
                secondary: {
                    main: deepOrange[500],
                },
                divider: amber[200],
                background: {
                    default: '#f4f6f8', // Soft light gray
                    paper: '#ffffff',
                },
                text: {
                    primary: '#1a2027',
                    secondary: grey[800],
                },
            }
            : {
                // Dark mode palette
                primary: {
                    main: '#F59E0B', // Amber blaze
                },
                secondary: {
                    main: '#DC2626', // Crimson fire
                },
                divider: '#30363d',
                background: {
                    default: "#000000",
                    paper: "#000000",
                },
                text: {
                    primary: '#e3f2fd',
                    secondary: '#b0bec5',
                },
            }),
            
    },
    typography: {
        fontFamily: [
            '"Inter"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontWeight: 700,
            letterSpacing: '-0.025em',
        },
        h2: {
            fontWeight: 600,
            letterSpacing: '-0.025em',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none' as const,
                    fontWeight: 600,
                    background: mode === 'dark'
                        ? 'linear-gradient(45deg, #F59E0B, #DC2626)'
                        : 'linear-gradient(45deg, #FFC107, #FF5722)',
                    color: '#fff',
                    boxShadow: mode === 'dark'
                        ? '0 4px 15px rgba(245, 158, 11, 0.4)'
                        : '0 4px 15px rgba(255, 193, 7, 0.4)',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // Remove default MUI overlay
                }
            }
        }
    },
    
});
