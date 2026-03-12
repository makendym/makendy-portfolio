"use client";
import React, {useRef, useState, useEffect} from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Link,
  ThemeProvider,
} from "@mui/material";
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  pageGradientBackground,
  leetntfy,
  taskcli,
  haitiCity,
} from "../assets";
import {projects as initialProjects} from "../constants";
import {getLatestRepos} from "../lib/githubService";
import theme from "../theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import {IconButton} from "@mui/material";

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
          {(title === "SmartFRQ" || title === "Java Lambda Runner") && video ? (
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "100%",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(video, "_blank");
              }}
            >
              <img
                src={image}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.7)",
                }}
              />

            </Box>
          ) : (
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
                filter: "brightness(0.65)",
                objectFit: "cover",
              }}
            />
          )}
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
              color: "white",
              p: 3,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "rgba(124, 158, 158, 0.9)",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.65rem",
                mb: 0.5,
                display: "block"
              }}
            >
              {initialProjects.find(p => p.title === title)?.projectType || "Featured Project"}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                // Remove whiteSpace: "nowrap" to prevent horizontal scrollbars/truncation issues
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                mb: 0.5
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.9,
                // Use line clamp to prevent vertical overflow/scrollbars
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: 1.4
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

const GitHubRepoCard = ({repo, index}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {once: true, margin: "-10% 0px"});

  const getRepoImage = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("leet-ntfy")) return leetntfy.src;
    if (lowerName.includes("task-tracker-cli")) return taskcli.src;
    if (lowerName.includes("haiticityportal")) return haitiCity.src;
    return pageGradientBackground.src;
  };

  const repoImage = getRepoImage(repo.name);

  return (
    <motion.div
      ref={cardRef}
      initial={{y: 20, opacity: 0}}
      animate={isInView ? {y: 0, opacity: 1} : {y: 20, opacity: 0}}
      transition={{duration: 0.5, delay: index * 0.1}}
      style={{height: "100%"}}
    >
      <Link
        href={repo.url}
        target="_blank"
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
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Background - using the specific project image if available */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${repoImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: repoImage === pageGradientBackground.src ? 0.3 : 0.7,
              filter: repoImage === pageGradientBackground.src ? "brightness(0.4) blur(2px)" : "brightness(0.55)",
              transition: "transform 0.5s ease",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
              }
            }}
          />

          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              color: "white",
              p: 3,
              zIndex: 2,
            }}
          >
            <Box sx={{ mb: 0.5 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(124, 158, 158, 0.8)",
                  fontWeight: "bold",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "0.65rem",
                }}
              >
                {repo.isFork ? "Open Source Contribution" : "Public Repository"}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  fontFamily: "Changa One, sans-serif",
                  mt: 0.5
                }}
              >
                {repo.name.replace(/-/g, " ")}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: 1.4
              }}
            >
              {repo.name.toLowerCase().includes("leet-ntfy") 
                ? "Active open-source tool serving users with real-time LeetCode status updates. GitHub-based notification system built with TypeScript and Node.js."
                : (repo.description || "Active development repository on GitHub.")}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [repos, setRepos] = useState([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {once: false, margin: "-20% 0px"});

  useEffect(() => {
    const fetchRepos = async () => {
      const data = await getLatestRepos();
      setRepos(data.slice(0, 3));
    };
    fetchRepos();
  }, []);

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["34px", "0px"]);

  return (
    <ThemeProvider theme={theme}>
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
                  gap: 3,
                  gridAutoRows: "minmax(280px, auto)",
                  padding: "20px",
                }}
              >
                {/* Featured projects */}
                {initialProjects.map((project, index) => (
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
                {/* Dynamic GitHub Repos */}
                {repos.map((repo, index) => (
                  <Box
                    key={repo.id}
                    sx={{
                      gridColumn: "span 1",
                      gridRow: "span 1",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.04)",
                      },
                    }}
                  >
                    <GitHubRepoCard repo={repo} index={index} />
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

                  <Box sx={{position: "relative", zIndex: 1}}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      In addition to the featured work above, explore my latest technical repositories and experiments directly from GitHub.
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
    </ThemeProvider>
  );
};

export default ProjectsSection;
