// src/pages/NotFound.tsx
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Typography
            variant="h1"
            color="primary.main"
            fontWeight={900}
            sx={{
              fontSize: { xs: '6rem', md: '10rem' },
              lineHeight: 1,
            }}
          >
            404
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
            Page Not Found
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}>
            The page you're looking for doesn't exist or has been moved.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/')}
            sx={{ py: 1.5, px: 5, fontSize: '1.1rem' }}
          >
            Back to Home
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}