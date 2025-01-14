'use client';
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      style={{
        padding: "100px 20px",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        About Me
      </h2>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto" }}>
        Hello! I'm Makendy, a passionate software engineer focused on building web applications with modern technologies like React and Next.js. My journey started with a love for problem-solving, and I’m always eager to learn new skills and contribute to meaningful projects.
        <br />
        <br />
        I believe in the power of collaboration, creativity, and continuous learning. Whether it’s front-end development, back-end logic, or full-stack development, I am committed to making an impact through thoughtful and innovative solutions.
      </p>
    </section>
  );
};

export default AboutSection;