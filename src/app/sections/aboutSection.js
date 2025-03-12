"use client";
import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import {pageGradientBackground, aboutMeImage} from "../assets";
import Image from "next/image";
import {motion, useInView, useTransform, useScroll} from "framer-motion";
import {useRef} from "react";
import SkillsSection from "./skillsSection";
import {skillsDataAbout, aboutText} from "../constants";
const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["34px", "0px"]);

  return (
    <Box
      id="about-section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Main scaling container */}
      <motion.div
        ref={sectionRef}
        style={{
          scale,
          opacity,
          borderRadius,
        }}
        sx={{
          position: "relative",
          minHeight: "100vh",
          zIndex: 1,
          overflowX: "clip",
        }}
      >
        {/* Gradient background that scales with the container */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${pageGradientBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: "rotate(180deg)",
            transformOrigin: "center",
            zIndex: 0,
          }}
        />

        {/* Dark overlay that scales with the container */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(36, 36, 36, 0.8)",
            zIndex: 1,
          }}
        />

        {/* Content section */}
        <section
          // id="about-section"
          style={{
            color: "#FFFFFF",
            padding: "100px 20px",
            minHeight: "100vh",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              overflowX: "clip",
            }}
          >
            <motion.div
              initial={{x: 100, opacity: 0}}
              animate={isInView ? {x: 0, opacity: 1} : {x: 100, opacity: 0}}
              transition={{duration: 0.9, ease: "easeOut", delay: 0.2}}
            >
              <Box sx={{marginBottom: 4}}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{fontSize: {xs: "62px", sm: "72px"}}}
                >
                  About
                </Typography>
              </Box>
            </motion.div>

            <ResponsiveCardWithCutout
              isInView={isInView}
              scrollYProgress={scrollYProgress}
            />
            <SkillsSection
              title="Skills"
              skillsData={skillsDataAbout}
            />
          </Box>
        </section>
      </motion.div>
    </Box>
  );
};

const ResponsiveCardWithCutout = ({isInView, scrollYProgress}) => {
  const isSmallScreen = useMediaQuery("(max-width: 1050px)");

  return isSmallScreen ? (
    // Small Screen Layout - keeping this unchanged
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column", // Align content vertically
        alignItems: "center",
        width: "100%",
        overflowX: "clip",
        marginTop: {xs: "50px", lg: "100px"}, // Adjust spacing for different screens
      }}
    >
      {/* Image Box (Positioned Above the Text Box) */}
      <Box
        sx={{
          position: "relative",
          width: {xs: "90%", sm: "80%", md: "60%"}, // Responsive width
          maxWidth: "900px",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{y: 100, opacity: 0}}
          animate={isInView ? {y: 0, opacity: 1} : {y: 100, opacity: 0}}
          transition={{duration: 0.9, delay: 0.8, ease: "easeIn"}}
          style={{
            width: "100%",
            position: "relative",
            zIndex: 2,
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
              borderRadius: "34px",
            }}
          />
        </motion.div>
      </Box>
      {/* Text Box (Stacked Below Image) */}

      {/* Text card below the image */}
      <motion.div
        initial={{y: 50, opacity: 0}}
        animate={isInView ? {y: 0, opacity: 1} : {y: 50, opacity: 0}}
        transition={{duration: 0.9, delay: 0.4, ease: "easeOut"}}
        style={{width: "100%"}}
      >
        <motion.div>
          <Box
            sx={{
              maxWidth: "110vh",
              width: "100%",
              margin: "0 auto",
              minHeight: "300px", // Reduced height
              backgroundColor: "rgba(36, 36, 36, 100%)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Changed from flex-end
              padding: "2rem",
              textAlign: "center",
              "&:hover": {
                boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
              },
              borderRadius: "34px",
            }}
          >
            <motion.div
              initial={{x: -50, opacity: 0}}
              animate={isInView ? {x: 0, opacity: 1} : {x: -50, opacity: 0}}
              transition={{duration: 0.9, delay: 0.6, ease: "easeOut"}}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  overflow: "hidden",
                }}
              >
                {aboutText}
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  ) : (
    // Large Screen Layout - With cutout positioned above container and text at 50% width
    <Box
      sx={{
        overflowX: "clip",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "100px", // Add space for the image above
      }}
    >
      {/* Image positioned above the container */}
      <Box
        sx={{
          position: "absolute",
          top: "-300px", // Position above container
          right: {xs: "-10%", sm: "-20%", md: "-12%", lg: "-5%", xl: "10%"}, // Responsive right positioning
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{y: 100, opacity: 0}}
          animate={isInView ? {y: 0, opacity: 1} : {y: 100, opacity: 0}}
          transition={{duration: 0.9, delay: 0.8, ease: "easeIn"}}
          style={{width: "100%", overflow: "hidden"}}
        >
          <Image
            src={aboutMeImage}
            alt="About Me Image"
            width={1000}
          />
        </motion.div>
      </Box>

      {/* Container with background */}
      <Box
        sx={{
          maxWidth: "170vh",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          backgroundColor: "rgba(36, 36, 36, 100%)",
          borderRadius: "34px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
          },
          display: "flex",
          minHeight: "400px",
        }}
      >
        {/* Text Box - Taking only 50% of container width */}
        <motion.div
          initial={{x: -50, opacity: 0}}
          animate={isInView ? {x: 0, opacity: 1} : {x: -50, opacity: 0}}
          transition={{duration: 0.9, delay: 0.6, ease: "easeOut"}}
          style={{
            width: "50%", // Fixed to 50% of container width
            padding: "5rem 6rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              lineHeight: "1.8",
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            {aboutText}
          </Typography>
        </motion.div>

        {/* Empty space taking the other 50% */}
        <Box sx={{width: "50%"}} />
      </Box>
    </Box>
  );
};

export default AboutSection;
