import { studyApi } from "apis/study/studyApi";

export const generateMetadata = async ({
  params: { studyId },
}: {
  params: { studyId: string };
}) => {
  const study = await studyApi.getStudyBasicInfo(+studyId);
  return {
    title: study ? study.title : "스터디",
  };
};

const StudyLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <main style={MainLayoutStyle}>
      {children}
      {modal}
    </main>
  );
};

const MainLayoutStyle = {
  height: "100vh",
  overflow: "auto",
};

export default StudyLayout;
