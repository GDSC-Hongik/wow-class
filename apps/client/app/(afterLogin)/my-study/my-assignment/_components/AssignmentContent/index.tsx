import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import { studyDetailApi } from "apis/studyDetailApi";

import { AssignmentOverviewBox } from "./AssignmentOverviewBox";
import { EmptyAssignmentBox } from "./EmptyAssignmentBox";
import { RepositorySubmissionBox } from "./RepositorySubmissionBox";

export const AssignmentContent = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyInfoData?.studyId) {
    return;
  }
  const studyDashboard = await studyDetailApi.getStudyDetailDashboard(
    myOngoingStudyInfoData.studyId
  );

  if (!studyDashboard) {
    return;
  }

  if (studyDashboard.submittableAssignments.length === 0) {
    return (
      <section>
        <Flex direction="column">
          <EmptyAssignmentBox />
          <Space height={64} />
        </Flex>
      </section>
    );
  }

  const isAnyFirstWeekAssignment = studyDashboard.submittableAssignments.some(
    ({ week }) => week === 1
  );
  return (
    <section>
      <Flex
        className={boxContainerStyle}
        flexDirection={isAnyFirstWeekAssignment ? "row-reverse" : "row"}
        gap="lg"
      >
        <AssignmentOverviewBox
          assignments={studyDashboard.submittableAssignments}
          buttonsDisabled={!studyDashboard.repositoryLink}
          repositoryLink={studyDashboard.repositoryLink}
        />
        <RepositorySubmissionBox
          repositoryLink={studyDashboard.repositoryLink}
        />
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
