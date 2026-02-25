// src/components/sections/Certificates.tsx
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Launch as LaunchIcon } from '@mui/icons-material';

// Your three certificates
const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Issued 2024",
    previewImage: "/assets/certificates/freeCodeCamp-responsive.jpg", // ← save your screenshot here
    fullLink: "https://freecodecamp.org/certification/fcce9fd9fa1-a272-45fa-b73f-f1cc0d967097/responsive-web-design",
  },
  {
    title: "Introduction to Programming I",
    issuer: "FutureLearn",
    date: "Issued 2024", // change date if needed
    previewImage: "/assets/certificates/futurelearn-gq09gm5.jpg", // ← save your screenshot here
    fullLink: "https://www.futurelearn.com/certificates/gq09gm5",
  },
  {
    title: "Udacity Certificate",
    issuer: "Udacity",
    date: "Issued 2024", // change date if needed
    previewImage: "/assets/certificates/udacity-bd855f8c.jpg", // ← save your screenshot here
    fullLink: "https://www.udacity.com/certificate/e/bd855f8c-54f9-11ef-be57-8f2c3cf90721",
  },
];

export default function Certificates() {
  return (
    <Box
      component="section"
      id="certificates"
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
          Certificates
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {certificates.map((cert, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cert.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 6,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: 12,
                    },
                    bgcolor: 'background.paper',
                  }}
                >
                  {/* Certificate preview image – clear, no blur */}
                  <CardMedia
                    component="img"
                    height="280"
                    image={cert.previewImage}
                    alt={`${cert.title} certificate preview`}
                    sx={{
                      objectFit: 'contain',
                      objectPosition: 'top',
                      bgcolor: 'grey.50',
                    }}
                  />

                  <CardContent sx={{ flexGrow: 1, p: 4, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom fontWeight={700}>
                      {cert.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {cert.issuer} • {cert.date}
                    </Typography>

                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={<LaunchIcon />}
                      href={cert.fullLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: 2 }}
                    >
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}