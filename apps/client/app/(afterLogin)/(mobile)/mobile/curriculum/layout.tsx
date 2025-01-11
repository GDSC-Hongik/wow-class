import { css } from "@styled-system/css";
import type { Metadata } from "next";

import Navigation from "../_components/Navigation";

export const metadata: Metadata = {
  title: "커리큘럼",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className={layoutContainerStyle}>{children}</section>
      <Navigation />
    </>
  );
};

export default Layout;

const layoutContainerStyle = css({
  marginBottom: "90px",
});
