import LayoutSite from "@/appPages/site/components/layout/LayoutSite";
import { FC, ReactNode } from "react";

interface layoutType {
  children: ReactNode;
}
const layout: FC<layoutType> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
