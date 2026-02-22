// src/components/layout/Footer.tsx
import { Box, Typography, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, Telegram } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 5 },
        px: { xs: 2, md: 4 },
        mt: 'auto',
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="text.secondary" gutterBottom>
        © {new Date().getFullYear()} Abenezer Daniel. All rights reserved.
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: { xs: 1.5, sm: 2.5 },
        flexWrap: 'wrap',
        mt: 1
      }}>
        <IconButton
          component={Link}
          href="https://github.com/AB07"
          target="_blank"
          aria-label="GitHub"
          color="inherit"
          size="medium"
        >
          <GitHub fontSize="medium" />
        </IconButton>

        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/abenezer-daniel-a993a03a8/"
          target="_blank"
          aria-label="LinkedIn"
          color="inherit"
          size="medium"
        >
          <LinkedIn fontSize="medium" />
        </IconButton>

        <IconButton
          component={Link}
          href="etechtube01@gmail.com"
          aria-label="Email"
          color="inherit"
          size="medium"
        >
          <Email fontSize="medium" />
        </IconButton>

        {/* Telegram link */}
        <IconButton
          component={Link}
          href="https://t.me/Ab_dan01"   
          target="_blank"
          aria-label="Telegram"
          color="inherit"
          size="medium"
        >
          <Telegram fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
}