import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import type { Metadata } from "next";
import Header from "wowds-ui/Header";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <Flex direction="column" width="100%">
      <div className={headerStyle}>
        <Header />
      </div>
      <main className={layoutContainerStyle}>
        <Space height={40} />
        {children}
        {modal}
      </main>
    </Flex>
  );
};

export default Layout;

const layoutContainerStyle = css({
  left: 0,
  lg: {
    maxWidth: "390px",
  },
  width: "100%",
  backgroundColor: "#f8f8f8",
  paddingX: "16px",
  marginTop: "66px",
  minHeight: "calc(100vh - 66px)",
  paddingBottom: "20px",
});

const headerStyle = css({
  position: "fixed",
  backgroundColor: "backgroundNormal",
});
