import { Space, Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";

import CurriculumListItem from "./CurriculumListItem";
import EmptyCurriculumList from "./EmptyCurriculumList";

const CurriculumList = async ({ studyId }: { studyId: string }) => {
  const curriculumList = await studyApi.getCurriculumList(
    parseInt(studyId, 10)
  );

  if (curriculumList?.length === 0) {
    return <EmptyCurriculumList />;
  }

  return (
    <section aria-label="curriculum-list">
      <Text typo="h2">스터디 커리큘럼</Text>
      <Space height={24} />
      {curriculumList?.map((curriculum) => (
        <CurriculumListItem
          curriculum={curriculum}
          key={`curriculumItem-${curriculum.studyDetailId}`}
        />
      ))}
    </section>
  );
};

export default CurriculumList;
