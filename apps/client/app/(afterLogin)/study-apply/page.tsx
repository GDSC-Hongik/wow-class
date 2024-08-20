import { Space, Text } from "@wow-class/ui";
import { studyApplyApi } from "apis/studyApplyApi";

import StudyItem from "./_components/StudyItem";

const StudyApplyPage = async () => {
  const studyList = await studyApplyApi.getStudyList();

  return (
    <>
      <Text as="h1" typo="h1">
        신청 가능한 스터디
      </Text>
      <Space height={19} />
      {studyList?.map((study) => (
        <StudyItem key={study.studyId} study={study} />
      ))}
    </>
  );
};

export default StudyApplyPage;
