import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import RootLayout from "./layout";
import LandingPage from "./sections/landingPage";
import AboutSection from "./sections/aboutSection";
import SkillsSection from "./sections/skillsSection";
import EducationSection from "./sections/educationSection";
import WorkSection from "./sections/workSection";
import ProjectSection from "./sections/projectSection";
import ContactSection from "./sections/contactSection";
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
        <LandingPage />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <WorkSection />
        <ProjectSection />
        <ContactSection />
    </ThemeProvider>
  );
}
