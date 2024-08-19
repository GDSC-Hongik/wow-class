import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { parseISODate } from "@wow-class/utils";
import {
  homeworkSubmissionStatusColorMap,
  homeworkSubmissionStatusMap,
} from "constants/homeworkSubmissionStatusMap";
import type { HomeworkSubmissionStatusType } from "types/entities/myStudy";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

interface HomeworkStatusBoxProps {
  week: number;
  name: string;
  homeworkSubmissionStatus: HomeworkSubmissionStatusType;
  deadline: string;
}

const HomeworkStatusBox = ({
  week,
  name,
  homeworkSubmissionStatus,
  deadline,
}: HomeworkStatusBoxProps) => {
  const { year, month, day, hours, minutes } = parseISODate(deadline);

  const attendanceDeadline = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}까지`;

  return (
    <Box
      style={dailyTaskBoxStyle}
      text={
        <Flex
          className={dailyTaskBoxContentContainerStyle}
          direction="column"
          justifyContent="space-between"
        >
          <Flex direction="column" gap="16px">
            <Text as="div" color="primary" typo="label2">
              과제
            </Text>
            <Flex direction="column" gap="4px">
              <Flex gap="8px">
                <Text as="h2" typo="h2">
                  {week}주차 과제
                </Text>
                <Tag
                  variant="solid2"
                  color={
                    homeworkSubmissionStatusColorMap[homeworkSubmissionStatus]
                  }
                >
                  {homeworkSubmissionStatusMap[homeworkSubmissionStatus]}
                </Tag>
              </Flex>
              <Text as="div" className={homeworkNameStyle} typo="body1">
                {name}
              </Text>
              <Text as="div" color="sub" typo="body1">
                {attendanceDeadline}
              </Text>
            </Flex>
          </Flex>
          <Button
            disabled={homeworkSubmissionStatus !== "SUBMITTED"}
            size="lg"
            style={homeworkButtonStyle}
          >
            나의 과제 바로가기
          </Button>
        </Flex>
      }
    />
  );
};

export default HomeworkStatusBox;

const dailyTaskBoxStyle = {
  maxWidth: "376px",
  minWidth: "376px",
  paddingBottom: "20px",
  height: "229px",
};

const dailyTaskBoxContentContainerStyle = css({
  height: "185px",
  minWidth: "328px !important",
});

const homeworkButtonStyle = {
  minWidth: "328px",
};

const homeworkNameStyle = css({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
