"use client";
import React, {useEffect, useState} from "react";
import {Box, Typography, ThemeProvider} from "@mui/material";
import Image from "next/image";
import {landingPageImage} from "../assets";
import {pageGradientBackground} from "../assets";
import {motion, useAnimation} from "framer-motion";
import theme from "../theme";

const LandingPage = () => {
  const controls = useAnimation();
  // Status configuration
  const [statusConfig, setStatusConfig] = useState({
    isAvailable: true,
    colorScheme: "green", // Can be "orange" or "green"
  });

  // Get status badge colors based on the selected scheme
  const getStatusColors = () => {
    if (statusConfig.colorScheme === "orange") {
      return {
        bg: "rgba(255, 173, 91, 0.1)",
        dot: "#FF8A00",
        glow: "rgba(255, 138, 0, 0.5)",
        text: "#FFFFFF"
      };
    } else {
      return {
        bg: "rgba(88, 195, 95, 0.1)",
        dot: "#58C35F",
        glow: "rgba(88, 195, 95, 0.5)",
        text: "#FFFFFF"
      };
    }
  };

  const statusColors = getStatusColors();

  const pulseVariant = {
    initial: {scale: 0.9, opacity: 0.7},
    animate: {
      scale: [0.9, 1.1, 0.9],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };
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
          initial={{opacity: 0.15}}
          animate={{opacity: 0.2}}
          transition={{duration: 1}}
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
          initial={{opacity: 0.8}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
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

        {/* Availability Status Badge */}
        {statusConfig.isAvailable && (
          <Box
            sx={{
              position: "absolute",
              left: {xs: "25%", sm: "3%"},
              top: { xs: "90%", sm: "50%" },
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                backgroundColor: statusColors.bg,
                borderRadius: "34px",
                padding: "8px 16px",
                backdropFilter: "blur(4px)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              {/* Radial dot with modified gradient effect */}
              <Box sx={{position: "relative", width: 15, height: 15, overflow: "hidden", borderRadius: "50%"}}>
                {/* Dot with gradient from dark center to lighter edges */}
                <Box
                  sx={{
                    width: 25,
                    height: 25,
                    borderRadius: "50%", // Ensures perfect circle
                    background: `radial-gradient(circle, ${statusColors.dot} 0%, ${statusColors.glow} 60%, rgba(255,255,255,0) 100%)`,
                    position: "absolute",
                    top: -4,
                    left: -4,
                    zIndex: 1,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: {xs: "0.75rem", sm: "0.875rem"},
                  color: statusColors.text,
                  fontWeight: 400,
                  overflow: "hidden",
                }}
              >
                Available for new opportunities
              </Typography>
            </Box>
          </Box>
        )}

        {/* Hey, there text - No animation delay for critical LCP elements */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)",
            width: {xs: "95%", sm: "60%", md: "55%", lg: "50%"},
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
              fontSize: {xs: "3rem", sm: "5rem", md: "6rem", lg: "7rem"},
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
              fontSize: {xs: "3rem", sm: "5rem", md: "6rem", lg: "7rem"},
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
            left: {xs: "2%", sm: "3%"},
            bottom: {xs: "13%", sm: "3%", md: "3%", lg: "3%"},
            // transform: "translateY(-50%)",
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
                fontSize: {xs: "1.5rem", sm: "3rem", md: "4rem", lg: "6rem"},
                whiteSpace: "nowrap",
                display: "block",
              }}
            >
              This is
            </Typography>
            <Typography
              variant="h2" // Using h2 to match your theme (Changa One)
              sx={{
                fontSize: {xs: "1.5rem", sm: "3rem", md: "4rem", lg: "6rem"},
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
            right: {xs: "2%", sm: "5%"},
            bottom: {xs: "13%", sm: "3%", md: "3%", lg: "3%"},
            // transform: "translateY(-50%)",
            textAlign: "right",
            width: "auto",
            minWidth: "max-content",
            overflow: "visible",
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
                flexDirection: {xs: "column", md: "column"},
                alignItems: {xs: "flex-end", md: "flex-end"},
                gap: {xs: 0, md: 1},
                height: "auto",
              }}
            >
              <Typography
                variant="h3" // Using h3 to match your theme (Changa)
                sx={{
                  fontSize: {xs: ".7rem", sm: "1rem", md: "1.5rem", lg: "2rem"},
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
                  fontSize: {xs: ".7rem", sm: "1rem", md: "1.5rem", lg: "2rem"},
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
                  fontSize: {xs: ".7rem", sm: "1rem", md: "1.5rem", lg: "2rem"},
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
            right: {xs: "30%", sm: "30%", md: "30%", lg: "0"},
            bottom: {xs: "13%", sm: "6%", md: "7%", lg: "40%"},
            // transform: "translateY(-50%)",
            textAlign: "center",
            width: {xs: "38%", sm: "30%"},
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
                fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "20px"},
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
