import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import Navbar from "components/Navbar";

const StudentsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <styled.main className={StudentsLayoutStyle}>{children}</styled.main>
    </>
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
