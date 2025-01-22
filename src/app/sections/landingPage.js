import React from "react";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {landingPageImage} from "../assets"; // Ensure you're importing the image path correctly
import {pageGradientBackground} from "../assets";
import Grid from "@mui/material/Grid2";


const LandingPage = () => {
  return (
    <Box
      id="landing-page"
      sx={{
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%", // Ensure the box occupies the full viewport width
        color: "#FFFFFF",
        padding: 0,
        textAlign: "center",
        position: "relative",
        overflow: "hidden", // Prevent scrollbars
        backgroundColor: "rgba(36, 36, 36, 100%)",

        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${pageGradientBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundAttachment: "fixed",
          opacity: 0.2,
          // zIndex: -1, // Ensure it's behind all content
        }}
      />
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
            height: "100vh", // Maintain proportional scaling
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
          style={{
            objectFit: "cover",
          }}
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
          left: {xs: "6%", sm: "27%"}, // Adjust left position for smaller screens
          top: {xs: "30%", sm: "30%", md: "30%", lg: "25%"},
          transform: "translateY(-50%)",
          textAlign: "left",
          width: {xs: "90%", sm: "100%"}, // Adjust width for responsiveness
          height: "auto", // Ensure no unnecessary height is added to the container
          overflow: "hidden", // Prevent scrolling by hiding overflow
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {xs: "3rem", sm: "5rem", md: "6rem", lg: "7rem"}, // Smaller font size on small screens
            lineHeight: {xs: "1.4", sm: "1.4", md: "1.4", lg: "1.5"}, // Ensure sufficient line height
            whiteSpace: "normal", // Allow text to wrap if necessary
            overflow: "visible", // Prevent text from overflowing
            textOverflow: "unset", // Add ellipsis if text overflows
          }}
        >
          Hey,
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: {xs: "75%", sm: "59%"}, // Adjust position for responsiveness
          top: {xs: "30%", sm: "30%", md: "30%", lg: "25%"}, // Adjust top position
          transform: "translateY(-50%)", // Center the text vertically
          textAlign: "left",
          width: {xs: "90%", sm: "100%"}, // Adjust width for responsiveness
          height: "auto", // Ensure no unnecessary height is added to the container
          overflow: "visible", // Ensure the text isn't clipped
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {xs: "3rem", sm: "5rem", md: "6rem", lg: "7rem"},
            lineHeight: {xs: "1.2", sm: "1.3", md: "1.4", lg: "1.5"},
            whiteSpace: "normal", // Allow text to wrap
            overflow: "visible", // Ensure no clipping
            textOverflow: "unset", // Disable text overflow clipping
          }}
        >
          there
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: {xs: "2%", sm: "3%"}, // Adjust left position for smaller screens
          top: {xs: "95%", sm: "90%", md: "90%", lg: "79%"},
          transform: "translateY(-50%)",
          textAlign: "left",
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
          top: {xs: "95%", sm: "90%", md: "90%", lg: "83%"},
          transform: "translateY(-50%)",
          textAlign: "left",
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

      <Box
        sx={{
          position: "absolute",
          left: {xs: "42%", sm: "75%", md: "75%", lg: "75%"}, // Adjust left position for responsiveness
          top: {xs: "95%", sm: "50%", md: "50%", lg: "50%"}, // Adjust top position for responsiveness
          transform: "translateY(-50%)",
          textAlign: "left",
          width: {xs: "35%", sm: "35%", md: "25%", lg: "25%"}, // Adjust width for responsiveness
        }}
      >
        <Typography
          variant="body1" // Use a single Typography for the paragraph
          sx={{
            fontFamily: "'Changa', sans-serif",
            fontSize: {xs: "14px", sm: "16px", md: "18px", lg: "20px"}, // Responsive font sizes
            lineHeight: {xs: "1.4", sm: "1.6", md: "1.8", lg: "2"}, // Adjust line height for readability
            whiteSpace: "normal", // Allow text wrapping
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: 100,
          }}
        >
          Driven by vision, resilience, and a commitment to community.
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
