"use client";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";

import AssignmentDatePick from "./AssignmentDatePick";
import AssignemntTextInfo from "./AssignmentTextInfo";

const AssignmentInfoBox = ({
  assignmentPeriod,
  index,
}: {
  assignmentPeriod: {
    startDate: string;
    endDate: string;
  };
  index: number;
}) => {
  return (
    <section
      aria-label="create-detailInfo-assignment-box"
      className={StudyInfoBoxStyle}
    >
      <div className={StudyInfoBoxWeekStyle}>과제 정보</div>
      <Flex maxHeight={41} width="100%">
        <AssignmentDatePick assignmentPeriod={assignmentPeriod} index={index} />
        <div className={VerticalSectionStyle} />
      </Flex>
      <AssignemntTextInfo index={index} />
    </section>
  );
};

export default AssignmentInfoBox;

const StudyInfoBoxStyle = css({
  width: "100%",
  position: "relative",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "outline",
  height: "168px",
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

const VerticalSectionStyle = css({
  width: "1px",
  height: "41px",
  backgroundColor: "outline",
});
