"use client";
import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import { useEffect, useState } from "react";
import type { CurriculumApiResponseDto } from "types/dtos/curriculumList";

import StudyInfoBox from "./StudyInfoBox";

const StudyCurriculum = ({ studyId }: { studyId: string }) => {
  const [curriculumList, setCurriculumList] = useState<
    CurriculumApiResponseDto[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const curriculumData = await studyApi.getCurriculumList(
        parseInt(studyId, 10)
      );
      if (curriculumData) setCurriculumList(curriculumData);
    };
    fetchData();
  }, [studyId]);

  return (
    <section
      aria-label="create-study-description"
      className={StudyCurriculumSectionStyle}
    >
      <Text typo="h2">전체 커리큘럼 정보</Text>
      {curriculumList?.map(({ week, period, studyDetailId }, index) => (
        <StudyInfoBox
          index={index}
          key={`studyInfo-${index}`}
          period={period}
          studyDetailId={studyDetailId}
          week={week}
        />
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
