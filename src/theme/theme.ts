// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

// Common shared settings for both themes
const baseTheme = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  shape: {
    borderRadius: 12, // modern rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // no uppercase buttons
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        },
      },
    },
  },
};

// Light theme (default)
export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',        // your blue accent
      light: '#42a5f5',
      dark: '#1565c0',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#0d1117',
      secondary: '#6c757d',
    },
  },
});

// Dark theme (your preferred black-based look)
export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#42a5f5',        // slightly brighter blue for dark mode contrast
      light: '#66bbff',
      dark: '#1976d2',
    },
    background: {
      default: '#0d1117',     // deep black / dark gray (GitHub dark style)
      paper: '#161b22',
    },
    text: {
      primary: '#e6edf3',
      secondary: '#8b949e',
    },
  },
});