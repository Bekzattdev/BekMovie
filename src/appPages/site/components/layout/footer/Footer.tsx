import { FC } from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import scss from "./Footer.module.scss";
const Footer: FC = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.infoText}>
        BekMovie - is a unique website that offers fascinating information about
        movies and TV series. Here you can find all the necessary information
        about your favorite movies, actors, directors, ratings and much more.
        BekMovie stands out with its stylish and intuitive interface, which
        makes searching for movie masterpieces as convenient and enjoyable as
        possible.
      </div>
      <div className={scss.socialIcons}>
        <a href="https://www.instagram.com/bekzattdev/" target="_blank">
          <span className={scss.icon}>
            <FaInstagram />
          </span>
        </a>

        <a href="https://t.me/bekzat_0101" target="_blank">
          <span className={scss.icon}>
            <FaTelegram />
          </span>
        </a>
        <a href="https://github.com/Bekzattdev" target="_blank">
          <span className={scss.icon}>
            <FaGithub />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
