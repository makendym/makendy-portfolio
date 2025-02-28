"use client";
import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import {pageGradientBackground, aboutMeImage} from "../assets";
import Image from "next/image";
import {motion, useInView, useTransform, useScroll} from "framer-motion";
import {useRef} from "react";
import SkillsSection from "./skillsSection";

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
                  About me
                </Typography>
              </Box>
            </motion.div>

            <ResponsiveCardWithCutout
              isInView={isInView}
              scrollYProgress={scrollYProgress}
            />
            <SkillsSection
              title="Skills"
              skillsData={skillsData}
            />
          </Box>
        </section>
      </motion.div>
    </Box>
  );
};

const ResponsiveCardWithCutout = ({isInView, scrollYProgress}) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return isSmallScreen ? (
    // Small Screen Layout
    <Box
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "clip",
        borderRadius: "34px",
      }}
    >
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
              height: "70vh",
              backgroundColor: "rgba(36, 36, 36, 100%)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
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
                From surviving the 2010 Haiti earthquake to earning my
                Master&apos;s at NYU, resilience and community have driven my
                path. I channel these experiences into creating impactful
                solutions—whether building web apps, developing VR experiences,
                or mentoring future tech leaders. My journey has shaped me into
                a problem solver committed to continuous learning and paying
                forward the support that fueled my growth.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{y: 100, opacity: 0}}
        animate={isInView ? {y: -5, opacity: 1} : {y: 100, opacity: 0}}
        transition={{duration: 0.9, delay: 0.8, ease: "easeIn"}}
        style={{
          position: "absolute",
          width: "100%",
          top: "0rem",
          zIndex: 2,
        }}
      >
        <Image
          src={aboutMeImage}
          alt="About Me Image"
          width={900}
          height={900}
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>
    </Box>
  ) : (
    // Large Screen Layout
    <Box
      sx={{
        overflowX: "clip",
        borderRadius: "34px",

      }}
    >
      <motion.div>
        <Box
          sx={{
            maxWidth: "110vh",
            margin: "0 auto",
            padding: "2rem",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            minHeight: "auto",
            backgroundColor: "rgba(36, 36, 36, 100%)",
            zIndex: 0,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
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
            style={{flex: 1, maxWidth: "45%", paddingLeft: "3rem"}}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                textAlign: "left",
              }}
            >
              From surviving the 2010 Haiti earthquake to earning my
              Master&apos;s degree from New York University, my journey has been
              fueled by resilience, community, and a relentless drive to turn
              ideas into impactful solutions. Whether I&apos;m building web
              apps, creating immersive VR experiences, or mentoring future tech
              leaders, I channel my passion for continuous learning and
              collaboration into every project. My experiences have shaped me
              into a problem solver who is eager to pay forward the support
              I&apos;ve received along the way.
            </Typography>
          </motion.div>
        </Box>
      </motion.div>

      <motion.div
        initial={{y: 100, opacity: 0}}
        animate={isInView ? {y: 0, opacity: 1} : {y: 100, opacity: 0}}
        transition={{duration: 0.9, delay: 0.8, ease: "easeIn"}}
        style={{
          position: "absolute",
          top: "-6rem",
          left: "10%",
          width: "100%",
          height: "auto",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={aboutMeImage}
          alt="About Me Image"
          width={900}
          height={900}
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>
    </Box>
  );
};

export default AboutSection;

const skillsData = {
  "Programming Languages": [
    "Java",
    "JavaScript",
    "Python",
    "C#",
    "C++",
    "HTML",
    "CSS",
    "SQL",
  ],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Django",
    "Flask",
    "Bootstrap",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Git",
    "GitHub",
    "CI/CD Pipelines",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
  ],
  "Tools & Technologies": [
    "Hadoop",
    "Spark",
    "Unity",
    "Figma",
    "OpenAI API",
    "Virtual Reality",
    "Agile/Scrum",
  ],
};
