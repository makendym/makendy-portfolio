"use client";
import React, {useRef, useEffect} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {Typography, Box} from "@mui/material";
import {styled} from "@mui/material/styles";

const Container = styled("div")({
  position: "relative",
  height: "400vh",
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
  height: "100vh",
  width: "100%",
  overflow: "hidden",
});

export const TextParallaxContentExample = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

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
                xs: "4rem",
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
