"use client";
import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import type { StudySession } from "types/dtos/studyDetailInfo";

import StudyInfoBox from "./StudyInfoBox";
import AssignmentInfoBox from "./StudyInfoBox/AssignmentInfoBox";

interface CurriculumListProps {
  studySessions?: StudySession[] | undefined;
}
const StudyCurriculum = ({ studySessions }: CurriculumListProps) => {
  console.log(studySessions?.length);
  return (
    <section
      aria-label="create-study-description"
      className={StudyCurriculumSectionStyle}
    >
      <Text typo="h2">전체 커리큘럼 정보</Text>
      {studySessions?.map(({ lessonPeriod, assignmentPeriod }, index) => (
        <>
          <span>{index + 1} 주차</span>
          <StudyInfoBox
            assignmentPeriod={assignmentPeriod}
            index={index}
            key={`studyInfo-${index}-lesson`}
            lessonPeriod={lessonPeriod}
            week={index + 1}
          />
          <AssignmentInfoBox
            assignmentPeriod={assignmentPeriod}
            index={index}
            key={`studyInfo-${index}-assignment`}
            lessonPeriod={lessonPeriod}
            week={index + 1}
          />
        </>
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
