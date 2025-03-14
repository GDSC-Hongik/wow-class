"use client";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import type { StudySession } from "types/dtos/studyDetailInfo";

import StudyInfoBox from "./StudyInfoBox";
import AssignmentInfoBox from "./StudyInfoBox/AssignmentInfoBox";
interface CurriculumListProps {
  studySessions?: StudySession[] | undefined;
  isAssignmentStudy: boolean;
}
const StudyCurriculum = ({
  studySessions,
  isAssignmentStudy,
}: CurriculumListProps) => {
  return (
    <section
      aria-label="create-study-description"
      className={StudyCurriculumSectionStyle}
    >
      <Text typo="h2">전체 커리큘럼 정보</Text>
      <Space height={30} />
      {studySessions?.map(({ lessonPeriod, assignmentPeriod }, index) => (
        <Flex gap={30} key={`studyInfo-${index}`}>
          <span>{index + 1}회차</span>
          <Flex flexDirection="column" gap={15} style={{ flex: 1 }}>
            {!isAssignmentStudy && (
              <StudyInfoBox
                index={index}
                key={`studyInfo-${index}-lesson`}
                lessonPeriod={lessonPeriod}
              />
            )}
            <AssignmentInfoBox
              assignmentPeriod={assignmentPeriod}
              index={index}
              key={`studyInfo-${index}-assignment`}
            />
          </Flex>
        </Flex>
      ))}
    </section>
  );
};

export default StudyCurriculum;

const StudyCurriculumSectionStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "xl",
  paddingBottom: "48px",
});
