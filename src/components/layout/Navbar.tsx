// src/components/layout/Navbar.tsx
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import ThemeToggle from '../common/ThemeToggle';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Drawer open/close state (only used on mobile)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navTextColor = theme.palette.mode === 'light'
    ? theme.palette.text.primary
    : theme.palette.text.primary;

  // Added 'Certificates' to the navigation links
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Certificates', href: '#certificates' }, // ← added here
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Handle drawer open/close
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: 72 },
            px: { xs: 2, md: 4 },
            justifyContent: 'space-between',
          }}
        >
          {/* Logo / Name */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              color: theme.palette.mode === 'light'
                ? theme.palette.primary.dark
                : theme.palette.primary.light,
              fontSize: { xs: '1.3rem', sm: '1.5rem' },
            }}
          >
            Abenezer
          </Typography>

          {/* Desktop nav links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: { sm: 3, md: 4 }, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  color="inherit"
                  href={link.href}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    color: navTextColor,
                    px: { md: 2 },
                    minWidth: 'auto',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      bgcolor:
                        theme.palette.mode === 'light'
                          ? 'rgba(25, 118, 210, 0.08)'
                          : 'rgba(255, 255, 255, 0.08)',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Right side: Theme toggle + mobile menu button */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
            <ThemeToggle />

            {isMobile && (
              <IconButton
                color="inherit"
                edge="end"
                size="large"
                onClick={toggleDrawer(true)}
                sx={{
                  ml: 1,
                  color: navTextColor,
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: 'background.paper',
            color: 'text.primary',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={toggleDrawer(false)} // close drawer when link is clicked
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  color: navTextColor,
                  '&:hover': {
                    bgcolor: theme.palette.primary.main + '22',
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}