import React from "react";
import {
  PortfolioContent,
  PortFolioSection,
  SectionDivisor,
} from "./Content.style";
import HeaderSection from "../routes/HeaderSection";
import AboutMeSection from "../routes/AboutMeSection";
import SocialNetworkSection from "./SocialNetworkSection";
import ExperienceSection from "../routes/ExperienceSection";
import EducationSection from "../routes/EducationSection";
import SkillsSection from "../routes/SkillsSection";
import InterestsSection from "../routes/InterestsSection";

function Content() {
  return (
    <PortfolioContent>
      <PortFolioSection>
        <HeaderSection />
        <AboutMeSection />
        <SocialNetworkSection />
      </PortFolioSection>
      <SectionDivisor />
      <ExperienceSection />
      <SectionDivisor />
      <EducationSection />
      <SectionDivisor />
      <SkillsSection />
      <SectionDivisor />
      <InterestsSection />
    </PortfolioContent>
  );
}

export default Content;
