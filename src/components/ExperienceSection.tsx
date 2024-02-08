import { CareersSection, PortFolioSection } from "./Content.style";
import { experiences, title } from "../constants/experience.const";
import { useLanguage } from "../contexts/LanguageContext";

function ExperienceSection() {
  const { language } = useLanguage();

  return (
    <PortFolioSection id="experience">
      <h1>{title[language].title}</h1>
      {experiences.map((item, key) => (
        <div key={key + item[language].position}>
          <CareersSection>
            <span className="title">{item[language].position}</span>
            <span className="date">{item[language].date}</span>
          </CareersSection>
          <span className="subtitle">{item[language].company}</span>
          <p>{item[language].description}</p>
        </div>
      ))}
    </PortFolioSection>
  );
}

export default ExperienceSection;
