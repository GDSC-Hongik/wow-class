import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "나의 과제 | GDSC Hongik 스터디 서비스, 와우클래스",
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
