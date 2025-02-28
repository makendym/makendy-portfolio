import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme";
import LandingPage from "./sections/landingPage";
import TextParallaxContentExample from "./sections/TextParallaxContent";
import AboutSection from "./sections/aboutSection";
import EducationSection from "./sections/educationSection";
import WorkSection from "./sections/workSection";
import ProjectSection from "./sections/projectSection";
import ContactSection from "./sections/contactSection";


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
    </ThemeProvider>
  );
}
