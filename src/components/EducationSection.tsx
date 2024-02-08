import { EducationContainer, PortFolioSection } from "./Content.style";
import { education, title } from "../constants/education.const";
import { useLanguage } from "../contexts/LanguageContext";

function EducationSection() {
  const { language } = useLanguage();

  return (
    <PortFolioSection id="education">
      <h1>{title[language].title}</h1>
      {education.map((item, key) => (
        <div key={key + item[language].institution}>
          <EducationContainer>
            <span className="title">{item[language].institution}</span>
            <span className="date">{item[language].date}</span>
          </EducationContainer>
          <span className="subtitle">{item[language].degree}</span>
          <p>{item[language].course}</p>
        </div>
      ))}
    </PortFolioSection>
  );
}

export default EducationSection;
