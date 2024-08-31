import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스터디 만들기",
};

const CreateStudyLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <main>
      {children}
      {modal}
    </main>
  );
};

export default CreateStudyLayout;
