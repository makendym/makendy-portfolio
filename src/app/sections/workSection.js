'use client';
import React from "react";

const WorkSection = () => {
  return (
    <section
      id="work-section"
      style={{
        padding: "100px 20px",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Work Experience
      </h2>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto" }}>
        I’ve had the opportunity to collaborate with a variety of teams and organizations, tackling challenges in web development, application design, and problem-solving. Below are some of the key positions I’ve held:
      </p>

      <div style={{ marginTop: "40px" }}>
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Software Engineer at ABC Corp</h3>
          <p style={{ fontStyle: "italic", color: "#777" }}>Jan 2022 - Present</p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            As a software engineer at ABC Corp, I am responsible for developing and maintaining web applications using React.js and Node.js. I collaborate closely with product and design teams to build scalable solutions and deliver high-quality features.
          </p>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Frontend Developer at XYZ Ltd</h3>
          <p style={{ fontStyle: "italic", color: "#777" }}>Jun 2020 - Dec 2021</p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            At XYZ Ltd, I was tasked with developing user-friendly interfaces and enhancing the customer experience through responsive designs. I worked with a team of developers to ensure optimal performance and cross-platform compatibility.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Intern at DEF Solutions</h3>
          <p style={{ fontStyle: "italic", color: "#777" }}>Jan 2020 - May 2020</p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            During my internship at DEF Solutions, I assisted in the development of internal tools and websites, gaining hands-on experience with JavaScript, HTML, and CSS. I also collaborated with senior developers to implement bug fixes and new features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;