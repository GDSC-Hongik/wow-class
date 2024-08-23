import { Space } from "@wow-class/ui";
import Link from "next/link";
import type { Assignment } from "types/dtos/studyDetail";
import Box from "wowds-ui/Box";
import TextButton from "wowds-ui/TextButton";

import { AssignmentBoxButtons } from "./AssignmentBoxButtons";
import { AssignmentBoxTitle } from "./AssignmentBoxTitle";
import { AssignmentSubmissionInfo } from "./AssignmetBoxInfo";

interface AssignmentOverviewBoxProps {
  assignments: Assignment[];
  buttonsDisabled?: boolean;
}

export const AssignmentOverviewBox = ({
  assignments,
  buttonsDisabled = false,
}: AssignmentOverviewBoxProps) => {
  return (
    <>
      {assignments.map((assignment) => (
        <Box
          key={assignment.studyDetailId}
          style={boxStyle}
          variant="text"
          text={
            <>
              <AssignmentBoxTitle assignment={assignment} />
              <Link href={assignment.descriptionLink} target="_blank">
                <TextButton style={textButtonstyle} text="과제 명세 확인" />
              </Link>
              <AssignmentSubmissionInfo assignment={assignment} />
              <Space height={26} />
              <AssignmentBoxButtons
                assignment={assignment}
                buttonsDisabled={buttonsDisabled}
              />
            </>
          }
        />
      ))}
    </>
  );
};

const textButtonstyle = {
  paddingLeft: "0px",
  paddingRight: "0px",
};

const boxStyle = {
  minWidth: "484px",
};
