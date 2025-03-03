"use client";
import React, {useRef} from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; //+
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  pageGradientBackground,
  fatEar,
  purpleGlow,
  apComptutor,
  stackOverflow,
  xlabProject,
  nyuInterview,
  portfolioProject,
} from "../assets";

const projects = [
  {
    title: "The Virtual Mirror",
    description:
      "Bias-revealing VR journey that places students in immersive scenarios to expose hidden prejudices about weight, race, and gender. Designed to spark self-reflection and personal transformation.",
    image: xlabProject.src,
    size: "large",
    link: "https://github.com/makendym/-Finding-Discrimination-using-Virtual-Reality",
    video: "https://d3lh4iw97b9uun.cloudfront.net/xlab.mp4",
  },
  {
    title: "AP CompTutor",
    description:
      "AI-powered study buddy that creates custom practice questions to help sharpen coding skills and ace the AP CSA exam.",
    image: apComptutor.src,
    size: "medium",
    link: "https://github.com/makendym/APCompTutor",
  },
  {
    title: "Stack Overflow",
    description:
      "StackOverflow ecosystem explorer that transforms vast forum data into interactive visual narratives, answering key questions about the developer community's digital conversations.",
    image: stackOverflow.src,
    size: "small",
    link: "https://github.com/makendym/StackOverflow-BigData",
  },

  {
    title: "NYU Interview Prep",
    description:
      "Career matchmaker for NYU students, connecting those with shared professional interests and career paths.",
    image: nyuInterview.src,
    size: "medium",
    link: "https://github.com/makendym/NYU-Interview-Prep",
  },
  {
    title: "Purple Glow",
    description:
      "One-tap booking system that simplifies scheduling and payment for cleaning services, turning booking chaos into seamless user experience.",
    image: purpleGlow.src,
    size: "medium",
    link: "https://github.com/makendym/Cleaning-Service-app",
  },
  {
    title: "Fat Ear",
    description:
      "Dynamic music streaming platform that uses advanced SQL queries, offering seamless login, personalized playlists, and fast song search.",
    image: fatEar.src,
    size: "small",
    link: "https://github.com/makendym/FatEar",
  },
  {
    title: "Portfolio Design",
    description:
      "A clean, intuitive Figma design showcasing Makendy’s journey with easy navigation and key achievements.",
    image: portfolioProject.src,
    size: "small",
    link: "https://www.figma.com/design/FeKGi60NgShEUTddoupNSt/Portfolio-Page?node-id=0-1&t=iTMwYYVWYHnklRYx-1",
  },
];

const ProjectCard = ({title, description, image, size, link, video}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {once: true, margin: "-20% 0px"});

  return (
    <motion.div
      ref={cardRef}
      initial={{y: 20, opacity: 0}}
      animate={isInView ? {y: 0, opacity: 1} : {y: 20, opacity: 0}}
      transition={{duration: 0.5}}
      style={{height: "100%"}}
    >
      <Link
        href={link}
        sx={{
          textDecoration: "none",
          display: "block",
          height: "100%",
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        <Card
          sx={{
            height: "100%",
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            bgcolor: "rgba(36, 36, 36, 1)",
            cursor: "pointer",
          }}
        >
          <CardMedia
            component={title === "The Virtual Mirror" ? "video" : "img"}
            src={
              title === "The Virtual Mirror"
                ? video // Replace with the actual path
                : image
            }
            alt={title}
            autoPlay={title === "The Virtual Mirror"}
            loop={title === "The Virtual Mirror"}
            muted={title === "The Virtual Mirror" ? true : undefined}
            playsInline={title === "The Virtual Mirror"}
            sx={{
              height: "100%",
              filter: "brightness(0.7)",
              objectFit: "cover",
            }}
          />
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
              color: "white",
              p: 3,
              overflow: "hidden",
              // textOverflow: "ellipsis",
              // whiteSpace: "nowrap",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                overflow: "hidden",
                // textOverflow: "ellipsis",
                // whiteSpace: "nowrap",
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {once: false, margin: "-20% 0px"});

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["34px", "0px"]);

  return (
    <Box
      component="section"
      id="projects-section"
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
      >
        {/* Previous Box components remain the same until the grid */}
        <Box
          sx={{
            backgroundColor: "rgb(36, 36, 36,1)",
            position: "relative",
            minHeight: "100vh",
            zIndex: 1,
            overflowX: "clip",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${pageGradientBackground.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // transform: "rotate(180deg)",
              // transformOrigin: "center",
              opacity: 0.2,
            }}
          />
          <Box
            sx={{
              py: 8,
              px: {xs: 2, md: 4},
              minHeight: "100vh",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                textAlign: "center",
                mb: 3,
                fontSize: {xs: "2.5rem", md: "3.5rem"},
                fontWeight: "bold",
              }}
            >
              PROJECTS
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 2,
                gridAutoRows: "280px",
                overflow: "hidden",
                padding: "20px",
              }}
            >
              {/* First 5 projects */}
              {projects.slice(0, 7).map((project, index) => (
                <Box
                  key={project.title}
                  sx={{
                    gridColumn: {
                      xs: "span 1",
                      sm: project.size === "large" ? "span 2" : "span 1",
                      md: project.size === "large" ? "span 1" : "span 1",
                    },
                    gridRow: {
                      xs: project.size === "large" ? "span 1" : "span 1",
                      sm: project.size === "large" ? "span 2" : "span 1",
                      md: project.size === "large" ? "span 3" : "span 1",
                    },
                    overflow: "hidden",
                    borderRadius: "24px",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.04)",
                    },
                  }}
                >
                  <ProjectCard {...project} />
                </Box>
              ))}

              {/* Text and Button Container replacing the last project card */}
              <Box
                sx={{
                  gridColumn: "span 1",
                  gridRow: "span 1",
                  overflow: "hidden",
                  borderRadius: "24px",
                  bgcolor: "rgba(36, 36, 36, 1)",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                  position: "relative",
                }}
              >
                {/* Background gradient similar to project cards */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)",
                  }}
                />

                {/* Content */}
                <Box sx={{position: "relative", zIndex: 1}}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      mb: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    After working on a diverse range of projects, from VR
                    experiences to websites and complex applications, these are
                    some of Makendy’s favorites.
                  </Typography>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
                    href="https://github.com/makendym"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      borderRadius: "34px",
                      padding: "15px",
                      "&:hover": {
                        borderColor: "white",
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    Explore All
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ProjectsSection;
