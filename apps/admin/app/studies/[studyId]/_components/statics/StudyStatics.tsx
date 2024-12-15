import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";

import StudyAssignmentRate from "./StudyAssignmentRate";
import StudyAttendanceRate from "./StudyAttendanceRate";

const StudyStatics = async ({ studyId }: { studyId: string }) => {
  const studyStatistics = await studyApi.getStudyStatistics(
    parseInt(studyId, 10)
  );

  console.log(studyStatistics?.studyWeekStatisticsResponses);

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
      <Flex alignItems="center" gap="xl">
        <StudyAttendanceRate
          averageAttendanceRate={studyStatistics?.averageAttendanceRate}
          totalStudent={studyStatistics?.totalStudentCount}
          studyWeekStatisticsResponses={
            studyStatistics?.studyWeekStatisticsResponses
          }
        />
        <StudyAssignmentRate
          totalStudent={studyStatistics?.totalStudentCount}
          averageAssignmentSubmissionRate={
            studyStatistics?.averageAssignmentSubmissionRate
          }
          studyWeekStatisticsResponses={
            studyStatistics?.studyWeekStatisticsResponses
          }
        />
      </Flex>
    </section>
  );
};

export default StudyStatics;
