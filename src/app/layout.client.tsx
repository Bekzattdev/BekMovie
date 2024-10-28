import ReduxProvider from "@/providers/ReduxProvider";
import { FC, ReactNode } from "react";

interface RootLayoutClientProps {
  children: ReactNode;
}

const RootLayoutClient: FC<RootLayoutClientProps> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default RootLayoutClient;
