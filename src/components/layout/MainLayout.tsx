// src/components/layout/MainLayout.tsx
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default', // uses theme background
        color: 'text.primary',
      }}
    >
      {/* Fixed top navbar */}
      <Navbar />

      {/* Main content – grows to fill space */}
      <Box
        component="main"
        sx={{
          flex: 1,
          py: { xs: 4, md: 6 }, // responsive padding
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {children}
      </Box>

      {/* Footer at bottom */}
      <Footer />
    </Box>
  );
}