import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import type { studyRoundStatisticsDtos } from "types/dtos/studyStatistics";

import BarGraph from "./graph/BarGraph";

const StudyAnalyticsGraph = ({
  graphTitle,
  averageRate = 0,
  totalStudent,
  studyRoundStatisticsDtos,
  isAttendanceGraph = true,
}: {
  graphTitle: string;
  averageRate?: number;
  totalStudent?: number;
  studyRoundStatisticsDtos?: studyRoundStatisticsDtos[];
  isAttendanceGraph?: boolean;
}) => {
  return (
    <Flex direction="column" gap="md">
      <Text className={staticsTitleStyle} typo="h3">
        {graphTitle}
      </Text>
      <Flex direction="column" gap="xs">
        <Flex alignItems="flex-start" direction="column" gap="md">
          {studyRoundStatisticsDtos?.map(
            ({ round, attendanceRate, assignmentSubmissionRate }) => (
              <Flex direction="row" gap="lg" key={round} minWidth="340px">
                <Text
                  as="div"
                  className={studyWeekStyle}
                  color="sub"
                  typo="body1"
                >
                  {round}회차
                </Text>
                <BarGraph
                  isCurriculumCanceled={false}
                  totalStudent={totalStudent}
                  percent={
                    isAttendanceGraph
                      ? attendanceRate
                      : assignmentSubmissionRate
                  }
                />
              </Flex>
            )
          )}
          <Flex direction="row" gap="lg">
            <Text className={studyWeekStyle} color="sub" typo="body1">
              평균
            </Text>
            <BarGraph
              barColor="average"
              isToolTipActive={false}
              percent={averageRate}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StudyAnalyticsGraph;

const studyWeekStyle = css({
  minWidth: "45px",
});

const staticsTitleStyle = css({
  marginBottom: "10px",
});
