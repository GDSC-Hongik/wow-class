import { styled } from "@styled-system/jsx";
import Navbar from "components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <styled.section paddingTop="3.375rem" paddingX="6.31rem" width="100vw">
        {children}
      </styled.section>
    </>
  );
};

export default Layout;
