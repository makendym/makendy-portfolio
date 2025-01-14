'use client';
import React from 'react';

const SkillsSection = () => {
    return (
        <section
            id="skills-section"
            style={{
                padding: "40px 20px",
                textAlign: "center",
            }}
        >
            <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "bold" }}>
                Skills
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                I'm proficient in:
            </p>
            <ul
                style={{
                    listStyleType: "none",
                    padding: 0,
                    fontSize: "1rem",
                    lineHeight: "1.8",
                }}
            >
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>GraphQL</li>
                <li>CSS & HTML</li>
                <li>TypeScript (basic experience)</li>
            </ul>
        </section>
    );
};

export default SkillsSection;