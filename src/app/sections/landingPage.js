"use client";
import React, { useEffect } from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { landingPageImage } from "../assets";
import { pageGradientBackground } from "../assets";
import { motion, useAnimation } from "framer-motion";
import theme from "../theme";

const LandingPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start animations immediately without delay
    controls.start("visible");
  }, [controls]);


  const fadeUpVariant = (delay = 0) => ({
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8, // Reduced animation duration
        delay: delay,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="home"
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
          color: "#FFFFFF",
          padding: 0,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgba(36, 36, 36, 100%)",
          zIndex: 1000,
        }}
      >
        {/* Background gradient - preload with higher initial opacity */}
        <Box
          component={motion.div}
          initial={{ opacity: 0.15 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${pageGradientBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Main image - higher initial opacity */}
        <Box
          component={motion.div}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            "@media (max-width: 600px)": {
              width: "100%",
              height: "100vh",
            },
            "@media (max-width: 400px)": {
              width: "100%",
              height: "90%",
            },
          }}
        >
          <Image
            src={landingPageImage}
            alt="Landing Page Portrait"
            fill
            style={{
              objectFit: "cover",
            }}
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "60%",
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 1) 100%);",
            }}
          />
        </Box>
        
        {/* Hey, there text - No animation delay for critical LCP elements */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95%", sm: "60%", md: "55%", lg: "50%" },
            maxWidth: "100vw",
            overflow: "visible",
            display: "flex",
            justifyContent: "space-between", // Pushes items to opposite ends
          }}
        >
          {/* Pre-render the "Hey" text without animation for initial LCP */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "5rem", md: "6rem", lg: "7rem" },
              whiteSpace: "nowrap",
              overflow: "visible",
              // Use the theme's typography for fonts instead of inline styles
            }}
          >
            Hey,
          </Typography>

          {/* Pre-render the "there" text without animation for initial LCP */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "5rem", md: "6rem", lg: "7rem" },
              whiteSpace: "nowrap",
              overflow: "visible",
              // Use the theme's typography for fonts instead of inline styles
            }}
          >
            there
          </Typography>
        </Box>        
        
        {/* Name section */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "2%", sm: "3%" },
            bottom: { xs: "10%", sm: 0, md: 0 },
            transform: "translateY(-50%)",
            textAlign: "left",
            width: "auto",
            minWidth: "max-content",
            overflow: "visible",
          }}
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeUpVariant(0.3)} // Reduced delay
          >
            <Typography
              variant="h2" // Using h2 to match your theme (Changa One)
              sx={{
                fontSize: { xs: "1.5rem", sm: "3rem", md: "4rem", lg: "6rem" },
                whiteSpace: "nowrap",
                display: "block",
              }}
            >
              This is
            </Typography>
            <Typography
              variant="h2" // Using h2 to match your theme (Changa One)
              sx={{
                fontSize: { xs: "1.5rem", sm: "3rem", md: "4rem", lg: "6rem" },
                whiteSpace: "nowrap",
                display: "block",
              }}
            >
              MAKENDY
            </Typography>
          </motion.div>
        </Box>
        
        {/* Title section - Updated with three titles */}
        <Box
          sx={{
            position: "absolute",
            right: { xs: "2%", sm: "5%" },
            bottom: { xs: "11%", sm: "3%", md: "3%", lg: "3%" },
            transform: "translateY(-50%)",
            textAlign: "right",
            width: "auto",
            minWidth: "max-content",
            overflow: "hidden",
          }}
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeUpVariant(0.4)} // Reduced delay
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "column" },
                alignItems: { xs: "flex-end", md: "flex-end" },
                gap: { xs: 0, md: 1 },
              }}
            >
              <Typography
                variant="h3" // Using h3 to match your theme (Changa)
                sx={{
                  fontSize: { xs: ".7rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
                  whiteSpace: "nowrap",
                  display: "block",
                  overflow: "hidden",
                }}
              >
                SOFTWARE ENGINEER
              </Typography>
              
              <Typography
                variant="h3" // Using h3 to match your theme (Changa)
                sx={{
                  fontSize: { xs: ".7rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
                  whiteSpace: "nowrap",
                  display: "block",
                  overflow: "hidden",
                }}
              >
                EDUCATOR
              </Typography>
              
              <Typography
                variant="h3" // Using h3 to match your theme (Changa)
                sx={{
                  fontSize: { xs: ".7rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
                  whiteSpace: "nowrap",
                  display: "block",
                  overflow: "hidden",
                }}
              >
                ENTREPRENEUR
              </Typography>
            </Box>
          </motion.div>
        </Box>
        
        {/* Tagline */}
        <Box
          sx={{
            position: "absolute",
            right: { xs: "30%", sm: "30%", md: "30%", lg: "0" },
            bottom: { xs: "10%", sm: "6%", md: "7%", lg: "40%" },
            transform: "translateY(-50%)",
            textAlign: "center",
            width: { xs: "38%", sm: "30%" },
            overflow: "hidden",
          }}
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeUpVariant(0.5)} // Reduced delay
          >
            <Typography
              variant="body1" // Using body1 to match your theme (Changa)
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "20px" },
                fontWeight: 100,
                overflowY: "hidden",
              }}
            >
              Engineering Educational Excellence Through Technology.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;