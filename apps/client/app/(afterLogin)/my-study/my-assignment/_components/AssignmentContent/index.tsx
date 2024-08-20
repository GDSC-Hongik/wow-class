import { Flex } from "@styled-system/jsx";
import {
  assignmentData,
  studyDashBoardData,
} from "constants/assignmentMockData";

import { AssignmentOverviewBox } from "./AssignmentOverviewBox";
import { RepositorySubmissionBox } from "./RepositorySubmissionBox";

export const AssignmentContent = () => {
  // const studyDashboard = await studyDetailApi.getStudyDetailDashboard(1);

  //TODO: studyDashboard.isLinkEditable 가 false 면 이번 주 과제 조회 api 사용
  const studyDashboard = studyDashBoardData;
  return (
    <>
      <Flex gap="lg">
        {studyDashBoardData.isLinkEditable && (
          <>
            <RepositorySubmissionBox
              repositoryLink={studyDashBoardData.repositoryLink}
            />
            <AssignmentOverviewBox
              assignments={studyDashboard.submittableAssignments}
              buttonsDisabled={!studyDashBoardData.repositoryLink}
            />
          </>
        )}
        {!studyDashBoardData.isLinkEditable && (
          <AssignmentOverviewBox assignments={assignmentData} />
        )}
      </Flex>
    </>
  );
};
