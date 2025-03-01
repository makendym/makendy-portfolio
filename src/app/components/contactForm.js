"use client";
import React, {useState, useCallback} from "react";
import {Box, Typography, TextField, Button} from "@mui/material";
import {motion} from "framer-motion";

// Common TextField styles extracted as a constant
const TEXT_FIELD_STYLES = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
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
    overflow: "hidden",
  },
};

const ContactForm = ({
  title = "Get in touch",
  onSubmit,
  initialEmail = "",
  initialMessage = "",
  className,
  style,
  animate = true,
  maxWidth = "600px",
  backgroundColor = "rgba(36, 36, 36, 1)",
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [message, setMessage] = useState(initialMessage);
  
  // Using useCallback to ensure the handlers don't change on re-renders
  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  
  const handleMessageChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, message });
    }
  }, [email, message, onSubmit]);

  // Create form content only once
  const formContent = (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth,
        padding: {xs: "2rem", sm: "3rem"},
        borderRadius: "34px",
        backgroundColor,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
      }}
      className={className}
      style={style}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: {xs: "2rem", sm: "2.5rem"},
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
          color: "rgba(255, 255, 255, 0.9)",
        }}
      >
        {title}
      </Typography>

      <Box sx={{mb: 3}}>
        <Typography
          sx={{
            mb: 1,
            fontSize: "0.9rem",
            overflow: "hidden",
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          Email Address
        </Typography>
        <TextField
          fullWidth
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          variant="outlined"
          sx={TEXT_FIELD_STYLES}
          inputProps={{
            style: {
              height: "20px",
            },
          }}
          autoComplete="off"
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
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter your message"
          variant="outlined"
          sx={{
            ...TEXT_FIELD_STYLES,
            "& .MuiInputBase-inputMultiline": {
              paddingLeft: "3px",
              paddingTop: "3px",
            },
          }}
          autoComplete="off"
        />
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "white",
          padding: "12px",
          borderRadius: "16px",
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
  );

  // Simplified rendering
  const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  if (animate) {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        style={containerStyle}
      >
        {formContent}
      </motion.div>
    );
  }
  
  return <Box sx={containerStyle}>{formContent}</Box>;
};

export default ContactForm;