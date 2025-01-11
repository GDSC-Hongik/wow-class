import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "출석 체크",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
