'use client';
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContactModal from './contactModal';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // Add this line to track if the component has mounted
  const [isMounted, setIsMounted] = useState(false);
  
  // Add this useEffect to handle the mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const NAV_LINKS = [
    { title: "About", id: "about-section" },
    { title: "Education", id: "education-section" },
    { title: "Work", id: "work-section" },
    { title: "Projects", id: "projects-section" },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactSubmit = (data) => {
    console.log("Contact form submitted:", data);
    // Handle form submission here
  };

  const handleOpenContactModal = () => {
    setContactModalOpen(true);
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  const drawerContent = (
    <Box
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
      sx={{ width: 250, zIndex: 20000 }}
    >
      <List>
        {NAV_LINKS.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton onClick={() => handleScrollToSection(link.id)}>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleOpenContactModal}>
            <ListItemText primary="Let's Chat" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "none",
          boxShadow: "none",
          px: 2,
          top: 0,
          zIndex: 20000,
          visibility: isMounted ? 'visible' : 'hidden'
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              marginTop: 5,
              justifyContent: 'space-between',
              zIndex: 1,
            }}
          >
            {/* Makendy on the left */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "inherit",
                  fontFamily: "Changa One, sans-serif",
                  fontSize: { xs: "30px", sm: "35px", md: "40px" },
                  fontStyle: "italic",
                }}
              >
                Makendy.
              </Typography>
            </Box>

            {/* Navigation in the center, only visible on desktop */}
            {isMounted && !isMobile && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "rgba(12, 11, 10, 0.2)",
                  marginX: "auto",
                  padding: 1,
                  borderRadius: 34,
                  maxWidth: "80%",
                  overflow: "hidden",
                  zIndex: 1100,
                }}
              >
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.id}
                    color="inherit"
                    onClick={() => handleScrollToSection(link.id)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingX: 2,
                      border: "none",
                      outline: "none",
                      whiteSpace: "nowrap",
                      marginX: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "inherit",
                        fontFamily: "Changa, sans-serif",
                        fontWeight: 100,
                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        textTransform: "none",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Button>
                ))}
              </Box>
            )}

            {/* Hamburger Menu Icon for mobile */}
            {isMounted && isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ ml: "auto", zIndex: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* "Let's Chat" button on the right */}
            {isMounted && !isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 1.0)",
                  padding: 1,
                  borderRadius: 34,
                  maxWidth: "80%",
                }}
              >
                <Button
                  color="inherit"
                  onClick={handleOpenContactModal}
                  sx={{
                    textTransform: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#000000",
                      fontFamily: "Changa, sans-serif",
                      fontSize: { xs: "14px", sm: "16px", md: "18px" },
                      textTransform: "none",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Let&apos;s Chat
                  </Typography>
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        className="drawer"
        sx={{ zIndex: 20000 }}
      >
        {drawerContent}
      </Drawer>

      {/* Contact Modal */}
      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSubmit={handleContactSubmit}
      />
    </>
  );
};

export default Navbar;