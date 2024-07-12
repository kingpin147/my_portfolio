import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const socialIcons = [
  { icon: <FaGithub />, path: 'https://github.com/kingpin147' }, 
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/muhammadnoumanattique/' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/kingpin.147/' },
  { icon: <FaFacebook />, path: 'https://www.facebook.com/nouman.webdev' },
  { icon: <FaYoutube />, path: 'https://www.youtube.com/playlist?list=PLFRm7nYIypQE0eEXmcyjm0tpkUFxGBS80' },
];



const Socials = ({ containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socialIcons.map((icon, index) => (
        <Link key={index} href={icon.path} className={iconStyles}>
          {icon.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
