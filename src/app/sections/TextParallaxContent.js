"use client";
import React, {useRef, useEffect, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {Typography, Box, IconButton} from "@mui/material";
import {styled} from "@mui/material/styles";

const Container = styled("div")({
  position: "relative",
  height: "300vh",
  overflow: "hidden",
});

const VideoContainer = styled(motion.div)({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 0,
  height: "100vh",
  width: "100%",
  overflow: "hidden",
});

const VideoOverlay = styled(motion.div)({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(23, 23, 23, 0.2)",
});

const TextContainer = styled("div")({
  position: "sticky",
  top: 0,
  left: 0,
  height: "70vh",
  width: "100%",
  overflow: "hidden",
});

const ControlButton = styled(motion(IconButton))({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 100,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});

export const TextParallaxContentExample = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInView, setIsInView] = useState(true);
  const [userPaused, setUserPaused] = useState(false);

  const headings = [
    "Transforming vision into reality.",
    "Building strength through resilience.",
    "Connecting communities for change.",
    "Together, we build tomorrow.",
  ];

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.9, 1],
    [1, 1, 0, 0]
  );

  // Toggle play/pause with user intent tracking
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setUserPaused(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setUserPaused(false);
      }
    }
  };

  // Monitor scroll position to determine if video is in view
  useEffect(() => {
    const unsubscribe = videoOpacity.onChange((value) => {
      const newIsInView = value > 0.1;
      setIsInView(newIsInView);
      
      // Auto-pause when scrolled out of view
      if (!newIsInView && videoRef.current && videoRef.current.playing) {
        videoRef.current.pause();
        if (isPlaying) setIsPlaying(false);
      } 
      // Auto-resume only if user hasn't manually paused
      else if (newIsInView && videoRef.current && !videoRef.current.playing && !userPaused) {
        videoRef.current.play()
          .then(() => {
            if (!isPlaying) setIsPlaying(true);
          })
          .catch(e => console.error("Could not play video:", e));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [videoOpacity, isPlaying, userPaused]);

  // Play/pause video based on visibility and playing state
  useEffect(() => {
    if (videoRef.current) {
      if (!isInView) {
        // Always pause when not in view
        videoRef.current.pause();
      } else if (isInView && isPlaying && !userPaused) {
        // Only play when in view AND not manually paused by user
        videoRef.current.play()
          .catch(e => console.error("Could not play video:", e));
      }
    }
  }, [isInView, isPlaying, userPaused]);

  // Handle visibility change (tab switching, window minimizing)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause();
        if (isPlaying) setIsPlaying(false);
      } else if (!document.hidden && videoRef.current && isInView && !userPaused) {
        videoRef.current.play()
          .then(() => {
            if (!isPlaying) setIsPlaying(true);
          })
          .catch(e => console.error("Could not play video:", e));
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isInView, isPlaying, userPaused]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
        videoRef.current.load();
      }
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <StickyVideo
        videoUrl="https://d3lh4iw97b9uun.cloudfront.net/xlab.mp4"
        videoRef={videoRef}
        opacity={videoOpacity}
      />
      {headings.map((heading, index) => (
        <OverlayCopy
          key={index}
          heading={heading}
          index={index}
        />
      ))}
      <ControlButton 
        onClick={togglePlayPause} 
        aria-label={isPlaying ? "Pause" : "Play"}
        style={{ opacity: videoOpacity }}
        whileHover={isInView ? { scale: 1.1 } : {}}
        disabled={!isInView}
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </ControlButton>
    </Container>
  );
};

const StickyVideo = ({videoUrl, videoRef, opacity}) => {
  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [1, 0], [1, 0.85]);
  const borderRadius = useTransform(scrollYProgress, [1, 0], [0, 96]);

  return (
    <VideoContainer
      ref={targetRef}
      style={{
        scale,
        opacity,
        borderRadius,
      }}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        playsInline
        autoPlay
        loop
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <VideoOverlay style={{opacity}} />
    </VideoContainer>
  );
};

const OverlayCopy = ({heading, index}) => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.75], [0, 1, 0]);

  return (
    <TextContainer ref={ref}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div style={{y, opacity}}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Changa One, sans-serif",
              fontSize: {
                xs: "3.5rem",
                sm: "4rem",
                md: "4rem",
                lg: "6rem",
              },
              textAlign: "center",
              fontWeight: "bold",
              color: "#FFFFFF",
              maxWidth: {
                xs: "100%",
                md: "60%",
              },
              margin: "0 auto",
            }}
          >
            {heading}
          </Typography>
        </motion.div>
      </Box>
    </TextContainer>
  );
};

export default TextParallaxContentExample;