"use client";
import React, {useRef} from "react";
import Image from "next/image";
import {motion, useInView, useTransform, useScroll} from "framer-motion";
import {Box, Typography, TextField, Button} from "@mui/material";
import {pageGradientBackground} from "../assets";

const ContactForm = ({isInView}) => {
  const [formData, setFormData] = React.useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Common TextField styles
  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderRadius: "12px",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.1)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.2)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(255, 255, 255, 0.3)",
      },
    },
    "& .MuiInputBase-input": {
      color: "white",
      padding: "16px",
      "&::placeholder": {
        textAlign: "left",
        paddingLeft: "0",
      },
    },
    "& .MuiInputBase-root": {
      overflow: "hidden", // Prevents scrollbar
    },
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: "600px",
          padding: {xs: "2rem", sm: "3rem"},
          borderRadius: "24px",
          backgroundColor: "rgba(36, 36, 36, 1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {xs: "2rem", sm: "2.5rem"},
            textAlign: "center",
            mb: 4,
            fontWeight: "bold",
          }}
        >
          Get in touch
        </Typography>

        <Box sx={{mb: 3}}>
          <Typography
            sx={{
              mb: 1,
              fontSize: "0.9rem",
              overflow: "hidden",
            }}
          >
            Email Address
          </Typography>
          <TextField
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            variant="outlined"
            sx={textFieldStyles}
            inputProps={{
              style: {
                height: "20px", // Reduces the input height
              },
            }}
          />
        </Box>

        <Box sx={{mb: 4}}>
          <Typography
            sx={{
              mb: 1,
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "0.9rem",
              overflow: "hidden",
            }}
          >
            Message
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            variant="outlined"
            sx={{
              ...textFieldStyles,
              "& .MuiInputBase-inputMultiline": {
                paddingLeft: "3px", // Aligns with email input
                paddingTop: "3px", // Aligns with email input
              },
            }}
          />
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            padding: "12px",
            borderRadius: "12px",
            textTransform: "none",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </motion.div>
  );
};

// Rest of the ContactSection component remains the same
const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

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
            opacity: 0.2,
          }}
        />

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
      </Box>
    </motion.div>
  );
};

export default ContactSection;
