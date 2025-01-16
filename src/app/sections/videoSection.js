"use client";
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const VideoSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !sectionRef.current) return;

    const vid = videoRef.current;
    const section = sectionRef.current;
    
    // Ensure video is initially paused
    vid.pause();

    const handleScroll = () => {
      // Calculate scroll progress
      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const sectionHeight = section.clientHeight;

      const distance = scrollPosition - sectionTop;
      const total = sectionHeight - viewportHeight;

      // Ensure percentage is between 0 and 1
      let percentage = Math.max(0, Math.min(distance / total, 1));

      // Only update video time if duration is available
      if (vid.duration) {
        vid.currentTime = vid.duration * percentage;
      }
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        height: "400vh",
        position: "relative",
        overflow: "visible",
        // marginTop: "0", // Ensure no gap with previous section
        // marginBottom: "0", // Ensure no gap with next section
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden", // Contain the video
        }}
      >
        <Box
          sx={{
            position: "relative", // Container for video
            width: "100%",
            height: "100%",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.3)",
              pointerEvents: "none",
            }
          }}
        >
          <video
            ref={videoRef}
            src="https://d3lh4iw97b9uun.cloudfront.net/xlab.mp4"
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          color: "white",
          pointerEvents: "none",
        }}
      >
        {[
          "Vision guides my drive to create.",
          "Resilience fuels my journey.",
          "Community builds bridges and inspires collective growth.",
          "Curiosity amplifies my growth and opens doors.",
        ].map((text, index) => (
          <Box
            key={index}
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
            <Box
              component="h3"
              sx={{
                fontSize: "2.5rem",
                fontWeight: 400,
                lineHeight: 1.25,
                fontFamily: "Changa One, sans-serif",
                maxWidth: "16ch",
                textWrap: "balance",
              }}
            >
              {text}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VideoSection;