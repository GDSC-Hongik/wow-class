import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import type { StudyWeekStatisticsApiResponseDto } from "types/dtos/studyStatistics";

import BarGraph from "./graph/BarGraph";

const StudyAttendanceRate = ({
  averageAttendanceRate = 0,
  totalStudent,
  studyWeekStatisticsResponses,
}: {
  averageAttendanceRate?: number;
  totalStudent?: number;
  studyWeekStatisticsResponses?: StudyWeekStatisticsApiResponseDto[];
}) => {
  return (
    <Flex direction="column" gap="md">
      <Text className={StaticsTitleStyle} typo="h2">
        출석률
      </Text>
      <Flex direction="column" gap="xs">
        <Flex alignItems="flex-start" direction="column" gap="md">
          {studyWeekStatisticsResponses?.map((data) => (
            <Flex direction="row" gap="lg" key={data.week} minWidth="340px">
              <Text
                as="div"
                className={StudyWeekStyle}
                color="sub"
                typo="body1"
              >
                {data.week}주차
              </Text>
              <BarGraph
                isCurriculumCanceled={data.isCurriculumCanceled}
                percent={data.attendanceRate}
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
              percent={averageAttendanceRate}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StudyAttendanceRate;

const StudyWeekStyle = css({
  minWidth: "45px",
});

const StaticsTitleStyle = css({
  marginBottom: "10px",
});
