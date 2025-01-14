'use client';
import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact-section" style={{ padding: "100px 20px", textAlign: "center" }}>
            <h2 style={{ marginBottom: "20px", fontSize: "2rem", fontWeight: "bold" }}>Contact Me</h2>
            <p style={{ marginBottom: "10px", fontSize: "1.2rem", lineHeight: "1.6" }}>
                Feel free to reach out to me at{" "}
                <a href="mailto:makendy.johnson@gmail.com" style={{ color: "#007BFF", textDecoration: "none" }}>
                    makendy.johnson@gmail.com
                </a>.
            </p>
            <p style={{ fontSize: "1rem" }}>I'd be happy to help you with your projects!</p>
        </section>
    );
};

export default ContactSection;