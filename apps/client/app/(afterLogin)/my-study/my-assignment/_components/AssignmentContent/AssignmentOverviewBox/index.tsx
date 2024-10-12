import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import Link from "next/link";
import type { Assignment } from "types/dtos/studyDetail";
import { getNowIsAfterStartDate } from "utils/getNowIsAfterStartDate";
import Box from "wowds-ui/Box";
import TextButton from "wowds-ui/TextButton";

import { AssignmentBoxButtons } from "./AssignmentBoxButtons";
import { AssignmentBoxInfo } from "./AssignmentBoxInfo";
import { AssignmentBoxTitle } from "./AssignmentBoxTitle";

interface AssignmentOverviewBoxProps {
  assignments: Assignment[];
  buttonsDisabled?: boolean;
  repositoryLink?: string;
}

export const AssignmentOverviewBox = async ({
  assignments,
  repositoryLink,
  buttonsDisabled = false,
}: AssignmentOverviewBoxProps) => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyInfoData?.studyId) {
    return;
  }

  const curriculumData = await myStudyApi.getStudyCurriculumList(
    myOngoingStudyInfoData.studyId
  );

  return (
    <>
      {assignments.map((assignment) => {
        const currentCurriculum = curriculumData?.find(
          (item) => item.week === assignment.week
        );

        const isSubmittable = getNowIsAfterStartDate(
          String(currentCurriculum?.period.startDate)
        );

        return (
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
                <AssignmentBoxInfo
                  assignment={assignment}
                  repositoryLink={repositoryLink}
                />
                <Space height={26} />
                <AssignmentBoxButtons
                  assignment={assignment}
                  buttonsDisabled={buttonsDisabled || !isSubmittable}
                  repositoryLink={repositoryLink}
                  studyId={myOngoingStudyInfoData.studyId}
                />
              </>
            }
          />
        );
      })}
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
