import React from "react";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {landingPageImage} from "../assets"; // Ensure you're importing the image path correctly

const LandingPage = () => {
  return (
    <Box
      id="landing-page"
      sx={{
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw", // Ensure the box occupies the full viewport width
        color: "#FFFFFF",
        padding: 0,
        textAlign: "center",
        position: "relative",
        overflow: "hidden", // Prevent scrollbars
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          "@media (max-width: 600px)": {
            width: "100%", // Slightly smaller for small screens
            height: "80%", // Maintain proportional scaling
          },
          "@media (max-width: 400px)": {
            width: "100%", // Larger for very small screens
            height: "90%",
          },
        }}
      >
        <Image
          src={landingPageImage}
          alt="Landing Page Portrait"
          fill
          style={{objectFit: "cover", borderRadius: "10px"}}
          priority
        />
        {/* Gradient Overlay */}
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

      <Box
        sx={{
          position: "absolute",
          left: {xs: "5%", sm: "25%"}, // Adjust left position for smaller screens
          top: {xs: "30%", sm: "30%", md: "20%", lg: "25%"},
          transform: "translateY(-50%)",
          textAlign: "left",
          zIndex: 1,
          width: "90%", // Prevent horizontal overflow
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {xs: "3rem", sm: "5rem", md: "6rem", lg: "7rem"},
            lineHeight: {xs: "1.2", sm: "1.3", md: "1.4", lg: "1.5"}, // Ensure sufficient line height
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Hey,
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: {xs: "75%", sm: "60%"}, // Adjust left position for smaller screens
          top: {xs: "30%", sm: "30%", md: "20%", lg: "25%"},
          transform: "translateY(-50%)",
          textAlign: "left",
          zIndex: 1,
          width: "90%", // Prevent horizontal overflow
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {xs: "3rem", sm: "5rem", md: "6rem", lg: "7rem"},
            lineHeight: "auto",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          there
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: {xs: "2%", sm: "3%"}, // Adjust left position for smaller screens
          top: {xs: "85%", sm: "90%", md: "90%", lg: "79%"},
          transform: "translateY(-50%)",
          textAlign: "left",
          zIndex: 1,
          width: "90%", // Prevent horizontal overflow
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Changa One, sans-serif",
            fontSize: {xs: "2rem", sm: "3rem", md: "4rem", lg: "6rem"},
            lineHeight: "auto",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          I AM
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Changa One, sans-serif",
            fontSize: {xs: "2rem", sm: "3rem", md: "4rem", lg: "6rem"},
            lineHeight: "auto",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          MAKENDY
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: {xs: "75%", sm: "75%"}, // Adjust left position for smaller screens
          top: {xs: "85%", sm: "90%", md: "90%", lg: "83%"},
          transform: "translateY(-50%)",
          textAlign: "left",
          zIndex: 1,
          width: "90%", // Prevent horizontal overflow
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Changa One, sans-serif",
            fontSize: {xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem"},
            lineHeight: "auto",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          SOFTWARE
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Changa One, sans-serif",
            fontSize: {xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem"},
            lineHeight: "auto",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          ENGINEER
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
