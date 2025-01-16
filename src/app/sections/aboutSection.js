"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { pageGradientBackground, aboutMeImage } from "../assets";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "rgba(36, 36, 36, 100%)",
        zIndex: 10001,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Foreground background image with 20% opacity */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${pageGradientBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />
      <section
        id="about-section"
        style={{
          color: "#FFFFFF",
          padding: "100px 20px",
          minHeight: "100vh",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "32px", sm: "48px", md: "72px" },
              textAlign: "center", // Center the text
            }}
          >
            About Me
          </Typography>
        </Box>

        <ResponsiveCardWithCutout />
      </section>
    </Box>
  );
};

const ResponsiveCardWithCutout = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center the content horizontally
      }}
    >
      {/* Container Box */}
      <Box
        sx={{
          maxWidth: "110vh",
          width: "90%",
          margin: "0 auto",
          height: { xs: "60vh", sm: "70vh" }, // Adjust height for responsiveness
          backgroundColor: "rgba(36, 36, 36, 100%)",
          borderRadius: "34px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column", // Stack vertically
          justifyContent: "flex-end", // Align text at the bottom
          padding: "2rem",
          textAlign: "center", // Center the text inside the card
          "&:hover": {
            boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        {/* Text Content */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: { xs: "1.6", sm: "1.8" },
            overflow: "hidden",
          }}
        >
          From surviving the 2010 Haiti earthquake to earning my Master’s
          degree from New York University, my journey has been fueled by
          resilience, community, and a relentless drive to turn ideas into
          impactful solutions. Whether I’m building web apps, creating
          immersive VR experiences, or mentoring future tech leaders, I channel
          my passion for continuous learning and collaboration into every
          project. My experiences have shaped me into a problem solver who is
          eager to pay forward the support I’ve received along the way.
        </Typography>
      </Box>

      {/* Right Section for Cutout */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "0rem", sm: "-6rem" },
          right: { xs: "10%", sm: "15%" },
          width: { xs: "80%", sm: "50%" },
          height: "auto",
          overflow: "hidden",
        }}
      >
        <Image
          src={aboutMeImage}
          alt="About Me Image"
          width={900}
          height={900}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutSection;