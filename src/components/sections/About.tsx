// src/components/sections/About.tsx
import { Box, Typography, Avatar, Container } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../../assets/images/me.jpg';

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
          {/* Photo on top with animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }} // re-triggers when ~40% visible
            variants={fadeUp}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Avatar
              src={profileImage}
              alt="Abenezer Daniel"
              sx={{
                width: { xs: 220, sm: 280, md: 340 },
                height: { xs: 220, sm: 280, md: 340 },
                mx: 'auto',
                mb: 5,
                boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
              }}
            />
          </motion.div>

          {/* Text content with staggered animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.25 }}
          >
            <motion.div variants={fadeUp}>
              <Typography variant="h3" gutterBottom color="primary.main">
                About Me
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.9 }}>
                Hello! I'm Abenezer Daniel, a passionate Computer Science graduated
                specializing in full-stack development and AI-powered applications.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.9 }}>
                I love turning ideas into interactive, user-friendly web and mobile experiences 
                using React, TypeScript, Node.js, Material UI, and modern AI APIs.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.9 }}>
                Outside of coding, I'm constantly exploring new technologies, reading about 
                ethical AI, and building side projects that solve real problems.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography variant="h6" sx={{ mt: 4, fontWeight: 600 }}>
                Ready to collaborate? Let's create something impactful together!
              </Typography>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

// Reusable animation variants (same as Hero — copy this pattern for all future sections)
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' as const },
  },
};