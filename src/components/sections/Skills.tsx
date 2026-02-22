// src/components/sections/Skills.tsx
import { Box, Typography, Grid, Card, CardContent, Chip, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Storage, Build, Psychology } from '@mui/icons-material';

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' as const },
  },
};

export default function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      icon: <Code fontSize="large" color="primary" />,
      skills: ['React', 'TypeScript', 'Material UI', 'Framer Motion', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: <Storage fontSize="large" color="primary" />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'MySQL'],
    },
    {
      title: 'Tools & DevOps',
      icon: <Build fontSize="large" color="primary" />,
      skills: ['Git', 'Vercel', 'VS Code', 'Postman', 'Docker (learning)'],
    },
    {
      title: 'AI & Emerging',
      icon: <Psychology fontSize="large" color="primary" />,
      skills: ['Prompt Engineering', 'LLM APIs', 'AI Integration', 'Machine Learning Basics'],
    },
  ];

  return (
    <Box
      component="section"
      id="skills"
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
          sx={{ mb: 8 }}
        >
          My Skills
        </Typography>

        <Grid container spacing={4}>
          {skillGroups.map((group, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={group.title}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',                     // all cards fill full grid height
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    },
                    bgcolor: 'background.paper',
                  }}
                >
                  {/* Icon area – fixed height */}
                  <Box
                    sx={{
                      pt: 5,
                      pb: 3,
                      color: 'primary.main',
                      minHeight: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {group.icon}
                  </Box>

                  {/* Title – fixed height */}
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      px: 2,
                      minHeight: 64,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {group.title}
                  </Typography>

                  {/* Chips area – fixed height so all cards match */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      minHeight: 200,                 // ← critical: minimum height for chip area
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.5,
                        justifyContent: 'center',
                        width: '100%',
                        minHeight: 160,               // ensures even short lists stretch
                      }}
                    >
                      {group.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          variant="outlined"
                          size="medium"
                          sx={{
                            fontWeight: 500,
                            borderColor: 'primary.main',
                            color: 'text.primary',
                            bgcolor: 'background.paper',
                          }}
                        />
                      ))}
                    </Box>
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