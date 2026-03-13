import { Box } from "@mui/material";
import Header from "./components/Header";
import SkillsTools from "./components/SkillsTools";
import Experience from "./components/Experience";
// import Education from "./components/Education";
import Projects from "./components/Projects";
import ContactPage from "./components/contacts";
import ProfileSection from "./components/Profilesection";
import { ColorModeProvider } from "./context/ThemeContext";
import CursorFollower from "./components/cursorfollower";

export default function App() {
  return (
    <>
      <CursorFollower />
    <ColorModeProvider>
      <Header />
      <Box>
        {/* Add padding top to offset fixed AppBar */}
        <Box id="about-me">
          <ProfileSection />
        </Box>
        <Box  id="skills-tools">
          <SkillsTools />
        </Box>
        <Box  id="experience">
          <Experience />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        {/* <Box id="education">
          <Education />
        </Box> */}
        <Box id="contact">
          <ContactPage />
        </Box>
      </Box>
    </ColorModeProvider>
    </>
  );
}
