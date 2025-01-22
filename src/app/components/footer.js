"use client";
import React from "react";
import {Box, Typography} from "@mui/material";
import {
  pageGradientBackground,
} from "../assets";
export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(36, 36, 36)",
        position: "relative",
        zIndex: 1,
        overflowX: "clip",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          
          backgroundImage: `url(${pageGradientBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          // transform: "rotate(180deg)",
          // transformOrigin: "center",
        }}
      />
      <footer style={{textAlign: "center", }}>
        <p>© 2025 My Website. All rights reserved.</p>
      </footer>
    </Box>
  );
}
