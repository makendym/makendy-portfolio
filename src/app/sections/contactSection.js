"use client";
import React, {useRef} from "react";
import Image from "next/image";
import {motion, useInView, useTransform, useScroll} from "framer-motion";
import {Box} from "@mui/material";
import {pageGradientBackground} from "../assets";
import ContactForm from "../components/contactForm";

const ContactSection = () => {
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
        <motion.div
          ref={cardRef}
          initial={{x: 100, opacity: 0}} // Start off-screen to the right
          animate={isInView ? {x: 0, opacity: 1} : {x: 100, opacity: 0}} // Slide in
          transition={{duration: 0.9, ease: "easeOut"}}
          style={{width: "100%"}} // Ensures full width
        >
          <Box
            component="section"
            id="contact-section"
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
            <ContactForm isInView={true} />
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default ContactSection;
