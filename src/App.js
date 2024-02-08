import { Routes, Route} from "react-router-dom";
import Portfolio from "./routes/Portfolio";
import AboutMeSection from "./routes/AboutMeSection";
import EducationSection from "./routes/EducationSection";
import ExperienceSection from "./routes/ExperienceSection";
import HeaderSection from "./routes/HeaderSection";
import InterestsSection from "./routes/InterestsSection";
import SkillsSection from "./routes/SkillsSection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<AboutMeSection />} />
        <Route path="/education" element={<EducationSection />} />
        <Route path="/experience" element={<ExperienceSection />} />
        <Route path="/about" element={<HeaderSection />} />
        <Route path="/interests" element={<InterestsSection />} />
        <Route path="/skills" element={<SkillsSection />} />

      </Routes>
    </>
  );
}

export default App;