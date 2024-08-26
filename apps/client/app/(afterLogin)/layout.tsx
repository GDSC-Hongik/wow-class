import { styled } from "@styled-system/jsx";
import Navbar from "components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <styled.main padding="54px 0 0 101px" width="calc(100vw - 351px)">
        {children}
      </styled.main>
    </>
  );
};

export default Layout;
