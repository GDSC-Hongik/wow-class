import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import type { StudyWeekStatisticsApiResponseDto } from "types/dtos/studyStatistics";

import BarGraph from "./graph/BarGraph";

const StudyAssignmentRate = ({
  averageAssignmentSubmissionRate,
  totalStudent,
  studyWeekStatisticsResponses,
}: {
  averageAssignmentSubmissionRate?: number;
  totalStudent?: number;
  studyWeekStatisticsResponses?: StudyWeekStatisticsApiResponseDto[];
}) => {
  return (
    <Flex direction="column" gap="md">
      <Text className={StaticsTitleStyle} typo="h3">
        과제 제출률
      </Text>
      <Flex direction="column" gap="xs">
        <Flex alignItems="flex-start" direction="column" gap="md">
          {studyWeekStatisticsResponses?.map((data) => (
            <Flex direction="row" gap="lg" key={data.week} minWidth="340px">
              <Text className={StudyWeekStyle} color="sub" typo="body1">
                {data.week}주차
              </Text>
              <BarGraph
                isCurriculumCanceled={data.isAssignmentCanceled}
                percent={data.assignmentSubmissionRate}
                totalStudent={totalStudent}
              />
            </Flex>
          ))}
          <Flex direction="row" gap="lg">
            <Text className={StudyWeekStyle} color="sub" typo="body1">
              평균
            </Text>
            <BarGraph
              barColor="average"
              isToolTipActive={false}
              percent={averageAssignmentSubmissionRate}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StudyAssignmentRate;

const StudyWeekStyle = css({
  minWidth: "45px",
});

const StaticsTitleStyle = css({
  marginBottom: "10px",
});
