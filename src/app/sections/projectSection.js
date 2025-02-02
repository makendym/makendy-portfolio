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
} from "../assets";

const projects = [
  {
    title: "Stack Overflow",
    description: "UR research bias through empathy",
    image: stackOverflow.src,
    size: "small",
    link: "/projects/stack-overflow",
  },
  {
    title: "The Virtual Mirror",
    description: "VR research bias through empathy",
    image: xlabProject.src,
    size: "large",
    link: "https://d3lh4iw97b9uun.cloudfront.net/xlab.mp4",
  },
  {
    title: "AP CompTutor",
    description: "AI-driven exam prep app",
    image: apComptutor.src,
    size: "medium",
    link: "/projects/ap-comptutor",
  },
  {
    title: "Fat Ear",
    description: "UR research bias through empathy",
    image: fatEar.src,
    size: "small",
    link: "/projects/fat-ear",
  },
  {
    title: "NYU Interview Prep",
    description: "Streamlined cleaning service bookings",
    image: nyuInterview.src,
    size: "medium",
    link: "/projects/nyu-interview",
  },
  {
    title: "Purple Glow",
    description: "Streamlined cleaning service bookings",
    image: purpleGlow.src,
    size: "medium",
    link: "/projects/purple-glow",
  },
];

const ProjectCard = ({title, description, image, size, link}) => {
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
                ? link // Replace with the actual path
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
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
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
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
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
            transform: "rotate(180deg)",
            transformOrigin: "center",
            opacity: 0.2,
          }}
        />
        <Box
          id="projects-section"
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
            {projects.slice(0, 5).map((project, index) => (
              <Box
                key={project.title}
                sx={{
                  gridColumn: {
                    xs: "span 1",
                    sm: project.size === "large" ? "span 2" : "span 1",
                  },
                  gridRow: project.size === "large" ? "span 2" : "span 1",
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
                  After working on a variety of projects, from VR experiences to
                  websites and complex applications, these were some of my
                  favorites.
                </Typography>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
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
  );
};

export default ProjectsSection;
