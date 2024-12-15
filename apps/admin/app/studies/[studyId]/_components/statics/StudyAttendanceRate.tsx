import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import type { StudyWeekStatisticsApiResponseDto } from "types/dtos/studyStatistics";

import BarGraph from "./graph/BarGraph";

const StudyAttendanceRate = ({
  totalStudent,
  studyWeekStatisticsResponses,
}: {
  totalStudent?: number;
  studyWeekStatisticsResponses?: StudyWeekStatisticsApiResponseDto[];
}) => {
  return (
    <Flex direction="column" gap="md">
      <Text typo="h2">출석률</Text>
      <Flex direction="column" gap="xs">
        <Text className={maxPercentLabel} color="sub" typo="label2">
          100%
        </Text>
        <Flex align="center" direction="column" gap="md">
          {studyWeekStatisticsResponses?.map((data) => (
            <Flex direction="row" gap="lg" key={data.week}>
              <Text className={studyWeekStyle} color="sub" typo="body1">
                {data.week}주차
              </Text>
              <BarGraph
                isCurriculumCanceled={data.isCurriculumCanceled}
                percent={data.attendanceRate}
                totalStudent={totalStudent}
              />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StudyAttendanceRate;

const studyWeekStyle = css({
  minWidth: "45px",
});

const maxPercentLabel = css({
  textAlign: "right",
});
