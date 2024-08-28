"use client";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import StudyInfoDifficulty from "./StudyInfoDifficulty";
import StudyInfoStatus from "./StudyInfoStatus";
import StudyTextInfo from "./StudyTextInfo";
import StudyTimeLine from "./StudyTimeline";

const StudyInfoBox = ({
  week,
  period,
  index,
  studyDetailId,
}: {
  week: number;
  studyDetailId: number;
  period: {
    startDate: string;
    endDate: string;
    open: boolean;
  };
  index: number;
}) => {
  const { setValue } = useFormContext();
  useEffect(() => {
    setValue(`studyCurriculums.${index}.studyDetailId`, studyDetailId);
  }, []);
  return (
    <section aria-label="create-detailInfo-box" className={StudyInfoBoxStyle}>
      <div className={StudyInfoBoxWeekStyle}>{week}주차</div>
      <Flex width="100%">
        <StudyTimeLine period={period} />
        <StudyInfoStatus index={index} />
      </Flex>
      <StudyInfoDifficulty index={index} />
      <StudyTextInfo index={index} />
    </section>
  );
};

export default StudyInfoBox;

const StudyInfoBoxStyle = css({
  width: "100%",
  position: "relative",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "outline",
  height: "297px",
  fontStyle: "body1",
});

const StudyInfoBoxWeekStyle = css({
  width: "100%",
  borderBottom: "1px solid",
  borderColor: "sub",
  height: "42px",
  display: "flex",
  alignItems: "center",
  padding: "xs",
});
