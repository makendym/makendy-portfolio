'use client';
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const VideoSection = () => {
  const [opacity, setOpacity] = useState(0);  // Start with an invisible overlay

  const sentences = [
    "Vision guides my drive to create.",
    "Resilience fuels my journey.",
    "Community builds bridges and inspires collective growth.",
    "Curiosity amplifies my growth and opens doors.",
  ];

  // Change opacity as you scroll down (based on the section's scroll position)
  useEffect(() => {
    const section = document.getElementById("video-section");

    const updateOpacity = () => {
      const rect = section.getBoundingClientRect();
      const top = rect.top;
      const sectionHeight = rect.height;

      // Calculate opacity based on how much of the section is visible (0 to 1)
      const newOpacity = Math.min(Math.max((top + sectionHeight - window.scrollY) / sectionHeight, 0), 1);
      setOpacity(newOpacity); // Opacity increases as you scroll down
    };

    window.addEventListener("scroll", updateOpacity);

    return () => {
      window.removeEventListener("scroll", updateOpacity);
    };
  }, []);

  return (
    <Box
      id="video-section"
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Ensure video is behind text
          opacity: 1, // Keep video opacity at full
        }}
      >
        <source
          src="https://d3lh4iw97b9uun.cloudfront.net/xlab.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay with Dynamic Opacity */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(36, 36, 36, 1)", // Dark overlay color
          opacity: opacity, // Apply dynamic opacity to the dark overlay
          transition: "opacity 0.6s ease-out", // Smooth opacity transition
          zIndex: 0, // Ensure overlay is above the video but below the text
        }}
      />

      {/* Text Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          zIndex: 1, // Ensure text is above the video and overlay
        }}
      >
        {sentences.map((sentence, index) => (
          <Typography
            key={index}
            variant="h4"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              opacity: opacity, // Apply dynamic opacity to text as well
              transition: "opacity 0.3s ease-in", // Smooth opacity transition
              marginBottom: 2,
            }}
          >
            {sentence}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default VideoSection;