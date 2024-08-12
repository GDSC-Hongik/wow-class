import { Navbar } from "@wow-class/ui/client";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
