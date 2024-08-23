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
    <section>
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
    </section>
  );
};

const boxContainerStyle = css({
  overflowX: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
  height: "450px", //FIXME: 팝오버가 Box Container 내부로 들어가면서 짤리는 문제가 생겨 임시로 높이값 고정
});
