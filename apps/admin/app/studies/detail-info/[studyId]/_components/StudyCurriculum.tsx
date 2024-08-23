"use client";
import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { studyInfoApi } from "apis/study/studyInfoApi";
import { useEffect, useState } from "react";
import type { SessionApiResponseDto } from "types/dtos/sessionList";

import StudyInfoBox from "./studyInfoBox";

const StudyCurriculum = ({ studyId }: { studyId: string }) => {
  const [sessionList, setSessionList] = useState<SessionApiResponseDto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const sessionList = await studyInfoApi.getSessionList(
        parseInt(studyId, 10)
      );
      if (sessionList) setSessionList(sessionList);
    };
    fetchData();
  }, [studyId]);

  return (
    <section
      aria-label="create-study-description"
      className={StudyCurriculumSectionStyle}
    >
      <Text typo="h2">전체 커리큘럼 정보</Text>
      {sessionList?.map(({ week, period, studyDetailId }, index) => (
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
