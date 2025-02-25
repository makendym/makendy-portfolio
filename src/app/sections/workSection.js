"use client";
import React from "react";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {motion, useInView, useTransform, useScroll} from "framer-motion";
import {useRef} from "react";
import {pageGradientBackground} from "../assets";
import SkillsSection from "./skillsSection";
import {
  stacLogo,
  bam,
  roadcall,
  stac,
  treehouse,
  varsitytutors,
  purpleGlowIcon
} from "../assets";

// Work experience data remains the same
const workExperience = [
  {
    role: "Computer Science Adjunct Faculty",
    company: "St. Thomas Aquinas College",
    date: "Sep 2024 - Present",
    icon: stac,
  },
  {
    role: "Freelance Software Engineer",
    company: "Independent Contractor",
    date: "Jun 2023 - Jan 2024",
    icon: purpleGlowIcon,
  },
  {
    role: "Software Engineer Intern",
    company: "Roadcall.co",
    date: "Jun 2023 - Sep 2023",
    icon: roadcall,
  },
  {
    role: "Software Engineer Intern",
    company: "Treehouse Strategy and Communications",
    date: "May 2021 - Sep 2021",
    icon: treehouse,
  },
  {
    role: "Computer Science Tutor",
    company: "Varsity Tutor",
    date: "May 2020 - Sep 2023",
    icon: varsitytutors,
  },
  {
    role: "XLAB Researcher",
    company: "St. Thomas Aquinas College",
    date: "Sep 2019 - May 2022",
    icon: stac,
  },
];

const TimelineItem = ({role, company, date, icon, isInView, index, isLast}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        mb: {xs: 4, sm: 4},
      }}
    >
      <motion.div
        initial={{x: -50, opacity: 0}}
        animate={isInView ? {x: 0, opacity: 1} : {x: -50, opacity: 0}}
        transition={{duration: 0.5, delay: index * 0.1}}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
              }}
            >
              {icon?.src && (
                <Image
                  src={icon.src}
                  alt="Company Logo"
                  width={40} // Match Box size
                  height={40} // Match Box size
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%", // Ensures circular shape
                  }}
                  priority
                />
              )}
            </Box>
          </Box>

          <Box sx={{flex: 1, minWidth: 0, overflow: "hidden"}}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.1rem",
                fontWeight: "500",
                marginBottom: "0.25rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {role}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                opacity: 0.8,
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {company}
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Ensure horizontal centering
              height: "100%", // Ensure the box takes the full height
              overflow: "hidden", // Prevent scrollbars or content overflow
            }}
          >
            {/* Date Box */}
            <Box
              sx={{
                textAlign: "center", // Ensure text is centered horizontally
                paddingBottom: "5px", // Add space for the line below
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.7,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap", // Prevent wrapping of the text
                }}
              >
                {date}
              </Typography>
            </Box>

            {/* Line Box */}
            {!isLast && (
              <Box
                sx={{
                  width: "2px",
                  height: {xs: "60px", sm: "40px"},
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  marginTop: "2px",
                }}
              />
            )}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};
const WorkSection = () => {
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
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundImage: `url(${pageGradientBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
          component="section"
          id="work-section"
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
                mb: 6,
              }}
            >
              Work Experience
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "flex",
              flexDirection: {xs: "column", md: "row"},
              gap: 4,
              maxWidth: "1400px",
              margin: "0 auto",
              padding: {xs: "0", md: "0 2rem"},
              alignItems: "stretch", // This ensures children stretch to match heights
            }}
          >
            {/* Timeline Section */}
            <Box
              sx={{
                flex: "1.5",
                backgroundColor: "rgba(36, 36, 36, 1)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "34px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {workExperience.map((work, index) => (
                <TimelineItem
                  key={index}
                  {...work}
                  isInView={isInView}
                  index={index}
                  isLast={index === workExperience.length - 1}
                />
              ))}
            </Box>

            {/* Skills Section */}
            <Box
              sx={{
                flex: "1",
                backgroundColor: "rgba(36, 36, 36, 1)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "34px",
              }}
            >
              <SkillsSection
                sx={{
                  flex: "1",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                isCenter={true}
                skillsData={skillsData}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const skillsData = {
  "Related Skills": [
    "React",
    "GraphQL",
    "Express.js",
    "Node.js",
    "MongoDB",
    "Git",
    "GitHub",
    "C++",
    "Jira",
    "Redux",
    "Bit Bucket",
    "C#",
    "Rest API",
    "Agile Scrum",
    "JavaScript",
    "Python",
    "Java",
    "SQL",
    "MYSQL",
    "SFML",
    "Presentation",
    "Excel",
  ],
};

export default WorkSection;
