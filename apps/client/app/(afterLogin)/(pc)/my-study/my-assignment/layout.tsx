import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "나의 과제 | 와우클래스",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default Layout;
