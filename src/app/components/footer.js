"use client";
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
       
      }}
    >
      <Box
        sx={{
          backgroundColor: "transparent !important",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <footer
        style={{
          textAlign: "center",
          backgroundColor: "transparent !important", // Force transparent background
          color: "#fff", // White text
          padding: "20px 0", // Padding for spacing
          fontFamily: "'Changa', sans-serif", // Use a clean, professional font
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "14px" }}>
          © 2025. Crafted with passion by{" "}
          <span style={{ fontStyle: "italic", color: "#7c9e9e" }}>Makendy Midouin</span>
        </Typography>

        {/* Social Media Text */}
        <Typography variant="body2" sx={{ fontSize: "12px", marginTop: "10px" }}>
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/makendy-midouin/"
            target="_blank"
            style={{
              color:"#7c9e9e",
              textDecoration: "none", 
              fontWeight: "bold"
            }}
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/makendym"
            target="_blank"
            style={{
              color:"#7c9e9e",
              textDecoration: "none", 
              fontWeight: "bold"
            }}
          >
            GitHub
          </a>
          .
        </Typography>

        {/* Social Media Icons */}
        <Box sx={{ marginTop: "15px" }}>
          {/* LinkedIn Icon */}
          <IconButton
            href="https://www.linkedin.com/in/makendy-midouin/"
            target="_blank"
            color="inherit"
            aria-label="LinkedIn"
            sx={{
              marginRight: "15px",
              "&:hover": { color: "#7c9e9e" }, // LinkedIn hover color
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>

          {/* GitHub Icon */}
          <IconButton
            href="https://github.com/makendym"
            target="_blank"
            color="inherit"
            aria-label="GitHub"
            sx={{
              marginLeft: "15px",
              "&:hover": { color: "#7c9e9e" }, // GitHub hover color
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
      </footer>
    </Box>
  );
}