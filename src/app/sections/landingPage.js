"use client";
import React, {useEffect} from "react";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {landingPageImage} from "../assets";
import {pageGradientBackground} from "../assets";
import {motion, useAnimation} from "framer-motion";

const LandingPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      controls.start("visible");
    }, 400);
  }, [controls]);

  const slideVariant = (direction, delay = 0) => ({
    hidden: {
      x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: delay,
      },
    },
  });

  const fadeUpVariant = (delay = 0) => ({
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.5,
        delay: delay,
      },
    },
  });

  return (
    <Box
      id="landing-page"
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
      {/* Background gradient */}
      <Box
        component={motion.div}
        initial={{opacity: 0}}
        animate={{opacity: 0.2}}
        transition={{duration: 2}}
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
      {/* Main image */}
      <Box
        component={motion.div}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
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
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "20%",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 80%)",
          }}
        />
      </Box>
      {/* Hey, there text */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          width: {xs: "95%", sm: "60%", md: "55%",lg:"50%"},
          maxWidth: "100vw",
          overflow: "visible",
          display: "flex",
          justifyContent: "space-between", // Pushes items to opposite ends
        }}
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={slideVariant("left", 0.5)}
          style={{overflow: "visible"}}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {xs: "3rem", sm: "5rem", md: "6rem", lg: "7rem"},
              whiteSpace: "nowrap",
              overflow: "visible",
            }}
          >
            Hey,
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={slideVariant("right", 0.5)}
          style={{overflow: "visible"}}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {xs: "3rem", sm: "5rem", md: "6rem", lg: "7rem"},
              whiteSpace: "nowrap",
              overflow: "visible",
            }}
          >
            there
          </Typography>
        </motion.div>
      </Box>
      {/* Name section */}
      <Box
        sx={{
          position: "absolute",
          left: {xs: "2%", sm: "3%"},
          bottom: 0,
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
          variants={fadeUpVariant(1.2)}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Changa One, sans-serif",
              fontSize: {xs: "2rem", sm: "3rem", md: "4rem", lg: "6rem"},
              whiteSpace: "nowrap",
              display: "block",
            }}
          >
            I AM
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Changa One, sans-serif",
              fontSize: {xs: "2rem", sm: "3rem", md: "4rem", lg: "6rem"},
              whiteSpace: "nowrap",
              display: "block",
            }}
          >
            MAKENDY
          </Typography>
        </motion.div>
      </Box>
      {/* Title section */}
      <Box
        sx={{
          position: "absolute",
          left: {xs: "75%", sm: "75%"},
          bottom: {xs: "3%", sm: "3%", md: "3%", lg: "3%"},
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
          variants={fadeUpVariant(1.5)}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Changa One, sans-serif",
              fontSize: {xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem"},
              // lineHeight: 1.2,
              whiteSpace: "nowrap",
              display: "block",
            }}
          >
            SOFTWARE
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Changa One, sans-serif",
              fontSize: {xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem"},
              // lineHeight: 1.2,
              whiteSpace: "nowrap",
              display: "block",
            }}
          >
            ENGINEER
          </Typography>
        </motion.div>
      </Box>
      {/* Tagline */}
      <Box
        sx={{
          position: "absolute",
          right: {xs: "25%", sm: "30%", md: "30%", lg: "0"},
          bottom: {xs: "2%", sm: "3%", md: "3%", lg: "40%"},
          transform: "translateY(-50%)",
          textAlign: "left",
          width: {xs: "38%", sm: "30%"},
          overflow: "hidden",
        }}
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUpVariant(1.8)}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Changa', sans-serif",
              fontSize: {xs: "14px", sm: "16px", md: "18px", lg: "20px"},
              // lineHeight: {xs: "1.4", sm: "1.6", md: "1.8", lg: "2"},
              fontWeight: 100,
              overflowY: "hidden",
            }}
          >
            Coding with purpose, building with passion, creating for community.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default LandingPage;
