import React from "react";
import { PortFolioSection, SkillsContainer } from "../components/Content.style";
import {
  FaReact,
  FaJs,
  FaCss3,
  FaHtml5,
  FaPhp,
  FaNode,
  FaSass,
  FaVuejs,
} from "react-icons/fa";
import { ReactComponent as FaTypescript } from "../assets/typescript.svg";
import { ReactComponent as FaTailwind } from "../assets/tailwind-css.svg";
import { ReactComponent as FaNextJs } from "../assets/nextjs.svg";
import { ReactComponent as FaGraphQl } from "../assets/graphql.svg";
import { ReactComponent as FaCypress } from "../assets/cypress.svg";
import { Tooltip } from "react-tooltip";
import { worflow, titles } from "../constants/skills.const";
import { useLanguage } from "../contexts/LanguageContext";

function SkillsSection() {
  const { language } = useLanguage();

  const skillsIcons = [
    {
      icon: FaReact,
      tooltipContent: "Reactjs",
    },
    {
      icon: FaJs,
      tooltipContent: "Javascript",
    },
    {
      icon: FaCss3,
      tooltipContent: "CSS",
    },
    {
      icon: FaHtml5,
      tooltipContent: "HTML",
    },
    {
      icon: FaPhp,
      tooltipContent: "PHP",
    },
    {
      icon: FaNode,
      tooltipContent: "Nodejs",
    },
    {
      icon: FaSass,
      tooltipContent: "Sass",
    },
    {
      icon: FaVuejs,
      tooltipContent: "Vuejs",
    },
    {
      icon: FaTypescript,
      tooltipContent: "Typescript",
    },
    {
      icon: FaTailwind,
      tooltipContent: "Tailwind css",
    },
    {
      icon: FaNextJs,
      tooltipContent: "Nextjs",
    },
    {
      icon: FaGraphQl,
      tooltipContent: "GraphQl",
    },
    {
      icon: FaCypress,
      tooltipContent: "Cypress",
    },
  ];

  return (
    <PortFolioSection id="skills">
      <h1>{titles[language].title}</h1>
      <span className="title">{titles[language].tools}</span>
      <SkillsContainer>
        {skillsIcons.map((item, key) => (
          <div key={key + item.tooltipContent}>
            <item.icon
              data-tooltip-id="my-tooltip"
              data-tooltip-content={item.tooltipContent}
            />
          </div>
        ))}
        <Tooltip id="my-tooltip" />
      </SkillsContainer>
      <span className="title">{titles[language].workflow}</span>
      {worflow[language].map((item, key) => (
        <p key={key + item}>- {item}</p>
      ))}
    </PortFolioSection>
  );
}

export default SkillsSection;
