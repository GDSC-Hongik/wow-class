import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import {
  assignmentData,
  studyDashBoardData,
} from "constants/assignmentMockData";

import { AssignmentOverviewBox } from "./AssignmentOverviewBox";
import { EmptyAssignmentBox } from "./EmptyAssignmentBox";
import { RepositorySubmissionBox } from "./RepositorySubmissionBox";
export const AssignmentContent = () => {
  //TODO:수강 중인 스터디 api 호출
  //const studyId = await myStudyApi.getMyOngoingStudyInfo();
  //const studyDashboard = await studyDetailApi.getStudyDetailDashboard(studyId);

  //TODO: studyDashboard.isLinkEditable 가 false 면 이번 주 과제 조회 api 사용
  const studyDashboard = studyDashBoardData;
  const currentAssignments = assignmentData;
  return (
    <>
      <Flex className={boxContainerStyle} gap="lg">
        {studyDashboard.isLinkEditable && (
          <>
            <RepositorySubmissionBox
              repositoryLink={studyDashboard.repositoryLink}
            />
            <AssignmentOverviewBox
              assignments={studyDashboard.submittableAssignments}
              buttonsDisabled={!studyDashboard.repositoryLink}
            />
          </>
        )}
        {!studyDashboard.isLinkEditable &&
          (currentAssignments ? (
            <AssignmentOverviewBox assignments={currentAssignments} />
          ) : (
            <EmptyAssignmentBox week={4} />
          ))}
      </Flex>
    </>
  );
};

const boxContainerStyle = css({
  overflowX: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
});
