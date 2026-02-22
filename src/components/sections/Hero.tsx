// src/components/sections/Hero.tsx
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }} // re-triggers when ~35% visible
          transition={{ staggerChildren: 0.25 }}
        >
          <motion.div variants={fadeUp}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '3rem', md: '6rem', lg: '7.5rem' },
                fontWeight: 900,
                lineHeight: 1,
                mb: 2,
                letterSpacing: '-0.02em',
                textAlign: 'center',
                color: 'text.primary', // black in light mode, white/light in dark mode
              }}
            >
              Abenezer Daniel
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.6rem', md: '2.8rem' },
                fontWeight: 500,
                mb: 3,
                textAlign: 'center',
                color: 'text.secondary', // softer secondary color, still readable
              }}
            >
              Full-Stack Developer & AI Enthusiast
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                fontWeight: 400,
                mb: 5,
                maxWidth: '900px',
                mx: 'auto',
                textAlign: 'center',
                color: 'text.secondary',
              }}
            >
             Computer Science graduated building interactive web & mobile apps with modern technologies and AI integration.
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="#projects"
                sx={{
                  py: 1.8,
                  px: 5,
                  fontSize: '1.2rem',
                  boxShadow: 4,
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                size="large"
                href="#contact"
                sx={{
                  py: 1.8,
                  px: 5,
                  fontSize: '1.2rem',
                }}
              >
                Get in Touch
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

// Reusable animation variants (use this same pattern for all sections)
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut' as const,
    },
  },
};