import { FC } from "react";
import scss from "./Footer.module.scss";
const Footer: FC = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.beko}>
        <p>This project was copied from Bekzattdev&apos;s profile</p>
        <a href="https://github.com/Bekzattdev">GitHub = Bekzattdev</a>
      </div>
    </footer>
  );
};

export default Footer;
