"use client";
import React, {useRef} from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {pageGradientBackground} from "../assets";

const projects = [
  {
    title: "Stack Overflow",
    description: "UR research bias through empathy",
    image: "/path-to-stack-overflow-image.jpg",
    size: "small",
  },
  {
    title: "The Virtual Mirror",
    description: "VR research bias through empathy",
    image: "/path-to-virtual-mirror-image.jpg",
    size: "large",
  },
  {
    title: "AP CompTutor",
    description: "AI-driven exam prep app",
    image: "/path-to-ap-comptutor-image.jpg",
    size: "medium",
  },
  {
    title: "Fat Ear",
    description: "UR research bias through empathy",
    image: "/path-to-fat-ear-image.jpg",
    size: "small",
  },
  {
    title: "NYU Interview Prep",
    description: "Streamlined cleaning service bookings",
    image: "/path-to-nyu-prep-image.jpg",
    size: "medium",
  },
  {
    title: "Purple Glow",
    description: "Streamlined cleaning service bookings",
    image: "/path-to-purple-glow-image.jpg",
    size: "medium",
  },
];

const ProjectCard = ({title, description, image, size}) => {
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
      <Card
        sx={{
          height: "100%",
          position: "relative",
          borderRadius: "24px",
          overflow: "hidden",
          bgcolor: "rgba(36, 36, 36, 1)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: "100%",
            filter: "brightness(0.7)",
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            // background:
            //   "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
            color: "white",
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{fontWeight: "bold"}}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{opacity: 0.8}}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
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
      sx={{
        position: "relative",
        minHeight: "100vh",
        zIndex: 1,
        overflowX: "clip",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgb(36, 36, 36)",
          position: "relative",
          minHeight: "100vh",
          zIndex: 1,
          overflowX: "clip",
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
            opacity: 0.2,
            transform: "rotate(180deg)",
            transformOrigin: "center",
          }}
        />
        <Box
          id="projects-section"
          sx={{
            bgcolor: "#1a1a1a",
            py: 8,
            px: {xs: 2, md: 4},
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              maxWidth: "1400px",
              mx: "auto",
            }}
          >
            <Box sx={{mb: 6}}>
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
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  textAlign: "left",
                  mb: 2,
                  maxWidth: "600px",
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
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Explore All
              </Button>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 3,
                gridAutoRows: "280px",
              }}
            >
              {projects.map((project, index) => (
                <Box
                  key={project.title}
                  sx={{
                    gridColumn: {
                      xs: "span 1",
                      sm: project.size === "large" ? "span 2" : "span 1",
                    },
                    gridRow: project.size === "large" ? "span 2" : "span 1",
                  }}
                >
                  <ProjectCard {...project} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProjectsSection;
