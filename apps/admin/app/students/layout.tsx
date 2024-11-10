import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import Navbar from "components/Navbar";

import { StudyProvider } from "./_contexts/StudyProvider";

const StudentsLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <StudyProvider>
      <Navbar />
      <styled.main className={StudentsLayoutStyle}>
        {children}
        {modal}
      </styled.main>
    </StudyProvider>
  );
};

export default StudentsLayout;

const StudentsLayoutStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "sm",
  height: "100vh",
  overflow: "scroll",
  width: "100%",
  padding: "54px 101px",
});
