import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import Navbar from "components/Navbar";

const StudiesLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <main>
      <Navbar />
      <styled.main className={StudiesLayoutStyle}>
        {children}
        {modal}
      </styled.main>
    </main>
  );
};

export default StudiesLayout;

const StudiesLayoutStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "sm",
  height: "100vh",
  width: "100%",
  padding: "54px 101px",
});
