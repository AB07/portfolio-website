// src/components/sections/Projects.tsx
import { Box, Typography, Grid, Card, CardContent, CardMedia, Chip, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

// Your project list (unchanged)
const projects = [
  {
    title: "Real Estate Listing Platform",
    description: "Property listing website with advanced search, filters (price, location, bedrooms, type), favorites list, agent dashboard for adding/editing listings with multiple images.",
    image: "https://images.unsplash.com/photo-1560518883-2e25c3a0d1c9?w=800&auto=format&fit=crop",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/yourusername/real-estate-platform",
    live: "https://real-estate-demo.vercel.app",
  },
  {
    title: "Simple Blog Platform with Admin Panel",
    description: "Public blog for reading posts + protected admin dashboard to create/edit/delete posts with rich text editor and image upload.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express", "MongoDB", "React-Quill", "JWT"],
    github: "https://github.com/yourusername/blog-platform",
    live: "https://blog-platform-demo.vercel.app",
  },
  {
    title: "E-Commerce Storefront & Cart",
    description: "Online store with product listing, search, categories, shopping cart, checkout flow (no payment gateway yet), and responsive design.",
    image: "https://images.unsplash.com/photo-1574063346896-b98f457ff00e?w=800&auto=format&fit=crop",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce-store",
    live: "https://ecommerce-store-demo.vercel.app",
  },
  {
    title: "Authentication & Persistence",
    description: "Beginner full-stack todo application with task creation, completion, deletion, and optional user authentication to save personal todos. No sign-up needed to see/use the demo.",
    image: "https://images.unsplash.com/photo-1484480974693-6e9b9e9a7c0e?w=800&auto=format&fit=crop",
    tech: ["React", "TypeScript", "Next.js", "Supabase", "Vercel"],
    github: "https://github.com/yourusername/todo-app-with-auth",
    live: "https://todo-app-with-auth.vercel.app/",
  },
  {
    title: "Recipe Finder & Meal Planner",
    description: "Full-stack app to search recipes by ingredients, save favorites, and generate weekly meal plans. No sign up for basic search.",
    image: "https://images.unsplash.com/photo-1556911220-b0b27f6e2e7d?w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express", "MongoDB", "Edamam API"],
    github: "https://github.com/yourusername/recipe-finder",
    live: "https://recipe-finder-demo.vercel.app",
  },
  {
    title: "Mobile Weather & News App",
    description: "React Native mobile app showing real-time weather + top news headlines. No sign up required — just open and use (public demo on Expo).",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    tech: ["React Native", "Expo", "TypeScript", "OpenWeather API", "News API"],
    github: "https://github.com/yourusername/mobile-weather-news",
    live: "https://expo.dev/@yourusername/mobile-weather-news",
  },
];

export default function Projects() {
  return (
    <Box
      component="section"
      id="projects"
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
          My Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // triggers every time (up/down scroll)
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1, // slight stagger for nice cascade effect
                  ease: 'easeOut' 
                }}
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
                  {/* Project Image */}
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />

                  {/* Content */}
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography variant="h5" gutterBottom fontWeight={700}>
                      {project.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" paragraph sx={{ minHeight: 80 }}>
                      {project.description}
                    </Typography>

                    {/* Tech badges */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.tech.map((tech) => (
                        <Chip key={tech} label={tech} size="small" variant="outlined" />
                      ))}
                    </Box>

                    {/* GitHub & Live buttons */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                      >
                        GitHub
                      </Button>

                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                      >
                        Live Demo
                      </Button>
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