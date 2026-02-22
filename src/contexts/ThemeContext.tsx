// src/contexts/ThemeContext.tsx
import { createContext, useState, useMemo, type ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@theme/theme';

// ──────────────────────────────────────────────
// Define and EXPORT the context value type
// ──────────────────────────────────────────────
export interface ThemeContextType {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

// ──────────────────────────────────────────────
// Create and EXPORT the context object
// ──────────────────────────────────────────────
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ──────────────────────────────────────────────
// Provider component
// ──────────────────────────────────────────────
export function ThemeContextProvider({ children }: { children: ReactNode }) {
  // Load saved preference or default to dark mode
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('themeMode');
    return (saved as 'light' | 'dark') || 'dark';
  });

  const toggleTheme = () => {
    setMode((prev) => {
      const newMode = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newMode);
      return newMode;
    });
  };

  const selectedTheme = useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={selectedTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}