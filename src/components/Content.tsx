import React from "react";
import {
  PortfolioContent,
  PortFolioSection,
  SectionDivisor,
} from "./Content.style";
import HeaderSection from "./HeaderSection";
import AboutMeSection from "./AboutMeSection";
import SocialNetworkSection from "./SocialNetworkSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import InterestsSection from "./InterestsSection";

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
