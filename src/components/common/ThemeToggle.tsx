// src/components/common/ThemeToggle.tsx
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeMode } from '@hooks/useThemeMode';
import { useTheme } from '@mui/material/styles';

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      aria-label={`switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      sx={{
        ml: 1,
        // Make icon always visible in both modes
        color: mode === 'light' 
          ? theme.palette.primary.main        // blue in light mode
          : theme.palette.common.white,       // white in dark mode
        '&:hover': {
          bgcolor: mode === 'light'
            ? 'rgba(25, 118, 210, 0.08)'      // light blue hover
            : 'rgba(255, 255, 255, 0.08)',
        },
      }}
    >
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}