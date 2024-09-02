import { css } from "@styled-system/css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "나의 스터디",
};

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <main className={layoutContainerStyle}>
      {children}
      {modal}
    </main>
  );
};

export default Layout;

const layoutContainerStyle = css({
  minHeight: "calc(100vh - 108px)",
});
