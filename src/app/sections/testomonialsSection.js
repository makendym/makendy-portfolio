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
          willChange: "transform, opacity", // Performance hint for browsers
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
              // Apply transform for better performance (uses GPU)
              transform: "translateZ(0)",
            }}
          />
          <motion.div
            ref={cardRef}
            initial={{x: 100, opacity: 0}}
            animate={isInView ? {x: 0, opacity: 1} : {x: 100, opacity: 0}}
            transition={{duration: 0.9, ease: "easeOut"}}
            style={{
              width: "100%",
              willChange: "transform, opacity", // Performance hint
            }}
          >
            <Box
              component="section"
              sx={{
                color: "#FFFFFF",
                padding: {xs: "60px 20px", md: "100px 80px"},
                width: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TestimonialsCard testimonials={testimonialData} />
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default TestimonialsSection;

const TestimonialsCard = ({testimonials}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const swipeThreshold = 50;

  // Cache testimonial dimensions to prevent layout shifts
  const [contentHeight, setContentHeight] = useState({
    testimonial: 0,
    collaboration: 0,
    author: 0,
  });

  // Ref to measure content
  const testimonialRef = useRef(null);
  const collaborationRef = useRef(null);
  const authorRef = useRef(null);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isDragging && !isAnimating) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length, isDragging, isAnimating]);

  // Pre-calculate maximum heights for each section to prevent CLS
  useEffect(() => {
    // Function to calculate heights of all testimonials to find maximum
    const calculateMaxHeights = () => {
      // Create temporary elements to measure text heights
      const tempDiv = document.createElement("div");
      tempDiv.style.position = "absolute";
      tempDiv.style.visibility = "hidden";
      tempDiv.style.width = testimonialRef.current?.offsetWidth + "px";

      // Set the same styling as the real elements
      tempDiv.style.fontSize = window.innerWidth < 900 ? "18px" : "24px";
      tempDiv.style.fontWeight = "500";
      tempDiv.style.padding = window.innerWidth < 900 ? "0 20px" : "0 40px";
      tempDiv.style.textAlign = "center";

      document.body.appendChild(tempDiv);

      let maxTestimonialHeight = 0;
      let maxCollabHeight = 0;
      let maxAuthorHeight = 0;

      testimonials.forEach((item) => {
        // Measure testimonial text height
        tempDiv.textContent = item.testimonial;
        const testimonialHeight = tempDiv.offsetHeight;
        maxTestimonialHeight = Math.max(
          maxTestimonialHeight,
          testimonialHeight
        );

        // Measure collaboration text height
        tempDiv.textContent = item.collaboration;
        tempDiv.style.fontSize = "16px";
        const collabHeight = tempDiv.offsetHeight;
        maxCollabHeight = Math.max(maxCollabHeight, collabHeight);

        // Measure author text height
        tempDiv.textContent = item.author;
        tempDiv.style.fontSize = "14px";
        tempDiv.style.fontStyle = "italic";
        const authorHeight = tempDiv.offsetHeight;
        maxAuthorHeight = Math.max(maxAuthorHeight, authorHeight);

        // Reset for next measurement
        tempDiv.style.fontSize = window.innerWidth < 900 ? "18px" : "24px";
        tempDiv.style.fontStyle = "normal";
      });

      document.body.removeChild(tempDiv);

      // Add some buffer space
      setContentHeight({
        testimonial: maxTestimonialHeight + 40, // Extra space for margin
        collaboration: maxCollabHeight + 10,
        author: maxAuthorHeight + 10,
      });
    };

    // Calculate on initial load and window resize
    calculateMaxHeights();

    const handleResize = () => {
      calculateMaxHeights();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [testimonials]);

  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    setCurrentIndex(index);
  };

  const nextTestimonial = () => {
    if (isAnimating) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Handle touch/mouse events for swiping
  const handleDragStart = (e) => {
    if (isAnimating) return;
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    setDragStart(clientX);
    setIsDragging(true);
  };

  const handleDragEnd = (e) => {
    if (!isDragging || isAnimating) return;
    const clientX = e.type.includes("mouse")
      ? e.clientX
      : e.changedTouches
      ? e.changedTouches[0].clientX
      : dragStart;
    const delta = dragStart - clientX;

    if (Math.abs(delta) > swipeThreshold) {
      if (delta > 0) {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
    }

    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging || isAnimating) return;
    e.preventDefault();
  };

  const currentTestimonial = testimonials[currentIndex];
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    setPage([currentIndex, currentIndex > page[0] ? 1 : -1]);
  }, [currentIndex, page]);

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <Box
      sx={{
        maxWidth: {xs: "100%", md: "700px"},
        width: "100%",
        margin: "0 auto",
        backgroundColor: "rgba(30, 30, 30, 0.7)",
        borderRadius: "34px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        padding: {xs: "40px 20px", md: "50px 40px"},
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      {/* Quote icon */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          height: "60px", // Fixed height for icon
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

      {/* Testimonial text with pre-calculated height */}
      <Box
        sx={{
          height: contentHeight.testimonial,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={testimonialRef}
      >
        <AnimatePresence
          initial={false}
          mode="wait"
        >
          <motion.div
            key={`testimonial-${currentIndex}`}
            initial={{opacity: 0, x: direction > 0 ? 100 : -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: direction < 0 ? 100 : -100}}
            transition={{duration: 0.4, ease: "easeInOut"}}
            onAnimationStart={handleAnimationStart}
            onAnimationComplete={handleAnimationComplete}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                fontSize: {xs: "18px", md: "24px"},
                fontWeight: "500",
                color: "#FFFFFF",
                textAlign: "center",
                padding: {xs: "0 20px", md: "0 40px"},
                // Use text-overflow for very long content
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: {
                  xs: Math.floor(contentHeight.testimonial / 24), // Approximate line count
                  md: Math.floor(contentHeight.testimonial / 30),
                },
                WebkitBoxOrient: "vertical",
              }}
            >
              {currentTestimonial.testimonial}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Collaboration with fixed height */}
      <Box
        sx={{
          height: contentHeight.collaboration,
          position: "relative",
          marginTop: "10px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={collaborationRef}
      >
        <AnimatePresence
          initial={false}
          mode="wait"
        >
          <motion.div
            key={`collab-${currentIndex}`}
            initial={{opacity: 0, x: direction > 0 ? 100 : -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: direction < 0 ? 100 : -100}}
            transition={{duration: 0.4, ease: "easeInOut", delay: 0.1}}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                fontSize: "16px",
                color: "#CCCCCC",
                fontWeight: "500",
              }}
            >
              {currentTestimonial.collaboration}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Author with fixed height */}
      <Box
        sx={{
          height: contentHeight.author,
          position: "relative",
          marginTop: "30px",
          marginBottom: "30px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={authorRef}
      >
        <AnimatePresence
          initial={false}
          mode="wait"
        >
          <motion.div
            key={`author-${currentIndex}`}
            initial={{opacity: 0, x: direction > 0 ? 100 : -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: direction < 0 ? 100 : -100}}
            transition={{duration: 0.4, ease: "easeInOut", delay: 0.2}}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                fontSize: "14px",
                color: "#AAAAAA",
                fontStyle: "italic",
              }}
            >
              — {currentTestimonial.author}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Navigation dots */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "20px",
          height: "8px", // Fixed height for indicators
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
                index === currentIndex ? "#FFFFFF" : "rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>

      {/* Arrow navigation buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          padding: "0 10px",
          pointerEvents: isAnimating ? "none" : "auto",
          // Fixed size to prevent layout shifts
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
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "50%",
            cursor: isAnimating ? "default" : "pointer",
            color: "white",
            fontSize: "20px",
            opacity: isAnimating ? 0.3 : 0.7,
            "&:hover": {opacity: isAnimating ? 0.3 : 1},
            transform: "translateZ(0)", // Hardware acceleration
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
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "50%",
            cursor: isAnimating ? "default" : "pointer",
            color: "white",
            fontSize: "20px",
            opacity: isAnimating ? 0.3 : 0.7,
            "&:hover": {opacity: isAnimating ? 0.3 : 1},
            transform: "translateZ(0)", // Hardware acceleration
          }}
        >
          →
        </Box>
      </Box>
    </Box>
  );
};
