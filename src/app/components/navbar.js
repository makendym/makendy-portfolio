"use client";

import React, {useState} from "react";
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
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const NAV_LINKS = [
    {title: "About", id: "about-section"},
    {title: "Education", id: "education-section"},
    {title: "Work", id: "work-section"},
    {title: "Projects", id: "projects-section"},
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

  const drawerContent = (
    <Box
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
      sx={{width: 250}}
    >
      <List>
        {NAV_LINKS.map((link) => (
          <ListItem
            key={link.title}
            disablePadding
          >
            <ListItemButton onClick={() => handleScrollToSection(link.id)}>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => console.log("Let's Chat clicked!")}>
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
          zIndex: 1, // Ensure it's above other content
          top: 0, // Stick the AppBar to the top
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            {/* Makendy on the left */}
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Typography
                variant="h4"
                sx={{
                  color: "inherit",
                  fontFamily: "Changa One, sans-serif",
                  fontSize: {xs: "30px", sm: "35px", md: "40px"}, // Responsive font sizes
                  fontStyle: "italic", // Italicized font
                }}
              >
                Makendy.
              </Typography>
            </Box>

            {/* Navigation in the center, only visible on desktop */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "rgba(12, 11, 10, 0.2)",
                  marginX: "auto", // Center the box horizontally
                  padding: 1, // Adds some padding for spacing inside the box
                  borderRadius: 34, // Adds a border radius to the box
                  maxWidth: "80%", // Allow more space for the content (adjust as needed)
                  overflow: "hidden", // Prevent overflow of the container
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
                      paddingX: 2, // Adjust padding to make text fit well
                      border: "none", // Removes the button border
                      outline: "none", // Removes the outline on focus
                      whiteSpace: "nowrap", // Prevents text from wrapping
                      marginX: 1, // Space between buttons
                    }}
                  >
                    <Typography
                      sx={{
                        color: "inherit",
                        fontFamily: "Changa, sans-serif",
                        fontWeight: 100,
                        fontSize: {xs: "14px", sm: "16px", md: "18px"}, // Responsive font sizes
                        textTransform: "none", // No text transformation
                        whiteSpace: "nowrap", // Prevents text from wrapping
                        overflow: "hidden", // Prevents horizontal overflow
                        textOverflow: "ellipsis", // If text overflows, it gets truncated with ellipsis
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Button>
                ))}
              </Box>
            )}

            {/* Hamburger Menu Icon for mobile */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ml: "auto"}} // Align the hamburger to the right
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* "Let's Chat" button on the right */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 1.0)",
                  padding: 1, // Adds some padding for spacing inside the box
                  borderRadius: 34, // Adds a border radius to the box
                  maxWidth: "80%", // Allow more space for the content (adjust as needed)
                }}
              >
                <Button
                  color="inherit"
                  onClick={() => console.log("Let's Chat clicked!")}
                  sx={{
                    textTransform: "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#000000", // Set the text color to black (or any color you prefer)
                      fontFamily: "Changa, sans-serif",
                      //   fontWeight: 100,
                      fontSize: {xs: "14px", sm: "16px", md: "18px"}, // Responsive font sizes
                      textTransform: "none", // No text transformation
                      whiteSpace: "nowrap", // Prevents text from wrapping
                      overflow: "hidden", // Prevents horizontal overflow
                      textOverflow: "ellipsis", // If text overflows, it gets truncated with ellipsis
                    }}
                  >
                    Let's Chat
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
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
