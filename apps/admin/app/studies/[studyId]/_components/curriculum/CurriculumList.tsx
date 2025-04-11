import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import type { StudySessionApiResponseV2Dto } from "types/dtos/studyList";

import CurriculumListItem from "./CurriculumListItem";
import EmptyCurriculumList from "./EmptyCurriculumList";

const CurriculumList = ({
  studySessions,
  studyType,
}: {
  studySessions?: StudySessionApiResponseV2Dto[];
  studyType?: string;
}) => {
  if (studySessions?.length === 0) {
    return <EmptyCurriculumList />;
  }

  return (
    <section aria-label="curriculum-list">
      <Text typo="h2">스터디 커리큘럼</Text>
      <Space height={50} />
      <Flex direction="column" gap="50px">
        {studySessions?.map((curriculum) => (
          <CurriculumListItem
            curriculum={curriculum}
            key={curriculum.studySessionId}
            studyType={studyType}
          />
        ))}
      </Flex>
    </section>
  );
};

export default CurriculumList;
