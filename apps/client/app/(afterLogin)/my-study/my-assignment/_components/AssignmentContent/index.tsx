import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import { studyDetailApi } from "apis/studyDetailApi";
import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

import { AssignmentOverviewBox } from "./AssignmentOverviewBox";
import { EmptyAssignmentBox } from "./EmptyAssignmentBox";
import { RepositorySubmissionBox } from "./RepositorySubmissionBox";

export const AssignmentContent = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyInfoData?.studyId) {
    return redirect(routePath["my-study"]);
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

  return (
    <section>
      <Flex className={boxContainerStyle} gap="lg">
        {studyDashboard.isLinkEditable && (
          <RepositorySubmissionBox
            repositoryLink={studyDashboard.repositoryLink}
          />
        )}
        <AssignmentOverviewBox
          assignments={studyDashboard.submittableAssignments}
          buttonsDisabled={!studyDashboard.repositoryLink}
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
