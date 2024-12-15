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
      <Text typo="h2">과제 제출률</Text>
      <Flex direction="column" gap="xs">
        <Text className={maxPercentLabel} color="sub" typo="label2">
          100%
        </Text>
        <Flex alignItems="center" direction="column" gap="md">
          {studyWeekStatisticsResponses?.map((data) => (
            <Flex direction="row" gap="lg" key={data.week}>
              <Text className={studyWeekStyle} color="sub" typo="body1">
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
            <Text className={studyWeekStyle} color="sub" typo="body1">
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

const studyWeekStyle = css({
  minWidth: "45px",
});

const maxPercentLabel = css({
  textAlign: "right",
});
