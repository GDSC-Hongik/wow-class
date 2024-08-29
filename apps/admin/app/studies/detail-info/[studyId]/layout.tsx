import { studyApi } from "apis/study/studyApi";

export const generateMetadata = async ({
  params: { studyId },
}: {
  params: { studyId: string };
}) => {
  const study = await studyApi.getStudyBasicInfo(+studyId);
  return {
    title: study ? study.title : "스터디 상세 작성하기",
  };
};

const StudyDetailInfoLayout = ({
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

export default StudyDetailInfoLayout;

const MainLayoutStyle = {
  height: "100vh",
  overflow: "auto",
};
