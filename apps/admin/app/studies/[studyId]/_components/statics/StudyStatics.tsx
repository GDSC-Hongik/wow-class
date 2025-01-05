import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";

import StudyAnalyticsGraph from "./StudyAnalyticsGraph";
import StudyCompleteRate from "./StudyCompleteRate";

const StudyStatics = async ({ studyId }: { studyId: string }) => {
  const studyStatistics = await studyApi.getStudyStatistics(
    parseInt(studyId, 10)
  );

  return (
    <section aria-label="study-statics">
      <Flex direction="column" gap="sm">
        <Text typo="h2">스터디 통계</Text>
        <Text color="sub" typo="label2">
          전체 {studyStatistics?.totalStudentCount}명, 수료 인원{" "}
          {studyStatistics?.completeStudentCount}명
        </Text>
      </Flex>
      <Space height={33} />
      <Flex alignItems="flex-start" gap="xl">
        <StudyAnalyticsGraph
          averageRate={studyStatistics?.averageAttendanceRate}
          graphTitle="출석률"
          totalStudent={studyStatistics?.totalStudentCount}
          studyWeekStatisticsResponses={
            studyStatistics?.studyWeekStatisticsResponses
          }
        />
        <StudyAnalyticsGraph
          averageRate={studyStatistics?.averageAssignmentSubmissionRate}
          graphTitle="과제 제출률"
          totalStudent={studyStatistics?.totalStudentCount}
          studyWeekStatisticsResponses={
            studyStatistics?.studyWeekStatisticsResponses
          }
        />
        <StudyCompleteRate
          studyCompleteCount={studyStatistics?.completeStudentCount}
          studyCompleteRate={studyStatistics?.studyCompleteRate}
        />
      </Flex>
      <Space height={33} />
    </section>
  );
};

export default StudyStatics;
