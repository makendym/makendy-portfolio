import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import theme from "./theme";
import LandingPage from "./sections/landingPage";
import TextParallaxContentExample from "./sections/TextParallaxContent";
import AboutSection from "./sections/aboutSection";
import SkillsSection from "./sections/skillsSection";
import EducationSection from "./sections/educationSection";
import WorkSection from "./sections/workSection";
import ProjectSection from "./sections/projectSection";
import ContactSection from "./sections/contactSection";
import Footer from "./components/footer";
import { pageGradientBackground } from "./assets";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
      <TextParallaxContentExample />
      
      <Box
        component="main"
        sx={{
          position: "relative",
          minHeight: "100vh",
          backgroundColor: "rgba(36, 36, 36, 100%)",
          zIndex: 10001,
        }}
      >
        {/* Foreground background image with 20% opacity */}
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
        
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <WorkSection />
        <ProjectSection />
        <ContactSection />
        
        <Footer />
      </Box>
    </ThemeProvider>
  );
}