import React from "react";
import {Modal, Box, IconButton} from "@mui/material";
import {Close as CloseIcon} from "@mui/icons-material";
import ContactForm from "./contactForm";

const ContactModal = ({open, onClose, onSubmit}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="contact-modal"
      aria-describedby="contact-form-modal"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {xs: "90%", sm: "80%", md: "60%", lg: "50%"}, // Wider responsive widths
          maxWidth: "600px", // Maximum width to maintain readability
          borderRadius: 2,
          boxShadow: 24,
          outline: "none",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 15,
            top: 8,
            color: (theme) => theme.palette.grey[400],
          }}
        >
          <CloseIcon />
        </IconButton>

        <ContactForm
          onSubmit={(data) => {
            onSubmit?.(data);
            onClose();
          }}
        />
      </Box>
    </Modal>
  );
};

export default ContactModal;
