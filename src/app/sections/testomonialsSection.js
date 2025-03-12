"use client";
import React, {useRef, useState, useEffect} from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import {Box} from "@mui/material";
import {quoteImage, testimonialXlab, pageGradientBackground} from "../assets";
import { testimonialData } from "../constants";
const TestomonialsSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {once: false, margin: "-20% 0px"});

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
      id="testimonial-section"
      style={{
        scale,
        opacity,
        borderRadius,
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
          }}
        />
        <motion.div
          ref={cardRef}
          initial={{x: 100, opacity: 0}} // Start off-screen to the right
          animate={isInView ? {x: 0, opacity: 1} : {x: 100, opacity: 0}} // Slide in
          transition={{duration: 0.9, ease: "easeOut"}}
          style={{width: "100%"}} // Ensures full width
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
  );
};

export default TestomonialsSection;

const TestimonialsCard = ({testimonials}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const swipeThreshold = 50; // Minimum distance to trigger a swipe

  // Auto-rotate testimonials
  useEffect(() => {
    // Only auto-rotate if not dragging or animating
    if (!isDragging && !isAnimating) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds

      return () => clearInterval(interval);
    }
  }, [testimonials.length, isDragging, isAnimating]);

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

    // Capture start position of touch or mouse
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    setDragStart(clientX);
    setIsDragging(true);
  };

  const handleDragEnd = (e) => {
    if (!isDragging || isAnimating) return;

    // Get end position
    const clientX = e.type.includes("mouse")
      ? e.clientX
      : e.changedTouches
      ? e.changedTouches[0].clientX
      : dragStart;
    const delta = dragStart - clientX;

    // Determine if swipe was significant enough
    if (Math.abs(delta) > swipeThreshold) {
      if (delta > 0) {
        // Swiped left, go to next
        nextTestimonial();
      } else {
        // Swiped right, go to previous
        prevTestimonial();
      }
    }

    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging || isAnimating) return;

    // Prevent default to avoid scrolling on touch devices
    e.preventDefault();
  };

  const currentTestimonial = testimonials[currentIndex];

  // Track swipe direction for proper animations
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    // Update page and direction when currentIndex changes
    setPage([currentIndex, currentIndex > page[0] ? 1 : -1]);
  }, [currentIndex, page]);

  // Animation handlers to prevent multiple animations
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
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        padding: {xs: "40px 20px", md: "50px 40px"},
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none", // Prevent text selection during swipe
      }}
      // Add event listeners for both touch and mouse events
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
        }}
      >
        <Box
          component="img"
          src={quoteImage.src}
          alt="Quote"
          sx={{
            height: "60px",
          }}
        />
      </Box>

      {/* Testimonial text */}
      <Box sx={{minHeight: "200px", position: "relative", overflow: "hidden"}}>
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
              position: "absolute",
              width: "100%",
            }}
          >
            <Box
              sx={{
                fontSize: {xs: "18px", md: "24px"},
                fontWeight: "500",
                color: "#FFFFFF",
                textAlign: "center",
                padding: {xs: "0 20px", md: "0 40px"},
              }}
            >
              {currentTestimonial.testimonial}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Collaboration */}
      <Box
        sx={{
          minHeight: "30px",
          position: "relative",
          marginTop: "10px",
          overflow: "hidden",
        }}
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
              position: "absolute",
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

      {/* Author */}
      <Box
        sx={{
          minHeight: "50px",
          position: "relative",
          marginTop: "30px",
          marginBottom: "30px",
          overflow: "hidden",
        }}
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
              position: "absolute",
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
          marginTop: "50px",
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
          pointerEvents: isAnimating ? "none" : "auto", // Disable during animation
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
          }}
        >
          →
        </Box>
      </Box>
    </Box>
  );
};