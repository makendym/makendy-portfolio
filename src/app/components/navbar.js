"use client";
import React, {useState,useRef, useEffect} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContactModal from "./contactModal";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
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
    {
      id: "about-section",
      title: "About",
      icon: <PersonIcon fontSize="large" />,
    },
    {
      id: "education-section",
      title: "Education",
      icon: <SchoolIcon fontSize="large" />,
    },
    {id: "work-section", title: "Work", icon: <WorkIcon fontSize="large" />},
    {
      id: "projects-section",
      title: "Projects",
      icon: <CodeIcon fontSize="large" />,
    },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Update URL with the section hash
      window.history.pushState({}, "", `#${id}`);
      section.scrollIntoView({behavior: "smooth", block: "start"});
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


  // Inside your component
  const [startY, setStartY] = useState(null);
  const [currentY, setCurrentY] = useState(0);
  const drawerRef = useRef(null);
  
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };
  
  const handleMouseStart = (e) => {
    setStartY(e.clientY);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseEnd);
  };
  
  const handleTouchMove = (e) => {
    if (startY === null) return;
    const deltaY = e.touches[0].clientY - startY;
    if (deltaY > 0) { // Only allow dragging down
      setCurrentY(deltaY);
    }
  };
  
  const handleMouseMove = (e) => {
    if (startY === null) return;
    const deltaY = e.clientY - startY;
    if (deltaY > 0) { // Only allow dragging down
      setCurrentY(deltaY);
    }
  };
  
  const handleTouchEnd = () => {
    if (currentY > 50) { // Threshold to close the drawer
      setDrawerOpen(false);
    }
    setStartY(null);
    setCurrentY(0);
  };
  
  const handleMouseEnd = () => {
    if (currentY > 50) { // Threshold to close the drawer
      setDrawerOpen(false);
    }
    setStartY(null);
    setCurrentY(0);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseEnd);
  };
  
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseEnd);
    };
  }, []);
  
  const drawerContent = (
    
    <Box
      ref={drawerRef}
      role="presentation"
      sx={{
        width: "100%",
        zIndex: 20000,
        backgroundColor: "#121212",
        color: "white",
        padding: 2,
        paddingTop: 4,
        transform: currentY > 0 ? `translateY(${currentY}px)` : 'none',
        transition: currentY > 0 ? 'none' : 'transform 0.3s ease',
      }}
    >
      {/* Draggable notch at the top of the drawer */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 40,
          height: 5,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: 5,
          cursor: "grab",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseStart}
      />
  
      <Box 
        sx={{
          maxHeight: "100vh", 
          overflow: "hidden",
          marginTop: 2 // Add margin to push content below the notch
        }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks on content from closing the drawer
      >
        <List disablePadding>
          {NAV_LINKS.map((link) => (
            <ListItem
              key={link.title}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  handleScrollToSection(link.id);
                  setDrawerOpen(false);
                }}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  py: 1.5,
                }}
              >
                <ListItemIcon sx={{color: "white", width: "10px"}}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText
                  primary={link.title}
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: "Changa, sans-serif",
                      fontSize: "1.5rem",
                      overflow: "hidden",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
  
      <Divider sx={{backgroundColor: "rgba(255, 255, 255, 0.2)", my: 2}} />
  
      {/* Chat button and social icons row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          px: 1,
        }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the drawer
      >
        {/* Let's Chat button on the left */}
        <Button
          color="primary"
          variant="contained"
          onClick={(e) => {
            e.stopPropagation(); // Prevent drawer from closing
            handleOpenContactModal();
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: 2,
            whiteSpace: "nowrap",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Changa, sans-serif",
              fontSize: {xs: "1rem", sm: "16px", md: "18px"},
              textTransform: "none",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Let&apos;s Chat
          </Typography>
        </Button>
  
        {/* Social icons on the right */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton
            sx={{color: "white"}}
            onClick={(e) => {
              e.stopPropagation(); // Prevent drawer from closing
              window.open("YOUR_LINKEDIN_URL", "_blank");
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{color: "white"}}
            onClick={(e) => {
              e.stopPropagation(); // Prevent drawer from closing
              window.open("YOUR_GITHUB_URL", "_blank");
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
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
          zIndex: drawerOpen ? 1 : 20000, // Lower z-index when drawer is open to prevent overlap
          visibility: isMounted ? "visible" : "hidden",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              marginTop: 5,
              justifyContent: "space-between",
              zIndex: 1,
            }}
          >
            {/* Makendy on the left */}
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Button
                color="inherit"
                onClick={() => handleScrollToSection("landing-page")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  outline: "none",
                  whiteSpace: "nowrap",
                  padding: 0,
                  minWidth: 0,
                  "&:hover": {
                    backgroundColor: "transparent", // No hover background
                  },
                }}
                disableRipple
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "inherit",
                    fontFamily: "Changa One, sans-serif",
                    fontSize: {xs: "30px", sm: "35px", md: "40px"},
                    fontStyle: "italic",
                    position: "relative", // Ensure title stays above drawer
                    zIndex: 20001, // Higher than drawer to prevent being cut off
                  }}
                >
                  Makendy.
                </Typography>
              </Button>
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
                    disableRipple
                  >
                    <Typography
                      sx={{
                        color: "inherit",
                        fontFamily: "Changa, sans-serif",
                        fontWeight: 100,
                        fontSize: {xs: "14px", sm: "16px", md: "18px"},
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
                sx={{
                  ml: "auto",
                  zIndex: 20001, // Higher than drawer to prevent being cut off
                  position: "relative", // Ensure menu icon stays above drawer
                }}
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
                      fontSize: {xs: "14px", sm: "16px", md: "18px"},
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

      {/* Mobile Drawer - Bottom with notch and 70% height */}
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        className="drawer"
        sx={{
          zIndex: 20000,
          "& .MuiDrawer-paper": {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: "80%", // Exactly 70% of viewport height
            backgroundColor: "#121212", // Dark theme
            overflow: "hidden", // Ensure content doesn't overflow rounded corners
          },
        }}
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
