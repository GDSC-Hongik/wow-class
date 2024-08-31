import { studyApi } from "apis/study/studyApi";

import CreateStudyDetailInfo from "./_components/CreateStudyDetailInfo";

export const generateMetadata = async ({
  params: { studyId },
}: {
  params: { studyId: string };
}) => {
  const study = await studyApi.getStudyBasicInfo(+studyId);
  return {
    title: study
      ? `${study.title} 스터디 상세 작성하기`
      : "스터디 상세 작성하기",
  };
};

const CreateStudyDetailInfoPage = ({
  params,
}: {
  params: { studyId: string };
}) => {
  return <CreateStudyDetailInfo params={params} />;
};

export default CreateStudyDetailInfoPage;
