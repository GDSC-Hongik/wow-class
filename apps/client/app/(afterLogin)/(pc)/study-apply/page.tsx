import { Space, Text } from "@wow-class/ui";
import { studyApplyApi } from "apis/studyApplyApi";

import EmptyStudyApplication from "./_components/EmptyStudyApplication";
import StudyItem from "./_components/StudyItem";

const StudyApplyPage = async () => {
  const data = await studyApplyApi.getStudyList();

  if (!data) return null;

  const { appliedStudyId, studyResponses: studyList } = data;

  return (
    <>
      <Text as="h1" typo="h1">
        신청 가능한 스터디
      </Text>
      <Space height={19} />
      {studyList.length > 0 ? (
        studyList.map((study) => (
          <StudyItem
            appliedStudyId={appliedStudyId}
            key={study.studyId}
            study={study}
          />
        ))
      ) : (
        <EmptyStudyApplication />
      )}
    </>
  );
};

export default StudyApplyPage;
