// src/components/sections/Contact.tsx
import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Format message nicely for Telegram
    const telegramMessage = `
New message from portfolio:

👤 Name: ${formData.name}
📧 Email: ${formData.email}

💬 Message:
${formData.message}
    `.trim();

    // Copy to clipboard
    navigator.clipboard.writeText(telegramMessage).then(() => {
      setOpen(true);
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);

      // Automatically open Telegram web (user can paste & send)
      window.open('https://t.me/Ab_dan01', '_blank');
    }).catch(() => {
      alert('Failed to copy message. Please copy manually.');
      setLoading(false);
    });
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          color="primary.main"
          sx={{ mb: 8, fontWeight: 700 }}
        >
          Let's Connect
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {/* Social Links Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Typography variant="h5" gutterBottom align="center">
                Reach out to me
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LinkedIn fontSize="large" />}
                  href="https://www.linkedin.com/in/abenezer-daniel-a993a03a8/" // ← CHANGE TO YOUR REAL LINKEDIN URL
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    py: 2,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'primary.main', color: 'white' },
                  }}
                >
                  Connect on LinkedIn
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<GitHub fontSize="large" />}
                  href="https://github.com/AB07" // ← CHANGE IF NEEDED
                  target="_blank"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    py: 2,
                  }}
                >
                  GitHub
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Email fontSize="large" />}
                  href="etechtube01@gmail.com" // ← CHANGE TO YOUR REAL EMAIL
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    py: 2,
                  }}
                >
                  Email Me
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Typography variant="h5" gutterBottom align="center">
                Send a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  error={!!errors.name}
                  helperText={errors.name}
                />

                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                  error={!!errors.message}
                  helperText={errors.message}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={loading}
                  sx={{ mt: 3, py: 2 }}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    'Copy & Open Telegram'
                  )}
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Success Toast */}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          Message copied to clipboard! Paste it in Telegram and send.
        </Alert>
      </Snackbar>
    </Box>
  );
}