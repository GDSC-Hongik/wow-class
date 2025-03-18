import { Space } from "@wow-class/ui";
import Link from "next/link";
import type { StudyDetailTaskDto } from "types/dtos/studyDetail";
import type { DailyTaskType } from "types/entities/myStudy";
import Box from "wowds-ui/Box";
import TextButton from "wowds-ui/TextButton";

import { AssignmentBoxButtons } from "./AssignmentBoxButtons";
import { AssignmentBoxInfo } from "./AssignmentBoxInfo";
import { AssignmentBoxTitle } from "./AssignmentBoxTitle";

export const AssignmentOverviewBox = async ({
  dailyTask,
}: {
  dailyTask: StudyDetailTaskDto<DailyTaskType>;
}) => {
  const { studySession } = dailyTask;
  return (
    <Box
      style={boxStyle}
      variant="text"
      text={
        <>
          <AssignmentBoxTitle studyDetailTaskInfo={dailyTask} />
          <TextButton
            asProp={Link}
            href={studySession.assignmentDescriptionLink}
            style={textButtonstyle}
            target="_blank"
            text="과제 명세 확인"
          />
          <Space height={8} />
          <AssignmentBoxInfo studyDetailTaskInfo={dailyTask} />
          <Space height={26} />
          <AssignmentBoxButtons studyDetailTaskInfo={dailyTask} />
        </>
      }
    />
  );
};
const textButtonstyle = {
  paddingLeft: "0px",
  paddingRight: "0px",
  display: "block",
  width: "fit-content",
};

const boxStyle = {
  minWidth: "484px",
  width: "484px",
  height: "fit-content",
};
