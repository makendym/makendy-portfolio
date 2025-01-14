'use client';
import React from 'react';

const ProjectSection = () => {
    return (
        <section
            id="projects-section"
            style={{
                padding: "40px 20px",
                textAlign: "center",
            }}
        >
            <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "bold" }}>
                Projects
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                Some of my recent projects include:
            </p>
            <ul style={{ listStyleType: "none", padding: 0, lineHeight: "2" }}>
                <li style={{ marginBottom: "15px" }}>
                    <a
                        href="https://github.com/makendyjohnson/portfolio-website"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "#007BFF",
                            fontWeight: "500",
                        }}
                    >
                        Portfolio Website
                    </a>{" "}
                    - A Next.js website showcasing my skills and projects.
                </li>
                <li>
                    <a
                        href="https://github.com/makendyjohnson/react-color-palette"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "#007BFF",
                            fontWeight: "500",
                        }}
                    >
                        React Color Palette
                    </a>{" "}
                    - A React component for creating color palettes.
                </li>
            </ul>
        </section>
    );
};

export default ProjectSection;