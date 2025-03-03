"use client";
import React from "react";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {motion, useInView, useTransform, useScroll} from "framer-motion";
import {useRef} from "react";
import {
  nyuBannerEducation,
  nyuLogo,
  stacTrackEducation,
  stacLogo,
  pageGradientBackground,
} from "../assets";

const EducationCard = ({
  imagePath,
  logo,
  schoolName,
  degree,
  title,
  description,
  graduationDate,
  reverse = false,
  imageStyle = {},
  isInView,
}) => {
  const cardRef = useRef(null);
  return (
    <motion.div
      ref={cardRef}
      initial={{y: 50, opacity: 0}}
      animate={isInView ? {y: 0, opacity: 1} : {y: 50, opacity: 0}}
      transition={{duration: 0.9, ease: "easeOut"}}
    >
      <Box
        sx={{
          maxWidth: "170vh",
          width: "100%",
          margin: "0 auto",
          borderRadius: "34px",
          overflow: "hidden",
          mb: 8,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
          },
          transition: "box-shadow 0.3s ease",
          display: "flex",
          flexDirection: {xs: "column", md: reverse ? "row-reverse" : "row"},
          height: {md: "600px"},
        }}
      >
        {/* Rest of the EducationCard component remains the same */}
        <Box
          sx={{
            position: "relative",
            width: {xs: "100%", md: "50%"},
            height: {xs: "400px", md: "100%"},
          }}
        >
          <Image
            src={imagePath}
            alt={`${schoolName} Campus`}
            quality={95}
            priority
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: imageStyle.objectFit || "cover",
              objectPosition: imageStyle.objectPosition || "center",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            p: 5,
            backgroundColor: "rgb(32, 32, 32)",
            width: {xs: "100%", md: "50%"},
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{x: reverse ? -100 : 100, opacity: 0}}
            animate={
              isInView
                ? {x: 0, opacity: 1}
                : {x: reverse ? -100 : 100, opacity: 0}
            }
            transition={{duration: 0.8, ease: "easeOut"}}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 2,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "32px",
                  height: "32px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={logo}
                  alt={`${schoolName} Logo`}
                  fill
                  sizes="32px"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {schoolName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {degree}
                </Typography>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial={{x: reverse ? -100 : 100, opacity: 0}}
            animate={
              isInView
                ? {x: 0, opacity: 1}
                : {x: reverse ? -100 : 100, opacity: 0}
            }
            transition={{duration: 0.8, ease: "easeOut"}}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
                mb: 3,
                mt: 2,
                fontSize: "2.5rem",
                fontWeight: 600,
                width: {xs: "80%", sm: "60%"},
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                mb: 4,
                lineHeight: 1.7,
                fontSize: "1rem",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.875rem",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Graduation Date: {graduationDate}
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

const EducationSection = () => {
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

  const educationData = [
    {
      imagePath: nyuBannerEducation.src,
      logo: nyuLogo.src,
      schoolName: "New York University",
      degree: "M.S in Computer Science",
      title: "Community-Driven Growth",
      description:
        "At NYU, Makendy deepened his technical expertise and entrepreneurial vision through the Master’s in Computer Science program. His studies were enriched by participation in the NYU Entrepreneurial Institute’s Startup Accelerator Program, where he refined his approach to innovation and business development. He applied his skills in an internship at a trucking logistics startup, co-designing platform features to solve real-world challenges. This period of academic and professional growth solidified his commitment to creating technology that enhances education.",
      graduationDate: "Dec 2024",
    },
    {
      imagePath: stacTrackEducation.src,
      logo: stacLogo.src,
      schoolName: "St. Thomas Aquinas College",
      degree: "B.S in Computer Science",
      title: "Lessons Beyond the Field",
      description:
        "Makendy’s time at STAC was transformative, combining athletic excellence with academic rigor. As part of a championship-winning track team, he learned how discipline and teamwork drive success. His research at XLAB on bias in virtual reality sharpened his analytical thinking, while induction into Chi Alpha Sigma and Sigma Zeta recognized his commitment to excellence. Representing the School of STEM at fundraising events and securing his first software engineering internship at Treehouse Strategy laid the foundation for his career at the intersection of technology and education.",
      graduationDate: "May 2022",
      imageStyle: {objectFit: "cover", objectPosition: "center"},
    },
  ];

  return (
    <Box
      component="section"
      id="education-section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
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
            // transform: "rotate(180deg)",
            // transformOrigin: "center",
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

        <Box
          // component="section"
          // id="education-section"
          sx={{
            color: "#FFFFFF",
            padding: {xs: "60px 20px", md: "100px 20px"},
            minHeight: "100vh",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{y: -50, opacity: 0}}
            animate={isInView ? {y: 0, opacity: 1} : {y: -50, opacity: 0}}
            transition={{duration: 0.9, ease: "easeOut"}}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: {xs: "48px", sm: "56px"},
                textAlign: "center",
                mb: 4,
              }}
            >
              Education
            </Typography>
          </motion.div>

          {educationData.map((education, index) => (
            <EducationCard
              key={education.schoolName}
              {...education}
              reverse={index % 2 === 1}
              isInView={isInView}
            />
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default EducationSection;
