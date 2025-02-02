import {ThemeProvider} from "@mui/material/styles";
import {Box} from "@mui/material";
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
import {pageGradientBackground} from "./assets";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
      <TextParallaxContentExample />
        <AboutSection />
        <EducationSection />
        <WorkSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
    </ThemeProvider>
  );
}
