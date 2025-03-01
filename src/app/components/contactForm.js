"use client";
import React, {useState, useCallback} from "react";
import {Box, Typography, TextField, Button} from "@mui/material";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

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
  initialName = "",
  className,
  style,
  animate = true,
  maxWidth = "600px",
  backgroundColor = "rgba(36, 36, 36, 1)",
}) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: initialName,
    email: initialEmail,
    message: initialMessage,
  });

  // Form validation
  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  // Using useCallback to ensure the handlers don't change on re-renders
  const handleChange = useCallback(
    (e) => {
      const {name, value} = e.target;

      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: undefined,
        }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // Validate form before submission
      if (!validateForm()) {
        return;
      }

      setLoading(true);

      // Sanitize form data
      const sanitizedForm = {
        from_name: DOMPurify.sanitize(form.name),
        to_name: "Makendy Midouin",
        from_email: DOMPurify.sanitize(form.email),
        to_email: "makendymidouin99@gmail.com",
        message: DOMPurify.sanitize(form.message),
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          sanitizedForm,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            // Use a safer alert method if available in your project
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });

            // Call external onSubmit handler if provided
            if (onSubmit) {
              onSubmit(sanitizedForm);
            }
          },
          (error) => {
            setLoading(false);
            console.error("EmailJS error:", error);
            // Safer alert that doesn't include user input or error details
            alert("Something went wrong. Please try again later.");
          }
        );
    },
    [form, onSubmit, validateForm]
  );

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
          Name
        </Typography>
        <TextField
          fullWidth
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name}
          FormHelperTextProps={{
            sx: {color: "rgba(255, 100, 100, 0.9)"},
          }}
          sx={TEXT_FIELD_STYLES}
          inputProps={{
            style: {
              height: "20px",
            },
            maxLength: 100, // Add reasonable limits
          }}
          autoComplete="name"
        />
      </Box>

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
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email}
          FormHelperTextProps={{
            sx: {color: "rgba(255, 100, 100, 0.9)"},
          }}
          sx={TEXT_FIELD_STYLES}
          inputProps={{
            style: {
              height: "20px",
            },
            maxLength: 254, // Email standard max length
          }}
          autoComplete="email"
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
          value={form.message}
          onChange={handleChange}
          placeholder="Enter your message"
          variant="outlined"
          error={!!errors.message}
          helperText={errors.message}
          FormHelperTextProps={{
            sx: {color: "rgba(255, 100, 100, 0.9)"},
          }}
          sx={{
            ...TEXT_FIELD_STYLES,
            "& .MuiInputBase-inputMultiline": {
              paddingLeft: "3px",
              paddingTop: "3px",
            },
          }}
          inputProps={{
            maxLength: 5000, // Reasonable message limit
          }}
        />
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={loading}
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
        {loading ? "Sending..." : "Submit"}
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
