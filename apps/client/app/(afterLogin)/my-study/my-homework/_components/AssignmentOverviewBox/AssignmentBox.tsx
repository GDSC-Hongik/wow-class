import { Space } from "@wow-class/ui";
import Link from "next/link";
import type { Assignment } from "types/dtos/study-detail-dashboard";
import Box from "wowds-ui/Box";
import TextButton from "wowds-ui/TextButton";

import { AssignmentButtons } from "./AssignmenBoxButtons";
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
          text={
            <>
              <AssignmentBoxTitle assignment={assignment} />
              <Space height={16} />
              <Link href={assignment.descriptionLink} target="_blank">
                <TextButton
                  style={{ paddingLeft: "0px" }}
                  text="과제 명세 확인"
                />
              </Link>
              <AssignmentSubmissionInfo assignment={assignment} />
              <Space height={26} />
              <AssignmentButtons
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
