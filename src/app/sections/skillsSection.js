"use client";
import React, {useRef, useState} from "react";
import {Box, Typography, ThemeProvider, Tooltip} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import theme from "../theme";
import {skillToCompanyMap} from "../constants";

const SkillsSection = ({ title, isCenter, skillsData = {} }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  

  
  return (
    <ThemeProvider theme={theme}>
      <section
        ref={sectionRef}
        id="skills-section"
      >
        <Box sx={{ marginBottom: 2, paddingTop: 2, margin: "0 auto" }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "48px", sm: "56px" },
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "170vh",
            width: "100%",
            margin: "0 auto",
            minHeight: "30vh",
            backgroundColor: "rgba(36, 36, 36, 1)",
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
            borderRadius: "34px",
          }}
        >
          <Grid
            container
            spacing={1}
            sx={{ width: "100%" }}
          >
            {Object.entries(skillsData).map(
              ([category, skills], categoryIndex) => (
                <Grid
                  xs={12}
                  key={category}
                  sx={{ mt: categoryIndex === 0 ? 0 : 2 }}
                  style={{
                    height: "100%",
                    width: "100%",
                    paddingLeft: "1rem",
                  }}
                >
                  <Box>
                    <motion.div
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1,
                          color: "#fff",
                          fontSize: { xs: "1rem", sm: "1.1rem" },
                          textAlign: isCenter ? "center" : "left",
                          fontWeight: "bold",
                          width: "100%",
                          minHeight: "30px",
                          paddingBottom: "1rem",
                        }}
                      >
                        {category}
                      </Typography>
                    </motion.div>
                  </Box>

                  <Grid
                    container
                    spacing={1.5}
                    alignItems="flex-start"
                    sx={{ width: "100%", height: "auto" }}
                  >
                    {skills.map((skill, index) => {
                      const companies = skillToCompanyMap[skill] || ["Unknown"];
                      
                      return (
                        <Grid
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          key={skill}
                        >
                          <motion.div
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: categoryIndex * 0.1 + index * 0.1,
                              ease: "easeOut",
                            }}
                            style={{
                              padding: "2px",
                            }}
                          >
                            <Tooltip 
                              title={
                                <Box sx={{ maxWidth: 220 }}>
                                  <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.5, whiteSpace: "normal" }}>
                                    Used at:
                                  </Typography>
                                  {companies.map((company, idx) => (
                                    <Typography key={idx} variant="body2" sx={{ mb: 0.5, whiteSpace: "normal" }}>
                                      • {company}
                                    </Typography>
                                  ))}
                                </Box>
                              }
                              arrow 
                              placement="top"
                              enterTouchDelay={0}
                              leaveTouchDelay={2500}
                              componentsProps={{
                                tooltip: {
                                  sx: {
                                    overflow: "visible",
                                    maxHeight: "none",
                                    "& .MuiTooltip-arrow": {
                                      color: theme.palette.grey[800]
                                    },
                                    "& .MuiTypography-root": {
                                      overflow: "visible"
                                    }
                                  }
                                }
                              }}
                            >
                              <Box
                                sx={{
                                  background: hoveredSkill === skill ? "rgba(255, 255, 255, 0.1)" : "transparent",
                                  border: "1px solid #fff",
                                  borderRadius: "34px",
                                  padding: "0.5rem 1rem",
                                  color: "#fff",
                                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                                  minHeight: "40px",
                                  display: "flex",
                                  alignItems: "center",
                                  textAlign: "left",
                                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                  "&:hover": {
                                    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
                                    transform: "translateY(-2px)",
                                    background: "rgba(255, 255, 255, 0.1)",
                                  },
                                  transition: "all 0.3s ease",
                                  cursor: "pointer",
                                }}
                                onMouseEnter={() => setHoveredSkill(skill)}
                                onMouseLeave={() => setHoveredSkill(null)}
                              >
                                {skill}
                              </Box>
                            </Tooltip>
                          </motion.div>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </section>
    </ThemeProvider>
  );
};

export default SkillsSection;