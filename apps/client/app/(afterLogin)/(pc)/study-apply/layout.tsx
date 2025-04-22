import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "수강 신청",
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
      {children}
      {modal}
    </>
  );
};

export default Layout;
