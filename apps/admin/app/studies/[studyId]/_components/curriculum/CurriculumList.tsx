import { Space, Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import type { StudySessionApiResponseV2Dto } from "types/dtos/studyList";

import CurriculumListItem from "./CurriculumListItem";
import EmptyCurriculumList from "./EmptyCurriculumList";

const CurriculumList = async ({
  studyId,
  studySessions,
}: {
  studyId: string;
  studySessions?: StudySessionApiResponseV2Dto[];
}) => {
  {
    /*
  const curriculumList = await studyApi.getCurriculumList(
    parseInt(studyId, 10)
  );
    */
  }

  console.log("test", studySessions);

  if (studySessions?.length === 0) {
    return <EmptyCurriculumList />;
  }

  return (
    <section aria-label="curriculum-list">
      <Text typo="h2">스터디 커리큘럼</Text>
      <Space height={50} />
      {studySessions?.map((curriculum) => (
        <CurriculumListItem
          curriculum={curriculum}
          key={curriculum.studySessionId}
        />
      ))}
    </section>
  );
};

export default CurriculumList;
