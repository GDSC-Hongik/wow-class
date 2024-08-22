import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import {
  assignmentData,
  studyDashBoardData,
} from "constants/assignmentMockData";

import { AssignmentOverviewBox } from "./AssignmentOverviewBox";
import { RepositorySubmissionBox } from "./RepositorySubmissionBox";
export const AssignmentContent = () => {
  //TODO:수강 중인 스터디 api 호출
  //const studyId = await myStudyApi.getMyOngoingStudyInfo();
  //const studyDashboard = await studyDetailApi.getStudyDetailDashboard(studyId);

  //TODO: studyDashboard.isLinkEditable 가 false 면 이번 주 과제 조회 api 사용
  const studyDashboard = studyDashBoardData;
  return (
    <>
      <Flex className={boxContainerStyle} gap="lg">
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

const boxContainerStyle = css({
  overflowX: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
});
