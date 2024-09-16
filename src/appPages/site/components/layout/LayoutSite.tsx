import { FC, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import scss from "./layoutSite.module.scss";
interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
