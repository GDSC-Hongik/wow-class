import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "나의 과제",
};

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <>
      <main>
        {children}
        {modal}
      </main>
    </>
  );
};

export default Layout;
