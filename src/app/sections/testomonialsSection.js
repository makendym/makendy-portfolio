"use client";
import React, {useRef, useState, useEffect} from "react";
import {
  motion,
  useInView,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import {Box, ThemeProvider} from "@mui/material";
import {quoteImage, testimonialXlab} from "../assets";
import {testimonialData} from "../constants";
import theme from "../theme";

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {once: false, margin: "-20% 0px"});

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Memoize transform values to reduce recalculations
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["34px", "0px"]);

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        ref={sectionRef}
        id="testimonial-section"
        style={{
          scale,
          opacity,
          borderRadius,
          willChange: "transform, opacity",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgb(36, 36, 36)",
            position: "relative",
            minHeight: "70vh",
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
              backgroundImage: `url(${testimonialXlab.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
              transform: "translateZ(0)",
            }}
          />
          <motion.div
            ref={cardRef}
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.9, ease: "easeOut"}}
            style={{
              width: "95%",
              willChange: "opacity",
              position: "relative",
            }}
          >
            <TestimonialsCard testimonials={testimonialData} />
          </motion.div>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default TestimonialsSection;

const TestimonialsCard = ({testimonials}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000); // Increased to 6 seconds for smoother experience

      return () => clearInterval(interval);
    }
  }, [testimonials.length, isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Simplified animation variants
  const slideVariants = {
    enter: {
      x: 300,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -300,
      opacity: 0,
    },
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        maxWidth: {xs: "100%", md: "900px"},
        width: "100%",
        margin: "0 auto",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Arrow navigation buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: "50%",
          left: {xs: "0px", md: "-70px"},
          right: {xs: "0px", md: "-70px"},
          transform: "translateY(-50%)",
          zIndex: 2,
          height: "40px",
        }}
      >
        <Box
          onClick={prevTestimonial}
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "50%",
            cursor: "pointer",
            color: "white",
            fontSize: "20px",
            opacity: 0.7,
            "&:hover": {opacity: 1},
            transition: "opacity 0.2s ease",
          }}
        >
          ←
        </Box>
        <Box
          onClick={nextTestimonial}
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "50%",
            cursor: "pointer",
            color: "white",
            fontSize: "20px",
            opacity: 0.7,
            "&:hover": {opacity: 1},
            transition: "opacity 0.2s ease",
          }}
        >
          →
        </Box>
      </Box>

      {/* Main Card Container */}
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          padding: {xs: "40px 20px", md: "50px 40px"},
          userSelect: "none",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Single AnimatePresence for all content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeInOut"
            }}
            style={{
              width: "100%",
            }}
          >
            {/* Quote icon */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <Box
                component="img"
                src={quoteImage.src}
                alt="Quote"
                sx={{
                  height: "60px",
                  width: "auto",
                }}
              />
            </Box>

            {/* Testimonial text */}
            <Box
              sx={{
                fontSize: {xs: "18px", md: "24px"},
                fontWeight: "500",
                color: "#FFFFFF",
                textAlign: "center",
                padding: {xs: "0 20px", md: "0 40px"},
                marginBottom: "30px",
                lineHeight: 1.6,
                minHeight: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {currentTestimonial.testimonial}
            </Box>

            {/* Collaboration */}
            <Box
              sx={{
                fontSize: "16px",
                color: "#CCCCCC",
                fontWeight: "500",
                textAlign: "center",
                marginBottom: "20px",
                minHeight: "24px",
              }}
            >
              {currentTestimonial.collaboration}
            </Box>

            {/* Author */}
            <Box
              sx={{
                fontSize: "14px",
                color: "#AAAAAA",
                fontStyle: "italic",
                textAlign: "center",
                minHeight: "20px",
              }}
            >
              — {currentTestimonial.author}
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Pause indicator */}
        {isPaused && (
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: "4px",
              padding: "4px 8px",
              color: "#FFFFFF",
              fontSize: "12px",
            }}
          >
            Paused
          </Box>
        )}

        {/* Navigation dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "30px",
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor:
                  index === currentIndex
                    ? "#FFFFFF"
                    : "rgba(255, 255, 255, 0.3)",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};