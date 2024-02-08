import { useLanguage } from "../contexts/LanguageContext";
import { AboutMe } from "../constants/aboutMe.const";

function AboutMeSection() {
  const { language } = useLanguage();

  return (
    <div>
      <p>{AboutMe[language].description}</p>
    </div>
  );
}

export default AboutMeSection;
