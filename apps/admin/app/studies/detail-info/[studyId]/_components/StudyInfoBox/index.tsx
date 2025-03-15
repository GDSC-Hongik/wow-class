"use client";
import { css } from "@styled-system/css";
import type { PeriodType } from "types/entities/period";

import StudyDatePick from "./StudyDatePick";
import StudyTextInfo from "./StudyTextInfo";
import StudyTimePick from "./StudyTimePick";

const StudyInfoBox = ({
  lessonPeriod,
  index,
}: {
  lessonPeriod: PeriodType;
  index: number;
}) => {
  return (
    <section
      aria-label="create-detailInfo-lesson-box"
      className={StudyInfoBoxStyle}
    >
      <div className={StudyInfoBoxWeekStyle}>수업정보</div>

      <StudyDatePick index={index} lessonPeriod={lessonPeriod} />
      <StudyTimePick index={index} />
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
