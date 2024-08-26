import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이페이지",
};

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <main>
      {children}
      {modal}
    </main>
  );
};

export default Layout;
