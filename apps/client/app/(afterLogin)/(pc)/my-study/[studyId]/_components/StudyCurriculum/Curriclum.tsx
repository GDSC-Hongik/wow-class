import { css } from "@styled-system/css";
import { Space, Text } from "@wow-class/ui";
import { studyDetailApi } from "apis/studyDetailApi";

import { CurriculumItem } from "./CurriculumItem";
import { Description } from "./Description";
import { RepositorySubmissionBox } from "./RepositorySubmissBox";

const Curriculum = async ({ studyId }: { studyId: number }) => {
  const studyDashboard = await studyDetailApi.getStudyDetailDashboard(studyId);

  if (!studyDashboard) {
    return;
  }
  return (
    <div className={containerStyle}>
      <Text as="h2" typo="h2">
        스터디 커리큘럼
      </Text>
      <Space height={10} />
      <Description />
      <Space height={50} />
      <RepositorySubmissionBox
        repositoryLink={studyDashboard.studyHistory.githubLink}
        studyId={studyId}
      />
      <Space height={50} />
      {studyDashboard.sessions.map(
        ({
          session,
          attendanceStatus,
          assignmentHistoryStatus,
          assignmentHistory,
        }) => (
          <>
            <CurriculumItem
              assignmentHistory={assignmentHistory}
              assignmentHistoryStatus={assignmentHistoryStatus}
              attendanceStatus={attendanceStatus}
              key={session.position}
              session={session}
              studyHistory={studyDashboard.studyHistory}
            />
            <Space height={50} />
          </>
        )
      )}
    </div>
  );
};

const containerStyle = css({ paddingLeft: "1rem" });

export default Curriculum;
