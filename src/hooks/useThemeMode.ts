// src/hooks/useThemeMode.ts
import { useContext } from 'react';
import { ThemeContext, type ThemeContextType } from '@contexts/ThemeContext';

export function useThemeMode(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeMode must be used within ThemeContextProvider');
  }

  return context;
}