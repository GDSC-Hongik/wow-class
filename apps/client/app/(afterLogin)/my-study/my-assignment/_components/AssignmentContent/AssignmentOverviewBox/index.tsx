import { Space } from "@wow-class/ui";
import Link from "next/link";
import type { Assignment } from "types/dtos/studyDetail";
import Box from "wowds-ui/Box";
import TextButton from "wowds-ui/TextButton";

import { AssignmentBoxButtons } from "./AssignmentBoxButtons";
import { AssignmentBoxInfo } from "./AssignmentBoxInfo";
import { AssignmentBoxTitle } from "./AssignmentBoxTitle";

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
              <TextButton
                asProp={Link}
                href={assignment.descriptionLink}
                style={textButtonstyle}
                target="_blank"
                text="과제 명세 확인"
              />
              <AssignmentBoxInfo assignment={assignment} />
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
  display: "block",
  width: "fit-content",
};

const boxStyle = {
  minWidth: "484px",
  width: "484px",
  height: "fit-content",
};
