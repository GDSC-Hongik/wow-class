import { styled } from "@styled-system/jsx";
import Navbar from "components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <styled.main padding="54px 101px 35px 101px" width="100vw">
        {children}
      </styled.main>
    </>
  );
};

export default Layout;
