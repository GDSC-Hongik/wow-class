import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "나의 스터디",
};

const Layout = ({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return <>{children}</>;
};

export default Layout;
