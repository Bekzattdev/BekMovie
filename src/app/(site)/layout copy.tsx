import LayoutSite from "@/components/layout/LayoutSite";
import SessionProvider from "@/components/Providers/SessionProvider";
import { getServerSession } from "next-auth";
import { FC, ReactNode } from "react";
import LayoutClient from "../layout.client";

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = async ({ children }) => {
  const session = await getServerSession();
  return (
    <SessionProvider session={session}>
      <LayoutClient>
        <LayoutSite>{children}</LayoutSite>
      </LayoutClient>
    </SessionProvider>
  );
};

export default layout;
