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
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.9, ease: "easeOut"}}
            style={{
              width: "90%",
              willChange: "opacity", // Performance hint
              position: "relative", // Added for positioning the arrows outside
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
  const containerRef = useRef(null);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isDragging && !isAnimating) {
      const interval = setInterval(() => {
        setPage([currentIndex, 1]);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length, isDragging, isAnimating, currentIndex]);

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

  // Update the handleDotClick function to include direction
  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    // Set direction based on which dot was clicked
    const direction = index > currentIndex ? 1 : -1;
    setPage([currentIndex, direction]);
    setCurrentIndex(index);
  };

  // Update nextTestimonial to explicitly set direction
  const nextTestimonial = () => {
    if (isAnimating) return;
    setPage([currentIndex, 1]); // 1 = right to left
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Update prevTestimonial to explicitly set direction
  const prevTestimonial = () => {
    if (isAnimating) return;
    setPage([currentIndex, -1]); // -1 = left to right
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
  
  // Update handleDragEnd to use the correct direction
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
        setPage([currentIndex, 1]); // Swipe left means content comes from right
        nextTestimonial();
      } else {
        setPage([currentIndex, -1]); // Swipe right means content comes from left
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

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  // Define animation variants for slide transitions
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Container for the entire testimonial card
  return (
    <Box
      ref={containerRef}
      sx={{
        maxWidth: {xs: "100%", md: "700px"},
        width: "100%",
        margin: "0 auto",
        position: "relative",
        overflow: "visible", // Changed to allow arrows to be shown outside
      }}
    >
      {/* Arrow navigation buttons - MOVED OUTSIDE THE CARD */}
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
          pointerEvents: isAnimating ? "none" : "auto",
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
            cursor: isAnimating ? "default" : "pointer",
            color: "white",
            fontSize: "20px",
            opacity: isAnimating ? 0.3 : 0.7,
            "&:hover": {opacity: isAnimating ? 0.3 : 1},
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
            cursor: isAnimating ? "default" : "pointer",
            color: "white",
            fontSize: "20px",
            opacity: isAnimating ? 0.3 : 0.7,
            "&:hover": {opacity: isAnimating ? 0.3 : 1},
            transition: "opacity 0.2s ease",
          }}
        >
          →
        </Box>
      </Box>

      {/* Main Card Container */}
      <Box
        sx={{
          // backgroundColor: "rgba(30, 30, 30, 0.7)",
          overflow: "hidden",
          position: "relative",
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
            height: "auto", // Fixed height for icon
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

        {/* Testimonial text with sliding animation */}
        <Box
          sx={{
            height: contentHeight.testimonial,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            height: "auto",
            justifyContent: "center",
            padding: "50px 0",
          }}
          ref={testimonialRef}
        >
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="wait"
          >
            <motion.div
              key={`testimonial-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
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
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: {
                    xs: Math.floor(contentHeight.testimonial / 24),
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

        {/* Collaboration with sliding animation */}
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
            custom={direction}
            mode="wait"
          >
            <motion.div
              key={`collab-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  fontSize: "16px",
                  color: "#CCCCCC",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {currentTestimonial.collaboration}
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Author with sliding animation */}
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
            textAlign: "center",
          }}
          ref={authorRef}
        >
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="wait"
          >
            <motion.div
              key={`author-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
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
                  textAlign: "center",
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
      </Box>
    </Box>
  );
};