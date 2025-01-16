"use client";
import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {Typography} from "@mui/material";
export const TextParallaxContentExample = () => {
  const containerRef = useRef(null);

  const headings = [
    "Vision guides my drive to create.",
    "Resilience fuels my journey.",
    "Community builds bridges and inspires collective growth.",
    "Curiosity amplifies my growth and opens doors.",
  ];

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] overflow-hidden"
    >
      {/* Sticky video stays in the background */}
      <StickyVideo videoUrl="https://d3lh4iw97b9uun.cloudfront.net/xlab.mp4" />
      {/* Overlay text with precise offsets */}
      {headings.map((heading, index) => (
        <OverlayCopy
          key={index}
          heading={heading}
          index={index}
        />
      ))}
    </div>
  );
};

const StickyVideo = ({videoUrl}) => {
  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end start", "end end"], // Adjusted to start earlier
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "6rem"]);

  return (
    <motion.div
      ref={targetRef}
      className="fixed top-0 left-0 z-0 h-full w-full overflow-hidden"
      style={{
        scale,
        opacity,
        height: "100vh",
        borderRadius, // Apply dynamic border-radius
      }}
    >
      <video
        src={videoUrl}
        muted
        playsInline
        autoPlay
        loop
        className="h-full w-full object-cover"
      />
      <motion.div
        className="absolute inset-0 bg-neutral-950/20"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({heading, index}) => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref, // Each OverlayCopy has its own scroll tracking
    offset: ["start end", "end start"],
  });

  // Animate position and opacity
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.75], [0, 1, 0]);

  return (
    <div
      ref={ref}
      className="sticky top-0 left-0 h-[70vh] w-full overflow-hidden"
    >
      <motion.div
        style={{y, opacity}}
        className="flex h-full items-center justify-center text-white z-10 overflow-hidden"
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Changa One, sans-serif",
            fontSize: {xs: "2rem", sm: "3rem", md: "4rem", lg: "6rem"},
          }}
          className="text-center w-[80%] md:w-[60%] text-5xl font-bold md:text-8xl flex items-center justify-center overflow-hidden"
        >
          {heading}
        </Typography>
      </motion.div>
    </div>
  );
};

export default TextParallaxContentExample;
