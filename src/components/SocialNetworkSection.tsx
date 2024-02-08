import { SocialNetwork } from "./Content.style";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialNetworkList = [
  {
    icon: FaGithub,
    link: "https://github.com/fernandaCarvalhoSilva",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/fernanda-carvalho-da-silva/",
  },
];

function SocialNetworkSection() {
  return (
    <SocialNetwork>
      {SocialNetworkList.map((item, key) => (
        <div key={key}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <item.icon />
          </a>
        </div>
      ))}
    </SocialNetwork>
  );
}

export default SocialNetworkSection;
