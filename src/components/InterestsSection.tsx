import { PortFolioSection } from "./Content.style";
import { interests, title } from "../constants/interests.const";
import { useLanguage } from "../contexts/LanguageContext";

function InterestsSection() {
  const { language } = useLanguage();

  return (
    <PortFolioSection id="interests">
      <h1>{title[language].title}</h1>
      <p>{interests[language].description}</p>
    </PortFolioSection>
  );
}

export default InterestsSection;
